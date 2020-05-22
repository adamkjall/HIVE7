import firebase from 'firebase/app';

import 'firebase/auth';
import 'firebase/firestore';
import 'firebase/messaging';
import 'firebase/storage';

const firebaseConfig = {
  apiKey: process.env.REACT_APP_GOOGLE_API_KEY,
  authDomain: 'hive7-fe724.firebaseapp.com',
  databaseURL: 'https://hive7-fe724.firebaseio.com',
  projectId: 'hive7-fe724',
  storageBucket: 'hive7-fe724.appspot.com',
  messagingSenderId: '352967461305',
  appId: '1:352967461305:web:b60e95d91c66a1e8780e68',
  measurementId: 'G-ESHMZ05EVF'
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();

provider.setCustomParameters({ prompt: 'select_account' });

export const signInWithGoogle = () => auth.signInWithRedirect(provider);

// USER
export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;

  const userRef = firestore.doc(`users/${userAuth.uid}`);
  const snapshot = await userRef.get();

  if (!snapshot.exists) {
    const { displayName, email, photoURL } = userAuth;
    const createdAt = new Date();

    try {
      await userRef.set({
        id: userRef.id,
        displayName,
        email,
        createdAt,
        photoUrl: photoURL || '',
        ...additionalData
      });
    } catch (error) {
      console.log('Error creating user. ', error.message);
    }
  }

  return userRef;
};

export const updateUserProfileDocument = async (userId, additionalData) => {
  const userRef = firestore.doc(`users/${userId}`);
  const snapshot = await userRef.get();

  if (snapshot.exists) {
    const updatedUser = {
      ...snapshot.data(),
      ...additionalData
    };

    try {
      await userRef.set(updatedUser);
    } catch (error) {
      console.log('Error while updating user', error.message);
    }
  }
};

export const getUserData = async userId => {
  const userRef = firestore.doc(`users/${userId}`);
  const snapshot = await userRef.get();

  if (snapshot.exists) return await snapshot.data();
  return undefined;
};

// WALK
export const createWalkDocument = async walk => {
  const docRef = firestore.collection('walks').doc();

  docRef
    .set({ ...walk, walkId: docRef.id })
    .then(() => console.log(`walk created with id: ${docRef.id}`))
    .catch(error => console.log('Error creating walk: ', error));
};

export const deleteWalkDocument = async walkId => {
  firestore
    .collection('walks')
    .doc(walkId)
    .delete()
    .then(() => console.log('Deleted walk: ', walkId))
    .catch(error => console.log('Error while deleting walk: ', error));
};

export const getAllWalks = async () => {
  const walks = [];
  const querySnapshot = await firestore.collection('walks').get();

  querySnapshot.forEach(doc => {
    const data = doc.data();
    walks.push({
      ...data,
      createdAt: data.createdAt.toDate()
    });
  });

  return walks;
};

export const getWalk = async walkId => {
  const walkRef = await firestore.collection('walks').doc(walkId);
  const snapshot = await walkRef.get();

  if (snapshot.exists) {
    return snapshot.data();
  }

  return undefined;
};

export const bookAWalk = async (userId, walkId) => {
  firestore
    .collection('users')
    .doc(userId)
    .collection('booked')
    .doc(walkId)
    .set({ postId: walkId, userId });
  //.then(() => console.log(`${userId} booked ${walkId}`));
};

export const joinAWalk = async (userId, walkId) => {
  firestore
    .collection('walks')
    .doc(walkId)
    .update({
      attendingPeople: firebase.firestore.FieldValue.arrayUnion(userId)
    })
    .then(() => console.log(`User: ${userId} booked walk: ${walkId}`));

  firestore
    .collection('users')
    .doc(userId)
    .update({
      bookedWalks: firebase.firestore.FieldValue.arrayUnion(walkId)
    });
};

export const leaveAWalk = async (userId, walkId) => {
  firestore
    .collection('walks')
    .doc(walkId)
    .update({
      attendingPeople: firebase.firestore.FieldValue.arrayRemove(userId)
    })
    .then(() => console.log(`User: ${userId} left walk: ${walkId}`));

  firestore
    .collection('users')
    .doc(userId)
    .update({
      bookedWalks: firebase.firestore.FieldValue.arrayRemove(walkId)
    });
};

export const getBookings = async userId => {
  const bookings = [];
  const snapshot = await firestore
    .collection('users')
    .doc(userId)
    .get();

  if (snapshot.exists) {
    const bookedWalks = await snapshot.data().bookedWalks;
    if (bookedWalks) {
      bookedWalks.forEach(async walkId => {
        const walk = await getWalk(walkId);
        if (walk) bookings.push(walk);
      });
    }
    return bookings;
  }
  return bookings;
};

// Account

export const deleteUserAccount = async userId => {
  removeProfilePicture(userId);

  // remove user profile document
  await firestore
    .collection('users')
    .doc(userId)
    .delete()
    .then(() => console.log('Deleted user: ', userId))
    .catch(error => console.log('Error while deleting profile document', error));

  // remove all users walks
  await firestore
    .collection('walks')
    .where('user.id', '==', userId)
    .get()
    .then(snapshot => {
      snapshot.forEach(doc => {
        doc.ref.delete();
        console.log('Deleted walk ', doc.ref.id);
      });
    })
    .catch(err => console.log('Error while deleting walks', err));

  // leave all users booked walks
  await firestore
    .collection('walks')
    .where('attendingPeople', 'array-contains', userId)
    .get()
    .then(snapshot => {
      snapshot.forEach(doc => {
        const walkData = doc.data();
        leaveAWalk(userId, walkData.walkId);
      });
    })
    .catch(err => console.log('Error while leaving booked walks', err));

  // remove all users chats
  await firestore
    .collection('chat')
    .where('ids', 'array-contains', userId)
    .get()
    .then(snapshot => {
      snapshot.forEach(doc => {
        doc.ref.delete();
        console.log('Deleted chat', doc.ref.id);
      });
    })
    .catch(err => console.log('Error while deleting users chats', err));

  // remove user auth
  await auth.currentUser
    .delete()
    .then(() => console.log('Delete user auth'))
    .catch(err => {
      console.log('Error while deleteing user auth', err);
      throw 'User needs to reauthorize';
    });
};

export const resetPassword = async emailAddress => {
  auth.languageCode = 'swe';
  auth
    .sendPasswordResetEmail(emailAddress)
    .then(() => 'Email sent')
    .catch(err => err.message);
};
export const updatePassword = async newPassword => {
  return auth.currentUser
    .updatePassword(newPassword)
    .then(() => 'Update succesful')
    .catch(err => err.message);
};
export const updateEmail = async newEmail => {
  return auth.currentUser
    .updateEmail(newEmail)
    .then(() => 'Update succesful')
    .catch(err => err.message);
};
export const updateProfilePicture = async newPhotoUrl => {
  return auth.currentUser
    .updateProfile({ photoURL: newPhotoUrl })
    .then(() => 'Update succesful')
    .catch(err => err.message);
};

export const updateDisplayName = async newName => {
  // auth.currentUser
  //   .updateProfile({ displayName: newName })
  //   .then(() => {
  //     console.log('Update succesful', auth.currentUser);
  //   })
  //   .catch(err => err.message);

  firestore
    .collection('users')
    .doc(auth.currentUser.uid)
    .update({
      displayName: newName
    })
    .then(() => console.log('Display name changed to ', newName))
    .catch(error => console.log('Error while changing name.', error));
};

/// profile-pictures

export const storage = firebase.storage();
var storageRef = storage.ref();

const removeProfilePicture = async userId => {
  await storageRef
    .child(`profile-pictures/${userId}`)
    .delete()
    .then(() => console.log('Deleted profile picture'))
    .catch(err => console.log('Error while deleting profile picture', err));
};

export default firebase;

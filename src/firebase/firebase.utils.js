import firebase from 'firebase/app';

import 'firebase/auth';
import 'firebase/firestore';

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

export const signInWithGoogle = () => auth.signInWithPopup(provider);

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
    walks.push(data);
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
    .set({ postId: walkId, userId })
    .then(() => console.log(`${userId} booked ${walkId}`));
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

export default firebase;

import firebase from 'firebase/app';

import 'firebase/auth';
import 'firebase/firestore';
import 'firebase/messaging';

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

// MESSAGING / NOTIFCATIONS
export const messaging = firebase.messaging();

messaging.usePublicVapidKey(process.env.REACT_APP_GOOGLE_MESSAGING_KEY);

messaging
  .requestPermission()
  .then(() => {
    console.log('Have permission');
    return messaging.getToken();
  })
  .then(token => console.log('Token', token))
  .catch(err => console.log('error occured', err));

messaging.onMessage(payload => {
  const title = payload.notification.title;
  const options = {
    body: payload.notification.body,
    icon: payload.notification.icon,
    actions: [
      {
        action: payload.fcmOptions.link,
        title: 'Book Appointment'
      }
    ]
  };
  self.showNotification(title, options);
});

// USER
export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;

  const userRef = firestore.doc(`users/${userAuth.uid}`);
  const snapshot = await userRef.get();

  if (!snapshot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
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

  // const requestOptions = {
  //   method: 'POST',
  //   // mode: 'no-cors',
  //   // 'Access-Control-Allow-Origin': '*',
  //   headers: {
  //     'Content-Type': 'application/json',
  //     Authorization:
  //       'key=AAAAUi6ACbk:APA91bHWUpf5Vrof6Y_nLMqvq2oqeck1qqL2ZpTcrAUdTuCd2_uHefa4C7qThff685nCQnTDSb0rkf9cySk_aQhqGHDL7AymC2_t0mzymjbUk1GwW9fw7fvUQGb_4d0s5_qfz1_Yue_e'
  //   },
  //   project_id: 352967461305,
  //   body: JSON.stringify({
  //     operation: 'create',
  //     notification_key_name: `${docRef.id}`,
  //     registration_ids: [`${walk.user.id}`]
  //   })
  // };

  // fetch('https://fcm.googleapis.com/fcm/notification', requestOptions)
  //   .then(response => response.json())
  //   .then(console.log);
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

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

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;

  const userRef = firestore.doc(`users/${userAuth.uid}`);
  const snapshot = await userRef.get();

  if (!snapshot.exist) {
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

export const createPostDocument = async post => {
  const docRef = firestore.collection('posts').doc();

  docRef
    .set({ ...post, postId: docRef.id })
    .then(() => console.log(`Post created with id: ${docRef.id}`))
    .catch(error => console.log('Error creating post: ', error));
};

export const deletePostDocument = async postId => {
  firestore
    .collection('posts')
    .doc(postId)
    .delete()
    .then(() => console.log('Deleted post: ', postId))
    .catch(error => console.log('Error while deleting post: ', error));
};

export const getAllPosts = async () => {
  const posts = [];
  const querySnapshot = await firestore.collection('posts').get();

  querySnapshot.forEach(doc => {
    const data = doc.data();
    posts.push(data);
  });

  return posts;
};

export const bookAWalk = async (userId, postId) => {
  firestore
    .collection('users')
    .doc(`${userId}`)
    .collection('booked')
    .doc(`${postId}`)
    .set({ postId, userId })
    .then(() => console.log(`${userId} booked ${postId}`));
};

export const joinAWalk = async (userId, postId) => {
  firestore
    .collection('posts')
    .doc(`${postId}`)
    .update({
      people: firebase.firestore.FieldValue.arrayUnion(userId)
    })
    .then(() => console.log(`User: ${userId} booked walk: ${postId}`));
};

export const leaveAWalk = async (userId, postId) => {
  firestore
    .collection('posts')
    .doc(`${postId}`)
    .update({
      people: firebase.firestore.FieldValue.arrayRemove(userId)
    })
    .then(() => console.log(`User: ${userId} left walk: ${postId}`));
};

export const getBookings = async userId => {
  const bookings = [];
  const snapshot = await firestore
    .collection('users')
    .doc(userId)
    .collection('booked').get;

  snapshot.forEach(doc => bookings.push(doc.data()));

  return bookings;
};

export default firebase;

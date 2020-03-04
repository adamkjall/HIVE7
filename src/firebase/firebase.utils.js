import firebase from 'firebase/app';

import 'firebase/auth';

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

const provider = new firebase.auth.GoogleAuthProvider();

provider.setCustomParameters({ prompt: 'select_account' });

export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;

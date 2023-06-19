// Import the functions you need from the SDKs you need
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';

const firebaseConfig = {
  apiKey: 'AIzaSyDVHIS-Bl97kKpZb05XZvkh8wkDhb_9CUI',
  authDomain: 'web-olxx.firebaseapp.com',
  projectId: 'web-olxx',
  storageBucket: 'web-olxx.appspot.com',
  messagingSenderId: '573100367728',
  appId: '1:573100367728:web:cfe7566609523d29e139b5',
};

firebase.initializeApp(firebaseConfig);
// export
export const auth = firebase.auth();
export const phoneAuthProvider = new firebase.auth.PhoneAuthProvider();

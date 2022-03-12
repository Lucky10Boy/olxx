// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { GoogleAuthProvider } from 'firebase/auth';
import { getAnalytics } from 'firebase/analytics';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyCmtjuYvkICNr566vqWgjN0LF6czD8UtEo',
  authDomain: 'olxx-4fe10.firebaseapp.com',
  projectId: 'olxx-4fe10',
  storageBucket: 'olxx-4fe10.appspot.com',
  messagingSenderId: '219106246457',
  appId: '1:219106246457:web:cb4d43b72e81e0375d72e8',
  measurementId: 'G-FPT938X9PT',
};

const googleLogin = new GoogleAuthProvider();

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

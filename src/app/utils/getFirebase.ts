import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';

export const FIREBASE_CONFIG = {
  apiKey: 'AIzaSyCs-03a57DFJxepF02BSY7Se_HjQpcxKM0',
  authDomain: 'kyc-app-7db1c.firebaseapp.com',
  projectId: 'kyc-app-7db1c',
  storageBucket: 'kyc-app-7db1c.appspot.com',
  messagingSenderId: '246137619952',
  appId: '1:246137619952:web:1f60aaa5ddfc80eec98935',
  measurementId: 'G-8S1WL9DRNM',
};

const firebase = initializeApp(FIREBASE_CONFIG);
const firebaseAuth = getAuth();
export { firebase, firebaseAuth };

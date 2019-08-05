import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
  apiKey: "AIzaSyDUIGHODxxhfnF_RXiaHCoxLM2HToKjBFM",
  authDomain: "clothes-db-f09af.firebaseapp.com",
  databaseURL: "https://clothes-db-f09af.firebaseio.com",
  projectId: "clothes-db-f09af",
  storageBucket: "",
  messagingSenderId: "121237917918",
  appId: "1:121237917918:web:186f04d459ac2be4"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
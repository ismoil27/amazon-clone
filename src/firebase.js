// For Firebase JS SDK v7.20.0 and later, measurementId is optional

// import firebase from "firebase/app";
import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyB3PoSfmzE2W2gF-hICHaEdUDPMq7nmz4g",
  authDomain: "clone-39f84.firebaseapp.com",
  projectId: "clone-39f84",
  storageBucket: "clone-39f84.appspot.com",
  messagingSenderId: "152062224632",
  appId: "1:152062224632:web:923afc25fb24d49d57330d",
  measurementId: "G-Q417V8H47Y",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };

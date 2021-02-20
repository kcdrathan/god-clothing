import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyCZyw78loaxOduj34M0MUgltO70cgF-BvQ",
  authDomain: "god-db-c9000.firebaseapp.com",
  projectId: "god-db-c9000",
  storageBucket: "god-db-c9000.appspot.com",
  messagingSenderId: "475500784983",
  appId: "1:475500784983:web:d89e1ac05ecfdddcf9e212",
  measurementId: "G-PLQGLTXE9Q",
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;

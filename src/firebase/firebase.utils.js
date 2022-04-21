import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

const config = {
  apiKey: "AIzaSyCHuvFnbbfHA4OGFzxMaCeqNto9TwiUAPk",
  authDomain: "vertex-clothing.firebaseapp.com",
  projectId: "vertex-clothing",
  storageBucket: "vertex-clothing.appspot.com",
  messagingSenderId: "667687510211",
  appId: "1:667687510211:web:617a5cd4e4b032b8d04276",
  measurementId: "G-56BLCWVWSV",
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;

import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyBq2a2YQGtyZLOQDIGsu4SmqR8YlqLYcP0",
  authDomain: "online-db-f8c8a.firebaseapp.com",
  projectId: "online-db-f8c8a",
  storageBucket: "online-db-f8c8a.appspot.com",
  messagingSenderId: "53653773109",
  appId: "1:53653773109:web:fb8301808a2c835f504a7c",
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;

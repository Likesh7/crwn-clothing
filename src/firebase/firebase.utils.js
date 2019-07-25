import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyBOxfqoPg8aLeFWQluBn_v_zyo8HmIwEQY",
  authDomain: "crwn-clothing-db-d992b.firebaseapp.com",
  databaseURL: "https://crwn-clothing-db-d992b.firebaseio.com",
  projectId: "crwn-clothing-db-d992b",
  storageBucket: "",
  messagingSenderId: "138188266540",
  appId: "1:138188266540:web:29a1846dbebdb29e"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;

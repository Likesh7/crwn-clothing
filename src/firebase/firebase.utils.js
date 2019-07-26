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

export const createUserProfileDocument = async (userAuth, additionalData) => {
  // console.log("userAuth", userAuth);
  if (!userAuth) return;

  // Returns queryReference object
  // Always returns an object referring to the location in db
  const userRef = firestore.doc(`users/${userAuth.uid}`);

  // Returns snapshot object from method applied to queryReference object
  const snapShot = await userRef.get();

  console.log(snapShot);

  if (!snapShot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      await userRef.set({
        email,
        displayName,
        createdAt,
        ...additionalData
      });
    } catch (error) {
      console.log("error creating user", error.message);
    }
  }

  return userRef;
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;

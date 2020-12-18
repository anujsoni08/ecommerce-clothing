import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

let firebaseConfig = {
  apiKey: "AIzaSyDik8IOJnwdFFR2FMHqHPUnLZ0O5pBCHSQ",
  authDomain: "ecommerce-clothing-915.firebaseapp.com",
  projectId: "ecommerce-clothing-915",
  storageBucket: "ecommerce-clothing-915.appspot.com",
  messagingSenderId: "891052449061",
  appId: "1:891052449061:web:c00ce5e64319900f8b4ecc",
  measurementId: "G-YTT2RNEQQ4",
};

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;

  const userRef = firestore.doc(`users/${userAuth.uid}`);

  const snapshot = await userRef.get();

  if (!snapshot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData,
      });
    } catch (error) {
      console.log("error creating user", error.message);
    }
  }
  return userRef;
};

firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt_account: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

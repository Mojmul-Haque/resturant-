import firebase from "firebase/app";
import "firebase/auth";
import "firebase/auth";
import { firebaseConfig } from "./firebase.config";
export const firebaseItial = firebase.initializeApp(firebaseConfig);
export const googleLogin = () => {
  const provider = new firebase.auth.GoogleAuthProvider();
  return firebase
    .auth()
    .signInWithPopup(provider)
    .then((result) => result.user)
    .catch((error) => error.message);
};

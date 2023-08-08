import {
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signInWithPopup,
  updateProfile,
} from "firebase/auth";
import { firebaseAuth } from "./config";

const googleProvider = new GoogleAuthProvider();

export const signInWithGoogle = async () => {
  try {
    const result = await signInWithPopup(firebaseAuth, googleProvider);
    console.clear();
    // const credentials = GoogleAuthProvider.credentialFromResult(result);
    const { displayName, email, photoURL, uid } = result.user;

    return {
      ok: true,
      displayName,
      email,
      photoURL,
      uid,
    };
  } catch (error) {
    const errorCode = error.code;
    const errorMessage = error.message;

    return {
      ok: false,
      errorCode,
      errorMessage,
    };
  }
};

export const registerUserWithEmailAndPassword = async (email, password, displayName) => {
  try {
    const resp = await createUserWithEmailAndPassword(firebaseAuth, email, password);
    const { uid, photoURL } = resp.user;

    await updateProfile(firebaseAuth.currentUser, { displayName });

    return {
      ok: true,
      displayName,
      email,
      password,
      uid,
      photoURL,
    };
  } catch (error) {
    const errorMessage = error.message;

    return {
      ok: false,
      errorMessage,
    };
  }
};
export const loginUserWithEmailAndPassword = async (email, password) => {
  try {
    const resp = await signInWithEmailAndPassword(firebaseAuth, email, password);
    const { displayName, photoURL, uid } = resp.user;

    return {
      ok: true,
      displayName,
      email,
      uid,
      photoURL,
    };
  } catch (error) {
    const errorMessage = error.message;

    return {
      ok: false,
      errorMessage,
    };
  }
};

export const logoutFirebase = async () => {
  return await firebaseAuth.signOut();
};

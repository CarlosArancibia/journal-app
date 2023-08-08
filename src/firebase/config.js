// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore/lite";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBFyDVRgQrwG840Q9q3Zv2r7fbTIkVIyfA",
  authDomain: "curso-react-59e3c.firebaseapp.com",
  projectId: "curso-react-59e3c",
  storageBucket: "curso-react-59e3c.appspot.com",
  messagingSenderId: "942905771926",
  appId: "1:942905771926:web:c81d994855ab5563f5bfb7",
};

// Initialize Firebase
export const firebaseApp = initializeApp(firebaseConfig);
export const firebaseAuth = getAuth(firebaseApp);
export const firebaseDB = getFirestore(firebaseApp);

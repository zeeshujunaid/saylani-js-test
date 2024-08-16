// firebase.js
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.6.1/firebase-app.js";
import {
  getAuth,
  GoogleAuthProvider,
  signInWithPopup,
  RecaptchaVerifier,
  signInWithPhoneNumber,
  onAuthStateChanged ,
  signOut ,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword ,
  sendEmailVerification 
} from "https://www.gstatic.com/firebasejs/9.6.1/firebase-auth.js";


// firestore

import { doc, setDoc,getFirestore } from "https://www.gstatic.com/firebasejs/9.6.1/firebase-firestore.js";



const firebaseConfig = {
  apiKey: "AIzaSyAuxyx5uyXB__E7QSvApGqsz6iMJ0PMgis",
  authDomain: "singuplogin-e9089.firebaseapp.com",
  projectId: "singuplogin-e9089",
  storageBucket: "singuplogin-e9089.appspot.com",
  messagingSenderId: "535133171396",
  appId: "1:535133171396:web:c4cbce6a12770964fe2391",
  measurementId: "G-KY4JPKS1GX"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

export {
  auth,
  GoogleAuthProvider,
  signInWithPopup,
  RecaptchaVerifier,
  signInWithPhoneNumber,
  onAuthStateChanged ,
  signOut ,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword ,
  sendEmailVerification ,
  doc, 
  setDoc,
  db
};
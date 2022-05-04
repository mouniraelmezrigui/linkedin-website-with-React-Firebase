// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getDoc, getDocs, getFirestore, updateDoc } from 'firebase/firestore'
import { getAuth, createUserWithEmailAndPassword, 
  signInWithEmailAndPassword, onAuthStateChanged,
    signOut } from "firebase/auth";

import {
  collection,
  onSnapshot,
  doc,
  addDoc,
  deleteDoc,
  docs
} from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCk32HUr9VFPMtWWywQsQiG0kZPdJWnvtw",
  authDomain: "linkedin-clone-withreact.firebaseapp.com",
  projectId: "linkedin-clone-withreact",
  storageBucket: "linkedin-clone-withreact.appspot.com",
  messagingSenderId: "116616593916",
  appId: "1:116616593916:web:e061dc271fd465010af279"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth();
const db = getFirestore(app);

export const postCollectionRef = collection(db , 'posts')

export { db, auth }
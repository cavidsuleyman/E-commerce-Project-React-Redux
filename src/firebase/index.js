import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/storage';
import 'firebase/compat/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyCEs0AUbyt-kL0pr32w837raQm9GfUtRTk",
  authDomain: "ecommerce-project-90b47.firebaseapp.com",
  projectId: "ecommerce-project-90b47",
  storageBucket: "ecommerce-project-90b47.appspot.com",
  messagingSenderId: "495520517309",
  appId: "1:495520517309:web:fa7fe4e84c46c1b8a0fbd4",
  measurementId: "G-RZ5L1BGLLQ"
};


firebase.initializeApp(firebaseConfig);
export const auth = firebase.auth();
export const storage = firebase.storage();
export const firestore = firebase.firestore();
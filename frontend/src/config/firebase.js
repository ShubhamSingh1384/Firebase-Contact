// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getFirestore} from 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA45NphYy2a737X3Yk1KVQUrzvuvTbIlP4",
  authDomain: "vite-contact-2bb3f.firebaseapp.com",
  projectId: "vite-contact-2bb3f",
  storageBucket: "vite-contact-2bb3f.appspot.com",
  messagingSenderId: "1007503636192",
  appId: "1:1007503636192:web:5a7ce8093430bc6b630285",
  measurementId: "G-NLPJDKYT21"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
export const db = getFirestore(app);
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

import {getAuth} from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB8xpG8r9E8Sr4it2OWHLxnCIO7ii_uaUU",
  authDomain: "aulamobile2025.firebaseapp.com",
  projectId: "aulamobile2025",
  storageBucket: "aulamobile2025.firebasestorage.app",
  messagingSenderId: "745457606355",
  appId: "1:745457606355:web:57de6f207934c468b0fe26"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore(app);
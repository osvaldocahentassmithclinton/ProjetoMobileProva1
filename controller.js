import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAfzgcdtzb1KxqtFfBRY0wo5fBGvisVJIE",
  authDomain: "pegasus-ef67c.firebaseapp.com",
  projectId: "pegasus-ef67c",
  storageBucket: "pegasus-ef67c.firebasestorage.app",
  messagingSenderId: "549008704577",
  appId: "1:549008704577:web:4d02f9c1ccc4ce0d6e32c0"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
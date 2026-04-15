
import { initializeApp, getApp,getApps} from "firebase/app";
import { getAuth } from "firebase-admin/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBVQ594OSW0XduEEcFTDF15oINr5Jv15tw",
  authDomain: "ai-mock-interview-30fe4.firebaseapp.com",
  projectId: "ai-mock-interview-30fe4",
  storageBucket: "ai-mock-interview-30fe4.firebasestorage.app",
  messagingSenderId: "213652579531",
  appId: "1:213652579531:web:432a182a51c167e41e274e",
  measurementId: "G-Y9W88822C8"
};

// Initialize Firebase
const app = !getApps.length ? initializeApp(firebaseConfig) : getApp();
export const auth = getAuth();
export const db = getFirestore(app);
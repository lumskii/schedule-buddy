import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: import.meta.env.VITE_FB_API,
    authDomain: "schedulebuddy2025.firebaseapp.com",
    projectId: "schedulebuddy2025",
    storageBucket: "schedulebuddy2025.firebasestorage.app",
    messagingSenderId: "921488906688",
    appId: "1:921488906688:web:039b39f4eb1cbd27329025"
  };  
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();
export const db = getFirestore(app);

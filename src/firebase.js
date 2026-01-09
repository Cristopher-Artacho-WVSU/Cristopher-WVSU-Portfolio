// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getApps } from "firebase/app";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBQmnkbg4WY4UrQ5MoAYu7L9CzFNZ0BsY0",
  authDomain: "portfolio-cristopherwvsu.firebaseapp.com",
  projectId: "portfolio-cristopherwvsu",
  storageBucket: "portfolio-cristopherwvsu.firebasestorage.app",
  messagingSenderId: "749490145659",
  appId: "1:749490145659:web:92250937cb55e1dd8f95de"
};

const test = console.log("Firebase apps:", getApps());
// Initialize Firebase
const app = initializeApp(firebaseConfig);
// 🔥 THIS LINE IS CRITICAL
export const db = getFirestore(app);
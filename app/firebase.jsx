// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC1DGe42qoEzG8x7fTt3n8LWsvQsDu2bV4",
  authDomain: "pharmacist-6950a.firebaseapp.com",
  projectId: "pharmacist-6950a",
  storageBucket: "pharmacist-6950a.firebasestorage.app",
  messagingSenderId: "683585390127",
  appId: "1:683585390127:web:40c880ce4bccfe2e2668da"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)


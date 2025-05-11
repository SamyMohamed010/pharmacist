// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyACV9V_aV-WoChzF3eJVhLugw7vMkMySxs",
  authDomain: "pharmacist-df574.firebaseapp.com",
  projectId: "pharmacist-df574",
  storageBucket: "pharmacist-df574.firebasestorage.app",
  messagingSenderId: "625857281889",
  appId: "1:625857281889:web:0400acbd9deaf1b4de4f20"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)
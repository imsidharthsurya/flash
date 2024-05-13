// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB3ZD9cDtoToOyu6ZrX0WUaf_oP-RDBV04",
  authDomain: "flash-6dbc5.firebaseapp.com",
  projectId: "flash-6dbc5",
  storageBucket: "flash-6dbc5.appspot.com",
  messagingSenderId: "87343394900",
  appId: "1:87343394900:web:99b2cf75918a7fbb0bfdc1"
};

// Initialize Firebase
// console.log("Initializing Firebase app...");
const app = initializeApp(firebaseConfig);
// console.log("Firebase app initialized successfully.", app);

export const auth=getAuth();
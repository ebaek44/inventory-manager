// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from 'firebase/firestore'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC3pHFS23ThyGjxSgHZKIs5q6OXckFhcwk",
  authDomain: "inventory-management-b0002.firebaseapp.com",
  projectId: "inventory-management-b0002",
  storageBucket: "inventory-management-b0002.appspot.com",
  messagingSenderId: "457177860114",
  appId: "1:457177860114:web:3e82a7a08e47c5815170cb",
  measurementId: "G-B2DZT1E28N"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const firestore = getFirestore(app)

export {firestore}
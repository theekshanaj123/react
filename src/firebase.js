// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBmQCyRXVMeVRWK440QwJ-8TlGcLSkMfAY",
  authDomain: "react-app-86aef.firebaseapp.com",
  projectId: "react-app-86aef",
  storageBucket: "react-app-86aef.appspot.com",
  messagingSenderId: "348986710001",
  appId: "1:348986710001:web:bfa3012d8eeaf5d08b9650",
  measurementId: "G-85ZJB5G8NF"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);
export const db = getFirestore(app);

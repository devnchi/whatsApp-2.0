// Import the functions you need from the SDKs you need
import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import 'firebase/compat/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDyJDmxUNW6hHQ7qa6GLuc-rLh7GU5T3sQ",
  authDomain: "whatsapp-7e68a.firebaseapp.com",
  projectId: "whatsapp-7e68a",
  storageBucket: "whatsapp-7e68a.appspot.com",
  messagingSenderId: "223514897253",
  appId: "1:223514897253:web:92090cf823cfcaff724f8c",
  measurementId: "G-4C3M594ENR"
};

// Initialize Firebase
const app = (!firebase.apps.length)
    ? firebase.initializeApp(firebaseConfig) 
    : firebase.app();

const db = app.firestore();
const auth = app.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { db, auth, provider };
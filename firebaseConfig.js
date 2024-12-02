// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut, onAuthStateChanged } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBTS3K39CDtp7tbMAkjiqF4QtUqlmJhAzQ",
  authDomain: "login-test-4c4da.firebaseapp.com",
  projectId: "login-test-4c4da",
  storageBucket: "login-test-4c4da.firebasestorage.app",
  messagingSenderId: "282824111111",
  appId: "1:282824111111:web:b0fa5f07068ece6c5f26a2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export { auth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut, onAuthStateChanged };

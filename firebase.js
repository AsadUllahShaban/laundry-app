// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyABHPiLFB_r2AqDyVa6y29ZsnBtHQ8_TEQ",
  authDomain: "laundry-app-sr.firebaseapp.com",
  projectId: "laundry-app-sr",
  storageBucket: "laundry-app-sr.appspot.com",
  messagingSenderId: "624037413489",
  appId: "1:624037413489:web:6690f5d7acba40395b11d0",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

const db = getFirestore();

export { auth, db };

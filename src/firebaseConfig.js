// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCVmuprQp0AXArYRJo8DC9vwPVKon5wRJc",
  authDomain: "restrogurudemo.firebaseapp.com",
  projectId: "restrogurudemo",
  storageBucket: "restrogurudemo.appspot.com",
  messagingSenderId: "917760413952",
  appId: "1:917760413952:web:e7fafcdc70cc3380e1a3e5",
  measurementId: "G-PHPJ1VRNCH",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const db = getFirestore(app);

export { app, analytics, db };

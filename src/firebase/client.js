// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyARhcgDzsotfJBweEnbxeQYJ0pIoVB--lQ",
  authDomain: "http://ecommerce-chiara-app.firebaseapp.com",
  projectId: "ecommerce-chiara-app",
  storageBucket: "http://ecommerce-chiara-app.appspot.com",
  messagingSenderId: "442719042023",
  appId: "1:442719042023:web:d2290bb42a8ebe232de542"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)
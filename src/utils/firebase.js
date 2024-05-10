// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDXPQl9J_SUeobqh39mtCQb1KhRI-PwxdE",
  authDomain: "netflifgpt-2c734.firebaseapp.com",
  projectId: "netflifgpt-2c734",
  storageBucket: "netflifgpt-2c734.appspot.com",
  messagingSenderId: "623622957142",
  appId: "1:623622957142:web:0f86bb7186cbdcfba0b3f7",
  measurementId: "G-9CRYTE056D"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();

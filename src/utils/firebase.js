// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAT3KpF78tkA_qHUebsELNNQrT9pbM6I6w",
  authDomain: "website-netflix-2de5c.firebaseapp.com",
  projectId: "website-netflix-2de5c",
  storageBucket: "website-netflix-2de5c.appspot.com",
  messagingSenderId: "865624090475",
  appId: "1:865624090475:web:452226b2640553d4660e2e"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyALIGMkm8vHk94myAPMVsspleV9LAVFzjc",
  authDomain: "facedetection-eacd9.firebaseapp.com",
  projectId: "facedetection-eacd9",
  storageBucket: "facedetection-eacd9.firebasestorage.app",
  messagingSenderId: "779660708791",
  appId: "1:779660708791:web:41497d18be593ebe95b632",
  measurementId: "G-PF6P3887PP"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);


// Declarar `analytics` de manera segura
let analytics;

if (typeof window !== "undefined") {
  analytics = getAnalytics(app);
}

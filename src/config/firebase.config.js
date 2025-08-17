// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyBDFmnJkzsi3l5a0wVE8hyuId67JBLpJKE",
  authDomain: "scriptly-49ae4.firebaseapp.com",
  projectId: "scriptly-49ae4",
  storageBucket: "scriptly-49ae4.firebasestorage.app",
  messagingSenderId: "688261450160",
  appId: "1:688261450160:web:57b5d03c4628578b18ee75",
  measurementId: "G-908XX48KTG"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
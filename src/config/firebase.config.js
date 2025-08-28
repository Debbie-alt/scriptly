// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFunctions } from 'firebase/functions'; 
import { getAI, getGenerativeModel, GoogleAIBackend } from "firebase/ai"

import { getAuth } from "firebase/auth";



const firebaseConfig = {
  apiKey: "AIzaSyBDFmnJkzsi3l5a0wVE8hyuId67JBLpJKE",
  authDomain: "scriptly-49ae4.firebaseapp.com",
  projectId: "scriptly-49ae4",
  storageBucket: "scriptly-49ae4.firebasestorage.app",
  messagingSenderId: "688261450160",
  appId: "1:688261450160:web:57b5d03c4628578b18ee75",
  measurementId: "G-908XX48KTG"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);

const ai = getAI(app, { backend: new GoogleAIBackend() });

// Create a `GenerativeModel` instance with a model that supports your use case
export const model = getGenerativeModel(ai, { model: "gemini-2.5-flash" });


async function run() {
  const prompt = "Write a story about a magic backpack."

  const result = await model.generateContent(prompt);

  const response = result.response;
  const text = response.text();

}

run();


export { app };
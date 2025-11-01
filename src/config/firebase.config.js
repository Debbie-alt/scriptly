import { initializeApp } from "firebase/app";
import { getFunctions } from 'firebase/functions'; 
import { getAI, getGenerativeModel, GoogleAIBackend } from "firebase/ai"

import { getAuth } from "firebase/auth";



const firebaseConfig = {
  apiKey: process.env.FIREBASE_API_KEY,
  authDomain: process.env.FIREBASE_AUTH_DOMAIN,
  projectId: process.env.FIREBASE_PROJECT_ID,
  storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.FIREBASE_APP_ID,
  measurementId: process.env.FIREBASE_MEASUREMENT_ID
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);

const ai = getAI(app, { backend: new GoogleAIBackend() });

export const model = getGenerativeModel(ai, { model: "gemini-2.5-flash" });


async function run() {
  const prompt = "Write a story about a magic backpack."

  const result = await model.generateContent(prompt);

  const response = result.response;
  const text = response.text();

}

run();


export { app };
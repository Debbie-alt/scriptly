// // lib/geminiSpeech.ts
// // import { GoogleGenerativeAI } from "@google/generative-ai";
// import fs from "fs";

// const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY!);

// type InputProps = {
//   text?: string;
//   audioFilePath?: string; // path on the server (not browser File object)
//   mimeType?: string;
// };

// export async function processInput({ text, audioFilePath, mimeType }: InputProps) {
//   try {
//     const model = genAI.getGenerativeModel({ model: "gemini-1.5-pro" });

//     // Case 1: Handle text input
//     if (text && !audioFilePath) {
//       const result = await model.generateContent(text);
//       return result.response.text();
//     }

//     // Case 2: Handle audio input
//     if (audioFilePath) {
//       const buffer = fs.readFileSync(audioFilePath);
//       const audioBase64 = buffer.toString("base64");

//       const result = await model.generateContent([
//         {
//           role: "user",
//           parts: [
//             {
//               inlineData: {
//                 mimeType: mimeType ?? "audio/wav",
//                 data: audioBase64,
//               },
//             },
//           ],
//         },
//       ]);

//       return result.response.text(); // transcription
//     }

//     throw new Error("No input provided.");
//   } catch (error) {
//     console.error("Error processing input:", error);
//     throw error;
//   }
// }

// // functions/src/flows/chatbot.ts
// import { defineFlow } from "@genkit-ai/flow";
// import { gemini15Flash } from "@genkit-ai/firebase";
// impor

// export const chatFlow = defineFlow(
//   {
//     name: "chatFlow",
//     inputSchema: { message: "string" },
//     outputSchema: { reply: "string" },
//   },
//   async (input) => {
//     const response = await gemini15Flash.generate({
//       contents: [
//         {
//           role: "user",
//           parts: [{ text: input.message }],
//         },
//       ],
//     });

//     return { reply: response.outputText ?? "No reply" };
//   }
// );

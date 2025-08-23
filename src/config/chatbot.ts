export async function getChatResponse(message: string): Promise<string> {
  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_FIREBASE_FUNCTIONS_URL}/chatbot`,
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ message }),
      }
    );

    if (!res.ok) throw new Error("Chatbot API call failed");

    const data = await res.json();
    return data.reply;
  } catch (err) {
    console.error("Chatbot error:", err);
    return "⚠️ Sorry, something went wrong. Try again later.";
  }
}

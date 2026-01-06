import { NextResponse } from "next/server";
import { model } from "@/config/firebase.config";

export async function POST(req: Request) {
  try {
    const { message } = await req.json();

    if (!message) {
      return NextResponse.json(
        { text: "Please provide a message." },
        { status: 400 }
      );
    }

    const result = await model.generateContent(message);
    const text = result.response.text();

    return NextResponse.json({ text });
  } catch (error) {
    console.error("Chat API error:", error);

    return NextResponse.json(
      { text: "⚠️ Daily AI request limit reached. Please try again later." },
      { status: 500 }
    );
  }
}

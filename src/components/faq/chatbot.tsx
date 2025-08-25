"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MessageCircle, X, SendHorizontal } from "lucide-react";
import { getChatResponse } from "@/config/chatbot";
import { AiFillMessage } from "react-icons/ai";


const faqs: { q: string; a: string; keywords: string[] }[] = [
  {
    q: "How do I use the Summarizer?",
    a: "Go to the Summarizer page, paste or type your text, and Scriptly will instantly generate a concise summary for you.",
    keywords: ["summarizer", "summary", "summarize"],
  },
  {
    q: "How does the Proofreader work?",
    a: "Paste your text into the Proofreader tool and it will highlight grammar, spelling, and style improvements.",
    keywords: ["proofreader", "proofread", "grammar", "spelling"],
  },
  {
    q: "Can I convert text to speech?",
    a: "Yes! Use the Text-to-Speech tool, paste your content, and download the audio in your preferred voice style.",
    keywords: ["speech", "voice", "text to speech", "tts"],
  },
  {
    q: "What is the Chatbot for?",
    a: "The FAQ Chatbot helps you quickly find answers about Scriptly tools and guides you on how to use them effectively.",
    keywords: ["chatbot", "faq", "help"],
  },
];


type ChatMessage = { role: "user" | "bot"; text: string; time: string };

export default function ChatbotWidget() {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);

  // 👉 Helper for time
  const getCurrentTime = () => {
    const now = new Date();
    return now.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" });
  };

  useEffect(() => {
    if (open && messages.length === 0) {
      setMessages([
        { role: "bot", text: "👋 Hi there! How can we help you today?", time: getCurrentTime() },
      ]);
    }
  }, [open]);

  const sendMessage = async () => {
    if (!input.trim()) return;

    const userMsg: ChatMessage = { role: "user", text: input, time: getCurrentTime() };
    setMessages((prev) => [...prev, userMsg]);
    setInput("");
    setLoading(true);

    try {
    const faqMatch = faqs.find((f) =>
  f.keywords.some((kw) => input.toLowerCase().includes(kw))
);

let reply: string;
if (faqMatch) {
  reply = faqMatch.a;
} else {
  reply = await getChatResponse(input);
}

      const botMsg: ChatMessage = { role: "bot", text: reply, time: getCurrentTime() };
      setMessages((prev) => [...prev, botMsg]);
    } catch (err) {
      console.error(err);
      setMessages((prev) => [
        { role: "bot", text: "❌ Error fetching response", time: getCurrentTime() },
      ]);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="fixed bottom-4 left-4 z-60">
      {/* Toggle Button */}
     <button
  onClick={() => setOpen(!open)}
  className={`${
    open ? "bg-[#505081] hover:bg-gray-900" : "bg-[#505081] hover:bg-purple-950"
  } text-white p-2 rounded-full shadow-lg`}
>
        {open ? <X className="w-6 h-6" /> : <AiFillMessage className="w-5 h-5" />}
      </button>

      {/* Chat Window */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: 40, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 40, scale: 0.9 }}
            transition={{ duration: 0.3 }}
            className="mt-3  max-w-[85vw] sm:w-fit sm:max-w-[550px] h-[500px] bg-white rounded-2xl shadow-2xl border border-purple-200 flex flex-col overflow-hidden"
          >
            {/* Header */}
            <div className="bg-black text-white px-4 py-5 flex items-center gap-3 shadow-md">
              {/* Avatar */}
              <img
                src="https://i.pravatar.cc/50?img=32"
                alt="Assistant"
                className="w-10 h-10 rounded-full border-2 border-white"
              />
              {/* Text */}
              <div className="flex flex-col">
                <span className="font-bold text-lg">How can I help you?</span>
                <span className="text-xs text-purple-100">
                  Ask Zara anything about Scriptly tools 🚀
                </span>
              </div>
            </div>

            {/* Messages */}
            <div className="flex-1 overflow-y-auto p-3 space-y-2">
              {messages.map((m, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: m.role === "user" ? 40 : -40 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.25 }}
                  className={`p-2 rounded-lg w-fit max-w-[80%] ${
                    m.role === "user"
                      ? "ml-auto bg-purple-100 text-purple-900"
                      : "mr-auto bg-gray-100 text-gray-800"
                  }`}
                >
                  <p className="text-sm">{m.text}</p>
                  <span className="block text-[10px] text-gray-500 mt-1 text-right">
                    {m.time}
                  </span>
                </motion.div>
              ))}
              {loading && <p className="text-sm text-gray-500">Thinking...</p>}
            </div>

            {/* Input */}
            <form className="p-3 border-t shadow-lg flex gap-2" onSubmit={(e) => { e.preventDefault(); sendMessage(); }}>
              <input
                className="flex-1 border rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring focus:ring-purple-300"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Ask a question..."
              />
              <button
                onClick={sendMessage}
                className="text-purple-800 hover:bg-purple-800 hover:text-white px-2 py-2 rounded-lg text-sm flex items-center justify-center"
              >
                <SendHorizontal className="w-6 h-5" />
              </button>
            </form>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

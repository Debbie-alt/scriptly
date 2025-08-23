"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MessageCircle, X, Send } from "lucide-react";
import { getChatResponse } from "@/config/chatbot"; // <-- Gemini Firebase call

export default function ChatbotWidget() {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState<{ role: "user" | "bot"; text: string }[]>([]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);

  const sendMessage = async () => {
    if (!input.trim()) return;
    const userMsg = { role: "user" as const, text: input };
    setMessages((prev) => [...prev, userMsg]);
    setInput("");
    setLoading(true);

    try {
      const botReply = await getChatResponse(input); // 🔗 your Gemini call
      setMessages((prev) => [...prev, { role: "bot", text: botReply }]);
    } catch (err) {
      console.error(err);
      setMessages((prev) => [...prev, { role: "bot", text: "⚠️ Something went wrong. Try again." }]);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      {/* Floating button */}
      <button
        onClick={() => setOpen(!open)}
        className="fixed bottom-6 right-6 w-14 h-14 rounded-full bg-gradient-to-br from-purple-600 to-purple-800 text-white shadow-lg flex items-center justify-center hover:scale-110 transition"
      >
        {open ? <X className="w-6 h-6" /> : <MessageCircle className="w-6 h-6" />}
      </button>

      {/* Chat Modal */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 30 }}
            className="fixed bottom-24 right-6 w-80 md:w-96 h-[28rem] bg-white rounded-2xl shadow-2xl border border-purple-200 flex flex-col overflow-hidden"
          >
            {/* Header */}
            <div className="p-4 bg-gradient-to-r from-purple-700 to-purple-900 text-white font-semibold">
              Scriptly Assistant 🤖
            </div>

            {/* Messages */}
            <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-purple-50/30">
              {messages.map((msg, i) => (
                <div
                  key={i}
                  className={`max-w-[80%] p-3 rounded-xl text-sm leading-relaxed ${
                    msg.role === "user"
                      ? "ml-auto bg-purple-600 text-white"
                      : "bg-white border border-purple-100 shadow"
                  }`}
                >
                  {msg.text}
                </div>
              ))}
              {loading && (
                <div className="bg-white border border-purple-100 shadow p-3 rounded-xl text-sm w-fit">
                  Thinking...
                </div>
              )}
            </div>

            {/* Input */}
            <div className="p-3 border-t flex gap-2 bg-white">
              <input
                type="text"
                className="flex-1 px-3 py-2 text-sm border rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-400"
                placeholder="Ask me anything..."
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={(e) => e.key === "Enter" && sendMessage()}
              />
              <button
                onClick={sendMessage}
                disabled={loading}
                className="px-3 py-2 bg-purple-700 text-white rounded-lg hover:bg-purple-800 disabled:opacity-50"
              >
                <Send className="w-4 h-4" />
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

"use client";

import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useState } from "react";

const tools = [
  {
    name: "AI Proofreader",
    description: "Polish your text with advanced proofreading powered by AI.",
    image: "/images/proofreader.png",
  },
  {
    name: "Text Generator",
    description: "Generate engaging blog posts, essays, and more instantly.",
    image: "/images/text-generator.png",
  },
  {
    name: "Chatbot",
    description: "A smart FAQ chatbot to answer your questions anytime.",
    image: "/images/chatbot.png",
  },
  {
    name: "Text-to-Speech",
    description: "Convert your text into natural-sounding voices.",
    image: "/images/text-to-speech.png",
  },
];

export default function ToolsCarousel() {
  const [index, setIndex] = useState(0);

  const prevSlide = () => {
    setIndex((prev) => (prev === 0 ? tools.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setIndex((prev) => (prev === tools.length - 1 ? 0 : prev + 1));
  };

  return (
    <section className="py-16 bg-black text-white relative">
      <h2 className="text-3xl font-bold text-center mb-8">Explore Our Tools</h2>

      <div className="relative max-w-4xl mx-auto overflow-hidden">
        <motion.div
          key={index}
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -50 }}
          transition={{ duration: 0.5 }}
          className="flex flex-col items-center text-center p-6 bg-gray-900/60 rounded-2xl shadow-lg"
        >
          <img
            src={tools[index].image}
            alt={tools[index].name}
            className="w-40 h-40 object-contain mb-4"
          />
          <h3 className="text-2xl font-semibold">{tools[index].name}</h3>
          <p className="text-gray-300 mt-2">{tools[index].description}</p>
        </motion.div>

        {/* Navigation */}
        <button
          onClick={prevSlide}
          className="absolute top-1/2 left-0 -translate-y-1/2 p-2 bg-gray-800 rounded-full"
        >
          <ChevronLeft />
        </button>
        <button
          onClick={nextSlide}
          className="absolute top-1/2 right-0 -translate-y-1/2 p-2 bg-gray-800 rounded-full"
        >
          <ChevronRight />
        </button>
      </div>
    </section>
  );
}

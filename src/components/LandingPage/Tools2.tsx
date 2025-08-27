"use client";

import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useState } from "react";

const tools = [
  {
    name: "AI Proofreader",
    description: "Polish your text with advanced proofreading powered by AI.",
    image: "/proof.png",
  },
  {
    name: "Text Generator",
    description: "Generate engaging blog posts, essays, and more instantly.",
    image: "/text-gen.png",
  },
  {
    name: "Chatbot",
    description: "A smart FAQ chatbot to answer your questions anytime.",
    image: "/chatbot1.png",
  },
  {
    name: "PLagiarism Checker",
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
    <section className="py-16 bg-[#272757] text-white relative"   style={{
        backgroundImage:
          "linear-gradient(to left, rgba(0,0,0,0.7) 60%, rgba(0,0,0,0.2) 100%, rgba(0,0,0,0)), url('/partner-hero.jpg')"
      }}>
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
            className=" object-contain mb-4"
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

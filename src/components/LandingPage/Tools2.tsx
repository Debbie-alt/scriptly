"use client";

import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useState } from "react";

const tools = [
    {
    name: "Chatbot",
    description: "A smart FAQ chatbot to answer your questions anytime.",
    image: "/chatbot1.png",
  },
    {
    name: "Text Generator",
    description: "Generate engaging blog posts, essays, and more instantly.",
    image: "/text-gen.png",
  },
  {
    name: "AI Proofreader",
    description: "Polish your text with advanced proofreading powered by AI.",
    image: "/proof.png",
  },


  {
    name: "Plagiarism Checker",
    description: "Ensure originality with a reliable AI plagiarism checker.",
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
    <section
      className="py-16 relative bg-gradient-to-br from-white via-[#f9f8ff] to-white"
    >
      <h2 className="text-4xl fmd:text-5xl ont-medium text-center mb-10 text-gray-900">
        Explore Our Tools
      </h2>

      <div className="relative max-w-5xl mx-auto overflow-hidden">
        <motion.div
          key={index}
          initial={{ opacity: 0, x: 50, scale: 0.95 }}
          animate={{ opacity: 1, x: 0, scale: 1 }}
          exit={{ opacity: 0, x: -50 }}
          transition={{ duration: 0.5 }}
          className="flex flex-col items-center text-center p-8 
                      rounded-2xl shadow-xl border "
        >
          <img
            src={tools[index].image}
            alt={tools[index].name}
            className="object-contain mb-6  drop-shadow-lg"
          />
          <h3 className="text-2xl font-semibold text-gray-900">
            {tools[index].name}
          </h3>
          <p className="text-gray-600 mt-3 max-w-md">{tools[index].description}</p>
        </motion.div>

        {/* Navigation */}
        <button
          onClick={prevSlide}
          className="absolute top-1/2 left-0 -translate-y-1/2 p-1 sm:p-3 
                     bg-[#505081] text-white rounded-full shadow-lg 
                    transition transform hover:scale-105"
        >
          <ChevronLeft className="text-xs sm:text-base"/>
        </button>
        <button
          onClick={nextSlide}
          className="absolute top-1/2 right-0 -translate-y-1/2 p-1  sm:p-3
                     bg-[#505081] text-white rounded-full shadow-lg 
                      transition transform hover:scale-105"
        >
          <ChevronRight className="text-xs sm:text-base"/>
        </button>
      </div>
    </section>
  );
}

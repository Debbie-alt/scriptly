"use client";

import { useState } from "react";
import { FiChevronDown, FiChevronUp } from "react-icons/fi";

interface FaqItem {
  question: string;
  answer: string;
}

const faqData: FaqItem[] = [
  {
    question: "What makes Kota different to brokers or other platforms",
    answer:
      "Kota offers a streamlined benefits platform with better pricing, flexibility, and no long-term contracts.",
  },
  {
    question: "How much does Kota charge",
    answer:
      "Pricing is transparent and depends on your company's specific needs.",
  },
  {
    question: "What if I already have a benefits scheme in place?",
    answer:
      "Kota can integrate or replace your existing benefits without disrupting your team.",
  },
  {
    question: "Do I need another broker?",
    answer: "No. Kota replaces the need for a traditional broker.",
  },
  {
    question: "Do I have to sign a long contract?",
    answer: "Absolutely not. Kota offers flexible month-to-month agreements.",
  },
  {
    question: "Is my data safe?",
    answer:
      "Yes. We follow strict data protection and security measures.",
  },
];

export default function Faq() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="w-full py-16 bg-white">
      <div className="max-w-6xl mx-auto px-6 md:px-12 grid md:grid-cols-2 gap-12 items-center">
        {/* Left Section */}
        <div>
          <span className="text-sm uppercase bg-gray-100 px-3 py-1 rounded-full font-medium">
            FAQ
          </span>
          <h2 className="text-4xl font-bold mt-4 leading-snug">
           Answers to your Questions..
          </h2>
          <button className="mt-6 px-5 py-3 bg-white border border-gray-300 rounded-full text-gray-700 shadow-sm hover:shadow-md transition">
            Talk to us
          </button>

          <div className="mt-12 relative">
            <div className="absolute -left-14 top-0 w-72 h-72 bg-purple-100  blur-xl opacity-80 rounded-full"></div>
            <div className="w-28 h-28 rounded-full bg-gradient-to-br from-[#0f0e47] to-[8686ac] relative z-10 "></div>
          </div>
        </div>

        {/* Right Section - Accordion */}
        <div className="space-y-4">
          {faqData.map((faq, index) => (
            <div key={index} className="bg-purple-50 rounded-xl overflow-hidden transition-opacity transition-all ease-in-out duration-500 ">
              <button
                onClick={() =>
                  setOpenIndex(openIndex === index ? null : index)
                }
                className="w-full flex gap-5 items-center p-4 text-left font-medium"
              >
               
                {openIndex === index ? (
                  <div className="flex bg-gray-900 rounded-full items-center justify-center p-1 ">                  
                    <FiChevronUp className="w-4 h-4 text-white" />
                </div>
                ) : (
                                    <div className="flex bg-gray-900 rounded-full items-center justify-center p-1">                  
                  <FiChevronDown className="w-4 h-4 text-white"  />
                  </div>
                )}
                 {faq.question}
              </button>
              {openIndex === index && (
                <div className="px-4 pb-4 text-gray-600">{faq.answer}</div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

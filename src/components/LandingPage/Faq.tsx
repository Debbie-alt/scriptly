"use client";

import { useState } from "react";
import { FiChevronDown, FiChevronUp } from "react-icons/fi";

interface FaqItem {
  question: string;
  answer: string;
}

const faqData: FaqItem[] = [
  {
    question: "What services does Scriptly offer?",
    answer:
      "Scriptly provides custom essay writing, assignment help, research papers, editing, proofreading, and academic consulting for students at all levels.",
  },
  {
    question: "Are Scriptly's essays plagiarism-free?",
    answer:
      "Absolutely. Every essay and assignment is written from scratch and checked with advanced plagiarism detection tools.",
  },
  {
    question: "How fast can I get my essay or assignment?",
    answer:
      "We offer flexible delivery options, including urgent same-day and next-day delivery for tight deadlines.",
  },
  {
    question: "Who are the writers at Scriptly?",
    answer:
      "Our writers are experienced professionals with academic backgrounds in various fields, ensuring subject-matter expertise for your work.",
  },
  {
    question: "Can I communicate with my assigned writer?",
    answer:
      "Yes, Scriptly allows direct communication with your writer for clarifications and updates throughout the process.",
  },
  {
    question: "What if I need revisions?",
    answer:
      "We offer free revisions within a specified period to ensure your satisfaction with the delivered work.",
  },
  {
    question: "Is my information confidential?",
    answer:
      "Your privacy is our priority. All personal and order details are kept strictly confidential and secure.",
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
            <div className="absolute -left-14 top-0 w-72 h-72 bg-purple-100 blur-xl opacity-80 rounded-full"></div>
            <div className="w-28 h-28 rounded-full bg-gradient-to-br from-[#0f0e47] to-[8686ac] relative z-10 "></div>
          </div>
        </div>

        {/* Right Section - Accordion */}
        <div className="space-y-4">
          {faqData.map((faq, index) => (
            <div
              key={index}
              className="bg-purple-50 rounded-xl overflow-hidden transition-all duration-300"
            >
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
                    <FiChevronDown className="w-4 h-4 text-white" />
                  </div>
                )}
                {faq.question}
              </button>

              <div
                className={`transition-all duration-200 ease-in-out overflow-hidden ${
                  openIndex === index ? "max-h-40 opacity-100" : "max-h-0 opacity-50"
                }`}
              >
                <div className="px-4 pb-4 text-gray-600">{faq.answer}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

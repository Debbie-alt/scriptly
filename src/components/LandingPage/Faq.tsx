"use client";

import { useState, useEffect } from "react";
import { FiChevronDown, FiChevronUp } from "react-icons/fi";
import AOS from "aos";
import "aos/dist/aos.css";

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

  useEffect(() => {
    AOS.init({
      duration: 800,
      once: true,
      easing: "ease-in-out",
    });
  }, []);

  return (
    <section className="w-full py-16 bg-white dark:bg-[#0d0d0d] dark:text-gray-100" data-aos="fade-up">
  <div className="max-w-6xl mx-auto px-6 md:px-12 grid md:grid-cols-2 gap-12 items-center " data-aos="fade-left">
    {/* Left Section */}
    <div data-aos="fade-right">
      <span className="text-sm uppercase bg-gray-100 dark:bg-gray-800 px-3 py-1 rounded-full font-medium">
        FAQ
      </span>
      <h2 className="text-4xl font-bold mt-4 leading-snug">
        Answers to your Questions..
      </h2>
      <button className="mt-6 px-5 py-3 bg-white dark:bg-gray-900 border border-gray-300 dark:border-gray-700 rounded-full text-gray-700 dark:text-gray-200 shadow-sm hover:shadow-md transition">
        Talk to us
      </button>

      <div className="mt-12 relative" data-aos="zoom-in">
        <div className="absolute -left-14 top-0 w-72 h-72 bg-purple-100 dark:bg-purple-900/30 blur-xl opacity-80 rounded-full"></div>
        <div className="w-28 h-28 rounded-full bg-gradient-to-br from-[#0f0e47] to-[#8686ac] relative z-10 "></div>
      </div>
    </div>

    {/* Right Section - Accordion */}
    <div className="space-y-4">
      {faqData.map((faq, index) => (
        <div
          key={index}
          data-aos="fade-left"
          data-aos-delay={index * 100}
          className="bg-purple-50 dark:bg-white/10 rounded-xl overflow-hidden transition-all duration-300"
        >
          <button
            onClick={() => setOpenIndex(openIndex === index ? null : index)}
            className="w-full flex gap-5 items-center p-4 text-left font-medium text-gray-900 dark:text-gray-100"
          >
            {openIndex === index ? (
              <div className="flex bg-gray-900 dark:bg-purple-800 rounded-full items-center justify-center p-1 ">
                <FiChevronUp className="w-4 h-4 text-white" />
              </div>
            ) : (
              <div className="flex bg-gray-900 dark:bg-purple-800 rounded-full items-center justify-center p-1">
                <FiChevronDown className="w-4 h-4 text-white" />
              </div>
            )}
            {faq.question}
          </button>

          <div
            className={`transition-all duration-200 ease-in-out overflow-hidden ${
              openIndex === index
                ? "max-h-40 opacity-100"
                : "max-h-0 opacity-50"
            }`}
          >
            <div className="px-4 pb-4 text-gray-600 dark:text-gray-300">
              {faq.answer}
            </div>
          </div>
        </div>
      ))}
    </div>
  </div>
</section>

  );
}

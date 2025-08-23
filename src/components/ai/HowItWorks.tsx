"use client";

import { motion } from "framer-motion";
import { CheckCircle, FileText, Edit3 } from "lucide-react";

const HowItWorks = () => {
  const steps = [
    {
      icon: <FileText className="w-6 h-6 text-purple-700" />,
      title: "Type or Paste",
      description: "Drop in your text or paste from anywhere. No formatting needed.",
    },
    {
      icon: <CheckCircle className="w-6 h-6 text-yellow-700/70" />,
      title: "AI Summarizes",
      description: "Scriptly’s AI instantly condenses your content into clear, concise ideas.",
    },
    {
      icon: <Edit3 className="w-6 h-6 text-purple-700" />,
      title: "Refine & Export",
      description: "Make adjustments, copy results, or download for later use.",
    },
  ];

  const containerVariants: any = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.25 },
    },
  };

  const cardVariants: any = {
    hidden: { opacity: 0, y: 50 },
    show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
  };
         

  return (
    <section className="relative w-full py-20 px-6 bg-white dark:from-[#141021] dark:to-[#0f0e47]">
      <div className="max-w-8xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        
        {/* LEFT SIDE - Image */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="flex justify-center"
        >
          <motion.img
 src="/chat-with-ai.svg"
   alt="AI summarizer illustration"
  className="w-full max-w-md drop-shadow-xl"
  animate={{ y: [0, -10, 0] }}
  transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
/>

        </motion.div>

        {/* RIGHT SIDE - Steps */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl font-semibold mb-6 text-gray-900 dark:text-white text-center md:text-left">
            How It <span className="text-[#272757]/70">Works</span>
          </h2>

          <p className="max-w-xl text-lg text-gray-700 dark:text-gray-300 mb-12 text-center md:text-left">
            Get started in seconds. Scriptly makes summarizing effortless with just 3 steps.
          </p>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="grid gap-8"
          >
       {steps.map((step, index) => (
         <motion.div
          key={index}
           variants={cardVariants}
            className="flex w-[82%] items-start gap-4 bg-white dark:bg-[#181818] rounded-xl shadow-lg p-5 border border-purple-200/40 dark:border-purple-800">
           <div className={`flex-shrink-0 w-14 h-14 rounded-full bg-purple-50 dark:bg-purple-900 flex
                 items-center justify-center`} >
                  {step.icon}
                </div>
                <div>
                  <h3 className="text-LG font-medium text-gray-900 dark:text-white">
                    {step.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400 text-sm">{step.description}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default HowItWorks;

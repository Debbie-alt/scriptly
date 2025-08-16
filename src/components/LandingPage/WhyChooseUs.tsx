"use client";

import { motion, Variants } from "framer-motion";
import {
  FaPenNib,
  FaUserGraduate,
  FaRegClock,
  FaRegCheckCircle,
  FaRegComments,
  FaRegStar,
} from "react-icons/fa";


interface Feature {
  title: string;
  description: string;
  icon: React.ReactNode;
}

const features: Feature[] = [
  {
    title: "Expert Academic Writers",
    description:
      "Our team consists of degree-holding professionals with years of essay writing experience.",
    icon: <FaUserGraduate className="text-[#8686ac] w-8 h-8 mb-4" />,
  },
  {
    title: "100% Original & Plagiarism-Free",
    description:
      "Every essay is custom-written and checked with advanced plagiarism tools.",
    icon: <FaPenNib className="text-[#facc15] w-8 h-8 mb-4" />,
  },
  {
    title: "On-Time Delivery",
    description:
      "We guarantee your paper will be delivered before your deadline—no excuses.",
    icon: <FaRegClock className="text-[#22c55e] w-8 h-8 mb-4" />,
  },
  {
    title: "Unlimited Revisions",
    description:
      "Request as many edits as you need until you’re 100% satisfied with your essay.",
    icon: <FaRegCheckCircle className="text-[#505081] w-8 h-8 mb-4" />,
  },
  {
    title: "24/7 Support",
    description:
      "Our friendly support team is always available to answer your questions and help you place orders.",
    icon: <FaRegComments className="text-[#fb923c] w-8 h-8 mb-4" />,
  },
  {
    title: "Top-Rated Service",
    description:
      "Thousands of students trust us for their essays—see our 5-star reviews!",
    icon: <FaRegStar className="text-[#facc15] w-8 h-8 mb-4" />,
  },
];

// animation variants with proper typing
const container: Variants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const item: Variants = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

const WhyChoose = () => {
  return (
    <section className="relative px-4 sm:px-12 md:px-16 py-20 overflow-hidden bg-gray-50 dark:bg-[#111111]">
      {/* Gradient overlay */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-br from-[#272757] via-[#0f0e47] to-[#505081]" />

      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-3xl md:text-4xl text-center font-bold mb-4 dark:text-white"
      >
        Why Choose <span className="dark:text-[#8686ac] text-[#0f0e47]">Scriptly</span>?
      </motion.h2>

      <motion.p
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="mb-12 text-base md:text-lg text-center text-gray-600 dark:text-gray-300 "
      >
        Your trusted partner for essays, research papers, and academic writing success.
      </motion.p>

      <motion.div
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.3 }}
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
      >
        {features.map((feature, idx) => (
          <motion.div
            key={idx}
            variants={item}
            whileHover={{ y: -6, scale: 1.02 }}
            className="bg-white/60 dark:bg-[#272757]/60 backdrop-blur-md border dark:border-[#505081]/40 rounded-2xl shadow-lg p-8 text-center transition-all duration-300 hover:border-[#8686ac]"
          >
            <div className="flex justify-center">{feature.icon}</div>
            <h4 className="font-semibold text-lg dark:text-white mb-2">
              {feature.title}
            </h4>
            <p className=" text-gray-500 dark:text-[#c7c7e0] text-sm leading-relaxed">
              {feature.description}
            </p>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};

export default WhyChoose;

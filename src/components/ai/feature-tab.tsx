'use client';

import Link from "next/link";
import { usePathname } from "next/navigation";
import { FaMagic, FaRegLightbulb, FaSyncAlt } from "react-icons/fa";
import { MdSummarize } from "react-icons/md";
import { TbTextRecognition } from "react-icons/tb";

const features = [
  {
    label: "Text Generator",
    icon: <FaMagic />,
    href: "/text-generator",
  },
  {
    label: "Proofreader",
    icon: <MdSummarize />,
    href: "/proofreading",
  },
  {
    label: "Paraphraser",
    icon: <FaSyncAlt />,
    href: "/paraphraser",
  },
  {
    label: "Plagiarism Checker",
    icon: <TbTextRecognition />,
    href: "/ai-detector",
  },
  // {
  //   label: "Text To Speech",
  //   icon: <FaRegLightbulb />,
  //   href: "/idea-generator",
  // },
];

const AiFeatureTabs = () => {
  const pathname = usePathname();

  return (
    <nav className="flex flex-wrap px-3 gap-4 justify-center py-6 bg-black" >
      {features.map((feature) => {
        const isActive = pathname === feature.href;
        return (
          <Link
            key={feature.href}
            href={feature.href}
            className={`flex items-center gap-2 px-5 py-2 rounded-full text-sm  sm:text-base  shadow transition-all
              ${isActive
                ? "bg-gradient-to-r from-[#0f0e47] via-[#4b206b] to-[#0f0e47] text-white scale-105"
                : "bg-white dark:bg-[#181820] text-[#18113a] dark:text-white hover:bg-purple-50 dark:hover:bg-[#232347] hover:scale-105"
              }`}
            style={{
              border: isActive ? "2px solid #6d28d9" : "1.5px solid #e5e7eb",
              minWidth: 150,
              justifyContent: "center",
     
            }}
          >
            <span className=" text-sm  sm:text-base 2xl:text-lg">{feature.icon}</span>
            {feature.label}
          </Link>
        );
      })}
    </nav>
  );
};

export default AiFeatureTabs;
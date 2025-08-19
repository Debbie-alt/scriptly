import React from "react";
import Link from "next/link";
import { IconType } from "react-icons";

interface FaqCardProps {
  title: string;
  description: string;
  icon: IconType;
  link: string;

  iconColor?: string;
}

const FaqCard: React.FC<FaqCardProps> = ({ title, description, icon: Icon, link, iconColor = "#3b2e7e" }) => {
  return (
    <Link href={link}>
      <div
        className="glassmorph-card shadow-md rounded-xl px-6 py-12 flex flex-col items-center text-center transition cursor-pointer border border-white/30 backdrop-blur-xl group"
        style={{
          background: 'rgba(255,255,255,0.18)',
          boxShadow: '0 8px 32px 0 rgba(31, 38, 135, 0.15)',
          border: '1.5px solid rgba(255,255,255,0.25)',
          backdropFilter: 'blur(12px)',
          WebkitBackdropFilter: 'blur(12px)',
        }}
      >
        <Icon className="mb-3 transition-transform duration-300 group-hover:scale-110 group-hover:-translate-y-1" style={{ color: iconColor, fontSize: '2.2rem' }} />
        <h3 className="text-lg font-semibold transition-colors duration-300 group-hover:text-[#3b2e7e]">{title}</h3>
        <p className="text-sm text-gray-700 mt-2 transition-colors duration-300 group-hover:text-gray-900">{description}</p>
      </div>
    </Link>
  );
};

export default FaqCard;

"use client";

import { motion } from "framer-motion";

interface ProofCardProps {
  label: string;
  title: string;
  condition: string;
  description: string;
  badge: string;
  badgeVariant: "warm" | "cool";
  videoSrc: string | null;
}

export function ProofCard({
  label,
  title,
  condition,
  description,
  badge,
  badgeVariant,
  videoSrc,
}: ProofCardProps) {
  const badgeColor =
    badgeVariant === "warm"
      ? "text-[#C4A97D] border-[#C4A97D]/30 bg-[#C4A97D]/5"
      : "text-[#6B7FA3] border-[#6B7FA3]/30 bg-[#6B7FA3]/5";

  return (
    <motion.article
      className="group border border-[#1F1F24] bg-[#111114] overflow-hidden hover:border-[#2A2A30] transition-all duration-300"
      whileHover={{ y: -3 }}
      transition={{ duration: 0.25, ease: [0.25, 0.1, 0.25, 1] }}
    >
      {/* Proof visual placeholder / video area */}
      <div className="relative w-full aspect-video bg-[#0D0D10] border-b border-[#1F1F24] flex items-center justify-center overflow-hidden">
        {videoSrc ? (
          <video src={videoSrc} className="w-full h-full object-cover" muted playsInline />
        ) : (
          <div className="flex flex-col items-center gap-3 text-[#50505A]">
            {/* Play icon */}
            <svg
              width="40"
              height="40"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1"
              className="opacity-30 group-hover:opacity-50 transition-opacity duration-300"
            >
              <circle cx="12" cy="12" r="10" />
              <polygon points="10,8 16,12 10,16" fill="currentColor" stroke="none" />
            </svg>
            <span className="text-[11px] tracking-[0.15em] uppercase font-medium">
              Demo Available at Launch
            </span>
          </div>
        )}
      </div>

      {/* Card content */}
      <div className="p-7">
        <div className="flex items-start justify-between mb-5">
          <span className="text-[10px] tracking-[0.18em] uppercase text-[#50505A] font-medium">
            {label}
          </span>
          <span className={`text-[10px] tracking-[0.15em] uppercase font-medium px-2.5 py-1 border ${badgeColor}`}>
            {badge}
          </span>
        </div>
        <h3 className="text-[#F0EDE8] text-lg font-light mb-1.5 tracking-tight">
          {title}
        </h3>
        <p className="text-[#C4A97D] text-xs tracking-wide mb-4 font-light">
          {condition}
        </p>
        <p className="text-[#888890] text-sm leading-relaxed font-light">
          {description}
        </p>
      </div>
    </motion.article>
  );
}

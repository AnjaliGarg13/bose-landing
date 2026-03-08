"use client";

import { motion } from "framer-motion";

// Inline SVG icons — no icon library dependency
const icons = {
  mic: (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 2a3 3 0 0 0-3 3v7a3 3 0 0 0 6 0V5a3 3 0 0 0-3-3Z" />
      <path d="M19 10v2a7 7 0 0 1-14 0v-2" />
      <line x1="12" x2="12" y1="19" y2="22" />
    </svg>
  ),
  switch: (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="m16 3 4 4-4 4" />
      <path d="M20 7H4" />
      <path d="m8 21-4-4 4-4" />
      <path d="M4 17h16" />
    </svg>
  ),
  wave: (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M2 12h2" />
      <path d="M6 8v8" />
      <path d="M10 6v12" />
      <path d="M14 9v6" />
      <path d="M18 11v2" />
      <path d="M22 12h0" />
    </svg>
  ),
  control: (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="3" />
      <path d="M3 12h1m16 0h1M12 3v1m0 16v1M5.6 5.6l.7.7m11.4 11.4.7.7M5.6 18.4l.7-.7m11.4-11.4.7-.7" />
    </svg>
  ),
};

interface FeatureCardProps {
  name: string;
  description: string;
  icon: keyof typeof icons;
}

export function FeatureCard({ name, description, icon }: FeatureCardProps) {
  return (
    <motion.article
      className="group p-8 border border-[#1F1F24] bg-[#111114] hover:border-[#2A2A30] hover:bg-[#18181C] transition-all duration-300 cursor-default"
      whileHover={{ y: -2 }}
      transition={{ duration: 0.2, ease: [0.25, 0.1, 0.25, 1] }}
    >
      <div className="text-[#888890] group-hover:text-[#C4A97D] transition-colors duration-300 mb-6">
        {icons[icon]}
      </div>
      <h3 className="text-[#F0EDE8] text-base font-medium mb-3 tracking-tight">
        {name}
      </h3>
      <p className="text-[#888890] text-sm leading-relaxed font-light">
        {description}
      </p>
    </motion.article>
  );
}

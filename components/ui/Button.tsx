"use client";

import { motion } from "framer-motion";
import type { ReactNode } from "react";

interface ButtonProps {
  children: ReactNode;
  variant?: "primary" | "secondary" | "ghost";
  href?: string;
  onClick?: () => void;
  className?: string;
  size?: "sm" | "md" | "lg";
}

export function Button({
  children,
  variant = "primary",
  href,
  onClick,
  className = "",
  size = "md",
}: ButtonProps) {
  const sizeClasses = {
    sm: "px-5 py-2.5 text-sm",
    md: "px-7 py-3.5 text-sm",
    lg: "px-9 py-4 text-base",
  };

  const variantClasses = {
    primary:
      "bg-[#F0EDE8] text-[#08080A] font-medium hover:bg-white transition-colors duration-200",
    secondary:
      "border border-[#2A2A30] text-[#F0EDE8] font-light hover:border-[#C4A97D] hover:text-[#C4A97D] transition-all duration-200",
    ghost:
      "text-[#888890] font-light hover:text-[#F0EDE8] underline underline-offset-4 transition-colors duration-200",
  };

  const baseClasses = `inline-flex items-center justify-center tracking-wide rounded-none cursor-pointer ${sizeClasses[size]} ${variantClasses[variant]} ${className}`;

  const MotionComponent = motion.a;

  return (
    <MotionComponent
      href={href || "#"}
      onClick={onClick}
      className={baseClasses}
      whileHover={{ scale: 1.015 }}
      whileTap={{ scale: 0.99 }}
      transition={{ duration: 0.15, ease: [0.25, 0.1, 0.25, 1] }}
    >
      {children}
    </MotionComponent>
  );
}

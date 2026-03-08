"use client";

import { motion } from "framer-motion";
import { HERO, PRODUCT, PRODUCT_ASSETS } from "@/content/product";
import { Button } from "@/components/ui/Button";
import { imgSrc } from "@/lib/imgSrc";

export function Hero() {
  return (
    <section
      className="relative min-h-screen bg-[#08080A] flex items-center overflow-hidden"
      aria-label="Hero"
    >
      {/* Background image — full bleed, low opacity */}
      <div className="absolute inset-0 z-0">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={imgSrc(PRODUCT_ASSETS.heroLifestyle)}
          alt=""
          className="absolute inset-0 w-full h-full object-cover opacity-25"
          fetchPriority="high"
        />
        {/* Gradient overlay — left strong, right fades */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#08080A] via-[#08080A]/80 to-[#08080A]/20" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#08080A] via-transparent to-[#08080A]/40" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12 pt-32 pb-20 w-full">
        <div className="max-w-3xl">
          {/* Overline */}
          <motion.div
            className="flex items-center gap-3 mb-8"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1, ease: [0.25, 0.1, 0.25, 1] }}
          >
            <span className="w-6 h-px bg-[#C4A97D]" aria-hidden="true" />
            <span className="text-[11px] tracking-[0.2em] uppercase text-[#888890] font-medium">
              {PRODUCT.fullName}
            </span>
          </motion.div>

          {/* Main headline */}
          <motion.h1
            className="text-[clamp(2.5rem,6vw,5rem)] font-light leading-[1.05] tracking-tight text-[#F0EDE8] mb-6"
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2, ease: [0.25, 0.1, 0.25, 1] }}
          >
            {HERO.headline}
          </motion.h1>

          {/* Subhead */}
          <motion.p
            className="text-xl md:text-2xl text-[#888890] font-light tracking-tight mb-6 leading-snug"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.35, ease: [0.25, 0.1, 0.25, 1] }}
          >
            {HERO.subhead}
          </motion.p>

          {/* Body */}
          <motion.p
            className="text-base text-[#888890] font-light leading-relaxed mb-12 max-w-xl"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.45, ease: [0.25, 0.1, 0.25, 1] }}
          >
            {HERO.body}
          </motion.p>

          {/* CTAs */}
          <motion.div
            className="flex flex-col sm:flex-row items-start gap-4"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.55, ease: [0.25, 0.1, 0.25, 1] }}
          >
            <Button variant="primary" href={HERO.ctaPrimaryHref} size="lg">
              {HERO.ctaPrimary}
            </Button>
            <Button variant="secondary" href={HERO.ctaSecondaryHref} size="lg">
              {HERO.ctaSecondary}
            </Button>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.6 }}
        aria-hidden="true"
      >
        <span className="text-[10px] tracking-[0.2em] uppercase text-[#50505A]">Scroll</span>
        <motion.div
          className="w-px h-8 bg-gradient-to-b from-[#50505A] to-transparent"
          animate={{ scaleY: [1, 0.5, 1] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        />
      </motion.div>
    </section>
  );
}

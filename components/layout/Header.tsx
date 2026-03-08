"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { PRODUCT } from "@/content/product";

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const navLinks = [
    { label: "Product", href: "#product-promise" },
    { label: "Features", href: "#features" },
    { label: "Proof", href: "#proof" },
    { label: "Design", href: "#design" },
    { label: "FAQ", href: "#faq" },
  ];

  return (
    <motion.header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-[#08080A]/95 backdrop-blur-md border-b border-[#1F1F24]"
          : "bg-transparent"
      }`}
      initial={{ y: -10, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: [0.25, 0.1, 0.25, 1] }}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-12 h-16 flex items-center justify-between">
        {/* Logo */}
        <a
          href="#"
          className="text-[#F0EDE8] text-base font-medium tracking-[0.12em] uppercase hover:text-white transition-colors duration-200"
          aria-label="Bose — return to top"
        >
          {PRODUCT.brand}
        </a>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-8" aria-label="Main navigation">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-[#888890] text-xs tracking-[0.1em] uppercase font-medium hover:text-[#F0EDE8] transition-colors duration-200"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* CTA */}
        <div className="hidden md:flex items-center gap-4">
          <a
            href="#order"
            className="text-xs tracking-[0.1em] uppercase font-medium px-5 py-2.5 border border-[#2A2A30] text-[#F0EDE8] hover:border-[#C4A97D] hover:text-[#C4A97D] transition-all duration-200"
          >
            Order — $449
          </a>
        </div>

        {/* Mobile menu toggle */}
        <button
          className="md:hidden text-[#888890] hover:text-[#F0EDE8] transition-colors duration-200"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          aria-expanded={menuOpen}
        >
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
            {menuOpen ? (
              <path d="M18 6 6 18M6 6l12 12" />
            ) : (
              <>
                <path d="M4 6h16" />
                <path d="M4 12h16" />
                <path d="M4 18h16" />
              </>
            )}
          </svg>
        </button>
      </div>

      {/* Mobile nav */}
      {menuOpen && (
        <motion.div
          className="md:hidden bg-[#08080A]/98 backdrop-blur-md border-t border-[#1F1F24] px-6 py-6"
          initial={{ opacity: 0, y: -8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.2 }}
        >
          <nav className="flex flex-col gap-5" aria-label="Mobile navigation">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className="text-[#888890] text-sm tracking-[0.1em] uppercase font-medium hover:text-[#F0EDE8] transition-colors duration-200"
              >
                {link.label}
              </a>
            ))}
            <a
              href="#order"
              className="text-xs tracking-[0.1em] uppercase font-medium px-5 py-3 border border-[#2A2A30] text-[#F0EDE8] text-center hover:border-[#C4A97D] transition-all duration-200 mt-2"
            >
              Order — $449
            </a>
          </nav>
        </motion.div>
      )}
    </motion.header>
  );
}

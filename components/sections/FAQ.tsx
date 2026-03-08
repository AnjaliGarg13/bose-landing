"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FAQ_ITEMS } from "@/content/product";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { FadeIn } from "@/components/ui/FadeIn";

function FAQItem({
  question,
  answer,
  isOpen,
  onToggle,
  id,
}: {
  question: string;
  answer: string;
  isOpen: boolean;
  onToggle: () => void;
  id: string;
}) {
  const answerId = `${id}-answer`;
  const buttonId = `${id}-button`;

  return (
    <div className="border-b border-[#1F1F24]">
      <button
        id={buttonId}
        className="w-full flex items-start justify-between gap-6 py-6 text-left group cursor-pointer"
        onClick={onToggle}
        aria-expanded={isOpen}
        aria-controls={answerId}
      >
        <span className="text-[#F0EDE8] text-base font-light leading-snug tracking-tight group-hover:text-white transition-colors duration-200">
          {question}
        </span>
        <span
          className="flex-shrink-0 mt-0.5 text-[#888890] group-hover:text-[#C4A97D] transition-colors duration-200"
          aria-hidden="true"
        >
          <motion.svg
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
            animate={{ rotate: isOpen ? 45 : 0 }}
            transition={{ duration: 0.2, ease: [0.25, 0.1, 0.25, 1] }}
          >
            <path d="M12 5v14M5 12h14" />
          </motion.svg>
        </span>
      </button>

      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            id={answerId}
            role="region"
            aria-labelledby={buttonId}
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: [0.25, 0.1, 0.25, 1] }}
            style={{ overflow: "hidden" }}
          >
            <p className="text-[#888890] text-sm font-light leading-relaxed pb-6 max-w-2xl">
              {answer}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export function FAQ() {
  const [openId, setOpenId] = useState<string | null>(null);

  const toggle = (id: string) => {
    setOpenId((prev) => (prev === id ? null : id));
  };

  return (
    <section
      id="faq"
      className="bg-[#08080A] py-28 lg:py-36 border-t border-[#1F1F24]"
      aria-labelledby="faq-heading"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
          {/* Left — header */}
          <FadeIn className="lg:col-span-4">
            <SectionLabel label="FAQ" />
            <h2
              id="faq-heading"
              className="text-[clamp(1.75rem,3.5vw,2.75rem)] font-light leading-tight tracking-tight text-[#F0EDE8]"
            >
              Specific questions,
              <br />
              direct answers.
            </h2>
          </FadeIn>

          {/* Right — accordion */}
          <FadeIn delay={0.1} className="lg:col-span-8">
            <div>
              {FAQ_ITEMS.map((item) => (
                <FAQItem
                  key={item.id}
                  id={item.id}
                  question={item.question}
                  answer={item.answer}
                  isOpen={openId === item.id}
                  onToggle={() => toggle(item.id)}
                />
              ))}
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}

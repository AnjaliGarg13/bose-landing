import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Hero } from "@/components/sections/Hero";
import { Problem } from "@/components/sections/Problem";
import { ProductPromise } from "@/components/sections/ProductPromise";
import { BenefitSection } from "@/components/sections/BenefitSection";
import { Features } from "@/components/sections/Features";
import { FlagshipConfidence } from "@/components/sections/FlagshipConfidence";
import { Proof } from "@/components/sections/Proof";
import { DesignDetails } from "@/components/sections/DesignDetails";
import { Packaging } from "@/components/sections/Packaging";
import { FAQ } from "@/components/sections/FAQ";
import { FinalCTA } from "@/components/sections/FinalCTA";
import { BENEFITS } from "@/content/product";

export default function Home() {
  return (
    <>
      {/* Skip to main content — accessibility */}
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[100] focus:bg-[#F0EDE8] focus:text-[#08080A] focus:px-4 focus:py-2 focus:text-sm focus:font-medium"
      >
        Skip to main content
      </a>

      <Header />

      <main id="main-content">
        {/* 01 — Hero */}
        <Hero />

        {/* 02 — Problem */}
        <Problem />

        {/* 03 — Product Promise */}
        <ProductPromise />

        {/* 04–06 — Three Benefits */}
        {BENEFITS.map((benefit) => (
          <BenefitSection key={benefit.id} {...benefit} />
        ))}

        {/* 07 — Features */}
        <Features />

        {/* 08 — Flagship Confidence */}
        <FlagshipConfidence />

        {/* 09 — Proof */}
        <Proof />

        {/* 10 — Design Details */}
        <DesignDetails />

        {/* 11 — Packaging / Validation Callout */}
        <Packaging />

        {/* 12 — FAQ */}
        <FAQ />

        {/* 13 — Final CTA */}
        <FinalCTA />
      </main>

      <Footer />
    </>
  );
}

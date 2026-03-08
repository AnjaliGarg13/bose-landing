import { FINAL_CTA, PRODUCT_ASSETS } from "@/content/product";
import { FadeIn } from "@/components/ui/FadeIn";
import { Button } from "@/components/ui/Button";
import Image from "next/image";

export function FinalCTA() {
  return (
    <section
      id="order"
      className="relative bg-[#0D0D10] py-32 lg:py-40 border-t border-[#1F1F24] overflow-hidden"
      aria-labelledby="final-cta-heading"
    >
      {/* Background product image — very subtle */}
      <div className="absolute inset-0 z-0">
        <Image
          src={PRODUCT_ASSETS.heroProduct}
          alt=""
          fill
          className="object-cover opacity-10"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0D0D10] via-[#0D0D10]/90 to-[#0D0D10]/70" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0D0D10] via-transparent to-[#0D0D10]" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12">
        <FadeIn className="max-w-2xl">
          <span className="block text-[11px] tracking-[0.2em] uppercase text-[#888890] font-medium mb-6">
            {FINAL_CTA.overline}
          </span>
          <h2
            id="final-cta-heading"
            className="text-[clamp(1.75rem,4.5vw,3.75rem)] font-light leading-[1.05] tracking-tight text-[#F0EDE8] mb-6"
          >
            {FINAL_CTA.headline}
          </h2>
          <p className="text-[#888890] text-base font-light leading-relaxed mb-12 max-w-lg">
            {FINAL_CTA.subhead}
          </p>

          <div className="flex flex-col sm:flex-row items-start gap-4">
            <Button variant="primary" href={FINAL_CTA.ctaPrimaryHref} size="lg">
              {FINAL_CTA.ctaPrimary}
            </Button>
            <Button variant="secondary" href={FINAL_CTA.ctaSecondaryHref} size="lg">
              {FINAL_CTA.ctaSecondary}
            </Button>
          </div>

          {/* Trust micro-copy */}
          <p className="mt-8 text-[#50505A] text-xs font-light">
            Free shipping. 90-day return window. 1-year limited warranty included.
          </p>
        </FadeIn>
      </div>
    </section>
  );
}

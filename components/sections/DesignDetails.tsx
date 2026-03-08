import Image from "next/image";
import { DESIGN_DETAILS } from "@/content/product";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { FadeIn } from "@/components/ui/FadeIn";

export function DesignDetails() {
  return (
    <section
      id="design"
      className="bg-[#08080A] py-28 lg:py-36 border-t border-[#1F1F24]"
      aria-labelledby="design-heading"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          {/* Left — copy */}
          <FadeIn>
            <SectionLabel label={DESIGN_DETAILS.overline} />
            <h2
              id="design-heading"
              className="text-[clamp(1.75rem,4vw,3.25rem)] font-light leading-tight tracking-tight text-[#F0EDE8] mb-8"
            >
              {DESIGN_DETAILS.headline}
            </h2>
            <p className="text-[#888890] text-base font-light leading-relaxed mb-10">
              {DESIGN_DETAILS.body}
            </p>

            {/* Detail list */}
            <ul className="space-y-4 mb-12" role="list">
              {DESIGN_DETAILS.details.map((detail, i) => (
                <li key={i} className="flex items-start gap-4">
                  <span
                    className="mt-2 flex-shrink-0 w-1 h-1 rounded-full bg-[#50505A]"
                    aria-hidden="true"
                  />
                  <span className="text-[#888890] text-sm font-light leading-relaxed">
                    {detail}
                  </span>
                </li>
              ))}
            </ul>

            {/* Colorways */}
            <div>
              <span className="text-[10px] tracking-[0.18em] uppercase text-[#50505A] font-medium block mb-4">
                Available in
              </span>
              <div className="flex items-center gap-3">
                {DESIGN_DETAILS.colorways.map((color) => (
                  <span
                    key={color}
                    className="text-xs text-[#888890] font-light px-3 py-1.5 border border-[#2A2A30]"
                  >
                    {color}
                  </span>
                ))}
              </div>
            </div>
          </FadeIn>

          {/* Right — image */}
          <FadeIn delay={0.2}>
            <div className="relative aspect-[4/5] overflow-hidden bg-[#111114]">
              <Image
                src={DESIGN_DETAILS.imageSrc}
                alt={DESIGN_DETAILS.imageAlt}
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
              <div className="absolute inset-0 bg-gradient-to-b from-transparent to-[#08080A]/20 pointer-events-none" />
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}

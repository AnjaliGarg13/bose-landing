import Image from "next/image";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { FadeIn } from "@/components/ui/FadeIn";

interface BenefitSectionProps {
  id: string;
  overline: string;
  headline: string;
  rtb: string;
  featureName: string;
  featureDetail: string;
  stat: string;
  statLabel: string;
  imageSrc: string;
  imageAlt: string;
  imagePosition: "left" | "right";
}

export function BenefitSection({
  id,
  overline,
  headline,
  rtb,
  featureName,
  featureDetail,
  stat,
  statLabel,
  imageSrc,
  imageAlt,
  imagePosition,
}: BenefitSectionProps) {
  const isImageLeft = imagePosition === "left";

  return (
    <section
      id={id}
      className="bg-[#08080A] py-24 lg:py-32 border-t border-[#1F1F24]"
      aria-labelledby={`${id}-heading`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div
          className={`grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center ${
            isImageLeft ? "lg:flex-row-reverse" : ""
          }`}
        >
          {/* Copy block */}
          <FadeIn
            className={`order-2 ${isImageLeft ? "lg:order-2" : "lg:order-1"}`}
          >
            <SectionLabel label={overline} />
            <h2
              id={`${id}-heading`}
              className="text-[clamp(1.5rem,3.5vw,2.75rem)] font-light leading-[1.1] tracking-tight text-[#F0EDE8] mb-8"
            >
              {headline}
            </h2>

            {/* RTB block */}
            <div className="border-l-2 border-[#C4A97D]/40 pl-5 mb-10">
              <p className="text-[#888890] text-sm font-light leading-relaxed">
                <span className="block text-[10px] tracking-[0.18em] uppercase text-[#C4A97D] font-medium mb-2">
                  Why it works
                </span>
                {rtb}
              </p>
            </div>

            {/* Feature label */}
            <div className="flex items-center gap-3 mb-8">
              <div>
                <span className="block text-[#F0EDE8] text-sm font-medium mb-0.5">
                  {featureName}
                </span>
                <span className="text-[#888890] text-xs font-light tracking-wide">
                  {featureDetail}
                </span>
              </div>
            </div>

            {/* Stat */}
            <div className="pt-8 border-t border-[#1F1F24]">
              <span className="block text-3xl font-light text-[#F0EDE8] tracking-tight mb-1">
                {stat}
              </span>
              <span className="text-[#888890] text-xs font-light tracking-wide uppercase">
                {statLabel}
              </span>
            </div>
          </FadeIn>

          {/* Image block */}
          <FadeIn
            delay={0.15}
            className={`order-1 ${isImageLeft ? "lg:order-1" : "lg:order-2"}`}
          >
            <div className="relative aspect-[4/3] lg:aspect-[3/4] overflow-hidden bg-[#111114]">
              <Image
                src={imageSrc}
                alt={imageAlt}
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
              {/* Subtle vignette */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#08080A]/30 to-transparent pointer-events-none" />
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}

import { FLAGSHIP_CONFIDENCE } from "@/content/product";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { FadeIn, StaggerContainer, StaggerChild } from "@/components/ui/FadeIn";
import { ConfidenceItem } from "@/components/ui/ConfidenceItem";

export function FlagshipConfidence() {
  return (
    <section
      id="flagship-confidence"
      className="bg-[#08080A] py-28 lg:py-36 border-t border-[#1F1F24]"
      aria-labelledby="confidence-heading"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
          {/* Left — Header */}
          <FadeIn>
            <SectionLabel label={FLAGSHIP_CONFIDENCE.overline} />
            <h2
              id="confidence-heading"
              className="text-[clamp(1.75rem,4vw,3.25rem)] font-light leading-tight tracking-tight text-[#F0EDE8] mb-6"
            >
              {FLAGSHIP_CONFIDENCE.headline}
            </h2>
            <p className="text-[#888890] text-base font-light leading-relaxed">
              {FLAGSHIP_CONFIDENCE.body}
            </p>
          </FadeIn>

          {/* Right — items list */}
          <FadeIn delay={0.15}>
            <StaggerContainer>
              {FLAGSHIP_CONFIDENCE.items.map((item) => (
                <StaggerChild key={item.id}>
                  <ConfidenceItem label={item.label} detail={item.detail} />
                </StaggerChild>
              ))}
            </StaggerContainer>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}

import { FEATURES } from "@/content/product";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { FadeIn, StaggerContainer, StaggerChild } from "@/components/ui/FadeIn";
import { FeatureCard } from "@/components/ui/FeatureCard";

export function Features() {
  return (
    <section
      id="features"
      className="bg-[#0D0D10] py-28 lg:py-36 border-t border-[#1F1F24]"
      aria-labelledby="features-heading"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        {/* Header */}
        <FadeIn className="max-w-2xl mb-16 lg:mb-20">
          <SectionLabel label={FEATURES.overline} />
          <h2
            id="features-heading"
            className="text-[clamp(1.75rem,4vw,3.25rem)] font-light leading-tight tracking-tight text-[#F0EDE8] mb-4"
          >
            {FEATURES.headline}
          </h2>
          <p className="text-[#888890] text-base font-light leading-relaxed">
            {FEATURES.body}
          </p>
        </FadeIn>

        {/* Feature cards */}
        <StaggerContainer className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-px bg-[#1F1F24]">
          {FEATURES.cards.map((card) => (
            <StaggerChild key={card.id} className="bg-[#0D0D10]">
              <FeatureCard
                name={card.name}
                description={card.description}
                icon={card.icon as "mic" | "switch" | "wave" | "control"}
              />
            </StaggerChild>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}

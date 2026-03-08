import { PROOF } from "@/content/product";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { FadeIn, StaggerContainer, StaggerChild } from "@/components/ui/FadeIn";
import { ProofCard } from "@/components/ui/ProofCard";

export function Proof() {
  return (
    <section
      id="proof"
      className="bg-[#0D0D10] py-28 lg:py-36 border-t border-[#1F1F24]"
      aria-labelledby="proof-heading"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        {/* Header */}
        <FadeIn className="max-w-2xl mb-16 lg:mb-20">
          <SectionLabel label={PROOF.overline} />
          <h2
            id="proof-heading"
            className="text-[clamp(1.75rem,4vw,3.25rem)] font-light leading-tight tracking-tight text-[#F0EDE8] mb-4"
          >
            {PROOF.headline}
          </h2>
          <p className="text-[#888890] text-base font-light leading-relaxed">
            {PROOF.body}
          </p>
        </FadeIn>

        {/* Proof cards */}
        <StaggerContainer className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {PROOF.cards.map((card) => (
            <StaggerChild key={card.id}>
              <ProofCard
                label={card.label}
                title={card.title}
                condition={card.condition}
                description={card.description}
                badge={card.badge}
                badgeVariant={card.badgeVariant}
                videoSrc={card.videoSrc}
              />
            </StaggerChild>
          ))}
        </StaggerContainer>

        {/* Validation footnote */}
        <FadeIn delay={0.3} className="mt-12 pt-10 border-t border-[#1F1F24]">
          <p className="text-[#50505A] text-xs font-light leading-relaxed max-w-2xl">
            All tests conducted in real-world conditions. Competitive comparisons reference
            publicly available specifications. Full test methodology and data available at product
            launch. Results may vary based on environmental conditions and use case.
          </p>
        </FadeIn>
      </div>
    </section>
  );
}

import { PROBLEM } from "@/content/product";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { FadeIn, StaggerContainer, StaggerChild } from "@/components/ui/FadeIn";

export function Problem() {
  return (
    <section
      id="problem"
      className="bg-[#0D0D10] py-28 lg:py-36 border-y border-[#1F1F24]"
      aria-labelledby="problem-heading"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        {/* Header */}
        <FadeIn>
          <SectionLabel label={PROBLEM.overline} />
          <h2
            id="problem-heading"
            className="text-[clamp(1.75rem,4vw,3.25rem)] font-light leading-tight tracking-tight text-[#F0EDE8] max-w-2xl mb-6"
          >
            {PROBLEM.headline}
          </h2>
          <p className="text-[#888890] text-base font-light leading-relaxed max-w-xl mb-16 lg:mb-20">
            {PROBLEM.body}
          </p>
        </FadeIn>

        {/* Pain points */}
        <StaggerContainer className="grid grid-cols-1 md:grid-cols-3 gap-px bg-[#1F1F24]">
          {PROBLEM.painPoints.map((point) => (
            <StaggerChild key={point.id}>
              <article className="bg-[#0D0D10] p-8 lg:p-10 h-full">
                <span className="block text-[11px] tracking-[0.2em] uppercase text-[#50505A] font-medium mb-8">
                  {point.label}
                </span>
                <h3 className="text-[#F0EDE8] text-lg font-light leading-snug tracking-tight mb-4">
                  {point.headline}
                </h3>
                <p className="text-[#888890] text-sm font-light leading-relaxed">
                  {point.description}
                </p>
              </article>
            </StaggerChild>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}

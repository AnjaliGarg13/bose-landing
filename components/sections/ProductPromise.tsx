import { PRODUCT_PROMISE } from "@/content/product";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { FadeIn, StaggerContainer, StaggerChild } from "@/components/ui/FadeIn";

export function ProductPromise() {
  return (
    <section
      id="product-promise"
      className="bg-[#08080A] py-28 lg:py-36"
      aria-labelledby="promise-heading"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        {/* Header */}
        <FadeIn className="max-w-2xl mb-20 lg:mb-24">
          <SectionLabel label={PRODUCT_PROMISE.overline} />
          <h2
            id="promise-heading"
            className="text-[clamp(1.75rem,4vw,3.25rem)] font-light leading-tight tracking-tight text-[#F0EDE8] mb-6"
          >
            {PRODUCT_PROMISE.headline}
          </h2>
          <p className="text-[#888890] text-base font-light leading-relaxed">
            {PRODUCT_PROMISE.body}
          </p>
        </FadeIn>

        {/* Pillars */}
        <StaggerContainer className="grid grid-cols-1 md:grid-cols-3 gap-12 lg:gap-16">
          {PRODUCT_PROMISE.pillars.map((pillar) => (
            <StaggerChild key={pillar.id}>
              <div className="flex flex-col">
                <span
                  className="text-[#C4A97D] text-xs tracking-[0.2em] uppercase font-medium mb-6"
                  aria-hidden="true"
                >
                  {pillar.number}
                </span>
                {/* Divider */}
                <div className="w-8 h-px bg-[#2A2A30] mb-7" aria-hidden="true" />
                <h3 className="text-[#F0EDE8] text-xl font-light leading-snug tracking-tight mb-3">
                  {pillar.headline}
                </h3>
                <p className="text-[#888890] text-sm font-light leading-relaxed">
                  {pillar.description}
                </p>
              </div>
            </StaggerChild>
          ))}
        </StaggerContainer>

        {/* Product story — editorial copy block */}
        <FadeIn delay={0.3} className="mt-24 pt-16 border-t border-[#1F1F24]">
          <div className="max-w-3xl">
            <p className="text-[#888890] text-base font-light leading-[1.9] mb-6">
              Modern work does not happen in clean, quiet rooms. It happens on sidewalks between
              meetings, in cafés between calls, at airport gates during delays, and in the hours
              when deep work and life logistics blur together.
            </p>
            <p className="text-[#888890] text-base font-light leading-[1.9]">
              Bose QuietComfort Ultra Pro is built for those failure points.{" "}
              <span className="text-[#F0EDE8]">This is not about more features.</span>{" "}
              It is about fewer failures.
            </p>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}

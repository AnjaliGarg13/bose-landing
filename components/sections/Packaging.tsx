import { PACKAGING } from "@/content/product";
import { FadeIn } from "@/components/ui/FadeIn";

export function Packaging() {
  return (
    <section
      id="packaging"
      className="bg-[#0D0D10] py-20 lg:py-24 border-t border-[#1F1F24]"
      aria-label="Validation callout"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <FadeIn>
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8 py-8 border-y border-[#1F1F24]">
            {/* Left — overline */}
            <span className="text-[10px] tracking-[0.2em] uppercase text-[#50505A] font-medium flex-shrink-0">
              {PACKAGING.overline}
            </span>

            {/* Center — main callout */}
            <div className="flex-1 md:text-center">
              <p className="text-[#F0EDE8] text-xl md:text-2xl font-light tracking-tight">
                {PACKAGING.callout}{" "}
                <span className="text-[#888890]">{PACKAGING.calloutSub}</span>
              </p>
            </div>

            {/* Right — detail */}
            <p className="text-[#50505A] text-xs font-light leading-relaxed max-w-xs md:text-right">
              {PACKAGING.detail}
            </p>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}

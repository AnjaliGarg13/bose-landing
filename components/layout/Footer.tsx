import { FOOTER } from "@/content/product";

export function Footer() {
  return (
    <footer className="bg-[#08080A] border-t border-[#1F1F24]" role="contentinfo">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 py-12">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
          {/* Brand */}
          <div>
            <p className="text-[#F0EDE8] text-sm font-medium tracking-[0.12em] uppercase mb-1">
              {FOOTER.brand}
            </p>
            <p className="text-[#50505A] text-xs font-light">{FOOTER.tagline}</p>
          </div>

          {/* Links */}
          <nav aria-label="Footer navigation">
            <ul className="flex flex-wrap gap-6">
              {FOOTER.links.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-[#50505A] text-xs tracking-wide hover:text-[#888890] transition-colors duration-200"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </div>

        <div className="mt-8 pt-8 border-t border-[#1F1F24]">
          <p className="text-[#50505A] text-xs font-light">
            {FOOTER.legal}
          </p>
          <p className="text-[#50505A] text-xs font-light mt-1">
            QuietComfort, SpeechClear, and FlowState are trademarks or registered trademarks of Bose Corporation. All specifications subject to change without notice.
          </p>
        </div>
      </div>
    </footer>
  );
}

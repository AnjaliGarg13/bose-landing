interface SectionLabelProps {
  label: string;
  className?: string;
}

export function SectionLabel({ label, className = "" }: SectionLabelProps) {
  return (
    <span
      className={`inline-block text-[11px] font-medium tracking-[0.18em] uppercase text-[#888890] mb-4 ${className}`}
    >
      {label}
    </span>
  );
}

interface ConfidenceItemProps {
  label: string;
  detail: string;
}

export function ConfidenceItem({ label, detail }: ConfidenceItemProps) {
  return (
    <div className="flex items-start gap-4 py-5 border-b border-[#1F1F24] last:border-b-0">
      <span
        className="mt-1.5 flex-shrink-0 w-1.5 h-1.5 rounded-full bg-[#C4A97D]"
        aria-hidden="true"
      />
      <div>
        <span className="block text-[#F0EDE8] text-sm font-medium mb-0.5">
          {label}
        </span>
        <span className="text-[#888890] text-sm font-light">{detail}</span>
      </div>
    </div>
  );
}

import { CheckCircle2 } from "lucide-react";

interface SafetyChecklistProps {
  title?: string;
  items: {
    title: string;
    description: string;
  }[];
}

export default function SafetyChecklist({ title, items }: SafetyChecklistProps) {
  return (
    <div className="card-base p-8" style={{ background: "var(--color-green-50)" }}>
      {title && (
        <h3 className="text-h3 mb-6" style={{ color: "var(--color-green-900)" }}>
          {title}
        </h3>
      )}
      <ul className="flex flex-col gap-5">
        {items.map((item, index) => (
          <li key={index} className="flex gap-4 items-start">
            <CheckCircle2
              size={20}
              className="mt-0.5 shrink-0"
              style={{ color: "var(--color-green-600)" }}
            />
            <div>
              <p className="font-semibold text-sm mb-1" style={{ color: "var(--color-green-900)" }}>
                {item.title}
              </p>
              <p className="text-sm leading-relaxed" style={{ color: "var(--color-green-800)" }}>
                {item.description}
              </p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

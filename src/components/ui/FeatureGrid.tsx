import { LucideIcon } from "lucide-react";

interface FeatureGridProps {
  title?: string;
  subtitle?: string;
  features: {
    icon: LucideIcon;
    title: string;
    description: string;
  }[];
  cols?: 2 | 3 | 4;
}

export default function FeatureGrid({ title, subtitle, features, cols = 3 }: FeatureGridProps) {
  const gridClass = {
    2: "grid-cols-1 md:grid-cols-2",
    3: "grid-cols-1 md:grid-cols-3",
    4: "grid-cols-1 sm:grid-cols-2 lg:grid-cols-4",
  }[cols];

  return (
    <div className="flex flex-col gap-8">
      {(title || subtitle) && (
        <div className="text-center max-w-2xl mx-auto">
          {title && <h2 className="text-h2 mb-3" style={{ color: "var(--color-green-900)" }}>{title}</h2>}
          {subtitle && <p className="text-base" style={{ color: "var(--color-green-700)" }}>{subtitle}</p>}
        </div>
      )}
      <div className={`grid ${gridClass} gap-6`}>
        {features.map((feature, index) => (
          <div key={index} className="card-base p-6 flex flex-col gap-4 bg-white">
            <div
              className="w-12 h-12 rounded-xl flex items-center justify-center shrink-0"
              style={{ background: "var(--color-green-50)" }}
            >
              <feature.icon size={22} style={{ color: "var(--color-green-700)" }} />
            </div>
            <div>
              <h3 className="font-display text-lg font-semibold mb-2" style={{ color: "var(--color-green-900)" }}>
                {feature.title}
              </h3>
              <p className="text-sm leading-relaxed" style={{ color: "var(--color-green-700)" }}>
                {feature.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

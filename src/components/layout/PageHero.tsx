import { ReactNode } from "react";
import Badge from "@/components/ui/Badge";

interface PageHeroProps {
  badge?: string;
  badgeVariant?: "green" | "gold" | "sky" | "orange" | "brown";
  title: string;
  description: string;
  children?: ReactNode;
}

export default function PageHero({
  badge,
  badgeVariant = "gold",
  title,
  description,
  children,
}: PageHeroProps) {
  return (
    <section
      className="relative pt-32 pb-20 gradient-hero overflow-hidden"
      aria-label="Page Header"
    >
      <div
        className="absolute inset-0 opacity-[0.05]"
        style={{
          backgroundImage: `radial-gradient(circle, #fff 1px, transparent 1px)`,
          backgroundSize: "24px 24px",
        }}
      />
      <div className="container-xl relative z-10 text-center max-w-3xl mx-auto">
        {badge && (
          <div className="mb-5 flex justify-center">
            <Badge variant={badgeVariant}>{badge}</Badge>
          </div>
        )}
        <h1 className="text-display text-white mb-6 leading-tight">{title}</h1>
        <p className="text-lg leading-relaxed" style={{ color: "var(--color-green-200)" }}>
          {description}
        </p>
        {children && <div className="mt-8">{children}</div>}
      </div>
      <div
        className="absolute bottom-0 left-0 right-0 h-16 pointer-events-none"
        style={{
          background: "linear-gradient(to bottom, transparent, var(--color-cream))",
        }}
      />
    </section>
  );
}

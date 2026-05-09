import React from "react";
import Badge from "./Badge";

interface SectionHeaderProps {
  badge?: string;
  badgeVariant?: "green" | "gold" | "orange" | "sky" | "brown";
  title: string;
  subtitle?: string;
  align?: "left" | "center";
  titleClassName?: string;
}

export default function SectionHeader({
  badge,
  badgeVariant = "green",
  title,
  subtitle,
  align = "center",
  titleClassName = "",
}: SectionHeaderProps) {
  const alignClass = align === "center" ? "text-center items-center" : "text-left items-start";

  return (
    <div className={`flex flex-col gap-3 mb-12 ${alignClass}`}>
      {badge && <Badge variant={badgeVariant}>{badge}</Badge>}
      <h2 className={`text-h2 text-[var(--color-green-900)] ${titleClassName}`}>
        {title}
      </h2>
      {subtitle && (
        <p
          className={`text-base text-[var(--color-green-700)] leading-relaxed max-w-2xl ${
            align === "center" ? "mx-auto" : ""
          }`}
        >
          {subtitle}
        </p>
      )}
    </div>
  );
}

import React from "react";

type BadgeVariant = "green" | "gold" | "orange" | "sky" | "brown";

interface BadgeProps {
  variant?: BadgeVariant;
  children: React.ReactNode;
  className?: string;
}

const variantStyles: Record<BadgeVariant, string> = {
  green:
    "bg-[var(--color-green-100)] text-[var(--color-green-800)] border border-[var(--color-green-200)]",
  gold: "bg-[var(--color-gold-100)] text-[var(--color-gold-900)] border border-[var(--color-gold-300)]",
  orange:
    "bg-[var(--color-orange-100)] text-[var(--color-orange-700)] border border-[var(--color-orange-300)]",
  sky: "bg-[var(--color-sky-100)] text-[var(--color-sky-700)] border border-[var(--color-sky-300)]",
  brown:
    "bg-[var(--color-brown-100)] text-[var(--color-brown-700)] border border-[var(--color-brown-300)]",
};

export default function Badge({
  variant = "green",
  children,
  className = "",
}: BadgeProps) {
  return (
    <span className={`badge-pill ${variantStyles[variant]} ${className}`}>
      {children}
    </span>
  );
}

// ─── Shared TypeScript types for the FURA website ───────────────────────────

export type ClassBand = "1-5" | "6-8" | "9-10";

export type ProgramCategory =
  | "Core Learning"
  | "Agriculture"
  | "Modern Farming"
  | "Art & Culture"
  | "Nutrition";

export interface Program {
  id: string;
  title: string;
  description: string;
  icon: string; // Lucide icon name string
  category: ProgramCategory;
  classBands: ClassBand[];
  highlights: string[];
}

export interface Testimonial {
  id: string;
  quote: string;
  author: string;
  role: string;
  initials: string;
}

/** Recursive node for D3 sunburst hierarchy */
export interface SunburstNode {
  name: string;
  value?: number; // leaf nodes only
  color?: string;
  children?: SunburstNode[];
}

export interface StatItem {
  value: string;
  label: string;
}

export interface NavLink {
  label: string;
  href: string;
}

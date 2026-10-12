// ─── Shared TypeScript types for the FURAA website ───────────────────────────

/** Three standardized module bands used throughout the entire site */
export type ClassBand = "1-4" | "5-8" | "9-10";

/** Module names mapped to their bands */
export type ModuleName = "Foundation" | "Exploration" | "Specialization";

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
  description?: string;
  learningObjective?: string;
  children?: SunburstNode[];
}

export interface StatItem {
  value: string;
  label: string;
}

export interface NavLink {
  label: string;
  href: string;
  children?: { label: string; href: string }[];
}

/** Farm partner entry — data-driven for easy extension */
export interface FarmPartner {
  id: string;
  name: string;
  location?: string;
  overview: string;
  images: { src: string; alt: string; caption?: string }[];
  learningAreas: string[];
  activities: string[];
  safetyNote: string;
}

/** University / institution collaboration entry */
export interface InstitutionPartner {
  id: string;
  name: string;
  shortName: string;
  location?: string;
  overview: string;
  collaborationAreas: string[];
  image?: { src: string; alt: string };
  statusNote: string; // e.g. "proposed collaboration"
}

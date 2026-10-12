import type { NavLink } from "@/types";

/**
 * Primary navigation links.
 * The Modules entry uses `children` to drive the desktop dropdown and mobile accordion.
 * "School Partnership" renamed to "Partnership" as per Req #2.
 */
export const navLinks: NavLink[] = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Programs", href: "/programs" },
  {
    label: "Modules",
    href: "/modules/foundation",
    children: [
      { label: "Foundation — Classes 1–4", href: "/modules/foundation" },
      { label: "Exploration — Classes 5–8", href: "/modules/exploration" },
      { label: "Specialization — Classes 9–10", href: "/modules/specialization" },
    ],
  },
  { label: "Partnership", href: "/partnership" },
  { label: "Safety & Operations", href: "/safety" },
  { label: "Nutrition", href: "/nutrition" },
  { label: "Summer Camps", href: "/summer-camps" },
  { label: "Contact", href: "/contact" },
];

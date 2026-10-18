import type { NavLink } from "@/types";

/**
 * Primary header navigation links for FURAA V2.
 * Exact order required:
 * 1. Home
 * 2. About
 * 3. Explore Programs (Dropdown: Programs Overview, FURAA Farms)
 * 4. Modules (Dropdown: Foundation, Exploration, Specialization)
 * 5. Special Camps (Dropdown: Summer Camps, Monsoon Camps, Harvesting Camps)
 * 6. Our Partners
 * 7. Gallery
 * 8. Blogs
 *
 * Header CTA: "Book a Demo"
 */
export const navLinks: NavLink[] = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  {
    label: "Explore Programs",
    href: "/programs",
    children: [
      { label: "Programs Overview", href: "/programs" },
      { label: "FURAA Farms", href: "/programs/furaa-farms" },
    ],
  },
  {
    label: "Modules",
    href: "/modules/foundation",
    children: [
      { label: "Foundation — Classes 1–4", href: "/modules/foundation" },
      { label: "Exploration — Classes 5–8", href: "/modules/exploration" },
      { label: "Specialization — Classes 9–10", href: "/modules/specialization" },
    ],
  },
  {
    label: "Special Camps",
    href: "/summer-camps",
    children: [
      { label: "Summer Camps", href: "/summer-camps" },
      { label: "Monsoon Camps", href: "/monsoon-camps" },
      { label: "Harvesting Camps", href: "/harvesting-camps" },
    ],
  },
  { label: "Our Partners", href: "/partnership" },
  { label: "Gallery", href: "/gallery" },
  { label: "Blogs", href: "/blogs" },
];

/**
 * Secondary / footer links to preserve all operational and specialized pages.
 */
export const footerSecondaryLinks: NavLink[] = [
  { label: "Safety and Operations", href: "/safety" },
  { label: "Nutrition and Food Education", href: "/nutrition" },
  { label: "Contact and Visits", href: "/contact" },
];

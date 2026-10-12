/**
 * Central brand configuration.
 * All brand-sensitive values live here — change this file to rebrand the site.
 * FURAA is the primary brand name.
 */

export const brand = {
  name: "Future Ready Agriculture Academy (FURAA)",
  shortName: "FURAA",
  fullName: "Future Ready Agriculture Academy",
  meaning: "Future-Ready Agriculture Academy",
  tagline: "Future-Ready Agriculture. Practical Learning.",
  description:
    "FURAA partners with schools to deliver experiential education programs that combine agriculture, folk arts, rural culture, nature science, and healthy food awareness — for students from Class 1 to Class 10.",

  logo: {
    src: "/images/logo/furaa-logo.png",
    lightSrc: "/images/logo/furaa-logo-light.png",
    originalSrc: "/images/logo/furaa-logo-original.jpg",
    alt: "Future Ready Agriculture Academy (FURAA) Logo",
  },

  contact: {
    email: "admin@furaa.com",
    emailLink: "mailto:admin@furaa.com",
    phone: "+91 9449490940",
    phoneLink: "tel:+919449490940",
    address: "No. 18, Lalbagh Fort Road, Bengaluru - 560002",
  },

  social: {
    instagram: "furaa.academy",
    linkedin: "furaa-agriculture-academy",
  },

  /** SEO metadata */
  seo: {
    siteName: "FURAA — Future Ready Agriculture Academy",
    defaultTitle: "FURAA | Future-Ready Agriculture & Nature Education for Schools",
    defaultDescription:
      "FURAA partners with schools to deliver structured experiential learning — classroom theory followed by hands-on farm practice. Agriculture, folk art, and nature-based education for Classes 1–10.",
  },

  /** Stats shown in the homepage stats bar — update when real data is available */
  stats: [
    { value: "500+", label: "Target Students / Term" },
    { value: "15+", label: "Activity Streams" },
    { value: "2", label: "Innovation Hubs" },
    { value: "100%", label: "Curriculum Aligned" },
  ],
} as const;

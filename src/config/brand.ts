/**
 * Central brand configuration.
 * All brand-sensitive values live here — change this file to rebrand the site.
 * FURA is the primary brand name. Update `name` here to rebrand without touching components.
 */

export const brand = {
  name: "Future Ready Agriculture Academy (FURA)",
  shortName: "FURA",
  meaning: "Future-Ready Agriculture Academy",
  tagline: "Future-Ready Agriculture. Practical Learning.",
  description:
    "FURA partners with schools to deliver experiential education programs that combine agriculture, folk arts, rural culture, nature science, and healthy food awareness — for students from Class 1 to Class 10.",

  contact: {
    email: "contact@fura.academy",
    phone: "+91 90000 00000",
    address: "FURA Innovation Hub, Agricultural Research Zone, India",
  },

  social: {
    instagram: "fura.academy",
    linkedin: "fura-agriculture-academy",
  },

  /** SEO metadata */
  seo: {
    siteName: "FURA — Future Ready Agriculture Academy",
    defaultTitle: "FURA | Future-Ready Agriculture & Nature Education for Schools",
    defaultDescription:
      "FURA partners with schools to deliver a structured Friday Theory + Saturday Farm module. Hands-on agriculture, folk art, and nature-based learning for a sustainable future.",
  },

  /** Stats shown in the homepage stats bar — update when real data is available */
  stats: [
    { value: "500+", label: "Target Students / Term" },
    { value: "15+", label: "Activity Streams" },
    { value: "2", label: "Innovation Hubs" },
    { value: "100%", label: "Curriculum Aligned" },
  ],
} as const;

/**
 * Central brand configuration.
 * All brand-sensitive values live here.
 * Brand: FURAA
 * Full Name: Future Ready Agriculture Academy
 */

export const brand = {
  name: "Future Ready Agriculture Academy (FURAA)",
  shortName: "FURAA",
  fullName: "Future Ready Agriculture Academy",
  meaning: "Future-Ready Agriculture Academy",
  tagline: "Future-Ready Agriculture. Practical Learning.",
  description:
    "FURAA partners with schools to deliver experiential education programs that combine agriculture, folk arts, rural culture, nature science, and healthy food awareness — for students from Class 1 to Class 10.",

  /**
   * Legal company configuration.
   * "Pvt. Ltd." is only displayed in official legal/copyright positions once incorporation is officially verified.
   */
  legal: {
    isIncorporated: false, // Set to true when incorporation is officially verified
    suffix: "Pvt. Ltd.",
    legalEntityName: "Future Ready Agriculture Academy",
    get officialLegalName(): string {
      return this.isIncorporated ? `${this.legalEntityName} ${this.suffix}` : this.legalEntityName;
    },
  },

  logo: {
    src: "/images/logo/furaa-logo.png",
    lightSrc: "/images/logo/furaa-logo-light.png",
    originalSrc: "/images/logo/FURAA_logo.jpeg",
    emblem: "/images/logo/furaa-emblem.png",
    emblemLight: "/images/logo/furaa-emblem-light.png",
    emblemBadge: "/images/logo/furaa-emblem-badge.png",
    alt: "Future Ready Agriculture Academy (FURAA) Logo",
  },

  contact: {
    email: "admin@myfuraa.com",
    emailLink: "mailto:admin@myfuraa.com",
    phone: "+91 9449490940",
    phoneLink: "tel:+919449490940",
    address: "No. 18, Lalbagh Fort Road, Bengaluru - 560002",
  },

  /**
   * Configurable social media channels.
   * If an item is empty string, it is marked as pending and hidden from user navigation.
   */
  social: {
    instagram: "" as string, // Set URL when official handle is ready, e.g. "https://instagram.com/furaa.academy"
    facebook: "" as string,  // Set URL when official page is ready, e.g. "https://facebook.com/furaa.academy"
    whatsapp: "" as string,  // Set WhatsApp Business link, e.g. "https://wa.me/919449490940"
    linkedin: "" as string,  // Set URL when ready
  },

  /** SEO metadata */
  seo: {
    siteName: "FURAA — Future Ready Agriculture Academy",
    defaultTitle: "FURAA | Future-Ready Agriculture and Nature Education for Schools",
    defaultDescription:
      "FURAA partners with schools to deliver structured experiential learning — classroom theory followed by hands-on farm practice. Agriculture, folk art, and nature-based education for Classes 1–10.",
  },

  /** Stats shown in the homepage stats bar */
  stats: [
    { value: "500+", label: "Target Students / Term" },
    { value: "15+", label: "Activity Streams" },
    { value: "2", label: "Innovation Hubs" },
    { value: "100%", label: "Curriculum Aligned" },
  ],
} as const;

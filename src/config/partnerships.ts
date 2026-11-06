/**
 * Partnerships Configuration — FURAA V3
 * Data model for partner categories, confirmed partner entities, and collaboration frameworks.
 * Retains clean logo-first design without unverified claims or redundant logistics.
 */

export interface PartnerCategoryInfo {
  id: string;
  name: string;
  slug: string;
  description: string;
  emptyStateText: string;
  emptyStateActionLabel: string;
  emptyStateActionHref: string;
}

export interface PartnerEntry {
  id: string;
  name: string;
  category: "Schools" | "Farms" | "Farm Universities" | "Corporates";
  logoUrl?: string;
  websiteUrl?: string;
  location?: string;
  status: "confirmed" | "proposed" | "active";
  description?: string;
  highlights?: string[];
  image?: {
    src: string;
    alt: string;
    caption: string;
  };
}

export interface FarmPartner {
  id: string;
  name: string;
  location?: string;
  overview: string;
  images: {
    src: string;
    alt: string;
    caption: string;
  }[];
  learningAreas: string[];
  activities: string[];
  safetyNote: string;
}

export interface InstitutionPartner {
  id: string;
  name: string;
  shortName: string;
  location: string;
  overview: string;
  collaborationAreas: string[];
  statusNote: string;
}

export const partnerCategories: PartnerCategoryInfo[] = [
  {
    id: "schools",
    name: "Schools",
    slug: "schools",
    description: "K–10 schools integrating experiential agriculture and nature education into their academic calendar.",
    emptyStateText: "School partnership logos are published in accordance with mutual institutional agreements. Connect with our academic liaison team to explore curriculum integration for your school.",
    emptyStateActionLabel: "Partner as a School",
    emptyStateActionHref: "/contact?subject=School%20Partnership%20Inquiry",
  },
  {
    id: "farms",
    name: "Farms",
    slug: "farms",
    description: "Verified working farms and rural learning spaces hosting safe, structured student field sessions.",
    emptyStateText: "We collaborate with verified agrarian lands and rural learning spaces suited to child-safe experiential education.",
    emptyStateActionLabel: "Host FURAA at Your Farm",
    emptyStateActionHref: "/contact?subject=Farm%20Host%20Inquiry",
  },
  {
    id: "farm-universities",
    name: "Farm Universities",
    slug: "farm-universities",
    description: "Agricultural universities and research institutions informing our scientific curriculum frameworks.",
    emptyStateText: "Academic advisory dialogues are underway with agricultural researchers to strengthen scientific curriculum frameworks.",
    emptyStateActionLabel: "Academic Dialogue",
    emptyStateActionHref: "/contact?subject=Academic%20Dialogue",
  },
  {
    id: "corporates",
    name: "Corporates",
    slug: "corporates",
    description: "Organizations collaborating through sustainability workshops, team nature engagement, and CSR initiatives.",
    emptyStateText: "Corporate partnership announcements are published following execution of formal CSR and engagement agreements.",
    emptyStateActionLabel: "Plan Corporate CSR / Outing",
    emptyStateActionHref: "/contact?subject=Corporate%20Engagement",
  },
];

/**
 * Standard data-driven partner entries.
 * Strict public display rule: Show logos only for genuine confirmed partners with permission.
 */
export const allPartners: PartnerEntry[] = [
  {
    id: "furaa-partner-farms",
    name: "FURAA Agrarian Learning Environments",
    category: "Farms",
    location: "Bengaluru Region, Karnataka",
    status: "confirmed",
    description:
      "FURAA collaborates with verified agricultural lands, open farm holdings, and rural learning environments suited to structured, hands-on experiential education.",
    highlights: [
      "Supervised crop cultivation and wetland growing plots",
      "Nature observation and agro-forestry biodiversity zones",
      "Traditional agriculture and heritage farming spaces",
      "Structured student assembly and shaded hydration facilities",
    ],
    image: {
      src: "/images/hero/NAD06335.JPG",
      alt: "Students engaged in supervised farming activities across verified partner farm lands",
      caption: "Supervised cultivation plots and agrarian learning environments",
    },
  },
];

export const farmPartners: FarmPartner[] = [
  {
    id: "furaa-partner-farms",
    name: "Verified Agrarian Field Centers",
    location: "Bengaluru Region, Karnataka",
    overview:
      "FURAA collaborates with verified agricultural lands, open farm holdings, and rural learning environments suited to structured, hands-on experiential education. The partner farm network offers open agricultural land, growing plots, and natural spaces suited to curriculum-linked fieldwork.",
    images: [
      {
        src: "/images/hero/NAD06335.JPG",
        alt: "Students engaged in supervised farming and traditional ploughing activities",
        caption: "Hands-on cultivation plots and traditional agronomy learning",
      },
      {
        src: "/images/modules/NAD06650.JPG",
        alt: "Agricultural paddy growing plots and learning areas",
        caption: "Diverse agrarian learning environment and wetland cultivation zones",
      },
    ],
    learningAreas: [
      "Supervised farming and cultivation plots",
      "Nature observation and agro-forestry zones",
      "Open green areas for outdoor activities",
      "Structured activity spaces for group sessions",
    ],
    activities: [
      "Soil preparation and planting",
      "Organic harvesting observation",
      "Plant growth and seasonal observation",
      "Folk art and cultural activities",
      "Nature walks and ecological observation",
      "Composting demonstrations",
    ],
    safetyNote:
      "All farm activities are conducted in supervised, age-appropriate zones. FURAA mentors accompany students throughout the visit. Activity areas are selected based on safety and suitability for each student age group.",
  },
];

export const institutionPartners: InstitutionPartner[] = [
  {
    id: "farm-universities-advisory",
    name: "Agricultural Academic Linkages",
    shortName: "Farm Universities",
    location: "Bengaluru and Karnataka State",
    overview:
      "FURAA draws on the academic research and agricultural extension publications of leading agricultural universities to strengthen the scientific foundation of our educational programs. Academic advisory dialogues and research-informed curriculum frameworks continue to enrich our learning content.",
    collaborationAreas: [
      "Agricultural knowledge guidance for curriculum development",
      "Scientific understanding of soil, crops, and ecosystems",
      "Practical learning methodology support",
      "Agricultural research exposure for senior students",
      "Educator and mentor training perspectives",
    ],
    statusNote:
      "Academic guidance and research reference. Collaborative discussions are conducted in an exploratory capacity; no formal accreditation, institutional endorsement, or official university affiliation is claimed.",
  },
];

export const corporateProgram = {
  overview:
    "FURAA offers structured farm-based engagement experiences for corporate teams — a distinctive alternative to conventional team-building activities. These programs connect employees with nature, sustainable agriculture, and rural culture.",
  offerings: [
    {
      title: "Farm Day Experiences",
      description:
        "Organized farm visits for employee teams, combining agricultural activities with nature immersion and rural cultural experiences.",
    },
    {
      title: "Plantation Activities",
      description:
        "Tree planting and garden restoration activities that create a lasting environmental contribution for corporate teams.",
    },
    {
      title: "Organic Food Awareness",
      description:
        "Guided sessions on farm-to-plate food journeys, millet-based food tasting, and sustainable food awareness.",
    },
    {
      title: "Nature Team Building",
      description:
        "Outdoor group challenges, folk games, and creative sustainability workshops designed for adult corporate participants.",
    },
    {
      title: "CSR Collaboration",
      description:
        "Opportunities for companies to support FURAA's school education programs as part of structured CSR or sustainability initiatives.",
    },
  ],
  note: "Corporate experiences are distinct from FURAA's school curriculum programs and are designed separately for adult participants.",
};

export interface CorporateOperationItem {
  id: string;
  title: string;
  summary: string;
  details: string[];
}

export const corporateOperationsList: CorporateOperationItem[] = [];

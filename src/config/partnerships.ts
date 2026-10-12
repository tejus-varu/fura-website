import type { FarmPartner, InstitutionPartner } from "@/types";

/**
 * Partnership data configuration.
 * All partnership details are data-driven for easy extension.
 *
 * IMPORTANT: Only include verified factual details.
 * Where details are pending confirmation, they are clearly marked.
 */

/** Farm partners — add more farms here without rewriting components */
export const farmPartners: FarmPartner[] = [
  {
    id: "neralu-farms",
    name: "Neralu Farms",
    location: "Bengaluru region, Karnataka",
    overview:
      "Neralu Farms is FURAA's primary farm partner, providing the outdoor learning environment where students bring classroom theory to life. The farm offers open agricultural land, growing plots, and natural spaces suited to hands-on experiential education.",
    images: [
      {
        src: "/images/hero/NAD06335.JPG",
        alt: "Students engaged in supervised farming and traditional ploughing activities at Neralu Farms",
        caption: "Hands-on cultivation plots and traditional agronomy at Neralu Farms",
      },
      {
        src: "/images/modules/NAD06650.JPG",
        alt: "Agricultural paddy growing plots and learning areas at Neralu Farms",
        caption: "Diverse agrarian learning environment and wetland cultivation zones",
      },
    ],
    learningAreas: [
      "Supervised farming and cultivation plots",
      "Nature observation zones",
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
      "All farm activities at Neralu Farms are conducted in supervised, age-appropriate zones. FURAA mentors accompany students throughout the visit. Activity areas are selected based on safety and suitability for the student age group.",
  },
];

/**
 * Agricultural institution partners.
 * statusNote must clearly indicate whether collaboration is confirmed or proposed.
 */
export const institutionPartners: InstitutionPartner[] = [
  {
    id: "gkvk",
    name: "Gandhi Krishi Vigyana Kendra",
    shortName: "GKVK",
    location: "Bengaluru, Karnataka",
    overview:
      "GKVK is one of India's leading agricultural research and education institutions. FURAA aims to draw on the expertise of agricultural institutions like GKVK to strengthen the scientific foundation of our educational programs and support the professional development of our educators.",
    collaborationAreas: [
      "Agricultural knowledge guidance for curriculum development",
      "Scientific understanding of soil, crops, and ecosystems",
      "Practical learning methodology support",
      "Agricultural research exposure for senior students",
      "Educator and mentor training perspectives",
    ],
    image: {
      src: "",
      alt: "Gandhi Krishi Vigyana Kendra campus, Bengaluru",
    },
    statusNote:
      "FURAA is pursuing a collaborative relationship with agricultural institutions including GKVK. This is a proposed collaboration. No formal partnership, accreditation, university endorsement, or certification arrangement is currently in place.",
  },
];

/** Corporate engagement program details */
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

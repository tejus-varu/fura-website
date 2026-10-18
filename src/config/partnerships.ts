import type {
  PartnerCategory,
  PartnerEntry,
  FarmPartner,
  InstitutionPartner,
} from "@/types";

/**
 * Partnership Categories configuration.
 * Four standard categories: Schools, Farms, Farm Universities, Corporates.
 */
export interface PartnerCategoryInfo {
  id: PartnerCategory;
  name: PartnerCategory;
  tagline: string;
  description: string;
  emptyStateTitle: string;
  emptyStateDescription: string;
  emptyStateActionLabel?: string;
  emptyStateActionHref?: string;
}

export const partnerCategoryList: PartnerCategoryInfo[] = [
  {
    id: "Schools",
    name: "Schools",
    tagline: "Curriculum-Linked Experiential Learning",
    description:
      "FURAA collaborates with progressive schools to integrate agriculture, nature study, and nutrition education into classroom learning and outdoor farm visits.",
    emptyStateTitle: "Partnerships in Development",
    emptyStateDescription:
      "Partner school emblems and co-curricular announcements are presented upon completion of onboarding and mutual accreditation. We are currently accepting school partnership applications for upcoming academic terms.",
    emptyStateActionLabel: "Discuss a School Partnership",
    emptyStateActionHref: "/contact?subject=School%20Partnership",
  },
  {
    id: "Farms",
    name: "Farms",
    tagline: "Verified Outdoor Learning Centers",
    description:
      "We partner with established, child-safe working farms that provide diverse agrarian plots, wetland cultivation zones, and natural environments for hands-on student learning.",
    emptyStateTitle: "Farm Host Network Expansion",
    emptyStateDescription:
      "Host farms undergo rigorous reviews for student safety, perimeter boundaries, and age-appropriate agricultural plots before being listed as verified partner centers.",
    emptyStateActionLabel: "Inquire About Farm Visits",
    emptyStateActionHref: "/contact?subject=Farm%20Partnership",
  },
  {
    id: "Farm Universities",
    name: "Farm Universities",
    tagline: "Scientific Grounding and Academic Advisory",
    description:
      "FURAA seeks to anchor its educational curriculum in rigorous agricultural science by collaborating with respected farm universities, agricultural researchers, and soil scientists.",
    emptyStateTitle: "Partnerships in Development",
    emptyStateDescription:
      "Institutional emblems and academic advisory relationships will be displayed following finalization of academic MoUs. FURAA maintains factual transparency and does not claim unverified university affiliations.",
    emptyStateActionLabel: "Academic Guidance Inquiries",
    emptyStateActionHref: "/contact?subject=Academic%20Inquiry",
  },
  {
    id: "Corporates",
    name: "Corporates",
    tagline: "Nature Engagement, Team Outings and CSR",
    description:
      "Structured farm-based engagement experiences, tree plantation initiatives, and CSR collaborations designed specifically for adult corporate teams and sustainability initiatives.",
    emptyStateTitle: "Partnerships in Development",
    emptyStateDescription:
      "Corporate CSR partnerships and employee engagement logos are published in accordance with mutual brand usage agreements. Connect with our corporate relations team to design your next team outing or CSR initiative.",
    emptyStateActionLabel: "Plan Corporate Outing",
    emptyStateActionHref: "/contact?subject=Corporate%20Engagement",
  },
];

/**
 * Standard data-driven partner entries.
 * Strict public display rule: Show logos only for genuine confirmed partners with permission.
 * Do not fabricate partner logos. Do not show proposed institutions as confirmed partners.
 */
export const allPartners: PartnerEntry[] = [
  {
    id: "neralu-farms",
    name: "Neralu Farms",
    category: "Farms",
    location: "Bengaluru Region, Karnataka",
    status: "confirmed",
    description:
      "Neralu Farms is FURAA's primary farm partner, providing open agricultural land, supervised wetland growing plots, and natural spaces suited to hands-on experiential education.",
    highlights: [
      "Supervised farming and cultivation plots",
      "Nature observation and wetland biodiversity zones",
      "Traditional agriculture and paddy puddling plots",
      "Structured assembly and hydration pavilions",
    ],
    image: {
      src: "/images/hero/NAD06335.JPG",
      alt: "Students engaged in supervised farming activities at Neralu Farms",
      caption: "Supervised cultivation plots and agrarian learning environments at Neralu Farms",
    },
  },
];

/** Corporate Operations, Safety, and Logistics Guide items */
export interface CorporateOperationItem {
  id: string;
  title: string;
  summary: string;
  details: string[];
}

export const corporateOperationsList: CorporateOperationItem[] = [
  {
    id: "event-coordination",
    title: "Event Coordination and Timelines",
    summary: "Dedicated day-of coordination with structured timelines from arrival to wrap-up.",
    details: [
      "Advance agenda alignment with designated corporate event leads",
      "Structured schedule with designated time slots for briefings, hands-on farming, meals, and reflection",
      "Real-time event facilitation by senior FURAA coordinators",
      "Weather-responsive contingency scheduling for seasonal conditions",
    ],
  },
  {
    id: "group-supervision",
    title: "Group Supervision and Zoning",
    summary: "Organized team groupings and constant field oversight across open farm areas.",
    details: [
      "Designated team leaders and dedicated FURAA field marshals per cohort",
      "Clearly zoned farm areas ensuring participants remain in designated visitor zones",
      "Periodic headcounts and check-in milestones throughout the day",
      "Restricted access protocols for all working farm machinery zones",
    ],
  },
  {
    id: "safe-outdoor-activities",
    title: "Safe Outdoor Activities",
    summary: "Managed physical activities designed for adult participants of varying fitness levels.",
    details: [
      "All physical activities (harvesting, plantation, traditional games) are voluntary and guided",
      "Pre-activity safety orientation and demonstration of proper hand-tool usage",
      "Ergonomic guidance and shade breaks to avoid fatigue during field activities",
      "Sun protection guidance and continuous access to shaded pavilions",
    ],
  },
  {
    id: "transport-arrival",
    title: "Transport, Arrival and Parking",
    summary: "Streamlined logistics for private buses, shared shuttles, and personal vehicles.",
    details: [
      "Detailed route directions and geo-coordinates provided 7 days prior to the event",
      "Dedicated on-site parking for company buses, private cars, and two-wheelers",
      "Gate reception team assisting with disembarkation and welcome orientation",
      "Designated vehicle waiting bays with driver resting facilities where available",
    ],
  },
  {
    id: "first-aid-emergency",
    title: "First-Aid Readiness and Emergency Escalation",
    summary: "On-site medical preparedness and pre-planned emergency response protocols.",
    details: [
      "Comprehensive first-aid station stocked for outdoor scrapes, sprains, and insect stings",
      "Trained first-aid responders present throughout the duration of the corporate visit",
      "Designated emergency evacuation vehicle on standby at all times",
      "Pre-mapped route to nearest certified healthcare facility (within 15–20 minutes)",
    ],
  },
  {
    id: "corporate-outing-requirements",
    title: "Corporate Team Outing Requirements",
    summary: "Participant guidelines to ensure an enjoyable, safe, and eco-friendly visit.",
    details: [
      "Footwear and Attire: Mandatory closed-toe shoes; comfortable outdoor attire, hats, and sunscreen recommended",
      "Hydration: Continuous availability of purified drinking water; personal reusable bottles encouraged",
      "Eco-Clean Zone: Zero single-use plastics permitted on farm grounds; designated waste segregation bins",
      "Smoke-Free and Substance-Free: Complete prohibition of smoking, tobacco, and alcohol across all farm perimeters",
      "Advance Booking: Minimum 14 business days advance notice required for customized corporate event reservations",
    ],
  },
];

/** Preserved historical structures for complete backward compatibility */
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

export const institutionPartners: InstitutionPartner[] = [
  {
    id: "farm-universities-advisory",
    name: "Farm Universities Academic Advisory",
    shortName: "Farm Universities",
    location: "Bengaluru and Karnataka State",
    overview:
      "FURAA draws on the academic research and agricultural extension publications of leading agricultural universities to strengthen the scientific foundation of our educational programs. Academic advisory relationships and collaborative frameworks are currently in exploratory development.",
    collaborationAreas: [
      "Agricultural knowledge guidance for curriculum development",
      "Scientific understanding of soil, crops, and ecosystems",
      "Practical learning methodology support",
      "Agricultural research exposure for senior students",
      "Educator and mentor training perspectives",
    ],
    statusNote:
      "Academic guidance and research reference. Collaborative discussions are ongoing; no formal accreditation, institutional endorsement, or official university affiliation is currently claimed.",
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

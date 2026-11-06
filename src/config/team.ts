/**
 * Team & Leadership Configuration for FURAA
 * Central data source for The People Behind FURAA.
 */

export type FallbackType =
  | "agriculture-education"
  | "strategy-innovation"
  | "agronomy-sustainability"
  | "technology-partnerships";

export interface TeamMember {
  id: string;
  name: string;
  title: string;
  focus: string;
  bio: string;
  image: {
    src: string | null;
    alt: string;
    objectPosition?: string;
  };
  fallbackType: FallbackType;
  order: number;
}

export interface WorkTogetherItem {
  id: string;
  discipline: string;
  leadName: string;
  summary: string;
  description: string;
}

export const teamHeading = "The People Behind FURAA";
export const teamIntroduction =
  "Bringing together agricultural expertise, education, technology, and partnerships to create meaningful learning experiences.";

export const teamMembers: TeamMember[] = [
  {
    id: "dr-kavyashree-c",
    name: "Dr. Kavyashree C.",
    title: "Co-Founder & Director",
    focus: "Agricultural Education & Learning",
    bio: "With a Ph.D. in Agricultural Extension from UAS, Bangalore, Dr. Kavyashree shapes FURAA’s experiential learning programmes, connecting agricultural knowledge with curiosity, sustainability, and practical discovery.",
    image: {
      src: null,
      alt: "Dr. Kavyashree C. — Co-Founder & Director",
    },
    fallbackType: "agriculture-education",
    order: 1,
  },
  {
    id: "dr-mukhesh-kumar",
    name: "Dr. Mukhesh Kumar",
    title: "Co-Founder & Director",
    focus: "Strategy, Marketing & Innovation",
    bio: "With qualifications in pharmacy and healthcare management, Dr. Mukhesh leads organisational strategy, marketing, and collaboration, bringing agriculture, education, and technology together through practical, innovative initiatives.",
    image: {
      src: "/images/founders/Dr.Mukesh_Kumar.jpeg",
      alt: "Dr. Mukhesh Kumar — Co-Founder & Director",
      objectPosition: "center 15%",
    },
    fallbackType: "strategy-innovation",
    order: 2,
  },
  {
    id: "mr-vivekananda-reddy",
    name: "Mr. Vivekananda Reddy",
    title: "Technical Consultant",
    focus: "Agronomy & Sustainable Practices",
    bio: "An agriculture postgraduate specialising in Agronomy, Vivekananda brings 10 years of experience across agriculture, horticulture, and landscape management, contributing practical expertise in sustainable cultivation and resource management.",
    image: {
      src: null,
      alt: "Mr. Vivekananda Reddy — Technical Consultant",
    },
    fallbackType: "agronomy-sustainability",
    order: 3,
  },
  {
    id: "mr-tejus-reddy",
    name: "Mr. Tejus Reddy",
    title: "Co-Founder",
    focus: "Technology & Partnerships",
    bio: "Tejus leads website development and technical coordination while supporting business operations, client acquisition, and relationship management to strengthen FURAA’s digital presence and school partnerships.",
    image: {
      src: "/images/founders/Mr.Tejus_Reddy.jpg",
      alt: "Mr. Tejus Reddy — Co-Founder",
      objectPosition: "center 20%",
    },
    fallbackType: "technology-partnerships",
    order: 4,
  },
];

export const howWeWorkTogether: WorkTogetherItem[] = [
  {
    id: "work-agri-learning",
    discipline: "Agricultural learning",
    leadName: "Kavyashree",
    summary: "Kavyashree shapes educational experiences.",
    description:
      "Shapes curricula, designs inquiry-led field activities, and connects school science outcomes directly to hands-on agricultural exploration.",
  },
  {
    id: "work-strategy-outreach",
    discipline: "Strategy and outreach",
    leadName: "Mukhesh",
    summary: "Mukhesh develops organisational direction and visibility.",
    description:
      "Guides institutional strategy, builds educational partnerships, and introduces creative pathways that make experiential learning accessible to schools.",
  },
  {
    id: "work-tech-guidance",
    discipline: "Technical guidance",
    leadName: "Vivekananda",
    summary: "Vivekananda contributes agricultural expertise.",
    description:
      "Advises on agronomic practices, farm biodiversity, soil management, and sustainable cultivation methods applied across FURAA learning centers.",
  },
  {
    id: "work-tech-partnerships",
    discipline: "Technology and partnerships",
    leadName: "Tejus",
    summary: "Tejus supports digital delivery and client relationships.",
    description:
      "Oversees digital infrastructure, coordinates school outreach, and ensures smooth operational delivery for all educational engagements.",
  },
];

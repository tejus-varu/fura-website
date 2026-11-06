/**
 * Team & Leadership Configuration for FURAA
 * People Behind FURAA profile cards.
 * Uses neutral placeholder content pending final verified credentials.
 */

export interface TeamMember {
  id: string;
  name: string;
  role: string;
  bio: string;
  qualifications?: string;
  linkedinUrl?: string;
  image: {
    src: string;
    alt: string;
  };
  order: number;
}

export const teamMembers: TeamMember[] = [
  {
    id: "team-agronomy",
    name: "Agricultural Education & Leadership",
    role: "Academic Agronomy Advisory",
    bio: "Profile details coming soon.",
    qualifications: "Field Agronomy & Curriculum Design",
    image: {
      src: "/images/hero/NAD06335.JPG",
      alt: "Agronomy educator guiding soil observation",
    },
    order: 1,
  },
  {
    id: "team-pedagogy",
    name: "Experiential Curriculum Specialist",
    role: "School Learning Integration",
    bio: "Profile details coming soon.",
    qualifications: "Experiential Pedagogy & Outdoor Safety",
    image: {
      src: "/images/programs/NAD06204.JPG",
      alt: "Curriculum facilitator guiding hands-on student activity",
    },
    order: 2,
  },
  {
    id: "team-operations",
    name: "Field Operations & Farm Safety",
    role: "Farm Operations Lead",
    bio: "Profile details coming soon.",
    qualifications: "Child-Safe Field Supervision & Logistics",
    image: {
      src: "/images/hero/NAD06383.JPG",
      alt: "Farm operations facilitator supervising crop field trails",
    },
    order: 3,
  },
  {
    id: "team-heritage",
    name: "Folk Arts & Rural Culture Lead",
    role: "Traditional Crafts Curator",
    bio: "Profile details coming soon.",
    qualifications: "Indigenous Crafts & Folk Heritage",
    image: {
      src: "/images/modules/NAD06157.JPG",
      alt: "Folk culture curator guiding traditional pottery and rural crafts",
    },
    order: 4,
  },
];

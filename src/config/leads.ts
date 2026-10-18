/**
 * Lead & Book a Demo Configuration for FURAA
 * Centralized contact definitions, program categories, and WhatsApp helpers.
 */

export interface LeadSubmission {
  id?: string;
  inquiryType: "school" | "corporate" | "camp" | "general";
  orgName: string;
  contactName: string;
  designation?: string;
  phone: string;
  email: string;
  city: string;
  participantCount?: string;
  classRange?: string;
  selectedPrograms: string[];
  transportRequired: "yes" | "no" | "undecided";
  preferredDate?: string;
  requirements?: string;
  sourcePage?: string;
  consentAgreed: boolean;
}

export const contactConfig = {
  officialEmail: "admin@myfuraa.com",
  notificationEmail: "admin@myfuraa.com",
  officialPhone: "+91 9449490940",
  businessPhone: "+91 9449490940",
  // Formatted for international WhatsApp deep-linking without '+' or dashes
  whatsappNumber: "919449490940",
  address: "No. 18, Lalbagh Fort Road, Bengaluru - 560002",
};

export const inquiryTypeOptions = [
  { id: "school", label: "School Curriculum Demo", description: "CBSE/ICSE integrated modules and farm fieldwork" },
  { id: "corporate", label: "Corporate Outing / CSR", description: "Team nature immersion and CSR sustainability partnerships" },
  { id: "camp", label: "Special Seasonal Camp", description: "Summer, Monsoon, or Harvesting multi-day student camps" },
  { id: "general", label: "General Farm Partnership", description: "Farm host inquiries, university dialogue, or other collaborations" },
] as const;

export const availableProgramOptions = [
  {
    category: "Grade Modules (Classes 1–10)",
    items: [
      { id: "mod_foundation", label: "Foundation Module (Classes 1–4)" },
      { id: "mod_exploration", label: "Exploration Module (Classes 5–8)" },
      { id: "mod_specialization", label: "Specialization Module (Classes 9–10)" },
    ],
  },
  {
    category: "Academic Integration Models",
    items: [
      { id: "model_annual", label: "Annual Module (Year-Round Curriculum)" },
      { id: "model_term", label: "Term Module (3–4 Month Immersion)" },
      { id: "model_workshop", label: "Intensive 2–3 Day Workshop" },
    ],
  },
  {
    category: "Special Seasonal Camps",
    items: [
      { id: "camp_summer", label: "Summer Camps (March — May)" },
      { id: "camp_monsoon", label: "Monsoon Camps (July — September)" },
      { id: "camp_harvest", label: "Harvesting Camps (November — January)" },
    ],
  },
  {
    category: "FURAA Farm Category Interests",
    items: [
      { id: "farm_rural", label: "FURAA Rural Farms (Traditional Roots)" },
      { id: "farm_commercial", label: "FURAA Commercial Farms (Modern Polyhouse)" },
      { id: "farm_agroforest", label: "FURAA Agro-Forests (Permaculture and Biodiversity)" },
      { id: "farm_animal", label: "FURAA Animal Farms (Pastoral Livestock)" },
      { id: "farm_nutri", label: "FURAA Nutri Gardens (Microgreens and Edibles)" },
    ],
  },
];

/**
 * Generates a clean, user-initiated click-to-WhatsApp URL (Mode 1 Fallback).
 * Contains a pre-filled summary of their inquiry without exposing unnecessary personal data.
 */
export function generateWhatsAppLink(lead: {
  id?: string;
  inquiryType: string;
  orgName: string;
  contactName: string;
  selectedPrograms?: string[];
  preferredDate?: string;
}): string {
  const reference = lead.id || "NEW-INQUIRY";
  const typeLabel =
    lead.inquiryType === "corporate"
      ? "Corporate Outing / CSR"
      : lead.inquiryType === "camp"
      ? "Special Camp"
      : "School Curriculum Demo";

  const programsSummary =
    lead.selectedPrograms && lead.selectedPrograms.length > 0
      ? lead.selectedPrograms.slice(0, 3).join(", ")
      : "General Curriculum";

  const messageText = `Hello FURAA Admissions! 🌾
I have submitted a demonstration inquiry on your website:
• Ref ID: ${reference}
• Organization: ${lead.orgName}
• Contact: ${lead.contactName}
• Interest: ${typeLabel} (${programsSummary})
${lead.preferredDate ? `• Preferred Date: ${lead.preferredDate}` : ""}

Please share your availability and curriculum prospectus. Thank you!`;

  return `https://wa.me/${contactConfig.whatsappNumber}?text=${encodeURIComponent(messageText)}`;
}

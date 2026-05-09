import { Metadata } from "next";
import { brand } from "@/config/brand";
import { Sprout, Palette, TreePine, Droplets, Wheat, Recycle, Home, Sun } from "lucide-react";
import PageHero from "@/components/layout/PageHero";
import ProgramDetailCard from "@/components/ui/ProgramDetailCard";
import CtaBlock from "@/components/ui/CtaBlock";
import JuniorModuleCallout from "@/components/sections/JuniorModuleCallout";

export const metadata: Metadata = {
  title: `Our Programs | ${brand.name}`,
  description: `Explore ${brand.name}'s structured modules including Agriculture, Folk Art, Nature Ecology, Hydroponics, Nutrition, and Summer Camps.`,
};

const programs = [
  {
    icon: Sprout,
    title: "Agriculture & Organic Farming",
    badge: "Core Module",
    classBands: "Class 1 to 10",
    learn: "Soil preparation, seasonal cycles, natural pest control, and the journey of food from seed to harvest.",
    do: "Students engage in active sowing, watering, weeding, and organic harvesting under mentor guidance.",
    outcome: "Instills discipline, patience, and a profound respect for the labor behind food production.",
    safetyNote: "Students must wear closed-toe shoes. Tools used are age-appropriate and blunted. Constant supervision.",
  },
  {
    icon: Palette,
    title: "Folk Arts & Rural Culture",
    badge: "Creative",
    classBands: "Class 1 to 10",
    learn: "India's rural heritage, Warli art, natural dyes, and traditional storytelling.",
    do: "Hands-on pottery making, painting with natural colors, and participating in traditional rural games.",
    outcome: "Builds creative expression rooted in living tradition and improves fine motor skills.",
  },
  {
    icon: TreePine,
    title: "Nature & Ecology Learning",
    classBands: "Class 1 to 8",
    learn: "Local flora and fauna identification, the water cycle, and the importance of biodiversity.",
    do: "Guided bird walks, leaf-rubbing, soil sampling, and insect observation.",
    outcome: "Develops an innate connection to the environment and practical knowledge of biology.",
    safetyNote: "Activity occurs in designated child-safe green zones away from farm machinery.",
  },
  {
    icon: Droplets,
    title: "Hydroponics & Soilless Culture",
    badge: "Tech & Science",
    classBands: "Class 6 to 10",
    learn: "Modern agricultural technology, water conservation, pH balancing, and nutrient solutions.",
    do: "Setting up small hydroponic kits, measuring water pH, and observing fast-growth crops.",
    outcome: "Bridges traditional wisdom with future tech, inspiring interest in agricultural science.",
  },
  {
    icon: Wheat,
    title: "Healthy Millet Food Awareness",
    classBands: "Class 1 to 10",
    learn: "The nutritional value of indigenous millets, the impact of junk food, and traditional diet structures.",
    do: "Millet tasting sessions, identifying different grains, and simple fireless cooking activities.",
    outcome: "Encourages students to make conscious, healthier food choices in their daily lives.",
  },
  {
    icon: Recycle,
    title: "Waste-to-Art & Sustainability",
    classBands: "Class 1 to 10",
    learn: "Environmental responsibility, composting, and upcycling farm waste.",
    do: "Creating art pieces from dried leaves and twigs, and building layered compost bins.",
    outcome: "Teaches the concept of a circular economy in a highly tangible, creative way.",
  },
  {
    icon: Home,
    title: "Terrace Gardening in Schools",
    badge: "In-School Setup",
    classBands: "School Campus",
    learn: "Urban farming feasibility, space management, and continuous care.",
    do: "Students help set up and maintain a living lab right on the school terrace or grounds.",
    outcome: "Provides year-round environmental engagement without needing to leave the campus.",
  },
  {
    icon: Sun,
    title: "Experiential Summer Camps",
    classBands: "Class 1 to 8",
    learn: "A condensed, immersive mix of agriculture, folk arts, and nature.",
    do: "Multi-day outdoor programs during school vacations with intensive workshops and rural games.",
    outcome: "A productive, screen-free summer break that builds independence and new friendships.",
  },
];

export default function ProgramsPage() {
  return (
    <>
      <PageHero
        badge="Our Offerings"
        badgeVariant="green"
        title="Modules Built for Discovery"
        description={`From organic farming to folk arts and hydroponics, every ${brand.shortName} module is designed to be age-appropriate, hands-on, and curriculum-linked.`}
      />

      <section className="section-pad bg-white">
        <div className="container-xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {programs.map((prog, idx) => (
              <ProgramDetailCard key={idx} {...prog} />
            ))}
          </div>
        </div>
      </section>

      <JuniorModuleCallout />

      <section className="section-pad bg-white">
        <div className="container-xl">
          <CtaBlock 
            title="Want to customize these modules for your school?"
            description="We can tailor the module mix based on your students' age groups and the academic term. Let's discuss your requirements."
            buttonText="Discuss Partnership"
            href="/partnership"
          />
        </div>
      </section>
    </>
  );
}

import { Metadata } from "next";
import Link from "next/link";
import { brand } from "@/config/brand";
import { siteImages } from "@/config/images";
import { Sprout, Palette, TreePine, Droplets, Wheat, Recycle, Home, Sun, Cpu, Trees, Camera, ArrowRight } from "lucide-react";
import PageHero from "@/components/layout/PageHero";
import ProgramDetailCard from "@/components/ui/ProgramDetailCard";
import ImagePlaceholder from "@/components/ui/ImagePlaceholder";
import Button from "@/components/ui/Button";
import CtaBlock from "@/components/ui/CtaBlock";
import LearningModulesSection from "@/components/sections/LearningModulesSection";

export const metadata: Metadata = {
  title: `Our Programs | ${brand.name}`,
  description: `Explore ${brand.name}'s structured modules including Agriculture, Folk Art, Nature Ecology, Hydroponics, Nutrition, and Summer Camps.`,
};

const programs = [
  {
    icon: Sprout,
    title: "Agriculture and Organic Farming",
    badge: "Core Module",
    classBands: "Classes 1–10 (Foundation, Exploration, Specialization)",
    learn: "Soil preparation, seasonal cycles, natural pest control, and the journey of food from seed to harvest.",
    do: "Students engage in active sowing, watering, weeding, and organic harvesting under mentor guidance.",
    outcome: "Instills discipline, patience, and a profound respect for the labor behind food production.",
    safetyNote: "Students must wear closed-toe shoes. Tools used are age-appropriate and blunted. Constant supervision.",
  },
  {
    icon: Palette,
    title: "Folk Arts and Rural Culture",
    badge: "Creative",
    classBands: "Classes 1–10 (Foundation, Exploration, Specialization)",
    learn: "India's rural heritage, Warli art, natural dyes, and traditional storytelling.",
    do: "Hands-on pottery making, painting with natural colors, and participating in traditional rural games.",
    outcome: "Builds creative expression rooted in living tradition and improves fine motor skills.",
  },
  {
    icon: TreePine,
    title: "Nature and Ecology Learning",
    classBands: "Classes 1–8 (Foundation and Exploration)",
    learn: "Local flora and fauna identification, the water cycle, and the importance of biodiversity.",
    do: "Guided bird walks, leaf-rubbing, soil sampling, and insect observation.",
    outcome: "Develops an innate connection to the environment and practical knowledge of biology.",
    safetyNote: "Activity occurs in designated child-safe green zones away from farm machinery.",
  },
  {
    icon: Droplets,
    title: "Hydroponics and Soilless Culture",
    badge: "Tech and Science",
    classBands: "Classes 5–10 (Exploration and Specialization)",
    learn: "Modern agricultural technology, water conservation, pH balancing, and nutrient solutions.",
    do: "Setting up small hydroponic kits, measuring water pH, and observing fast-growth crops.",
    outcome: "Bridges traditional wisdom with future tech, inspiring interest in agricultural science.",
  },
  {
    icon: Wheat,
    title: "Healthy Millet Food Awareness",
    classBands: "Classes 1–10 (Foundation, Exploration, Specialization)",
    learn: "The nutritional value of indigenous millets, the impact of junk food, and traditional diet structures.",
    do: "Millet tasting sessions, identifying different grains, and simple fireless cooking activities.",
    outcome: "Encourages students to make conscious, healthier food choices in their daily lives.",
  },
  {
    icon: Recycle,
    title: "Waste-to-Art and Sustainability",
    classBands: "Classes 1–10 (Foundation, Exploration, Specialization)",
    learn: "Environmental responsibility, composting, and upcycling farm waste.",
    do: "Creating art pieces from dried leaves and twigs, and building layered compost bins.",
    outcome: "Teaches the concept of a circular economy in a highly tangible, creative way.",
  },
  {
    icon: Home,
    title: "Terrace Gardening in Schools",
    badge: "In-School Setup",
    classBands: "School Campus (All Classes)",
    learn: "Urban farming feasibility, space management, and continuous care.",
    do: "Students help set up and maintain a living lab right on the school terrace or grounds.",
    outcome: "Provides year-round environmental engagement without needing to leave the campus.",
  },
  {
    icon: Sun,
    title: "Experiential Summer Camps",
    classBands: "Classes 1–8 (Foundation and Exploration)",
    learn: "A condensed, immersive mix of agriculture, folk arts, and nature.",
    do: "Multi-day outdoor programs during school vacations with intensive workshops and rural games.",
    outcome: "A productive, screen-free summer break that builds independence and new friendships.",
  },
  {
    icon: Cpu,
    title: "Agricultural Innovation and Technology",
    badge: "Tech and Science",
    classBands: "Classes 5–10 (Exploration and Specialization)",
    learn: "Principles of precision drip irrigation, sensor telemetry, soil monitoring, and climate-controlled greenhouse techniques.",
    do: "Operating modular sensor setups, observing drip emitters, and recording micro-climate environmental variables.",
    outcome: "Equips students with modern agtech awareness and inspires scientific problem-solving.",
    safetyNote: "Low-voltage sensory equipment handled under mentor guidance. Standard electrical safety observed.",
  },
  {
    icon: Trees,
    title: "Biodiversity and Environmental Conservation",
    badge: "Ecology",
    classBands: "Classes 1–10 (Foundation, Exploration, Specialization)",
    learn: "Ecological balance, native flora conservation, beneficial insect habitats, and watershed management.",
    do: "Mapping pollinator pathways, building insect hotels, observing native tree groves, and composting.",
    outcome: "Instills environmental empathy, conservation ethics, and a tangible sense of ecological responsibility.",
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
        bgImage={siteImages.programs.heroBg.src}
        bgPosition={siteImages.programs.heroBg.objectPosition}
      />

      {/* Module Overview Quick Nav */}
      <section className="py-8 bg-emerald-950/10 border-b border-emerald-900/10">
        <div className="container-xl">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <span className="text-xs uppercase font-bold tracking-wider text-[var(--color-green-900)]">
              Curriculum Modules by Class Band:
            </span>
            <div className="flex flex-wrap gap-2">
              <Link
                href="/modules/foundation"
                className="px-3.5 py-1.5 rounded-lg text-xs font-semibold bg-white border border-green-200 text-emerald-800 hover:bg-emerald-50 transition-colors"
              >
                Foundation (Classes 1–4) →
              </Link>
              <Link
                href="/modules/exploration"
                className="px-3.5 py-1.5 rounded-lg text-xs font-semibold bg-white border border-green-200 text-emerald-800 hover:bg-emerald-50 transition-colors"
              >
                Exploration (Classes 5–8) →
              </Link>
              <Link
                href="/modules/specialization"
                className="px-3.5 py-1.5 rounded-lg text-xs font-semibold bg-white border border-green-200 text-emerald-800 hover:bg-emerald-50 transition-colors"
              >
                Specialization (Classes 9–10) →
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="section-pad bg-white">
        <div className="container-xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {programs.map((prog, idx) => (
              <ProgramDetailCard key={idx} {...prog} />
            ))}
          </div>

          {/* Dedicated FURAA Farms Spotlight Banner */}
          <div className="mt-14 p-8 sm:p-10 rounded-3xl bg-gradient-to-r from-[var(--color-green-950)] to-[var(--color-green-900)] text-white shadow-xl flex flex-col lg:flex-row items-center justify-between gap-8 border border-[var(--color-gold-400)]/30">
            <div className="max-w-2xl">
              <span className="badge-pill inline-flex items-center gap-1.5 mb-3 bg-amber-400/20 text-amber-200 border-amber-400/30">
                Experiential Learning Centers
              </span>
              <h3 className="font-display text-2xl sm:text-3xl text-white mb-2">
                Discover the Five Dedicated FURAA Farm Categories
              </h3>
              <p className="text-sm sm:text-base text-[var(--color-green-200)] leading-relaxed">
                Step outside the classroom into our specialized agrarian learning categories: Rural Farms, Commercial Farms, Agro-Forests, Animal Farms, and Nutri Gardens.
              </p>
            </div>
            <Button
              href="/programs/furaa-farms"
              variant="primary"
              size="lg"
              className="shrink-0"
            >
              Explore FURAA Farms
              <ArrowRight size={18} />
            </Button>
          </div>
        </div>
      </section>

      {/* Real Field Activity Showcase */}
      <section className="section-pad bg-emerald-950/5 border-t border-b border-emerald-900/10">
        <div className="container-xl">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <span className="badge-pill inline-flex items-center gap-1.5 mb-3 bg-emerald-100 text-emerald-800 border-emerald-200">
              <Camera size={14} /> Field Moments
            </span>
            <h2 className="text-h2 text-emerald-950">Learning in Action</h2>
            <p className="text-sm sm:text-base text-emerald-800/80 mt-2">
              Authentic snapshots of {brand.shortName} students actively engaging with soil, crops, and traditional agrarian heritage.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
            <ImagePlaceholder
              src={siteImages.programs.highlight1.src}
              alt={siteImages.programs.highlight1.alt}
              caption={siteImages.programs.highlight1.caption}
              badge={siteImages.programs.highlight1.badge}
              aspectRatio="16/9"
              objectPosition={siteImages.programs.highlight1.objectPosition}
            />
            <ImagePlaceholder
              src={siteImages.programs.highlight2.src}
              alt={siteImages.programs.highlight2.alt}
              caption={siteImages.programs.highlight2.caption}
              badge={siteImages.programs.highlight2.badge}
              aspectRatio="16/9"
              objectPosition={siteImages.programs.highlight2.objectPosition}
            />
          </div>
        </div>
      </section>

      <LearningModulesSection />

      <section className="section-pad bg-white">
        <div className="container-xl">
          <CtaBlock 
            title="Want to customize these modules for your school?"
            description="We tailor the module mix based on your students' age groups and academic calendar. Let's discuss your requirements."
            buttonText="Discuss Partnership"
            href="/partnership"
          />
        </div>
      </section>
    </>
  );
}

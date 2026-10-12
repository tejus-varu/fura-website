import { Sprout, Palette, TreePine, Droplets, Wheat, Recycle, Home, Sun, Cpu, Trees } from "lucide-react";
import SectionHeader from "@/components/ui/SectionHeader";
import Badge from "@/components/ui/Badge";
import { brand } from "@/config/brand";

const pillars = [
  {
    id: "agriculture",
    icon: Sprout,
    title: "Agriculture & Organic Farming",
    description:
      "From soil preparation to organic harvesting — students engage with real crops, understand seasonal cycles, and experience the discipline and joy of growing food from seed to table.",
    badge: "Agriculture",
    badgeVariant: "green" as const,
    color: "var(--color-green-700)",
    bgColor: "var(--color-green-50)",
  },
  {
    id: "folk-art",
    icon: Palette,
    title: "Folk Arts & Rural Culture",
    description:
      "Pottery, weaving, natural dyeing, Warli art, and folk storytelling. Students discover India's rich rural heritage and build creative expression rooted in living tradition.",
    badge: "Art & Culture",
    badgeVariant: "gold" as const,
    color: "var(--color-gold-700)",
    bgColor: "var(--color-gold-100)",
  },
  {
    id: "nature",
    icon: TreePine,
    title: "Nature & Ecology Learning",
    description:
      "Bird walks, soil science, composting, plant identification, and water cycle understanding. Students develop a genuine connection with the natural world around them.",
    badge: "Nature Science",
    badgeVariant: "green" as const,
    color: "var(--color-green-500)",
    bgColor: "var(--color-green-50)",
  },
  {
    id: "hydroponics",
    icon: Droplets,
    title: "Hydroponics & Soilless Culture",
    description:
      "Students learn and experiment with modern growing methods — hydroponics, aquaponics, and soilless media. Bridges traditional farming wisdom with future food technology.",
    badge: "Modern Farming",
    badgeVariant: "sky" as const,
    color: "var(--color-sky-500)",
    bgColor: "var(--color-sky-100)",
  },
  {
    id: "nutrition",
    icon: Wheat,
    title: "Healthy Millet Food Awareness",
    description:
      "Millet varieties, traditional recipes, seed-to-plate journeys, and honest conversations about diet, junk food, gut health, and the power of traditional Indian food culture.",
    badge: "Nutrition",
    badgeVariant: "orange" as const,
    color: "var(--color-orange-500)",
    bgColor: "var(--color-orange-100)",
  },
  {
    id: "waste-to-art",
    icon: Recycle,
    title: "Waste-to-Art & Creative Sustainability",
    description:
      "Agricultural waste becomes artwork, craft, and story. Students learn environmental responsibility through creativity — turning discarded materials into something meaningful and beautiful.",
    badge: "Sustainability",
    badgeVariant: "brown" as const,
    color: "var(--color-brown-500)",
    bgColor: "var(--color-brown-100)",
  },
  {
    id: "terrace-gardening",
    icon: Home,
    title: "Terrace Gardening in Schools",
    description:
      `${brand.shortName} helps schools set up productive terrace gardens on campus — giving students a living lab for urban farming, composting, and ecology right within school premises.`,
    badge: "School Campus",
    badgeVariant: "sky" as const,
    color: "var(--color-sky-700)",
    bgColor: "var(--color-sky-100)",
  },
  {
    id: "summer-camps",
    icon: Sun,
    title: "Summer Camps",
    description:
      "Immersive multi-day programs during school vacations — combining weekly farm sessions, art workshops, folk culture, nutrition education, and outdoor exploration for a full experiential break.",
    badge: "Seasonal",
    badgeVariant: "gold" as const,
    color: "var(--color-gold-500)",
    bgColor: "var(--color-gold-100)",
  },
  {
    id: "agri-tech",
    icon: Cpu,
    title: "Agricultural Innovation & Technology",
    description:
      "Explores precision irrigation, automated soil sensors, micro-climate monitoring, and smart farming practices — connecting modern STEM concepts to real-world agrarian challenges.",
    badge: "Innovation",
    badgeVariant: "sky" as const,
    color: "var(--color-sky-600)",
    bgColor: "var(--color-sky-100)",
  },
  {
    id: "biodiversity-conservation",
    icon: Trees,
    title: "Biodiversity & Environmental Conservation",
    description:
      "Students map pollinator corridors, investigate beneficial farm insects, study native tree species, and understand watershed stewardship — developing genuine ecological responsibility.",
    badge: "Conservation",
    badgeVariant: "green" as const,
    color: "var(--color-green-700)",
    bgColor: "var(--color-green-100)",
  },
];

export default function ProgramPillarsSection() {
  return (
    <section
      id="program-pillars"
      className="section-pad"
      style={{
        background: "linear-gradient(180deg, var(--color-earth) 0%, var(--color-cream) 100%)",
      }}
      aria-label="Program pillars"
    >
      <div className="container-xl">
        <SectionHeader
          badge="What We Offer"
          badgeVariant="gold"
          title="Ten Pillars of Experiential Learning"
          subtitle={`${brand.name} is not just a farm visit. Our programs weave together agriculture, folk arts, rural culture, ecology, and nutrition — giving schools a genuinely holistic outdoor education partnership.`}
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-5">
          {pillars.map((pillar) => (
            <div
              key={pillar.id}
              className="card-base p-6 flex flex-col gap-4 transition-all duration-200 hover:-translate-y-1 hover:shadow-md"
            >
              {/* Icon */}
              <div
                className="w-11 h-11 rounded-2xl flex items-center justify-center shrink-0"
                style={{ background: pillar.bgColor }}
              >
                <pillar.icon size={20} style={{ color: pillar.color }} />
              </div>

              {/* Badge */}
              <Badge variant={pillar.badgeVariant}>{pillar.badge}</Badge>

              {/* Content */}
              <div>
                <h3
                  className="font-display text-base font-semibold mb-2 leading-snug"
                  style={{ color: "var(--color-green-900)" }}
                >
                  {pillar.title}
                </h3>
                <p
                  className="text-xs leading-relaxed"
                  style={{ color: "var(--color-green-700)" }}
                >
                  {pillar.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

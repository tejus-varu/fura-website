import type { Program, ClassBand } from "@/types";

export const programs: Program[] = [
  {
    id: "classroom-theory",
    title: "Classroom Theory Sessions",
    description:
      "Structured pre-farm theory sessions conducted in school every Friday. Concepts in agriculture, nutrition, and ecology are introduced before the hands-on outdoor experience.",
    icon: "BookOpen",
    category: "Core Learning",
    classBands: ["1-5", "6-8", "9-10"],
    highlights: [
      "Curriculum-linked content",
      "Interactive worksheets",
      "Trained educator delivery",
      "Concept-first methodology",
    ],
  },
  {
    id: "farm-hands-on",
    title: "Hands-On Farm Learning",
    description:
      "Saturday farm sessions where students apply classroom concepts in real agricultural settings. Soil preparation, sowing, watering, and crop observation under trained mentors.",
    icon: "Sprout",
    category: "Agriculture",
    classBands: ["1-5", "6-8", "9-10"],
    highlights: [
      "Seasonal crop cycles",
      "Soil health understanding",
      "Responsible farm behaviour",
      "Mentor-supervised activity zones",
    ],
  },
  {
    id: "hydroponics",
    title: "Hydroponics & Soilless Culture",
    description:
      "Students learn and experiment with modern growing methods — hydroponics, aquaponics, and soilless media. Bridges traditional farming with future food technology.",
    icon: "Droplets",
    category: "Modern Farming",
    classBands: ["6-8", "9-10"],
    highlights: [
      "Hydroponic system demonstration",
      "Nutrient solution experiments",
      "Future food conversations",
      "Lab-to-farm thinking",
    ],
  },
  {
    id: "folk-art",
    title: "Folk Art & Cultural Activities",
    description:
      "Children experience traditional Indian rural culture through folk art, pottery, weaving, and village games. Builds cultural pride, creativity, and community connection.",
    icon: "Palette",
    category: "Art & Culture",
    classBands: ["1-5", "6-8", "9-10"],
    highlights: [
      "Folk art workshops",
      "Rural games (Lagori, Kabaddi, Gilli-Danda)",
      "Pottery and craft",
      "Cultural storytelling sessions",
    ],
  },
  {
    id: "nutrition",
    title: "Nutrition & Healthy Food Education",
    description:
      "Sessions on millet-based food traditions, diet awareness, and understanding the journey from seed to plate. Includes tasting of traditional healthy foods and discussion of junk food impact.",
    icon: "Wheat",
    category: "Nutrition",
    classBands: ["1-5", "6-8", "9-10"],
    highlights: [
      "Millet variety tasting",
      "Junk food vs. traditional food",
      "Seed-to-plate journey",
      "Diet and gut health basics",
    ],
  },
  {
    id: "terrace-urban",
    title: "Terrace & Urban Farming",
    description:
      "Demonstrates how productive farming can happen in urban spaces. Students design and build small terrace garden setups — practical, empowering, and directly applicable at home.",
    icon: "Building2",
    category: "Modern Farming",
    classBands: ["6-8", "9-10"],
    highlights: [
      "Container and grow-bag farming",
      "Composting basics",
      "Urban food security concepts",
      "Take-home plant kit option",
    ],
  },
  {
    id: "organic-harvest",
    title: "Organic Harvesting Experience",
    description:
      "Students participate in real harvesting — picking vegetables and fruits from organically grown plots. The connection between effort, patience, and reward is deeply experiential.",
    icon: "Apple",
    category: "Agriculture",
    classBands: ["1-5", "6-8", "9-10"],
    highlights: [
      "Seasonal organic produce",
      "Harvesting techniques",
      "Post-harvest handling",
      "Zero-waste food awareness",
    ],
  },
  {
    id: "waste-to-art",
    title: "Waste-to-Art Activities",
    description:
      "Children convert agricultural and natural waste into creative art and functional objects. Develops environmental thinking, creativity, and the joy of making something from nothing.",
    icon: "Recycle",
    category: "Art & Culture",
    classBands: ["1-5", "6-8", "9-10"],
    highlights: [
      "Leaf print and natural dye art",
      "Upcycled craft projects",
      "Compost storytelling",
      "Creative environmental thinking",
    ],
  },
];

export const programCategories = [
  "Core Learning",
  "Agriculture",
  "Modern Farming",
  "Art & Culture",
  "Nutrition",
] as const;

export const CLASS_BANDS: ClassBand[] = ["1-5", "6-8", "9-10"];

export const classBandLabels: Record<ClassBand, string> = {
  "1-5": "Class 1 – 5",
  "6-8": "Class 6 – 8",
  "9-10": "Class 9 – 10",
};

export const classBandDescriptions: Record<ClassBand, string> = {
  "1-5":
    "Foundational sensory learning — storytelling, play, tactile farm activities, and simple nature observation for young explorers.",
  "6-8":
    "Inquiry-led discovery — connecting science concepts with farming, arts with ecology, and culture with community.",
  "9-10":
    "Applied and reflective learning — food systems, sustainable farming, entrepreneurship, and social responsibility.",
};

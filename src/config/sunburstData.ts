import type { SunburstNode, ClassBand } from "@/types";

/**
 * Sunburst chart data — hierarchical structure:
 * Root → Module Band → Domain → Activity
 *
 * Three bands matching the canonical module system:
 *   "1-4"  → Foundation Module
 *   "5-8"  → Exploration Module
 *   "9-10" → Specialization Module
 *
 * NOTE ON PERCENTAGES & ALLOCATIONS:
 * Segment weights represent proposed program emphasis (relative allocation)
 * designed for educational curriculum balance. They are not fabricated
 * empirical research statistics.
 */

export interface BandSummary {
  band: ClassBand;
  moduleName: string;
  classRange: string;
  focus: string;
  learningApproach: string;
}

export const bandSummaries: Record<ClassBand, BandSummary> = {
  "1-4": {
    band: "1-4",
    moduleName: "Foundation Module",
    classRange: "Classes 1–4",
    focus: "Sensory learning, observation, planting, and creative rural art.",
    learningApproach: "Short engaging theory, simple hands-on practice, storytelling, and safe supervision.",
  },
  "5-8": {
    band: "5-8",
    moduleName: "Exploration Module",
    classRange: "Classes 5–8",
    focus: "Discovery, experiments, hands-on cultivation, and ecosystem understanding.",
    learningApproach: "Concept understanding, guided experimentation, collaborative group activities, and practical application.",
  },
  "9-10": {
    band: "9-10",
    moduleName: "Specialization Module",
    classRange: "Classes 9–10",
    focus: "Applied agricultural science, innovation, sustainability, and research.",
    learningApproach: "Deeper theory, research-oriented projects, experimental observation, and critical thinking.",
  },
};

export const sunburstData: SunburstNode = {
  name: "FURA Programs",
  children: [
    // ─── FOUNDATION MODULE — Classes 1–4 ─────────────────────────────────────
    {
      name: "Foundation",
      color: "#4A9A52",
      description: "Early learning, sensory exploration, and playful nature discovery.",
      children: [
        {
          name: "Agriculture",
          color: "#2D6A35",
          description: "Sensory engagement with soil, seeds, and seasonal growth.",
          children: [
            {
              name: "Seed Sowing",
              value: 18,
              color: "#2D6A35",
              description: "Hands-on planting of native seeds in nursery beds.",
              learningObjective: "Understand how plants originate and practice gentle handling.",
            },
            {
              name: "Plant Observation",
              value: 14,
              color: "#4A9A52",
              description: "Observing leaf patterns, stem textures, and root structures.",
              learningObjective: "Develop early scientific observation and sensory awareness.",
            },
            {
              name: "Organic Harvest",
              value: 10,
              color: "#6AB872",
              description: "Gathering ready vegetables under mentor guidance.",
              learningObjective: "Connect effort with food harvesting in a farm setting.",
            },
          ],
        },
        {
          name: "Folk Arts",
          color: "#C9952A",
          description: "Traditional rural creativity and cultural storytelling.",
          children: [
            {
              name: "Nature Art",
              value: 16,
              color: "#C9952A",
              description: "Creating art using fallen leaves, seeds, and natural dyes.",
              learningObjective: "Appreciate organic textures and sustainable materials.",
            },
            {
              name: "Rural Games",
              value: 12,
              color: "#D9AB50",
              description: "Traditional village games focusing on coordination and teamwork.",
              learningObjective: "Experience joyful physical movement and rural sports culture.",
            },
            {
              name: "Folk Storytelling",
              value: 10,
              color: "#E8C070",
              description: "Tales of monsoon cycles, local ecology, and farmer traditions.",
              learningObjective: "Build listening skills and cultural empathy.",
            },
          ],
        },
        {
          name: "Nature & Ecology",
          color: "#5B9DB8",
          description: "Outdoor walks and child-safe environmental exploration.",
          children: [
            {
              name: "Nature Walk",
              value: 14,
              color: "#5B9DB8",
              description: "Supervised trail exploration observing birds, insects, and trees.",
              learningObjective: "Foster curiosity and respect for living ecosystems.",
            },
            {
              name: "Soil Exploration",
              value: 8,
              color: "#8FC4D8",
              description: "Feeling different soil types (clay, sand, loam) with hands.",
              learningObjective: "Discover that soil is a living foundation, not just dirt.",
            },
          ],
        },
        {
          name: "Nutrition",
          color: "#E07B39",
          description: "Foundational food literacy and healthy habit formation.",
          children: [
            {
              name: "Food Awareness",
              value: 10,
              color: "#E07B39",
              description: "Exploring traditional crops, millets, and fresh garden foods.",
              learningObjective: "Recognize whole foods and where daily meals originate.",
            },
            {
              name: "Natural Drinks",
              value: 6,
              color: "#F0A870",
              description: "Tasting refreshing herbal and seasonal welcome drinks.",
              learningObjective: "Learn about natural hydration without artificial additives.",
            },
          ],
        },
      ],
    },

    // ─── EXPLORATION MODULE — Classes 5–8 ────────────────────────────────────
    {
      name: "Exploration",
      color: "#2D6A35",
      description: "Inquiry-led discovery, collaborative experiments, and ecosystem science.",
      children: [
        {
          name: "Agriculture",
          color: "#1A3D1F",
          description: "Core cultivation science, soil physics, and plant biology.",
          children: [
            {
              name: "Cultivation",
              value: 16,
              color: "#1A3D1F",
              description: "Bed preparation, mulching, watering techniques, and weeding.",
              learningObjective: "Master foundational agronomy skills and crop cycle care.",
            },
            {
              name: "Hydroponics Intro",
              value: 12,
              color: "#2D6A35",
              description: "Introduction to water-based culture and nutrient solutions.",
              learningObjective: "Understand soilless growth principles and resource efficiency.",
            },
            {
              name: "Organic Harvest",
              value: 10,
              color: "#4A9A52",
              description: "Harvesting seasonal produce and sorting by quality.",
              learningObjective: "Study post-harvest handling and food yield dynamics.",
            },
            {
              name: "Composting",
              value: 7,
              color: "#6AB872",
              description: "Layering organic waste, green matter, and brown matter.",
              learningObjective: "Understand decomposition and nutrient recycling.",
            },
          ],
        },
        {
          name: "Folk Arts",
          color: "#B07A18",
          description: "Rural heritage crafts and creative upcycling.",
          children: [
            {
              name: "Warli & Folk Art",
              value: 12,
              color: "#B07A18",
              description: "Geometrical storytelling motifs using natural ochre and clay.",
              learningObjective: "Appreciate indigenous artistic traditions and storytelling.",
            },
            {
              name: "Pottery & Craft",
              value: 8,
              color: "#C9952A",
              description: "Clay shaping and hand-building traditional pottery.",
              learningObjective: "Develop tactile precision and respect for artisan trades.",
            },
            {
              name: "Rural Games",
              value: 8,
              color: "#D9AB50",
              description: "Lagori, Gilli-Danda, and strategy-based rural sports.",
              learningObjective: "Build strategic thinking and outdoor community camaraderie.",
            },
            {
              name: "Waste-to-Art",
              value: 6,
              color: "#E8C070",
              description: "Upcycling husk, straw, and coconut shells into sculptures.",
              learningObjective: "Practice circular design and waste reduction.",
            },
          ],
        },
        {
          name: "Nature & Ecology",
          color: "#3A7A96",
          description: "Ecological monitoring, urban greening, and biodiversity.",
          children: [
            {
              name: "Terrace Gardening",
              value: 10,
              color: "#3A7A96",
              description: "Grow bags, vertical gardening, and balcony container farming.",
              learningObjective: "Apply food production skills to compact urban spaces.",
            },
            {
              name: "Soil Science",
              value: 7,
              color: "#5B9DB8",
              description: "Testing soil texture, moisture retention, and pH indicators.",
              learningObjective: "Connect chemistry and biology to agricultural vitality.",
            },
            {
              name: "Ecosystem Study",
              value: 6,
              color: "#8FC4D8",
              description: "Mapping pollinators, beneficial insects, and local flora.",
              learningObjective: "Understand ecological interdependence in farm systems.",
            },
          ],
        },
        {
          name: "Nutrition",
          color: "#C05818",
          description: "Dietary awareness, traditional grains, and lifestyle balance.",
          children: [
            {
              name: "Millet & Diet",
              value: 8,
              color: "#C05818",
              description: "Comparison of Ragi, Jowar, and Bajra with refined grains.",
              learningObjective: "Recognize nutritional density and climate-resilient grains.",
            },
            {
              name: "Junk Food Talk",
              value: 6,
              color: "#E07B39",
              description: "Investigating ultra-processed foods, sugar spikes, and energy.",
              learningObjective: "Make informed daily choices regarding personal nutrition.",
            },
          ],
        },
      ],
    },

    // ─── SPECIALIZATION MODULE — Classes 9–10 ────────────────────────────────
    {
      name: "Specialization",
      color: "#1A3D1F",
      description: "Applied agricultural science, future technologies, and research inquiry.",
      children: [
        {
          name: "Agriculture",
          color: "#0F2413",
          description: "Advanced crop management, soil fertility, and agricultural systems.",
          children: [
            {
              name: "Crop Systems",
              value: 14,
              color: "#0F2413",
              description: "Intercropping, rotation cycles, and integrated pest management.",
              learningObjective: "Analyze complex agricultural systems and resilience strategies.",
            },
            {
              name: "Hydroponics Lab",
              value: 14,
              color: "#1A3D1F",
              description: "Formulating nutrient solutions, measuring EC/pH, and monitoring yield.",
              learningObjective: "Apply chemical equations and precision control in soilless cultivation.",
            },
            {
              name: "Soilless Culture",
              value: 10,
              color: "#2D6A35",
              description: "Cocopeat, perlite, and aeroponic setups for high-density production.",
              learningObjective: "Evaluate commercial feasibility of protected cultivation.",
            },
            {
              name: "Urban Farming",
              value: 8,
              color: "#4A9A52",
              description: "Engineering micro-farms, automated drip lines, and rooftop design.",
              learningObjective: "Design decentralized food solutions for modern cities.",
            },
            {
              name: "Agri Research",
              value: 7,
              color: "#6AB872",
              description: "Formulating hypotheses, logging plant growth data, and documenting findings.",
              learningObjective: "Apply the scientific method to real-world agrarian challenges.",
            },
          ],
        },
        {
          name: "Folk Arts",
          color: "#7A4A08",
          description: "Cultural preservation, folk craftsmanship, and creative sustainability.",
          children: [
            {
              name: "Folk Heritage",
              value: 10,
              color: "#7A4A08",
              description: "Documenting rural folklore, agrarian ballads, and historic tools.",
              learningObjective: "Appreciate agricultural history as the cradle of human civilization.",
            },
            {
              name: "Cultural Workshop",
              value: 8,
              color: "#A36A10",
              description: "Masterclasses with regional artisans on sustainable pottery and weaving.",
              learningObjective: "Preserve indigenous knowledge systems and craft techniques.",
            },
            {
              name: "Waste-to-Art",
              value: 7,
              color: "#C9952A",
              description: "Designing functional products and architectural models from agri-waste.",
              learningObjective: "Explore material science and zero-waste creative problem solving.",
            },
          ],
        },
        {
          name: "Nature & Ecology",
          color: "#3A6341",
          description: "Environmental analytics, watershed stewardship, and biodiversity audits.",
          children: [
            {
              name: "Terrace Project",
              value: 12,
              color: "#3A6341",
              description: "Cap-stone school rooftop farming installation and irrigation management.",
              learningObjective: "Execute end-to-end project management in living systems.",
            },
            {
              name: "Biodiversity",
              value: 8,
              color: "#5B9D8B",
              description: "Transect sampling of flora, avian species, and soil microbiome.",
              learningObjective: "Conduct ecological surveys using quantitative assessment metrics.",
            },
            {
              name: "Water Resources",
              value: 6,
              color: "#7BBCAA",
              description: "Rainwater harvesting calculation, aquifer recharge, and drip hydraulics.",
              learningObjective: "Analyze conservation hydrology and critical resource management.",
            },
          ],
        },
        {
          name: "Nutrition",
          color: "#A04010",
          description: "Food security policy, metabolic biochemistry, and nutrition science.",
          children: [
            {
              name: "Food Systems",
              value: 8,
              color: "#A04010",
              description: "Tracing global supply chains, cold storage, and food sovereignty.",
              learningObjective: "Critique macro supply chain vulnerabilities and local food models.",
            },
            {
              name: "Nutrition Science",
              value: 8,
              color: "#C05818",
              description: "Analyzing macronutrients, micronutrient deficiencies, and dietary health.",
              learningObjective: "Evaluate evidence-based human nutrition and metabolic vitality.",
            },
          ],
        },
      ],
    },
  ],
};

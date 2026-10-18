/**
 * FURAA Farms Configuration — Phase 2
 * Centralized data model for the five core FURAA Farm Categories:
 * 1. FURAA Rural Farms
 * 2. FURAA Commercial Farms
 * 3. FURAA Agro-Forests
 * 4. FURAA Animal Farms
 * 5. FURAA Nutri Gardens
 */

export interface FarmActivity {
  title: string;
  description: string;
  type: "Hands-on" | "Supervised Fieldwork" | "Demonstration-Based" | "Facility-Dependent";
}

export interface FarmCategory {
  id: string;
  slug: string;
  title: string;
  shortTitle: string;
  theme: string;
  tagline: string;
  badge: string;
  badgeVariant: "green" | "gold" | "sky" | "orange" | "brown";
  iconName: string;
  image: {
    src: string;
    alt: string;
    caption: string;
    badge: string;
    objectPosition?: string;
  };
  intro: string;
  educationalObjectives: string[];
  activityHighlights: FarmActivity[];
  learningOutcomes: string[];
  ageAppropriateness: string;
  safetyProtocols: string[];
  facilityNote: string;
}

export const furaaFarmCategories: FarmCategory[] = [
  {
    id: "rural-farms",
    slug: "rural-farms",
    title: "FURAA Rural Farms",
    shortTitle: "Rural Farms",
    theme: "Experience the Roots of Agriculture",
    tagline: "Experience Village Life, Explore Farming, and Learn Beyond Classrooms.",
    badge: "Heritage and Traditions",
    badgeVariant: "gold",
    iconName: "Tractor",
    image: {
      src: "/images/modules/NAD06650.JPG",
      alt: "FURAA students actively transplanting paddy saplings in wet field with farm mentors",
      caption: "Supervised paddy transplantation and wetland soil puddling in session",
      badge: "Living Heritage",
      objectPosition: "center 45%",
    },
    intro:
      "FURAA Rural Farms immerse students in the living heritage of Indian agriculture. Moving beyond textbooks, students step into authentic rural environments where traditional knowledge, community stewardship, and seasonal cycles form the foundation of our agrarian culture.",
    educationalObjectives: [
      "Understand the historical roots and indigenous techniques of Indian agriculture",
      "Appreciate the labor, patience, and community cooperation behind essential food staples",
      "Observe natural gravity-fed water channels and traditional wetland soil mechanics",
      "Reconnect with rural games and cultural celebrations that bring agrarian communities together",
    ],
    activityHighlights: [
      {
        title: "Paddy Puddling and Soil Furrowing",
        description: "Walking barefoot into waterlogged clay beds to prepare soil texture for rice planting.",
        type: "Hands-on",
      },
      {
        title: "Seedling Transplantation",
        description: "Carefully transplanting nursery-grown paddy saplings into fertile mud rows at calibrated spacing.",
        type: "Hands-on",
      },
      {
        title: "Irrigation Canal Exploration",
        description: "Walking along traditional open water canals to understand gravity flow and field bund management.",
        type: "Supervised Fieldwork",
      },
      {
        title: "Bullock Cart Rides",
        description: "Slow-paced supervised cart rides around farm perimeters with trained handlers where safely available.",
        type: "Facility-Dependent",
      },
      {
        title: "Sugarcane Jaggery-Making Demos",
        description: "Observing traditional cane-crushing and boiling processes from a safe designated viewing pavilion.",
        type: "Demonstration-Based",
      },
      {
        title: "Traditional Rural Games",
        description: "Spirited open-air games like Lagori, Gilli-Danda, and Kho-Kho that foster genuine team camaraderie.",
        type: "Hands-on",
      },
      {
        title: "Village Life and Farming Immersion",
        description: "Engaging in genuine rural storytelling circles, understanding grain storage, and respecting agrarian life.",
        type: "Supervised Fieldwork",
      },
    ],
    learningOutcomes: [
      "Deep agricultural awareness and respect for Indian farming communities",
      "Appreciation for the labor and resource requirements of staple crops",
      "Strengthened teamwork, peer collaboration, and physical agility",
      "Deep tactile connection to natural soil and seasonal water systems",
      "Understanding the cultural significance of rural harvest traditions",
    ],
    ageAppropriateness: "Classes 1–10. Activity intensity and mud depths are strictly graded according to student age groups.",
    safetyProtocols: [
      "All wetland and puddling activities occur in pre-cleared, tested soil beds free from sharp debris",
      "Jaggery boiling and cane crushing are strictly demonstration-only from secure, fenced viewing areas",
      "Bullock cart rides are conducted exclusively on flat perimeter trails with experienced local handlers",
      "Mandatory footwear washing stations, clean drinking water, and high mentor supervision ratios (1:8)",
    ],
    facilityNote: "Bullock carts and jaggery units are available at verified partner farms and depend on seasonal harvesting windows.",
  },
  {
    id: "commercial-farms",
    slug: "commercial-farms",
    title: "FURAA Commercial Farms",
    shortTitle: "Commercial Farms",
    theme: "Explore Modern and Scientific Agriculture",
    tagline: "Discover Modern Farming, Experience Innovation, and Grow Future Skills.",
    badge: "Agri-Tech and Innovation",
    badgeVariant: "sky",
    iconName: "Building2",
    image: {
      src: "/images/modules/NAD06129.JPG",
      alt: "FURAA mentor demonstrating botanical structures and greenhouse cultivation to students",
      caption: "Scientific nursery management and controlled greenhouse cultivation",
      badge: "Controlled Agronomy",
      objectPosition: "center 30%",
    },
    intro:
      "FURAA Commercial Farms bridge age-old cultivation wisdom with contemporary agricultural science. Students explore controlled polyhouses, high-density seedling nurseries, commercial vegetable cycles, and sustainable agribusiness models that feed growing urban populations.",
    educationalObjectives: [
      "Investigate how micro-climates, shading nets, and drip irrigation optimize crop yields",
      "Learn commercial nursery techniques including germination trays and coco-peat substrates",
      "Understand quality grading, post-harvest handling, and sustainable farm economics",
      "Introduce students to entrepreneurial thinking and future STEM careers in food production",
    ],
    activityHighlights: [
      {
        title: "Polyhouse Nursery Raising",
        description: "Filling seedling pro-trays with sterilized coco-peat and planting certified high-yield hybrid seeds.",
        type: "Hands-on",
      },
      {
        title: "Commercial Seedling Planting",
        description: "Setting established seedlings into raised beds equipped with precision drip lines.",
        type: "Hands-on",
      },
      {
        title: "Vegetable Harvesting and Grading",
        description: "Carefully picking ready tomatoes, cucumbers, or capsicums and sorting them by size and maturity.",
        type: "Hands-on",
      },
      {
        title: "Commercial Flower Cultivation",
        description: "Observing commercial marigold, chrysanthemum, or sunflower rows and pollination dynamics.",
        type: "Supervised Fieldwork",
      },
      {
        title: "Leafy Vegetable Production",
        description: "Staggered harvesting of spinach, coriander, and fenugreek grown for quick market turnarounds.",
        type: "Hands-on",
      },
      {
        title: "Mushroom Cultivation Awareness",
        description: "Understanding dark-room humidity controls, substrate bag inoculation, and spawn maintenance.",
        type: "Demonstration-Based",
      },
      {
        title: "Exotic and High-Value Crops",
        description: "Studying soil and irrigation protocols for bell peppers, cherry tomatoes, and culinary herbs.",
        type: "Supervised Fieldwork",
      },
      {
        title: "Sustainable Crop Production",
        description: "Integrating biological pest controls, yellow sticky traps, and zero-residue management.",
        type: "Supervised Fieldwork",
      },
    ],
    learningOutcomes: [
      "Modern cultivation awareness and understanding of protected climate agriculture",
      "Appreciation for technological innovation in water and nutrient management",
      "Practical understanding of supply chain logistics from farm gate to market shelf",
      "Entrepreneurial mindset and awareness of ag-tech career pathways",
      "Resource efficiency principles: water conservation, waste reduction, and energy thrift",
    ],
    ageAppropriateness: "Classes 3–10. Nursery sowing suits primary students; data logging and economics suit middle and high school.",
    safetyProtocols: [
      "Polyhouse ventilation and hydration checks ensure students avoid prolonged heat exposure",
      "Harvesting shears and blunted hand tools are used only under 1:1 or small-group mentor observation",
      "Mushroom incubation units are viewed through observation windows to maintain sterile conditions",
      "Strict prohibition of chemical handling; all student-accessible zones use organic and bio-inputs",
    ],
    facilityNote: "Specific crops vary by growing season, regional climate, and polyhouse infrastructure at each accredited center.",
  },
  {
    id: "agro-forests",
    slug: "agro-forests",
    title: "FURAA Agro-Forests",
    shortTitle: "Agro-Forests",
    theme: "Explore Nature, Trees, and Biodiversity",
    tagline: "Explore Nature, Discover Biodiversity, and Grow a Greener Future.",
    badge: "Ecology and Forestry",
    badgeVariant: "green",
    iconName: "Trees",
    image: {
      src: "/images/hero/NAD06383.JPG",
      alt: "FURAA students walking through dense green agro-forestry canopy on an ecology trail",
      caption: "Curriculum-linked nature trail exploring multi-tier canopies and native ecology",
      badge: "Biodiversity Canopy",
      objectPosition: "center 35%",
    },
    intro:
      "FURAA Agro-Forests demonstrate how agriculture and perennial ecosystems thrive together. Students walk beneath multi-layered canopies, discovering how native trees, fruit orchards, pollinator networks, and soil microorganisms build permanent ecological resilience.",
    educationalObjectives: [
      "Study multi-tier canopy architecture: ground cover, shrub layer, understory, and emergent trees",
      "Observe plant propagation techniques including grafting, air-layering, and canopy pruning",
      "Examine pollinator ecology and the irreplaceable role of bees in global food security",
      "Cultivate keen sensory observation skills through guided bird identification and leaf taxonomy",
    ],
    activityHighlights: [
      {
        title: "Forest Nursery Maintenance",
        description: "Bagging saplings, preparing mycorrhizal soil mixes, and caring for native timber and shade trees.",
        type: "Hands-on",
      },
      {
        title: "Grafting and Pruning Demonstration",
        description: "Observing horticulturists demonstrate cleft grafting, bud grafting, and structural orchard pruning.",
        type: "Demonstration-Based",
      },
      {
        title: "Seasonal Fruit Picking",
        description: "Harvesting ripe guavas, pomegranates, or mulberries directly from low-hanging branches.",
        type: "Hands-on",
      },
      {
        title: "Bird Watching and Acoustics",
        description: "Using binoculars and quiet tracking to spot native avian species nesting in agro-forestry groves.",
        type: "Supervised Fieldwork",
      },
      {
        title: "Guided Forest Exploration Trails",
        description: "Walking shaded biodiversity corridors with expert naturalists explaining mutualistic plant relations.",
        type: "Supervised Fieldwork",
      },
      {
        title: "Beekeeping Awareness",
        description: "Studying hive hierarchy, worker communication, and pollination through sealed observation boxes.",
        type: "Demonstration-Based",
      },
      {
        title: "Honey Extraction Demonstrations",
        description: "Watching mentors centrifuge honey frames and filter raw golden honey where safety permits.",
        type: "Facility-Dependent",
      },
      {
        title: "Ecosystem and Soil Transects",
        description: "Examining decomposing leaf litter, humus formation, and moisture conservation under tree canopies.",
        type: "Hands-on",
      },
    ],
    learningOutcomes: [
      "Enhanced ecological literacy and deep reverence for forest ecosystems",
      "Understanding the role of agro-forestry in groundwater recharge and carbon capture",
      "Sharp scientific observation skills: spotting camouflaged fauna, tracks, and foliage types",
      "Knowledge of biological symbiosis between pollinators, trees, and cultivated crops",
      "Long-term environmental responsibility and proactive conservation mindset",
    ],
    ageAppropriateness: "Classes 1–10. Nature trails are mapped with accessible pathways suitable for all grade levels.",
    safetyProtocols: [
      "Beekeeping areas are strictly segregated with mandatory protective veils and safe perimeter distances",
      "No student touches live beehives or sharp pruning saws; all propagation demos are mentor-led",
      "Orchard walking trails are inspected prior to student entry to clear low fallen branches and insects",
      "All fruit harvesting is restricted to arm-reach heights; no climbing on tree trunks or ladders",
    ],
    facilityNote: "Beekeeping and honey extraction demos are conducted strictly at certified locations with trained apiculturists.",
  },
  {
    id: "animal-farms",
    slug: "animal-farms",
    title: "FURAA Animal Farms",
    shortTitle: "Animal Farms",
    theme: "Experience Farm Life and Animal Care",
    tagline: "Connect with Animals, Experience Farm Life, and Learn with Compassion.",
    badge: "Compassion and Livestock",
    badgeVariant: "brown",
    iconName: "HeartHandshake",
    image: {
      src: "/images/summer-camps/NAD06221.JPG",
      alt: "Indigenous draught cattle resting in a shaded rural farm shelter",
      caption: "Ethical animal husbandry and compassionate livestock stewardship",
      badge: "Livestock Stewardship",
      objectPosition: "center 45%",
    },
    intro:
      "FURAA Animal Farms introduce students to ethical livestock stewardship and the essential relationship between domestic animals and regenerative agriculture. Students learn that farm animals are living partners in rural livelihoods, soil fertility, and agrarian sustenance.",
    educationalObjectives: [
      "Promote empathy, gentle interaction, and respect for domesticated farm creatures",
      "Explore how livestock dung, urine, and biogas power organic compost and zero-waste farming",
      "Learn about indigenous cattle breeds (Desi cows) and their resilience to local climates",
      "Understand the labor and daily discipline required for veterinary care and animal welfare",
    ],
    activityHighlights: [
      {
        title: "Farm Bird Rearing Awareness",
        description: "Observing free-range country chickens and ducks, understanding egg incubation, and coop design.",
        type: "Supervised Fieldwork",
      },
      {
        title: "Supervised Sheep and Goat Feeding",
        description: "Offering freshly cut green fodder and legumes to docile small ruminants under mentor guidance.",
        type: "Hands-on",
      },
      {
        title: "Dairy Animal Care and Grooming",
        description: "Learning how indigenous cows are brushed, washed, sheltered from heat, and provided clean water.",
        type: "Supervised Fieldwork",
      },
      {
        title: "Milking Demonstrations",
        description: "Observing trained dairy mentors demonstrate traditional hand milking and hygienic milk handling.",
        type: "Demonstration-Based",
      },
      {
        title: "Calf Rearing and Nurturing",
        description: "Gentle interaction with young calves in shaded enclosures, learning weaning schedules and maternal care.",
        type: "Supervised Fieldwork",
      },
      {
        title: "Fodder Preparation and Chaffing",
        description: "Watching green grass chaffing machines operate and blending nutrient-rich cattle feed rations.",
        type: "Demonstration-Based",
      },
      {
        title: "Manure and Biogas Cycles",
        description: "Tracing how cattle manure feeds vermicompost pits, panchagavya bio-fertilizers, and biogas digesters.",
        type: "Hands-on",
      },
      {
        title: "Livestock Management and Animal Welfare",
        description: "Discussing ethical treatment, veterinary checks, vaccination schedules, and distress signals.",
        type: "Supervised Fieldwork",
      },
    ],
    learningOutcomes: [
      "Cultivation of empathy, calm demeanor, and compassionate animal handling skills",
      "Understanding the circular farm economy where animal manure revitalizes crop soil",
      "Awareness of indigenous livestock breeds and their ecological value over industrial models",
      "Respect for dairy farmers and the daily dedication necessary to care for living herds",
      "Breaking urban hesitations around animal interaction in a gentle, reassuring environment",
    ],
    ageAppropriateness: "Classes 1–10. Feeding small animals and viewing calves is popular with primary; biogas and genetics with secondary.",
    safetyProtocols: [
      "Direct hand-feeding is limited to docile goats and sheep under 1:1 supervision with flat-palm techniques",
      "Milking is strictly demonstration-only by skilled dairy staff; students observe from sanitized barriers",
      "Hand sanitization stations with warm water and soap are mandatory immediately before and after animal areas",
      "All livestock undergo regular veterinary inspections, rabies vaccinations, and behavioral assessments",
    ],
    facilityNote: "Animal species and demonstration schedules vary based on veterinary health cycles and accredited partner facilities.",
  },
  {
    id: "nutri-gardens",
    slug: "nutri-gardens",
    title: "FURAA Nutri Gardens",
    shortTitle: "Nutri Gardens",
    theme: "Grow Healthy Food, Build Healthy Lives",
    tagline: "Grow Nutritious Food, Discover Healthy Habits, and Nourish a Better Future.",
    badge: "Nutrition and Food Literacy",
    badgeVariant: "orange",
    iconName: "Apple",
    image: {
      src: "/images/programs/NAD06400.JPG",
      alt: "FURAA students experiencing fresh harvest directly in the field",
      caption: "Farm-to-plate food literacy: discovering the vibrant taste of fresh crops",
      badge: "Wholesome Nutrition",
      objectPosition: "center 40%",
    },
    intro:
      "FURAA Nutri Gardens cultivate lifelong mindful eating by connecting children directly with the living sources of nutrition. By sowing, harvesting, and tasting microgreens, millets, and heritage greens, students develop positive food associations without clinical or punitive lecturing.",
    educationalObjectives: [
      "Build tangible food literacy by witnessing the seed-to-plate journey of essential nutrients",
      "Discover climate-smart indigenous millets (Ragi, Jowar, Bajra, Foxtail) and their dietary benefits",
      "Encourage diverse vegetable consumption by letting children harvest and sample their own greens",
      "Empower students to assemble colorful, age-appropriate balanced meal plates based on natural food groups",
    ],
    activityHighlights: [
      {
        title: "Microgreens Production",
        description: "Sowing fast-germinating mustard, fenugreek, and radish microgreens in biodegradable student trays.",
        type: "Hands-on",
      },
      {
        title: "Millet Cultivation and Harvesting",
        description: "Observing drought-resilient millet stalks, identifying grain heads, and hand-threshing panicles.",
        type: "Hands-on",
      },
      {
        title: "Leafy Vegetable Cultivation",
        description: "Harvesting iron-rich amaranth, spinach, and moringa leaves from organic raised beds.",
        type: "Hands-on",
      },
      {
        title: "Fireless Millet Dish Preparation",
        description: "Blending sprouted ragi flour, jaggery, and crushed groundnuts into traditional nutritious laddus.",
        type: "Hands-on",
      },
      {
        title: "Natural Refreshment Exploration",
        description: "Tasting tender coconut water, spiced buttermilk, and herbal infusions in place of processed soft drinks.",
        type: "Hands-on",
      },
      {
        title: "Rainbow Plate and Diet Charts",
        description: "Interactive visual exercises mapping fresh vegetables to vitamins, fiber, and developmental energy.",
        type: "Supervised Fieldwork",
      },
      {
        title: "Farm-to-Food Storytelling",
        description: "Tracing how soil minerals transfer into plant roots, then vegetables, and ultimately human vitality.",
        type: "Supervised Fieldwork",
      },
      {
        title: "Seed Saving and Food Sovereignty",
        description: "Drying and cataloging heirloom vegetable seeds in paper envelopes to take home and sprout.",
        type: "Hands-on",
      },
    ],
    learningOutcomes: [
      "Empowered food literacy and proactive enthusiasm for eating diverse vegetables and whole grains",
      "Clear understanding of the seed-to-plate continuum and reduction of household food waste",
      "Appreciation for resilient traditional millets in combating malnutrition and lifestyle ailments",
      "Practical culinary confidence through simple, hygienic, fireless snack assembly",
      "Positive emotional associations with wholesome, unadulterated farm-fresh produce",
    ],
    ageAppropriateness: "Classes 1–10. Microgreens and color charts engage primary; nutrient chemistry engages high school.",
    safetyProtocols: [
      "All culinary food preparation activities are strictly fireless and heatless for complete child safety",
      "Rigorous food hygiene: mandatory hand washing, sanitized stainless-steel surfaces, and food-grade trays",
      "Comprehensive allergen disclosure: sessions avoid common allergens or substitute ingredients upon school request",
      "Educational focus: discussions promote healthy habits without medical diagnosis or dietary restriction advice",
    ],
    facilityNote: "Produce varieties fluctuate with local growing seasons; harvest tasting focuses on organically grown produce.",
  },
];

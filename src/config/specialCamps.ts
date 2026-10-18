export type SpecialCampId = "summer-camps" | "monsoon-camps" | "harvesting-camps";

export interface CampActivity {
  title: string;
  description: string;
}

export interface CampScheduleItem {
  timeOrPhase: string;
  title: string;
  description: string;
}

export interface CampClassBandInfo {
  band: "Classes 1–4" | "Classes 5–8" | "Classes 9–10";
  title: string;
  focus: string;
}

export interface CampImage {
  src: string;
  alt: string;
  caption: string;
  badge: string;
}

export interface SpecialCampData {
  id: SpecialCampId;
  slug: string;
  title: string;
  seasonTag: string;
  seasonMonths: string;
  tagline: string;
  shortDescription: string;
  fullOverview: string;
  heroBgImage: string;
  suitableClassBands: CampClassBandInfo[];
  activities: CampActivity[];
  sampleSchedule: CampScheduleItem[];
  safetyConsiderations: string[];
  photos: CampImage[];
  ctaSubject: string;
}

export const specialCampsData: Record<SpecialCampId, SpecialCampData> = {
  "summer-camps": {
    id: "summer-camps",
    slug: "/summer-camps",
    title: "Summer Camps",
    seasonTag: "Vacation Immersion",
    seasonMonths: "March — May",
    tagline: "Farming, Folk Arts, Rural Games and Sustainable Creativity",
    shortDescription:
      "Transform summer holidays into an active, screen-free farm immersion where students learn organic soil cultivation, pottery, rural games, and sustainable crafts in protected natural surroundings.",
    fullOverview:
      "FURAA Summer Camps offer an energetic retreat from digital screens. Held during morning and shaded afternoon hours across certified agrarian learning centers, students take part in hands-on organic farming, traditional pottery, nature trails, folk games, and hydration-conscious farm living.",
    heroBgImage: "/images/summer-camps/NAD06445.JPG",
    suitableClassBands: [
      {
        band: "Classes 1–4",
        title: "Foundation Campers",
        focus: "Sensory seed banking, clay pottery, farm animals, and gentle outdoor folk games in shaded pavilions.",
      },
      {
        band: "Classes 5–8",
        title: "Exploration Campers",
        focus: "Soil preparation, compost aeration, drip line observation, terracing, and cooperative team challenges.",
      },
      {
        band: "Classes 9–10",
        title: "Specialization Campers",
        focus: "Micro-climate nursery management, solar-powered farm applications, and sustainable agricultural crafts.",
      },
    ],
    activities: [
      {
        title: "Soil Conditioning and Seed Sowing",
        description: "Hands-on preparation of seedbeds using compost and vermiculture, followed by summer crop sowing.",
      },
      {
        title: "Traditional Clay Pottery and Terracotta Art",
        description: "Guided pottery wheel sessions and hand-molding using natural clay, creating take-home terracotta pots.",
      },
      {
        title: "Rural and Traditional Physical Games",
        description: "High-energy, cooperative Indian games (Lagori, Gilli-Danda, tug-of-war) fostering stamina and camaraderie.",
      },
      {
        title: "Nature Exploration and Agro-Forest Trails",
        description: "Guided biodiversity discovery walks identifying beneficial insects, native trees, and avian species.",
      },
      {
        title: "Sustainable Farm-Crafts and Upcycling",
        description: "Creating bio-enzyme compost starters, natural plant leaf dyes, and bamboo plant trellises.",
      },
      {
        title: "Millet-Based Nutrition and Cool Beverages",
        description: "Hands-on preparation of cooling summer ragi drinks, seasonal fruit salads, and farm-to-table snacks.",
      },
    ],
    sampleSchedule: [
      {
        timeOrPhase: "08:30 AM — 09:15 AM",
        title: "Farm Assembly and Morning Vitality",
        description: "Warm-up stretches, safety orientation, weather briefing, and morning hydration check.",
      },
      {
        timeOrPhase: "09:15 AM — 11:00 AM",
        title: "Field Agriculture and Soil Practice",
        description: "Cool-morning open field farming: bed preparation, organic weeding, and guided sowing.",
      },
      {
        timeOrPhase: "11:00 AM — 11:30 AM",
        title: "Shaded Hydration and Fruit Snack",
        description: "Rest period under tree canopies with tender coconut water or seasonal fresh fruit.",
      },
      {
        timeOrPhase: "11:30 AM — 01:00 PM",
        title: "Shaded Workshops: Pottery and Folk Crafts",
        description: "Hands-on pottery wheel lessons, terracotta shaping, and traditional artisanal crafts in shaded pavilions.",
      },
      {
        timeOrPhase: "01:00 PM — 02:00 PM",
        title: "Nutritious Farm Lunch",
        description: "Wholesome, millet-enriched vegetarian lunch prepared with fresh regional farm produce.",
      },
      {
        timeOrPhase: "02:00 PM — 03:30 PM",
        title: "Traditional Games and Cohort Debrief",
        description: "Spirited traditional rural games followed by daily learning journals and circle reflections.",
      },
    ],
    safetyConsiderations: [
      "Midday heat avoidance: open-field activities cease by 11:00 AM; afternoon sessions occur in shaded open-air halls.",
      "Hydration protocol: mandatory water breaks every 30 minutes with continuous access to purified drinking water.",
      "Sun protection: wide-brim FURAA caps and organic sunscreen lotion advisories for all outdoor periods.",
      "High mentor ratio: dedicated adult mentor for every 8–10 campers to ensure vigilant oversight.",
    ],
    photos: [
      {
        src: "/images/summer-camps/NAD06445.JPG",
        alt: "Campers smiling together holding sugarcane in open farmland",
        caption: "Joyful cohort bonding and screen-free farm discovery",
        badge: "Cohort Joy",
      },
      {
        src: "/images/summer-camps/NAD06495.JPG",
        alt: "Campers running across farm fields with arms outstretched like airplanes",
        caption: "Open-meadow physical running and traditional cooperative games",
        badge: "Active Play",
      },
      {
        src: "/images/hero/NAD06309.JPG",
        alt: "Students jumping joyfully into red agricultural soil beds",
        caption: "Tactile soil connection and joyful mud exploration",
        badge: "Hands-on Soil",
      },
      {
        src: "/images/summer-camps/NAD06221.JPG",
        alt: "Pair of gentle draught bullocks harnessed for traditional agriculture",
        caption: "Gentle farm fauna observation and draught animal respect",
        badge: "Farm Fauna",
      },
    ],
    ctaSubject: "Summer Camp Enrollment",
  },

  "monsoon-camps": {
    id: "monsoon-camps",
    slug: "/monsoon-camps",
    title: "Monsoon Camps",
    seasonTag: "Living Hydrology Track",
    seasonMonths: "July — September",
    tagline: "Seasonal Crops, Water Conservation, Soil Observation and Rain Ecology",
    shortDescription:
      "Experience the invigorating rhythm of the Indian monsoon through living hydrology: barefoot paddy puddling, rainwater percolation science, stream biodiversity, and seasonal wetland sowing.",
    fullOverview:
      "When the rains arrive, the farm transforms into a thriving ecological classroom. FURAA Monsoon Camps immerse students in wet-land agriculture, traditional paddy transplanting, water harvesting science, and the seasonal resurgence of amphibians, earthworms, and native flora.",
    heroBgImage: "/images/modules/NAD06650.JPG",
    suitableClassBands: [
      {
        band: "Classes 1–4",
        title: "Foundation Campers",
        focus: "Rain sensory walks, earthworm bin study, mud painting, and observing sprouting wetland seeds.",
      },
      {
        band: "Classes 5–8",
        title: "Exploration Campers",
        focus: "Paddy transplantation in flooded beds, percolation tests, bioswale exploration, and insect emergence.",
      },
      {
        band: "Classes 9–10",
        title: "Specialization Campers",
        focus: "Watershed catchment mapping, run-off calculations, soil erosion management, and monsoon disease prevention.",
      },
    ],
    activities: [
      {
        title: "Paddy Puddling and Barefoot Transplantation",
        description: "Immersive barefoot paddy puddling followed by systematic hand-transplantation of green rice saplings.",
      },
      {
        title: "Rainwater Harvesting and Percolation Science",
        description: "Hands-on measurement of soil percolation rates across sand, silt, and clay plots after seasonal showers.",
      },
      {
        title: "Living Soil and Monsoon Biodiversity Observation",
        description: "Microscope and magnifying lens observation of earthworms, mycorrhizal networks, and macro-invertebrates.",
      },
      {
        title: "Irrigation Canal and Bioswale Exploration",
        description: "Walking guided stream corridors to understand check-dams, contour bunds, and traditional water holding ponds.",
      },
      {
        title: "Seasonal Seed Sowing and Sapling Raising",
        description: "Nursery preparation for monsoon vegetables like gourds, indigenous beans, and leafy greens.",
      },
      {
        title: "Rain-Friendly Folk Crafts and Clay Modeling",
        description: "Working with wet farm clay, natural rain shelter construction, and traditional leaf origami crafts.",
      },
    ],
    sampleSchedule: [
      {
        timeOrPhase: "09:00 AM — 09:30 AM",
        title: "Weather Briefing and Rain Gear Check",
        description: "Reviewing ground saturation, boot inspection, safety boundaries, and warm herbal tea.",
      },
      {
        timeOrPhase: "09:30 AM — 11:30 AM",
        title: "Wetland Paddy Transplantation Experience",
        description: "Supervised barefoot field activity: leveling wet soil beds, puddling, and sapling row transplantation.",
      },
      {
        timeOrPhase: "11:30 AM — 12:15 PM",
        title: "Footwash, Warm Clean-up and Snack",
        description: "Designated warm water washing stations, dry costume change, and hot jaggery ginger drink.",
      },
      {
        timeOrPhase: "12:15 PM — 01:15 PM",
        title: "Hydrology and Soil Percolation Lab",
        description: "Interactive science session under covered rain pavilion analyzing soil infiltration and rain gauges.",
      },
      {
        timeOrPhase: "01:15 PM — 02:15 PM",
        title: "Warm Farm Feast",
        description: "Hot, freshly cooked country meals featuring piping hot rasam, red rice, and steamed native pulses.",
      },
      {
        timeOrPhase: "02:15 PM — 03:30 PM",
        title: "Ecology Trail and Monsoon Reflections",
        description: "Guided canal trail observing bird nesting and frog biodiversity, followed by nature journal entries.",
      },
    ],
    safetyConsiderations: [
      "Slip-resistant footwear and designated walking bunds: no walking on slippery stone embankments.",
      "Lightning and storm protocol: immediate relocation to fully grounded, sheltered concrete pavilions during thunder.",
      "Hygienic footwash and clean towels: provided immediately upon completion of wetland mud activities.",
      "Filtered, warm drinking water: continuous availability of boiled herbal and purified warm water.",
    ],
    photos: [
      {
        src: "/images/modules/NAD06650.JPG",
        alt: "Students actively transplanting paddy saplings in wet field with farm mentors",
        caption: "Supervised paddy puddling and wetland rice sapling transplantation",
        badge: "Paddy Transplants",
      },
      {
        src: "/images/modules/NAD06652.JPG",
        alt: "Young students planting green rice seedlings directly into muddy soil",
        caption: "Hands-on connection with monsoon agriculture and food origins",
        badge: "Wetland Sowing",
      },
      {
        src: "/images/safety/NAD06530.JPG",
        alt: "Mentor guiding students through safe, shallow farm irrigation stream",
        caption: "Supervised water canal navigation and hydrology learning",
        badge: "Stream Hydrology",
      },
      {
        src: "/images/hero/NAD06383.JPG",
        alt: "Students walking under lush green sugarcane canopy",
        caption: "Rain-washed agro-forest canopy and plant moisture cycles",
        badge: "Canopy Ecology",
      },
    ],
    ctaSubject: "Monsoon Camp Enrollment",
  },

  "harvesting-camps": {
    id: "harvesting-camps",
    slug: "/harvesting-camps",
    title: "Harvesting Camps",
    seasonTag: "Culmination and Abundance Track",
    seasonMonths: "November — January",
    tagline: "Crop Harvesting, Post-Harvest Processes, Farm-to-Food and Rural Festivals",
    shortDescription:
      "Celebrate the culmination of the agrarian cycle: hand-harvesting seasonal produce, winnowing grains, understanding post-harvest storage, and participating in traditional harvest celebrations.",
    fullOverview:
      "Harvest is the most rewarding period in agriculture. FURAA Harvesting Camps invite students to experience the satisfaction of reaping what has grown. From hand-harvesting sugarcane, vegetables, and pulses to traditional threshing and community feasts, campers gain deep gratitude for farmer labor.",
    heroBgImage: "/images/programs/NAD06400.JPG",
    suitableClassBands: [
      {
        band: "Classes 1–4",
        title: "Foundation Campers",
        focus: "Gentle vegetable picking (carrots, beans, greens), sensory sorting, and harvest celebration songs.",
      },
      {
        band: "Classes 5–8",
        title: "Exploration Campers",
        focus: "Traditional sickles with safety gear, manual grain threshing, winnowing, and weighing harvest yields.",
      },
      {
        band: "Classes 9–10",
        title: "Specialization Campers",
        focus: "Post-harvest moisture testing, seed saving protocols, cold-storage mechanics, and farm-gate supply chains.",
      },
    ],
    activities: [
      {
        title: "Seasonal Crop Hand-Harvesting",
        description: "Supervised harvesting of seasonal crops including sugarcane stalks, leafy vegetables, radishes, and legumes.",
      },
      {
        title: "Traditional Threshing, Winnowing and Cleaning",
        description: "Hands-on participation in age-old techniques using woven winnowing fans to separate grain from chaff.",
      },
      {
        title: "Sugarcane Crushing and Fresh Jaggery Demonstration",
        description: "Observing traditional bullock or mechanical cane crushing, boiling vats, and warm organic jaggery setting.",
      },
      {
        title: "Seed Selection and Preservation Protocols",
        description: "Identifying heirloom open-pollinated seeds, sun-drying techniques, and neem-leaf storage preservation.",
      },
      {
        title: "Farm-to-Plate Food Appreciation",
        description: "Raw tasting sessions of fresh harvests, understanding nutritional density and true food origins.",
      },
      {
        title: "Sankranti / Harvest Folk Celebration and Games",
        description: "Folk music, bullock decoration, bonfire storytelling, and community harvest celebrations.",
      },
    ],
    sampleSchedule: [
      {
        timeOrPhase: "09:00 AM — 09:30 AM",
        title: "Harvest Briefing and Tool Safety Demonstration",
        description: "Demonstration of safe harvest techniques, distribution of canvas work gloves, and plot allocations.",
      },
      {
        timeOrPhase: "09:30 AM — 11:30 AM",
        title: "Field Harvest and Vegetable Picking",
        description: "Guided harvesting in designated crop rows; collecting produce into woven bamboo baskets.",
      },
      {
        timeOrPhase: "11:30 AM — 12:30 PM",
        title: "Sugarcane Crushing and Fresh Cane Tasting",
        description: "Fresh sugarcane chewing and observation of traditional farm-scale jaggery preparation.",
      },
      {
        timeOrPhase: "12:30 PM — 01:30 PM",
        title: "Traditional Winnowing and Seed Saving",
        description: "Separating grain, practicing winnowing with natural airflow, and preparing seed packets to take home.",
      },
      {
        timeOrPhase: "01:30 PM — 02:30 PM",
        title: "Celebratory Harvest Feast",
        description: "Traditional festival lunch served on banana leaves with freshly harvested farm ingredients.",
      },
      {
        timeOrPhase: "02:30 PM — 03:30 PM",
        title: "Harvest Folk Songs and Farmer Gratitude",
        description: "Campers express gratitude to resident farmers, pack their harvested produce bags, and share reflections.",
      },
    ],
    safetyConsiderations: [
      "Protective gear: heavy canvas gardening gloves and eye protection provided for all stalk harvesting activities.",
      "Blunted safety sickles: used solely under direct 1:1 adult supervision for older campers; younger campers hand-pick produce.",
      "Machinery exclusion: motorized threshers and sugarcane rollers are observed strictly from behind safety barriers.",
      "Allergy tracking: pre-event documentation of pollen or plant sap sensitivities with on-site first-aid readiness.",
    ],
    photos: [
      {
        src: "/images/programs/NAD06400.JPG",
        alt: "Students tasting sweet fresh sugarcane stalks harvested directly in field",
        caption: "Sugarcane harvest and raw farm-to-plate sweetness experience",
        badge: "Fresh Harvest",
      },
      {
        src: "/images/programs/NAD06235.JPG",
        alt: "Students working along tilled agricultural plot with draught animal",
        caption: "Agrarian labor appreciation and seasonal crop cycle completion",
        badge: "Field Work",
      },
      {
        src: "/images/modules/NAD06129.JPG",
        alt: "Mentor explaining sunflower seed head anatomy and seed development",
        caption: "Seed maturity observation and seed preservation techniques",
        badge: "Seed Saving",
      },
      {
        src: "/images/modules/NAD06157.JPG",
        alt: "Students in farm trailer celebrating harvested yield",
        caption: "Harvest transit and collective celebration of agricultural abundance",
        badge: "Harvest Joy",
      },
    ],
    ctaSubject: "Harvesting Camp Enrollment",
  },
};

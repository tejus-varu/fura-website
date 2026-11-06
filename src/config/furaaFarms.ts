/**
 * FURAA Farms Configuration — Phase 2 & 3
 * Centralized data model for the Ten Pillars of Experiential Learning.
 * Reused across Homepage, Dedicated FURAA Farms Page, and Program Exploration.
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
  // ── 1. FURAA Rural Farms ──────────────────────────────────────────────────
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
      "FURAA Rural Farms immerses students in traditional Indian agriculture and rural heritage. Stepping into wetland paddy paddocks and village-life environments, students connect with the ancient wisdom of indigenous farming communities.",
    educationalObjectives: [
      "Understand traditional agrarian practices, seasonal monsoonal cycles, and regional crop cycles.",
      "Recognize the invaluable contributions and daily dedication of Indian farmers and rural livelihoods.",
      "Experience cooperative rural village life and traditional community culture firsthand.",
      "Develop respect for food origins, natural water channels, and living soil.",
    ],
    activityHighlights: [
      {
        title: "Paddy Puddling and Wetland Preparation",
        description:
          "Students step barefoot into shallow puddled mud fields under mentor supervision, experiencing the cooling tactile sensation of wetland soil conditioning before planting.",
        type: "Hands-on",
      },
      {
        title: "Seedling Transplantation",
        description:
          "Hand-planting young rice saplings into structured field rows, understanding root placement, spacing distance, and wetland hydrology.",
        type: "Hands-on",
      },
      {
        title: "Irrigation Canal Observation",
        description:
          "Walking alongside gravity-fed irrigation channels to understand traditional gravity water distribution, bunds, and water conservation.",
        type: "Supervised Fieldwork",
      },
      {
        title: "Traditional Bullock Cart Experiences",
        description:
          "Gentle, supervised rides on traditional bullock carts across demarcated farm lanes where safely available, observing rural animal draught transportation.",
        type: "Facility-Dependent",
      },
      {
        title: "Sugarcane Jaggery-Making Demonstration",
        description:
          "Witnessing traditional sugarcane juice extraction, boiling in open wide pans, and natural solidification into organic jaggery without chemical clarifiers.",
        type: "Demonstration-Based",
      },
      {
        title: "Traditional Rural Games and Village Life",
        description:
          "Engaging in time-honored cooperative Indian village games like Gilli-Danda, Lagori, and spinning tops under open village-style canopies.",
        type: "Hands-on",
      },
    ],
    learningOutcomes: [
      "Deep agricultural awareness and respect for the labor behind food production.",
      "Empathetic appreciation for rural livelihoods, indigenous knowledge, and village ecosystems.",
      "Enhanced physical teamwork, sensory engagement, and resilience.",
      "Lifelong connection with the soil and natural agrarian cycles.",
    ],
    ageAppropriateness:
      "Suitable for Classes 1 to 10. Water levels in puddling zones are kept under 6 inches for younger cohorts, with 1:8 mentor supervision.",
    safetyProtocols: [
      "Designated puddling areas are pre-screened for stones, sharp debris, and uneven drops.",
      "Mandatory wash stations with clean running water and eco-friendly soap post-fieldwork.",
      "Constant mentor proximity during all animal interactions and field activities.",
    ],
    facilityNote:
      "Paddy puddling and transplantation are seasonal activities linked to crop readiness. Bullock cart rides and jaggery units operate subject to partner site infrastructure and weather safety.",
  },

  // ── 2. FURAA Commercial Farms ─────────────────────────────────────────────
  {
    id: "commercial-farms",
    slug: "commercial-farms",
    title: "FURAA Commercial Farms",
    shortTitle: "Commercial Farms",
    theme: "Explore Modern and Scientific Agriculture",
    tagline: "Discover Modern Farming, Experience Innovation, and Grow Future Skills.",
    badge: "Modern Agronomy",
    badgeVariant: "green",
    iconName: "Building2",
    image: {
      src: "/images/modules/NAD06129.JPG",
      alt: "Students inspecting protected polyhouse vegetable cultivation and nursery trays",
      caption: "Scientific nursery management and controlled-environment polyhouse learning",
      badge: "Scientific Cultivation",
      objectPosition: "center 40%",
    },
    intro:
      "FURAA Commercial Farms bridges fundamental botany with commercial agriculture and horticulture. Students explore high-yield cultivation, controlled environment polyhouses, nursery propagation, and sustainable market gardening.",
    educationalObjectives: [
      "Understand scientific principles of plant nutrition, photosynthesis optimization, and micro-climate control.",
      "Gain exposure to commercial crop planning, harvesting logistics, and economic food chains.",
      "Develop practical horticultural skills in nursery tray raising, grafting, and crop protection.",
      "Foster an entrepreneurial mindset toward modern agrarian science and food technology.",
    ],
    activityHighlights: [
      {
        title: "Polyhouse Vegetable Nursery Raising",
        description:
          "Filling protrays with coco-peat, sowing pelleted seeds with precision, and understanding humidity control inside climate-controlled polyhouses.",
        type: "Hands-on",
      },
      {
        title: "Planting and Bed Establishment",
        description:
          "Transplanting delicate seedlings into raised cultivation beds with drip lines, learning root-ball handling and companion spacing.",
        type: "Hands-on",
      },
      {
        title: "Commercial Vegetable Harvesting",
        description:
          "Selecting ripe bell peppers, tomatoes, and beans using sanitized harvesting shears, sorting by quality grades, and weighing yields.",
        type: "Hands-on",
      },
      {
        title: "Floriculture and Flower Cultivation",
        description:
          "Exploring commercial cut-flower cultivation like marigolds and gerberas, studying petal pigmentation and pollinator corridors.",
        type: "Supervised Fieldwork",
      },
      {
        title: "Leafy Greens and Micro-Greens Production",
        description:
          "Cultivating high-turnaround spinach, amaranth, and herbs, learning about rapid biomass accumulation and moisture management.",
        type: "Hands-on",
      },
      {
        title: "Mushroom Cultivation Introduction",
        description:
          "Understanding sterile substrate preparation, bag inoculation with oyster mushroom spawn, and dark-room fruiting requirements.",
        type: "Demonstration-Based",
      },
      {
        title: "Exotic and High-Value Vegetable Growing",
        description:
          "Observing zesty zucchini, cherry tomatoes, and colored capsicum growing under automated micro-sprinklers.",
        type: "Supervised Fieldwork",
      },
    ],
    learningOutcomes: [
      "Working knowledge of commercial horticulture, modern polyhouses, and protected agriculture.",
      "Practical skills in seed starting, precision transplanting, and harvest grading.",
      "Awareness of agricultural entrepreneurship, supply chains, and food economics.",
      "Appreciation for scientific inquiry, water conservation, and resource efficiency.",
    ],
    ageAppropriateness:
      "Foundational nursery activities for Classes 3–6; advanced crop science, soil chemistry, and economics for Classes 7–10.",
    safetyProtocols: [
      "Polyhouse ventilation is continually monitored; visits are scheduled during cooler morning hours.",
      "Blunted, ergonomic harvesting scissors used under direct mentor demonstration.",
      "Strict hand sanitation before and after handling plant tissues to prevent contamination.",
    ],
    facilityNote:
      "Polyhouse crop varieties depend on seasonal rotation schedules. Specialized mushroom fruiting rooms operate based on climate conditions.",
  },

  // ── 3. FURAA Agro-Forests ─────────────────────────────────────────────────
  {
    id: "agro-forests",
    slug: "agro-forests",
    title: "FURAA Agro-Forests",
    shortTitle: "Agro-Forests",
    theme: "Explore Nature, Trees, and Biodiversity",
    tagline: "Explore Nature, Discover Biodiversity, and Grow a Greener Future.",
    badge: "Canopy Ecology",
    badgeVariant: "green",
    iconName: "Trees",
    image: {
      src: "/images/programs/NAD06235.JPG",
      alt: "FURAA students participating in a guided agro-forestry nature trail and canopy study",
      caption: "Multi-layered agro-forestry canopy study and native tree exploration",
      badge: "Forest Ecosystems",
      objectPosition: "center 50%",
    },
    intro:
      "FURAA Agro-Forests connects students to multi-layered tree ecosystems where agriculture and forestry coexist. Students learn how multi-canopy fruit orchards, native hardwood groves, and pollinators build rich soil, sequester carbon, and shelter biodiversity.",
    educationalObjectives: [
      "Understand multi-canopy agroforestry layers: canopy, sub-canopy, shrub, and ground cover.",
      "Identify native Indian trees, their ecological roles, root networks, and watershed stabilization.",
      "Learn tree propagation techniques including seed stratification, air layering, and grafting.",
      "Discover the vital role of honeybees, wild pollinators, and birds in balancing natural ecosystems.",
    ],
    activityHighlights: [
      {
        title: "Forest Nursery Management",
        description:
          "Potting native saplings like neem, banyan, peepal, and fruit trees in biodegradable bags for reforestation.",
        type: "Hands-on",
      },
      {
        title: "Grafting and Pruning Demonstrations",
        description:
          "Observing cleft grafting and wedge grafting on fruit trees, understanding vascular cambium alignment under expert horticulturists.",
        type: "Demonstration-Based",
      },
      {
        title: "Seasonal Fruit Picking and Orchard Care",
        description:
          "Selecting ripe mangoes, guavas, pomegranates, or jamun directly from low branches, understanding ripening stages and biological cycles.",
        type: "Hands-on",
      },
      {
        title: "Guided Bird Watching and Canopy Identification",
        description:
          "Using field observation guides and binoculars to spot hornbills, sunbirds, and kingfishers in multi-tier agroforest groves.",
        type: "Supervised Fieldwork",
      },
      {
        title: "Beekeeping Awareness & Honey Extraction",
        description:
          "Observing Apis cerana hive boxes from safe screened observation zones, learning hive hierarchy, pollination duties, and raw extraction.",
        type: "Demonstration-Based",
      },
      {
        title: "Forest Exploration Trails",
        description:
          "Walking shaded bio-diversity corridors, discovering leaf litter decomposition, mycorrhizal fungi, and natural forest soil.",
        type: "Supervised Fieldwork",
      },
    ],
    learningOutcomes: [
      "Comprehensive understanding of biodiversity, food webs, and forest ecosystem services.",
      "Keen ecological observation and species identification capabilities.",
      "Tangible environmental stewardship and appreciation for old-growth and native trees.",
      "Respect for beneficial insects, pollinators, and forest conservation.",
    ],
    ageAppropriateness:
      "Sensory nature trails for Classes 1–4; tree biology, propagation science, and carbon cycles for Classes 5–10.",
    safetyProtocols: [
      "Trail paths are cleared of briars, overhangs, and surface tripping hazards.",
      "Beehive observation takes place from designated safe distances with mentor supervision.",
      "Closed-toe sports or hiking shoes mandatory for all forest trails.",
    ],
    facilityNote:
      "Fruit picking is strictly seasonal. Honey extraction is a demonstration-only activity dependent on hive maturity and safety clearances.",
  },

  // ── 4. FURAA Animal Farms ─────────────────────────────────────────────────
  {
    id: "animal-farms",
    slug: "animal-farms",
    title: "FURAA Animal Farms",
    shortTitle: "Animal Farms",
    theme: "Experience Farm Life and Animal Care",
    tagline: "Connect with Animals, Experience Farm Life, and Learn with Compassion.",
    badge: "Ethical Husbandry",
    badgeVariant: "brown",
    iconName: "HeartHandshake",
    image: {
      src: "/images/programs/NAD06199.JPG",
      alt: "Students interacting with gentle domestic farm animals under trained mentor care",
      caption: "Supervised animal care, gentle feeding, and livestock welfare education",
      badge: "Animal Care",
      objectPosition: "center 40%",
    },
    intro:
      "FURAA Animal Farms offers structured, compassionate exposure to domestic livestock, indigenous dairy breeds, poultry, and working farm animals. Students develop empathy, emotional intelligence, and respect for the living creatures that sustain Indian rural life.",
    educationalObjectives: [
      "Cultivate empathy, gentle physical interaction, and respect for animal welfare.",
      "Understand indigenous livestock breeds (Desi cows, sheep, goats) and their rural agricultural roles.",
      "Learn basic animal nutrition, green fodder cultivation, and clean housing requirements.",
      "Discover the symbiotic relationship between livestock manure, vermicomposting, and soil fertility.",
    ],
    activityHighlights: [
      {
        title: "Poultry and Farm Birds Observation",
        description:
          "Observing free-range chickens, ducks, and turkeys, studying egg incubation cycles and natural scratching behaviors.",
        type: "Supervised Fieldwork",
      },
      {
        title: "Supervised Sheep and Goat Feeding",
        description:
          "Offering fresh green Napier grass and legumes to gentle sheep and goats from open palms, learning feeding temperaments.",
        type: "Hands-on",
      },
      {
        title: "Dairy Animal Care and Grooming",
        description:
          "Brushing the coats of native Gir or Hallikar cows, learning cow shelter cleanliness, ventilation, and animal comfort.",
        type: "Hands-on",
      },
      {
        title: "Milking Demonstrations",
        description:
          "Observing traditional hand-milking techniques and modern hygienic milking machines demonstrated by trained dairy staff.",
        type: "Demonstration-Based",
      },
      {
        title: "Calf Rearing and Gentle Interaction",
        description:
          "Bottle-feeding or gently petting young calves in dedicated safe nursing enclosures with strict mentor oversight.",
        type: "Hands-on",
      },
      {
        title: "Green Fodder Preparation",
        description:
          "Learning how fodder chaff-cutters operate and preparing balanced dry and green feed rations for cattle.",
        type: "Demonstration-Based",
      },
    ],
    learningOutcomes: [
      "Emotional maturity, compassion, and gentle handling skills with domestic animals.",
      "Appreciation for livestock welfare, cruelty-free handling, and veterinary care.",
      "Practical understanding of circular farm nutrient loops (manure to biogas to compost).",
      "Broadened awareness of rural dairy livelihoods and traditional animal companionship.",
    ],
    ageAppropriateness:
      "Gentle petting and bird watching for Classes 1–4; dairy biology, genetics, and livestock economics for Classes 5–10.",
    safetyProtocols: [
      "All interaction pens feature double-latched gates and dedicated staff handlers per animal.",
      "Mandatory handwashing with antiseptic soap before and immediately after animal contact.",
      "Animals participating in student programs are vaccinated, veterinarian-certified, and docile.",
    ],
    facilityNote:
      "Milking and calf interaction schedules depend on animal routines and lactating cycles. Animal welfare and comfort strictly supersede tour timing.",
  },

  // ── 5. FURAA Nutri Gardens ────────────────────────────────────────────────
  {
    id: "nutri-gardens",
    slug: "nutri-gardens",
    title: "FURAA Nutri Gardens",
    shortTitle: "Nutri Gardens",
    theme: "Grow Healthy Food, Build Healthy Lives",
    tagline: "Grow Nutritious Food, Discover Healthy Habits, and Nourish a Better Future.",
    badge: "Food Literacy",
    badgeVariant: "green",
    iconName: "Apple",
    image: {
      src: "/images/programs/NAD06270.JPG",
      alt: "Students harvesting fresh garden vegetables and studying nutritious food crops",
      caption: "Hands-on nutrition garden cultivation and farm-to-plate literacy",
      badge: "Wholesome Nutrition",
      objectPosition: "center 45%",
    },
    intro:
      "FURAA Nutri Gardens reconnects children with whole, unrefined foods through hands-on gardening. Students sow, tend, and harvest nutrient-dense greens, ancient millets, and herbs, building lifelong wholesome eating habits without medical claims or rigid diet charts.",
    educationalObjectives: [
      "Demystify food origin: trace whole foods from seed, soil, and sunlight to kitchen preparation.",
      "Discover the nutritional value of ancient Indian millets (Ragi, Jowar, Bajra) and seasonal leafy greens.",
      "Learn organic culinary herb gardening (tulsi, mint, coriander, curry leaves) for urban and rural settings.",
      "Cultivate joyful appreciation for whole, colorful vegetables over processed and packaged snacks.",
    ],
    activityHighlights: [
      {
        title: "Microgreens Cultivation Trays",
        description:
          "Sowing dense trays of mustard, fenugreek, and radish seeds on coco-peat mats, observing rapid 7-day emergence and chlorophyll formation.",
        type: "Hands-on",
      },
      {
        title: "Millet Cultivation and Processing",
        description:
          "Studying drought-resilient finger millet (Ragi) and pearl millet (Bajra) crops, experiencing traditional mortar-and-pestle hulling.",
        type: "Hands-on",
      },
      {
        title: "Leafy Vegetables Kitchen Garden",
        description:
          "Harvesting spinach, amaranth, and moringa leaves directly from raised garden beds, noting natural colors and fresh aromas.",
        type: "Hands-on",
      },
      {
        title: "Demonstration of Millet-Based Foods",
        description:
          "Observing the preparation of wholesome, traditional recipes like ragi malt or steamed millet patties under hygienic conditions.",
        type: "Demonstration-Based",
      },
      {
        title: "Sensory Taste and Aroma Exploration",
        description:
          "Blind taste tests identifying natural mint, basil, lemongrass, and natural cane jaggery, awakening young sensory palates.",
        type: "Hands-on",
      },
      {
        title: "Food Origin Mapping",
        description:
          "Interactive board activities tracing common household meals back to living plants, farm soil, and seasonal calendars.",
        type: "Hands-on",
      },
    ],
    learningOutcomes: [
      "Clear understanding of where whole foods come from and how they are cultivated.",
      "Practical skills to grow microgreens and kitchen herbs on windowsills or balconies.",
      "Natural preference for fresh, diverse, colorful farm produce over processed foods.",
      "Appreciation for traditional climate-resilient grains and water-saving millets.",
    ],
    ageAppropriateness:
      "Sensory tastings and seed planting for Classes 1–4; plant biochemistry, micronutrients, and crop resilience for Classes 5–10.",
    safetyProtocols: [
      "Food tastings use only sanitized, drinking-water washed produce from certified organic plots.",
      "Allergies are logged in advance; all ingredients are clearly disclosed before tastings.",
      "No medical or clinical dietary advice is offered; focus is entirely educational food literacy.",
    ],
    facilityNote:
      "Harvesting and tasting activities depend on seasonal garden rotations and crop availability. Activities focus on education rather than medical consultations.",
  },

  // ── 6. FURAA Ornamental and Landscape Gardens ─────────────────────────────
  {
    id: "ornamental-landscape-gardens",
    slug: "ornamental-landscape-gardens",
    title: "FURAA Ornamental and Landscape Gardens",
    shortTitle: "Ornamental Gardens",
    theme: "Create Beauty, Cultivate Creativity",
    tagline: "Plant with Passion, Design with Creativity, and Grow a Greener World.",
    badge: "Horticultural Art",
    badgeVariant: "gold",
    iconName: "Flower2",
    image: {
      src: "/images/modules/NAD06157.JPG",
      alt: "Students learning potting, ornamental flower bed design and aesthetic landscaping",
      caption: "Creative ornamental gardening, potting art, and aesthetic landscape principles",
      badge: "Living Aesthetics",
      objectPosition: "center 50%",
    },
    intro:
      "FURAA Ornamental and Landscape Gardens blends horticulture with visual aesthetics. Students learn the science of flowering shrubs, topiary, lawn management, and landscape architecture, transforming green areas into serene, creative living spaces.",
    educationalObjectives: [
      "Explore color palettes, textures, and spatial symmetry in living landscape design.",
      "Master potting, repotting, root-ball pruning, and nutrient-rich potting mix formulation.",
      "Understand the ecological value of flowering plants for urban heat mitigation and pollinator support.",
      "Cultivate mindfulness, aesthetic balance, and collaborative teamwork through gardening.",
    ],
    activityHighlights: [
      {
        title: "Ornamental Nursery Techniques",
        description:
          "Propagating ornamental plants via stem cuttings, layering, and rooting hormones in controlled shade houses.",
        type: "Hands-on",
      },
      {
        title: "Potting and Ceramic Container Art",
        description:
          "Mixing red soil, vermicompost, and sand in optimal ratios, planting flowering petunias or coleus in student-decorated pots.",
        type: "Hands-on",
      },
      {
        title: "Landscape Bed Design and Layout",
        description:
          "Planning tiered garden beds using ground cover, accent shrubs, and backdrop hedges with geometric markers.",
        type: "Hands-on",
      },
      {
        title: "Shrub Pruning and Garden Grooming",
        description:
          "Learning the horticultural difference between deadheading, shaping, and structural pruning using safety secateurs.",
        type: "Demonstration-Based",
      },
      {
        title: "Aesthetic Flower Garden Maintenance",
        description:
          "Weeding, mulching with wood chips to conserve moisture, and applying organic compost to flower beds.",
        type: "Hands-on",
      },
    ],
    learningOutcomes: [
      "Practical potting, pruning, and landscape maintenance competencies.",
      "Heightened appreciation for urban greenery, garden design, and botanical aesthetics.",
      "Enhanced spatial planning, teamwork, and artistic expression using natural media.",
      "Sense of personal accomplishment in nurturing living ornamental plants.",
    ],
    ageAppropriateness:
      "Playful potting and flower arranging for Classes 1–4; landscape architecture and pruning geometry for Classes 5–10.",
    safetyProtocols: [
      "Pruning tools are operated only under 1:1 mentor supervision with protective gloves.",
      "Lightweight plastic containers provided for younger children to prevent breakages.",
      "Plant varieties selected are strictly non-toxic and non-allergenic.",
    ],
    facilityNote:
      "Flowering displays vary across monsoons, winters, and summers. Hands-on potting containers can be taken home by student cohorts where arranged.",
  },

  // ── 7. FURAA Urban and Terrace Gardens ────────────────────────────────────
  {
    id: "urban-terrace-gardens",
    slug: "urban-terrace-gardens",
    title: "FURAA Urban and Terrace Gardens",
    shortTitle: "Urban & Terrace Gardens",
    theme: "Grow Green in Every Space",
    tagline: "Think Green, Grow Smart, and Transform Every Space into a Garden.",
    badge: "Space-Smart Farming",
    badgeVariant: "sky",
    iconName: "Layers",
    image: {
      src: "/images/modules/NAD06296.JPG",
      alt: "Students discovering vertical farming, terrace containers, and smart urban agriculture",
      caption: "Compact urban gardening, vertical grow systems, and balcony farming setups",
      badge: "Urban Agriculture",
      objectPosition: "center 45%",
    },
    intro:
      "FURAA Urban and Terrace Gardens demonstrates how students living in apartments and compact cities can cultivate fresh produce. Using terrace grow bags, vertical towers, modular planters, and smart irrigation, students transform concrete into vibrant edible ecosystems.",
    educationalObjectives: [
      "Overcome urban spatial constraints using vertical structures, container growing, and lightweight media.",
      "Master micro-drip irrigation, gravity water conservation, and rainwater harvesting for city terraces.",
      "Learn soil-less potting mixes using coco-peat, perlite, and vermicompost for weight reduction.",
      "Build confidence to establish school terrace gardens and home balcony vegetable patches.",
    ],
    activityHighlights: [
      {
        title: "Terrace Grow-Bag Cultivation",
        description:
          "Filling UV-stabilized grow bags with lightweight potting soil, installing support stakes for climbing beans and tomatoes.",
        type: "Hands-on",
      },
      {
        title: "Vertical Garden Assembly",
        description:
          "Planting modular vertical wall pockets with salad greens and herbs, discovering gravity-fed nutrient circulation.",
        type: "Hands-on",
      },
      {
        title: "Small-Scale Hydroponics Introduction",
        description:
          "Operating simple nutrient film technique (NFT) pipe systems and deep water culture buckets using inert clay pebbles.",
        type: "Demonstration-Based",
      },
      {
        title: "Micro-Drip and Sensor Irrigation",
        description:
          "Assembling low-pressure drip tubes, emitter nozzles, and moisture sensor shut-offs that reduce water usage by up to 70%.",
        type: "Hands-on",
      },
      {
        title: "Urban Balcony Harvesting",
        description:
          "Harvesting terrace-grown chilies, coriander, and cherry tomatoes, measuring yields achieved in small square footage.",
        type: "Hands-on",
      },
    ],
    learningOutcomes: [
      "Practical capability to design, establish, and maintain container gardens at home or school.",
      "Resourcefulness in water conservation, space utilization, and lightweight soil formulation.",
      "Self-reliance in growing fresh, pesticide-free salad greens and culinary herbs in urban environments.",
      "Deepened understanding of sustainable urban food resilience and green infrastructure.",
    ],
    ageAppropriateness:
      "Grow-bag sowing and seedling care for Classes 2–5; drip irrigation math and hydroponics science for Classes 6–10.",
    safetyProtocols: [
      "Terrace zones feature high perimeter safety railings and non-slip rubber matting.",
      "All containers are lightweight and balanced to adhere to structural roof-load limits.",
      "Electrical pumps for hydroponics use 12V DC low-voltage configurations with GFCI breakers.",
    ],
    facilityNote:
      "Terrace models simulate typical urban balcony and rooftop environments. Hydroponic setups demonstrate nutrient circulation without soil.",
  },

  // ── 8. FURAA Art and Folk Centre ──────────────────────────────────────────
  {
    id: "art-folk-centre",
    slug: "art-folk-centre",
    title: "FURAA Art and Folk Centre",
    shortTitle: "Art & Folk Centre",
    theme: "Celebrate Creativity, Culture, and Sustainability",
    tagline: "Create from Waste, Celebrate Traditions, and Inspire Creativity.",
    badge: "Culture & Eco-Art",
    badgeVariant: "gold",
    iconName: "Palette",
    image: {
      src: "/images/summer-camps/NAD06221.JPG",
      alt: "Students painting traditional pottery, making eco-crafts, and celebrating folk art",
      caption: "Traditional pottery wheel practice, natural dye art, and creative upcycling",
      badge: "Living Folk Traditions",
      objectPosition: "center 40%",
    },
    intro:
      "FURAA Art and Folk Centre breathes life into traditional Indian rural crafts, folk arts, and sustainable creativity. Under shady open pavilions, students shape natural clay, paint with organic plant pigments, transform discarded materials into gifts, and celebrate rural heritage.",
    educationalObjectives: [
      "Discover traditional Indian folk art traditions including Warli, Madhubani, and terracotta craft.",
      "Learn pottery wheel techniques, hand pinch-pots, and clay sculpture using natural farm earth.",
      "Understand waste-to-art upcycling: repurposing discarded glass, plastic, and scrap into functional art.",
      "Experience the cultural joy of traditional rhythm, folk music, and community folk dance.",
    ],
    activityHighlights: [
      {
        title: "Traditional Clay and Mud Pottery",
        description:
          "Centering moist clay on a potter's wheel alongside master village potters, shaping small diyas, cups, and bowls.",
        type: "Hands-on",
      },
      {
        title: "Waste Bottle and Container Painting",
        description:
          "Transforming discarded glass bottles and food containers into decorative flower vases using non-toxic acrylics and jute twine.",
        type: "Hands-on",
      },
      {
        title: "Folk Wall Art (Warli and Tribal Motifs)",
        description:
          "Painting agricultural motifs — harvest celebrations, the sun, cows, and farmers — on terracotta tiles using rice-paste white paint.",
        type: "Hands-on",
      },
      {
        title: "Natural Dyes and Leaf-Printing",
        description:
          "Extracting yellow from turmeric, blue from indigo, and red from beetroot to create patterned handmade paper bookmarks.",
        type: "Hands-on",
      },
      {
        title: "Age-Appropriate Folk Rhythm and Dance",
        description:
          "Joining cooperative harvest dance circles accompanied by traditional rural folk drums (Dholak, Tamte) under open canopies.",
        type: "Hands-on",
      },
    ],
    learningOutcomes: [
      "Fine motor coordination, tactile focus, and patience cultivated on the pottery wheel.",
      "Appreciation for India's diverse rural artisans, living traditions, and intangible cultural heritage.",
      "Creative problem-solving mindset viewing waste materials as valuable resources for art.",
      "Inhibition-free group expression, joy, and rhythmic collaboration through folk movement.",
    ],
    ageAppropriateness:
      "Tactile clay modeling and leaf printing for Classes 1–4; wheel pottery and detailed tribal motifs for Classes 5–10.",
    safetyProtocols: [
      "All paints, pigments, and clays are certified 100% non-toxic, lead-free, and skin-safe.",
      "Glass bottles used in upcycling are pre-washed, edge-checked, and smoothed with no sharp lips.",
      "Pottery wheels are hand-spun or equipped with gentle variable-speed foot controllers with mentor supervision.",
    ],
    facilityNote:
      "Fired clay pieces require drying time; unfired air-dry student creations are packed safely for school return. Folk performances depend on cohort size.",
  },

  // ── 9. FURAA Farm Machinery and Precision Agriculture ─────────────────────
  {
    id: "machinery-precision-agri",
    slug: "machinery-precision-agri",
    title: "FURAA Farm Machinery and Precision Agriculture",
    shortTitle: "Farm Machinery & Precision Agri",
    theme: "Explore Smart Farming and Future Technologies",
    tagline: "Discover Smart Machines, Experience Innovation, and Explore the Future of Farming.",
    badge: "Smart Farming Tech",
    badgeVariant: "sky",
    iconName: "Cpu",
    image: {
      src: "/images/programs/NAD06400.JPG",
      alt: "Students observing agricultural machinery, sensor setups, and modern farming technology",
      caption: "Supervised agricultural machinery walkthrough and precision farming technology",
      badge: "Agri-Tech Innovation",
      objectPosition: "center 40%",
    },
    intro:
      "FURAA Farm Machinery and Precision Agriculture opens students' eyes to the engineering revolution powering modern food production. Through supervised demonstrations and expert walkthroughs, students explore tractors, mechanical transplanters, agricultural drones, and IoT soil sensors.",
    educationalObjectives: [
      "Understand mechanical principles of modern farm implements: power tillers, rotavators, and harvesters.",
      "Discover the transformative role of agricultural drones in aerial mapping, multispectral imaging, and precision spraying.",
      "Explore digital precision farming: soil moisture probes, IoT weather telemetry, and satellite crop monitoring.",
      "Inspire interest in agricultural engineering, robotics, data science, and sustainable automation.",
    ],
    activityHighlights: [
      {
        title: "Mechanical Paddy Transplanting Walkthrough",
        description:
          "Observing diesel-powered walk-behind transplanters place 8 rows of saplings simultaneously with uniform depth and spacing.",
        type: "Demonstration-Based",
      },
      {
        title: "Combine Harvester Architecture Demonstration",
        description:
          "Static walkthrough of combine harvesting machinery: cutting bar, threshing drum, straw walker, and grain bin mechanics.",
        type: "Demonstration-Based",
      },
      {
        title: "Agricultural Drone Spraying and Mapping",
        description:
          "Demonstration of hexacopter agricultural drones performing automated flight corridors over fields using pure clean water for simulation.",
        type: "Demonstration-Based",
      },
      {
        title: "Mechanical Weeding and Land Tilling",
        description:
          "Observing tractor-mounted rotary tillers prepare seedbeds, comparing machine efficiency with traditional manual hoeing.",
        type: "Demonstration-Based",
      },
      {
        title: "Mechanical Tree-Climbing Technology",
        description:
          "Demonstration of mechanical coconut and arecanut tree-climbing equipment operated by trained professionals with safety harnesses.",
        type: "Demonstration-Based",
      },
      {
        title: "Sensor-Based Digital Irrigation and Telemetry",
        description:
          "Hands-on testing of digital soil moisture probes and automated solenoid valves controlled via micro-controllers.",
        type: "Hands-on",
      },
    ],
    learningOutcomes: [
      "Technical literacy in agricultural mechanization, hydraulics, and power transmission.",
      "Clear understanding of how precision agriculture reduces water, fuel, and chemical usage.",
      "Inspiration toward STEM careers in agricultural robotics, agronomy, and mechanical engineering.",
      "Respect for equipment safety, preventive maintenance, and technological innovation.",
    ],
    ageAppropriateness:
      "Visual equipment tours and scale-model demonstrations for Classes 3–6; mechanics, telemetry, and drone science for Classes 7–10.",
    safetyProtocols: [
      "IMPORTANT SAFEGUARD: All heavy machinery, engine operations, and drone flights are strictly demonstration-only by certified operators.",
      "Students remain behind high-visibility physical safety barricades at a minimum 15-meter buffer zone.",
      "Drone demonstrations spray solely pure drinking water; children never handle chemical solutions, sprays, or rotating equipment.",
    ],
    facilityNote:
      "Machinery demonstrations operate subject to weather, field ground conditions, and site equipment availability. Drones operate only within DGCA-compliant airspace clearances.",
  },

  // ── 10. FURAA Wellness and Adventure Centre ───────────────────────────────
  {
    id: "wellness-adventure-centre",
    slug: "wellness-adventure-centre",
    title: "FURAA Wellness and Adventure Centre",
    shortTitle: "Wellness & Adventure Centre",
    theme: "Explore, Energize, and Embrace Nature",
    tagline: "Explore Nature, Embrace Adventure, and Grow Stronger in Body and Mind.",
    badge: "Outdoor Vitality",
    badgeVariant: "green",
    iconName: "Compass",
    image: {
      src: "/images/summer-camps/NAD06445.JPG",
      alt: "Students engaging in outdoor obstacle courses, nature walks, and physical team games",
      caption: "Supervised outdoor obstacle courses, active nature trails, and teamwork challenges",
      badge: "Adventure & Movement",
      objectPosition: "center 45%",
    },
    intro:
      "FURAA Wellness and Adventure Centre harnesses the energizing power of open natural landscapes for healthy physical movement, leadership development, and active adventure. Away from sedentary desks, students conquer age-appropriate obstacle courses, practice mindful breathing under trees, and master outdoor camping skills.",
    educationalObjectives: [
      "Promote physical fitness, balance, coordination, and motor skills through open-air outdoor movement.",
      "Build courage, self-confidence, and team problem-solving across collaborative obstacle courses.",
      "Cultivate mindfulness and mental calmness through open-air yoga and guided sensory nature observation.",
      "Learn essential outdoor camping skills: compass navigation, knot tying, and Leave No Trace ethics.",
    ],
    activityHighlights: [
      {
        title: "Open-Air Canopy Yoga and Breathing",
        description:
          "Practicing gentle sun salutations (Surya Namaskar) and calming breathwork under sprawling banyan tree shade.",
        type: "Hands-on",
      },
      {
        title: "Guided Nature Trekking and Terrain Walks",
        description:
          "Moderate, safe trail walks across undulating farm ridges, granite boulders, and seasonal stream beds.",
        type: "Supervised Fieldwork",
      },
      {
        title: "Low-Rope Obstacle and Balance Courses",
        description:
          "Traversing low-height balance beams, tyre hops, and cargo net traverses with dual-sided mentor spotting.",
        type: "Hands-on",
      },
      {
        title: "Cooperative Team Games and Relays",
        description:
          "Team building challenges such as the Spider Web, pipeline water carry, and tug-of-peace that build social cohesion.",
        type: "Hands-on",
      },
      {
        title: "Outdoor Camping & Shelter Building",
        description:
          "Assembling dome tents, learning reef and bowline knots, and understanding wilderness leave-no-trace ethics.",
        type: "Hands-on",
      },
    ],
    learningOutcomes: [
      "Improved physical endurance, bodily coordination, and outdoor agility.",
      "Heightened emotional resilience, mutual encouragement, and peer leadership.",
      "Practical familiarity with camping equipment, trail navigation, and outdoor safety.",
      "Renewed mental refreshment and positive connection to the great outdoors.",
    ],
    ageAppropriateness:
      "Low balance challenges and gentle nature walks for Classes 1–4; advanced obstacle traverses, orienteering, and tentcraft for Classes 5–10.",
    safetyProtocols: [
      "Rope and low-obstacle courses are routinely inspected with structured supervision and impact-absorbing zones.",
      "Trained adventure facilitators oversee every station with appropriate safety equipment where elevated.",
      "No medical, therapeutic, or clinical psychological claims are made; focus is purely educational recreation and fitness.",
    ],
    facilityNote:
      "Adventure courses operate subject to dry terrain conditions. Heavy rain halts rope traverses immediately in favor of covered yoga and shelter building.",
  },
];

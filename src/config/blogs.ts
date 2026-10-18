/**
 * Centralized Blogs Configuration for FURAA
 *
 * Contains seed articles authored from genuine pedagogical experience at FURAA
 * and verified photographic assets from public/images/.
 */

export type BlogCategory =
  | "All"
  | "Agriculture Education"
  | "Sustainable Farming"
  | "Nature and Biodiversity"
  | "Rural Art and Culture"
  | "Healthy Food Awareness"
  | "Special Camps"
  | "FURAA News and Events";

export const blogCategoryList: Exclude<BlogCategory, "All">[] = [
  "Agriculture Education",
  "Sustainable Farming",
  "Nature and Biodiversity",
  "Rural Art and Culture",
  "Healthy Food Awareness",
  "Special Camps",
  "FURAA News and Events",
];

export interface BlogSection {
  heading: string;
  paragraphs: string[];
  keyTakeaway?: string;
  photo?: {
    src: string;
    alt: string;
    caption: string;
  };
}

export interface BlogPost {
  id: string;
  slug: string;
  title: string;
  subtitle: string;
  category: Exclude<BlogCategory, "All">;
  author: {
    name: string;
    role: string;
  };
  publicationDate: string;
  readTime: string;
  coverImage: {
    src: string;
    alt: string;
    caption: string;
  };
  excerpt: string;
  introduction: string;
  sections: BlogSection[];
  relatedSlugs: string[];
  status: "published" | "draft";
}

export const seedBlogPosts: BlogPost[] = [
  {
    id: "blog-hands-on-farm-education",
    slug: "why-hands-on-farm-education-matters-for-k10-students",
    title: "Why Hands-On Farm Education Belongs in the Modern K–10 Curriculum",
    subtitle: "Bridging textbook theory and living agronomy through tactile outdoor discovery.",
    category: "Agriculture Education",
    author: {
      name: "FURAA Academic Council",
      role: "Pedagogy and Curriculum Division",
    },
    publicationDate: "Oct 12, 2026",
    readTime: "6 min read",
    coverImage: {
      src: "/images/hero/NAD06309.JPG",
      alt: "FURAA students jumping joyfully in red soil farm bed wearing academy shirts",
      caption: "Active, sensory-rich agrarian learning replacing passive screen time.",
    },
    excerpt:
      "When students personally step into tilled red soil, seed germination transforms from a printed diagram into a living, unforgettable cognitive anchor. Discover why farm education is vital for primary and secondary development.",
    introduction:
      "For decades, the standard school curriculum has compartmentalized the natural sciences within two-dimensional textbook pages. Students memorize the stages of photosynthesis, root transpiration, and nitrogen fixation under fluorescent classroom lights, yet rarely witness mycorrhizal soil networks or feel the micro-climate beneath a thriving crop canopy. At FURAA, our experiential curriculum turns the agrarian landscape into an open-air laboratory.",
    sections: [
      {
        heading: "1. The Cognitive Power of Tactile Agronomy",
        paragraphs: [
          "Neuroscientific studies consistently demonstrate that multi-sensory experiences—engaging touch, smell, balance, and spatial movement—form substantially stronger neural pathways than passive screen or lecture instruction. In agriculture, every concept is tactile: the moisture gradient between clay and loam, the fragrance of decomposing humus, and the resistance of unyielding clods before furrowing.",
          "When a Class 3 student gently presses a mustard seed into moist earth, they are not merely observing biology; they are developing patience, spatial coordination, and biological empathy that textbook diagrams cannot replicate.",
        ],
        keyTakeaway:
          "Tactile soil interaction transforms abstract environmental definitions into indelible experiential memory.",
      },
      {
        heading: "2. The Three-Phase Learning Cycle: Preparation, Fieldwork, and Synthesis",
        paragraphs: [
          "Farm visits without pedagogical preparation risk devolving into unstructured picnics. To prevent this, FURAA integrates every field immersion into a rigorous three-phase instructional model.",
          "Phase 1 occurs in the school classroom, where educators introduce foundational botany and soil chemistry. Phase 2 occurs on the farm, where students handle tools, plant crops, and measure irrigation flow. Phase 3 takes place back in school through reflective journals, data logs, and portfolio synthesis.",
        ],
        photo: {
          src: "/images/modules/NAD06296.JPG",
          alt: "Student crouching in red soil carefully holding seeds to sow",
          caption: "Precision seed sowing practice during the hands-on farm fieldwork phase.",
        },
      },
      {
        heading: "3. Cultivating Emotional Grounding and Emotional Well-Being",
        paragraphs: [
          "Urban school leaders frequently cite sensory overload, reduced attention spans, and heightened anxiety among young learners. Outdoor agrarian tasks demand rhythmic physical movement, cooperative communication, and steady focus.",
          "Stepping away from electronic devices and immersing hands in soil triggers measurable reductions in cortisol, fostering a sense of peaceful accomplishment that resonates through academic and family life.",
        ],
        keyTakeaway:
          "Unfiltered outdoor physical engagement directly improves emotional regulation and student stamina.",
      },
    ],
    relatedSlugs: [
      "living-hydrology-monsoon-paddy-transplantation",
      "farm-to-plate-nutrition-awareness-in-schools",
    ],
    status: "published",
  },

  {
    id: "blog-living-hydrology",
    slug: "living-hydrology-monsoon-paddy-transplantation",
    title: "Living Hydrology: What Children Learn from Barefoot Paddy Transplantation",
    subtitle: "Exploring water stewardship, soil puddling, and wetland ecosystems in the monsoon.",
    category: "Special Camps",
    author: {
      name: "Agronomy Field Research Team",
      role: "Wetland Agronomy Specialist",
    },
    publicationDate: "Sep 28, 2026",
    readTime: "5 min read",
    coverImage: {
      src: "/images/modules/NAD06650.JPG",
      alt: "Students actively transplanting paddy saplings in wet field with farm mentors",
      caption: "Supervised paddy puddling and wetland rice sapling transplantation at Neralu Farms.",
    },
    excerpt:
      "Step into the wet mud: how wetland rice cultivation teaches children the true value of water, ecological interdependence, and the sheer effort required to produce every grain of rice.",
    introduction:
      "Rice is the staple grain feeding over half the world's population, yet the average urban student cannot explain how paddy saplings move from nursery beds to flooded fields. Our Monsoon Camps and Exploration Modules invite students to shed their shoes, step into water-saturated mud, and participate in traditional puddling.",
    sections: [
      {
        heading: "1. The Physics and Biology of Wetland Soil Puddling",
        paragraphs: [
          "Before rice seedlings can be transplanted, flooded soil must be churned—an ancient technique known across South Asia as puddling. This mechanical churning destroys soil macropores, forming a compacted subterranean hardpan that slows water infiltration and maintains standing moisture.",
          "As students wade into the warm, silky silt, they feel soil physics firsthand. They observe how mud holds water, why organic matter floats to the surface, and how wetland bacteria thrive in anaerobic conditions.",
        ],
      },
      {
        heading: "2. The Rhythm of Collaborative Transplanting",
        paragraphs: [
          "Unlike solitary classroom deskwork, paddy transplanting requires a synchronized communal rhythm. Students form single-file lines across the flooded plot, holding bunches of tender green saplings.",
          "With mentors guiding their posture, each student inserts two to three saplings into the mud at regular 15-centimeter intervals. One step backward, one row planted. The collective effort builds immediate teamwork and mutual trust.",
        ],
        photo: {
          src: "/images/modules/NAD06652.JPG",
          alt: "Young students planting green rice saplings with hands in wetland paddy bed",
          caption: "Students maintaining row alignment and spacing during manual transplanting.",
        },
        keyTakeaway:
          "Agrarian fieldwork fosters collaborative cooperation that no virtual teamwork exercise can match.",
      },
      {
        heading: "3. Transforming Food Respect",
        paragraphs: [
          "After bending over a wet paddy field for just forty-five minutes, students look at rice with entirely altered perspectives. The next time rice is served in the school cafeteria or at home, food wastage visibly drops.",
          "Children who have planted saplings recognize that every bowl of rice represents monsoon rain, soil nutrients, and backbreaking human labor.",
        ],
      },
    ],
    relatedSlugs: [
      "why-hands-on-farm-education-matters-for-k10-students",
      "farm-to-plate-nutrition-awareness-in-schools",
    ],
    status: "published",
  },

  {
    id: "blog-nutrition-awareness",
    slug: "farm-to-plate-nutrition-awareness-in-schools",
    title: "Farm-to-Plate Nutrition: Cultivating Mindful Food Habits from Primary School",
    subtitle: "Moving food education from abstract dietary charts to living harvest tasting.",
    category: "Healthy Food Awareness",
    author: {
      name: "FURAA Nutrition Initiative",
      role: "Public Health and Nutrition Educator",
    },
    publicationDate: "Sep 15, 2026",
    readTime: "7 min read",
    coverImage: {
      src: "/images/programs/NAD06400.JPG",
      alt: "Students tasting sweet fresh sugarcane stalks harvested directly in field",
      caption: "Direct harvest tasting: understanding natural sweetness without processed sugars.",
    },
    excerpt:
      "When children touch, harvest, and taste fresh sugarcane, native radishes, and heirloom millets directly in the field, ultra-processed packaged snacks naturally lose their appeal.",
    introduction:
      "Children are inundated with hyper-palatable processed food advertisements, leading to an unprecedented rise in childhood metabolic disorders. Conventional school nutrition lessons attempt to counter this through static nutritional pyramids and calorie counts. But lecturing children about vitamins rarely shifts eating habits; sensory connection with real farm food does.",
    sections: [
      {
        heading: "1. The Raw Sensory Discovery of Fresh Harvests",
        paragraphs: [
          "A carrot pulled warm from living soil, washed with clean well water, and snapped fresh tastes radically different from a limp grocery store vegetable that sat in cold storage for three weeks. The natural sweetness, crunch, and earthiness are an immediate revelation.",
          "During FURAA harvesting walks, students peel sweet sugarcane stalks, chew tender green gram pods, and pluck native herbs. Experiencing natural sweetness directly resets children's palate expectations away from artificial flavor enhancers.",
        ],
      },
      {
        heading: "2. Reviving Native Millets in the School Lunchbox",
        paragraphs: [
          "Karnataka is the historic cradle of climate-resilient millets—Ragi (finger millet), Navane (foxtail millet), and Siridhanya. These crops require minimal water, resist pests naturally, and offer superior micronutrient and dietary fiber density compared to polished white rice.",
          "Through fireless culinary workshops, campers grind roasted ragi on traditional stone mills, shape millet laddoos with organic jaggery, and taste warm porridge. When children prepare heritage foods with their own hands, they eagerly advocate for millet meals at home.",
        ],
        photo: {
          src: "/images/modules/NAD06129.JPG",
          alt: "Mentor explaining plant anatomy and seed maturation to students",
          caption: "Understanding crop maturity and nutritional concentration before harvest.",
        },
        keyTakeaway:
          "Children willingly eat what they personally grow, harvest, and understand.",
      },
    ],
    relatedSlugs: [
      "why-hands-on-farm-education-matters-for-k10-students",
      "traditional-rural-crafts-and-living-heritage",
    ],
    status: "published",
  },

  {
    id: "blog-biodiversity-soil",
    slug: "biodiversity-in-the-soil-living-earth-science",
    title: "The Living Soil: Micro-Ecosystems and Soil Biology for Young Scientists",
    subtitle: "Investigating the universe under our feet—from earthworms to mycorrhizal fungi.",
    category: "Nature and Biodiversity",
    author: {
      name: "Dr. K. Srinivas",
      role: "Senior Agronomy Advisor",
    },
    publicationDate: "Aug 30, 2026",
    readTime: "5 min read",
    coverImage: {
      src: "/images/hero/NAD06383.JPG",
      alt: "FURAA students walking single-file through tall sugarcane canopy on a guided nature trail",
      caption: "Curriculum-linked nature corridors studying canopy biodiversity and soil health.",
    },
    excerpt:
      "Soil is not dead dirt; a single tablespoon holds billions of living organisms. How FURAA's hands-on soil exploration turns primary and middle school students into enthusiastic ecological detectives.",
    introduction:
      "Most children grow up being cautioned that soil is 'dirty' and should be avoided. In truth, healthy agricultural topsoil is the single most biodiverse habitat on planet Earth. When students learn to inspect living earth with magnifying lenses, their relationship with the natural world transforms from fear of dirt to scientific awe.",
    sections: [
      {
        heading: "1. The Underground City Beneath Our Feet",
        paragraphs: [
          "In a typical FURAA soil biology session, students take soil core samples from different farm zones: untilled agro-forest humus, organic compost pits, and conventional cultivation plots.",
          "Using magnifying hand-lenses and field microscopes, they document the presence of earthworm castings, centipedes, springtails, and delicate fungal hyphae. They learn how living organisms recycle dead leaf litter into bioavailable plant nourishment.",
        ],
      },
      {
        heading: "2. The Chemistry of Organic Composting",
        paragraphs: [
          "Composting is nature's circular economy in action. Students measure the internal temperature of working compost heaps, observing thermophilic heat generated by microbial respiration.",
          "By understanding carbon-to-nitrogen ratios—balancing brown dry leaves with green farm residues—students connect school chemistry definitions of aerobic digestion with tangible agricultural reality.",
        ],
        keyTakeaway:
          "Teaching children that soil is a living biological organism instills foundational ecological responsibility.",
      },
    ],
    relatedSlugs: [
      "why-hands-on-farm-education-matters-for-k10-students",
      "living-hydrology-monsoon-paddy-transplantation",
    ],
    status: "published",
  },

  {
    id: "blog-folk-heritage",
    slug: "traditional-rural-crafts-and-living-heritage",
    title: "Folk Art, Pottery and Living Agrarian Heritage in Modern Education",
    subtitle: "Anchoring school children to regional craftsmanship and traditional farmer wisdom.",
    category: "Rural Art and Culture",
    author: {
      name: "Folk Arts Cultural Cell",
      role: "Traditional Artisan Program Coordinator",
    },
    publicationDate: "Aug 14, 2026",
    readTime: "6 min read",
    coverImage: {
      src: "/images/hero/NAD06335.JPG",
      alt: "Elder farmer guiding traditional draught ox plough with FURAA students walking alongside",
      caption: "Living agrarian heritage: students walking alongside indigenous draught cattle.",
    },
    excerpt:
      "Connecting young learners with indigenous potters, bullock stewardship, and regional harvest folklore revives invaluable tactile craft skills often lost in digitized classrooms.",
    introduction:
      "Agriculture and rural culture have developed in symbiotic harmony for millennia. Songs, seasonal festivals, terracotta pottery, and folk games evolved directly around sowing rhythms and harvest cycles. At FURAA, artistic expression is an integral component of agricultural education.",
    sections: [
      {
        heading: "1. The Centering Discipline of the Potter's Wheel",
        paragraphs: [
          "Under the guidance of traditional village potters, students place moist clay onto rotating kick-wheels. The craft requires stillness, bilateral coordination, and gentle fingertip pressure. Push too hard, and the clay collapses; remain unfocused, and the vessel loses symmetry.",
          "The tactile connection with natural earthen clay provides profound sensory soothing, allowing children to experience the joy of shaping raw earth into functional vessels.",
        ],
      },
      {
        heading: "2. Honoring Draught Animals and Farmer Heritage",
        paragraphs: [
          "Modern mechanized narratives frequently overlook the central role of draught cattle in sustainable regenerative farming. When students observe gentle indigenous Hallikar bullocks, feel their warmth, and learn how cattle provide non-polluting traction and soil-enriching dung, respect for pastoral stewardship takes root.",
          "Elder farmers share oral lore, traditional weather observation indicators, and harvest songs, bridging the generational divide between rural elders and urban youth.",
        ],
        photo: {
          src: "/images/summer-camps/NAD06221.JPG",
          alt: "Pair of indigenous draught bullocks harnessed with wooden yoke",
          caption: "Quiet interaction with indigenous farm fauna fostering deep animal appreciation.",
        },
        keyTakeaway:
          "Integrating folk arts into agricultural science nurtures well-rounded, culturally grounded thinkers.",
      },
    ],
    relatedSlugs: [
      "why-hands-on-farm-education-matters-for-k10-students",
      "farm-to-plate-nutrition-awareness-in-schools",
    ],
    status: "published",
  },
];

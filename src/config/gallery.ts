/**
 * Centralized Gallery Configuration for FURAA
 *
 * Grounded strictly in real approved photographs located in public/images/.
 * Every entry specifies publication status, verified location, category,
 * accessible alt text, and descriptive caption.
 */

export type GalleryCategory =
  | "All"
  | "Farming Activities"
  | "Rural Experiences"
  | "Art and Folk"
  | "Nature and Biodiversity"
  | "School Programs"
  | "Special Camps"
  | "Harvesting Experiences";

export const galleryCategoryList: Exclude<GalleryCategory, "All">[] = [
  "Farming Activities",
  "Rural Experiences",
  "Art and Folk",
  "Nature and Biodiversity",
  "School Programs",
  "Special Camps",
  "Harvesting Experiences",
];

export type PublicationStatus = "published" | "draft";

export interface GalleryPhoto {
  id: string;
  src: string;
  alt: string;
  caption: string;
  badge?: string;
  category: Exclude<GalleryCategory, "All">;
  location?: string;
  eventId?: string;
  eventTitle?: string;
}

export interface GalleryEvent {
  id: string;
  title: string;
  category: Exclude<GalleryCategory, "All">;
  location?: string;
  date?: string; // Verified date or omitted
  description: string;
  status: PublicationStatus;
  coverImage: string;
  photos: GalleryPhoto[];
}

/**
 * Verified Gallery Events with authentic photo sets.
 * No fabricated dates, school names, or imaginary events.
 */
export const galleryEvents: GalleryEvent[] = [
  {
    id: "wetland-paddy-transplantation",
    title: "Wetland Paddy Transplantation and Soil Puddling",
    category: "Farming Activities",
    location: "Neralu Farms, Bengaluru Region",
    description:
      "Students step barefoot into water-saturated agricultural beds to experience traditional paddy puddling and sapling transplantation guided by agrarian mentors.",
    status: "published",
    coverImage: "/images/modules/NAD06650.JPG",
    photos: [
      {
        id: "paddy-1",
        src: "/images/modules/NAD06650.JPG",
        alt: "Students actively transplanting paddy saplings in wet field with farm mentors",
        caption: "Supervised paddy puddling and wetland rice sapling transplantation",
        badge: "Paddy Transplants",
        category: "Farming Activities",
        location: "Neralu Farms, Bengaluru Region",
        eventId: "wetland-paddy-transplantation",
        eventTitle: "Wetland Paddy Transplantation and Soil Puddling",
      },
      {
        id: "paddy-2",
        src: "/images/modules/NAD06652.JPG",
        alt: "Young students planting green rice saplings with hands in wetland paddy bed",
        caption: "Hands-on planting of green rice saplings in fertile wetland mud",
        badge: "Wetland Sowing",
        category: "Farming Activities",
        location: "Neralu Farms, Bengaluru Region",
        eventId: "wetland-paddy-transplantation",
        eventTitle: "Wetland Paddy Transplantation and Soil Puddling",
      },
    ],
  },

  {
    id: "traditional-draught-ploughing",
    title: "Traditional Draught Ploughing and Soil Preparation",
    category: "Rural Experiences",
    location: "Neralu Farms, Bengaluru Region",
    description:
      "Learning age-old agronomic practices: working alongside resident farmers and gentle indigenous draught bullocks to observe furrowing and soil aeration.",
    status: "published",
    coverImage: "/images/hero/NAD06335.JPG",
    photos: [
      {
        id: "plough-1",
        src: "/images/hero/NAD06335.JPG",
        alt: "Elder farmer guiding traditional draught ox plough with FURAA students walking alongside",
        caption: "Elder farmer demonstrating wooden ox plough mechanics and soil furrowing",
        badge: "Draught Agronomy",
        category: "Rural Experiences",
        location: "Neralu Farms, Bengaluru Region",
        eventId: "traditional-draught-ploughing",
        eventTitle: "Traditional Draught Ploughing and Soil Preparation",
      },
      {
        id: "plough-2",
        src: "/images/programs/NAD06204.JPG",
        alt: "Draught bullocks with wooden yoke turning soil beds in agricultural plot",
        caption: "Gentle draught cattle in agricultural plots demonstrating traditional soil mechanics",
        badge: "Agrarian Heritage",
        category: "Rural Experiences",
        location: "Neralu Farms, Bengaluru Region",
        eventId: "traditional-draught-ploughing",
        eventTitle: "Traditional Draught Ploughing and Soil Preparation",
      },
      {
        id: "plough-3",
        src: "/images/programs/NAD06235.JPG",
        alt: "Students learning hands-on plough furrowing with draught cattle",
        caption: "Students walking alongside tilled soil beds understanding animal-assisted farming",
        badge: "Soil Furrowing",
        category: "Farming Activities",
        location: "Neralu Farms, Bengaluru Region",
        eventId: "traditional-draught-ploughing",
        eventTitle: "Traditional Draught Ploughing and Soil Preparation",
      },
      {
        id: "plough-4",
        src: "/images/summer-camps/NAD06221.JPG",
        alt: "Pair of indigenous draught bullocks harnessed with wooden yoke",
        caption: "Indigenous farm livestock welfare, quiet observation and animal appreciation",
        badge: "Farm Fauna",
        category: "Rural Experiences",
        location: "Neralu Farms, Bengaluru Region",
        eventId: "traditional-draught-ploughing",
        eventTitle: "Traditional Draught Ploughing and Soil Preparation",
      },
    ],
  },

  {
    id: "sunflower-biodiversity-inquiry",
    title: "Botanical Observation and Sunflower Biodiversity",
    category: "Nature and Biodiversity",
    location: "Neralu Farms, Bengaluru Region",
    description:
      "Guided inquiry sessions in organic sunflower fields examining floral anatomy, companion planting, pollinator interactions, and seed development.",
    status: "published",
    coverImage: "/images/modules/NAD06129.JPG",
    photos: [
      {
        id: "botany-1",
        src: "/images/modules/NAD06129.JPG",
        alt: "FURAA mentor demonstrating sunflower anatomy and pollination to students",
        caption: "Agrarian mentor explaining sunflower anatomy, disc florets, and pollination",
        badge: "Pollinator Science",
        category: "Nature and Biodiversity",
        location: "Neralu Farms, Bengaluru Region",
        eventId: "sunflower-biodiversity-inquiry",
        eventTitle: "Botanical Observation and Sunflower Biodiversity",
      },
      {
        id: "botany-2",
        src: "/images/modules/NAD06124.JPG",
        alt: "Young student exploring bright blooming sunflowers in an organic field",
        caption: "Young student observing vibrant sunflower heads and beneficial garden insects",
        badge: "Floral Discovery",
        category: "Nature and Biodiversity",
        location: "Neralu Farms, Bengaluru Region",
        eventId: "sunflower-biodiversity-inquiry",
        eventTitle: "Botanical Observation and Sunflower Biodiversity",
      },
    ],
  },

  {
    id: "sugarcane-harvest-nutrition",
    title: "Sugarcane Harvesting and Farm-to-Food Awareness",
    category: "Harvesting Experiences",
    location: "Neralu Farms, Bengaluru Region",
    description:
      "Direct connection with food origins: students observe harvesting of sweet sugarcane stalks, explore natural sweetness, and learn traditional farm preservation.",
    status: "published",
    coverImage: "/images/programs/NAD06400.JPG",
    photos: [
      {
        id: "harvest-1",
        src: "/images/programs/NAD06400.JPG",
        alt: "Students tasting sweet fresh sugarcane stalks harvested directly in field",
        caption: "Farm-to-plate nutrition awareness: tasting freshly harvested organic sugarcane",
        badge: "Fresh Harvest",
        category: "Harvesting Experiences",
        location: "Neralu Farms, Bengaluru Region",
        eventId: "sugarcane-harvest-nutrition",
        eventTitle: "Sugarcane Harvesting and Farm-to-Food Awareness",
      },
      {
        id: "harvest-2",
        src: "/images/summer-camps/NAD06445.JPG",
        alt: "Campers smiling together holding sugarcane in open farmland",
        caption: "Student cohort cheering with fresh stalks during the seasonal harvest celebration",
        badge: "Cohort Celebration",
        category: "Harvesting Experiences",
        location: "Neralu Farms, Bengaluru Region",
        eventId: "sugarcane-harvest-nutrition",
        eventTitle: "Sugarcane Harvesting and Farm-to-Food Awareness",
      },
    ],
  },

  {
    id: "agro-forestry-canopy-trail",
    title: "Agro-Forest Canopy Trails and Stream Hydrology",
    category: "Nature and Biodiversity",
    location: "Neralu Farms, Bengaluru Region",
    description:
      "Walking under dense sugarcane canopies and along shallow irrigation canals to study micro-climates, water movement, and riparian flora.",
    status: "published",
    coverImage: "/images/hero/NAD06383.JPG",
    photos: [
      {
        id: "trail-1",
        src: "/images/hero/NAD06383.JPG",
        alt: "FURAA students walking single-file through tall sugarcane canopy on a guided nature trail",
        caption: "Guided nature walk through towering sugarcane corridors studying plant density",
        badge: "Canopy Trail",
        category: "Nature and Biodiversity",
        location: "Neralu Farms, Bengaluru Region",
        eventId: "agro-forestry-canopy-trail",
        eventTitle: "Agro-Forest Canopy Trails and Stream Hydrology",
      },
      {
        id: "trail-2",
        src: "/images/safety/NAD06530.JPG",
        alt: "Mentor guiding FURAA students through shallow farm irrigation stream with direct supervision",
        caption: "Supervised exploration of clean irrigation canals studying water flow and filtration",
        badge: "Stream Hydrology",
        category: "Nature and Biodiversity",
        location: "Neralu Farms, Bengaluru Region",
        eventId: "agro-forestry-canopy-trail",
        eventTitle: "Agro-Forest Canopy Trails and Stream Hydrology",
      },
    ],
  },

  {
    id: "rural-games-meadow-immersion",
    title: "Rural Games, Meadow Running and Screen-Free Play",
    category: "Special Camps",
    location: "Neralu Farms, Bengaluru Region",
    description:
      "High-energy outdoor physical games in open agrarian meadows, building cardiovascular stamina, cooperation, and genuine nature connection.",
    status: "published",
    coverImage: "/images/summer-camps/NAD06495.JPG",
    photos: [
      {
        id: "camps-1",
        src: "/images/summer-camps/NAD06495.JPG",
        alt: "Children running through farm meadow with arms outstretched like airplanes",
        caption: "Joyful meadow running with arms outstretched during outdoor movement games",
        badge: "Active Play",
        category: "Special Camps",
        location: "Neralu Farms, Bengaluru Region",
        eventId: "rural-games-meadow-immersion",
        eventTitle: "Rural Games, Meadow Running and Screen-Free Play",
      },
      {
        id: "camps-2",
        src: "/images/hero/NAD06309.JPG",
        alt: "FURAA students jumping joyfully in red soil farm bed wearing academy caps and shirts",
        caption: "Students jumping with pure joy into soft, freshly cultivated red soil beds",
        badge: "Soil Joy",
        category: "Special Camps",
        location: "Neralu Farms, Bengaluru Region",
        eventId: "rural-games-meadow-immersion",
        eventTitle: "Rural Games, Meadow Running and Screen-Free Play",
      },
      {
        id: "camps-3",
        src: "/images/summer-camps/NAD06224.JPG",
        alt: "Children walking together in FURAA caps and polo shirts",
        caption: "Campers walking together in academy attire after cooperative team challenges",
        badge: "Camp Unity",
        category: "Special Camps",
        location: "Neralu Farms, Bengaluru Region",
        eventId: "rural-games-meadow-immersion",
        eventTitle: "Rural Games, Meadow Running and Screen-Free Play",
      },
    ],
  },

  {
    id: "tactile-seed-sowing-practice",
    title: "Tactile Seed Sowing and Living Earth Science",
    category: "Art and Folk",
    location: "Neralu Farms, Bengaluru Region",
    description:
      "Hands-on soil tactile discovery, gentle seed handling, organic potting, and living earth exploration creating lasting respect for growing life.",
    status: "published",
    coverImage: "/images/modules/NAD06296.JPG",
    photos: [
      {
        id: "art-1",
        src: "/images/modules/NAD06296.JPG",
        alt: "Class 1–4 student crouching in freshly tilled red soil, carefully holding seeds in palms to sow",
        caption: "Tactile seed handling and precise seed spacing in nutrient-rich organic soil",
        badge: "Living Earth",
        category: "Art and Folk",
        location: "Neralu Farms, Bengaluru Region",
        eventId: "tactile-seed-sowing-practice",
        eventTitle: "Tactile Seed Sowing and Living Earth Science",
      },
    ],
  },

  {
    id: "school-cohort-field-transit",
    title: "School Cohort Field Transit and Farm Day Outings",
    category: "School Programs",
    location: "Neralu Farms, Bengaluru Region",
    description:
      "Supervised group field transit across open agricultural land, bringing students and mentors together for real-world experiential learning.",
    status: "published",
    coverImage: "/images/programs/NAD06270.JPG",
    photos: [
      {
        id: "school-1",
        src: "/images/programs/NAD06270.JPG",
        alt: "FURAA student cohort and educator giving thumbs-up gestures",
        caption: "Student cohort and educators giving enthusiastic thumbs-up at farm assembly",
        badge: "School Cohort",
        category: "School Programs",
        location: "Neralu Farms, Bengaluru Region",
        eventId: "school-cohort-field-transit",
        eventTitle: "School Cohort Field Transit and Farm Day Outings",
      },
      {
        id: "school-2",
        src: "/images/programs/NAD06199.JPG",
        alt: "FURAA students and mentor on tractor ride exploring sugarcane farmland",
        caption: "Supervised tractor trailer ride through open farmland observing crop plots",
        badge: "Agrarian Transit",
        category: "School Programs",
        location: "Neralu Farms, Bengaluru Region",
        eventId: "school-cohort-field-transit",
        eventTitle: "School Cohort Field Transit and Farm Day Outings",
      },
      {
        id: "school-3",
        src: "/images/modules/NAD06157.JPG",
        alt: "Students riding farm trailer reviewing logistics and agrarian transit",
        caption: "Safe open-air farm transit between activity zones with accompanying mentors",
        badge: "Field Transit",
        category: "School Programs",
        location: "Neralu Farms, Bengaluru Region",
        eventId: "school-cohort-field-transit",
        eventTitle: "School Cohort Field Transit and Farm Day Outings",
      },
    ],
  },
];

/**
 * Flattened list of all published photographs for quick filtering in the public photo grid.
 */
export const allGalleryPhotos: GalleryPhoto[] = galleryEvents
  .filter((e) => e.status === "published")
  .flatMap((e) => e.photos);

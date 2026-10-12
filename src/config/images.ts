/**
 * Centralized Image Configuration for FURAA
 *
 * All image paths point to local static assets in public/images/.
 * When an image source is empty or missing, ImagePlaceholder gracefully
 * displays an accessible, branded placeholder with proper metadata.
 */

export interface ImageSlot {
  src: string;
  alt: string;
  caption?: string;
  badge?: string;
  objectPosition?: string;
}

export interface HeroSlide {
  src: string;
  alt: string;
  title?: string;
  caption?: string;
  badge?: string;
  objectPosition?: string;
}

export const siteImages = {
  hero: {
    main: {
      src: "/images/hero/NAD06309.JPG",
      alt: "FURAA students jumping joyfully in red soil farm bed wearing academy caps and shirts",
      caption: "Supervised outdoor agrarian learning on fertile soil",
      badge: "Hands-on Farming",
      objectPosition: "center 40%",
    },
    background: {
      src: "/images/hero/NAD06309.JPG",
      alt: "Lush organic farmland and green crop canopy backdrop",
      objectPosition: "center 40%",
    },
    slides: [
      {
        src: "/images/hero/NAD06309.JPG",
        alt: "FURAA students jumping joyfully in red soil farm bed wearing academy uniforms",
        title: "Where Agriculture, Art & Nature Shape Young Minds",
        caption: "Supervised hands-on farming and soil discovery in session",
        badge: "Joyful Discovery",
        objectPosition: "center 38%",
      },
      {
        src: "/images/hero/NAD06335.JPG",
        alt: "Elder farmer guiding traditional draught ox plough with FURAA students walking alongside",
        title: "Living Agrarian Heritage & Soil Cultivation",
        caption: "Learning traditional soil preparation and draught animal stewardship",
        badge: "Traditional Agronomy",
        objectPosition: "center 45%",
      },
      {
        src: "/images/hero/NAD06383.JPG",
        alt: "FURAA students walking single-file through tall sugarcane canopy on a guided nature trail",
        title: "Curriculum-Linked Nature Trails & Crop Science",
        caption: "Observing crop cycles and biodiversity in outdoor learning corridors",
        badge: "Agro-Ecology Trail",
        objectPosition: "center 35%",
      },
    ] as HeroSlide[],
  },
  about: {
    heroBg: {
      src: "/images/programs/NAD06199.JPG",
      alt: "FURAA students and mentor on tractor ride exploring sugarcane farmland",
      objectPosition: "center 35%",
    },
    story: {
      src: "/images/programs/NAD06270.JPG",
      alt: "FURAA student cohort and educator giving thumbs-up gestures",
      caption: "Reconnecting children with land, food and community heritage",
      badge: "Our Cohort",
      objectPosition: "center 25%",
    },
    team: {
      src: "/images/modules/NAD06129.JPG",
      alt: "FURAA mentor demonstrating sunflower anatomy and pollination to students",
      caption: "Certified mentors and agrarian educators guiding practical inquiry",
      badge: "Educators & Mentors",
      objectPosition: "center 30%",
    },
  },
  modules: {
    foundation: {
      heroBg: {
        src: "/images/modules/NAD06124.JPG",
        alt: "Young student exploring bright blooming sunflowers in an organic field",
        objectPosition: "center 30%",
      },
      sowing: {
        src: "/images/modules/NAD06296.JPG",
        alt: "Class 1–4 student crouching in freshly tilled red soil, carefully holding seeds in palms to sow",
        caption: "Sensory seed sowing and plant observation",
        badge: "Classes 1–4",
        objectPosition: "center 35%",
      },
      natureArt: {
        src: "/images/modules/NAD06124.JPG",
        alt: "Young child discovering blooming sunflower anatomy and gentle nature wonders",
        caption: "Sensory discovery and tactile nature observation",
        badge: "Sensory Wonders",
        objectPosition: "center 30%",
      },
      storytelling: {
        src: "/images/summer-camps/NAD06224.JPG",
        alt: "Children walking together happily from the tilled farm field in FURAA gear",
        caption: "Cooperative rural games and agrarian storytelling circle",
        badge: "Rural Connection",
        objectPosition: "center 40%",
      },
    },
    exploration: {
      heroBg: {
        src: "/images/modules/NAD06650.JPG",
        alt: "Students actively transplanting paddy saplings in wet field with farm mentors",
        objectPosition: "center 45%",
      },
      cultivation: {
        src: "/images/modules/NAD06652.JPG",
        alt: "Class 5–8 students planting green rice saplings with hands in wetland paddy bed",
        caption: "Hands-on paddy transplantation and organic soil cycles",
        badge: "Classes 5–8",
        objectPosition: "center 45%",
      },
      tools: {
        src: "/images/hero/NAD06335.JPG",
        alt: "Students learning safe handling of traditional wooden plough and soil furrowing",
        caption: "Traditional agronomy and draught animal soil preparation",
        badge: "Soil Agronomy",
        objectPosition: "center 45%",
      },
      ecology: {
        src: "/images/modules/NAD06129.JPG",
        alt: "Students and mentor observing flower anatomy, pollinators, and agro-ecosystems",
        caption: "Botanical inquiry, pollinator beds, and plant biology",
        badge: "Agro-Ecology",
        objectPosition: "center 30%",
      },
    },
    specialization: {
      heroBg: {
        src: "/images/hero/NAD06335.JPG",
        alt: "Senior students observing traditional agronomy and soil mechanics",
        objectPosition: "center 40%",
      },
      soilScience: {
        src: "/images/programs/NAD06204.JPG",
        alt: "Draught bullocks with wooden yoke turning soil beds in agricultural plot",
        caption: "Soil mechanics, furrow preparation, and soil physics",
        badge: "Classes 9–10",
        objectPosition: "center 45%",
      },
      smartAgri: {
        src: "/images/hero/NAD06383.JPG",
        alt: "Senior students mapping tall sugarcane crop density and micro-irrigation lines",
        caption: "Crop canopy density, row spacing, and irrigation mechanics",
        badge: "Crop Analytics",
        objectPosition: "center 35%",
      },
      farmEconomics: {
        src: "/images/modules/NAD06157.JPG",
        alt: "Students riding farm trailer reviewing logistics and agrarian transit",
        caption: "Farm logistics, transit workflows, and sustainable enterprise",
        badge: "Agrarian Logistics",
        objectPosition: "center 40%",
      },
    },
  },
  partnerships: {
    heroBg: {
      src: "/images/programs/NAD06199.JPG",
      alt: "Panoramic view of partner organic farmland during student exploration ride",
      objectPosition: "center 35%",
    },
    schools: {
      src: "/images/programs/NAD06270.JPG",
      alt: "Students and mentor giving thumbs-up on steps in FURAA uniforms",
      caption: "Turnkey curriculum integration and supervised farm days for school cohorts",
      badge: "School Partners",
      objectPosition: "center 25%",
    },
    neraluFarms1: {
      src: "/images/hero/NAD06335.JPG",
      alt: "Traditional ploughing and active growing plots at Neralu Farms",
      caption: "Hands-on cultivation plots at Neralu Farms",
      badge: "Plot View",
      objectPosition: "center 45%",
    },
    neraluFarms2: {
      src: "/images/modules/NAD06650.JPG",
      alt: "Students transplanting paddy in diverse agricultural wetlands at Neralu Farms",
      caption: "Diverse agrarian learning environment and wetland zones",
      badge: "Activity Zone",
      objectPosition: "center 45%",
    },
    gkvk: {
      src: "",
      alt: "Gandhi Krishi Vigyana Kendra (GKVK) campus and agricultural research plots",
      caption: "Scientific curriculum grounding and institutional guidance (Proposed)",
      badge: "Institutional Guidance",
    },
    corporate: {
      src: "/images/summer-camps/NAD06445.JPG",
      alt: "Participants enjoying outdoor farm activities and nature connection",
      caption: "Corporate sustainability and nature-connected team engagement at our partner farm",
      badge: "Corporate Engagement",
      objectPosition: "center 30%",
    },
  },
  programs: {
    heroBg: {
      src: "/images/programs/NAD06204.JPG",
      alt: "Traditional draught bullocks with wooden yoke in lush agrarian setting",
      objectPosition: "center 45%",
    },
    highlight1: {
      src: "/images/programs/NAD06235.JPG",
      alt: "Students learning hands-on plough furrowing with draught cattle",
      caption: "Traditional ploughing and soil preparation experience",
      badge: "Organic Farming",
      objectPosition: "center 45%",
    },
    highlight2: {
      src: "/images/programs/NAD06400.JPG",
      alt: "Students tasting sweet fresh sugarcane stalks harvested directly in field",
      caption: "Farm-to-plate nutrition and food origin awareness",
      badge: "Healthy Food",
      objectPosition: "center 40%",
    },
  },
  safety: {
    heroBg: {
      src: "/images/safety/NAD06530.JPG",
      alt: "Mentor guiding FURAA students through shallow farm irrigation stream with direct supervision",
      objectPosition: "center 35%",
    },
    supervision: {
      src: "/images/safety/NAD06530.JPG",
      alt: "Adult mentor maintaining direct 1:1 supervision in safe farm water canal",
      caption: "Designated child-safe activity zones and strict mentor supervision ratios",
      badge: "Supervised Zones",
      objectPosition: "center 35%",
    },
    transport: {
      src: "/images/modules/NAD06157.JPG",
      alt: "Monitored student transit with accompanying FURAA mentors",
      caption: "Turnkey gate-to-gate transport oversight and supervised transit",
      badge: "Safe Transit",
      objectPosition: "center 40%",
    },
    costume: {
      src: "/images/summer-camps/NAD06224.JPG",
      alt: "Students in official white FURAA caps and polo shirts",
      caption: "Mandatory FURAA attire creating farm identity and clear visual zone boundaries",
      badge: "Farm Costume",
      objectPosition: "center 35%",
    },
  },
  nutrition: {
    heroBg: {
      src: "/images/programs/NAD06400.JPG",
      alt: "Students tasting fresh sugarcane stalks harvested directly in farm",
      objectPosition: "center 40%",
    },
    farmToPlate: {
      src: "/images/programs/NAD06400.JPG",
      alt: "Fresh sugarcane harvest and natural food awareness session",
      caption: "Farm-to-plate nutritional education: connecting children with where their food originates",
      badge: "Conscious Food",
      objectPosition: "center 40%",
    },
  },
  summerCamps: {
    heroBg: {
      src: "/images/summer-camps/NAD06445.JPG",
      alt: "Children smiling and cheering in a row holding sugarcane stalks in farmland",
      objectPosition: "center 30%",
    },
    running: {
      src: "/images/summer-camps/NAD06495.JPG",
      alt: "Children running through farm meadow with arms outstretched like airplanes",
      caption: "Outdoor group challenges, rural games, and joyful nature immersion",
      badge: "Outdoor Play",
      objectPosition: "center 40%",
    },
    jumping: {
      src: "/images/hero/NAD06309.JPG",
      alt: "FURAA children jumping in red soil bed",
      caption: "Joyful farm discovery without screen distractions",
      badge: "Active Camp",
      objectPosition: "center 40%",
    },
    bullocks: {
      src: "/images/summer-camps/NAD06221.JPG",
      alt: "Pair of indigenous draught bullocks harnessed with wooden yoke",
      caption: "Gentle farm animal interaction and rural biodiversity",
      badge: "Farm Fauna",
      objectPosition: "center 45%",
    },
  },
};

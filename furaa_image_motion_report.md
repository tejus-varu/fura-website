# FURAA Website — Real Image Integration & Premium Motion Polish Report

**Project Path:** `E:\Agro_School_Project\prana-website`  
**Git Branch:** `feature/fura-modules-partnerships`  
**Deployment Target:** Cloudflare Pages (Static Export `output: "export"`)  
**Brand:** FURAA (Future Ready Agriculture Academy)  

---

## 1. Executive Summary

This phase successfully integrated **all 19 high-resolution real photographs** captured at the FURAA partner farm across the website. The integration completely replaces static placeholder boxes with authentic photography showing actual students engaged in hands-on organic farming, traditional draught bullock ploughing, paddy transplantation, sugarcane harvesting, and supervised agrarian inquiry.

In addition, an **accessible, interactive Hero Slideshow**, **full-resolution Lightbox modal**, **curved motion & scroll animations**, and **prefers-reduced-motion accessibility compliance** were implemented and verified with zero ESLint errors and clean Next.js static export.

---

## 2. Image Optimization & Cloudflare Pages Limit Resolution

### 2.1 The 25 MiB Single-Asset Constraint
Cloudflare Pages imposes a strict limit: **no individual file may exceed 25 MiB**. The original camera-RAW JPEGs in the photoshoot measured **18 MiB to 28 MiB each** (totaling ~450 MiB), which would have triggered immediate build and deployment rejections.

### 2.2 Preservation & Web Optimization
1. **Safety Backup:** All 19 uncompressed original RAW files were backed up to `original_photos/`.
2. **Sharp High-Fidelity Processing:** Progressive web JPEGs were rendered at 1920px max resolution with 86% quality and EXIF orientation preservation (`.rotate()`).
3. **Optimized Asset Size:** The images in `public/images/` now average **180 KB – 636 KB each** (7.5 MB total for all 19 assets), delivering instant load times, sharp display on 4K/Retina displays, and 100% compliance with Cloudflare Pages constraints.

---

## 3. Comprehensive Image Mapping & Placement Directory

| Section / Page | Image Filename | Description / Learning Activity | Badge / Category |
| :--- | :--- | :--- | :--- |
| **Homepage Hero (Slide 1)** | `hero/NAD06309.JPG` | 7 FURAA students jumping joyfully on red soil farm bed | Joyful Discovery |
| **Homepage Hero (Slide 2)** | `hero/NAD06335.JPG` | Farmer guiding draught ox plough with students observing | Traditional Agronomy |
| **Homepage Hero (Slide 3)** | `hero/NAD06383.JPG` | Students hiking single-file through tall sugarcane canopy | Agro-Ecology Trail |
| **About Hero Background** | `programs/NAD06199.JPG` | Students & mentor on tractor exploration ride | Farm Exploration |
| **About: Cohort Story** | `programs/NAD06270.JPG` | Student cohort and educator giving thumbs-up gestures | Our Cohort |
| **About: Mentors & Educators** | `modules/NAD06129.JPG` | Mentor demonstrating sunflower anatomy to students | Educators & Mentors |
| **Foundation Hero Background** | `modules/NAD06124.JPG` | Young student exploring bright blooming sunflowers | Early Years |
| **Foundation: Sowing** | `modules/NAD06296.JPG` | Student crouching in red soil holding seeds to sow | Classes 1–4 Sowing |
| **Foundation: Nature Art** | `modules/NAD06124.JPG` | Sensory discovery of sunflower petal botany | Sensory Wonders |
| **Foundation: Rural Connection** | `summer-camps/NAD06224.JPG` | Children walking together from tilled farm field | Rural Connection |
| **Exploration Hero Background** | `modules/NAD06650.JPG` | Wide view: students transplanting paddy saplings in mud | Middle Years |
| **Exploration: Cultivation** | `modules/NAD06652.JPG` | Close-up: students planting rice saplings in paddy bed | Classes 5–8 |
| **Exploration: Agronomy** | `hero/NAD06335.JPG` | Safe handling of traditional plough & soil furrows | Soil Agronomy |
| **Exploration: Ecology** | `modules/NAD06129.JPG` | Botanical inquiry, pollinator beds, plant biology | Agro-Ecology |
| **Specialization Hero Background** | `hero/NAD06335.JPG` | Senior students observing traditional agronomy | Secondary Years |
| **Specialization: Soil Science** | `programs/NAD06204.JPG` | Draught bullocks with wooden yoke turning soil | Classes 9–10 |
| **Specialization: Smart Agri** | `hero/NAD06383.JPG` | Students mapping crop density and irrigation lines | Crop Analytics |
| **Specialization: Logistics** | `modules/NAD06157.JPG` | Students in trailer reviewing agrarian transit | Agrarian Logistics |
| **Partnership Hero Background** | `programs/NAD06199.JPG` | Panoramic partner farm view during exploration ride | Ecosystem |
| **Partnership: Schools** | `programs/NAD06270.JPG` | Students and mentor giving thumbs-up on steps | School Partners |
| **Partnership: Neralu Farms (1)** | `hero/NAD06335.JPG` | Traditional ploughing & active cultivation plots | Plot View |
| **Partnership: Neralu Farms (2)** | `modules/NAD06650.JPG` | Wetland paddy transplanting activity zone | Activity Zone |
| **Partnership: Corporates** | `summer-camps/NAD06445.JPG` | Participants holding sugarcane stalks in farmland | Corporate Engagement |
| **Programs Hero Background** | `programs/NAD06204.JPG` | Indigenous draught bullocks in lush agrarian setting | Draught Power |
| **Programs Highlight 1** | `programs/NAD06235.JPG` | Students learning plough furrowing with cattle | Organic Farming |
| **Programs Highlight 2** | `programs/NAD06400.JPG` | Students tasting sweet sugarcane in the field | Healthy Food |
| **Safety Hero Background** | `safety/NAD06530.JPG` | Mentor guiding students through shallow farm stream | Direct Supervision |
| **Safety: Supervision** | `safety/NAD06530.JPG` | 1:1 adult mentor supervision in child-safe zone | Supervised Zones |
| **Safety: Transport** | `modules/NAD06157.JPG` | Monitored student transit with academy mentors | Safe Transit |
| **Safety: Costume** | `summer-camps/NAD06224.JPG` | Official white FURAA caps & uniforms creating boundary | Farm Costume |
| **Nutrition Hero Background** | `programs/NAD06400.JPG` | Students tasting raw sugarcane harvested in field | Food Origin |
| **Nutrition: Farm-to-Plate** | `programs/NAD06400.JPG` | Fresh crop harvest & conscious eating awareness | Conscious Food |
| **Summer Camps Hero Background** | `summer-camps/NAD06445.JPG` | Children cheering in a row holding sugarcane stalks | Camp Spirit |
| **Summer Camps: Outdoor Play** | `summer-camps/NAD06495.JPG` | Children running through meadow with arms like airplanes | Outdoor Play |
| **Summer Camps: Active Discovery** | `hero/NAD06309.JPG` | Joyful farm discovery on red soil | Active Camp |
| **Summer Camps: Farm Fauna** | `summer-camps/NAD06221.JPG` | Indigenous draught bullocks with wooden yoke | Farm Fauna |

---

## 4. Key Component & UX Enhancements

### 4.1 Interactive Homepage HeroSlideshow (`HeroSlideshow.tsx`)
- **Auto-Play & Duration:** Automatically advances slides every 5.5 seconds.
- **Dynamic Ambient Crossfade:** The entire hero background subtly crossfades with the active slide behind a dark gradient overlay (maintaining WCAG AAA 7:1 text contrast).
- **Smooth Ken Burns Zoom:** Active slides gently pan/zoom over 6 seconds for a cinematic feel.
- **User Play/Pause Toggle:** Floating button lets visitors pause rotation; pauses automatically on hover.
- **Accessible Indicators:** Interactive dot buttons and Prev/Next arrows with keyboard control (Left, Right, Space, K).
- **Screen Reader Announcements:** `aria-live="polite"` announces slide number, title, and caption.
- **Battery & Tab Optimization:**
  - `IntersectionObserver`: Pauses rotation when the slideshow scrolls out of view.
  - `visibilitychange`: Pauses when the browser tab is hidden.
  - `useSyncExternalStore`: Subscribes to `(prefers-reduced-motion: reduce)` without cascading effect re-renders.

### 4.2 Universal Accessible Lightbox (`ImagePlaceholder.tsx`)
- **Built-in Modal Zoom:** Any real photograph across the website can be clicked to open a distraction-free, fullscreen Lightbox modal.
- **Hover Micro-Indicator:** A subtle zoom pill appears on hover, inviting user exploration.
- **Accessibility & Focus Trap:**
  - `role="dialog"` and `aria-modal="true"`.
  - Pressing `Escape` or clicking the backdrop instantly dismisses the lightbox.
  - Body scrolling is locked while the modal is open and smoothly restored on close.
  - Focus returns to the trigger button upon dismissal.

### 4.3 PageHero Dynamic Backgrounds (`PageHero.tsx`)
- Updated with `bgImage` and `bgPosition` props.
- Employs a 135-degree rich agrarian gradient overlay (`rgba(10,24,13,0.88)` to `rgba(10,24,13,0.94)`) over the real photography, ensuring crisp typography and readable breadcrumbs.

---

## 5. Subtle Motion & Performance Polish

1. **Curved Easing Animations:**
   - `.animate-fade-up`: Smooth 0.5s slide-up with `cubic-bezier(0.16, 1, 0.3, 1)`.
   - `.animate-scale-in`: 0.35s scale-in for modals and cards.
   - Stagger classes (`.stagger-1` through `.stagger-4`) for sequential card entrances.
2. **Reduced Motion Safety:**
   - Enforced in `src/app/globals.css`:
   ```css
   @media (prefers-reduced-motion: reduce) {
     *, *::before, *::after {
       animation-duration: 0.01ms !important;
       animation-iteration-count: 1 !important;
       transition-duration: 0.01ms !important;
       scroll-behavior: auto !important;
     }
   }
   ```
   - Automatically halts slideshow pan/zoom and timer transitions for users with vestibular sensitivities.

---

## 6. Verification & Quality Assurance

| Test | Tool / Command | Result | Details |
| :--- | :--- | :--- | :--- |
| **Linting** | `npm run lint` | **PASSED** (0 errors, 0 warnings) | ESLint clean across all components |
| **Type Check** | `tsc --noEmit` (via build) | **PASSED** (19.5s) | Full TypeScript strict typing |
| **Static Export** | `npm run build` | **PASSED** (42s) | All 15 routes pre-rendered to `out/` |
| **Asset Limit Check** | File size inspection | **PASSED** | Maximum single asset is 636 KB (< 25 MiB limit) |
| **Screenshot Audit** | Puppeteer script | **PASSED** | 18 full-page screenshots verified across 1440px, 768px, and 375px |

---

## 7. Status & Git Safety Confirmation
- **Local Working Branch:** `feature/fura-modules-partnerships`
- **Remote Push:** **NOT pushed** (kept local in accordance with instructions)
- **Production Merge:** **NOT merged** to `main`
- **Cloudflare Deployment:** Ready for automatic build upon approved pull request merge.

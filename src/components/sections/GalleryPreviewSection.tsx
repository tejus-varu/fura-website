import Link from "next/link";
import { ArrowRight, Camera } from "lucide-react";
import Button from "@/components/ui/Button";

interface PreviewPhoto {
  src: string;
  alt: string;
  caption: string;
  badge: string;
  category: string;
}

const previewPhotos: PreviewPhoto[] = [
  {
    src: "/images/hero/NAD06309.JPG",
    alt: "FURAA students jumping joyfully into red agricultural soil beds",
    caption: "Joyful tactile discovery on rich organic soil",
    badge: "Hands-on Soil",
    category: "Farming Activities",
  },
  {
    src: "/images/hero/NAD06335.JPG",
    alt: "Farmer and students with traditional wooden ox plough",
    caption: "Traditional soil preparation and draught animal stewardship",
    badge: "Agrarian Heritage",
    category: "Rural Experiences",
  },
  {
    src: "/images/modules/NAD06650.JPG",
    alt: "Students actively transplanting paddy saplings in wet field with farm mentors",
    caption: "Barefoot paddy puddling and wetland rice sapling transplantation",
    badge: "Wetland Ecology",
    category: "Farming Activities",
  },
  {
    src: "/images/hero/NAD06383.JPG",
    alt: "Students walking under tall green sugarcane canopy",
    caption: "Curriculum-linked nature corridors and micro-climate observation",
    badge: "Agro-Forestry",
    category: "Nature Trails",
  },
  {
    src: "/images/modules/NAD06124.JPG",
    alt: "Young student discovering blooming sunflower anatomy",
    caption: "Botanical inquiry, pollinator beds, and floral discovery",
    badge: "Biodiversity",
    category: "Ecology",
  },
  {
    src: "/images/programs/NAD06400.JPG",
    alt: "Students tasting fresh sugarcane stalks harvested directly in field",
    caption: "Farm-to-plate nutrition awareness and natural crop tasting",
    badge: "Fresh Harvest",
    category: "Harvesting",
  },
];

export default function GalleryPreviewSection() {
  return (
    <section
      id="gallery-preview"
      className="section-pad bg-white border-t border-b border-gray-100"
      aria-label="Campus and Learning Gallery Preview"
    >
      <div className="container-xl">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <span className="badge-pill inline-flex items-center gap-1.5 mb-3 bg-amber-50 text-amber-900 border-amber-200">
              <Camera size={14} className="text-amber-700" />
              <span>Campus and Field Moments</span>
            </span>
            <h2 className="text-h2 text-[var(--color-green-950)]">
              Where Learning Comes Alive in Nature
            </h2>
            <p className="text-sm sm:text-base text-[var(--color-green-800)]/80 mt-2 max-w-2xl">
              Authentic snapshots from our partner farm centers capturing hands-on cultivation, living crop trails, and joyful student discovery.
            </p>
          </div>

          <Link
            href="/gallery"
            className="inline-flex items-center gap-2 text-sm font-bold text-emerald-800 hover:text-emerald-950 transition-colors group shrink-0"
          >
            <span>Explore Full Gallery ({previewPhotos.length * 3}+ Photos)</span>
            <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

        {/* 6-Photo Compact Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {previewPhotos.map((photo, idx) => (
            <Link
              key={idx}
              href="/gallery"
              className="group card-base bg-white border border-gray-100 rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col"
            >
              <div className="relative aspect-[4/3] w-full overflow-hidden bg-gray-900">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={photo.src}
                  alt={photo.alt}
                  loading="lazy"
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute top-3 left-3">
                  <span className="px-2.5 py-0.5 rounded-full text-[11px] font-semibold bg-black/60 text-white backdrop-blur-sm">
                    {photo.badge}
                  </span>
                </div>
              </div>

              <div className="p-4 flex flex-col justify-between flex-1">
                <div>
                  <span className="text-[10px] font-bold uppercase tracking-wider text-[var(--color-gold-600)] block mb-1">
                    {photo.category}
                  </span>
                  <p className="text-xs text-[var(--color-green-900)] font-medium leading-relaxed group-hover:text-emerald-700 transition-colors">
                    {photo.caption}
                  </p>
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* Bottom CTA Bar */}
        <div className="mt-12 text-center">
          <Button href="/gallery" variant="primary" size="md">
            View All Photos in Public Gallery
          </Button>
        </div>
      </div>
    </section>
  );
}

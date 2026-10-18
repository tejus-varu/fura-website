"use client";

import { useState, useEffect, useCallback } from "react";
import {
  Grid3X3,
  Layers,
  ChevronLeft,
  ChevronRight,
  X,
  MapPin,
  ShieldCheck,
} from "lucide-react";
import {
  galleryCategoryList,
  galleryEvents,
  allGalleryPhotos,
  GalleryCategory,
} from "@/config/gallery";
import Button from "@/components/ui/Button";

export default function GalleryView() {
  const [selectedCategory, setSelectedCategory] = useState<GalleryCategory>("All");
  const [viewMode, setViewMode] = useState<"photos" | "albums">("photos");
  const [activePhotoIndex, setActivePhotoIndex] = useState<number | null>(null);

  // Filtered photos
  const filteredPhotos =
    selectedCategory === "All"
      ? allGalleryPhotos
      : allGalleryPhotos.filter((p) => p.category === selectedCategory);

  // Filtered events
  const filteredEvents =
    selectedCategory === "All"
      ? galleryEvents
      : galleryEvents.filter((e) => e.category === selectedCategory);

  // Lightbox navigation
  const openLightbox = (index: number) => {
    setActivePhotoIndex(index);
  };

  const closeLightbox = useCallback(() => {
    setActivePhotoIndex(null);
  }, []);

  const showNextPhoto = useCallback(() => {
    if (activePhotoIndex === null) return;
    setActivePhotoIndex((prev) =>
      prev !== null ? (prev + 1) % filteredPhotos.length : 0
    );
  }, [activePhotoIndex, filteredPhotos.length]);

  const showPrevPhoto = useCallback(() => {
    if (activePhotoIndex === null) return;
    setActivePhotoIndex((prev) =>
      prev !== null ? (prev - 1 + filteredPhotos.length) % filteredPhotos.length : 0
    );
  }, [activePhotoIndex, filteredPhotos.length]);

  // Keyboard navigation for lightbox
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (activePhotoIndex === null) return;
      if (e.key === "Escape") closeLightbox();
      if (e.key === "ArrowRight") showNextPhoto();
      if (e.key === "ArrowLeft") showPrevPhoto();
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [activePhotoIndex, closeLightbox, showNextPhoto, showPrevPhoto]);

  // Active photo for lightbox
  const activePhoto =
    activePhotoIndex !== null ? filteredPhotos[activePhotoIndex] : null;

  return (
    <div>
      {/* Filter and View Controls Bar */}
      <div className="bg-white border-b border-gray-100 py-6 sticky top-20 z-20 backdrop-blur-md bg-white/95">
        <div className="container-xl flex flex-col md:flex-row md:items-center justify-between gap-4">
          {/* Category Filter Pills */}
          <div className="flex items-center gap-2 overflow-x-auto pb-2 md:pb-0 no-scrollbar">
            <button
              type="button"
              onClick={() => {
                setSelectedCategory("All");
                setActivePhotoIndex(null);
              }}
              className={`px-4 py-2 rounded-full text-xs font-semibold whitespace-nowrap transition-all ${
                selectedCategory === "All"
                  ? "bg-[var(--color-green-800)] text-white shadow-sm"
                  : "bg-gray-100 text-gray-700 hover:bg-gray-200"
              }`}
            >
              All Moments ({allGalleryPhotos.length})
            </button>

            {galleryCategoryList.map((cat) => {
              const count = allGalleryPhotos.filter((p) => p.category === cat).length;
              const isSelected = selectedCategory === cat;
              return (
                <button
                  key={cat}
                  type="button"
                  onClick={() => {
                    setSelectedCategory(cat);
                    setActivePhotoIndex(null);
                  }}
                  className={`px-4 py-2 rounded-full text-xs font-semibold whitespace-nowrap transition-all flex items-center gap-1.5 ${
                    isSelected
                      ? "bg-[var(--color-green-800)] text-white shadow-sm"
                      : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                  }`}
                >
                  <span>{cat}</span>
                  <span
                    className={`text-[10px] px-1.5 py-0.2 rounded-full ${
                      isSelected ? "bg-white/20 text-white" : "bg-gray-200 text-gray-600"
                    }`}
                  >
                    {count}
                  </span>
                </button>
              );
            })}
          </div>

          {/* View Mode Toggle: Photos vs Albums */}
          <div className="flex items-center gap-1 bg-gray-100 p-1 rounded-xl shrink-0 self-start md:self-auto">
            <button
              type="button"
              onClick={() => setViewMode("photos")}
              className={`px-3 py-1.5 rounded-lg text-xs font-medium flex items-center gap-1.5 transition-all ${
                viewMode === "photos"
                  ? "bg-white text-[var(--color-green-900)] shadow-sm font-semibold"
                  : "text-gray-600 hover:text-gray-900"
              }`}
              title="Grid of photos"
            >
              <Grid3X3 size={14} />
              <span>Photos ({filteredPhotos.length})</span>
            </button>
            <button
              type="button"
              onClick={() => setViewMode("albums")}
              className={`px-3 py-1.5 rounded-lg text-xs font-medium flex items-center gap-1.5 transition-all ${
                viewMode === "albums"
                  ? "bg-white text-[var(--color-green-900)] shadow-sm font-semibold"
                  : "text-gray-600 hover:text-gray-900"
              }`}
              title="Grouped by event albums"
            >
              <Layers size={14} />
              <span>Albums ({filteredEvents.length})</span>
            </button>
          </div>
        </div>
      </div>

      {/* Main Content Area */}
      <div className="container-xl py-12">
        {/* PHOTOS VIEW */}
        {viewMode === "photos" && (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredPhotos.map((photo, index) => (
              <div
                key={photo.id}
                onClick={() => openLightbox(index)}
                className="group card-base bg-white border border-gray-100 rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 cursor-pointer flex flex-col"
              >
                {/* Photo container */}
                <div className="relative aspect-[4/3] w-full overflow-hidden bg-[var(--color-green-900)]">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={photo.src}
                    alt={photo.alt}
                    loading="lazy"
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  {/* Category Badge overlay */}
                  <div className="absolute top-3 left-3">
                    <span className="px-2.5 py-1 rounded-full text-[11px] font-semibold bg-black/60 text-white backdrop-blur-sm">
                      {photo.badge || photo.category}
                    </span>
                  </div>
                  {/* Subtle educational copyright watermark overlay */}
                  <div className="absolute bottom-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity">
                    <span className="text-[10px] text-white/80 bg-black/50 px-2 py-0.5 rounded backdrop-blur-sm">
                      FURAA Education
                    </span>
                  </div>
                </div>

                {/* Caption & Location info */}
                <div className="p-5 flex flex-col justify-between flex-1">
                  <div>
                    <span className="text-[11px] font-bold uppercase tracking-wider text-[var(--color-gold-600)] block mb-1">
                      {photo.category}
                    </span>
                    <h3 className="font-display text-base font-bold text-[var(--color-green-900)] group-hover:text-emerald-700 transition-colors mb-2">
                      {photo.eventTitle || photo.caption}
                    </h3>
                    <p className="text-xs text-[var(--color-green-700)] leading-relaxed">
                      {photo.caption}
                    </p>
                  </div>

                  {photo.location && (
                    <div className="mt-4 pt-3 border-t border-gray-100 flex items-center justify-between text-[11px] text-gray-500">
                      <span className="flex items-center gap-1">
                        <MapPin size={12} className="text-emerald-600" />
                        {photo.location}
                      </span>
                      <span className="text-emerald-700 font-semibold group-hover:underline">
                        View Photo →
                      </span>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        )}

        {/* ALBUMS VIEW */}
        {viewMode === "albums" && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {filteredEvents.map((event) => (
              <div
                key={event.id}
                className="card-base bg-white border border-emerald-900/10 rounded-3xl overflow-hidden shadow-sm flex flex-col"
              >
                {/* Event Cover Photo */}
                <div className="relative aspect-[16/9] w-full overflow-hidden bg-gray-900">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={event.coverImage}
                    alt={event.title}
                    loading="lazy"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute top-4 left-4 flex gap-2">
                    <span className="px-3 py-1 rounded-full text-xs font-semibold bg-black/60 text-white backdrop-blur-sm">
                      {event.category}
                    </span>
                    <span className="px-2.5 py-1 rounded-full text-xs font-semibold bg-emerald-600 text-white">
                      {event.photos.length} Photo{event.photos.length > 1 ? "s" : ""}
                    </span>
                  </div>
                </div>

                {/* Event Details */}
                <div className="p-6 sm:p-8 flex flex-col justify-between flex-1">
                  <div>
                    <div className="flex items-center gap-2 text-xs text-gray-500 mb-2">
                      {event.location && (
                        <span className="flex items-center gap-1 text-[var(--color-green-700)]">
                          <MapPin size={13} className="text-emerald-600" />
                          {event.location}
                        </span>
                      )}
                    </div>
                    <h3 className="font-display text-xl font-bold text-[var(--color-green-900)] mb-2">
                      {event.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-[var(--color-green-800)] leading-relaxed mb-6">
                      {event.description}
                    </p>
                  </div>

                  {/* Thumbnail Row */}
                  <div className="pt-4 border-t border-gray-100">
                    <span className="text-[11px] font-bold uppercase tracking-wider text-[var(--color-gold-600)] block mb-3">
                      Event Photographs:
                    </span>
                    <div className="grid grid-cols-4 gap-2">
                      {event.photos.map((photo) => {
                        const globalIndex = allGalleryPhotos.findIndex(
                          (p) => p.id === photo.id
                        );
                        return (
                          <div
                            key={photo.id}
                            onClick={() => {
                              setSelectedCategory("All");
                              openLightbox(globalIndex >= 0 ? globalIndex : 0);
                            }}
                            className="aspect-[4/3] rounded-lg overflow-hidden bg-gray-100 cursor-pointer relative group border border-gray-200 hover:border-emerald-500 transition-colors"
                          >
                            {/* eslint-disable-next-line @next/next/no-img-element */}
                            <img
                              src={photo.src}
                              alt={photo.alt}
                              loading="lazy"
                              className="w-full h-full object-cover group-hover:scale-105 transition-transform"
                            />
                          </div>
                        );
                      })}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Educational Copyright and Parental Consent Statement */}
        <div className="mt-16 p-6 sm:p-8 rounded-3xl bg-[var(--color-cream)] border border-emerald-900/10 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div className="flex items-start gap-4">
            <div className="w-10 h-10 rounded-2xl bg-white text-emerald-800 flex items-center justify-center shrink-0 border border-gray-200 mt-1">
              <ShieldCheck size={20} />
            </div>
            <div>
              <h4 className="font-display text-base font-bold text-[var(--color-green-900)]">
                Educational Publication and Media Consent Notice
              </h4>
              <p className="text-xs text-[var(--color-green-700)] leading-relaxed mt-1 max-w-3xl">
                All photographs in this gallery are taken during supervised FURAA educational modules, farm day visits, and seasonal camps in accordance with school partnership protocols and parental media permissions. Photographs are optimized for web educational documentation. Unapproved commercial redistribution or unauthorized external duplication is strictly prohibited.
              </p>
            </div>
          </div>
          <Button
            href="/contact?subject=Gallery%20and%20Media%20Inquiry"
            variant="outline"
            size="sm"
            className="shrink-0"
          >
            Media Inquiries
          </Button>
        </div>
      </div>

      {/* Accessible Photo Lightbox Modal */}
      {activePhoto && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label={activePhoto.caption || activePhoto.alt}
          className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex flex-col justify-between animate-fadeIn"
          onClick={closeLightbox}
        >
          {/* Top Bar with counter & close */}
          <div
            className="p-4 sm:p-6 flex items-center justify-between text-white border-b border-white/10"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center gap-3">
              <span className="text-xs px-2.5 py-1 rounded-full bg-white/10 font-medium">
                Photo {(activePhotoIndex ?? 0) + 1} of {filteredPhotos.length}
              </span>
              <span className="text-xs text-white/70 hidden sm:inline">
                {activePhoto.category}
              </span>
            </div>

            <button
              type="button"
              onClick={closeLightbox}
              className="w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-colors focus:outline-none focus:ring-2 focus:ring-white"
              aria-label="Close photo viewer (Escape)"
            >
              <X size={20} />
            </button>
          </div>

          {/* Central Image and Prev/Next Navigation */}
          <div
            className="relative flex-1 flex items-center justify-center p-4 sm:p-8"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Prev Button */}
            <button
              type="button"
              onClick={showPrevPhoto}
              className="absolute left-4 sm:left-8 z-10 w-12 h-12 rounded-full bg-black/50 hover:bg-black/80 text-white flex items-center justify-center transition-all border border-white/20 focus:outline-none focus:ring-2 focus:ring-white"
              aria-label="Previous photo (Left arrow key)"
            >
              <ChevronLeft size={24} />
            </button>

            {/* Displayed Image */}
            <div className="relative max-w-5xl max-h-[70vh] w-full h-full flex items-center justify-center">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={activePhoto.src}
                alt={activePhoto.alt}
                className="max-w-full max-h-[70vh] object-contain rounded-xl shadow-2xl select-none"
              />
            </div>

            {/* Next Button */}
            <button
              type="button"
              onClick={showNextPhoto}
              className="absolute right-4 sm:right-8 z-10 w-12 h-12 rounded-full bg-black/50 hover:bg-black/80 text-white flex items-center justify-center transition-all border border-white/20 focus:outline-none focus:ring-2 focus:ring-white"
              aria-label="Next photo (Right arrow key)"
            >
              <ChevronRight size={24} />
            </button>
          </div>

          {/* Bottom Caption and Educational Watermark Bar */}
          <div
            className="p-4 sm:p-6 bg-black/80 text-white border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-3 text-center sm:text-left"
            onClick={(e) => e.stopPropagation()}
          >
            <div>
              <p className="text-sm font-semibold">{activePhoto.caption}</p>
              {activePhoto.location && (
                <p className="text-xs text-white/60 mt-0.5 flex items-center justify-center sm:justify-start gap-1">
                  <MapPin size={12} className="text-emerald-400" />
                  {activePhoto.location}
                </p>
              )}
            </div>

            <div className="text-[11px] text-white/50 shrink-0">
              © FURAA Education Network · Authorized Educational Photography
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

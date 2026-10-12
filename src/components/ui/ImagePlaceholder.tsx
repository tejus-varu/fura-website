"use client";

import { useState, useEffect, useCallback, useRef } from "react";
import { Image as ImageIcon, ZoomIn, X } from "lucide-react";

interface ImagePlaceholderProps {
  src?: string;
  alt: string;
  caption?: string;
  aspectRatio?: "16/9" | "4/3" | "1/1" | "3/2";
  badge?: string;
  className?: string;
  loading?: "lazy" | "eager";
  objectPosition?: string;
  enableLightbox?: boolean;
}

export default function ImagePlaceholder({
  src,
  alt,
  caption,
  aspectRatio = "16/9",
  badge,
  className = "",
  loading = "lazy",
  objectPosition = "center",
  enableLightbox = true,
}: ImagePlaceholderProps) {
  const [hasError, setHasError] = useState(false);
  const [isLightboxOpen, setIsLightboxOpen] = useState(false);
  const triggerRef = useRef<HTMLButtonElement | null>(null);
  const closeBtnRef = useRef<HTMLButtonElement | null>(null);

  const showImage = Boolean(src && src.trim() !== "" && !hasError);

  const aspectClass = {
    "16/9": "aspect-video",
    "4/3": "aspect-[4/3]",
    "1/1": "aspect-square",
    "3/2": "aspect-[3/2]",
  }[aspectRatio];

  const closeLightbox = useCallback(() => {
    setIsLightboxOpen(false);
    triggerRef.current?.focus();
  }, []);

  // Keyboard and scroll lock for lightbox
  useEffect(() => {
    if (!isLightboxOpen) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        closeLightbox();
      }
    };

    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", handleKeyDown);

    // Focus close button on open
    setTimeout(() => {
      closeBtnRef.current?.focus();
    }, 50);

    return () => {
      document.body.style.overflow = originalOverflow;
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isLightboxOpen, closeLightbox]);

  return (
    <>
      <figure className={`flex flex-col gap-2 ${className}`}>
        <div
          className={`relative w-full ${aspectClass} rounded-2xl overflow-hidden border border-emerald-900/10 shadow-sm flex flex-col items-center justify-center text-center transition-all duration-200 group ${
            showImage && enableLightbox ? "cursor-zoom-in" : ""
          }`}
          style={{
            background:
              "linear-gradient(135deg, var(--color-green-100) 0%, var(--color-earth) 50%, var(--color-cream) 100%)",
          }}
        >
          {showImage ? (
            <>
              {/* Image trigger */}
              <button
                ref={triggerRef}
                type="button"
                onClick={() => enableLightbox && setIsLightboxOpen(true)}
                disabled={!enableLightbox}
                className="absolute inset-0 w-full h-full p-0 border-0 bg-transparent text-left focus:outline-hidden focus:ring-2 focus:ring-emerald-500 focus:ring-inset"
                aria-label={`View full photo: ${alt}`}
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={src}
                  alt={alt}
                  loading={loading}
                  onError={() => setHasError(true)}
                  style={{ objectPosition }}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />

                {/* Subtle hover zoom pill */}
                {enableLightbox && (
                  <div className="absolute bottom-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity duration-200 bg-emerald-950/80 text-white p-2 rounded-full backdrop-blur-xs shadow-md">
                    <ZoomIn size={16} aria-hidden="true" />
                  </div>
                )}
              </button>

              {badge && (
                <span className="absolute top-3 left-3 text-[11px] font-semibold px-2.5 py-1 rounded-full bg-emerald-950/80 text-emerald-200 border border-emerald-500/30 backdrop-blur-xs shadow-xs pointer-events-none z-10">
                  {badge}
                </span>
              )}
            </>
          ) : (
            // Graceful placeholder with subtle pattern and accessible alt text
            <div className="p-6 flex flex-col items-center justify-center">
              <div
                className="absolute inset-0 opacity-[0.04]"
                style={{
                  backgroundImage:
                    "radial-gradient(circle, var(--color-green-900) 1px, transparent 1px)",
                  backgroundSize: "16px 16px",
                }}
              />
              {badge && (
                <span className="absolute top-3 right-3 text-[11px] font-semibold px-2.5 py-1 rounded-full bg-white/80 text-[var(--color-green-800)] border border-emerald-900/10 shadow-xs">
                  {badge}
                </span>
              )}
              <div className="w-12 h-12 rounded-2xl bg-white/70 border border-emerald-900/10 flex items-center justify-center mb-3 shadow-xs group-hover:scale-110 transition-transform duration-200">
                <ImageIcon
                  size={22}
                  style={{ color: "var(--color-green-700)" }}
                  aria-hidden="true"
                />
              </div>
              <p className="text-xs font-semibold text-[var(--color-green-900)] max-w-xs leading-snug">
                {alt}
              </p>
              <span className="text-[10px] text-[var(--color-green-600)] mt-1 opacity-70">
                Visual Documentation Slot
              </span>
            </div>
          )}
        </div>
        {caption && (
          <figcaption className="text-xs text-[var(--color-green-700)] italic px-1">
            {caption}
          </figcaption>
        )}
      </figure>

      {/* Accessible Fullscreen Lightbox Modal */}
      {isLightboxOpen && showImage && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label={alt}
          className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/90 backdrop-blur-md transition-opacity duration-200"
          onClick={closeLightbox}
        >
          {/* Close button */}
          <button
            ref={closeBtnRef}
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              closeLightbox();
            }}
            aria-label="Close full image preview"
            className="absolute top-4 right-4 z-60 p-2.5 rounded-full bg-white/10 text-white hover:bg-white/20 transition-colors focus:outline-hidden focus:ring-2 focus:ring-emerald-400"
          >
            <X size={24} />
          </button>

          {/* Modal Container */}
          <div
            className="relative max-w-5xl max-h-[90vh] flex flex-col items-center select-none"
            onClick={(e) => e.stopPropagation()}
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={src}
              alt={alt}
              className="max-h-[78vh] max-w-full rounded-2xl object-contain shadow-2xl"
              style={{ objectPosition }}
            />

            {/* Lightbox Information Bar */}
            <div className="w-full mt-3 px-3 flex flex-wrap items-center justify-between gap-2 text-white">
              <div className="flex flex-col gap-0.5">
                <p className="text-sm font-medium text-emerald-100">{alt}</p>
                {caption && (
                  <p className="text-xs text-emerald-300/80">{caption}</p>
                )}
              </div>
              {badge && (
                <span className="text-xs font-semibold px-3 py-1 rounded-full bg-emerald-900/60 text-emerald-200 border border-emerald-400/30">
                  {badge}
                </span>
              )}
            </div>
          </div>
        </div>
      )}
    </>
  );
}

"use client";

import { useState, useEffect, useRef, useCallback, useSyncExternalStore } from "react";
import { ChevronLeft, ChevronRight, Pause, Play } from "lucide-react";
import { HeroSlide } from "@/config/images";

function subscribeReducedMotion(callback: () => void) {
  if (typeof window === "undefined") return () => {};
  const media = window.matchMedia("(prefers-reduced-motion: reduce)");
  media.addEventListener("change", callback);
  return () => media.removeEventListener("change", callback);
}

function getReducedMotionSnapshot() {
  if (typeof window === "undefined") return false;
  return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
}

function getReducedMotionServerSnapshot() {
  return false;
}

interface HeroSlideshowProps {
  slides: HeroSlide[];
  intervalMs?: number;
  className?: string;
  onSlideChange?: (index: number) => void;
}

export default function HeroSlideshow({
  slides,
  intervalMs = 5500,
  className = "",
  onSlideChange,
}: HeroSlideshowProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);
  const [userPaused, setUserPaused] = useState(false);
  const [isTabVisible, setIsTabVisible] = useState(true);
  const [isInViewport, setIsInViewport] = useState(true);

  const prefersReducedMotion = useSyncExternalStore(
    subscribeReducedMotion,
    getReducedMotionSnapshot,
    getReducedMotionServerSnapshot
  );

  const containerRef = useRef<HTMLDivElement>(null);
  const timerRef = useRef<NodeJS.Timeout | null>(null);

  // Check page visibility (pause when browser tab is hidden)
  useEffect(() => {
    const handleVisibilityChange = () => {
      setIsTabVisible(document.visibilityState === "visible");
    };
    document.addEventListener("visibilitychange", handleVisibilityChange);
    return () => document.removeEventListener("visibilitychange", handleVisibilityChange);
  }, []);

  // Check IntersectionObserver (pause when slideshow is substantially outside viewport)
  useEffect(() => {
    const el = containerRef.current;
    if (!el || typeof IntersectionObserver === "undefined") return;

    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        setIsInViewport(entry.isIntersecting);
      },
      { threshold: 0.25 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  const goToNext = useCallback(() => {
    setCurrentIndex((prev) => {
      const next = (prev + 1) % slides.length;
      if (onSlideChange) onSlideChange(next);
      return next;
    });
  }, [slides.length, onSlideChange]);

  const goToPrev = useCallback(() => {
    setCurrentIndex((prev) => {
      const next = (prev - 1 + slides.length) % slides.length;
      if (onSlideChange) onSlideChange(next);
      return next;
    });
  }, [slides.length, onSlideChange]);

  const goToSlide = (idx: number) => {
    setCurrentIndex(idx);
    if (onSlideChange) onSlideChange(idx);
  };

  const togglePlay = () => {
    if (isPlaying && !userPaused) {
      setIsPlaying(false);
      setUserPaused(true);
    } else {
      setIsPlaying(true);
      setUserPaused(false);
    }
  };

  // Timer effect
  useEffect(() => {
    if (timerRef.current) {
      clearInterval(timerRef.current);
      timerRef.current = null;
    }

    const shouldRun =
      isPlaying &&
      !userPaused &&
      isTabVisible &&
      isInViewport &&
      !prefersReducedMotion &&
      slides.length > 1;

    if (shouldRun) {
      timerRef.current = setInterval(() => {
        goToNext();
      }, intervalMs);
    }

    return () => {
      if (timerRef.current) {
        clearInterval(timerRef.current);
        timerRef.current = null;
      }
    };
  }, [isPlaying, userPaused, isTabVisible, isInViewport, prefersReducedMotion, slides.length, intervalMs, goToNext]);

  // Keyboard navigation
  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "ArrowLeft") {
      e.preventDefault();
      goToPrev();
    } else if (e.key === "ArrowRight") {
      e.preventDefault();
      goToNext();
    } else if (e.key === " " || e.key === "k") {
      e.preventDefault();
      togglePlay();
    }
  };

  if (!slides || slides.length === 0) return null;

  return (
    <div
      ref={containerRef}
      className={`relative w-full rounded-3xl overflow-hidden shadow-hero select-none ${className}`}
      style={{ aspectRatio: "4/3", minHeight: "420px" }}
      role="region"
      aria-roledescription="carousel"
      aria-label="FURAA program highlights slideshow"
      tabIndex={0}
      onKeyDown={handleKeyDown}
      onMouseEnter={() => {
        if (!userPaused && isPlaying) {
          if (timerRef.current) clearInterval(timerRef.current);
        }
      }}
      onMouseLeave={() => {
        if (!userPaused && isPlaying && !prefersReducedMotion) {
          if (timerRef.current) clearInterval(timerRef.current);
          timerRef.current = setInterval(goToNext, intervalMs);
        }
      }}
    >
      {/* Screen reader live announcement */}
      <div className="sr-only" aria-live="polite">
        Slide {currentIndex + 1} of {slides.length}: {slides[currentIndex].title || slides[currentIndex].alt}
      </div>

      {/* Slides images layer */}
      {slides.map((slide, idx) => {
        const isActive = idx === currentIndex;
        return (
          <div
            key={slide.src + idx}
            className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
              isActive ? "opacity-100 z-10" : "opacity-0 z-0 pointer-events-none"
            }`}
            aria-hidden={!isActive}
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={slide.src}
              alt={slide.alt}
              loading={idx === 0 ? "eager" : "lazy"}
              style={{
                objectPosition: slide.objectPosition || "center",
              }}
              className={`w-full h-full object-cover transition-transform ${
                prefersReducedMotion
                  ? ""
                  : isActive
                  ? "duration-[6000ms] scale-105 ease-out"
                  : "scale-100 duration-1000"
              }`}
            />
            {/* Atmospheric gradient overlay at bottom of card */}
            <div
              className="absolute inset-0 pointer-events-none"
              style={{
                background:
                  "linear-gradient(180deg, rgba(0,0,0,0) 40%, rgba(10,24,13,0.4) 70%, rgba(10,24,13,0.85) 100%)",
              }}
            />

            {/* Slide badge */}
            <div className="absolute top-4 left-4 z-20 flex items-center gap-2">
              {slide.badge && (
                <span className="text-xs font-semibold px-3 py-1 rounded-full bg-emerald-950/75 text-emerald-200 border border-emerald-500/30 backdrop-blur-md shadow-xs">
                  {slide.badge}
                </span>
              )}
            </div>

            {/* Title & Caption */}
            <div className="absolute bottom-16 left-5 right-5 z-20 text-white pointer-events-none">
              {slide.title && (
                <p className="font-display text-base sm:text-lg font-bold leading-snug drop-shadow-md text-white">
                  {slide.title}
                </p>
              )}
              {slide.caption && (
                <p className="text-xs text-emerald-200/90 mt-1 drop-shadow-xs line-clamp-1">
                  {slide.caption}
                </p>
              )}
            </div>
          </div>
        );
      })}

      {/* Slide Navigation Controls */}
      {slides.length > 1 && (
        <div className="absolute bottom-4 left-5 right-5 z-30 flex items-center justify-between">
          {/* Indicators / Dots */}
          <div className="flex items-center gap-1.5" role="tablist" aria-label="Slides">
            {slides.map((_, i) => (
              <button
                key={i}
                type="button"
                onClick={() => goToSlide(i)}
                role="tab"
                aria-selected={i === currentIndex}
                aria-label={`Go to slide ${i + 1} of ${slides.length}`}
                className={`h-2 rounded-full transition-all duration-300 focus:outline-hidden focus:ring-2 focus:ring-emerald-400 ${
                  i === currentIndex
                    ? "w-7 bg-[var(--color-gold-400)] shadow-xs"
                    : "w-2 bg-white/50 hover:bg-white/80"
                }`}
              />
            ))}
          </div>

          {/* Action buttons (Prev, Play/Pause, Next) */}
          <div className="flex items-center gap-1.5">
            <button
              type="button"
              onClick={goToPrev}
              aria-label="Previous slide"
              className="w-8 h-8 rounded-full bg-black/40 hover:bg-black/60 text-white backdrop-blur-md flex items-center justify-center transition-all hover:scale-105 focus:outline-hidden focus:ring-2 focus:ring-emerald-400"
            >
              <ChevronLeft size={16} />
            </button>

            <button
              type="button"
              onClick={togglePlay}
              aria-label={isPlaying && !userPaused ? "Pause automatic slideshow" : "Play automatic slideshow"}
              className="w-8 h-8 rounded-full bg-black/40 hover:bg-black/60 text-white backdrop-blur-md flex items-center justify-center transition-all hover:scale-105 focus:outline-hidden focus:ring-2 focus:ring-emerald-400"
            >
              {isPlaying && !userPaused ? <Pause size={13} /> : <Play size={13} />}
            </button>

            <button
              type="button"
              onClick={goToNext}
              aria-label="Next slide"
              className="w-8 h-8 rounded-full bg-black/40 hover:bg-black/60 text-white backdrop-blur-md flex items-center justify-center transition-all hover:scale-105 focus:outline-hidden focus:ring-2 focus:ring-emerald-400"
            >
              <ChevronRight size={16} />
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

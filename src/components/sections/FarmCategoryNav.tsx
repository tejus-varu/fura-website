"use client";

import React, { useRef, useEffect } from "react";
import {
  Tractor,
  Building2,
  Trees,
  HeartHandshake,
  Apple,
  Flower2,
  Layers,
  Palette,
  Cpu,
  Compass,
  Sparkles,
} from "lucide-react";
import type { FarmCategory } from "@/config/furaaFarms";

interface FarmCategoryNavProps {
  categories: FarmCategory[];
  activeFilter: string;
  onSelectFilter: (slug: string) => void;
  showFinder?: boolean;
  onToggleFinder?: () => void;
}

const iconMap: Record<string, React.ElementType> = {
  Tractor,
  Building2,
  Trees,
  HeartHandshake,
  Apple,
  Flower2,
  Layers,
  Palette,
  Cpu,
  Compass,
};

export default function FarmCategoryNav({
  categories,
  activeFilter,
  onSelectFilter,
  showFinder = false,
  onToggleFinder,
}: FarmCategoryNavProps) {
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  // Auto-scroll the active chip into view on mobile horizontal scroll
  useEffect(() => {
    if (scrollContainerRef.current) {
      const activeEl = scrollContainerRef.current.querySelector('[aria-selected="true"]');
      if (activeEl) {
        activeEl.scrollIntoView({
          behavior: "smooth",
          block: "nearest",
          inline: "center",
        });
      }
    }
  }, [activeFilter]);

  return (
    <div className="sticky top-14 md:top-16 z-30 bg-white/95 backdrop-blur-md border-b border-emerald-900/10 shadow-xs transition-all">
      <div className="container-xl py-3 sm:py-3.5">
        {/* Mobile Horizontal Scroll Cue & Container */}
        <div
          ref={scrollContainerRef}
          role="tablist"
          aria-label="FURAA Farm Categories Navigation"
          className="flex items-center gap-1.5 sm:gap-2 overflow-x-auto no-scrollbar scroll-smooth py-1 px-1 -mx-2 sm:mx-0 sm:px-0 sm:flex-wrap sm:justify-center"
        >
          {/* All Experiences Chip */}
          <button
            role="tab"
            aria-selected={activeFilter === "all"}
            aria-controls="farm-experience-content"
            onClick={() => onSelectFilter("all")}
            className={`shrink-0 inline-flex items-center gap-1.5 px-3.5 sm:px-4 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all duration-200 cursor-pointer ${
              activeFilter === "all"
                ? "bg-[var(--color-green-950)] text-white shadow-sm ring-1 ring-emerald-500/30"
                : "bg-[var(--color-cream)] text-[var(--color-green-900)] hover:bg-emerald-100/70 hover:text-emerald-950"
            }`}
          >
            <Layers size={14} className={activeFilter === "all" ? "text-[var(--color-gold-400)]" : "text-emerald-700"} />
            <span>All Experiences (10)</span>
          </button>

          {/* Ten Individual Category Chips */}
          {categories.map((cat) => {
            const Icon = iconMap[cat.iconName] || Layers;
            const isActive = activeFilter === cat.slug;
            return (
              <button
                key={cat.id}
                role="tab"
                aria-selected={isActive}
                aria-label={`FURAA ${cat.title}`}
                title={cat.title}
                onClick={() => onSelectFilter(cat.slug)}
                className={`shrink-0 inline-flex items-center gap-1.5 px-3 sm:px-3.5 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all duration-200 cursor-pointer ${
                  isActive
                    ? "bg-[var(--color-green-950)] text-white shadow-sm ring-1 ring-[var(--color-gold-400)]/40"
                    : "bg-[var(--color-cream)] text-[var(--color-green-900)] hover:bg-emerald-100/70 hover:text-emerald-950"
                }`}
              >
                <Icon
                  size={14}
                  className={`transition-colors shrink-0 ${
                    isActive ? "text-[var(--color-gold-400)]" : "text-emerald-700"
                  }`}
                />
                <span className="whitespace-nowrap">{cat.shortTitle}</span>
              </button>
            );
          })}

          {/* Optional Experience Finder Shortcut Toggle */}
          {onToggleFinder && (
            <button
              type="button"
              onClick={onToggleFinder}
              aria-label="Open guided Experience Finder"
              className={`shrink-0 inline-flex items-center gap-1.5 px-3 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all cursor-pointer border ${
                showFinder
                  ? "bg-[var(--color-gold-500)] text-[var(--color-green-950)] border-[var(--color-gold-600)] shadow-xs"
                  : "bg-white text-emerald-800 border-emerald-300 hover:bg-emerald-50"
              }`}
            >
              <Sparkles size={13} className={showFinder ? "text-[var(--color-green-950)]" : "text-[var(--color-gold-500)]"} />
              <span className="whitespace-nowrap">Experience Finder</span>
            </button>
          )}
        </div>
      </div>
    </div>
  );
}

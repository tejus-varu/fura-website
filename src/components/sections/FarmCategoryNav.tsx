"use client";

import React from "react";
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
  ArrowDown,
} from "lucide-react";
import type { FarmCategory } from "@/config/furaaFarms";

interface FarmCategoryNavProps {
  categories: FarmCategory[];
  activeFilter: string;
  onSelectFilter: (slug: string) => void;
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
}: FarmCategoryNavProps) {
  return (
    <section className="section-pad pt-10 pb-12 bg-white border-b border-[var(--color-green-100)]">
      <div className="container-xl">
        {/* Interactive Filter Pills */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-10">
          <button
            onClick={() => onSelectFilter("all")}
            className={`inline-flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all cursor-pointer ${
              activeFilter === "all"
                ? "bg-[var(--color-green-950)] text-white shadow-md"
                : "bg-[var(--color-cream)] text-[var(--color-green-900)] hover:bg-[var(--color-green-100)]"
            }`}
          >
            <Layers size={14} />
            <span>All 10 Categories</span>
          </button>

          {categories.map((cat) => {
            const Icon = iconMap[cat.iconName] || Layers;
            const isActive = activeFilter === cat.slug;
            return (
              <button
                key={cat.id}
                onClick={() => onSelectFilter(cat.slug)}
                className={`inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all cursor-pointer ${
                  isActive
                    ? "bg-[var(--color-green-950)] text-white shadow-md"
                    : "bg-[var(--color-cream)] text-[var(--color-green-900)] hover:bg-[var(--color-green-100)]"
                }`}
              >
                <Icon size={14} className={isActive ? "text-[var(--color-gold-400)]" : "text-emerald-700"} />
                <span>{cat.shortTitle}</span>
              </button>
            );
          })}
        </div>

        {/* Jump-to Direct Anchor Links Strip */}
        <div className="p-4 rounded-2xl bg-[var(--color-cream)] border border-emerald-900/10">
          <div className="text-center mb-3">
            <span className="text-[11px] font-bold uppercase tracking-wider text-[var(--color-green-800)] inline-flex items-center gap-1">
              <ArrowDown size={12} /> Jump Directly to Category Section
            </span>
          </div>
          <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-xs">
            {categories.map((cat, idx) => (
              <a
                key={cat.id}
                href={`#${cat.slug}`}
                className="font-medium text-[var(--color-green-800)] hover:text-emerald-900 hover:underline transition-colors"
              >
                <span className="text-[var(--color-gold-600)] font-bold mr-1">0{idx + 1}.</span>
                {cat.shortTitle}
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

"use client";

import React from "react";
import {
  Tractor,
  Building2,
  Trees,
  HeartHandshake,
  Apple,
  ArrowDown,
  Layers,
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
            <span>All Categories ({categories.length})</span>
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
                <Icon size={14} />
                <span>{cat.shortTitle}</span>
              </button>
            );
          })}
        </div>

        {/* 5 Category Navigation Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
          {categories.map((cat, idx) => {
            const Icon = iconMap[cat.iconName] || Layers;
            return (
              <a
                key={cat.id}
                href={`#${cat.slug}`}
                onClick={() => {
                  onSelectFilter("all");
                }}
                className="group p-5 rounded-2xl bg-[var(--color-cream)] border border-[var(--color-green-100)] hover:border-[var(--color-gold-400)] hover:bg-white hover:shadow-lg transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between gap-2 mb-3">
                    <div className="w-10 h-10 rounded-xl bg-white text-[var(--color-green-800)] flex items-center justify-center shadow-xs group-hover:bg-[var(--color-green-950)] group-hover:text-white transition-colors">
                      <Icon size={20} />
                    </div>
                    <span className="text-[11px] font-bold text-[var(--color-gold-600)] uppercase tracking-wider">
                      0{idx + 1}
                    </span>
                  </div>

                  <h3 className="font-display text-base font-bold text-[var(--color-green-950)] group-hover:text-[var(--color-green-800)] transition-colors mb-1">
                    {cat.shortTitle}
                  </h3>

                  <p className="text-xs text-[var(--color-green-700)] leading-relaxed line-clamp-2 mb-3">
                    {cat.theme}
                  </p>
                </div>

                <div className="flex items-center justify-between text-[11px] font-semibold text-[var(--color-green-800)] group-hover:text-[var(--color-gold-600)] pt-2 border-t border-[var(--color-green-100)]">
                  <span>Explore category</span>
                  <ArrowDown
                    size={12}
                    className="transform transition-transform duration-300 group-hover:translate-y-1"
                  />
                </div>
              </a>
            );
          })}
        </div>
      </div>
    </section>
  );
}

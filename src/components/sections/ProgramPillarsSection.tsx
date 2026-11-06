"use client";

import React from "react";
import Link from "next/link";
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
  ArrowRight,
  Sparkles,
  CheckCircle2,
} from "lucide-react";
import SectionHeader from "@/components/ui/SectionHeader";
import Badge from "@/components/ui/Badge";
import Button from "@/components/ui/Button";
import { furaaFarmCategories } from "@/config/furaaFarms";

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

export default function ProgramPillarsSection() {
  return (
    <section
      id="pillars"
      className="section-pad"
      style={{
        background: "linear-gradient(180deg, var(--color-cream) 0%, #FFFFFF 100%)",
      }}
      aria-label="Ten Pillars of Experiential Learning"
    >
      <div className="container-xl">
        <SectionHeader
          badge="Experiential Curriculum"
          badgeVariant="green"
          title="Ten Pillars of Experiential Learning"
          subtitle="A comprehensive K–10 agricultural, environmental and rural heritage framework connecting school curricula to living farm ecosystems."
        />

        {/* 10-Card Responsive Grid: Two rows of five on large screens */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-5 mb-14">
          {furaaFarmCategories.map((pillar, idx) => {
            const Icon = iconMap[pillar.iconName] || Sparkles;
            return (
              <div
                key={pillar.id}
                className="card-base p-5 bg-white border border-gray-100 hover:border-emerald-300 rounded-2xl flex flex-col justify-between transition-all duration-200 hover:-translate-y-1 hover:shadow-lg group"
              >
                <div>
                  {/* Top Thumbnail Image if available */}
                  {pillar.image?.src && (
                    <div className="relative w-full h-32 rounded-xl overflow-hidden mb-3.5 bg-stone-100">
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img
                        src={pillar.image.src}
                        alt={pillar.image.alt || pillar.title}
                        className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                        style={{ objectPosition: pillar.image.objectPosition || "center" }}
                        loading="lazy"
                      />
                      <span className="absolute top-2 right-2 px-2 py-0.5 rounded-full text-[10px] font-bold bg-black/60 text-white backdrop-blur-xs">
                        Pillar 0{idx + 1}
                      </span>
                    </div>
                  )}

                  {/* Header Strip: Icon + Badge */}
                  <div className="flex items-center justify-between gap-2 mb-2">
                    <div className="w-8 h-8 rounded-lg bg-emerald-50 text-emerald-800 flex items-center justify-center shrink-0">
                      <Icon size={16} />
                    </div>
                    <Badge variant={pillar.badgeVariant} className="text-[10px] px-2 py-0.5">
                      {pillar.badge}
                    </Badge>
                  </div>

                  {/* Title & Heading */}
                  <h3 className="font-display text-base font-bold text-[var(--color-green-950)] leading-snug group-hover:text-emerald-800 transition-colors">
                    {pillar.title}
                  </h3>
                  <p className="text-xs font-semibold text-[var(--color-gold-700)] mt-0.5 mb-2">
                    {pillar.theme}
                  </p>

                  {/* Concise Description */}
                  <p className="text-xs text-[var(--color-green-800)] line-clamp-2 leading-relaxed mb-3 opacity-90">
                    {pillar.intro}
                  </p>

                  {/* Activity Highlights */}
                  <div className="pt-2.5 border-t border-gray-100">
                    <span className="text-[10px] font-bold uppercase tracking-wider text-stone-600 block mb-1.5">
                      Core Activities:
                    </span>
                    <ul className="space-y-1">
                      {pillar.activityHighlights.slice(0, 3).map((act, aIdx) => (
                        <li key={aIdx} className="text-[11px] text-[var(--color-green-800)] flex items-start gap-1.5">
                          <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 mt-1 shrink-0" />
                          <span className="line-clamp-1">{act.title}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Learning Benefits */}
                  <div className="mt-2.5 pt-2.5 border-t border-gray-100">
                    <span className="text-[10px] font-bold uppercase tracking-wider text-stone-600 block mb-1">
                      Key Benefit:
                    </span>
                    <div className="flex items-start gap-1.5 text-[11px] text-[var(--color-green-900)] font-medium">
                      <CheckCircle2 size={12} className="text-emerald-700 mt-0.5 shrink-0" />
                      <span className="line-clamp-1">{pillar.learningOutcomes[0]}</span>
                    </div>
                  </div>
                </div>

                {/* Explore Link */}
                <div className="mt-4 pt-3 border-t border-gray-100">
                  <Link
                    href={`/programs/furaa-farms#${pillar.slug}`}
                    className="inline-flex items-center gap-1.5 text-xs font-bold text-emerald-800 hover:text-emerald-950 transition-colors group/link"
                  >
                    <span>Explore Experience</span>
                    <ArrowRight size={13} className="transition-transform duration-200 group-hover/link:translate-x-1" />
                  </Link>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom Callout Bar */}
        <div className="rounded-2xl p-6 sm:p-8 bg-gradient-to-r from-[var(--color-green-950)] to-[var(--color-green-900)] text-white shadow-xl flex flex-col md:flex-row items-center justify-between gap-6 border border-[var(--color-gold-400)]/30">
          <div className="max-w-2xl">
            <span className="text-xs uppercase font-bold tracking-wider text-[var(--color-gold-400)] block mb-1">
              Immersive Learning Centers
            </span>
            <h4 className="font-display text-xl sm:text-2xl font-bold text-white">
              Discover All Ten Experiences at FURAA Farms
            </h4>
            <p className="text-xs sm:text-sm text-green-100/90 mt-1 leading-relaxed">
              Explore in-depth curricular objectives, age-appropriate learning tracks, safety guidelines, and sample field activities on our dedicated farm program page.
            </p>
          </div>
          <Button href="/programs/furaa-farms" variant="primary" size="md" className="shrink-0">
            Explore Dedicated FURAA Farms
            <ArrowRight size={16} />
          </Button>
        </div>
      </div>
    </section>
  );
}

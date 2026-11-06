"use client";

import React, { useState } from "react";
import Link from "next/link";
import {
  ArrowRight,
  ShieldCheck,
  Sparkles,
  ChevronLeft,
  ChevronRight,
  Layers,
  CheckCircle2,
  Tractor,
  Building2,
  Trees,
  HeartHandshake,
  Apple,
  Flower2,
  Palette,
  Cpu,
  Compass,
} from "lucide-react";
import PageHero from "@/components/layout/PageHero";
import SectionHeader from "@/components/ui/SectionHeader";
import Button from "@/components/ui/Button";
import Badge from "@/components/ui/Badge";
import { furaaFarmCategories } from "@/config/furaaFarms";
import { brand } from "@/config/brand";
import FarmCategoryNav from "@/components/sections/FarmCategoryNav";
import FarmCategoryDetail from "@/components/sections/FarmCategoryDetail";
import ExperienceFinder from "@/components/sections/ExperienceFinder";

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

export default function FuraaFarmsView() {
  const [activeFilter, setActiveFilter] = useState<string>("all");
  const [showFinder, setShowFinder] = useState<boolean>(false);

  const activeCategoryIndex = furaaFarmCategories.findIndex(
    (c) => c.slug === activeFilter
  );
  const activeCategory =
    activeCategoryIndex >= 0 ? furaaFarmCategories[activeCategoryIndex] : null;

  const prevCategory =
    activeCategoryIndex > 0
      ? furaaFarmCategories[activeCategoryIndex - 1]
      : furaaFarmCategories[furaaFarmCategories.length - 1];

  const nextCategory =
    activeCategoryIndex < furaaFarmCategories.length - 1
      ? furaaFarmCategories[activeCategoryIndex + 1]
      : furaaFarmCategories[0];

  const handleSelectFilter = (slug: string) => {
    setActiveFilter(slug);
    if (slug !== "all") {
      setTimeout(() => {
        const el = document.getElementById(slug);
        if (el) {
          el.scrollIntoView({ behavior: "smooth", block: "start" });
        }
      }, 50);
    }
  };

  return (
    <>
      {/* ─── Hero Section ──────────────────────────────────────────────── */}
      <PageHero
        badge="Experiential Field Centers"
        badgeVariant="gold"
        title="Explore FURAA Farms"
        description="Ten distinct agrarian learning categories designed to turn classroom biology, ecology, culture and science into hands-on discovery across Classes 1–10."
        bgImage="/images/hero/NAD06383.JPG"
        bgPosition="center 35%"
        compact={true}
      >
        <div className="flex flex-wrap items-center justify-center gap-4 mt-6">
          <Button href="/contact" variant="primary" size="lg">
            {brand.cta.primary}
            <ArrowRight size={18} />
          </Button>
          <Button
            href="#experiences-overview"
            variant="secondary"
            size="lg"
            onClick={() => {
              if (activeFilter !== "all") {
                setActiveFilter("all");
              }
            }}
          >
            {brand.cta.secondary}
          </Button>
        </div>
      </PageHero>

      {/* ─── Single Unified Category Navigation Bar ─────────────────── */}
      <FarmCategoryNav
        categories={furaaFarmCategories}
        activeFilter={activeFilter}
        onSelectFilter={handleSelectFilter}
        showFinder={showFinder}
        onToggleFinder={() => setShowFinder((prev) => !prev)}
      />

      {/* ─── Interactive Experience Finder (When Toggled) ────────────── */}
      {showFinder && (
        <section
          id="experience-finder"
          className="py-10 bg-[var(--color-cream)] border-b border-[var(--color-green-200)] transition-all"
        >
          <div className="container-xl">
            <div className="flex items-center justify-between mb-6 pb-3 border-b border-[var(--color-green-200)]">
              <div className="flex items-center gap-2">
                <Sparkles size={18} className="text-[var(--color-gold-500)]" />
                <h3 className="text-base sm:text-lg font-display font-bold text-[var(--color-green-950)]">
                  Find Your FURAA Experience — Interactive Matcher
                </h3>
              </div>
              <button
                type="button"
                onClick={() => setShowFinder(false)}
                className="text-xs sm:text-sm font-semibold text-[var(--color-green-800)] hover:text-[var(--color-green-950)] underline underline-offset-4 cursor-pointer"
              >
                Hide Finder ✕
              </button>
            </div>

            <ExperienceFinder
              onSelectCategory={(slug) => {
                setActiveFilter(slug);
                setShowFinder(false);
                setTimeout(() => {
                  const el = document.getElementById(slug);
                  if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
                }, 100);
              }}
            />
          </div>
        </section>
      )}

      {/* ─── SINGLE CATEGORY VIEW CONTROLS ───────────────────────────── */}
      {activeCategory && activeFilter !== "all" && (
        <div className="bg-[var(--color-green-50)]/90 border-b border-[var(--color-green-200)] py-3 px-4 sticky top-28 md:top-32 z-20 backdrop-blur-sm">
          <div className="container-xl flex flex-wrap items-center justify-between gap-3 text-xs sm:text-sm">
            <button
              type="button"
              onClick={() => setActiveFilter("all")}
              className="inline-flex items-center gap-1.5 font-bold text-emerald-800 hover:text-emerald-950 transition-colors cursor-pointer"
            >
              <ChevronLeft size={16} />
              <span>← Back to All 10 Experiences</span>
            </button>

            <div className="flex items-center gap-2 text-xs">
              <span className="text-[var(--color-green-700)] hidden sm:inline">
                Category {activeCategoryIndex + 1} of 10:
              </span>
              <span className="font-bold text-[var(--color-green-950)] bg-white px-2.5 py-1 rounded-lg border border-[var(--color-green-200)] shadow-2xs">
                {activeCategory.title}
              </span>
            </div>

            <div className="flex items-center gap-2">
              <button
                type="button"
                onClick={() => handleSelectFilter(prevCategory.slug)}
                className="inline-flex items-center gap-1 px-3 py-1.5 rounded-lg bg-white border border-[var(--color-green-200)] text-xs font-semibold text-[var(--color-green-900)] hover:bg-emerald-50 transition-colors cursor-pointer shadow-2xs"
                title={`Previous: ${prevCategory.shortTitle}`}
              >
                <ChevronLeft size={14} />
                <span className="hidden sm:inline">Prev:</span>
                <span>{prevCategory.shortTitle}</span>
              </button>
              <button
                type="button"
                onClick={() => handleSelectFilter(nextCategory.slug)}
                className="inline-flex items-center gap-1 px-3 py-1.5 rounded-lg bg-white border border-[var(--color-green-200)] text-xs font-semibold text-[var(--color-green-900)] hover:bg-emerald-50 transition-colors cursor-pointer shadow-2xs"
                title={`Next: ${nextCategory.shortTitle}`}
              >
                <span className="hidden sm:inline">Next:</span>
                <span>{nextCategory.shortTitle}</span>
                <ChevronRight size={14} />
              </button>
            </div>
          </div>
        </div>
      )}

      {/* ─── ALL EXPERIENCES: SCANNABLE OVERVIEW GRID ─────────────────── */}
      {activeFilter === "all" && (
        <section
          id="experiences-overview"
          className="py-12 bg-white border-b border-[var(--color-green-100)]"
        >
          <div className="container-xl">
            {/* Guided Finder Banner */}
            {!showFinder && (
              <div className="mb-10 p-5 rounded-2xl bg-gradient-to-r from-[var(--color-green-950)] via-emerald-950 to-[var(--color-green-900)] text-white shadow-md flex flex-col sm:flex-row items-center justify-between gap-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-[var(--color-gold-500)] text-[var(--color-green-950)] flex items-center justify-center shrink-0">
                    <Sparkles size={20} />
                  </div>
                  <div>
                    <h3 className="text-sm sm:text-base font-bold text-white">
                      Looking for the right experience for your students?
                    </h3>
                    <p className="text-xs text-[var(--color-green-200)]">
                      Answer 2 quick questions to get tailored curriculum recommendations.
                    </p>
                  </div>
                </div>
                <button
                  type="button"
                  onClick={() => {
                    setShowFinder(true);
                    setTimeout(() => {
                      document
                        .getElementById("experience-finder")
                        ?.scrollIntoView({ behavior: "smooth" });
                    }, 60);
                  }}
                  className="shrink-0 px-4 py-2.5 rounded-xl bg-[var(--color-gold-500)] hover:bg-[var(--color-gold-400)] text-[var(--color-green-950)] font-bold text-xs sm:text-sm transition-all shadow-sm cursor-pointer"
                >
                  Find Your FURAA Experience →
                </button>
              </div>
            )}

            <SectionHeader
              badge="10 Farm Categories"
              title="The Ten Experiential Learning Environments"
              subtitle="Select any category below to inspect its grade-tiered curriculum, field safety protocols, and hands-on activities."
            />

            {/* 10 Scannable Category Cards */}
            <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {furaaFarmCategories.map((category) => {
                const Icon = iconMap[category.iconName] || Layers;
                return (
                  <div
                    key={category.id}
                    className="flex flex-col justify-between p-5 rounded-2xl bg-[var(--color-cream)]/50 border border-[var(--color-green-200)] hover:border-emerald-500 hover:shadow-md transition-all group"
                  >
                    <div>
                      <div className="flex items-center justify-between gap-2 mb-3">
                        <div className="w-9 h-9 rounded-xl bg-white border border-[var(--color-green-200)] flex items-center justify-center text-emerald-800 group-hover:bg-[var(--color-green-950)] group-hover:text-[var(--color-gold-400)] transition-colors">
                          <Icon size={18} />
                        </div>
                        <Badge variant={category.badgeVariant}>
                          {category.badge}
                        </Badge>
                      </div>

                      <h3 className="font-display text-base font-bold text-[var(--color-green-950)] mb-1 group-hover:text-emerald-800 transition-colors">
                        {category.title}
                      </h3>
                      <p className="text-xs text-[var(--color-green-700)] italic mb-3">
                        &ldquo;{category.tagline}&rdquo;
                      </p>
                      <p className="text-xs text-[var(--color-green-800)] line-clamp-2 leading-relaxed mb-4">
                        {category.intro}
                      </p>

                      <div className="space-y-1 mb-4">
                        <span className="text-[10px] font-bold uppercase tracking-wider text-[var(--color-green-700)] block">
                          Core Highlights:
                        </span>
                        {category.activityHighlights.slice(0, 2).map((act) => (
                          <div
                            key={act.title}
                            className="flex items-start gap-1.5 text-xs text-[var(--color-green-900)]"
                          >
                            <CheckCircle2
                              size={12}
                              className="text-emerald-600 shrink-0 mt-0.5"
                            />
                            <span className="font-medium line-clamp-1">
                              {act.title}
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="pt-3 border-t border-[var(--color-green-200)] flex items-center justify-between gap-2">
                      <button
                        type="button"
                        onClick={() => handleSelectFilter(category.slug)}
                        className="text-xs font-bold text-emerald-800 hover:text-emerald-950 flex items-center gap-1 cursor-pointer"
                      >
                        <span>Inspect Experience</span>
                        <ArrowRight size={13} />
                      </button>
                      <Link
                        href={`/contact?subject=demo-${category.slug}`}
                        className="text-[11px] font-semibold text-[var(--color-green-700)] hover:text-[var(--color-green-950)]"
                      >
                        Plan Visit
                      </Link>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>
      )}

      {/* ─── Detailed Category Sections ──────────────────────────────── */}
      <div id="farm-experience-content" className="flex flex-col">
        {activeFilter === "all" ? (
          furaaFarmCategories.map((category, index) => (
            <div key={category.id} id={category.slug}>
              <FarmCategoryDetail category={category} index={index} />
            </div>
          ))
        ) : activeCategory ? (
          <div id={activeCategory.slug}>
            <FarmCategoryDetail category={activeCategory} index={activeCategoryIndex} />
          </div>
        ) : null}
      </div>

      {/* ─── Grade-Tiered Curriculum Integration Matrix ─────────────── */}
      <section className="section-pad bg-white border-t border-[var(--color-green-100)]">
        <div className="container-xl">
          <SectionHeader
            badge="Curriculum Progression"
            title="How Each Farm Category Connects to Grade Bands"
            subtitle="Every farm environment offers graded learning tracks tailored to the developmental stages and cognitive maturity of students."
          />

          <div className="mt-12 overflow-x-auto">
            <table className="w-full text-left border-collapse min-w-[760px]">
              <thead>
                <tr className="border-b-2 border-[var(--color-green-200)] text-xs uppercase font-bold text-[var(--color-green-900)]">
                  <th className="py-4 px-4 bg-[var(--color-cream)] rounded-tl-xl">
                    Farm Experience
                  </th>
                  <th className="py-4 px-4 bg-[var(--color-cream)]">
                    Foundation (Classes 1–4)
                  </th>
                  <th className="py-4 px-4 bg-[var(--color-cream)]">
                    Exploration (Classes 5–8)
                  </th>
                  <th className="py-4 px-4 bg-[var(--color-cream)] rounded-tr-xl">
                    Specialization (Classes 9–10)
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[var(--color-green-100)] text-xs sm:text-sm text-[var(--color-green-800)]">
                <tr>
                  <td className="py-4 px-4 font-bold text-[var(--color-green-950)] bg-white">
                    FURAA Rural Farms
                  </td>
                  <td className="py-4 px-4">Mud puddling, seed sowing, folk storytelling</td>
                  <td className="py-4 px-4">Paddy transplanting, canal hydrology, team plots</td>
                  <td className="py-4 px-4">Soil physics, agronomy economics, agrarian history</td>
                </tr>
                <tr>
                  <td className="py-4 px-4 font-bold text-[var(--color-green-950)] bg-white">
                    FURAA Commercial Farms
                  </td>
                  <td className="py-4 px-4">Seedling pro-trays, sensory flower trails</td>
                  <td className="py-4 px-4">Polyhouse climate, drip irrigation, harvesting</td>
                  <td className="py-4 px-4">Commercial nursery yields, market economics, agtech</td>
                </tr>
                <tr>
                  <td className="py-4 px-4 font-bold text-[var(--color-green-950)] bg-white">
                    FURAA Agro-Forests
                  </td>
                  <td className="py-4 px-4">Leaf art, fruit observation, bird watching</td>
                  <td className="py-4 px-4">Canopy transects, grafting demos, ecology trails</td>
                  <td className="py-4 px-4">Biodiversity auditing, carbon capture, apiculture science</td>
                </tr>
                <tr>
                  <td className="py-4 px-4 font-bold text-[var(--color-green-950)] bg-white">
                    FURAA Animal Farms
                  </td>
                  <td className="py-4 px-4">Gentle sheep feeding, calf observation</td>
                  <td className="py-4 px-4">Dairy care, fodder blending, indigenous breeds</td>
                  <td className="py-4 px-4">Biogas mechanics, livestock genetics, animal welfare</td>
                </tr>
                <tr>
                  <td className="py-4 px-4 font-bold text-[var(--color-green-950)] bg-white">
                    FURAA Nutri Gardens
                  </td>
                  <td className="py-4 px-4">Microgreens sprouting, rainbow vegetables</td>
                  <td className="py-4 px-4">Millet harvesting, culinary herbs, seed saving</td>
                  <td className="py-4 px-4">Nutrient chemistry, whole food literacy, crop resilience</td>
                </tr>
                <tr>
                  <td className="py-4 px-4 font-bold text-[var(--color-green-950)] bg-white">
                    FURAA Ornamental Gardens
                  </td>
                  <td className="py-4 px-4">Sensory flower potting, color discovery</td>
                  <td className="py-4 px-4">Stem cutting propagation, landscape beds</td>
                  <td className="py-4 px-4">Horticultural design, pruning geometry, green spaces</td>
                </tr>
                <tr>
                  <td className="py-4 px-4 font-bold text-[var(--color-green-950)] bg-white">
                    FURAA Urban &amp; Terrace Gardens
                  </td>
                  <td className="py-4 px-4">Grow-bag sowing, windowsill seedling care</td>
                  <td className="py-4 px-4">Vertical farming, micro-drip setups, hydroponics</td>
                  <td className="py-4 px-4">Urban food resilience, space-smart yield analytics</td>
                </tr>
                <tr>
                  <td className="py-4 px-4 font-bold text-[var(--color-green-950)] bg-white">
                    FURAA Art and Folk Centre
                  </td>
                  <td className="py-4 px-4">Clay pinch-pots, leaf prints, village songs</td>
                  <td className="py-4 px-4">Potter&apos;s wheel, Warli tribal art, waste upcycling</td>
                  <td className="py-4 px-4">Rural craft preservation, eco-design, folk history</td>
                </tr>
                <tr>
                  <td className="py-4 px-4 font-bold text-[var(--color-green-950)] bg-white">
                    FURAA Farm Machinery &amp; Precision Agri
                  </td>
                  <td className="py-4 px-4">Tractor walkthroughs, tool classification</td>
                  <td className="py-4 px-4">Mechanical transplanters, water drone flight demos</td>
                  <td className="py-4 px-4">Telemetry sensors, robotics, agricultural engineering</td>
                </tr>
                <tr>
                  <td className="py-4 px-4 font-bold text-[var(--color-green-950)] bg-white">
                    FURAA Wellness &amp; Adventure Centre
                  </td>
                  <td className="py-4 px-4">Gentle balance trails, mindful canopy breathing</td>
                  <td className="py-4 px-4">Low-rope obstacle traverses, cooperative games</td>
                  <td className="py-4 px-4">Outdoor expedition skills, tentcraft, orientation trails</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* ─── Responsible Safety & Activity Planning ─────────────────────── */}
      <section className="py-12 bg-emerald-50/50 border-t border-b border-emerald-900/10">
        <div className="container-xl max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-100 text-[var(--color-green-900)] text-xs font-semibold mb-3">
            <ShieldCheck size={14} className="text-emerald-700" />
            <span>Activity Planning and Care</span>
          </div>
          <h2 className="text-xl sm:text-2xl font-display font-bold text-[var(--color-green-950)] mb-3">
            Responsible Safety and Activity Planning
          </h2>
          <p className="text-sm sm:text-base text-[var(--color-green-800)] leading-relaxed">
            FURAA plans its educational activities with consideration for the age of participants, the nature of each activity, and the facilities available. Relevant farm-specific protocols, precautions, supervision arrangements, and applicable safety guidelines are incorporated into the learning experience.
          </p>
        </div>
      </section>

      {/* ─── Final Call to Action ─────────────────────────────────────── */}
      <section className="section-pad bg-[var(--color-green-950)] text-white">
        <div className="container-xl text-center max-w-3xl mx-auto">
          <span className="text-xs uppercase font-bold tracking-widest text-[var(--color-gold-400)] block mb-3">
            Plan Your School Visit
          </span>
          <h2 className="text-display text-3xl sm:text-4xl text-white mb-6">
            Ready to Bring Your Students to FURAA Farms?
          </h2>
          <p className="text-base sm:text-lg text-[var(--color-green-200)] leading-relaxed mb-8">
            Connect with our academic coordination team to schedule a principal preview visit, review calendar alignments, and customize farm categories for your school cohorts.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <Button href="/contact" variant="primary" size="lg">
              {brand.cta.primary}
            </Button>
            <Button
              href="/partnership"
              variant="outline"
              size="lg"
              className="border-white/30 text-white hover:bg-white/10"
            >
              Our Partners
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}

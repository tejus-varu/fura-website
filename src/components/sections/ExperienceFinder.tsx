"use client";

import React, { useState, useMemo } from "react";
import Link from "next/link";
import {
  Compass,
  Sparkles,
  RotateCcw,
  Check,
  ChevronLeft,
  ChevronRight,
  GraduationCap,
  Building,
} from "lucide-react";
import { furaaFarmCategories, FarmCategory } from "@/config/furaaFarms";
import { brand } from "@/config/brand";
import Badge from "@/components/ui/Badge";
import Button from "@/components/ui/Button";

type GroupId = "foundation" | "exploration" | "specialization" | "corporate";

interface GroupOption {
  id: GroupId;
  label: string;
  sublabel: string;
  gradeBand: string;
  icon: React.ElementType;
}

const groupOptions: GroupOption[] = [
  {
    id: "foundation",
    label: "Foundation Cohort",
    sublabel: "Sensory curiosity, seed banking, pottery and gentle outdoor exploration.",
    gradeBand: "Classes 1–4",
    icon: Sparkles,
  },
  {
    id: "exploration",
    label: "Exploration Cohort",
    sublabel: "Paddy puddling, living botany, team plots and ecological systems.",
    gradeBand: "Classes 5–8",
    icon: Compass,
  },
  {
    id: "specialization",
    label: "Specialization Cohort",
    sublabel: "Soil mechanics, precision agronomy, smart irrigation and crop physics.",
    gradeBand: "Classes 9–10",
    icon: GraduationCap,
  },
  {
    id: "corporate",
    label: "Corporate or General Group",
    sublabel: "Adult team retreat, folk crafts, nature obstacle trails and CSR partnerships.",
    gradeBand: "Adults & Teams",
    icon: Building,
  },
];

interface InterestOption {
  id: string;
  label: string;
  categorySlugs: string[];
}

const interestOptions: InterestOption[] = [
  {
    id: "traditional-farming",
    label: "Traditional Farming",
    categorySlugs: ["rural-farms", "nutri-gardens", "agro-forests"],
  },
  {
    id: "modern-agri",
    label: "Modern Agriculture",
    categorySlugs: ["commercial-farms", "machinery-precision-agri", "urban-terrace-gardens"],
  },
  {
    id: "nature-biodiversity",
    label: "Nature and Biodiversity",
    categorySlugs: ["agro-forests", "animal-farms", "wellness-adventure-centre"],
  },
  {
    id: "animals",
    label: "Animals",
    categorySlugs: ["animal-farms", "rural-farms"],
  },
  {
    id: "art-culture",
    label: "Art and Culture",
    categorySlugs: ["art-folk-centre", "ornamental-landscape-gardens", "rural-farms"],
  },
  {
    id: "gardening",
    label: "Gardening",
    categorySlugs: ["urban-terrace-gardens", "nutri-gardens", "ornamental-landscape-gardens"],
  },
  {
    id: "technology",
    label: "Technology",
    categorySlugs: ["machinery-precision-agri", "commercial-farms", "urban-terrace-gardens"],
  },
  {
    id: "adventure",
    label: "Adventure",
    categorySlugs: ["wellness-adventure-centre", "agro-forests"],
  },
];

interface ExperienceFinderProps {
  onSelectCategory?: (slug: string) => void;
  className?: string;
  compact?: boolean;
}

export default function ExperienceFinder({
  onSelectCategory,
  className = "",
  compact = false,
}: ExperienceFinderProps) {
  const [step, setStep] = useState<1 | 2 | 3>(1);
  const [selectedGroup, setSelectedGroup] = useState<GroupId>("exploration");
  const [selectedInterests, setSelectedInterests] = useState<string[]>([
    "traditional-farming",
    "nature-biodiversity",
  ]);

  const toggleInterest = (id: string) => {
    setSelectedInterests((prev) =>
      prev.includes(id)
        ? prev.filter((item) => item !== id)
        : [...prev, id]
    );
  };

  // Deterministic recommendation ranking
  const recommendations = useMemo(() => {
    const scores: Record<string, { category: FarmCategory; score: number; matchReason: string }> = {};

    furaaFarmCategories.forEach((cat) => {
      let score = 0;
      const matchedInterests: string[] = [];

      interestOptions.forEach((opt) => {
        if (selectedInterests.includes(opt.id) && opt.categorySlugs.includes(cat.slug)) {
          score += 2;
          matchedInterests.push(opt.label);
        }
      });

      // Group affinity scoring
      if (selectedGroup === "foundation" && ["rural-farms", "animal-farms", "art-folk-centre", "nutri-gardens"].includes(cat.slug)) {
        score += 1.5;
      } else if (selectedGroup === "exploration" && ["rural-farms", "commercial-farms", "agro-forests", "nutri-gardens", "wellness-adventure-centre"].includes(cat.slug)) {
        score += 1.5;
      } else if (selectedGroup === "specialization" && ["commercial-farms", "machinery-precision-agri", "urban-terrace-gardens", "agro-forests"].includes(cat.slug)) {
        score += 1.5;
      } else if (selectedGroup === "corporate" && ["rural-farms", "wellness-adventure-centre", "art-folk-centre", "commercial-farms"].includes(cat.slug)) {
        score += 1.5;
      }

      const groupLabel = groupOptions.find((g) => g.id === selectedGroup)?.gradeBand || "Your Group";
      const matchReason = matchedInterests.length > 0
        ? `Calibrated for ${groupLabel} with emphasis on ${matchedInterests.slice(0, 2).join(" & ")}.`
        : `Strong experiential alignment with ${groupLabel} learning objectives.`;

      scores[cat.slug] = { category: cat, score, matchReason };
    });

    const sorted = Object.values(scores).sort((a, b) => b.score - a.score);
    return sorted.slice(0, 3);
  }, [selectedGroup, selectedInterests]);

  const resetFinder = () => {
    setStep(1);
    setSelectedGroup("exploration");
    setSelectedInterests(["traditional-farming", "nature-biodiversity"]);
  };

  return (
    <div
      className={`card-base bg-white rounded-3xl border border-emerald-900/15 shadow-md overflow-hidden ${className}`}
      id="experience-finder"
    >
      {/* Header Banner */}
      <div className={`${compact ? "p-5 sm:p-6" : "p-6 sm:p-8"} bg-gradient-to-r from-[var(--color-green-950)] via-[var(--color-green-900)] to-[var(--color-green-800)] text-white relative overflow-hidden`}>
        <div className="absolute right-0 top-0 w-64 h-64 bg-[var(--color-gold-400)]/10 rounded-full blur-3xl pointer-events-none" />
        <div className="relative z-10 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 text-emerald-200 text-xs font-semibold mb-2 border border-white/15">
              <Sparkles size={13} className="text-[var(--color-gold-400)]" />
              <span>Interactive Curriculum Matcher</span>
            </div>
            <h2 className="text-display text-2xl sm:text-3xl text-white font-bold">
              Find Your FURAA Experience
            </h2>
            <p className="text-xs sm:text-sm text-[var(--color-green-200)] mt-1 max-w-xl">
              Discover hands-on learning experiences that match your group&apos;s interests.
            </p>
          </div>

          {/* Step Indicator */}
          <div className="flex items-center gap-2 shrink-0">
            <span
              className={`w-7 h-7 rounded-full flex items-center justify-center text-xs font-bold transition-colors ${
                step >= 1 ? "bg-[var(--color-gold-500)] text-[var(--color-green-950)]" : "bg-white/10 text-white/60"
              }`}
            >
              1
            </span>
            <span className="w-4 h-0.5 bg-white/20" />
            <span
              className={`w-7 h-7 rounded-full flex items-center justify-center text-xs font-bold transition-colors ${
                step >= 2 ? "bg-[var(--color-gold-500)] text-[var(--color-green-950)]" : "bg-white/10 text-white/60"
              }`}
            >
              2
            </span>
            <span className="w-4 h-0.5 bg-white/20" />
            <span
              className={`w-7 h-7 rounded-full flex items-center justify-center text-xs font-bold transition-colors ${
                step === 3 ? "bg-[var(--color-gold-500)] text-[var(--color-green-950)]" : "bg-white/10 text-white/60"
              }`}
            >
              3
            </span>
          </div>
        </div>
      </div>

      {/* Step Container */}
      <div className="p-6 sm:p-8">
        {/* ─── Step 1: Select Group ────────────────────────────────────── */}
        {step === 1 && (
          <div>
            <div className="mb-6">
              <span className="text-xs font-bold uppercase tracking-wider text-emerald-700 block mb-1">
                Step 1 of 3
              </span>
              <h3 className="font-display text-xl font-bold text-[var(--color-green-950)]">
                Select Your Participant Group or Grade Band
              </h3>
              <p className="text-xs sm:text-sm text-[var(--color-green-700)] mt-0.5">
                Each farm category adapts activity complexity and safety protocols to the developmental stage of the cohort.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {groupOptions.map((opt) => {
                const isSelected = selectedGroup === opt.id;
                const Icon = opt.icon;
                return (
                  <button
                    key={opt.id}
                    type="button"
                    onClick={() => setSelectedGroup(opt.id)}
                    className={`p-5 rounded-2xl text-left border transition-all cursor-pointer flex flex-col justify-between ${
                      isSelected
                        ? "border-emerald-600 bg-emerald-50/70 shadow-sm ring-2 ring-emerald-500/20"
                        : "border-gray-200 bg-white hover:border-emerald-400 hover:bg-stone-50/50"
                    }`}
                  >
                    <div className="flex items-start justify-between gap-3 mb-2">
                      <div className="flex items-center gap-2.5">
                        <div
                          className={`w-8 h-8 rounded-xl flex items-center justify-center shrink-0 ${
                            isSelected ? "bg-emerald-700 text-white" : "bg-gray-100 text-gray-700"
                          }`}
                        >
                          <Icon size={16} />
                        </div>
                        <div>
                          <h4 className="font-display text-base font-bold text-[var(--color-green-950)]">
                            {opt.label}
                          </h4>
                          <span className="text-[11px] font-semibold text-emerald-800">
                            {opt.gradeBand}
                          </span>
                        </div>
                      </div>
                      <div
                        className={`w-5 h-5 rounded-full flex items-center justify-center border shrink-0 ${
                          isSelected
                            ? "border-emerald-600 bg-emerald-600 text-white"
                            : "border-gray-300 bg-white"
                        }`}
                      >
                        {isSelected && <Check size={12} strokeWidth={3} />}
                      </div>
                    </div>
                    <p className="text-xs text-[var(--color-green-700)] leading-relaxed mt-1">
                      {opt.sublabel}
                    </p>
                  </button>
                );
              })}
            </div>

            <div className="mt-8 flex justify-end">
              <button
                type="button"
                onClick={() => setStep(2)}
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[var(--color-green-950)] text-white font-bold text-xs sm:text-sm hover:bg-emerald-800 transition-colors shadow-sm cursor-pointer"
              >
                <span>Continue to Select Interests</span>
                <ChevronRight size={16} />
              </button>
            </div>
          </div>
        )}

        {/* ─── Step 2: Select Interests ────────────────────────────────── */}
        {step === 2 && (
          <div>
            <div className="mb-6 flex flex-col sm:flex-row sm:items-center justify-between gap-2">
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-emerald-700 block mb-1">
                  Step 2 of 3
                </span>
                <h3 className="font-display text-xl font-bold text-[var(--color-green-950)]">
                  What Topics Interest Your Group Most?
                </h3>
                <p className="text-xs sm:text-sm text-[var(--color-green-700)] mt-0.5">
                  Select one or more topics to help us match the most relevant farm categories.
                </p>
              </div>

              <button
                type="button"
                onClick={() => setStep(1)}
                className="inline-flex items-center gap-1 text-xs font-semibold text-emerald-800 hover:underline self-start sm:self-center"
              >
                <ChevronLeft size={14} />
                <span>Change Group</span>
              </button>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
              {interestOptions.map((opt) => {
                const isSelected = selectedInterests.includes(opt.id);
                return (
                  <button
                    key={opt.id}
                    type="button"
                    onClick={() => toggleInterest(opt.id)}
                    className={`p-4 rounded-2xl text-left border transition-all cursor-pointer flex flex-col justify-between ${
                      isSelected
                        ? "border-emerald-600 bg-emerald-50/80 shadow-xs ring-1 ring-emerald-500/30"
                        : "border-gray-200 bg-white hover:border-gray-300 hover:bg-stone-50"
                    }`}
                  >
                    <div className="flex items-center justify-between gap-2 mb-2">
                      <span
                        className={`w-4 h-4 rounded-md flex items-center justify-center border text-[10px] shrink-0 ${
                          isSelected
                            ? "bg-emerald-600 border-emerald-600 text-white"
                            : "border-gray-300 bg-white"
                        }`}
                      >
                        {isSelected && <Check size={10} strokeWidth={3} />}
                      </span>
                    </div>
                    <span className="font-semibold text-xs sm:text-sm text-[var(--color-green-950)] leading-snug">
                      {opt.label}
                    </span>
                  </button>
                );
              })}
            </div>

            <div className="mt-8 flex items-center justify-between gap-4">
              <button
                type="button"
                onClick={() => setStep(1)}
                className="inline-flex items-center gap-1.5 px-4 py-2.5 rounded-full border border-gray-200 text-xs font-semibold text-gray-700 hover:bg-gray-50 transition-colors"
              >
                <ChevronLeft size={14} />
                <span>Back</span>
              </button>

              <button
                type="button"
                onClick={() => setStep(3)}
                disabled={selectedInterests.length === 0}
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[var(--color-green-950)] text-white font-bold text-xs sm:text-sm hover:bg-emerald-800 transition-colors shadow-sm disabled:opacity-50 cursor-pointer"
              >
                <span>View Recommendations ({selectedInterests.length} Selected)</span>
                <ChevronRight size={16} />
              </button>
            </div>
          </div>
        )}

        {/* ─── Step 3: View Recommendations ───────────────────────────── */}
        {step === 3 && (
          <div>
            <div className="mb-6 flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-gray-100">
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-emerald-700 block mb-1">
                  Step 3 of 3 · Recommended Matches
                </span>
                <h3 className="font-display text-xl sm:text-2xl font-bold text-[var(--color-green-950)]">
                  Experiences Matching Your Cohort
                </h3>
                <p className="text-xs text-[var(--color-green-700)] mt-0.5">
                  Based on {groupOptions.find((g) => g.id === selectedGroup)?.label} and your {selectedInterests.length} selected interests.
                </p>
              </div>

              <div className="flex items-center gap-2">
                <button
                  type="button"
                  onClick={() => setStep(2)}
                  className="inline-flex items-center gap-1 text-xs font-semibold px-3 py-1.5 rounded-lg border border-gray-200 text-gray-700 hover:bg-gray-50 transition-colors"
                >
                  <ChevronLeft size={13} />
                  <span>Edit Interests</span>
                </button>
                <button
                  type="button"
                  onClick={resetFinder}
                  className="inline-flex items-center gap-1 text-xs font-semibold px-3 py-1.5 rounded-lg border border-gray-200 text-gray-700 hover:bg-gray-50 transition-colors"
                >
                  <RotateCcw size={13} />
                  <span>Reset</span>
                </button>
              </div>
            </div>

            {/* Recommended Experiences Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {recommendations.map(({ category, matchReason }) => (
                <div
                  key={category.id}
                  className="card-base rounded-2xl overflow-hidden border border-emerald-900/10 bg-white hover:border-emerald-500/40 shadow-xs flex flex-col justify-between group"
                >
                  <div>
                    {/* Image Snapshot */}
                    <div className="relative aspect-[16/10] w-full overflow-hidden bg-gray-100">
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img
                        src={category.image.src}
                        alt={category.image.alt}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                        loading="lazy"
                      />
                      <div className="absolute top-2.5 left-2.5">
                        <Badge variant={category.badgeVariant}>{category.badge}</Badge>
                      </div>
                    </div>

                    {/* Content */}
                    <div className="p-5">
                      <h4 className="font-display text-lg font-bold text-[var(--color-green-950)] group-hover:text-emerald-700 transition-colors mb-1">
                        {category.title}
                      </h4>
                      <p className="text-xs text-[var(--color-green-700)] italic mb-3">
                        &ldquo;{category.tagline}&rdquo;
                      </p>

                      <div className="p-3 rounded-xl bg-emerald-50/70 border border-emerald-100/80 text-[11px] text-emerald-900 leading-relaxed mb-4">
                        <span className="font-semibold block mb-0.5">Why it fits:</span>
                        {matchReason}
                      </div>

                      <div className="space-y-1.5 mb-2">
                        <span className="text-[10px] font-bold uppercase tracking-wider text-gray-500 block">
                          Key Activity Highlights:
                        </span>
                        {category.activityHighlights.slice(0, 2).map((act) => (
                          <div
                            key={act.title}
                            className="flex items-start gap-1.5 text-xs text-[var(--color-green-800)]"
                          >
                            <span className="text-emerald-600 font-bold">•</span>
                            <span className="font-medium">{act.title}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Actions */}
                  <div className="p-5 pt-0 border-t border-gray-100 flex flex-col gap-2.5 mt-2">
                    {onSelectCategory ? (
                      <button
                        type="button"
                        onClick={() => onSelectCategory(category.slug)}
                        className="w-full text-center py-2 px-3 rounded-xl bg-emerald-50 text-emerald-800 font-bold text-xs hover:bg-emerald-100 transition-colors cursor-pointer"
                      >
                        Explore Experience →
                      </button>
                    ) : (
                      <Link
                        href={`/programs/furaa-farms#${category.slug}`}
                        className="w-full text-center py-2 px-3 rounded-xl bg-emerald-50 text-emerald-800 font-bold text-xs hover:bg-emerald-100 transition-colors"
                      >
                        Explore Experience →
                      </Link>
                    )}

                    <Button
                      href={`/contact?subject=experience-match-${category.slug}`}
                      variant="primary"
                      size="sm"
                      className="w-full justify-center text-xs"
                    >
                      {brand.cta.primary}
                    </Button>
                  </div>
                </div>
              ))}
            </div>

            {/* Curricular Alignment Advisory Footnote */}
            <div className="mt-6 p-3.5 rounded-xl bg-stone-50 border border-stone-200/80 text-[11px] text-[var(--color-green-800)] text-center leading-relaxed">
              <span>
                Note: Suggested experiences are indicative curricular alignments based on grade band and thematic interests. Final activity schedules, seasonal crop stages, and farm facility availability are confirmed in consultation with your school leadership during planning.
              </span>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

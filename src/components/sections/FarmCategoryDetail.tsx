import React from "react";
import Link from "next/link";
import {
  ShieldAlert,
  CheckCircle2,
  Sparkles,
  ArrowRight,
  Info,
  CalendarCheck,
  UserCheck,
} from "lucide-react";
import Badge from "@/components/ui/Badge";
import Button from "@/components/ui/Button";
import type { FarmCategory } from "@/config/furaaFarms";

interface FarmCategoryDetailProps {
  category: FarmCategory;
  index: number;
}

export default function FarmCategoryDetail({
  category,
  index,
}: FarmCategoryDetailProps) {
  const isReversed = index % 2 === 1;

  return (
    <section
      id={category.slug}
      className={`py-16 md:py-24 border-b border-[var(--color-green-100)] transition-colors ${
        index % 2 === 0 ? "bg-white" : "bg-[var(--color-cream)]"
      }`}
      aria-labelledby={`heading-${category.slug}`}
    >
      <div className="container-xl">
        {/* Top Header Strip */}
        <div className="mb-10 max-w-4xl">
          <div className="flex flex-wrap items-center gap-3 mb-3">
            <Badge variant={category.badgeVariant}>{category.badge}</Badge>
            <span className="text-xs uppercase font-bold tracking-wider text-[var(--color-gold-600)]">
              Category 0{index + 1}
            </span>
          </div>

          <h2
            id={`heading-${category.slug}`}
            className="text-display text-3xl sm:text-4xl lg:text-5xl text-[var(--color-green-950)] leading-tight mb-2"
          >
            {category.title}
          </h2>

          <p className="text-base sm:text-lg font-medium text-[var(--color-green-700)] italic">
            &ldquo;{category.tagline}&rdquo;
          </p>
        </div>

        {/* Alternating Content Grid */}
        <div
          className={`grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start ${
            isReversed ? "lg:flex-row-reverse" : ""
          }`}
        >
          {/* Main Copy Column */}
          <div
            className={`flex flex-col gap-8 ${
              isReversed ? "lg:col-span-7 lg:order-2" : "lg:col-span-7 lg:order-1"
            }`}
          >
            {/* Overview Intro */}
            <div className="bg-[var(--color-green-50)]/70 p-6 rounded-2xl border border-[var(--color-green-200)]/60">
              <span className="text-xs font-bold uppercase tracking-wider text-[var(--color-green-800)] mb-1 block">
                Theme: {category.theme}
              </span>
              <p className="text-base text-[var(--color-green-900)] leading-relaxed">
                {category.intro}
              </p>
            </div>

            {/* Educational Objectives */}
            <div>
              <h3 className="font-display text-xl font-bold text-[var(--color-green-950)] mb-4 flex items-center gap-2">
                <Sparkles size={18} className="text-[var(--color-gold-500)]" />
                Educational Objectives
              </h3>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {category.educationalObjectives.map((obj) => (
                  <li
                    key={obj}
                    className="flex items-start gap-2.5 text-xs sm:text-sm text-[var(--color-green-900)] bg-white p-3.5 rounded-xl border border-[var(--color-green-100)] shadow-xs"
                  >
                    <CheckCircle2
                      size={16}
                      className="text-emerald-600 shrink-0 mt-0.5"
                    />
                    <span>{obj}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Activity Highlights */}
            <div>
              <h3 className="font-display text-xl font-bold text-[var(--color-green-950)] mb-4 flex items-center gap-2">
                <CalendarCheck size={18} className="text-[var(--color-green-700)]" />
                Curriculum Activity Highlights
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                {category.activityHighlights.map((act) => (
                  <div
                    key={act.title}
                    className="p-4 rounded-2xl bg-white border border-[var(--color-green-100)] hover:border-[var(--color-green-300)] transition-all shadow-xs flex flex-col justify-between"
                  >
                    <div>
                      <div className="flex items-center justify-between gap-2 mb-1.5">
                        <h4 className="font-semibold text-sm text-[var(--color-green-950)]">
                          {act.title}
                        </h4>
                        <span className="shrink-0 text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-md bg-[var(--color-green-50)] text-[var(--color-green-800)] border border-[var(--color-green-200)]">
                          {act.type}
                        </span>
                      </div>
                      <p className="text-xs text-[var(--color-green-800)]/85 leading-relaxed">
                        {act.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Learning Outcomes */}
            <div>
              <h3 className="font-display text-xl font-bold text-[var(--color-green-950)] mb-4 flex items-center gap-2">
                <UserCheck size={18} className="text-emerald-700" />
                Expected Learning Outcomes
              </h3>
              <div className="bg-white p-5 rounded-2xl border border-[var(--color-green-100)] shadow-xs">
                <ul className="space-y-2.5">
                  {category.learningOutcomes.map((outcome) => (
                    <li
                      key={outcome}
                      className="flex items-start gap-2.5 text-xs sm:text-sm text-[var(--color-green-900)]"
                    >
                      <span className="w-2 h-2 rounded-full bg-emerald-600 shrink-0 mt-1.5" />
                      <span>{outcome}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Safety & Supervision Callout */}
            <div className="p-5 rounded-2xl bg-amber-50/90 border border-amber-200/80">
              <div className="flex items-center gap-2 mb-2 text-amber-950 font-bold text-sm">
                <ShieldAlert size={18} className="text-amber-700" />
                <span>Supervision, Safety, and Age Suitability</span>
              </div>
              <p className="text-xs text-amber-900 mb-3 font-medium">
                {category.ageAppropriateness}
              </p>
              <ul className="space-y-1.5">
                {category.safetyProtocols.map((protocol) => (
                  <li
                    key={protocol}
                    className="flex items-start gap-2 text-xs text-amber-900/90"
                  >
                    <span className="text-amber-700 font-bold">•</span>
                    <span>{protocol}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-3 pt-3 border-t border-amber-200/60 flex items-center gap-1.5 text-[11px] text-amber-800">
                <Info size={13} className="shrink-0" />
                <span>{category.facilityNote}</span>
              </div>
            </div>

            {/* Category CTA Button */}
            <div className="flex flex-wrap items-center gap-4 pt-2">
              <Button
                href={`/contact?subject=demo-${category.slug}`}
                variant="primary"
                size="md"
              >
                Book a Demo for {category.shortTitle}
                <ArrowRight size={16} />
              </Button>
              <Link
                href="/partnership#schools"
                className="text-xs sm:text-sm font-semibold text-[var(--color-green-800)] hover:text-[var(--color-green-950)] underline underline-offset-4 transition-colors"
              >
                Review School Collaboration Models →
              </Link>
            </div>
          </div>

          {/* Sticky Visual Column */}
          <div
            className={`flex flex-col gap-4 lg:sticky lg:top-24 ${
              isReversed ? "lg:col-span-5 lg:order-1" : "lg:col-span-5 lg:order-2"
            }`}
          >
            {/* Primary Featured Image Card */}
            <div className="relative rounded-3xl overflow-hidden shadow-xl border border-[var(--color-green-200)] bg-[var(--color-green-950)] group">
              <div className="relative aspect-[4/3] w-full overflow-hidden">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={category.image.src}
                  alt={category.image.alt}
                  style={{ objectPosition: category.image.objectPosition || "center" }}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  loading="lazy"
                />
                <div className="absolute top-4 left-4">
                  <Badge variant={category.badgeVariant}>
                    {category.image.badge}
                  </Badge>
                </div>
              </div>
              <div className="p-5 bg-gradient-to-t from-[var(--color-green-950)] to-[var(--color-green-900)] text-white">
                <span className="text-xs uppercase font-bold tracking-wider text-[var(--color-gold-400)] block mb-1">
                  Field Experience Snapshot
                </span>
                <p className="text-xs sm:text-sm text-[var(--color-green-100)]/90 leading-relaxed">
                  {category.image.caption}
                </p>
              </div>
            </div>

            {/* Category Quick Facts Pill Box */}
            <div className="bg-white p-5 rounded-2xl border border-[var(--color-green-100)] shadow-xs">
              <h4 className="text-xs font-bold uppercase tracking-wider text-[var(--color-green-800)] mb-3">
                Key Category Parameters
              </h4>
              <dl className="grid grid-cols-2 gap-3 text-xs">
                <div className="p-2.5 rounded-xl bg-[var(--color-green-50)]">
                  <dt className="text-[var(--color-green-700)] font-medium mb-0.5">Focus</dt>
                  <dd className="font-bold text-[var(--color-green-950)]">{category.shortTitle}</dd>
                </div>
                <div className="p-2.5 rounded-xl bg-[var(--color-green-50)]">
                  <dt className="text-[var(--color-green-700)] font-medium mb-0.5">Ratio</dt>
                  <dd className="font-bold text-[var(--color-green-950)]">1:8 Mentor Ratio</dd>
                </div>
                <div className="p-2.5 rounded-xl bg-[var(--color-green-50)]">
                  <dt className="text-[var(--color-green-700)] font-medium mb-0.5">Setting</dt>
                  <dd className="font-bold text-[var(--color-green-950)]">Outdoor and Shaded</dd>
                </div>
                <div className="p-2.5 rounded-xl bg-[var(--color-green-50)]">
                  <dt className="text-[var(--color-green-700)] font-medium mb-0.5">Verification</dt>
                  <dd className="font-bold text-[var(--color-green-950)]">Safety Certified</dd>
                </div>
              </dl>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

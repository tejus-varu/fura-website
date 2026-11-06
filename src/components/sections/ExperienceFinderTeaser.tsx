"use client";

import React from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import SectionHeader from "@/components/ui/SectionHeader";
import ExperienceFinder from "@/components/sections/ExperienceFinder";

export default function ExperienceFinderTeaser() {
  return (
    <section
      id="experience-finder"
      className="section-pad bg-gradient-to-b from-white via-[var(--color-cream)]/60 to-white border-t border-[var(--color-green-100)]"
      aria-label="Find Your FURAA Experience"
    >
      <div className="container-xl">
        <SectionHeader
          badge="Interactive Discovery"
          badgeVariant="gold"
          title="Which FURAA Experience Fits Your School?"
          subtitle="Use our interactive curriculum matcher to discover the farm environments best aligned to your students' grade level and educational goals."
        />

        <div className="mt-10 max-w-5xl mx-auto">
          <ExperienceFinder compact={true} />
        </div>

        <div className="mt-8 text-center">
          <Link
            href="/programs/furaa-farms"
            className="inline-flex items-center gap-2 text-xs sm:text-sm font-bold text-emerald-800 hover:text-emerald-950 transition-colors underline underline-offset-4"
          >
            <span>Or explore all 10 farm categories on the dedicated FURAA Farms page</span>
            <ArrowRight size={14} />
          </Link>
        </div>
      </div>
    </section>
  );
}

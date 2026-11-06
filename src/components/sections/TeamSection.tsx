"use client";

import React, { useState, useEffect, useRef } from "react";
import {
  teamHeading,
  teamIntroduction,
  teamMembers,
  howWeWorkTogether,
} from "@/config/team";
import ProfileCard from "@/components/ui/ProfileCard";
import SectionHeader from "@/components/ui/SectionHeader";
import {
  ChevronDown,
  ShieldCheck,
  BookOpen,
  TrendingUp,
  Sprout,
  Network,
  Users,
} from "lucide-react";

export default function TeamSection() {
  const [isAccordionOpen, setIsAccordionOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  // Restrained scroll entrance triggered once
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0]?.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.15 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const disciplineIcons = {
    "work-agri-learning": BookOpen,
    "work-strategy-outreach": TrendingUp,
    "work-tech-guidance": Sprout,
    "work-tech-partnerships": Network,
  };

  return (
    <section
      ref={sectionRef}
      id="people-behind-furaa"
      className="section-pad bg-white border-b border-[var(--color-green-100)] scroll-mt-24"
      aria-labelledby="team-section-heading"
    >
      <div className="container-xl">
        {/* ─── Section Header ───────────────────────────────────────── */}
        <div
          className={`transition-all duration-700 ease-out motion-reduce:transition-none motion-reduce:transform-none ${
            isVisible
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-4"
          }`}
        >
          <SectionHeader
            badge="Leadership &amp; Advisory"
            title={teamHeading}
            subtitle={teamIntroduction}
          />
        </div>

        {/* ─── 4-Column Responsive Grid ─────────────────────────────── */}
        <div
          className={`grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-12 transition-all duration-700 delay-150 ease-out motion-reduce:transition-none motion-reduce:transform-none ${
            isVisible
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-6"
          }`}
        >
          {teamMembers.map((member) => (
            <ProfileCard key={member.id} member={member} />
          ))}
        </div>

        {/* ─── Compact "How We Work Together" Accordion ────────────── */}
        <div className="mt-10 max-w-4xl mx-auto">
          <div className="rounded-3xl border border-[var(--color-green-100)] bg-[var(--color-cream)] overflow-hidden shadow-xs transition-colors hover:border-emerald-500/40">
            {/* Accordion Trigger Header */}
            <button
              type="button"
              id="accordion-trigger-how-we-work"
              onClick={() => setIsAccordionOpen(!isAccordionOpen)}
              aria-expanded={isAccordionOpen}
              aria-controls="how-we-work-together-panel"
              className="w-full flex items-center justify-between p-4 sm:p-5 text-left cursor-pointer transition-colors duration-200 hover:bg-emerald-50/50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-600/50"
            >
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-2xl bg-emerald-800 text-white flex items-center justify-center shrink-0 shadow-xs">
                  <Users size={18} />
                </div>
                <div>
                  <h4 className="font-display text-sm sm:text-base font-bold text-[var(--color-green-950)] leading-tight">
                    How We Work Together
                  </h4>
                  <p className="text-xs text-[var(--color-green-700)] mt-0.5">
                    Multidisciplinary collaboration connecting education, strategy, agronomy, and technology.
                  </p>
                </div>
              </div>

              <div
                className={`w-8 h-8 rounded-full border border-emerald-900/10 flex items-center justify-center text-emerald-800 shrink-0 transition-transform duration-250 ease-out ${
                  isAccordionOpen ? "rotate-180 bg-emerald-100" : "bg-white"
                }`}
                aria-hidden="true"
              >
                <ChevronDown size={16} />
              </div>
            </button>

            {/* Accordion Collapsible Panel */}
            <div
              id="how-we-work-together-panel"
              role="region"
              aria-labelledby="accordion-trigger-how-we-work"
              className={`transition-all duration-300 ease-out overflow-hidden ${
                isAccordionOpen
                  ? "max-h-[600px] opacity-100 border-t border-emerald-900/10"
                  : "max-h-0 opacity-0 pointer-events-none"
              }`}
            >
              <div className="p-5 sm:p-6 bg-white/70">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {howWeWorkTogether.map((item) => {
                    const IconComponent =
                      disciplineIcons[
                        item.id as keyof typeof disciplineIcons
                      ] || Sprout;

                    return (
                      <div
                        key={item.id}
                        className="p-4 rounded-2xl bg-white border border-[var(--color-green-100)] flex items-start gap-3.5 hover:border-emerald-300/60 transition-colors duration-200"
                      >
                        <div className="w-8 h-8 rounded-xl bg-emerald-50 text-emerald-800 flex items-center justify-center shrink-0 mt-0.5">
                          <IconComponent size={16} />
                        </div>
                        <div>
                          <span className="text-[11px] font-bold uppercase tracking-wider text-emerald-800 block mb-0.5">
                            {item.discipline}
                          </span>
                          <p className="text-xs sm:text-sm font-semibold text-[var(--color-green-950)] leading-snug">
                            {item.summary}
                          </p>
                          <p className="text-xs text-[var(--color-green-700)] mt-1 leading-relaxed">
                            {item.description}
                          </p>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* ─── Operational Planning Assurance Footnote ──────────────── */}
        <div className="mt-8 p-4 sm:p-5 rounded-2xl bg-[var(--color-cream)] border border-emerald-900/10 max-w-3xl mx-auto flex items-center justify-center gap-3 text-xs text-[var(--color-green-800)] text-center">
          <ShieldCheck size={16} className="text-emerald-700 shrink-0" />
          <span>
            All field sessions are facilitated by educators trained in age-appropriate outdoor pedagogy and proactive student care.
          </span>
        </div>
      </div>
    </section>
  );
}

"use client";

import { useState } from "react";
import SectionHeader from "@/components/ui/SectionHeader";
import { CLASS_BANDS, classBandLabels, classBandDescriptions, programs } from "@/config/programs";
import type { ClassBand } from "@/types";
import { ArrowRight } from "lucide-react";
import * as Icons from "lucide-react";
import type { LucideIcon } from "lucide-react";

function getIcon(name: string): LucideIcon {
  return (Icons as unknown as Record<string, LucideIcon>)[name] ?? Icons.Circle;
}

export default function ClassBandSection() {
  const [active, setActive] = useState<ClassBand>("1-4");

  const filtered = programs.filter((p) => p.classBands.includes(active));

  return (
    <section
      id="class-bands"
      className="section-pad"
      style={{
        background: "linear-gradient(180deg, var(--color-cream) 0%, var(--color-earth) 100%)",
      }}
      aria-label="Programs by class band"
    >
      <div className="container-xl">
        <SectionHeader
          badge="Age-Appropriate Learning"
          badgeVariant="green"
          title="Programs Designed for Every Age Group"
          subtitle="Activity depth and content complexity scale with student maturity — from sensory discovery for Foundation (Classes 1–4) to applied agricultural science for Specialization (Classes 9–10)."
        />

        {/* Tab switcher */}
        <div
          className="flex flex-wrap gap-2 mb-10 p-1.5 rounded-2xl w-fit mx-auto"
          style={{ background: "var(--color-green-100)" }}
          role="tablist"
          aria-label="Class bands"
        >
          {CLASS_BANDS.map((band) => (
            <button
              key={band}
              role="tab"
              aria-selected={active === band}
              onClick={() => setActive(band)}
              className="px-6 py-2.5 rounded-xl text-sm font-semibold transition-all duration-200"
              style={
                active === band
                  ? {
                      background: "var(--color-green-700)",
                      color: "white",
                      boxShadow: "0 2px 10px rgba(45,106,53,0.3)",
                    }
                  : {
                      background: "transparent",
                      color: "var(--color-green-700)",
                    }
              }
            >
              {classBandLabels[band]}
            </button>
          ))}
        </div>

        {/* Description */}
        <p
          className="text-center text-sm max-w-xl mx-auto mb-10 leading-relaxed"
          style={{ color: "var(--color-green-700)" }}
        >
          {classBandDescriptions[active]}
        </p>

        {/* Program grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {filtered.map((program) => {
            const Icon = getIcon(program.icon);
            return (
              <div
                key={program.id}
                className="card-base p-6 flex flex-col gap-4"
              >
                <div className="flex items-start justify-between gap-3">
                  <div
                    className="w-11 h-11 rounded-xl flex items-center justify-center shrink-0"
                    style={{ background: "var(--color-green-100)" }}
                  >
                    <Icon size={20} style={{ color: "var(--color-green-700)" }} />
                  </div>
                  <span
                    className="badge-pill text-xs shrink-0"
                    style={{
                      background: "var(--color-earth)",
                      color: "var(--color-brown-700)",
                      border: "1px solid var(--color-parchment)",
                    }}
                  >
                    {program.category}
                  </span>
                </div>
                <div>
                  <h3
                    className="font-display text-base font-semibold mb-2"
                    style={{ color: "var(--color-green-900)" }}
                  >
                    {program.title}
                  </h3>
                  <p
                    className="text-sm leading-relaxed"
                    style={{ color: "var(--color-green-700)" }}
                  >
                    {program.description}
                  </p>
                </div>
                <ul className="flex flex-col gap-2 mt-auto pt-3 border-t border-gray-100">
                  {program.highlights.slice(0, 2).map((h) => (
                    <li
                      key={h}
                      className="flex items-center gap-2 text-xs"
                      style={{ color: "var(--color-green-600)" }}
                    >
                      <ArrowRight size={10} />
                      {h}
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

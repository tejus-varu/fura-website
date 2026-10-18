"use client";

import Link from "next/link";
import { Sprout, Compass, Cpu, ArrowRight, CheckCircle2 } from "lucide-react";
import SectionHeader from "@/components/ui/SectionHeader";
import Badge from "@/components/ui/Badge";

interface ModuleCardData {
  id: string;
  name: string;
  classRange: string;
  badgeVariant: "green" | "gold" | "brown" | "sky" | "orange";
  icon: typeof Sprout;
  overview: string;
  highlights: string[];
  href: string;
  imageBg: string;
}

const moduleCards: ModuleCardData[] = [
  {
    id: "foundation",
    name: "Foundation Module",
    classRange: "Classes 1–4",
    badgeVariant: "green",
    icon: Sprout,
    overview:
      "Early nature discovery, sensory experiences, basic farming, storytelling, rural games and creative learning.",
    highlights: [
      "Tactile seed sowing and gentle plant care",
      "Guided nature trails and sensory exploration",
      "Folk storytelling, clay play and leaf art",
    ],
    href: "/modules/foundation",
    imageBg: "linear-gradient(135deg, rgba(46,125,50,0.12) 0%, rgba(127,191,63,0.18) 100%)",
  },
  {
    id: "exploration",
    name: "Exploration Module",
    classRange: "Classes 5–8",
    badgeVariant: "gold",
    icon: Compass,
    overview:
      "Agricultural experimentation, cultivation, biodiversity, horticulture, sustainability and collaborative learning.",
    highlights: [
      "Soil science, composting and raised-bed cultivation",
      "Introduction to hydroponics and resource cycles",
      "Collaborative team plots and Warli folk art",
    ],
    href: "/modules/exploration",
    imageBg: "linear-gradient(135deg, rgba(201,149,42,0.12) 0%, rgba(240,168,112,0.18) 100%)",
  },
  {
    id: "specialization",
    name: "Specialization Module",
    classRange: "Classes 9–10",
    badgeVariant: "brown",
    icon: Cpu,
    overview:
      "Applied agricultural science, hydroponics, innovation, ecological analysis and research-oriented projects.",
    highlights: [
      "Advanced hydroponic labs and nutrient chemistry",
      "Urban terrace micro-farm engineering",
      "Data-driven biodiversity transects and research",
    ],
    href: "/modules/specialization",
    imageBg: "linear-gradient(135deg, rgba(26,61,31,0.15) 0%, rgba(91,157,184,0.18) 100%)",
  },
];

export default function LearningModulesSection() {
  return (
    <section
      id="learning-modules"
      className="section-pad border-t"
      style={{
        background: "var(--color-cream)",
        borderColor: "var(--color-earth)",
      }}
      aria-label="FURAA Learning Modules"
    >
      <div className="container-xl">
        <SectionHeader
          badge="Curriculum Framework"
          badgeVariant="green"
          title="FURAA Learning Modules"
          subtitle="Age-appropriate learning journeys designed to nurture curiosity, practical knowledge and environmental responsibility."
        />

        {/* Three Module Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {moduleCards.map((card) => {
            const Icon = card.icon;
            return (
              <div
                key={card.id}
                className="card-base p-7 md:p-8 bg-white flex flex-col justify-between border border-emerald-900/10 shadow-sm transition-all duration-300 hover:-translate-y-1.5 hover:shadow-xl group"
              >
                <div>
                  {/* Visual Header Slot */}
                  <div
                    className="w-full h-36 rounded-2xl mb-6 p-5 flex flex-col justify-between relative overflow-hidden transition-transform duration-300 group-hover:scale-[1.02]"
                    style={{ background: card.imageBg }}
                  >
                    <div className="flex items-center justify-between">
                      <div
                        className="w-12 h-12 rounded-xl bg-white shadow-sm flex items-center justify-center shrink-0"
                        style={{ color: "var(--color-green-800)" }}
                      >
                        <Icon size={24} />
                      </div>
                      <Badge variant={card.badgeVariant}>{card.classRange}</Badge>
                    </div>
                    <div className="text-xs font-semibold uppercase tracking-wider text-[var(--color-green-900)] opacity-80">
                      Module Stage {card.id === "foundation" ? "01" : card.id === "exploration" ? "02" : "03"}
                    </div>
                  </div>

                  {/* Title & Overview */}
                  <div className="mb-6">
                    <h3 className="font-display text-xl font-bold mb-2 text-[var(--color-green-900)]">
                      {card.name}
                    </h3>
                    <p className="text-sm text-[var(--color-green-700)] leading-relaxed">
                      {card.overview}
                    </p>
                  </div>

                  {/* Three Key Highlights */}
                  <div className="mb-6 pt-4 border-t border-gray-100">
                    <p className="text-xs font-bold uppercase tracking-wider text-[var(--color-gold-600)] mb-3">
                      Key Learning Highlights:
                    </p>
                    <ul className="flex flex-col gap-2.5">
                      {card.highlights.map((item, idx) => (
                        <li
                          key={idx}
                          className="flex items-start gap-2.5 text-xs text-[var(--color-green-800)]"
                        >
                          <CheckCircle2
                            size={14}
                            className="text-emerald-600 shrink-0 mt-0.5"
                          />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Footer Action */}
                <div className="pt-4 border-t border-gray-100 mt-2">
                  <Link
                    href={card.href}
                    className="w-full inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl text-sm font-semibold transition-all duration-200 bg-[var(--color-green-50)] text-[var(--color-green-900)] hover:bg-[var(--color-green-700)] hover:text-white group-hover:bg-[var(--color-green-700)] group-hover:text-white"
                  >
                    <span>Explore {card.name.replace(" Module", "")}</span>
                    <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
                  </Link>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

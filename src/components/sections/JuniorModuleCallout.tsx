"use client";

import { Leaf, Palette, UserCheck, ShieldCheck } from "lucide-react";
import Badge from "@/components/ui/Badge";
import Button from "@/components/ui/Button";

const juniorFeatures = [
  {
    icon: Leaf,
    title: "Sensory Nature Experience",
    description: "Seed sowing, gentle plant observation, and safe, supervised garden walks to build early tactile connection.",
  },
  {
    icon: Palette,
    title: "Play and Creativity",
    description: "Nature storytelling, basic folk games, and simple clay or leaf-print art projects without sharp tools.",
  },
  {
    icon: UserCheck,
    title: "Early Food Awareness",
    description: "Gentle introductions to where food comes from, natural welcome drinks, and healthy food habits.",
  },
  {
    icon: ShieldCheck,
    title: "Dedicated Safe Environment",
    description: "Shorter duration, higher mentor-to-student ratios (1:8), and completely isolated soft green zones.",
  },
];

export default function JuniorModuleCallout() {
  return (
    <section
      id="junior-module"
      className="section-pad border-t"
      style={{
        background: "var(--color-cream)",
        borderColor: "var(--color-earth)",
      }}
      aria-label="Foundation Module for Classes 1 to 4"
    >
      <div className="container-xl">
        <div
          className="rounded-3xl p-8 lg:p-12"
          style={{
            background: "linear-gradient(135deg, var(--color-green-100) 0%, var(--color-sky-100) 100%)",
            border: "1px solid var(--color-green-200)",
          }}
        >
          <div className="flex flex-col lg:flex-row gap-12 items-center">
            {/* Left side text */}
            <div className="lg:w-1/2 flex flex-col items-start gap-5">
              <Badge variant="green">Foundation Module · Classes 1–4</Badge>
              <h2 className="text-h2" style={{ color: "var(--color-green-900)" }}>
                Early Nature and Sensory Discovery
              </h2>
              <p
                className="text-base leading-relaxed"
                style={{ color: "var(--color-green-800)" }}
              >
                For our youngest learners in Classes 1–4, our Foundation Module focuses
                entirely on sensory discovery, tactile farm learning, folk play, and gentle
                habit-building in high-supervision, child-safe zones.
              </p>
              <div className="flex flex-wrap gap-3 mt-2">
                <Button href="/modules/foundation" variant="primary" size="md">
                  Explore Foundation Module (Classes 1–4)
                </Button>
                <Button href="/modules/exploration" variant="outline" size="md" className="bg-white">
                  Classes 5–8 Module
                </Button>
              </div>
            </div>

            {/* Right side features */}
            <div className="lg:w-1/2 grid grid-cols-1 sm:grid-cols-2 gap-5 w-full">
              {juniorFeatures.map((feature) => (
                <div key={feature.title} className="card-base p-5 flex flex-col gap-3" style={{ background: "white" }}>
                  <div
                    className="w-10 h-10 rounded-xl flex items-center justify-center shrink-0"
                    style={{ background: "var(--color-green-50)" }}
                  >
                    <feature.icon size={18} style={{ color: "var(--color-green-700)" }} />
                  </div>
                  <div>
                    <h3 className="font-display text-sm font-semibold mb-1" style={{ color: "var(--color-green-900)" }}>{feature.title}</h3>
                    <p className="text-xs leading-relaxed" style={{ color: "var(--color-green-700)" }}>{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

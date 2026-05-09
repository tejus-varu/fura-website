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
    title: "Play & Creativity",
    description: "Nature storytelling, basic folk games, and simple clay or leaf-print art projects.",
  },
  {
    icon: UserCheck,
    title: "Early Food Awareness",
    description: "Gentle introductions to where food comes from and why healthy eating matters.",
  },
  {
    icon: ShieldCheck,
    title: "Ultra-Safe Environment",
    description: "Shorter duration, higher mentor-to-student ratios, and completely isolated safe zones.",
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
      aria-label="Junior Nature Module"
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
              <Badge variant="sky">Integrated for Classes 1–10</Badge>
              <h2 className="text-h2" style={{ color: "var(--color-green-900)" }}>
                Junior Nature Module
              </h2>
              <p
                className="text-base leading-relaxed"
                style={{ color: "var(--color-green-800)" }}
              >
                We offer a specially designed, lighter program for younger students (Classes 1–3).
                It is seamlessly integrated with our main modules, focusing entirely
                on sensory play, safety, and early introduction to the natural world.
              </p>
              <Button href="/junior-module" variant="outline" size="md" className="mt-2 bg-white">
                Learn About the Junior Module
              </Button>
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

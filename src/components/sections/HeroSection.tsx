"use client";

import { ArrowRight, CalendarCheck, Users, Palette, Sprout, TreePine } from "lucide-react";
import { brand } from "@/config/brand";
import Button from "@/components/ui/Button";

const pillars = [
  { icon: Sprout, label: "Agriculture & Organic Farming" },
  { icon: Palette, label: "Folk Arts & Rural Culture" },
  { icon: TreePine, label: "Nature & Ecology" },
];

export default function HeroSection() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center gradient-hero overflow-hidden"
      aria-label="Hero"
    >
      {/* Subtle dot-grid background texture */}
      <div
        className="absolute inset-0 opacity-[0.07]"
        style={{
          backgroundImage: `radial-gradient(circle, #fff 1px, transparent 1px)`,
          backgroundSize: "32px 32px",
        }}
      />

      {/* Decorative warm orbs */}
      <div
        className="absolute top-1/3 right-10 w-72 h-72 rounded-full opacity-25 blur-3xl pointer-events-none"
        style={{ background: "var(--color-gold-500)" }}
      />
      <div
        className="absolute -bottom-16 -left-16 w-80 h-80 rounded-full opacity-15 blur-3xl pointer-events-none"
        style={{ background: "var(--color-orange-500)" }}
      />

      <div className="container-xl relative z-10 pt-28 pb-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">
          {/* ── Left: copy ── */}
          <div className="flex flex-col gap-6">
            {/* Eyebrow badge */}
            <div>
              <span
                className="badge-pill"
                style={{
                  color: "var(--color-gold-300)",
                  border: "1px solid rgba(201,149,42,0.4)",
                  background: "rgba(201,149,42,0.12)",
                }}
              >
                Experiential School Education Program
              </span>
            </div>

            {/* Headline */}
            <h1 className="text-display text-white">
              Where{" "}
              <span style={{ color: "var(--color-gold-500)" }}>
                Agriculture, Art
              </span>{" "}
              &amp; Nature Shape Young Minds
            </h1>

            {/* Sub-headline */}
            <p
              className="text-lg leading-relaxed max-w-xl"
              style={{ color: "var(--color-green-200)" }}
            >
              {brand.name} brings schools a structured experiential learning
              program that combines hands-on farming, folk arts, rural culture,
              and healthy food awareness — helping students grow roots, develop
              curiosity, and build life skills beyond the classroom.
            </p>

            {/* Three-pillar trust strip */}
            <div className="flex flex-wrap gap-5 text-sm font-medium" style={{ color: "var(--color-green-300)" }}>
              {pillars.map(({ icon: Icon, label }) => (
                <span key={label} className="flex items-center gap-2">
                  <Icon size={15} style={{ color: "var(--color-gold-400)" }} />
                  {label}
                </span>
              ))}
            </div>

            {/* Key logistics */}
            <div className="flex flex-wrap gap-6 text-sm" style={{ color: "var(--color-green-300)" }}>
              <span className="flex items-center gap-2">
                <CalendarCheck size={14} style={{ color: "var(--color-gold-500)" }} />
                Classroom theory + Hands-on farm practice
              </span>
              <span className="flex items-center gap-2">
                <Users size={14} style={{ color: "var(--color-gold-500)" }} />
                Class 1 to Class 10
              </span>
            </div>

            {/* CTAs */}
            <div className="flex flex-wrap gap-4 mt-2">
              <Button href="/contact" variant="primary" size="lg">
                Book a School Partnership Demo
                <ArrowRight size={18} />
              </Button>
              <Button
                href="/programs"
                variant="outline"
                size="lg"
                className="!border-white/30 !text-white hover:!bg-white/10"
              >
                Explore Programs
              </Button>
            </div>
          </div>

          {/* ── Right: image placeholder ── */}
          <div className="relative hidden lg:flex flex-col gap-5">
            {/* Main placeholder */}
            <div
              className="w-full rounded-3xl img-placeholder shadow-hero"
              style={{ minHeight: "420px", aspectRatio: "4/3" }}
              role="img"
              aria-label={`Students participating in supervised agriculture, folk art, rural games, and nature-based learning activities at a ${brand.shortName} program farm site`}
            >
              <div className="flex flex-col items-center gap-3 opacity-50">
                <div
                  className="w-16 h-16 rounded-full flex items-center justify-center"
                  style={{ background: "var(--color-green-200)" }}
                >
                  <TreePine size={28} style={{ color: "var(--color-green-700)" }} />
                </div>
                <div className="text-center">
                  <p className="text-sm font-semibold" style={{ color: "var(--color-green-700)" }}>
                    Hero Image Placeholder
                  </p>
                  <p className="text-xs mt-1" style={{ color: "var(--color-green-600)" }}>
                    Agriculture · Folk Art · Nature Learning
                  </p>
                </div>
              </div>
            </div>

            {/* Floating stat — Students */}
            <div
              className="absolute -bottom-5 -left-6 card-base px-5 py-4 flex items-center gap-3"
            >
              <div
                className="w-10 h-10 rounded-xl flex items-center justify-center shrink-0"
                style={{ background: "var(--color-green-100)" }}
              >
                <Users size={18} style={{ color: "var(--color-green-700)" }} />
              </div>
              <div>
                <p
                  className="text-xl font-bold font-display"
                  style={{ color: "var(--color-green-900)" }}
                >
                  1,200+
                </p>
                <p className="text-xs font-medium" style={{ color: "var(--color-green-500)" }}>
                  Students Engaged
                </p>
              </div>
            </div>

            {/* Floating stat — Programs */}
            <div
              className="absolute -top-4 -right-4 card-base px-5 py-4 flex items-center gap-3"
            >
              <div
                className="w-10 h-10 rounded-xl flex items-center justify-center shrink-0"
                style={{ background: "var(--color-gold-100)" }}
              >
                <CalendarCheck size={18} style={{ color: "var(--color-gold-700)" }} />
              </div>
              <div>
                <p
                  className="text-xl font-bold font-display"
                  style={{ color: "var(--color-green-900)" }}
                >
                  20+
                </p>
                <p className="text-xs font-medium" style={{ color: "var(--color-green-500)" }}>
                  School Programs
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom fade to cream */}
      <div
        className="absolute bottom-0 left-0 right-0 h-20 pointer-events-none"
        style={{
          background:
            "linear-gradient(to bottom, transparent, var(--color-cream))",
        }}
      />
    </section>
  );
}

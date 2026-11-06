"use client";

import React, { useState } from "react";
import { ArrowRight } from "lucide-react";
import PageHero from "@/components/layout/PageHero";
import SectionHeader from "@/components/ui/SectionHeader";
import Button from "@/components/ui/Button";
import { furaaFarmCategories } from "@/config/furaaFarms";
import FarmCategoryNav from "@/components/sections/FarmCategoryNav";
import FarmCategoryDetail from "@/components/sections/FarmCategoryDetail";

export default function FuraaFarmsView() {
  const [activeFilter, setActiveFilter] = useState<string>("all");

  const filteredCategories =
    activeFilter === "all"
      ? furaaFarmCategories
      : furaaFarmCategories.filter((c) => c.slug === activeFilter);

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
      >
        <div className="flex flex-wrap items-center justify-center gap-4 mt-6">
          <Button href="/contact" variant="primary" size="lg">
            Book a School Demo
            <ArrowRight size={18} />
          </Button>
          <Button href="#rural-farms" variant="secondary" size="lg">
            Explore All 10 Experiences
          </Button>
        </div>
      </PageHero>

      {/* ─── Category Quick Nav & Interactive Filter ─────────────────── */}
      <FarmCategoryNav
        categories={furaaFarmCategories}
        activeFilter={activeFilter}
        onSelectFilter={(slug) => {
          setActiveFilter(slug);
          if (slug !== "all") {
            const el = document.getElementById(slug);
            if (el) {
              el.scrollIntoView({ behavior: "smooth" });
            }
          }
        }}
      />

      {/* ─── The Ten Alternating Farm Category Sections ─────────────── */}
      <div className="flex flex-col">
        {filteredCategories.map((category, index) => (
          <FarmCategoryDetail
            key={category.id}
            category={category}
            index={index}
          />
        ))}
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
                  <th className="py-4 px-4 bg-[var(--color-cream)] rounded-tl-xl">Farm Experience</th>
                  <th className="py-4 px-4 bg-[var(--color-cream)]">Foundation (Classes 1–4)</th>
                  <th className="py-4 px-4 bg-[var(--color-cream)]">Exploration (Classes 5–8)</th>
                  <th className="py-4 px-4 bg-[var(--color-cream)] rounded-tr-xl">Specialization (Classes 9–10)</th>
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
                    FURAA Urban & Terrace Gardens
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
                    FURAA Farm Machinery & Precision Agri
                  </td>
                  <td className="py-4 px-4">Tractor walkthroughs, tool classification</td>
                  <td className="py-4 px-4">Mechanical transplanters, water drone flight demos</td>
                  <td className="py-4 px-4">Telemetry sensors, robotics, agricultural engineering</td>
                </tr>
                <tr>
                  <td className="py-4 px-4 font-bold text-[var(--color-green-950)] bg-white">
                    FURAA Wellness & Adventure Centre
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
              Book a School Demo
            </Button>
            <Button href="/partnership" variant="outline" size="lg" className="border-white/30 text-white hover:bg-white/10">
              Our Partners
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}

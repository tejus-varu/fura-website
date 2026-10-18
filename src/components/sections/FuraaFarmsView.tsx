"use client";

import React, { useState } from "react";
import { ShieldCheck, ArrowRight, CheckCircle2 } from "lucide-react";
import PageHero from "@/components/layout/PageHero";
import SectionHeader from "@/components/ui/SectionHeader";
import Badge from "@/components/ui/Badge";
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
        description="Five distinct living farm categories designed to turn classroom biology, ecology, and heritage into hands-on discovery across Classes 1–10."
        bgImage="/images/hero/NAD06383.JPG"
        bgPosition="center 35%"
      >
        <div className="flex flex-wrap items-center justify-center gap-4 mt-6">
          <Button href="/contact" variant="primary" size="lg">
            Book a School Demo
            <ArrowRight size={18} />
          </Button>
          <Button href="/programs" variant="secondary" size="lg">
            View Curriculum Overview
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

      {/* ─── The Five Alternating Farm Category Sections ─────────────── */}
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
            <table className="w-full text-left border-collapse min-w-[640px]">
              <thead>
                <tr className="border-b-2 border-[var(--color-green-200)] text-xs uppercase font-bold text-[var(--color-green-900)]">
                  <th className="py-4 px-4 bg-[var(--color-cream)] rounded-tl-xl">Farm Category</th>
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
                  <td className="py-4 px-4">Mud play, seed sowing, folk storytelling</td>
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
                  <td className="py-4 px-4">Microgreens sprouting, rainbow meal charts</td>
                  <td className="py-4 px-4">Millet harvesting, fireless cooking, seed saving</td>
                  <td className="py-4 px-4">Nutrient chemistry, dietary metabolism, food sovereignty</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* ─── Safety and Operational Standards Banner ──────────────────── */}
      <section className="section-pad bg-[var(--color-cream)] border-t border-[var(--color-green-100)]">
        <div className="container-xl max-w-5xl mx-auto">
          <div className="bg-white p-8 md:p-12 rounded-3xl border border-[var(--color-green-200)] shadow-md">
            <div className="flex flex-col md:flex-row gap-8 items-start">
              <div className="w-14 h-14 rounded-2xl bg-emerald-100 text-emerald-800 flex items-center justify-center shrink-0">
                <ShieldCheck size={32} />
              </div>
              <div className="flex flex-col gap-3">
                <Badge variant="green">Safety First Standard</Badge>
                <h3 className="font-display text-2xl md:text-3xl font-bold text-[var(--color-green-950)]">
                  Rigorous Operational Protocols Across All Farm Centers
                </h3>
                <p className="text-sm md:text-base text-[var(--color-green-800)]/85 leading-relaxed">
                  Every activity across our five farm categories is structured under strict mentor-to-student supervision (1:8), verified safety boundaries, shaded hydration stops, and on-site first-aid readiness. High-risk activities like beekeeping, cane crushing, and livestock milking are conducted exclusively as supervised or mentor-led demonstrations.
                </p>
                <div className="flex flex-wrap gap-4 pt-2 text-xs font-semibold text-[var(--color-green-900)]">
                  <span className="flex items-center gap-1.5">
                    <CheckCircle2 size={15} className="text-emerald-600" />
                    Verified Partner Facilities
                  </span>
                  <span className="flex items-center gap-1.5">
                    <CheckCircle2 size={15} className="text-emerald-600" />
                    Certified Agrarian Facilitators
                  </span>
                  <span className="flex items-center gap-1.5">
                    <CheckCircle2 size={15} className="text-emerald-600" />
                    Gate-to-Gate Transport Oversight
                  </span>
                </div>
              </div>
            </div>
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
            <Button href="/partnership#schools" variant="outline" size="lg" className="border-white/30 text-white hover:bg-white/10">
              Review Partnership Guide
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}

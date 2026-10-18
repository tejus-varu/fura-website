import { Metadata } from "next";
import { brand } from "@/config/brand";
import PageHero from "@/components/layout/PageHero";
import FeatureGrid from "@/components/ui/FeatureGrid";
import ProcessTimeline from "@/components/ui/ProcessTimeline";
import SafetyChecklist from "@/components/ui/SafetyChecklist";
import CtaBlock from "@/components/ui/CtaBlock";
import ImagePlaceholder from "@/components/ui/ImagePlaceholder";
import { siteImages } from "@/config/images";
import { Sprout, Droplets, Palette, Wheat, Users, FlaskConical, Sparkles } from "lucide-react";

export const metadata: Metadata = {
  title: `Exploration Module (Classes 5–8) | ${brand.name}`,
  description:
    "Discovery, experimentation, soil science, hydroponics introduction, and ecosystem learning for middle school students in Classes 5 to 8.",
};

export default function ExplorationModulePage() {
  return (
    <>
      <PageHero
        badge="Classes 5–8 · Middle Years"
        badgeVariant="gold"
        title="Exploration Module: Inquiry and Ecosystems"
        description="Bridging theoretical science with living agrarian systems. Students in Classes 5–8 engage in guided experimentation, hands-on cultivation, hydroponics demonstrations, and collaborative ecological inquiry."
        bgImage={siteImages.modules.exploration.heroBg.src}
        bgPosition={siteImages.modules.exploration.heroBg.objectPosition}
      />

      {/* 1. Module Introduction */}
      <section className="section-pad bg-white">
        <div className="container-xl max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <span className="text-xs uppercase font-bold tracking-widest text-[var(--color-gold-600)]">
              Educational Purpose
            </span>
            <h2 className="text-h2 mt-2 mb-4 text-[var(--color-green-900)]">
              Connecting Science Textbooks to Living Soil
            </h2>
            <p className="text-base text-[var(--color-green-800)] leading-relaxed">
              Middle school students are capable of structured scientific inquiry, collaborative teamwork, and critical observation. The Exploration Module transforms classroom biology and geography concepts — such as soil chemistry, plant anatomy, water cycles, and food webs — into tangible, memorable outdoor experiments.
            </p>
          </div>

          <FeatureGrid
            title="Core Learning Objectives"
            subtitle="Fostering investigative thinking and environmental stewardship."
            cols={3}
            features={[
              {
                icon: FlaskConical,
                title: "Applied Agronomy Science",
                description: "Test soil texture and moisture retention, study natural composting layers, and understand crop nutrient cycles.",
              },
              {
                icon: Droplets,
                title: "Modern Soilless Cultivation",
                description: "Experience hydroponic and nutrient-film setups, comparing traditional soil dynamics with water conservation technology.",
              },
              {
                icon: Users,
                title: "Collaborative Team Work",
                description: "Work in peer cohorts to manage dedicated plot beds, measure plant growth, and debate food system sustainability.",
              },
            ]}
          />
        </div>
      </section>

      {/* 2. Key Learning Areas & Activities */}
      <section className="section-pad" style={{ background: "var(--color-cream)" }}>
        <div className="container-xl">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <h2 className="text-h2 text-[var(--color-green-900)]">
              Activity Streams for Classes 5–8
            </h2>
            <p className="text-sm text-[var(--color-green-700)] mt-2">
              Structured modules that combine hands-on farming, cultural arts, and nutrition science.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="card-base p-6 bg-white flex flex-col gap-3">
              <div className="w-10 h-10 rounded-xl bg-emerald-50 flex items-center justify-center text-emerald-700">
                <Sprout size={20} />
              </div>
              <h3 className="font-display text-base font-bold text-[var(--color-green-900)]">
                Cultivation and Harvesting
              </h3>
              <p className="text-xs text-[var(--color-green-700)] leading-relaxed">
                Bed preparation, companion planting, natural pest deterrents, mulching, and harvesting seasonal vegetables.
              </p>
            </div>

            <div className="card-base p-6 bg-white flex flex-col gap-3">
              <div className="w-10 h-10 rounded-xl bg-sky-50 flex items-center justify-center text-sky-700">
                <Droplets size={20} />
              </div>
              <h3 className="font-display text-base font-bold text-[var(--color-green-900)]">
                Hydroponics and Modern Tech
              </h3>
              <p className="text-xs text-[var(--color-green-700)] leading-relaxed">
                Demonstration of nutrient solutions, pH measurement, vertical growing towers, and water conservation principles.
              </p>
            </div>

            <div className="card-base p-6 bg-white flex flex-col gap-3">
              <div className="w-10 h-10 rounded-xl bg-amber-50 flex items-center justify-center text-amber-700">
                <Palette size={20} />
              </div>
              <h3 className="font-display text-base font-bold text-[var(--color-green-900)]">
                Folk Arts and Upcycling
              </h3>
              <p className="text-xs text-[var(--color-green-700)] leading-relaxed">
                Warli geometric art, pottery wheel introduction, and creating functional art from agricultural byproducts.
              </p>
            </div>

            <div className="card-base p-6 bg-white flex flex-col gap-3">
              <div className="w-10 h-10 rounded-xl bg-orange-50 flex items-center justify-center text-orange-700">
                <Wheat size={20} />
              </div>
              <h3 className="font-display text-base font-bold text-[var(--color-green-900)]">
                Millet and Food Literacy
              </h3>
              <p className="text-xs text-[var(--color-green-700)] leading-relaxed">
                Nutritional profiling of traditional millets (Ragi, Jowar), exploring gut health, and discussing processed food realities.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 3. The 3-Phase Learning Process */}
      <section className="section-pad bg-white">
        <div className="container-xl">
          <ProcessTimeline
            title="The Exploration Learning Methodology"
            steps={[
              {
                step: "Phase 1",
                title: "Classroom Concept Briefing",
                description:
                  "Theory session at school covering scientific principles, diagrammatic workflows, and activity hypotheses.",
              },
              {
                step: "Phase 2",
                title: "Applied Farm Investigation",
                description:
                  "Students execute experiments in small teams — testing soil, managing growing rows, and observing living fauna.",
              },
              {
                step: "Phase 3",
                title: "Data Logging & Discussion",
                description:
                  "Teams record observations in field journals, compare crop outcomes, and present findings to their peer group.",
              },
              {
                step: "Phase 4",
                title: "Curriculum Synthesis",
                description:
                  "Teachers connect farm observations back to general science and social science chapters during regular school hours.",
              },
            ]}
          />
        </div>
      </section>

      {/* 4. Sample Learning Journey & Outcomes */}
      <section className="section-pad" style={{ background: "var(--color-green-50)" }}>
        <div className="container-xl max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div className="card-base p-8 bg-white">
            <span className="text-xs font-bold uppercase tracking-wider text-[var(--color-gold-600)]">
              Sample 4-Week Journey
            </span>
            <h3 className="text-h3 text-[var(--color-green-900)] mt-1 mb-4">
              A Month in the Exploration Module
            </h3>
            <ul className="flex flex-col gap-3 text-sm text-[var(--color-green-800)]">
              <li className="flex items-start gap-2.5">
                <span className="font-bold text-[var(--color-green-700)] shrink-0">W1:</span>
                <span>Soil Dynamics: Soil texture tests in school + raised bed preparation on the farm.</span>
              </li>
              <li className="flex items-start gap-2.5">
                <span className="font-bold text-[var(--color-green-700)] shrink-0">W2:</span>
                <span>Hydroponics vs Soil: Measuring pH levels + setting up seedling transplant rows.</span>
              </li>
              <li className="flex items-start gap-2.5">
                <span className="font-bold text-[var(--color-green-700)] shrink-0">W3:</span>
                <span>Heritage and Culture: Warli wall canvas workshop + team strategy in rural Lagori.</span>
              </li>
              <li className="flex items-start gap-2.5">
                <span className="font-bold text-[var(--color-green-700)] shrink-0">W4:</span>
                <span>Millet Harvest: Crop yield evaluation + tasting traditional Ragi preparation.</span>
              </li>
            </ul>
          </div>

          <div className="flex flex-col gap-4">
            <h3 className="text-h3 text-[var(--color-green-900)]">
              Expected Educational Goals
            </h3>
            <p className="text-sm text-[var(--color-green-700)] leading-relaxed">
              Program goals are framed as learning objectives and developmental milestones:
            </p>
            <div className="space-y-3">
              <div className="p-3.5 rounded-xl bg-white border border-green-100 flex items-start gap-3">
                <Sparkles size={18} className="text-emerald-600 shrink-0 mt-0.5" />
                <p className="text-xs text-[var(--color-green-800)]">
                  <strong>Scientific Inquiry:</strong> Students articulate how soil composition, water, and sunlight interact to produce food.
                </p>
              </div>
              <div className="p-3.5 rounded-xl bg-white border border-green-100 flex items-start gap-3">
                <Sparkles size={18} className="text-emerald-600 shrink-0 mt-0.5" />
                <p className="text-xs text-[var(--color-green-800)]">
                  <strong>Collaborative Problem Solving:</strong> Teams allocate responsibilities and complete physical gardening tasks cooperatively.
                </p>
              </div>
              <div className="p-3.5 rounded-xl bg-white border border-green-100 flex items-start gap-3">
                <Sparkles size={18} className="text-emerald-600 shrink-0 mt-0.5" />
                <p className="text-xs text-[var(--color-green-800)]">
                  <strong>Ecological Responsibility:</strong> Awareness of water scarcity, chemical runoff, and practical benefits of organic compost.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. Age-Appropriate Safety Considerations */}
      <section className="section-pad bg-white">
        <div className="container-xl max-w-4xl mx-auto">
          <SafetyChecklist
            title="Safety and Supervision for Classes 5–8"
            items={[
              {
                title: "Guided Tool Protocol",
                description:
                  "Students receive safety briefings before handling hand tools. Tool counts and mentor supervision are mandatory at all times.",
              },
              {
                title: "Footwear and Farm Attire",
                description:
                  "Mandatory closed-toe footwear and protective farm over-shirts to shield from dust, vegetation prickles, and direct sun.",
              },
              {
                title: "Controlled Chemical-Free Environment",
                description:
                  "All farming zones used by FURAA are strictly chemical-free and organic. No synthetic pesticides or chemical fertilizers are present.",
              },
              {
                title: "First-Aid Ready Mentors",
                description:
                  "Every mentor group carries on-person first aid packs, and clear escalation protocols are defined with nearby medical centers.",
              },
            ]}
          />
        </div>
      </section>

      {/* 6. Image Gallery Placeholders */}
      <section className="section-pad" style={{ background: "var(--color-cream)" }}>
        <div className="container-xl">
          <div className="text-center max-w-xl mx-auto mb-10">
            <h2 className="text-h2 text-[var(--color-green-900)]">
              Visual Learning Documentation
            </h2>
            <p className="text-xs text-[var(--color-green-700)] mt-1">
              Field visual slots for Classes 5–8 learning sessions.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <ImagePlaceholder
              src={siteImages.modules.exploration.cultivation.src}
              alt={siteImages.modules.exploration.cultivation.alt}
              caption={siteImages.modules.exploration.cultivation.caption}
              badge={siteImages.modules.exploration.cultivation.badge}
              objectPosition={siteImages.modules.exploration.cultivation.objectPosition}
              aspectRatio="4/3"
            />
            <ImagePlaceholder
              src={siteImages.modules.exploration.tools.src}
              alt={siteImages.modules.exploration.tools.alt}
              caption={siteImages.modules.exploration.tools.caption}
              badge={siteImages.modules.exploration.tools.badge}
              objectPosition={siteImages.modules.exploration.tools.objectPosition}
              aspectRatio="4/3"
            />
            <ImagePlaceholder
              src={siteImages.modules.exploration.ecology.src}
              alt={siteImages.modules.exploration.ecology.alt}
              caption={siteImages.modules.exploration.ecology.caption}
              badge={siteImages.modules.exploration.ecology.badge}
              objectPosition={siteImages.modules.exploration.ecology.objectPosition}
              aspectRatio="4/3"
            />
          </div>
        </div>
      </section>

      {/* 7. CTA */}
      <section className="section-pad pt-0 bg-[var(--color-cream)]">
        <div className="container-xl">
          <CtaBlock
            title="Bring the Exploration Module to Your School"
            description="Book an exploratory consultation with our curriculum team to design a term module tailored to your Classes 5–8 science syllabus."
            buttonText="Book Exploration Demo"
            href="/contact"
          />
        </div>
      </section>
    </>
  );
}

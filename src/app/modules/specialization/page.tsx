import { Metadata } from "next";
import { brand } from "@/config/brand";
import PageHero from "@/components/layout/PageHero";
import FeatureGrid from "@/components/ui/FeatureGrid";
import ProcessTimeline from "@/components/ui/ProcessTimeline";
import CtaBlock from "@/components/ui/CtaBlock";
import ImagePlaceholder from "@/components/ui/ImagePlaceholder";
import { siteImages } from "@/config/images";
import { Cpu, Droplets, LineChart, Building2, Trees, Sparkles, Lightbulb } from "lucide-react";

export const metadata: Metadata = {
  title: `Specialization Module (Classes 9–10) | ${brand.name}`,
  description:
    "Applied agricultural science, advanced hydroponics, sustainable technology, research projects, and urban agriculture for high school students in Classes 9 and 10.",
};

export default function SpecializationModulePage() {
  return (
    <>
      <PageHero
        badge="Classes 9–10 · Secondary Years"
        badgeVariant="brown"
        title="Specialization Module: Applied Agri-Science"
        description="For secondary students ready for serious scientific inquiry and real-world problem solving. We delve into modern hydroponics, precision irrigation, environmental analytics, and sustainable agricultural systems."
        bgImage={siteImages.modules.specialization.heroBg.src}
        bgPosition={siteImages.modules.specialization.heroBg.objectPosition}
      />

      {/* 1. Module Introduction */}
      <section className="section-pad bg-white">
        <div className="container-xl max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <span className="text-xs uppercase font-bold tracking-widest text-[var(--color-gold-600)]">
              Educational Purpose
            </span>
            <h2 className="text-h2 mt-2 mb-4 text-[var(--color-green-900)]">
              Preparing Tomorrow&apos;s Ecological and Scientific Leaders
            </h2>
            <p className="text-base text-[var(--color-green-800)] leading-relaxed">
              Classes 9 and 10 are pivotal academic years where students prepare for board examinations and begin contemplating higher education paths in STEM, economics, and environmental sciences. The Specialization Module offers high-rigor, research-oriented experiential learning that elevates classroom biology and chemistry into applied ecological innovation.
            </p>
          </div>

          <FeatureGrid
            title="Core Learning Objectives"
            subtitle="Advanced inquiry designed for secondary school intellectual maturity."
            cols={3}
            features={[
              {
                icon: Cpu,
                title: "Agricultural Technology",
                description: "Investigate automated drip irrigation, sensors, and protected cultivation methods that represent the future of food systems.",
              },
              {
                icon: Droplets,
                title: "Advanced Soilless Systems",
                description: "Formulate nutrient solutions, measure electrical conductivity (EC), and analyze plant growth kinetics in hydroponics.",
              },
              {
                icon: LineChart,
                title: "Data-Driven Research",
                description: "Formulate research hypotheses, conduct transect ecological surveys, and present analytical findings to peers.",
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
              Specialized Activity Streams
            </h2>
            <p className="text-sm text-[var(--color-green-700)] mt-2">
              High-engagement modules spanning science, engineering, and environmental stewardship.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="card-base p-6 bg-white flex flex-col gap-3">
              <div className="w-10 h-10 rounded-xl bg-emerald-50 flex items-center justify-center text-emerald-700">
                <Cpu size={20} />
              </div>
              <h3 className="font-display text-base font-bold text-[var(--color-green-900)]">
                Hydroponics and Automation
              </h3>
              <p className="text-xs text-[var(--color-green-700)] leading-relaxed">
                NFT and Dutch bucket system mechanics, nutrient chemistry, automated timers, and soilless media analysis.
              </p>
            </div>

            <div className="card-base p-6 bg-white flex flex-col gap-3">
              <div className="w-10 h-10 rounded-xl bg-sky-50 flex items-center justify-center text-sky-700">
                <Trees size={20} />
              </div>
              <h3 className="font-display text-base font-bold text-[var(--color-green-900)]">
                Ecology and Biodiversity
              </h3>
              <p className="text-xs text-[var(--color-green-700)] leading-relaxed">
                Macro-invertebrate soil sampling, pollinator count transects, and comparative biodiversity audits between plot types.
              </p>
            </div>

            <div className="card-base p-6 bg-white flex flex-col gap-3">
              <div className="w-10 h-10 rounded-xl bg-amber-50 flex items-center justify-center text-amber-700">
                <Building2 size={20} />
              </div>
              <h3 className="font-display text-base font-bold text-[var(--color-green-900)]">
                Urban Rooftop Farming
              </h3>
              <p className="text-xs text-[var(--color-green-700)] leading-relaxed">
                Design and engineering of micro-farms, terrace load calculations, drip irrigation hydraulics, and container cultivation.
              </p>
            </div>

            <div className="card-base p-6 bg-white flex flex-col gap-3">
              <div className="w-10 h-10 rounded-xl bg-purple-50 flex items-center justify-center text-purple-700">
                <Lightbulb size={20} />
              </div>
              <h3 className="font-display text-base font-bold text-[var(--color-green-900)]">
                Agri-Entrepreneurship
              </h3>
              <p className="text-xs text-[var(--color-green-700)] leading-relaxed">
                Value-chain analysis, organic certification principles, cold chain logistics, and sustainable agricultural business models.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 3. The 4-Phase Learning Process */}
      <section className="section-pad bg-white">
        <div className="container-xl">
          <ProcessTimeline
            title="Specialization Learning Methodology"
            steps={[
              {
                step: "Phase 1",
                title: "Advanced Theory and Hypothesis",
                description:
                  "Classroom sessions examining complex agro-ecological systems, biochemical processes, and project research questions.",
              },
              {
                step: "Phase 2",
                title: "Laboratory and Field Execution",
                description:
                  "Field trials on the farm — measuring nutrient kinetics, conducting biodiversity surveys, and managing advanced plots.",
              },
              {
                step: "Phase 3",
                title: "Documentation and Analysis",
                description:
                  "Compiling qualitative and quantitative field logs, graphing comparative data, and synthesizing project portfolios.",
              },
              {
                step: "Phase 4",
                title: "Colloquium Presentation",
                description:
                  "Student research teams present their agricultural design or environmental findings to school faculty and peers.",
              },
            ]}
          />
        </div>
      </section>

      {/* 4. Expected Educational Goals */}
      <section className="section-pad" style={{ background: "var(--color-green-50)" }}>
        <div className="container-xl max-w-4xl mx-auto">
          <div className="text-center mb-8">
            <h3 className="text-h3 text-[var(--color-green-900)]">
              Expected Educational Goals
            </h3>
            <p className="text-sm text-[var(--color-green-700)] leading-relaxed mt-2">
              Program goals are framed as learning objectives and developmental milestones:
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="p-5 rounded-2xl bg-white border border-green-100 flex flex-col gap-2 shadow-xs">
              <Sparkles size={20} className="text-emerald-600" />
              <h4 className="font-bold text-sm text-[var(--color-green-900)]">Systems Thinking</h4>
              <p className="text-xs text-[var(--color-green-800)] leading-relaxed">
                Students articulate how environmental, chemical, and economic variables influence agricultural sustainability.
              </p>
            </div>
            <div className="p-5 rounded-2xl bg-white border border-green-100 flex flex-col gap-2 shadow-xs">
              <Sparkles size={20} className="text-emerald-600" />
              <h4 className="font-bold text-sm text-[var(--color-green-900)]">Quantitative Scientific Literacy</h4>
              <p className="text-xs text-[var(--color-green-800)] leading-relaxed">
                Confidence in formulating hypotheses, logging data points, and documenting real-world evidence.
              </p>
            </div>
            <div className="p-5 rounded-2xl bg-white border border-green-100 flex flex-col gap-2 shadow-xs">
              <Sparkles size={20} className="text-emerald-600" />
              <h4 className="font-bold text-sm text-[var(--color-green-900)]">Interdisciplinary Problem Solving</h4>
              <p className="text-xs text-[var(--color-green-800)] leading-relaxed">
                Connecting biology, technology, and economic awareness to address modern food security challenges.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 5. Image Gallery */}
      <section className="section-pad bg-white">
        <div className="container-xl">
          <div className="text-center max-w-xl mx-auto mb-10">
            <h2 className="text-h2 text-[var(--color-green-900)]">
              Visual Learning Documentation
            </h2>
            <p className="text-xs text-[var(--color-green-700)] mt-1">
              Field visual slots for Classes 9–10 specialized sessions.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <ImagePlaceholder
              src={siteImages.modules.specialization.soilScience.src}
              alt={siteImages.modules.specialization.soilScience.alt}
              caption={siteImages.modules.specialization.soilScience.caption}
              badge={siteImages.modules.specialization.soilScience.badge}
              objectPosition={siteImages.modules.specialization.soilScience.objectPosition}
              aspectRatio="4/3"
            />
            <ImagePlaceholder
              src={siteImages.modules.specialization.smartAgri.src}
              alt={siteImages.modules.specialization.smartAgri.alt}
              caption={siteImages.modules.specialization.smartAgri.caption}
              badge={siteImages.modules.specialization.smartAgri.badge}
              objectPosition={siteImages.modules.specialization.smartAgri.objectPosition}
              aspectRatio="4/3"
            />
            <ImagePlaceholder
              src={siteImages.modules.specialization.farmEconomics.src}
              alt={siteImages.modules.specialization.farmEconomics.alt}
              caption={siteImages.modules.specialization.farmEconomics.caption}
              badge={siteImages.modules.specialization.farmEconomics.badge}
              objectPosition={siteImages.modules.specialization.farmEconomics.objectPosition}
              aspectRatio="4/3"
            />
          </div>
        </div>
      </section>

      {/* 6. CTA */}
      <section className="section-pad pt-0 bg-white">
        <div className="container-xl">
          <CtaBlock
            title="Integrate the Specialization Module"
            description="Consult with our senior science educators to align our applied agri-science experiments with your high school biology, physics, and chemistry practicals."
            buttonText="Book Specialization Demo"
            href="/contact"
          />
        </div>
      </section>
    </>
  );
}

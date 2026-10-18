import { Metadata } from "next";
import { brand } from "@/config/brand";
import PageHero from "@/components/layout/PageHero";
import FeatureGrid from "@/components/ui/FeatureGrid";
import ProcessTimeline from "@/components/ui/ProcessTimeline";
import SafetyChecklist from "@/components/ui/SafetyChecklist";
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

      {/* 3. The 3-Phase Learning Process */}
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

      {/* 4. Sample Learning Journey & Educational Goals */}
      <section className="section-pad" style={{ background: "var(--color-green-50)" }}>
        <div className="container-xl max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div className="card-base p-8 bg-white">
            <span className="text-xs font-bold uppercase tracking-wider text-[var(--color-gold-600)]">
              Sample 4-Week Journey
            </span>
            <h3 className="text-h3 text-[var(--color-green-900)] mt-1 mb-4">
              A Month in the Specialization Module
            </h3>
            <ul className="flex flex-col gap-3 text-sm text-[var(--color-green-800)]">
              <li className="flex items-start gap-2.5">
                <span className="font-bold text-[var(--color-green-700)] shrink-0">W1:</span>
                <span>System Architecture: Nitrogen cycle theory + soil organic matter profiling.</span>
              </li>
              <li className="flex items-start gap-2.5">
                <span className="font-bold text-[var(--color-green-700)] shrink-0">W2:</span>
                <span>Precision Agronomy: Formulating hydroponic solutions and checking EC/pH balances.</span>
              </li>
              <li className="flex items-start gap-2.5">
                <span className="font-bold text-[var(--color-green-700)] shrink-0">W3:</span>
                <span>Ecological Surveying: Biodiversity transect logging in organic vs conventional rows.</span>
              </li>
              <li className="flex items-start gap-2.5">
                <span className="font-bold text-[var(--color-green-700)] shrink-0">W4:</span>
                <span>Project Colloquium: Presenting urban terrace micro-farm prototypes to faculty.</span>
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
                  <strong>Systems Thinking:</strong> Students articulate how environmental, chemical, and economic variables influence agricultural sustainability.
                </p>
              </div>
              <div className="p-3.5 rounded-xl bg-white border border-green-100 flex items-start gap-3">
                <Sparkles size={18} className="text-emerald-600 shrink-0 mt-0.5" />
                <p className="text-xs text-[var(--color-green-800)]">
                  <strong>Quantitative Scientific Literacy:</strong> Confidence in formulating hypotheses, logging data points, and documenting real-world evidence.
                </p>
              </div>
              <div className="p-3.5 rounded-xl bg-white border border-green-100 flex items-start gap-3">
                <Sparkles size={18} className="text-emerald-600 shrink-0 mt-0.5" />
                <p className="text-xs text-[var(--color-green-800)]">
                  <strong>Interdisciplinary Problem Solving:</strong> Connecting biology, technology, and economic awareness to address modern food security challenges.
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
            title="Safety and Professional Protocols for Classes 9–10"
            items={[
              {
                title: "Laboratory and Chemical Safety",
                description:
                  "Handling of pH testing reagents and nutrient salts is strictly conducted under instructor oversight with protective eyewear and gloves.",
              },
              {
                title: "Electrical and Water Separation",
                description:
                  "Hydroponic submersible pumps and aeration equipment adhere to strict IP-rated safety enclosures and GFCI circuit protection.",
              },
              {
                title: "Field Sun and Heat Management",
                description:
                  "Outdoor agricultural fieldwork is scheduled during optimal morning hours to prevent dehydration and excessive heat exposure.",
              },
              {
                title: "Trained First-Aid Facilitators",
                description:
                  "On-site facilitators maintain current emergency first-aid credentials and maintain direct communication with school coordinators.",
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

      {/* 7. CTA */}
      <section className="section-pad pt-0 bg-[var(--color-cream)]">
        <div className="container-xl">
          <CtaBlock
            title="Integrate Applied Agri-Science in Your High School"
            description="Discuss how the Specialization Module complements your CBSE, ICSE, or International curriculum standards with practical STEM enrichment."
            buttonText="Book Specialization Demo"
            href="/contact"
          />
        </div>
      </section>
    </>
  );
}

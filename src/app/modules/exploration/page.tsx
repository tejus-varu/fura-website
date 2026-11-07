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
  alternates: {
    canonical: "/modules/exploration",
  },
  openGraph: {
    url: "https://myfuraa.com/modules/exploration",
  },
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
                Compare soil vs soilless media, monitor water flow dynamics, and record basic nutrient parameters.
              </p>
            </div>

            <div className="card-base p-6 bg-white flex flex-col gap-3">
              <div className="w-10 h-10 rounded-xl bg-amber-50 flex items-center justify-center text-amber-700">
                <Palette size={20} />
              </div>
              <h3 className="font-display text-base font-bold text-[var(--color-green-900)]">
                Cultural Heritage Arts
              </h3>
              <p className="text-xs text-[var(--color-green-700)] leading-relaxed">
                Traditional Indian folk arts, natural dye extraction from plants, pottery shaping, and regional folklore study.
              </p>
            </div>

            <div className="card-base p-6 bg-white flex flex-col gap-3">
              <div className="w-10 h-10 rounded-xl bg-orange-50 flex items-center justify-center text-orange-700">
                <Wheat size={20} />
              </div>
              <h3 className="font-display text-base font-bold text-[var(--color-green-900)]">
                Farm-to-Plate Literacy
              </h3>
              <p className="text-xs text-[var(--color-green-700)] leading-relaxed">
                Tracing food systems, recognizing indigenous millets, and experiencing healthy traditional culinary methods.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 3. The 3-Phase Learning Process */}
      <section className="section-pad bg-white">
        <div className="container-xl">
          <ProcessTimeline
            title="Learning Methodology for Classes 5–8"
            steps={[
              {
                step: "Phase 1",
                title: "Classroom Inquiry",
                description:
                  "40-minute interactive sessions where scientific hypotheses are framed using worksheets and soil/crop samples.",
              },
              {
                step: "Phase 2",
                title: "Practical Agronomy",
                description:
                  "Active fieldwork — planting, weeding, and water testing — organized in peer squads under certified mentor supervision.",
              },
              {
                step: "Phase 3",
                title: "Analytical Reflection",
                description:
                  "Students record crop measurements, compare test beds, and discuss agricultural trade-offs in structured circles.",
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
              <h4 className="font-bold text-sm text-[var(--color-green-900)]">Scientific Inquiry</h4>
              <p className="text-xs text-[var(--color-green-800)] leading-relaxed">
                Students articulate how soil composition, water, and sunlight interact to produce food.
              </p>
            </div>
            <div className="p-5 rounded-2xl bg-white border border-green-100 flex flex-col gap-2 shadow-xs">
              <Sparkles size={20} className="text-emerald-600" />
              <h4 className="font-bold text-sm text-[var(--color-green-900)]">Collaborative Problem Solving</h4>
              <p className="text-xs text-[var(--color-green-800)] leading-relaxed">
                Teams allocate responsibilities and complete physical gardening tasks cooperatively.
              </p>
            </div>
            <div className="p-5 rounded-2xl bg-white border border-green-100 flex flex-col gap-2 shadow-xs">
              <Sparkles size={20} className="text-emerald-600" />
              <h4 className="font-bold text-sm text-[var(--color-green-900)]">Ecological Responsibility</h4>
              <p className="text-xs text-[var(--color-green-800)] leading-relaxed">
                Awareness of water scarcity, resource conservation, and practical benefits of organic compost.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 5. Age-Appropriate Safety & Environment Considerations */}
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
                title: "Eco-Friendly Environment",
                description:
                  "Learning activities are planned to encourage environmentally responsible practices, resource awareness and thoughtful interaction with nature.",
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

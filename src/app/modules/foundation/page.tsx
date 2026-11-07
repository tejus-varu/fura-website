import { Metadata } from "next";
import { brand } from "@/config/brand";
import PageHero from "@/components/layout/PageHero";
import FeatureGrid from "@/components/ui/FeatureGrid";
import ProcessTimeline from "@/components/ui/ProcessTimeline";
import SafetyChecklist from "@/components/ui/SafetyChecklist";
import CtaBlock from "@/components/ui/CtaBlock";
import ImagePlaceholder from "@/components/ui/ImagePlaceholder";
import { siteImages } from "@/config/images";
import { Sprout, Eye, Compass, Palette, Heart, Sparkles } from "lucide-react";

export const metadata: Metadata = {
  title: `Foundation Module (Classes 1–4) | ${brand.name}`,
  description:
    "Early sensory learning, playful discovery, seed sowing, and safe supervised farm experiences for young students in Classes 1 to 4.",
  alternates: {
    canonical: "/modules/foundation",
  },
  openGraph: {
    url: "https://myfuraa.com/modules/foundation",
  },
};

export default function FoundationModulePage() {
  return (
    <>
      <PageHero
        badge="Classes 1–4 · Early Years"
        badgeVariant="green"
        title="Foundation Module: Sensory Discovery"
        description="Designed specifically for young explorers in Classes 1–4. We introduce the wonders of soil, seeds, folk storytelling, and natural food habits through gentle, joyful, and highly supervised experiences."
        bgImage={siteImages.modules.foundation.heroBg.src}
        bgPosition={siteImages.modules.foundation.heroBg.objectPosition}
      />

      {/* 1. Concise Module Introduction */}
      <section className="section-pad bg-white">
        <div className="container-xl max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <span className="text-xs uppercase font-bold tracking-widest text-[var(--color-gold-600)]">
              Educational Purpose
            </span>
            <h2 className="text-h2 mt-2 mb-4 text-[var(--color-green-900)]">
              Where Lifelong Curiosity Begins
            </h2>
            <p className="text-base text-[var(--color-green-800)] leading-relaxed">
              At this foundational age, children learn most effectively through their senses — touching moist earth, smelling fresh herbs, hearing rural bird calls, and tasting traditional healthy welcome drinks. The Foundation Module builds early nature affinity and respect for food producers without academic pressure.
            </p>
          </div>

          {/* Key Learning Objectives Grid */}
          <FeatureGrid
            title="Core Learning Objectives"
            subtitle="Developmentally tailored milestones for young children."
            cols={3}
            features={[
              {
                icon: Sprout,
                title: "Tactile Sowing and Growth",
                description: "Experience the wonder of sowing a seed and observing seedling germination with patience and care.",
              },
              {
                icon: Eye,
                title: "Sensory Nature Walks",
                description: "Observe diverse leaves, soil textures, and beneficial garden insects in guided, safe green corridors.",
              },
              {
                icon: Palette,
                title: "Nature and Folk Expression",
                description: "Create leaf-print artwork, listen to seasonal folk stories, and play cooperative traditional rural games.",
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
              Hands-On Activity Streams
            </h2>
            <p className="text-sm text-[var(--color-green-700)] mt-2">
              Every activity is scaled in duration, physical demand, and supervision for children aged 6 to 9.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="card-base p-6 bg-white flex flex-col gap-3">
              <div className="w-10 h-10 rounded-xl bg-emerald-50 flex items-center justify-center text-emerald-700">
                <Sprout size={20} />
              </div>
              <h3 className="font-display text-base font-bold text-[var(--color-green-900)]">
                Seed and Soil Basics
              </h3>
              <p className="text-xs text-[var(--color-green-700)] leading-relaxed">
                Gentle seed sowing in nursery trays, watering techniques using child-safe cans, and soil tactile exploration.
              </p>
            </div>

            <div className="card-base p-6 bg-white flex flex-col gap-3">
              <div className="w-10 h-10 rounded-xl bg-amber-50 flex items-center justify-center text-amber-700">
                <Palette size={20} />
              </div>
              <h3 className="font-display text-base font-bold text-[var(--color-green-900)]">
                Folk Arts & Play
              </h3>
              <p className="text-xs text-[var(--color-green-700)] leading-relaxed">
                Nature-inspired leaf rubbing, clay modeling, folk storytelling about rain and crops, and cooperative playground games.
              </p>
            </div>

            <div className="card-base p-6 bg-white flex flex-col gap-3">
              <div className="w-10 h-10 rounded-xl bg-sky-50 flex items-center justify-center text-sky-700">
                <Compass size={20} />
              </div>
              <h3 className="font-display text-base font-bold text-[var(--color-green-900)]">
                Guided Nature Trails
              </h3>
              <p className="text-xs text-[var(--color-green-700)] leading-relaxed">
                Slow-paced garden walks to spot birds, butterflies, and seasonal blossoms along barrier-free, supervised trails.
              </p>
            </div>

            <div className="card-base p-6 bg-white flex flex-col gap-3">
              <div className="w-10 h-10 rounded-xl bg-orange-50 flex items-center justify-center text-orange-700">
                <Heart size={20} />
              </div>
              <h3 className="font-display text-base font-bold text-[var(--color-green-900)]">
                Healthy Food Literacy
              </h3>
              <p className="text-xs text-[var(--color-green-700)] leading-relaxed">
                Natural herbal welcome drinks, tasting fresh garden veggies, and playful conversations about whole grains.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 3. The 3-Phase Learning Process */}
      <section className="section-pad bg-white">
        <div className="container-xl">
          <ProcessTimeline
            title="Learning Approach for Classes 1–4"
            steps={[
              {
                step: "Phase 1",
                title: "Classroom Storytelling",
                description:
                  "Short, 30–35 minute school sessions using visual storybooks, puppets, and seed samples to build gentle anticipation.",
              },
              {
                step: "Phase 2",
                title: "Practical Farm Session",
                description:
                  "Low-strain, tactile farm practice in dedicated child-safe zones with shaded resting breaks and high mentor oversight.",
              },
              {
                step: "Phase 3",
                title: "Creative Reflection",
                description:
                  "Children complete sensory drawing sheets and share what surprised them, reinforcing their experience creatively.",
              },
              {
                step: "Continuous",
                title: "Habit Reinforcement",
                description:
                  "Take-home seed pot or leaf artwork connects the experience back to parents and the regular school curriculum.",
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
              Our educational goals are framed as developmental milestones rather than rigid performance metrics:
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="p-5 rounded-2xl bg-white border border-green-100 flex flex-col gap-2 shadow-xs">
              <Sparkles size={20} className="text-emerald-600" />
              <h4 className="font-bold text-sm text-[var(--color-green-900)]">Enhanced Sensory Literacy</h4>
              <p className="text-xs text-[var(--color-green-800)] leading-relaxed">
                Children distinguish textures, natural scents, and seasonal changes with confidence.
              </p>
            </div>
            <div className="p-5 rounded-2xl bg-white border border-green-100 flex flex-col gap-2 shadow-xs">
              <Sparkles size={20} className="text-emerald-600" />
              <h4 className="font-bold text-sm text-[var(--color-green-900)]">Food Appreciation</h4>
              <p className="text-xs text-[var(--color-green-800)] leading-relaxed">
                Children understand food comes from living plants and show open curiosity toward vegetables and grains.
              </p>
            </div>
            <div className="p-5 rounded-2xl bg-white border border-green-100 flex flex-col gap-2 shadow-xs">
              <Sparkles size={20} className="text-emerald-600" />
              <h4 className="font-bold text-sm text-[var(--color-green-900)]">Motor Coordination</h4>
              <p className="text-xs text-[var(--color-green-800)] leading-relaxed">
                Gross and fine motor skills practiced through seed handling, clay manipulation, and traditional rural play.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 5. Concise Safety and Care */}
      <section className="section-pad bg-white">
        <div className="container-xl max-w-4xl mx-auto">
          <SafetyChecklist
            title="Safety and Care for Classes 1–4"
            items={[
              {
                title: "Enhanced Mentor Ratio",
                description:
                  "Foundation learners operate with small group sizes (1 mentor per 8–10 students) to guarantee constant physical proximity and care.",
              },
              {
                title: "Safe, Level Activity Zones",
                description:
                  "Activities are restricted to flat, obstacle-free garden corridors. Farm equipment zones and deep irrigation works are strictly cordoned off.",
              },
              {
                title: "Blunted, Child-Safe Tools",
                description:
                  "No sharp farming tools are used. Children handle lightweight plastic scoops, miniature wooden trowels, or work with bare hands.",
              },
              {
                title: "Hydration and Shaded Rest",
                description:
                  "Mandatory water and snack intervals in covered pavilions every 30 minutes to prevent sun fatigue.",
              },
            ]}
          />
        </div>
      </section>

      {/* 6. Image Gallery */}
      <section className="section-pad" style={{ background: "var(--color-cream)" }}>
        <div className="container-xl">
          <div className="text-center max-w-xl mx-auto mb-10">
            <h2 className="text-h2 text-[var(--color-green-900)]">
              Visual Learning Documentation
            </h2>
            <p className="text-xs text-[var(--color-green-700)] mt-1">
              Field visual slots for Classes 1–4 learning sessions.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <ImagePlaceholder
              src={siteImages.modules.foundation.sowing.src}
              alt={siteImages.modules.foundation.sowing.alt}
              caption={siteImages.modules.foundation.sowing.caption}
              badge={siteImages.modules.foundation.sowing.badge}
              objectPosition={siteImages.modules.foundation.sowing.objectPosition}
              aspectRatio="4/3"
            />
            <ImagePlaceholder
              src={siteImages.modules.foundation.natureArt.src}
              alt={siteImages.modules.foundation.natureArt.alt}
              caption={siteImages.modules.foundation.natureArt.caption}
              badge={siteImages.modules.foundation.natureArt.badge}
              objectPosition={siteImages.modules.foundation.natureArt.objectPosition}
              aspectRatio="4/3"
            />
            <ImagePlaceholder
              src={siteImages.modules.foundation.storytelling.src}
              alt={siteImages.modules.foundation.storytelling.alt}
              caption={siteImages.modules.foundation.storytelling.caption}
              badge={siteImages.modules.foundation.storytelling.badge}
              objectPosition={siteImages.modules.foundation.storytelling.objectPosition}
              aspectRatio="4/3"
            />
          </div>
        </div>
      </section>

      {/* 7. CTA */}
      <section className="section-pad pt-0 bg-[var(--color-cream)]">
        <div className="container-xl">
          <CtaBlock
            title="Introduce Foundation Learning to Your School"
            description="Schedule a 20-minute discussion to review sample lesson plans, safety arrangements, and term schedules for Classes 1–4."
            buttonText="Book Foundation Demo"
            href="/contact"
          />
        </div>
      </section>
    </>
  );
}

import { Metadata } from "next";
import { brand } from "@/config/brand";
import { siteImages } from "@/config/images";
import { Sprout, BookOpen, TreePine, Paintbrush, Heart, BrainCircuit, Shield } from "lucide-react";
import PageHero from "@/components/layout/PageHero";
import FeatureGrid from "@/components/ui/FeatureGrid";
import ProcessTimeline from "@/components/ui/ProcessTimeline";
import ImagePlaceholder from "@/components/ui/ImagePlaceholder";
import FaqSection from "@/components/ui/FaqSection";
import CtaBlock from "@/components/ui/CtaBlock";

export const metadata: Metadata = {
  title: `About Us | ${brand.name}`,
  description: `Learn about ${brand.name}'s philosophy of experiential learning, combining agriculture, art, and nature to shape young minds.`,
};

export default function AboutPage() {
  return (
    <>
      <PageHero
        badge="About the Academy"
        title="Education Beyond the Classroom"
        description={`${brand.name} is a structured experiential learning partner for schools. We bridge the gap between textbook theory and real-world application through agriculture, folk culture, and nature.`}
        bgImage={siteImages.about.heroBg.src}
        bgPosition={siteImages.about.heroBg.objectPosition}
      />

      <section className="section-pad bg-white">
        <div className="container-xl">
          <FeatureGrid
            title="Why Experiential Learning Matters"
            subtitle="Modern education requires more than whiteboards. Here is why schools partner with us."
            cols={3}
            features={[
              {
                icon: Sprout,
                title: "Real-World Context",
                description: "Abstract concepts like biology, ecology, and fractions make sense when students actually measure soil, plant seeds, and observe growth.",
              },
              {
                icon: BrainCircuit,
                title: "Cognitive Development",
                description: "Sensory-rich environments naturally improve focus, problem-solving, and emotional regulation compared to static classroom learning.",
              },
              {
                icon: Heart,
                title: "Holistic Health",
                description: "We introduce healthy food habits, physical activity, and nature exposure, tackling the modern challenges of screen time and junk food.",
              },
            ]}
          />
        </div>
      </section>

      <section className="section-pad" style={{ background: "var(--color-cream)" }}>
        <div className="container-xl">
          <ProcessTimeline
            title="Our Theory-to-Practical Model"
            steps={[
              {
                step: "Phase 1",
                title: "Learn in School",
                description: "Our trained educator visits your school. Students learn core concepts (e.g., soil science, ecology, plant biology) through interactive, curriculum-linked classroom sessions.",
              },
              {
                step: "Phase 2",
                title: "Experience at Farm",
                description: "Students travel to our dedicated farm learning center. They get their hands in the soil, applying classroom concepts through structured, supervised outdoor practice.",
              },
              {
                step: "Phase 3",
                title: "Reflect & Create",
                description: "Through journaling, waste-to-art projects, or group discussions, students internalize the experience and connect practical learning back to academic subjects.",
              },
              {
                step: "Term-End",
                title: "Apply for Life",
                description: "Students develop lasting habits — better food choices, environmental empathy, and a genuine respect for rural culture and agriculture.",
              },
            ]}
          />
        </div>
      </section>

      <section className="section-pad border-t" style={{ borderColor: "var(--color-green-100)", background: "var(--color-green-50)" }}>
        <div className="container-xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
            <div className="flex flex-col gap-4">
              <h2 className="text-h2" style={{ color: "var(--color-green-900)" }}>
                Not Just Another Field Trip
              </h2>
              <p className="text-base leading-relaxed" style={{ color: "var(--color-green-800)" }}>
                A field trip is a one-time distraction. {brand.shortName} is an <strong>integrated academic partner</strong>. 
              </p>
              <p className="text-sm leading-relaxed" style={{ color: "var(--color-green-700)" }}>
                We align our modules with your academic calendar. We take full responsibility for the logistics, ensuring a safe, supervised, and curriculum-linked experience that parents value and students remember forever.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mt-2">
                <div className="p-4 rounded-2xl bg-white shadow-xs border border-green-100">
                  <BookOpen size={22} style={{ color: "var(--color-gold-500)" }} className="mb-2" />
                  <h4 className="font-semibold text-sm mb-1" style={{ color: "var(--color-green-900)" }}>Curriculum Linked</h4>
                  <p className="text-xs" style={{ color: "var(--color-green-700)" }}>Aligned with environmental science and biology standards.</p>
                </div>
                <div className="p-4 rounded-2xl bg-white shadow-xs border border-green-100">
                  <Paintbrush size={22} style={{ color: "var(--color-gold-500)" }} className="mb-2" />
                  <h4 className="font-semibold text-sm mb-1" style={{ color: "var(--color-green-900)" }}>Folk Art Integration</h4>
                  <p className="text-xs" style={{ color: "var(--color-green-700)" }}>Pottery, Warli, and natural dyeing enhance creative expression.</p>
                </div>
                <div className="p-4 rounded-2xl bg-white shadow-xs border border-green-100">
                  <TreePine size={22} style={{ color: "var(--color-gold-500)" }} className="mb-2" />
                  <h4 className="font-semibold text-sm mb-1" style={{ color: "var(--color-green-900)" }}>Nature Immersion</h4>
                  <p className="text-xs" style={{ color: "var(--color-green-700)" }}>Unstructured sensory play in supervised, safe green zones.</p>
                </div>
                <div className="p-4 rounded-2xl bg-white shadow-xs border border-green-100">
                  <Shield size={22} style={{ color: "var(--color-sky-500)" }} className="mb-2" />
                  <h4 className="font-semibold text-sm mb-1" style={{ color: "var(--color-green-900)" }}>Strict Supervision</h4>
                  <p className="text-xs" style={{ color: "var(--color-green-700)" }}>Trained mentors maintain age-appropriate child-safe zones.</p>
                </div>
              </div>
            </div>

            {/* Real photography showcase */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-5">
              <ImagePlaceholder
                src={siteImages.about.story.src}
                alt={siteImages.about.story.alt}
                caption={siteImages.about.story.caption}
                badge={siteImages.about.story.badge}
                aspectRatio="4/3"
                objectPosition={siteImages.about.story.objectPosition}
              />
              <ImagePlaceholder
                src={siteImages.about.team.src}
                alt={siteImages.about.team.alt}
                caption={siteImages.about.team.caption}
                badge={siteImages.about.team.badge}
                aspectRatio="4/3"
                objectPosition={siteImages.about.team.objectPosition}
              />
            </div>
          </div>
        </div>
      </section>

      <section className="section-pad bg-white">
        <FaqSection 
          title="Common Questions from Principals"
          faqs={[
            {
              question: "Does this disrupt our academic schedule?",
              answer: "No. Classroom theory sessions are structured to fit within standard school periods (such as EVS or Science). Practical farm sessions are scheduled in flexible coordination with your school's annual timetable."
            },
            {
              question: "Who conducts the classroom theory?",
              answer: `Trained ${brand.shortName} educators visit your school. They bring all necessary worksheets, visual aids, and materials. Your teachers only need to observe.`
            },
            {
              question: "Is it safe for young children?",
              answer: "Safety is our highest priority. We use strict mentor-to-student ratios, mandatory safety costumes on the farm, and designate specific child-safe zones away from farm machinery."
            }
          ]}
        />
      </section>

      <section className="section-pad pt-0 bg-white">
        <div className="container-xl">
          <CtaBlock 
            title={`Ready to bring ${brand.shortName} to your curriculum?`}
            description="Book a brief demo to see our modules in action and review our safety protocols."
          />
        </div>
      </section>
    </>
  );
}

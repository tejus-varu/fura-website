import { Metadata } from "next";
import { brand } from "@/config/brand";
import { Sprout, BookOpen, TreePine, Paintbrush, Heart, BrainCircuit, Shield } from "lucide-react";
import PageHero from "@/components/layout/PageHero";
import FeatureGrid from "@/components/ui/FeatureGrid";
import ProcessTimeline from "@/components/ui/ProcessTimeline";
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
        badge="About the Module"
        title="Education Beyond the Classroom"
        description={`${brand.name} is a structured experiential learning partner for schools. We bridge the gap between textbook theory and real-world application through agriculture, folk culture, and nature.`}
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
                step: "Friday",
                title: "Learn in School",
                description: "Our trained educator visits your school. Students learn the core concepts (e.g., photosynthesis, soil layers) through structured curriculum-linked modules.",
              },
              {
                step: "Saturday",
                title: "Experience at Farm",
                description: "Students travel to our dedicated farm centers. They put their hands in the soil, applying exactly what they learned the previous day.",
              },
              {
                step: "Next Week",
                title: "Reflect & Create",
                description: "Through journaling, waste-to-art projects, or group discussions, students internalize the experience and present their findings.",
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
          <div className="flex flex-col md:flex-row items-center gap-10 max-w-5xl mx-auto">
            <div className="md:w-1/2 flex flex-col gap-4">
              <h2 className="text-h2" style={{ color: "var(--color-green-900)" }}>
                Not Just Another Field Trip
              </h2>
              <p className="text-base leading-relaxed" style={{ color: "var(--color-green-800)" }}>
                A field trip is a one-time distraction. {brand.shortName} is an <strong>integrated academic partner</strong>. 
              </p>
              <p className="text-sm leading-relaxed" style={{ color: "var(--color-green-700)" }}>
                We align our modules with your academic calendar. We take full responsibility for the logistics, ensuring a safe, supervised, and curriculum-linked experience that parents value and students remember forever.
              </p>
            </div>
            <div className="md:w-1/2 grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="p-5 rounded-2xl bg-white shadow-sm border border-green-100">
                <BookOpen size={24} style={{ color: "var(--color-gold-500)" }} className="mb-3" />
                <h4 className="font-semibold text-sm mb-1" style={{ color: "var(--color-green-900)" }}>Curriculum Linked</h4>
                <p className="text-xs" style={{ color: "var(--color-green-700)" }}>Aligned with environmental science and biology standards.</p>
              </div>
              <div className="p-5 rounded-2xl bg-white shadow-sm border border-green-100">
                <Paintbrush size={24} style={{ color: "var(--color-gold-500)" }} className="mb-3" />
                <h4 className="font-semibold text-sm mb-1" style={{ color: "var(--color-green-900)" }}>Folk Art Integration</h4>
                <p className="text-xs" style={{ color: "var(--color-green-700)" }}>Pottery, Warli, and natural dyeing enhance creative expression.</p>
              </div>
              <div className="p-5 rounded-2xl bg-white shadow-sm border border-green-100">
                <TreePine size={24} style={{ color: "var(--color-gold-500)" }} className="mb-3" />
                <h4 className="font-semibold text-sm mb-1" style={{ color: "var(--color-green-900)" }}>Nature Immersion</h4>
                <p className="text-xs" style={{ color: "var(--color-green-700)" }}>Unstructured sensory play in supervised, safe green zones.</p>
              </div>
              <div className="p-5 rounded-2xl bg-white shadow-sm border border-green-100">
                <Shield size={24} style={{ color: "var(--color-sky-500)" }} className="mb-3" />
                <h4 className="font-semibold text-sm mb-1" style={{ color: "var(--color-green-900)" }}>Strict Supervision</h4>
                <p className="text-xs" style={{ color: "var(--color-green-700)" }}>Trained mentors maintain age-appropriate child-safe zones.</p>
              </div>
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
              answer: "No. The Friday classroom sessions are designed to fit into standard 40-minute periods, replacing or supplementing existing EVS/Science slots. Saturday sessions happen outside regular school hours."
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

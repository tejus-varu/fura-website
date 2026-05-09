import { Metadata } from "next";
import { brand } from "@/config/brand";
import { Sun, Trees, Palette, Utensils, MessageCircle, ShieldCheck } from "lucide-react";
import PageHero from "@/components/layout/PageHero";
import FeatureGrid from "@/components/ui/FeatureGrid";
import ProcessTimeline from "@/components/ui/ProcessTimeline";
import SafetyChecklist from "@/components/ui/SafetyChecklist";
import CtaBlock from "@/components/ui/CtaBlock";

export const metadata: Metadata = {
  title: `Summer Camps | ${brand.name}`,
  description: `Immersive, multi-day outdoor experiential summer camps for students featuring farming, folk arts, and nature learning.`,
};

export default function SummerCampsPage() {
  return (
    <>
      <PageHero
        badge="Vacation Programs"
        title="Experiential Summer Camps"
        description="Transform school holidays into periods of active discovery. Our summer camps offer an immersive blend of agriculture, rural arts, and ecology away from digital screens."
      />

      <section className="section-pad bg-white">
        <div className="container-xl">
          <FeatureGrid
            title="A Balanced Outdoor Experience"
            subtitle="Camps are structured by age-band to ensure activities are appropriately challenging and engaging."
            cols={4}
            features={[
              {
                icon: Trees,
                title: "Farming & Nature",
                description: "Daily hands-on organic farming, soil preparation, and guided ecological walks.",
              },
              {
                icon: Palette,
                title: "Folk Arts",
                description: "Pottery workshops, natural dyeing, and traditional crafts led by local artisans.",
              },
              {
                icon: Sun,
                title: "Rural Games",
                description: "High-energy traditional physical games that build teamwork and stamina.",
              },
              {
                icon: Utensils,
                title: "Healthy Food",
                description: "Fireless cooking, millet-based snacks, and lessons on sustainable food choices.",
              },
            ]}
          />
        </div>
      </section>

      <section className="section-pad" style={{ background: "var(--color-cream)" }}>
        <div className="container-xl">
          <ProcessTimeline
            title="Sample Weekly Structure"
            steps={[
              {
                step: "Day 1-2",
                title: "Earth & Seed",
                description: "Introduction to the farm. Students learn soil preparation, composting basics, and sow their first seeds.",
              },
              {
                step: "Day 3-4",
                title: "Art & Water",
                description: "Focus shifts to water conservation, hydroponics viewing, and intensive folk art workshops like pottery.",
              },
              {
                step: "Day 5",
                title: "Food & Culture",
                description: "Understanding nutrition. Students harvest quick-growing crops and participate in traditional rural games.",
              },
              {
                step: "Day 6",
                title: "Showcase",
                description: "Parents are invited to view waste-to-art projects and hear students present their weekly learnings.",
              },
            ]}
          />
        </div>
      </section>

      <section className="section-pad bg-white">
        <div className="container-xl max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
          <SafetyChecklist 
            title="Safety & Supervision"
            items={[
              {
                title: "High Mentor Ratio",
                description: "Summer camps utilize a higher mentor-to-student ratio due to the extended duration of outdoor activities."
              },
              {
                title: "Hydration & Sun Safety",
                description: "Mandatory shaded breaks, constant hydration tracking, and UV-safe timings for open-field work."
              },
              {
                title: "Secure Facilities",
                description: "Farm centers are perimeter-secured with designated emergency assembly points."
              }
            ]}
          />
          <div className="card-base p-8" style={{ background: "var(--color-green-50)" }}>
            <h3 className="text-h3 mb-6 flex items-center gap-3" style={{ color: "var(--color-green-900)" }}>
              <MessageCircle size={24} style={{ color: "var(--color-green-600)" }} />
              Parent Communication
            </h3>
            <p className="text-sm leading-relaxed mb-4" style={{ color: "var(--color-green-800)" }}>
              Extended camps require extended trust. We maintain active communication channels throughout the program.
            </p>
            <ul className="flex flex-col gap-3">
              <li className="flex items-start gap-3">
                <ShieldCheck size={18} className="mt-0.5 shrink-0" style={{ color: "var(--color-green-600)" }} />
                <span className="text-sm" style={{ color: "var(--color-green-800)" }}>Daily end-of-day summary messages detailing the activities completed.</span>
              </li>
              <li className="flex items-start gap-3">
                <ShieldCheck size={18} className="mt-0.5 shrink-0" style={{ color: "var(--color-green-600)" }} />
                <span className="text-sm" style={{ color: "var(--color-green-800)" }}>Pre-camp briefing documents covering transport, medical disclosures, and dietary needs.</span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      <section className="section-pad pt-0 bg-white">
        <div className="container-xl">
          <CtaBlock 
            title={`Host a ${brand.shortName} Summer Camp`}
            description="We partner with schools to run exclusive summer batches for their students, either utilizing school transport or our turnkey fleet."
            buttonText="Enquire Now"
            href="/contact"
          />
        </div>
      </section>
    </>
  );
}

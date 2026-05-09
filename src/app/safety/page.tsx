import { Metadata } from "next";
import { brand } from "@/config/brand";
import { Shield, Users, Eye, Stethoscope, Phone } from "lucide-react";
import PageHero from "@/components/layout/PageHero";
import FeatureGrid from "@/components/ui/FeatureGrid";
import SafetyChecklist from "@/components/ui/SafetyChecklist";
import CtaBlock from "@/components/ui/CtaBlock";

export const metadata: Metadata = {
  title: `Safety & Operations | ${brand.name}`,
  description: `Discover ${brand.name}'s rigorous safety protocols, child-safe zones, and structured operational supervision for school modules.`,
};

export default function SafetyPage() {
  return (
    <>
      <PageHero
        badge="Safety First"
        badgeVariant="sky"
        title="Planned with Responsibility"
        description="We understand that student safety is the highest priority for school management and parents. Our operational protocols are strictly designed to mitigate risk while allowing children to explore."
      />

      <section className="section-pad bg-white">
        <div className="container-xl">
          <FeatureGrid
            title="Core Safety Pillars"
            subtitle="How we manage supervision, equipment, and environment."
            cols={3}
            features={[
              {
                icon: Users,
                title: "Trained Supervision",
                description: "Dedicated mentors and volunteers guide the students. We maintain strict mentor-to-student ratios to ensure constant oversight.",
              },
              {
                icon: Shield,
                title: "Farm Costumes",
                description: "Students are provided with appropriate farm aprons or gear, and must wear closed-toe shoes before stepping into active zones.",
              },
              {
                icon: Eye,
                title: "Child-Safe Zones",
                description: "Activities are restricted to designated safe zones. Areas with heavy farm machinery or deep water (like farm ponds) are strictly off-limits.",
              },
            ]}
          />
        </div>
      </section>

      <section className="section-pad" style={{ background: "var(--color-sky-50)" }}>
        <div className="container-xl max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
          <SafetyChecklist 
            title="Operational Protocols"
            items={[
              {
                title: "Student Handover",
                description: "A strict headcount is taken upon boarding the bus, upon arrival at the farm, during the transition, and before departure."
              },
              {
                title: "Age-Appropriate Design",
                description: "Activities are meticulously planned by age group. Junior students engage in light, sensory activities, while seniors handle structured tasks."
              },
              {
                title: "Junior Student Controls",
                description: "Classes 1-4 are kept in completely isolated, highly supervised environments with softer ground and lighter materials."
              }
            ]}
          />
          <div className="card-base p-8 bg-white flex flex-col justify-center">
            <h3 className="text-h3 mb-6 flex items-center gap-3" style={{ color: "var(--color-sky-900)" }}>
              <Stethoscope size={24} style={{ color: "var(--color-sky-600)" }} />
              Health & Emergency Readiness
            </h3>
            <p className="text-sm leading-relaxed mb-4" style={{ color: "var(--color-green-800)" }}>
              While activities are designed to be safe, we are prepared for standard outdoor eventualities (like minor scrapes).
            </p>
            <ul className="flex flex-col gap-3">
              <li className="flex items-start gap-3">
                <div className="w-1.5 h-1.5 rounded-full mt-1.5 shrink-0" style={{ background: "var(--color-sky-500)" }} />
                <span className="text-sm" style={{ color: "var(--color-green-800)" }}>First-aid kits are actively carried by mentors during all field activities.</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-1.5 h-1.5 rounded-full mt-1.5 shrink-0" style={{ background: "var(--color-sky-500)" }} />
                <span className="text-sm" style={{ color: "var(--color-green-800)" }}>Staff are trained in basic outdoor safety and rapid response.</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-1.5 h-1.5 rounded-full mt-1.5 shrink-0" style={{ background: "var(--color-sky-500)" }} />
                <span className="text-sm" style={{ color: "var(--color-green-800)" }}>Pre-planned emergency escalation routes to the nearest local medical facilities.</span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      <section className="section-pad border-t bg-white" style={{ borderColor: "var(--color-green-100)" }}>
        <div className="container-xl max-w-3xl mx-auto text-center">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-full mb-6" style={{ background: "var(--color-green-100)" }}>
            <Phone size={28} style={{ color: "var(--color-green-700)" }} />
          </div>
          <h2 className="text-h2 mb-4" style={{ color: "var(--color-green-900)" }}>Parent & School Communication</h2>
          <p className="text-base leading-relaxed mb-6" style={{ color: "var(--color-green-800)" }}>
            We believe in complete transparency. We proactively communicate our safety expectations to the school prior to any farm visit.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-left">
            <div className="p-5 card-base bg-white shadow-sm border border-green-100">
              <h4 className="font-semibold text-sm mb-2" style={{ color: "var(--color-green-900)" }}>Consent & Briefing</h4>
              <p className="text-xs text-green-700">Detailed briefing documents are provided to parents detailing what to wear, sun protection, and hydration needs.</p>
            </div>
            <div className="p-5 card-base bg-white shadow-sm border border-green-100">
              <h4 className="font-semibold text-sm mb-2" style={{ color: "var(--color-green-900)" }}>Real-Time Updates</h4>
              <p className="text-xs text-green-700">The school coordinator is kept updated upon safe arrival and departure from the farm center.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="section-pad pt-0 bg-white">
        <div className="container-xl">
          <CtaBlock 
            title="Review Our Operations Manual"
            description="We are happy to share our detailed operational guidelines with school management during our initial consultation."
            buttonText="Request Consultation"
            href="/contact"
          />
        </div>
      </section>
    </>
  );
}

import { Metadata } from "next";
import { brand } from "@/config/brand";
import { siteImages } from "@/config/images";
import { Shield, Users, Eye, Stethoscope, Phone, CheckCircle2 } from "lucide-react";
import PageHero from "@/components/layout/PageHero";
import FeatureGrid from "@/components/ui/FeatureGrid";
import SafetyChecklist from "@/components/ui/SafetyChecklist";
import ImagePlaceholder from "@/components/ui/ImagePlaceholder";
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
        bgImage={siteImages.safety.heroBg.src}
        bgPosition={siteImages.safety.heroBg.objectPosition}
      />

      {/* Safety in Practice Photo Showcase */}
      <section className="section-pad bg-white border-b border-sky-100">
        <div className="container-xl">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <span className="badge-pill inline-flex items-center gap-1.5 mb-3 bg-sky-50 text-sky-800 border-sky-200">
              <CheckCircle2 size={14} /> Direct Protocols
            </span>
            <h2 className="text-h2 text-sky-950">Safety in Practice</h2>
            <p className="text-sm sm:text-base text-sky-900/80 mt-2">
              Every outdoor experience is safeguarded by strict mentor ratios, designated boundary zones, and supervised group transit.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
            <ImagePlaceholder
              src={siteImages.safety.supervision.src}
              alt={siteImages.safety.supervision.alt}
              caption={siteImages.safety.supervision.caption}
              badge={siteImages.safety.supervision.badge}
              aspectRatio="4/3"
              objectPosition={siteImages.safety.supervision.objectPosition}
            />
            <ImagePlaceholder
              src={siteImages.safety.transport.src}
              alt={siteImages.safety.transport.alt}
              caption={siteImages.safety.transport.caption}
              badge={siteImages.safety.transport.badge}
              aspectRatio="4/3"
              objectPosition={siteImages.safety.transport.objectPosition}
            />
            <ImagePlaceholder
              src={siteImages.safety.costume.src}
              alt={siteImages.safety.costume.alt}
              caption={siteImages.safety.costume.caption}
              badge={siteImages.safety.costume.badge}
              aspectRatio="4/3"
              objectPosition={siteImages.safety.costume.objectPosition}
            />
          </div>
        </div>
      </section>

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
                description: "Activities are restricted to designated safe zones. Areas with heavy farm machinery or active irrigation installations are strictly off-limits.",
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
                description: "Activities are meticulously planned by module band (Foundation, Exploration, Specialization) to ensure safety and developmental fit."
              },
              {
                title: "Foundation Student Controls",
                description: "Foundation learners (Classes 1–4) are kept in dedicated, highly supervised environments with soft ground and sensory-safe materials."
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

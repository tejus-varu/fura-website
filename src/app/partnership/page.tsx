import { Metadata } from "next";
import { brand } from "@/config/brand";
import { CalendarDays, Clock, MapPin, Bus, Handshake, TrendingUp, Users, Sprout } from "lucide-react";
import PageHero from "@/components/layout/PageHero";
import FeatureGrid from "@/components/ui/FeatureGrid";
import ProcessTimeline from "@/components/ui/ProcessTimeline";
import SafetyChecklist from "@/components/ui/SafetyChecklist";
import CtaBlock from "@/components/ui/CtaBlock";

export const metadata: Metadata = {
  title: `School Partnership | ${brand.name}`,
  description: `Partner with ${brand.name} to integrate structured experiential agriculture, art, and nature modules into your school's curriculum.`,
};

export default function PartnershipPage() {
  return (
    <>
      <PageHero
        badge="Partner With Us"
        title="Enhance Your Curriculum"
        description={`${brand.name} integrates seamlessly into your academic calendar. We handle the curriculum, the operations, and the safety, allowing you to offer world-class experiential learning.`}
      />

      <section className="section-pad bg-white">
        <div className="container-xl">
          <FeatureGrid
            title="Integration Models"
            subtitle="Flexible formats designed to suit your school's unique schedule and requirements."
            cols={3}
            features={[
              {
                icon: CalendarDays,
                title: "Annual Module",
                description: "Our flagship program spanning the academic year. Weekly alternating theory and practical sessions building continuous, deep knowledge.",
              },
              {
                icon: Clock,
                title: "Term Module",
                description: "A focused 3-to-4 month module perfect for specific semesters or as an introduction to experiential learning.",
              },
              {
                icon: Handshake,
                title: "Workshop Module",
                description: "Short, intense workshops or multi-day intensive camps held during the school term or breaks.",
              },
            ]}
          />
        </div>
      </section>

      <section className="section-pad" style={{ background: "var(--color-cream)" }}>
        <div className="container-xl">
          <ProcessTimeline
            title="How the Weekly Model Works"
            steps={[
              {
                step: "Logistics",
                title: "Schedule Alignment",
                description: "We align our visits with your standard timetable, typically utilizing existing EVS, Science, or SUPW periods.",
              },
              {
                step: "Friday",
                title: "Theory in Class",
                description: "Our trained educator conducts a structured, interactive 40-minute theory session in your school classroom.",
              },
              {
                step: "Saturday",
                title: "Farm Experience",
                description: "Students visit the farm. We execute a supervised hands-on activity directly linked to Friday's theory.",
              },
              {
                step: "End of Month",
                title: "Review & Report",
                description: "We provide student engagement reports and output portfolios to the school management and parents.",
              },
            ]}
          />
        </div>
      </section>

      <section className="section-pad bg-white">
        <div className="container-xl max-w-5xl mx-auto">
          <h2 className="text-h2 text-center mb-10" style={{ color: "var(--color-green-900)" }}>
            Transport & Logistics Options
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <SafetyChecklist 
              title="With Transport (Turnkey)"
              items={[
                {
                  title: "End-to-End Responsibility",
                  description: "We handle student pickup from the school premises and drop-off back to the school."
                },
                {
                  title: "Vetted Vehicles",
                  description: "Safe, audited transport partners equipped with necessary safety compliance."
                },
                {
                  title: "En-Route Supervision",
                  description: "Our volunteers accompany the children during the entire journey."
                }
              ]}
            />
            <div className="card-base p-8" style={{ background: "var(--color-sky-50)" }}>
              <h3 className="text-h3 mb-6" style={{ color: "var(--color-sky-900)" }}>
                Without Transport (School Managed)
              </h3>
              <ul className="flex flex-col gap-5">
                <li className="flex gap-4 items-start">
                  <Bus size={20} className="mt-0.5 shrink-0" style={{ color: "var(--color-sky-600)" }} />
                  <div>
                    <p className="font-semibold text-sm mb-1" style={{ color: "var(--color-sky-900)" }}>School Fleet</p>
                    <p className="text-sm leading-relaxed" style={{ color: "var(--color-sky-800)" }}>
                      The school utilizes its own buses and drivers to drop students at our farm center.
                    </p>
                  </div>
                </li>
                <li className="flex gap-4 items-start">
                  <MapPin size={20} className="mt-0.5 shrink-0" style={{ color: "var(--color-sky-600)" }} />
                  <div>
                    <p className="font-semibold text-sm mb-1" style={{ color: "var(--color-sky-900)" }}>Secure Handover</p>
                    <p className="text-sm leading-relaxed" style={{ color: "var(--color-sky-800)" }}>
                      Our team takes full supervision responsibility from the moment students step off the bus at the farm gate.
                    </p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="section-pad border-t" style={{ borderColor: "var(--color-green-100)", background: "var(--color-green-50)" }}>
        <div className="container-xl">
          <FeatureGrid
            title="The Value Proposition"
            subtitle="Why schools, students, and parents consistently rate our modules highly."
            cols={3}
            features={[
              {
                icon: TrendingUp,
                title: "For School Management",
                description: "Offers a powerful differentiator for admissions. Enhances the school's reputation as a progressive, holistic institution without adding operational burden.",
              },
              {
                icon: Users,
                title: "For Parents",
                description: "Parents see tangible value in their children learning life skills, reducing screen time, and developing healthy eating habits.",
              },
              {
                icon: Sprout,
                title: "For Students",
                description: "Breaks the monotony of classroom learning. Students show demonstrably higher engagement and joy in learning through physical activity.",
              },
            ]}
          />
        </div>
      </section>

      <section className="section-pad pt-0 bg-white">
        <div className="container-xl">
          <CtaBlock 
            title="Book a Management Demo"
            description={`Let's discuss how ${brand.shortName} can fit into your academic calendar and budget. We'll present a customized module plan.`}
            buttonText="Book Your Demo"
            href="/contact"
          />
        </div>
      </section>
    </>
  );
}

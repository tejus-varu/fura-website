import { Metadata } from "next";
import { brand } from "@/config/brand";
import { farmPartners, institutionPartners, corporateProgram } from "@/config/partnerships";
import {
  GraduationCap,
  Trees,
  Landmark,
  Briefcase,
  CalendarDays,
  Clock,
  Handshake,
  Bus,
  MapPin,
  CheckCircle2,
  ShieldCheck,
  TrendingUp,
  Users,
  Sprout,
  ArrowRight,
  Info,
} from "lucide-react";
import PageHero from "@/components/layout/PageHero";
import FeatureGrid from "@/components/ui/FeatureGrid";
import ProcessTimeline from "@/components/ui/ProcessTimeline";
import SafetyChecklist from "@/components/ui/SafetyChecklist";
import CtaBlock from "@/components/ui/CtaBlock";
import ImagePlaceholder from "@/components/ui/ImagePlaceholder";
import Button from "@/components/ui/Button";

export const metadata: Metadata = {
  title: `Partnership Ecosystem | ${brand.name}`,
  description:
    "Explore FURA's collaborative ecosystem spanning school curriculum partnerships, farm learning centers like Neralu Farms, proposed agricultural university knowledge sharing, and corporate employee engagement.",
};

const partnershipPillars = [
  {
    icon: GraduationCap,
    title: "Schools",
    href: "#schools",
    description: "Curriculum-linked modules, turnkey logistics, and student experiential programs.",
  },
  {
    icon: Trees,
    title: "Farms",
    href: "#farms",
    description: "Verified outdoor agrarian learning environments like Neralu Farms.",
  },
  {
    icon: Landmark,
    title: "Agri Universities",
    href: "#universities",
    description: "Proposed institutional collaboration for scientific curriculum guidance.",
  },
  {
    icon: Briefcase,
    title: "Corporates",
    href: "#corporates",
    description: "Employee nature engagement, tree plantation drives, and CSR collaboration.",
  },
];

export default function PartnershipPage() {
  return (
    <>
      <PageHero
        badge="Collaboration Ecosystem"
        title="Partnership: Learning in Synergy"
        description={`${brand.name} collaborates across four vital sectors — schools, working farms, agricultural institutions, and corporate organizations — to nurture practical ecological knowledge and sustainable community awareness.`}
      />

      {/* 4-Sector Quick Overview Strip */}
      <section className="py-12 bg-white border-b border-gray-100">
        <div className="container-xl">
          <div className="text-center max-w-2xl mx-auto mb-8">
            <span className="text-xs uppercase font-bold tracking-widest text-[var(--color-gold-600)]">
              Our Collaborative Ecosystem
            </span>
            <h2 className="text-h2 mt-1 text-[var(--color-green-900)]">
              Four Pillars of Impact
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {partnershipPillars.map((pillar) => (
              <a
                key={pillar.title}
                href={pillar.href}
                className="card-base p-6 bg-white hover:border-emerald-300 transition-all duration-200 flex flex-col gap-3 group"
              >
                <div
                  className="w-11 h-11 rounded-xl flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform"
                  style={{ background: "var(--color-green-100)" }}
                >
                  <pillar.icon size={20} style={{ color: "var(--color-green-700)" }} />
                </div>
                <h3 className="font-display text-base font-bold text-[var(--color-green-900)] flex items-center justify-between">
                  {pillar.title}
                  <ArrowRight size={14} className="opacity-0 group-hover:opacity-100 transition-opacity text-[var(--color-green-600)]" />
                </h3>
                <p className="text-xs text-[var(--color-green-700)] leading-relaxed">
                  {pillar.description}
                </p>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* ─── SECTOR A: SCHOOL PARTNERSHIPS ───────────────────────────────────── */}
      <section id="schools" className="section-pad bg-white">
        <div className="container-xl">
          <div className="flex flex-col lg:flex-row gap-12 items-center mb-16">
            <div className="lg:w-1/2 flex flex-col gap-5">
              <span className="text-xs uppercase font-bold tracking-widest text-[var(--color-gold-600)]">
                Sector A · School Partnerships
              </span>
              <h2 className="text-h2 text-[var(--color-green-900)]">
                Integrating Experiential Agri-Education Into School Life
              </h2>
              <p className="text-base text-[var(--color-green-800)] leading-relaxed">
                FURA collaborates directly with school management, academic coordinators, and trustees to embed agriculture, nature learning, folk art, and nutrition awareness into existing CBSE, ICSE, and State Board curricula or structured extracurricular clubs.
              </p>
              <p className="text-sm text-[var(--color-green-700)] leading-relaxed">
                We handle the entire instructional delivery and operational logistics — bringing trained educators into your classrooms for theory, and providing fully supervised, turnkey practical farm experiences on agreed dates.
              </p>

              <div className="flex flex-wrap gap-3 pt-2">
                <Button href="/contact" variant="primary" size="md">
                  Discuss a School Partnership
                </Button>
                <Button href="/programs" variant="outline" size="md">
                  Explore Grade Modules
                </Button>
              </div>
            </div>

            <div className="lg:w-1/2 w-full">
              <ImagePlaceholder
                alt="Students collaborating on hands-on garden project in school campus"
                caption="Seamless integration with school academic calendar and campus activities"
                badge="School Partnership"
                aspectRatio="4/3"
              />
            </div>
          </div>

          {/* Integration Formats Grid */}
          <div className="mb-16">
            <FeatureGrid
              title="Flexible Integration Formats"
              subtitle="Choose the model that aligns with your school's calendar and academic objectives."
              cols={3}
              features={[
                {
                  icon: CalendarDays,
                  title: "Annual Module",
                  description:
                    "Our flagship academic offering spanning the school year. Regular alternating theory and practical sessions building deep, cumulative life habits.",
                },
                {
                  icon: Clock,
                  title: "Term Module",
                  description:
                    "A focused 3-to-4 month module ideal for one semester or seasonal curriculum themes in science and environmental education.",
                },
                {
                  icon: Handshake,
                  title: "Intensive Workshop",
                  description:
                    "Multi-day intensive workshops and single-topic immersions designed for experiential week, science festivals, or school breaks.",
                },
              ]}
            />
          </div>

          {/* Model Flow: Theory First, Then Practical */}
          <div className="mb-16 p-8 md:p-12 rounded-3xl bg-[var(--color-cream)] border border-emerald-900/10">
            <ProcessTimeline
              title="How the School Integration Operates"
              steps={[
                {
                  step: "Step 1",
                  title: "Calendar Alignment",
                  description:
                    "We map session topics directly to your term timetable, utilizing existing EVS, Science, or activity periods.",
                },
                {
                  step: "Step 2",
                  title: "Classroom Learning",
                  description:
                    "Our trained educator conducts an interactive, curriculum-linked theory session in your school classroom.",
                },
                {
                  step: "Step 3",
                  title: "Farm Practical Session",
                  description:
                    "Students visit the farm to apply concepts through supervised hands-on agriculture and folk crafts.",
                },
                {
                  step: "Step 4",
                  title: "Review & Portfolios",
                  description:
                    "Student engagement reports, worksheets, and creative project outputs are shared with school leadership and parents.",
                },
              ]}
            />
          </div>

          {/* Transport & Logistics Options */}
          <div className="max-w-5xl mx-auto">
            <h3 className="text-h3 text-center mb-8 text-[var(--color-green-900)]">
              Turnkey Logistics & Transportation
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <SafetyChecklist
                title="With FURA Transport (Turnkey)"
                items={[
                  {
                    title: "School Gate-to-Gate Oversight",
                    description:
                      "We coordinate student pickup directly from school premises and drop-off back at the school gate.",
                  },
                  {
                    title: "Vetted Vehicle Partners",
                    description:
                      "Audited, commercially licensed school buses adhering to regional passenger safety compliance.",
                  },
                  {
                    title: "En-Route Mentor Supervision",
                    description:
                      "FURA mentors accompany students on the bus during the journey to maintain discipline and safety.",
                  },
                ]}
              />

              <div className="card-base p-8 bg-[var(--color-sky-50)] border border-sky-100 flex flex-col justify-between">
                <div>
                  <h4 className="text-h3 mb-6 text-[var(--color-sky-900)]">
                    Without Transport (School Managed)
                  </h4>
                  <ul className="flex flex-col gap-5">
                    <li className="flex gap-4 items-start">
                      <Bus size={20} className="mt-0.5 shrink-0 text-sky-600" />
                      <div>
                        <p className="font-semibold text-sm mb-1 text-sky-900">
                          Utilize School Fleet
                        </p>
                        <p className="text-sm text-sky-800 leading-relaxed">
                          Schools can utilize their existing transport fleet and staff to transfer students to our partner farm.
                        </p>
                      </div>
                    </li>
                    <li className="flex gap-4 items-start">
                      <MapPin size={20} className="mt-0.5 shrink-0 text-sky-600" />
                      <div>
                        <p className="font-semibold text-sm mb-1 text-sky-900">
                          Gate Handover Protocol
                        </p>
                        <p className="text-sm text-sky-800 leading-relaxed">
                          Our on-site mentors assume full supervision responsibility from the moment students disembark at the farm entrance.
                        </p>
                      </div>
                    </li>
                  </ul>
                </div>
                <div className="mt-6 p-4 rounded-xl bg-white/80 border border-sky-100 text-xs text-sky-800">
                  Both options follow identical high-rigor safety protocols once inside the farm.
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── SECTOR B: FARM PARTNERSHIPS (Data-Driven: Neralu Farms) ───────── */}
      <section id="farms" className="section-pad" style={{ background: "var(--color-cream)" }}>
        <div className="container-xl">
          <div className="text-center max-w-3xl mx-auto mb-14">
            <span className="text-xs uppercase font-bold tracking-widest text-[var(--color-gold-600)]">
              Sector B · Farm Partnerships
            </span>
            <h2 className="text-h2 mt-1 text-[var(--color-green-900)]">
              Verified Outdoor Learning Centers
            </h2>
            <p className="text-sm text-[var(--color-green-700)] mt-2">
              FURA partners with established working farms to host our educational sessions. Farms are vetted for child safety, agricultural diversity, and accessibility.
            </p>
          </div>

          {/* Data-Driven Farm Cards */}
          <div className="flex flex-col gap-12">
            {farmPartners.map((farm) => (
              <div
                key={farm.id}
                className="card-base p-8 lg:p-12 bg-white border border-emerald-900/10 shadow-sm flex flex-col gap-8"
              >
                {/* Header */}
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-gray-100 pb-6">
                  <div>
                    <div className="flex items-center gap-2 mb-1">
                      <span className="text-xs px-2.5 py-0.5 rounded-full bg-emerald-100 text-emerald-800 font-semibold">
                        Primary Partner Farm
                      </span>
                      {farm.location && (
                        <span className="text-xs text-[var(--color-green-600)] flex items-center gap-1">
                          <MapPin size={12} /> {farm.location}
                        </span>
                      )}
                    </div>
                    <h3 className="font-display text-2xl font-bold text-[var(--color-green-900)]">
                      {farm.name}
                    </h3>
                  </div>
                  <Button href="/contact" variant="outline" size="sm">
                    Inquire About Farm Visits
                  </Button>
                </div>

                {/* Overview & Dual Images */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                  <div className="flex flex-col gap-4">
                    <h4 className="font-display text-base font-bold text-[var(--color-green-900)]">
                      Farm Learning Environment
                    </h4>
                    <p className="text-sm text-[var(--color-green-800)] leading-relaxed">
                      {farm.overview}
                    </p>

                    <div className="mt-2">
                      <h5 className="text-xs uppercase font-bold tracking-wider text-[var(--color-gold-600)] mb-2">
                        Farming Plots & Learning Spaces:
                      </h5>
                      <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                        {farm.learningAreas.map((area) => (
                          <li
                            key={area}
                            className="flex items-start gap-2 text-xs text-[var(--color-green-800)]"
                          >
                            <CheckCircle2 size={14} className="text-emerald-600 shrink-0 mt-0.5" />
                            <span>{area}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  {/* Dual Image Slots */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <ImagePlaceholder
                      alt={farm.images[0]?.alt || `${farm.name} educational activities`}
                      caption={farm.images[0]?.caption}
                      badge="Plot View"
                      aspectRatio="4/3"
                    />
                    <ImagePlaceholder
                      alt={farm.images[1]?.alt || `${farm.name} learning zones`}
                      caption={farm.images[1]?.caption}
                      badge="Activity Zone"
                      aspectRatio="4/3"
                    />
                  </div>
                </div>

                {/* Educational Activities & Safety */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-4 border-t border-gray-100">
                  <div className="p-5 rounded-2xl bg-[var(--color-green-50)]">
                    <h5 className="font-display text-sm font-bold text-[var(--color-green-900)] mb-3 flex items-center gap-2">
                      <Sprout size={16} className="text-emerald-700" />
                      Student Educational Activities at {farm.name}
                    </h5>
                    <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                      {farm.activities.map((act) => (
                        <li key={act} className="text-xs text-[var(--color-green-800)] flex items-center gap-1.5">
                          <span className="w-1.5 h-1.5 rounded-full bg-emerald-600 shrink-0" />
                          <span>{act}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="p-5 rounded-2xl bg-sky-50/70 border border-sky-100">
                    <h5 className="font-display text-sm font-bold text-sky-900 mb-2 flex items-center gap-2">
                      <ShieldCheck size={16} className="text-sky-700" />
                      Safety & Supervision Note
                    </h5>
                    <p className="text-xs text-sky-800 leading-relaxed">
                      {farm.safetyNote}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── SECTOR C: AGRICULTURAL UNIVERSITIES (GKVK Proposed Collaboration) ── */}
      <section id="universities" className="section-pad bg-white">
        <div className="container-xl max-w-5xl mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <span className="text-xs uppercase font-bold tracking-widest text-[var(--color-gold-600)]">
              Sector C · Agricultural Institutions & Universities
            </span>
            <h2 className="text-h2 mt-1 text-[var(--color-green-900)]">
              Scientific Grounding & Institutional Guidance
            </h2>
            <p className="text-sm text-[var(--color-green-700)] mt-2">
              FURA seeks to anchor our school curriculum in authentic agricultural science by collaborating with respected educational and research institutions.
            </p>
          </div>

          {institutionPartners.map((inst) => (
            <div
              key={inst.id}
              className="card-base p-8 lg:p-10 border border-emerald-900/15 shadow-sm bg-white"
            >
              <div className="flex flex-col md:flex-row gap-8 items-start">
                <div className="md:w-2/3 flex flex-col gap-4">
                  <div className="flex flex-wrap items-center gap-2">
                    <h3 className="font-display text-2xl font-bold text-[var(--color-green-900)]">
                      {inst.name} ({inst.shortName})
                    </h3>
                    {inst.location && (
                      <span className="text-xs text-gray-500">· {inst.location}</span>
                    )}
                  </div>

                  <p className="text-sm text-[var(--color-green-800)] leading-relaxed">
                    {inst.overview}
                  </p>

                  <div>
                    <h4 className="text-xs uppercase font-bold tracking-wider text-[var(--color-gold-600)] mb-3">
                      Intended Areas of Academic Guidance:
                    </h4>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                      {inst.collaborationAreas.map((area) => (
                        <div
                          key={area}
                          className="flex items-start gap-2 p-2.5 rounded-lg bg-[var(--color-green-50)] text-xs text-[var(--color-green-900)]"
                        >
                          <CheckCircle2 size={14} className="text-emerald-700 shrink-0 mt-0.5" />
                          <span>{area}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Crucial Verification Notice */}
                  <div className="mt-4 p-4 rounded-xl bg-amber-50/80 border border-amber-200/80 flex items-start gap-3">
                    <Info size={16} className="text-amber-700 shrink-0 mt-0.5" />
                    <p className="text-xs text-amber-900 leading-relaxed">
                      <strong>Collaboration Status:</strong> {inst.statusNote}
                    </p>
                  </div>
                </div>

                {/* Image Placeholder */}
                <div className="md:w-1/3 w-full">
                  <ImagePlaceholder
                    alt={inst.image?.alt || `${inst.name} campus reference`}
                    caption="Academic guidance & curriculum grounding reference"
                    badge="Research Institution"
                    aspectRatio="4/3"
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ─── SECTOR D: CORPORATES (Distinct Offering) ───────────────────────── */}
      <section id="corporates" className="section-pad" style={{ background: "var(--color-cream)" }}>
        <div className="container-xl">
          <div className="flex flex-col lg:flex-row gap-12 items-center mb-12">
            <div className="lg:w-1/2 flex flex-col gap-4">
              <span className="text-xs uppercase font-bold tracking-widest text-[var(--color-gold-600)]">
                Sector D · Corporate Partnerships
              </span>
              <h2 className="text-h2 text-[var(--color-green-900)]">
                Nature-Connected Team Engagement & CSR
              </h2>
              <p className="text-base text-[var(--color-green-800)] leading-relaxed">
                {corporateProgram.overview}
              </p>
              <div className="p-3.5 rounded-xl bg-emerald-100/60 border border-emerald-200 text-xs text-[var(--color-green-900)]">
                <strong>Distinct Offering:</strong> {corporateProgram.note}
              </div>

              <div className="pt-2">
                <Button href="/contact" variant="primary" size="md">
                  Inquire for Corporate Engagement
                </Button>
              </div>
            </div>

            <div className="lg:w-1/2 w-full">
              <ImagePlaceholder
                alt="Corporate employee team participating in tree plantation and organic farm experience"
                caption="Corporate sustainability and team-building at our partner farm"
                badge="Corporate Engagement"
                aspectRatio="16/9"
              />
            </div>
          </div>

          {/* Corporate Offerings Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {corporateProgram.offerings.map((offering) => (
              <div
                key={offering.title}
                className="card-base p-6 bg-white border border-gray-100 flex flex-col gap-3"
              >
                <div className="w-10 h-10 rounded-xl bg-emerald-50 flex items-center justify-center text-emerald-700">
                  <Briefcase size={18} />
                </div>
                <h4 className="font-display text-base font-bold text-[var(--color-green-900)]">
                  {offering.title}
                </h4>
                <p className="text-xs text-[var(--color-green-700)] leading-relaxed">
                  {offering.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Value Proposition for Schools */}
      <section className="section-pad bg-white border-t border-gray-100">
        <div className="container-xl">
          <FeatureGrid
            title="The Educational Value Proposition"
            subtitle="Why schools, students, and parents consistently rate FURA modules highly."
            cols={3}
            features={[
              {
                icon: TrendingUp,
                title: "For School Management",
                description:
                  "Offers a powerful differentiator for admissions. Enhances institutional prestige as a progressive, holistic school without operational headaches.",
              },
              {
                icon: Users,
                title: "For Parents",
                description:
                  "Parents witness their children learning essential life skills, stepping away from screen dependency, and developing conscious food habits.",
              },
              {
                icon: Sprout,
                title: "For Students",
                description:
                  "Breaks classroom monotony. Children display measurably higher engagement, joy, and emotional grounding through physical nature contact.",
              },
            ]}
          />
        </div>
      </section>

      {/* CTA */}
      <section className="section-pad pt-0 bg-white">
        <div className="container-xl">
          <CtaBlock
            title="Ready to Partner with FURA?"
            description="Whether you represent a school, an agricultural landowner, an academic institution, or a corporate organization, let's discuss how we can collaborate."
            buttonText="Initiate Partnership Dialogue"
            href="/contact"
          />
        </div>
      </section>
    </>
  );
}

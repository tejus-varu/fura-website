import { Metadata } from "next";
import { brand } from "@/config/brand";
import {
  farmPartners,
  corporateProgram,
} from "@/config/partnerships";
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
  Building2,
  FileCheck2,
} from "lucide-react";
import PageHero from "@/components/layout/PageHero";
import FeatureGrid from "@/components/ui/FeatureGrid";
import ProcessTimeline from "@/components/ui/ProcessTimeline";
import SafetyChecklist from "@/components/ui/SafetyChecklist";
import CtaBlock from "@/components/ui/CtaBlock";
import ImagePlaceholder from "@/components/ui/ImagePlaceholder";
import Button from "@/components/ui/Button";
import CorporateOperationsGuide from "@/components/sections/CorporateOperationsGuide";
import { siteImages } from "@/config/images";

export const metadata: Metadata = {
  title: `Our Partners | ${brand.name}`,
  description:
    "Growing Together Through Education, Agriculture, Nature and Collaboration. Explore FURAA's partner network across Schools, Farms, Farm Universities, and Corporates.",
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
    title: "Farm Universities",
    href: "#farm-universities",
    description: "Academic guidance and scientific grounding for agricultural curriculum.",
  },
  {
    icon: Briefcase,
    title: "Corporates",
    href: "#corporates",
    description: "Employee nature engagement, tree plantation drives, and CSR collaboration.",
  },
];

export default function PartnershipPage() {
  const primaryFarm = farmPartners[0];

  return (
    <>
      <PageHero
        badge="Partnership Ecosystem"
        title="Our Partners"
        description="Growing Together Through Education, Agriculture, Nature and Collaboration."
        bgImage={siteImages.partnerships.heroBg.src}
        bgPosition={siteImages.partnerships.heroBg.objectPosition}
      />

      {/* 4-Category Quick Overview Strip */}
      <section className="py-12 bg-white border-b border-gray-100">
        <div className="container-xl">
          <div className="text-center max-w-2xl mx-auto mb-8">
            <span className="text-xs uppercase font-bold tracking-widest text-[var(--color-gold-600)]">
              Our Collaborative Ecosystem
            </span>
            <h2 className="text-h2 mt-1 text-[var(--color-green-900)]">
              Four Pillars of Collaboration
            </h2>
            <p className="text-sm text-[var(--color-green-700)] mt-2">
              Explore how FURAA partners across educational institutions, working farms, agricultural universities, and corporate organizations.
            </p>
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
                  <ArrowRight
                    size={14}
                    className="opacity-0 group-hover:opacity-100 transition-opacity text-[var(--color-green-600)]"
                  />
                </h3>
                <p className="text-xs text-[var(--color-green-700)] leading-relaxed">
                  {pillar.description}
                </p>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* ─── 1. SCHOOLS ──────────────────────────────────────────────────────── */}
      <section id="schools" className="section-pad bg-white">
        <div className="container-xl">
          <div className="flex flex-col lg:flex-row gap-12 items-center mb-16">
            <div className="lg:w-1/2 flex flex-col gap-5">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-50 border border-emerald-200 text-xs font-semibold text-emerald-800 w-fit">
                <GraduationCap size={14} />
                <span>Category 1 · Schools</span>
              </div>
              <h2 className="text-h2 text-[var(--color-green-900)]">
                Integrating Experiential Agri-Education Into School Life
              </h2>
              <p className="text-base text-[var(--color-green-800)] leading-relaxed">
                FURAA collaborates directly with school management, academic coordinators, and trustees to embed agriculture, nature learning, folk art, and nutrition awareness into existing CBSE, ICSE, and State Board curricula or structured extracurricular clubs.
              </p>
              <p className="text-sm text-[var(--color-green-700)] leading-relaxed">
                We handle instructional delivery and operational logistics — bringing trained educators into your classrooms for theory, and providing supervised, turnkey practical farm experiences on agreed dates.
              </p>

              <div className="flex flex-wrap gap-3 pt-2">
                <Button href="/contact?subject=School%20Partnership" variant="primary" size="md">
                  Discuss a School Partnership
                </Button>
                <Button href="/programs" variant="outline" size="md">
                  Explore Grade Modules
                </Button>
              </div>
            </div>

            <div className="lg:w-1/2 w-full">
              <ImagePlaceholder
                src={siteImages.partnerships.schools.src}
                alt={siteImages.partnerships.schools.alt}
                caption={siteImages.partnerships.schools.caption}
                badge={siteImages.partnerships.schools.badge}
                aspectRatio="4/3"
                objectPosition={siteImages.partnerships.schools.objectPosition}
              />
            </div>
          </div>

          {/* School Partner Grid / Tasteful Empty State */}
          <div className="mb-16">
            <div className="p-8 sm:p-10 rounded-3xl bg-[var(--color-cream)] border border-emerald-900/10 flex flex-col md:flex-row gap-8 items-center justify-between">
              <div className="md:w-2/3 flex flex-col gap-3">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white border border-gray-200 text-xs font-semibold text-[var(--color-green-800)] w-fit">
                  <Building2 size={13} />
                  <span>Partnerships in Development</span>
                </div>
                <h3 className="font-display text-xl sm:text-2xl font-bold text-[var(--color-green-900)]">
                  Active School Admissions and Pilot Cohorts
                </h3>
                <p className="text-sm text-[var(--color-green-800)] leading-relaxed">
                  Partner school emblems and co-curricular program announcements are displayed upon completion of onboarding and mutual accreditation. We are currently accepting school partnership applications for upcoming academic terms.
                </p>
              </div>
              <div className="shrink-0">
                <Button
                  href="/contact?subject=School%20Partnership%20Inquiry"
                  variant="outline"
                  size="md"
                >
                  Register Your School
                </Button>
              </div>
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

          {/* Model Flow: Classroom Learning, Then Farm Practical */}
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
                  title: "Review and Portfolios",
                  description:
                    "Student engagement reports, worksheets, and creative project outputs are shared with school leadership and parents.",
                },
              ]}
            />
          </div>

          {/* Transport and Logistics Options */}
          <div className="max-w-5xl mx-auto">
            <h3 className="text-h3 text-center mb-8 text-[var(--color-green-900)]">
              Turnkey Logistics and Transportation
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <SafetyChecklist
                title="With FURAA Transport (Turnkey)"
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
                      "FURAA mentors accompany students on the bus during the journey to maintain discipline and safety.",
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
                  Both options follow identical rigorous safety protocols once inside the farm.
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── 2. FARMS ────────────────────────────────────────────────────────── */}
      <section id="farms" className="section-pad" style={{ background: "var(--color-cream)" }}>
        <div className="container-xl">
          <div className="text-center max-w-3xl mx-auto mb-14">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-100 text-emerald-800 text-xs font-semibold mb-2">
              <Trees size={14} />
              <span>Category 2 · Farms</span>
            </div>
            <h2 className="text-h2 mt-1 text-[var(--color-green-900)]">
              Verified Outdoor Learning Centers
            </h2>
            <p className="text-sm text-[var(--color-green-700)] mt-2">
              FURAA partners with established working farms to host our educational sessions. Farms are vetted for child safety, agricultural diversity, and accessibility.
            </p>
          </div>

          {/* Confirmed Farm Partner Card: Neralu Farms */}
          {primaryFarm && (
            <div className="card-base p-8 lg:p-12 bg-white border border-emerald-900/10 shadow-sm flex flex-col gap-8 mb-8">
              {/* Header */}
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-gray-100 pb-6">
                <div>
                  <div className="flex items-center gap-2 mb-1">
                    <span className="text-xs px-2.5 py-0.5 rounded-full bg-emerald-100 text-emerald-800 font-semibold">
                      Primary Partner Farm · Confirmed
                    </span>
                    {primaryFarm.location && (
                      <span className="text-xs text-[var(--color-green-600)] flex items-center gap-1">
                        <MapPin size={12} /> {primaryFarm.location}
                      </span>
                    )}
                  </div>
                  <h3 className="font-display text-2xl font-bold text-[var(--color-green-900)]">
                    {primaryFarm.name}
                  </h3>
                </div>
                <Button href="/contact?subject=Neralu%20Farms%20Visit" variant="outline" size="sm">
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
                    {primaryFarm.overview}
                  </p>

                  <div className="mt-2">
                    <h5 className="text-xs uppercase font-bold tracking-wider text-[var(--color-gold-600)] mb-2">
                      Farming Plots and Learning Spaces:
                    </h5>
                    <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                      {primaryFarm.learningAreas.map((area) => (
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

                {/* Real Farm Photos */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <ImagePlaceholder
                    src={primaryFarm.images[0]?.src}
                    alt={primaryFarm.images[0]?.alt || `${primaryFarm.name} educational activities`}
                    caption={primaryFarm.images[0]?.caption}
                    badge="Plot View"
                    aspectRatio="4/3"
                  />
                  <ImagePlaceholder
                    src={primaryFarm.images[1]?.src}
                    alt={primaryFarm.images[1]?.alt || `${primaryFarm.name} learning zones`}
                    caption={primaryFarm.images[1]?.caption}
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
                    Student Educational Activities at {primaryFarm.name}
                  </h5>
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                    {primaryFarm.activities.map((act) => (
                      <li
                        key={act}
                        className="text-xs text-[var(--color-green-800)] flex items-center gap-1.5"
                      >
                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-600 shrink-0" />
                        <span>{act}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="p-5 rounded-2xl bg-sky-50/70 border border-sky-100">
                  <h5 className="font-display text-sm font-bold text-sky-900 mb-2 flex items-center gap-2">
                    <ShieldCheck size={16} className="text-sky-700" />
                    Safety and Supervision Assurance
                  </h5>
                  <p className="text-xs text-sky-800 leading-relaxed">
                    {primaryFarm.safetyNote}
                  </p>
                </div>
              </div>
            </div>
          )}

          {/* Farm Network Expansion Info */}
          <div className="p-8 rounded-3xl bg-white border border-emerald-900/10 flex flex-col md:flex-row gap-6 items-center justify-between">
            <div className="md:w-2/3 flex flex-col gap-2">
              <span className="text-xs uppercase font-bold tracking-wider text-[var(--color-gold-600)]">
                Farm Network Expansion
              </span>
              <h4 className="font-display text-lg font-bold text-[var(--color-green-900)]">
                Partner as a Farm Host
              </h4>
              <p className="text-xs sm:text-sm text-[var(--color-green-800)] leading-relaxed">
                Do you manage agricultural land, orchards, polyhouses, or agro-forests? FURAA conducts safety audits to qualify prospective partner farms for guided school visits.
              </p>
            </div>
            <Button
              href="/contact?subject=Farm%20Host%20Partnership"
              variant="outline"
              size="md"
              className="shrink-0"
            >
              Partner as a Farm Host
            </Button>
          </div>
        </div>
      </section>

      {/* ─── 3. FARM UNIVERSITIES ────────────────────────────────────────────── */}
      <section id="farm-universities" className="section-pad bg-white">
        <div className="container-xl max-w-5xl mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-800 text-xs font-semibold mb-2">
              <Landmark size={14} />
              <span>Category 3 · Farm Universities</span>
            </div>
            <h2 className="text-h2 mt-1 text-[var(--color-green-900)]">
              Scientific Grounding and Academic Advisory
            </h2>
            <p className="text-sm text-[var(--color-green-700)] mt-2">
              FURAA seeks to anchor its educational curriculum in authentic agricultural science by collaborating with respected farm universities, agricultural researchers, and soil scientists.
            </p>
          </div>

          {/* Academic Advisory / Partnerships in Development Card */}
          <div className="card-base p-8 lg:p-10 border border-emerald-900/15 shadow-sm bg-white rounded-3xl">
            <div className="flex flex-col gap-6">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-gray-100">
                <div>
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-50 border border-amber-200 text-xs font-semibold text-amber-900 mb-2">
                    <Info size={13} />
                    <span>Academic Advisory in Development</span>
                  </div>
                  <h3 className="font-display text-2xl font-bold text-[var(--color-green-900)]">
                    Farm Universities Knowledge Framework
                  </h3>
                  <p className="text-xs text-[var(--color-green-600)] mt-0.5">
                    Bengaluru and Karnataka State Agricultural Research Guidance
                  </p>
                </div>
                <Button
                  href="/contact?subject=Academic%20Advisory%20Inquiry"
                  variant="outline"
                  size="sm"
                >
                  Initiate Academic Dialogue
                </Button>
              </div>

              <p className="text-sm text-[var(--color-green-800)] leading-relaxed">
                FURAA draws upon established research publications and scientific extension frameworks of agricultural research universities in Karnataka and across India to strengthen the scientific foundation of our educational programs.
              </p>

              <div>
                <h4 className="text-xs uppercase font-bold tracking-wider text-[var(--color-gold-600)] mb-3">
                  Intended Areas of Academic Advisory:
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {[
                    "Curriculum grounding in soil biology and crop cycles",
                    "Scientific understanding of soil health, native flora, and water stewardship",
                    "Practical agrarian learning methodologies for school-age students",
                    "Exposure to modern agronomy and agricultural research for senior grades",
                    "Educator orientation perspectives from agricultural scientists",
                  ].map((area) => (
                    <div
                      key={area}
                      className="flex items-start gap-2.5 p-3 rounded-xl bg-[var(--color-green-50)] text-xs text-[var(--color-green-900)] leading-relaxed"
                    >
                      <CheckCircle2 size={15} className="text-emerald-700 shrink-0 mt-0.5" />
                      <span>{area}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Factual, Non-Absolute Collaboration Notice */}
              <div className="p-4 rounded-2xl bg-amber-50/90 border border-amber-200 flex items-start gap-3">
                <Info size={16} className="text-amber-800 shrink-0 mt-0.5" />
                <div className="text-xs text-amber-900 leading-relaxed">
                  <strong>Academic Collaboration Notice:</strong> Formal university seals and institutional affiliations will be presented following finalization of academic MoUs. FURAA maintains strict transparency: collaborative discussions are ongoing, and no formal university endorsement or institutional accreditation is currently claimed.
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── 4. CORPORATES ───────────────────────────────────────────────────── */}
      <section id="corporates" className="section-pad" style={{ background: "var(--color-cream)" }}>
        <div className="container-xl">
          <div className="flex flex-col lg:flex-row gap-12 items-center mb-12">
            <div className="lg:w-1/2 flex flex-col gap-4">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-100 text-emerald-800 text-xs font-semibold w-fit">
                <Briefcase size={14} />
                <span>Category 4 · Corporates</span>
              </div>
              <h2 className="text-h2 text-[var(--color-green-900)]">
                Nature-Connected Team Engagement and CSR
              </h2>
              <p className="text-base text-[var(--color-green-800)] leading-relaxed">
                {corporateProgram.overview}
              </p>
              <div className="p-3.5 rounded-xl bg-emerald-100/60 border border-emerald-200 text-xs text-[var(--color-green-900)]">
                <strong>Distinct Offering:</strong> {corporateProgram.note}
              </div>

              <div className="pt-2">
                <Button href="/contact?subject=Corporate%20Engagement" variant="primary" size="md">
                  Inquire for Corporate Engagement
                </Button>
              </div>
            </div>

            <div className="lg:w-1/2 w-full">
              <ImagePlaceholder
                src={siteImages.partnerships.corporate.src}
                alt={siteImages.partnerships.corporate.alt}
                caption={siteImages.partnerships.corporate.caption}
                badge={siteImages.partnerships.corporate.badge}
                aspectRatio="16/9"
                objectPosition={siteImages.partnerships.corporate.objectPosition}
              />
            </div>
          </div>

          {/* Corporate Offerings Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 mb-14">
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

          {/* Corporate Partnerships in Development Status Card */}
          <div className="mb-14 p-6 sm:p-8 rounded-3xl bg-white border border-emerald-900/10 flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="md:w-2/3 flex flex-col gap-2">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-50 text-emerald-800 text-xs font-semibold w-fit">
                <FileCheck2 size={13} />
                <span>Partnerships in Development</span>
              </div>
              <h3 className="font-display text-xl font-bold text-[var(--color-green-900)]">
                Corporate CSR and Employee Engagement Pipeline
              </h3>
              <p className="text-xs sm:text-sm text-[var(--color-green-700)] leading-relaxed">
                Corporate CSR partnerships and employee engagement logos are published in accordance with mutual brand usage agreements. Connect with our corporate relations team to design your next team outing or CSR initiative.
              </p>
            </div>
            <Button
              href="/contact?subject=Corporate%20Engagement%20Proposal"
              variant="outline"
              size="md"
              className="shrink-0"
            >
              Plan a Corporate Outing
            </Button>
          </div>

          {/* ─── CORPORATE OPERATIONS, SUPERVISION & SAFETY GUIDE ─── */}
          <div className="mt-8">
            <CorporateOperationsGuide />
          </div>
        </div>
      </section>

      {/* Educational Value Proposition for Schools */}
      <section className="section-pad bg-white border-t border-gray-100">
        <div className="container-xl">
          <FeatureGrid
            title="The Educational Value Proposition"
            subtitle="Why schools, students, and parents consistently rate FURAA modules highly."
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

      {/* Final Call to Action */}
      <section className="section-pad pt-0 bg-white">
        <div className="container-xl">
          <CtaBlock
            title="Ready to Partner with FURAA?"
            description="Whether you represent a school, an agricultural landowner, an academic institution, or a corporate organization, let's discuss how we can collaborate."
            buttonText="Initiate Partnership Dialogue"
            href="/contact"
          />
        </div>
      </section>
    </>
  );
}

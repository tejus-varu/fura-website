import { Metadata } from "next";
import { brand } from "@/config/brand";
import {
  farmPartners,
  corporateProgram,
  institutionPartners,
} from "@/config/partnerships";
import {
  GraduationCap,
  Trees,
  Landmark,
  Briefcase,
  MapPin,
  CheckCircle2,
  TrendingUp,
  Users,
  Sprout,
  ArrowRight,
  Info,
  FileCheck2,
} from "lucide-react";
import PageHero from "@/components/layout/PageHero";
import FeatureGrid from "@/components/ui/FeatureGrid";
import ProcessTimeline from "@/components/ui/ProcessTimeline";
import CtaBlock from "@/components/ui/CtaBlock";
import ImagePlaceholder from "@/components/ui/ImagePlaceholder";
import Button from "@/components/ui/Button";
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
    description: "Curriculum-linked modules, structured calendars, and student experiential programs.",
  },
  {
    icon: Trees,
    title: "Farms",
    href: "#farms",
    description: "Verified outdoor agrarian learning environments and cultivation spaces.",
  },
  {
    icon: Landmark,
    title: "Farm Universities",
    href: "#farm-universities",
    description: "Knowledge frameworks and research references for agricultural education.",
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
  const academicAdvisory = institutionPartners[0];

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
                className="card-base p-6 bg-[var(--color-cream)] hover:bg-white border border-transparent hover:border-emerald-300 transition-all flex flex-col justify-between group shadow-xs"
              >
                <div>
                  <div className="w-12 h-12 rounded-xl bg-white flex items-center justify-center text-emerald-800 shadow-xs mb-4 group-hover:bg-emerald-800 group-hover:text-white transition-colors">
                    <pillar.icon size={22} />
                  </div>
                  <h3 className="font-display text-lg font-bold text-[var(--color-green-900)] mb-1">
                    {pillar.title}
                  </h3>
                  <p className="text-xs text-[var(--color-green-700)] leading-relaxed">
                    {pillar.description}
                  </p>
                </div>
                <div className="mt-4 pt-3 border-t border-emerald-900/10 flex items-center gap-1 text-xs font-bold text-emerald-800 group-hover:translate-x-1 transition-transform">
                  <span>Explore Track</span>
                  <ArrowRight size={13} />
                </div>
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
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-100 text-emerald-800 text-xs font-semibold w-fit">
                <GraduationCap size={14} />
                <span>Category 1 · Schools</span>
              </div>
              <h2 className="text-h2 text-[var(--color-green-900)]">
                School Partnerships: Experiential Learning for Every Student
              </h2>
              <p className="text-base text-[var(--color-green-800)] leading-relaxed">
                FURAA partners with schools to deliver structured, curriculum-linked experiential programs. We handle program delivery, trained mentor facilitation, learning materials, and farm coordination — so schools can offer meaningful experiential education with minimal administrative load.
              </p>
              <div className="flex flex-wrap items-center gap-4 pt-2">
                <Button href="/contact?subject=School%20Partnership" variant="primary" size="md">
                  Initiate School Partnership
                  <ArrowRight size={16} />
                </Button>
                <Button href="#integration-process" variant="outline" size="md">
                  View Onboarding Steps
                </Button>
              </div>
            </div>

            <div className="lg:w-1/2 w-full">
              <ImagePlaceholder
                src={siteImages.partnerships.schools.src}
                alt={siteImages.partnerships.schools.alt}
                caption={siteImages.partnerships.schools.caption}
                badge={siteImages.partnerships.schools.badge}
                aspectRatio="16/9"
                objectPosition={siteImages.partnerships.schools.objectPosition}
              />
            </div>
          </div>

          {/* School Partnership Framework Cards */}
          <div className="mb-16">
            <FeatureGrid
              title="What FURAA Delivers to Schools"
              subtitle="A complete end-to-end framework tailored to your academic calendar."
              cols={3}
              features={[
                {
                  icon: Sprout,
                  title: "Curriculum Integration",
                  description:
                    "Aligned with CBSE, ICSE, and state board science, ecology, and social science topics.",
                },
                {
                  icon: Users,
                  title: "Trained Facilitator Delivery",
                  description:
                    "Certified mentors supervise students through both classroom theory and hands-on outdoor fieldwork.",
                },
                {
                  icon: TrendingUp,
                  title: "Student Progress Documentation",
                  description:
                    "Engagement logs, portfolio assessments, and project documentation provided to faculty and parents.",
                },
              ]}
            />
          </div>

          {/* 4-Step School Integration Process */}
          <div id="integration-process" className="mb-8">
            <ProcessTimeline
              title="How Schools Partner with FURAA"
              steps={[
                {
                  step: "Step 1",
                  title: "Curriculum Alignment",
                  description:
                    "We review your school calendar and identify the best-fit grade cohorts and learning modules.",
                },
                {
                  step: "Step 2",
                  title: "Classroom Foundation",
                  description:
                    "Interactive theory sessions introduce students to core agricultural and environmental concepts.",
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
              Partner Farm Lands and Agrarian Learning Spaces
            </h2>
            <p className="text-sm text-[var(--color-green-700)] mt-2">
              FURAA collaborates with verified agrarian lands, working family farms, and open rural spaces suited to structured, safe experiential learning.
            </p>
          </div>

          {/* Confirmed Farm Partner Card: General Partner Farms */}
          {primaryFarm && (
            <div className="card-base p-8 lg:p-12 bg-white border border-emerald-900/10 shadow-sm flex flex-col gap-8 mb-8">
              {/* Header */}
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-gray-100 pb-6">
                <div>
                  <div className="flex items-center gap-2 mb-1">
                    <span className="text-xs px-2.5 py-0.5 rounded-full bg-emerald-100 text-emerald-800 font-semibold">
                      Verified Field Centers · Active
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
                <Button href="/contact?subject=Farm%20Partner%20Inquiry" variant="outline" size="sm">
                  Inquire About Farm Lands
                </Button>
              </div>

              {/* Overview & Images */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                <div>
                  <p className="text-base text-[var(--color-green-800)] leading-relaxed mb-6">
                    {primaryFarm.overview}
                  </p>
                  <h4 className="text-xs uppercase font-bold tracking-wider text-[var(--color-gold-600)] mb-3">
                    Available Learning Environments:
                  </h4>
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                    {primaryFarm.learningAreas.map((area) => (
                      <li
                        key={area}
                        className="flex items-center gap-2 text-xs font-semibold text-[var(--color-green-900)]"
                      >
                        <CheckCircle2 size={15} className="text-emerald-700 shrink-0" />
                        <span>{area}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {primaryFarm.images.map((img, idx) => (
                    <ImagePlaceholder
                      key={idx}
                      src={img.src}
                      alt={img.alt}
                      caption={img.caption}
                      badge="Agrarian Space"
                      aspectRatio="4/3"
                    />
                  ))}
                </div>
              </div>

              {/* Activities Grid */}
              <div className="border-t border-gray-100 pt-6">
                <h4 className="text-xs uppercase font-bold tracking-wider text-[var(--color-gold-600)] mb-4">
                  Field Practice Tracks:
                </h4>
                <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3">
                  {primaryFarm.activities.map((act) => (
                    <div
                      key={act}
                      className="p-3.5 rounded-xl bg-[var(--color-green-50)] text-center text-xs font-semibold text-[var(--color-green-900)] flex items-center justify-center border border-[var(--color-green-100)]"
                    >
                      {act}
                    </div>
                  ))}
                </div>
              </div>

              {/* Operational Supervision Note */}
              <div className="p-4 rounded-xl bg-amber-50/80 border border-amber-200/60 flex items-start gap-3">
                <Info size={16} className="text-amber-800 shrink-0 mt-0.5" />
                <p className="text-xs text-amber-900 leading-relaxed">
                  {primaryFarm.safetyNote}
                </p>
              </div>
            </div>
          )}
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
              Agricultural Knowledge and Academic Linkages
            </h2>
            <p className="text-sm text-[var(--color-green-700)] mt-2">
              FURAA seeks to anchor its educational curriculum in authentic agricultural science through ongoing dialogue with agricultural research frameworks and university extensions.
            </p>
          </div>

          {/* Academic Advisory Card */}
          <div className="card-base p-8 lg:p-10 border border-emerald-900/15 shadow-sm bg-white rounded-3xl">
            <div className="flex flex-col gap-6">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-gray-100">
                <div>
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-50 border border-amber-200 text-xs font-semibold text-amber-900 mb-2">
                    <Info size={13} />
                    <span>Academic Guidance & Research Reference</span>
                  </div>
                  <h3 className="font-display text-2xl font-bold text-[var(--color-green-900)]">
                    {academicAdvisory.name}
                  </h3>
                  <p className="text-xs text-[var(--color-green-600)] mt-0.5">
                    {academicAdvisory.location}
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
                {academicAdvisory.overview}
              </p>

              <div>
                <h4 className="text-xs uppercase font-bold tracking-wider text-[var(--color-gold-600)] mb-3">
                  Areas of Academic Dialogue:
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {academicAdvisory.collaborationAreas.map((area) => (
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
                  <strong className="block text-xs font-semibold mb-0.5 text-amber-950">
                    Collaborative Context
                  </strong>
                  {academicAdvisory.statusNote}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── 4. CORPORATES ──────────────────────────────────────────────────── */}
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

          {/* Corporate Partnerships Pipeline Card */}
          <div className="p-6 sm:p-8 rounded-3xl bg-white border border-emerald-900/10 flex flex-col md:flex-row items-center justify-between gap-6 shadow-xs">
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
        </div>
      </section>

      {/* Educational Value Proposition for Schools */}
      <section className="section-pad bg-white border-t border-gray-100">
        <div className="container-xl">
          <div className="max-w-4xl mx-auto text-center mb-10">
            <span className="text-xs uppercase font-bold tracking-widest text-[var(--color-gold-600)]">
              Why Schools Choose FURAA
            </span>
            <h3 className="font-display text-2xl sm:text-3xl font-bold text-[var(--color-green-900)] mt-1">
              Building Enduring Agricultural Connections
            </h3>
            <p className="text-xs sm:text-sm text-[var(--color-green-700)] mt-2 leading-relaxed">
              We complement academic schooling with practical soil awareness, environmental empathy, and cultural vitality.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            <div className="p-6 rounded-2xl bg-[var(--color-cream)] border border-emerald-900/10 flex flex-col gap-3">
              <span className="text-2xl font-bold text-emerald-800 font-display">01</span>
              <h4 className="font-bold text-base text-[var(--color-green-900)]">Zero Administrative Burden</h4>
              <p className="text-xs text-[var(--color-green-800)] leading-relaxed">
                From lesson worksheets and farming tools to certified facilitators, FURAA manages the entire operational lifecycle of the experience.
              </p>
            </div>
            <div className="p-6 rounded-2xl bg-[var(--color-cream)] border border-emerald-900/10 flex flex-col gap-3">
              <span className="text-2xl font-bold text-emerald-800 font-display">02</span>
              <h4 className="font-bold text-base text-[var(--color-green-900)]">Holistic Curricular Growth</h4>
              <p className="text-xs text-[var(--color-green-800)] leading-relaxed">
                Science, history, art, and ecology are brought together under one living, tactile roof — enhancing classroom recall and retention.
              </p>
            </div>
            <div className="p-6 rounded-2xl bg-[var(--color-cream)] border border-emerald-900/10 flex flex-col gap-3">
              <span className="text-2xl font-bold text-emerald-800 font-display">03</span>
              <h4 className="font-bold text-base text-[var(--color-green-900)]">Safe, Supervised Discovery</h4>
              <p className="text-xs text-[var(--color-green-800)] leading-relaxed">
                Activities are tailored to student age bands with strict mentor supervision ratios, perimeter safety, and trained field guides.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Book a Demo CTA */}
      <section className="section-pad pt-0 bg-white">
        <div className="container-xl">
          <CtaBlock
            title="Grow Together with FURAA"
            description="Whether you are an educator, farm owner, researcher, or corporate leader, explore how a collaboration with FURAA creates lasting value."
            buttonText="Initiate Partnership Dialogue"
            href="/contact?subject=General%20Partnership%20Dialogue"
          />
        </div>
      </section>
    </>
  );
}

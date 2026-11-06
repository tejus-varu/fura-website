import { Metadata } from "next";
import { brand } from "@/config/brand";
import { siteImages } from "@/config/images";
import { teamMembers } from "@/config/team";
import {
  BookOpen,
  Sprout,
  Compass,
  ArrowRight,
  ShieldCheck,
  Sparkles,
} from "lucide-react";
import PageHero from "@/components/layout/PageHero";
import Button from "@/components/ui/Button";
import ProfileCard from "@/components/ui/ProfileCard";
import SectionHeader from "@/components/ui/SectionHeader";

export const metadata: Metadata = {
  title: `About Us | ${brand.name}`,
  description:
    "Learn about FURAA's philosophy of experiential learning, connecting agriculture, nature, folk culture, and practical skills with school education.",
};

export default function AboutPage() {
  return (
    <>
      {/* ─── Hero / Who We Are ────────────────────────────────────────── */}
      <PageHero
        badge="About the Academy"
        badgeVariant="gold"
        title="About FURAA"
        description="Future Ready Agriculture Academy"
        bgImage={siteImages.about.heroBg.src}
        bgPosition={siteImages.about.heroBg.objectPosition}
      >
        <div className="max-w-2xl mx-auto mt-4 text-sm sm:text-base text-[var(--color-green-100)] leading-relaxed bg-black/30 p-5 sm:p-6 rounded-2xl backdrop-blur-xs border border-white/10">
          FURAA connects agriculture, nature, art and rural culture with meaningful
          educational experiences. Through classroom learning and hands-on activities,
          we help students explore the natural world, understand farming traditions and
          discover practical skills beyond conventional classrooms.
        </div>
      </PageHero>

      {/* ─── Mission & Core Objectives ────────────────────────────────── */}
      <section className="section-pad bg-white border-b border-[var(--color-green-100)]">
        <div className="container-xl max-w-5xl mx-auto">
          <SectionHeader
            badge="Bridging Theory and Soil"
            title="Education Grounded in Living Ecosystems"
            subtitle="Modern education benefits when abstract textbook principles meet tangible field observation, soil physics, and sustainable cultivation."
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
            <div className="p-6 rounded-3xl bg-[var(--color-cream)] border border-emerald-900/10 flex flex-col justify-between">
              <div>
                <div className="w-10 h-10 rounded-2xl bg-white text-emerald-800 flex items-center justify-center font-bold text-sm shadow-xs mb-4">
                  01
                </div>
                <h3 className="font-display text-lg font-bold text-[var(--color-green-950)] mb-2">
                  Agrarian Heritage &amp; Science
                </h3>
                <p className="text-xs sm:text-sm text-[var(--color-green-800)] leading-relaxed">
                  Connecting students to India&apos;s rich agricultural heritage, seed diversity, and seasonal cycles through firsthand observation.
                </p>
              </div>
            </div>

            <div className="p-6 rounded-3xl bg-[var(--color-cream)] border border-emerald-900/10 flex flex-col justify-between">
              <div>
                <div className="w-10 h-10 rounded-2xl bg-white text-emerald-800 flex items-center justify-center font-bold text-sm shadow-xs mb-4">
                  02
                </div>
                <h3 className="font-display text-lg font-bold text-[var(--color-green-950)] mb-2">
                  Ecological Responsibility
                </h3>
                <p className="text-xs sm:text-sm text-[var(--color-green-800)] leading-relaxed">
                  Cultivating instinctive environmental empathy, biodiversity understanding, water stewardship, and conscious living.
                </p>
              </div>
            </div>

            <div className="p-6 rounded-3xl bg-[var(--color-cream)] border border-emerald-900/10 flex flex-col justify-between">
              <div>
                <div className="w-10 h-10 rounded-2xl bg-white text-emerald-800 flex items-center justify-center font-bold text-sm shadow-xs mb-4">
                  03
                </div>
                <h3 className="font-display text-lg font-bold text-[var(--color-green-950)] mb-2">
                  Life Skills &amp; Resilience
                </h3>
                <p className="text-xs sm:text-sm text-[var(--color-green-800)] leading-relaxed">
                  Promoting patience, teamwork, bodily agility, and tactile confidence away from digital screens.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── Our Learning Philosophy (3 Visual Sections) ──────────────── */}
      <section className="section-pad bg-[var(--color-cream)] border-b border-[var(--color-green-100)]">
        <div className="container-xl max-w-5xl mx-auto">
          <SectionHeader
            badge="Pedagogical Framework"
            title="Our Learning Philosophy"
            subtitle="A three-stage experiential cycle designed to turn curiosity into permanent practical understanding."
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
            {/* Stage 1: Classroom Learning */}
            <div className="card-base p-6 sm:p-7 rounded-3xl bg-white border border-[var(--color-green-100)] shadow-xs flex flex-col justify-between group hover:border-emerald-500/40 transition-colors">
              <div>
                <div className="w-12 h-12 rounded-2xl bg-emerald-50 text-emerald-800 flex items-center justify-center mb-5 group-hover:scale-105 transition-transform">
                  <BookOpen size={24} />
                </div>
                <span className="text-[11px] font-bold uppercase tracking-wider text-[var(--color-gold-600)] block mb-1">
                  Stage One
                </span>
                <h3 className="font-display text-xl font-bold text-[var(--color-green-950)] mb-3">
                  Classroom Learning
                </h3>
                <p className="text-xs sm:text-sm text-[var(--color-green-800)] leading-relaxed">
                  Foundational concepts in soil science, botany, hydrology, and nutrition literacy are introduced in school classrooms using age-appropriate visual models and engaging discussions.
                </p>
              </div>
              <div className="mt-6 pt-4 border-t border-gray-100 text-xs font-semibold text-emerald-800 flex items-center gap-1.5">
                <Sparkles size={14} className="text-[var(--color-gold-500)]" />
                <span>Concept Introduction</span>
              </div>
            </div>

            {/* Stage 2: Practical Experience */}
            <div className="card-base p-6 sm:p-7 rounded-3xl bg-white border border-[var(--color-green-100)] shadow-xs flex flex-col justify-between group hover:border-emerald-500/40 transition-colors">
              <div>
                <div className="w-12 h-12 rounded-2xl bg-emerald-50 text-emerald-800 flex items-center justify-center mb-5 group-hover:scale-105 transition-transform">
                  <Sprout size={24} />
                </div>
                <span className="text-[11px] font-bold uppercase tracking-wider text-[var(--color-gold-600)] block mb-1">
                  Stage Two
                </span>
                <h3 className="font-display text-xl font-bold text-[var(--color-green-950)] mb-3">
                  Practical Experience
                </h3>
                <p className="text-xs sm:text-sm text-[var(--color-green-800)] leading-relaxed">
                  Students visit supervised agrarian field centers to get their hands in the soil—transplanting seedlings, testing irrigation canals, feeling organic compost, and observing real ecosystems.
                </p>
              </div>
              <div className="mt-6 pt-4 border-t border-gray-100 text-xs font-semibold text-emerald-800 flex items-center gap-1.5">
                <Sparkles size={14} className="text-[var(--color-gold-500)]" />
                <span>Hands-on Farm Immersion</span>
              </div>
            </div>

            {/* Stage 3: Reflection and Application */}
            <div className="card-base p-6 sm:p-7 rounded-3xl bg-white border border-[var(--color-green-100)] shadow-xs flex flex-col justify-between group hover:border-emerald-500/40 transition-colors">
              <div>
                <div className="w-12 h-12 rounded-2xl bg-emerald-50 text-emerald-800 flex items-center justify-center mb-5 group-hover:scale-105 transition-transform">
                  <Compass size={24} />
                </div>
                <span className="text-[11px] font-bold uppercase tracking-wider text-[var(--color-gold-600)] block mb-1">
                  Stage Three
                </span>
                <h3 className="font-display text-xl font-bold text-[var(--color-green-950)] mb-3">
                  Reflection and Application
                </h3>
                <p className="text-xs sm:text-sm text-[var(--color-green-800)] leading-relaxed">
                  Guided journaling, group debriefs, folk art creations, and school microgreen projects reinforce learning, cementing lifelong food respect and environmental consciousness.
                </p>
              </div>
              <div className="mt-6 pt-4 border-t border-gray-100 text-xs font-semibold text-emerald-800 flex items-center gap-1.5">
                <Sparkles size={14} className="text-[var(--color-gold-500)]" />
                <span>Lifelong Retention</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── People Behind FURAA ──────────────────────────────────────── */}
      <section id="people-behind-furaa" className="section-pad bg-white border-b border-[var(--color-green-100)]">
        <div className="container-xl">
          <SectionHeader
            badge="Leadership and Advisory"
            title="People Behind FURAA"
            subtitle="Our multidisciplinary team brings together agricultural educators, school curriculum coordinators, and experienced field practitioners."
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
            {teamMembers.map((member) => (
              <ProfileCard key={member.id} member={member} />
            ))}
          </div>

          {/* Operational Planning Assurance Footnote */}
          <div className="mt-12 p-4 sm:p-5 rounded-2xl bg-[var(--color-cream)] border border-emerald-900/10 max-w-3xl mx-auto flex items-center justify-center gap-3 text-xs text-[var(--color-green-800)] text-center">
            <ShieldCheck size={16} className="text-emerald-700 shrink-0" />
            <span>
              All field sessions are facilitated by educators trained in age-appropriate outdoor pedagogy and proactive student care.
            </span>
          </div>
        </div>
      </section>

      {/* ─── About Page Conversion CTA ───────────────────────────────── */}
      <section className="section-pad bg-[var(--color-green-950)] text-white">
        <div className="container-xl text-center max-w-3xl mx-auto">
          <span className="text-xs uppercase font-bold tracking-widest text-[var(--color-gold-400)] block mb-3">
            Collaborate With FURAA
          </span>
          <h2 className="text-display text-3xl sm:text-4xl text-white mb-6">
            Ready to Bring Experiential Agriculture to Your School?
          </h2>
          <p className="text-base sm:text-lg text-[var(--color-green-200)] leading-relaxed mb-8">
            Connect with our curriculum team to schedule an introductory dialogue, review academic calendar alignments, and plan tailored experiential sessions for your students.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <Button href="/contact" variant="primary" size="lg">
              {brand.cta.primary}
              <ArrowRight size={18} />
            </Button>
            <Button
              href="/programs/furaa-farms"
              variant="outline"
              size="lg"
              className="!border-white/30 !text-white hover:!bg-white/10"
            >
              {brand.cta.secondary}
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}

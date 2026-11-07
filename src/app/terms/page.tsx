import type { Metadata } from "next";
import Link from "next/link";
import { brand } from "@/config/brand";
import PageHero from "@/components/layout/PageHero";
import {
  FileText,
  ShieldAlert,
  Camera,
  Ban,
  Scale,
  Mail,
  MapPin,
  AlertCircle,
  HelpCircle,
  ArrowRight,
} from "lucide-react";

export const metadata: Metadata = {
  title: `Terms and Content Usage | ${brand.name}`,
  description:
    "Terms of use, content ownership, media usage policies, and intellectual property guidelines for the Future Ready Agriculture Academy (FURAA).",
  alternates: {
    canonical: "/terms",
  },
  openGraph: {
    url: "https://myfuraa.com/terms",
  },
};

export default function TermsPage() {
  const currentYear = new Date().getFullYear();

  return (
    <>
      <PageHero
        badge="Legal and Policy"
        badgeVariant="gold"
        title="Terms and Content Usage"
        description="Important guidelines governing the authorized access, intellectual property, photographic media, and lawful usage of the FURAA digital platform."
      />

      <section className="section-pad bg-white">
        <div className="container-xl max-w-4xl mx-auto">
          {/* Draft Legal Review Banner */}
          <div className="p-4 sm:p-5 rounded-2xl bg-amber-50 border border-amber-200/80 mb-10 flex items-start gap-3.5">
            <AlertCircle className="w-5 h-5 text-amber-700 shrink-0 mt-0.5" />
            <div className="text-xs sm:text-sm text-amber-900 leading-relaxed">
              <span className="font-semibold block mb-0.5">Draft Operational Policy</span>
              This policy document represents FURAA&apos;s published operational standards and terms of content use. It is provided in draft format pending periodic review and ratification by qualified Indian legal counsel.
            </div>
          </div>

          <div className="space-y-10 text-[var(--color-green-900)]">
            {/* Section 1: Content Ownership and Permitted Use */}
            <div className="border-b border-gray-100 pb-8">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-8 h-8 rounded-lg bg-emerald-100 text-emerald-800 flex items-center justify-center shrink-0">
                  <FileText size={18} />
                </div>
                <h2 className="font-display text-xl sm:text-2xl font-bold text-[var(--color-green-950)]">
                  1. Website Content Ownership and Permitted Use
                </h2>
              </div>
              <p className="text-sm sm:text-base leading-relaxed text-[var(--color-green-800)] mb-3">
                All materials published on this website—including but not limited to written curriculum overviews, programmatic frameworks, photographs, visual graphics, logos, video clips, and underlying structure—are the exclusive intellectual property of FURAA (Future Ready Agriculture Academy) or licensed for FURAA&apos;s educational presentation.
              </p>
              <p className="text-sm sm:text-base leading-relaxed text-[var(--color-green-800)]">
                Visitors, educators, and prospective partner schools are granted a limited, revocable, non-exclusive license to view and browse this website solely for personal, informational, or internal school evaluation purposes.
              </p>
            </div>

            {/* Section 2: Unauthorized Reproduction and Redistribution */}
            <div className="border-b border-gray-100 pb-8">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-8 h-8 rounded-lg bg-emerald-100 text-emerald-800 flex items-center justify-center shrink-0">
                  <Ban size={18} />
                </div>
                <h2 className="font-display text-xl sm:text-2xl font-bold text-[var(--color-green-950)]">
                  2. Unauthorized Reproduction and Commercial Misuse
                </h2>
              </div>
              <p className="text-sm sm:text-base leading-relaxed text-[var(--color-green-800)] mb-3">
                Except where explicitly authorized in writing by FURAA, you may not copy, scrape, replicate, modify, republish, distribute, broadcast, or commercially exploit any website content, curriculum outlines, or brand assets.
              </p>
              <p className="text-sm sm:text-base leading-relaxed text-[var(--color-green-800)]">
                Automated data extraction, programmatic scraping, or mirroring of website assets without prior written consent is strictly prohibited.
              </p>
            </div>

            {/* Section 3: Use of Photographs and Videos */}
            <div className="border-b border-gray-100 pb-8">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-8 h-8 rounded-lg bg-emerald-100 text-emerald-800 flex items-center justify-center shrink-0">
                  <Camera size={18} />
                </div>
                <h2 className="font-display text-xl sm:text-2xl font-bold text-[var(--color-green-950)]">
                  3. Use of Photographs, Videos, and Student Media
                </h2>
              </div>
              <p className="text-sm sm:text-base leading-relaxed text-[var(--color-green-800)] mb-3">
                Photographs and video documentation featured on this website depict actual students, teachers, facilitators, and agrarians participating in structured educational modules, field farm visits, and seasonal camps. These materials are captured and published in accordance with school partnership protocols and applicable parental consent frameworks.
              </p>
              <p className="text-sm sm:text-base leading-relaxed text-[var(--color-green-800)] mb-3">
                Re-publishing, downloading for external distribution, deep-linking, or publishing student photographs on external commercial platforms, advertisements, or promotional brochures without verified written parental and institutional consent is unlawful and strictly prohibited.
              </p>
              <div className="p-4 rounded-xl bg-gray-50 border border-gray-200/70 text-xs text-gray-700 leading-relaxed">
                <strong>Notice regarding digital media:</strong> Public images on this website are compressed and web-optimized for informational display. FURAA does not claim that technical means alone can prevent digital captures, but asserts its full proprietary rights against unauthorized downstream exploitation under applicable law.
              </div>
            </div>

            {/* Section 4: Restrictions on Impersonation or Misleading Representation */}
            <div className="border-b border-gray-100 pb-8">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-8 h-8 rounded-lg bg-emerald-100 text-emerald-800 flex items-center justify-center shrink-0">
                  <ShieldAlert size={18} />
                </div>
                <h2 className="font-display text-xl sm:text-2xl font-bold text-[var(--color-green-950)]">
                  4. Restrictions on Impersonation and False Representation
                </h2>
              </div>
              <p className="text-sm sm:text-base leading-relaxed text-[var(--color-green-800)] mb-3">
                Users and external parties may not hold themselves out as authorized agents, partners, representatives, or franchisees of FURAA without a signed institutional memorandum of understanding or verified agreement.
              </p>
              <p className="text-sm sm:text-base leading-relaxed text-[var(--color-green-800)]">
                Creating misleading domain names, social media handles, marketing collateral, or service descriptions that create public confusion regarding an affiliation with FURAA is actionable infringement.
              </p>
            </div>

            {/* Section 5: Applicable Rights and Enforcement */}
            <div className="border-b border-gray-100 pb-8">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-8 h-8 rounded-lg bg-emerald-100 text-emerald-800 flex items-center justify-center shrink-0">
                  <Scale size={18} />
                </div>
                <h2 className="font-display text-xl sm:text-2xl font-bold text-[var(--color-green-950)]">
                  5. Applicable Rights and Remedies
                </h2>
              </div>
              <p className="text-sm sm:text-base leading-relaxed text-[var(--color-green-800)] mb-3">
                Images, videos, text, and other original content published on this website are provided for authorized viewing and informational purposes. Unauthorized commercial reproduction, redistribution, impersonation, or misuse may infringe applicable copyright, trademark, and civil rights.
              </p>
              <p className="text-sm sm:text-base leading-relaxed text-[var(--color-green-800)]">
                FURAA expressly reserves all rights to seek injunctive relief, statutory damages, and civil or legal remedies under applicable laws against any individual or entity engaging in unauthorized commercial exploitation or infringement.
              </p>
            </div>

            {/* Section 6: Reporting Suspected Misuse */}
            <div className="border-b border-gray-100 pb-8">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-8 h-8 rounded-lg bg-emerald-100 text-emerald-800 flex items-center justify-center shrink-0">
                  <HelpCircle size={18} />
                </div>
                <h2 className="font-display text-xl sm:text-2xl font-bold text-[var(--color-green-950)]">
                  6. Reporting Suspected Misuse or Privacy Concerns
                </h2>
              </div>
              <p className="text-sm sm:text-base leading-relaxed text-[var(--color-green-800)] mb-3">
                If you are a parent, school administrator, or rights holder and believe any image or content on this website should be modified, taken down, or reviewed, or if you suspect third-party misuse of FURAA intellectual property, please notify us immediately.
              </p>
              <p className="text-sm sm:text-base leading-relaxed text-[var(--color-green-800)]">
                We take student privacy and intellectual property integrity seriously and will investigate and act upon verified concerns promptly.
              </p>
            </div>

            {/* Section 7: Jurisdiction and Dispute Resolution */}
            <div className="border-b border-gray-100 pb-8">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-8 h-8 rounded-lg bg-emerald-100 text-emerald-800 flex items-center justify-center shrink-0">
                  <MapPin size={18} />
                </div>
                <h2 className="font-display text-xl sm:text-2xl font-bold text-[var(--color-green-950)]">
                  7. Governing Law and Jurisdiction
                </h2>
              </div>
              <p className="text-sm sm:text-base leading-relaxed text-[var(--color-green-800)]">
                Disputes relating to these terms, website usage, or published content may be subject to the jurisdiction of competent courts in Bengaluru, Karnataka, India, subject to applicable law.
              </p>
            </div>

            {/* Section 8: Contact Information */}
            <div className="p-6 sm:p-8 rounded-2xl bg-[var(--color-cream)] border border-emerald-900/10">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-8 h-8 rounded-lg bg-emerald-700 text-white flex items-center justify-center shrink-0">
                  <Mail size={18} />
                </div>
                <h2 className="font-display text-lg sm:text-xl font-bold text-[var(--color-green-950)]">
                  8. Official Inquiries and Contact
                </h2>
              </div>
              <p className="text-xs sm:text-sm text-[var(--color-green-800)] leading-relaxed mb-4">
                For permissions, educational media inquiries, or legal communications, please reach out to our administration office:
              </p>
              <div className="text-xs sm:text-sm text-[var(--color-green-900)] space-y-1.5 font-medium">
                <div>
                  <strong>Organization:</strong> {brand.name} ({brand.fullName})
                </div>
                <div>
                  <strong>Email:</strong>{" "}
                  <a
                    href={`mailto:${brand.contact.email}`}
                    className="text-emerald-700 underline hover:text-emerald-900"
                  >
                    {brand.contact.email}
                  </a>
                </div>
                <div>
                  <strong>Phone:</strong> {brand.contact.phone}
                </div>
                <div>
                  <strong>Location:</strong> Bengaluru, Karnataka, India
                </div>
                <div className="text-xs text-[var(--color-green-700)] pt-2">
                  Last updated: {currentYear} · Version 3.0
                </div>
              </div>
            </div>
          </div>

          <div className="mt-10 text-center">
            <Link
              href="/"
              className="inline-flex items-center gap-2 text-sm font-semibold text-emerald-800 hover:text-emerald-950"
            >
              <span>Return to FURAA Home</span>
              <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}

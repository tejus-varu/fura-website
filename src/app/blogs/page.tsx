import type { Metadata } from "next";
import PageHero from "@/components/layout/PageHero";
import BlogsView from "@/components/sections/BlogsView";
import CtaBlock from "@/components/ui/CtaBlock";
import { brand } from "@/config/brand";

export const metadata: Metadata = {
  title: `Educational Blogs and Insights | ${brand.name}`,
  description:
    "Thoughtful pedagogical articles, curriculum frameworks, and seasonal farming perspectives from FURAA educators and agricultural mentors.",
};

export default function BlogsPage() {
  return (
    <>
      <PageHero
        badge="Knowledge and Perspectives"
        badgeVariant="gold"
        title="FURAA Educational Blogs and Insights"
        description="Pedagogical frameworks, seasonal farming perspectives, and reflections from the field by FURAA educators and agronomists."
        bgImage="/images/hero/NAD06383.JPG"
      />

      <section className="bg-[var(--color-cream)]">
        <BlogsView />
      </section>

      {/* Inquiry CTA */}
      <section className="section-pad bg-white border-t border-gray-100">
        <div className="container-xl">
          <CtaBlock
            title="Integrate Experiential Agriculture in Your School"
            description="Discuss curriculum alignment, teacher orientation sessions, and turnkey farm days for your student cohorts."
            buttonText="Discuss School Partnership"
            href="/contact?subject=School%20Curriculum%20Inquiry"
          />
        </div>
      </section>
    </>
  );
}

import type { Metadata } from "next";
import PageHero from "@/components/layout/PageHero";
import GalleryView from "@/components/sections/GalleryView";
import CtaBlock from "@/components/ui/CtaBlock";
import { brand } from "@/config/brand";

export const metadata: Metadata = {
  title: `Public Learning Gallery | ${brand.name}`,
  description:
    "Explore real moments from FURAA's school agriculture programs, rural experiences, nature trails, folk crafts, and seasonal camps across our verified agrarian learning centers.",
};

export default function GalleryPage() {
  return (
    <>
      <PageHero
        badge="Visual Showcase"
        badgeVariant="gold"
        title="Campus and Learning Gallery"
        description="A visual journey through hands-on farming, living crop trails, wetland agriculture, and curious young minds at FURAA."
        bgImage="/images/hero/NAD06383.JPG"
      />

      <section className="bg-[var(--color-cream)]">
        <GalleryView />
      </section>

      {/* Book a Demo / Tour CTA */}
      <section className="section-pad bg-white border-t border-gray-100">
        <div className="container-xl">
          <CtaBlock
            title="Bring Your Students to Experience FURAA in Person"
            description="We arrange guided preview tours and demo sessions for school principals, academic trustees, and science department coordinators."
            buttonText="Book a Demo Campus Tour"
            href="/contact?subject=Book%20a%20Demo%20Tour"
          />
        </div>
      </section>
    </>
  );
}

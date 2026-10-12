import { Metadata } from "next";
import { brand } from "@/config/brand";
import { siteImages } from "@/config/images";
import { Apple, LeafyGreen, Coffee, ShoppingBasket, Salad, CheckCircle2 } from "lucide-react";
import PageHero from "@/components/layout/PageHero";
import FeatureGrid from "@/components/ui/FeatureGrid";
import ImagePlaceholder from "@/components/ui/ImagePlaceholder";
import CtaBlock from "@/components/ui/CtaBlock";

export const metadata: Metadata = {
  title: `Nutrition & Food Awareness | ${brand.name}`,
  description: `Promoting healthy eating habits, millet awareness, and basic food literacy for school children.`,
};

export default function NutritionPage() {
  return (
    <>
      <PageHero
        badge="Food Literacy"
        badgeVariant="orange"
        title="Connecting Farming to Food"
        description="Children rarely understand where their food comes from. We bridge the gap between agriculture and the plate, promoting awareness around healthy dietary choices without medicalizing the conversation."
        bgImage={siteImages.nutrition.heroBg.src}
        bgPosition={siteImages.nutrition.heroBg.objectPosition}
      />

      <section className="section-pad bg-white">
        <div className="container-xl">
          <FeatureGrid
            title="Core Food Awareness Pillars"
            subtitle="We introduce children to traditional grains and mindful eating through engaging, sensory experiences."
            cols={3}
            features={[
              {
                icon: LeafyGreen,
                title: "The Millet Movement",
                description: "Introducing the variety, history, and ecological benefits of traditional Indian millets like Ragi, Jowar, and Bajra.",
              },
              {
                icon: Apple,
                title: "Basic Food Literacy",
                description: "Teaching students how to read basic food labels and understand the journey of processed versus whole foods.",
              },
              {
                icon: Salad,
                title: "Healthy Eating Habits",
                description: "Encouraging an appreciation for fresh vegetables and traditional recipes through tasting sessions and fireless cooking.",
              },
            ]}
          />
        </div>
      </section>

      {/* Farm to Plate Photography */}
      <section className="section-pad bg-orange-50/50 border-t border-b border-orange-100">
        <div className="container-xl max-w-4xl mx-auto">
          <div className="text-center mb-8">
            <span className="badge-pill inline-flex items-center gap-1.5 mb-2 bg-orange-100 text-orange-800 border-orange-200">
              Farm-to-Plate Experience
            </span>
            <h2 className="text-h2 text-emerald-950">Tasting Food at its Source</h2>
            <p className="text-sm sm:text-base text-emerald-800/80 mt-2 max-w-xl mx-auto">
              Students harvest and taste wholesome produce directly in the field, discovering the authentic sweetness of unadulterated crops.
            </p>
          </div>
          <ImagePlaceholder
            src={siteImages.nutrition.farmToPlate.src}
            alt={siteImages.nutrition.farmToPlate.alt}
            caption={siteImages.nutrition.farmToPlate.caption}
            badge={siteImages.nutrition.farmToPlate.badge}
            aspectRatio="16/9"
            objectPosition={siteImages.nutrition.farmToPlate.objectPosition}
            className="max-w-3xl mx-auto shadow-md"
          />
        </div>
      </section>

      <section className="section-pad" style={{ background: "var(--color-orange-50)" }}>
        <div className="container-xl max-w-5xl mx-auto">
          <div className="flex flex-col md:flex-row items-center gap-12">
            <div className="md:w-1/2 flex flex-col gap-5">
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl" style={{ background: "var(--color-orange-100)" }}>
                <Coffee size={24} style={{ color: "var(--color-orange-600)" }} />
              </div>
              <h2 className="text-h2" style={{ color: "var(--color-green-900)" }}>
                Natural Welcome Drinks
              </h2>
              <p className="text-base leading-relaxed" style={{ color: "var(--color-green-800)" }}>
                We believe that learning starts with experience. Upon arriving at the farm, students are greeted with traditional, natural beverages.
              </p>
              <ul className="flex flex-col gap-3 mt-2">
                <li className="flex items-start gap-3">
                  <CheckCircle2 size={18} className="mt-0.5 shrink-0" style={{ color: "var(--color-orange-500)" }} />
                  <span className="text-sm" style={{ color: "var(--color-green-800)" }}>Freshly squeezed seasonal fruit juices or traditional lemonades.</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 size={18} className="mt-0.5 shrink-0" style={{ color: "var(--color-orange-500)" }} />
                  <span className="text-sm" style={{ color: "var(--color-green-800)" }}>Strictly zero artificial colors, preservatives, or refined white sugar.</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 size={18} className="mt-0.5 shrink-0" style={{ color: "var(--color-orange-500)" }} />
                  <span className="text-sm" style={{ color: "var(--color-green-800)" }}>Serves as a practical discussion starter on alternative sweeteners (like jaggery) and hydration.</span>
                </li>
              </ul>
            </div>
            
            <div className="md:w-1/2 flex flex-col gap-5">
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl" style={{ background: "var(--color-gold-100)" }}>
                <ShoppingBasket size={24} style={{ color: "var(--color-gold-600)" }} />
              </div>
              <h2 className="text-h2" style={{ color: "var(--color-green-900)" }}>
                Junk Food Awareness
              </h2>
              <p className="text-base leading-relaxed" style={{ color: "var(--color-green-800)" }}>
                Rather than simply saying &quot;no,&quot; we help students understand <em>why</em> processed foods are less beneficial.
              </p>
              <p className="text-sm leading-relaxed" style={{ color: "var(--color-green-700)" }}>
                Through curriculum-aligned activities, we discuss the effects of excess sodium and sugar on energy levels and focus. We frame diet as a choice that impacts both personal wellness and environmental sustainability.
              </p>
              <div className="p-4 mt-2 rounded-lg border" style={{ background: "white", borderColor: "var(--color-gold-200)" }}>
                <p className="text-xs font-semibold uppercase tracking-wider mb-1" style={{ color: "var(--color-gold-600)" }}>Educational Note</p>
                <p className="text-xs leading-relaxed" style={{ color: "var(--color-green-800)" }}>
                  Our modules provide general nutritional literacy and awareness. We do not provide medical advice, diagnose dietary conditions, or prescribe specific health-treatment diets.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section-pad pt-0 mt-20 bg-white">
        <div className="container-xl">
          <CtaBlock 
            title="Integrate Food Literacy"
            description="Discuss how we can bring practical nutrition awareness into your school's curriculum."
          />
        </div>
      </section>
    </>
  );
}

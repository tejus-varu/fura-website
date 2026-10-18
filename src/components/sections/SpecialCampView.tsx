import Link from "next/link";
import {
  Sun,
  CloudRain,
  Wheat,
  ShieldCheck,
  CheckCircle2,
  AlertTriangle,
  ArrowRight,
  Sparkles,
} from "lucide-react";
import PageHero from "@/components/layout/PageHero";
import ImagePlaceholder from "@/components/ui/ImagePlaceholder";
import Button from "@/components/ui/Button";
import CtaBlock from "@/components/ui/CtaBlock";
import { SpecialCampData, specialCampsData, SpecialCampId } from "@/config/specialCamps";

interface SpecialCampViewProps {
  camp: SpecialCampData;
}

const iconMap: Record<SpecialCampId, React.ElementType> = {
  "summer-camps": Sun,
  "monsoon-camps": CloudRain,
  "harvesting-camps": Wheat,
};

const badgeColorMap: Record<SpecialCampId, string> = {
  "summer-camps": "bg-amber-100 text-amber-900 border-amber-300",
  "monsoon-camps": "bg-sky-100 text-sky-900 border-sky-300",
  "harvesting-camps": "bg-emerald-100 text-emerald-900 border-emerald-300",
};

export default function SpecialCampView({ camp }: SpecialCampViewProps) {
  const CampIcon = iconMap[camp.id] || Sparkles;

  // Other camps for cross-navigation
  const allCampIds: SpecialCampId[] = ["summer-camps", "monsoon-camps", "harvesting-camps"];
  const otherCamps = allCampIds
    .filter((id) => id !== camp.id)
    .map((id) => specialCampsData[id]);

  return (
    <>
      <PageHero
        badge={camp.seasonTag}
        title={camp.title}
        description={camp.tagline}
        bgImage={camp.heroBgImage}
      />

      {/* Overview & Suitable Class Bands */}
      <section className="section-pad bg-white">
        <div className="container-xl">
          <div className="flex flex-col lg:flex-row gap-12 items-center mb-16">
            <div className="lg:w-1/2 flex flex-col gap-5">
              <div
                className={`inline-flex items-center gap-2 px-3 py-1 rounded-full border text-xs font-semibold w-fit ${
                  badgeColorMap[camp.id]
                }`}
              >
                <CampIcon size={14} />
                <span>{camp.seasonMonths}</span>
              </div>
              <h2 className="text-h2 text-[var(--color-green-900)]">
                {camp.shortDescription}
              </h2>
              <p className="text-sm sm:text-base text-[var(--color-green-800)] leading-relaxed">
                {camp.fullOverview}
              </p>
              <div className="flex flex-wrap gap-3 pt-2">
                <Button
                  href={`/contact?subject=${encodeURIComponent(camp.ctaSubject)}`}
                  variant="primary"
                  size="md"
                >
                  Book a Demo / Camp Inquiry
                </Button>
                <Button href="#schedule" variant="outline" size="md">
                  View Daily Schedule
                </Button>
              </div>
            </div>

            {/* Camp Hero Photo Showcase */}
            <div className="lg:w-1/2 w-full grid grid-cols-2 gap-4">
              {camp.photos.slice(0, 2).map((photo, idx) => (
                <ImagePlaceholder
                  key={idx}
                  src={photo.src}
                  alt={photo.alt}
                  caption={photo.caption}
                  badge={photo.badge}
                  aspectRatio="4/3"
                />
              ))}
            </div>
          </div>

          {/* Suitable Class Bands */}
          <div className="mb-8">
            <div className="text-center max-w-2xl mx-auto mb-10">
              <span className="text-xs uppercase font-bold tracking-widest text-[var(--color-gold-600)]">
                Developmental Alignment
              </span>
              <h3 className="font-display text-2xl font-bold text-[var(--color-green-900)] mt-1">
                Suitable Class Bands
              </h3>
              <p className="text-xs sm:text-sm text-[var(--color-green-700)] mt-1">
                Every seasonal camp program is structured with age-appropriate rigor, tool safety, and supervised autonomy.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {camp.suitableClassBands.map((band) => (
                <div
                  key={band.band}
                  className="card-base p-6 bg-[var(--color-cream)] border border-emerald-900/10 rounded-2xl flex flex-col justify-between"
                >
                  <div>
                    <span className="text-xs px-2.5 py-1 rounded-full bg-white border border-gray-200 text-emerald-800 font-bold inline-block mb-3">
                      {band.band}
                    </span>
                    <h4 className="font-display text-lg font-bold text-[var(--color-green-900)] mb-2">
                      {band.title}
                    </h4>
                    <p className="text-xs text-[var(--color-green-800)] leading-relaxed">
                      {band.focus}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Learning Activities Grid */}
      <section className="section-pad bg-[var(--color-cream)] border-t border-b border-gray-100">
        <div className="container-xl">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-xs uppercase font-bold tracking-widest text-[var(--color-gold-600)]">
              Curriculum in Action
            </span>
            <h2 className="text-h2 mt-1 text-[var(--color-green-900)]">
              Camp Learning Activities
            </h2>
            <p className="text-sm text-[var(--color-green-700)] mt-2">
              Hands-on practical experiences designed to foster agrarian awareness, nature stewardship, and collaboration.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {camp.activities.map((activity, idx) => (
              <div
                key={idx}
                className="card-base p-6 bg-white border border-gray-100 rounded-2xl flex flex-col gap-3 hover:border-emerald-300 transition-all shadow-sm"
              >
                <div className="w-10 h-10 rounded-xl bg-emerald-50 text-emerald-700 flex items-center justify-center font-display font-bold text-sm shrink-0">
                  {idx + 1}
                </div>
                <h3 className="font-display text-base font-bold text-[var(--color-green-900)]">
                  {activity.title}
                </h3>
                <p className="text-xs text-[var(--color-green-700)] leading-relaxed">
                  {activity.description}
                </p>
              </div>
            ))}
          </div>

          {/* Photo Moments Row */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-12">
            {camp.photos.slice(2, 4).map((photo, idx) => (
              <ImagePlaceholder
                key={idx}
                src={photo.src}
                alt={photo.alt}
                caption={photo.caption}
                badge={photo.badge}
                aspectRatio="16/9"
              />
            ))}
          </div>
        </div>
      </section>

      {/* Sample Camp Schedule */}
      <section id="schedule" className="section-pad bg-white">
        <div className="container-xl max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <span className="text-xs uppercase font-bold tracking-widest text-[var(--color-gold-600)]">
              Daily Rhythm
            </span>
            <h2 className="text-h2 mt-1 text-[var(--color-green-900)]">
              Sample Camp Schedule
            </h2>
            <p className="text-sm text-[var(--color-green-700)] mt-2">
              A balanced daily flow alternating between outdoor field practice, covered artisanal workshops, and restorative farm nutrition.
            </p>
          </div>

          <div className="relative border-l-2 border-emerald-100 ml-4 sm:ml-8 pl-6 sm:pl-10 space-y-8">
            {camp.sampleSchedule.map((item, idx) => (
              <div key={idx} className="relative group">
                {/* Timeline node */}
                <div className="absolute -left-[31px] sm:-left-[47px] top-1 w-5 h-5 rounded-full bg-white border-4 border-emerald-600 shadow-sm" />
                <div className="card-base p-5 bg-white border border-gray-100 rounded-2xl hover:border-emerald-200 transition-all">
                  <div className="flex flex-wrap items-center gap-2 mb-1.5">
                    <span className="text-xs font-bold text-emerald-800 bg-emerald-50 px-2.5 py-0.5 rounded-full">
                      {item.timeOrPhase}
                    </span>
                  </div>
                  <h3 className="font-display text-base font-bold text-[var(--color-green-900)] mb-1">
                    {item.title}
                  </h3>
                  <p className="text-xs text-[var(--color-green-700)] leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Safety Considerations & Season/Weather Disclaimer */}
      <section className="section-pad bg-[var(--color-cream)] border-t border-gray-100">
        <div className="container-xl max-w-4xl mx-auto flex flex-col gap-8">
          <div className="card-base p-8 bg-white border border-emerald-900/10 rounded-3xl shadow-sm">
            <div className="flex items-center gap-3 mb-4 pb-4 border-b border-gray-100">
              <div className="w-10 h-10 rounded-xl bg-sky-50 text-sky-800 flex items-center justify-center">
                <ShieldCheck size={20} />
              </div>
              <div>
                <h3 className="font-display text-xl font-bold text-[var(--color-green-900)]">
                  Safety and Supervision Standards
                </h3>
                <p className="text-xs text-[var(--color-green-700)]">
                  Specialized health and weather precautions calibrated for this seasonal track.
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {camp.safetyConsiderations.map((safety, idx) => (
                <div
                  key={idx}
                  className="flex items-start gap-2.5 text-xs text-[var(--color-green-800)] leading-relaxed p-3 rounded-xl bg-[var(--color-green-50)]"
                >
                  <CheckCircle2 size={16} className="text-emerald-700 shrink-0 mt-0.5" />
                  <span>{safety}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Mandatory Season & Weather Non-Guarantee Disclaimer */}
          <div className="p-6 rounded-2xl bg-amber-50 border border-amber-200/90 flex items-start gap-4">
            <AlertTriangle size={20} className="text-amber-800 shrink-0 mt-1" />
            <div className="text-xs text-amber-900 leading-relaxed">
              <strong className="block text-sm font-semibold mb-1">
                Seasonal and Operational Notice
              </strong>
              Outdoor agricultural activities, seasonal planting, and harvesting sessions depend on geographic location, prevailing weather, crop maturity, facility availability, and safety clearance. FURAA prioritizes camper well-being and does not guarantee a particular crop harvest or specific outdoor activity on fixed dates if outdoor conditions are unfavorable. Alternative covered workshops are conducted during extreme rain or heat.
            </div>
          </div>
        </div>
      </section>

      {/* Explore Other Seasonal Camps Switcher */}
      <section className="section-pad bg-white border-t border-gray-100">
        <div className="container-xl">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <span className="text-xs uppercase font-bold tracking-widest text-[var(--color-gold-600)]">
              Year-Round Seasonal Tracks
            </span>
            <h3 className="font-display text-2xl font-bold text-[var(--color-green-900)] mt-1">
              Explore Other Special Camps
            </h3>
            <p className="text-xs sm:text-sm text-[var(--color-green-700)] mt-1">
              Discover how FURAA programs align with the natural agrarian calendar across every season.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {otherCamps.map((other) => {
              const OtherIcon = iconMap[other.id] || Sparkles;
              return (
                <Link
                  key={other.id}
                  href={other.slug}
                  className="card-base p-6 bg-[var(--color-cream)] hover:bg-white border border-emerald-900/10 hover:border-emerald-300 transition-all rounded-3xl flex flex-col justify-between group shadow-sm"
                >
                  <div>
                    <div className="flex items-center justify-between mb-3">
                      <span className="text-xs px-2.5 py-0.5 rounded-full bg-white border border-gray-200 font-semibold text-emerald-800">
                        {other.seasonMonths}
                      </span>
                      <OtherIcon size={20} className="text-emerald-700" />
                    </div>
                    <h4 className="font-display text-xl font-bold text-[var(--color-green-900)] group-hover:text-emerald-700 transition-colors">
                      {other.title}
                    </h4>
                    <p className="text-xs text-[var(--color-green-700)] mt-2 leading-relaxed">
                      {other.shortDescription}
                    </p>
                  </div>
                  <div className="mt-4 pt-4 border-t border-emerald-900/10 flex items-center justify-between text-xs font-bold text-emerald-800">
                    <span>Explore {other.title}</span>
                    <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* Book a Demo CTA */}
      <section className="section-pad pt-0 bg-white">
        <div className="container-xl">
          <CtaBlock
            title={`Enroll in ${camp.title} with FURAA`}
            description="Whether you are an interested parent or a school leader looking to host an exclusive cohort batch, connect with our camp coordinators."
            buttonText="Book a Demo / Camp Inquiry"
            href={`/contact?subject=${encodeURIComponent(camp.ctaSubject)}`}
          />
        </div>
      </section>
    </>
  );
}

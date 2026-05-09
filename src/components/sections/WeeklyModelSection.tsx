import SectionHeader from "@/components/ui/SectionHeader";
import { brand } from "@/config/brand";

const schedule = [
  {
    day: "Friday",
    label: "Theory in School",
    tagline: "Educator visits the classroom",
    color: "var(--color-sky-500)",
    bgColor: "var(--color-sky-100)",
    items: [
      "Agriculture & ecology concept session",
      "Visual aids, worksheets, discussion",
      "Introduction to next day's farm activity",
      "Student preparation and Q&A",
    ],
  },
  {
    day: "Saturday",
    label: "Farm Learning Day",
    tagline: "Students travel to the farm",
    color: "var(--color-green-700)",
    bgColor: "var(--color-green-100)",
    items: [
      "Welcome drink and farm costume",
      "Hands-on farm activities and harvesting",
      "Folk art, rural games, or cultural session",
      "Nutrition tasting and reflection circle",
    ],
  },
];

const logistics = [
  { label: "Pickup & Drop", detail: "Transport arranged where opted, responsibility from school gate" },
  { label: "Farm Costume", detail: "Mandatory entry dress for all students — builds farm identity" },
  { label: "Trained Mentors", detail: `Certified ${brand.shortName} volunteers supervise all activity zones` },
  { label: "Class Groups", detail: "Small, age-appropriate batches for focused engagement" },
];

export default function WeeklyModelSection() {
  return (
    <section
      id="weekly-model"
      className="section-pad bg-white"
      aria-label="The weekly academic model"
    >
      <div className="container-xl">
        <SectionHeader
          badge="Seamless Integration"
          badgeVariant="gold"
          title="Designed for the School Calendar"
          subtitle={`The ${brand.shortName} schedule is designed to fit seamlessly into a school's weekly calendar — minimal disruption, maximum impact.`}
        />

        {/* Day cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {schedule.map((day) => (
            <div
              key={day.day}
              className="card-base overflow-hidden"
            >
              <div
                className="px-8 py-5 flex items-center justify-between"
                style={{ background: day.bgColor }}
              >
                <div>
                  <p
                    className="text-xs font-semibold uppercase tracking-widest mb-1"
                    style={{ color: day.color }}
                  >
                    {day.day}
                  </p>
                  <h3 className="text-h3" style={{ color: "var(--color-green-900)" }}>
                    {day.label}
                  </h3>
                  <p className="text-sm mt-1 opacity-70" style={{ color: "var(--color-green-800)" }}>
                    {day.tagline}
                  </p>
                </div>
                <div
                  className="text-4xl font-display font-bold opacity-15"
                  style={{ color: day.color }}
                >
                  {day.day.charAt(0)}
                </div>
              </div>
              <ul className="p-8 flex flex-col gap-3">
                {day.items.map((item) => (
                  <li
                    key={item}
                    className="flex items-center gap-3 text-sm"
                    style={{ color: "var(--color-green-700)" }}
                  >
                    <span
                      className="w-2 h-2 rounded-full shrink-0"
                      style={{ background: day.color }}
                    />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Logistics strip */}
        <div
          className="rounded-3xl p-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
          style={{ background: "var(--color-green-900)" }}
        >
          {logistics.map((item) => (
            <div key={item.label}>
              <p
                className="text-xs font-semibold uppercase tracking-widest mb-2"
                style={{ color: "var(--color-gold-500)" }}
              >
                {item.label}
              </p>
              <p
                className="text-sm leading-relaxed"
                style={{ color: "var(--color-green-200)" }}
              >
                {item.detail}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

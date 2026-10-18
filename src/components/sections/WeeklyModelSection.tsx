import SectionHeader from "@/components/ui/SectionHeader";
import { brand } from "@/config/brand";

const phases = [
  {
    label: "Phase 1",
    title: "Classroom Learning",
    tagline: "Theory and concept introduction at school",
    color: "var(--color-sky-500)",
    bgColor: "var(--color-sky-100)",
    items: [
      "Agriculture and ecology concept session",
      "Visual aids, worksheets, discussion",
      "Introduction to the upcoming practical activity",
      "Student preparation and Q&A",
    ],
  },
  {
    label: "Phase 2",
    title: "Farm Practical Session",
    tagline: "Hands-on learning at the farm",
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
  { label: "Pickup and Drop", detail: "Transport arranged where opted, responsibility from school gate" },
  { label: "Farm Costume", detail: "Mandatory entry dress for all students — builds farm identity" },
  { label: "Trained Mentors", detail: `Trained ${brand.shortName} volunteers supervise all activity zones` },
  { label: "Class Groups", detail: "Small, age-appropriate batches for focused engagement" },
];

export default function WeeklyModelSection() {
  return (
    <section
      id="weekly-model"
      className="section-pad bg-white"
      aria-label="The FURAA learning model"
    >
      <div className="container-xl">
        <SectionHeader
          badge="Seamless Integration"
          badgeVariant="gold"
          title="Designed for the School Calendar"
          subtitle={`The ${brand.shortName} schedule is designed to fit seamlessly into each school's academic calendar — theory sessions followed by practical sessions, with scheduling coordinated to minimise disruption.`}
        />

        {/* Phase cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {phases.map((phase) => (
            <div
              key={phase.label}
              className="card-base overflow-hidden"
            >
              <div
                className="px-8 py-5 flex items-center justify-between"
                style={{ background: phase.bgColor }}
              >
                <div>
                  <p
                    className="text-xs font-semibold uppercase tracking-widest mb-1"
                    style={{ color: phase.color }}
                  >
                    {phase.label}
                  </p>
                  <h3 className="text-h3" style={{ color: "var(--color-green-900)" }}>
                    {phase.title}
                  </h3>
                  <p className="text-sm mt-1 opacity-70" style={{ color: "var(--color-green-800)" }}>
                    {phase.tagline}
                  </p>
                </div>
                <div
                  className="text-4xl font-display font-bold opacity-15"
                  style={{ color: phase.color }}
                >
                  {phase.label.replace("Phase ", "")}
                </div>
              </div>
              <ul className="p-8 flex flex-col gap-3">
                {phase.items.map((item) => (
                  <li
                    key={item}
                    className="flex items-center gap-3 text-sm"
                    style={{ color: "var(--color-green-700)" }}
                  >
                    <span
                      className="w-2 h-2 rounded-full shrink-0"
                      style={{ background: phase.color }}
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

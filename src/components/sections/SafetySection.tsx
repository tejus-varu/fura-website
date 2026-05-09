import { ShieldCheck, UserCheck, Bus, HardHat, Waves, Shirt } from "lucide-react";
import SectionHeader from "@/components/ui/SectionHeader";

const safetyItems = [
  {
    icon: ShieldCheck,
    title: "Dedicated Child-Safe Activity Zones",
    description:
      "Every activity area is assessed and designated safe before students arrive. Hazardous areas are clearly marked and completely off-limits.",
    color: "var(--color-green-700)",
    bgColor: "var(--color-green-100)",
  },
  {
    icon: UserCheck,
    title: "Trained & Certified Mentors",
    description:
      "All FURA volunteers are trained in child supervision, first aid, and age-appropriate facilitation. Mentor-to-student ratios are strictly maintained.",
    color: "var(--color-sky-700)",
    bgColor: "var(--color-sky-100)",
  },
  {
    icon: Bus,
    title: "End-to-End Transport Responsibility",
    description:
      "Where transport is opted, FURA takes full responsibility from school gate to farm and back — with verified drivers and accompanying mentors.",
    color: "var(--color-gold-700)",
    bgColor: "var(--color-gold-100)",
  },
  {
    icon: Waves,
    title: "Supervised Farm Pond (Under 2 Feet)",
    description:
      "For younger students, any water-based activity is conducted in a controlled farm pond maintained at a maximum of 2 feet depth, under direct mentor supervision at all times.",
    color: "var(--color-sky-500)",
    bgColor: "var(--color-sky-100)",
  },
  {
    icon: Shirt,
    title: "Mandatory Farm Costume",
    description:
      "All students wear a FURA farm costume before entering the farmland — creating safety awareness, farm identity, and a clear visual boundary between learning zones.",
    color: "var(--color-brown-500)",
    bgColor: "var(--color-brown-100)",
  },
  {
    icon: HardHat,
    title: "School Communication & Consent",
    description:
      "Parents and school management receive a full safety briefing, activity schedule, and consent process before each session. Nothing is unplanned.",
    color: "var(--color-orange-500)",
    bgColor: "var(--color-orange-100)",
  },
];

export default function SafetySection() {
  return (
    <section
      id="safety"
      className="section-pad"
      style={{
        background: "linear-gradient(180deg, var(--color-green-900) 0%, var(--color-green-950) 100%)",
      }}
      aria-label="Safety and operations"
    >
      <div className="container-xl">
        <SectionHeader
          badge="Safety & Trust"
          badgeVariant="sky"
          title="Your Students Are Our Responsibility"
          subtitle="School management trusts us with their students. We take that seriously. Every FURA session is planned, supervised, and transparent."
          titleClassName="!text-white"
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {safetyItems.map((item) => (
            <div
              key={item.title}
              className="rounded-2xl p-6 flex flex-col gap-4"
              style={{
                background: "rgba(255,255,255,0.05)",
                border: "1px solid rgba(255,255,255,0.1)",
                backdropFilter: "blur(8px)",
              }}
            >
              <div
                className="w-11 h-11 rounded-xl flex items-center justify-center"
                style={{ background: item.bgColor }}
              >
                <item.icon size={20} style={{ color: item.color }} />
              </div>
              <div>
                <h3
                  className="font-display text-base font-semibold mb-2"
                  style={{ color: "white" }}
                >
                  {item.title}
                </h3>
                <p
                  className="text-sm leading-relaxed"
                  style={{ color: "var(--color-green-300)" }}
                >
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Trust bar */}
        <div
          className="mt-12 rounded-3xl p-8 text-center"
          style={{
            background: "rgba(201,149,42,0.1)",
            border: "1px solid rgba(201,149,42,0.3)",
          }}
        >
          <p
            className="font-display text-xl font-semibold mb-2"
            style={{ color: "var(--color-gold-300)" }}
          >
            Every session is fully documented and communicated to the school coordinator.
          </p>
          <p
            className="text-sm max-w-xl mx-auto"
            style={{ color: "var(--color-green-300)" }}
          >
            FURA operates on a transparent school-partnership model. Principals and coordinators
            receive full activity reports, parent communication templates, and consent documentation.
          </p>
        </div>
      </div>
    </section>
  );
}

import { BookOpen, Leaf, Lightbulb, ArrowRight } from "lucide-react";
import SectionHeader from "@/components/ui/SectionHeader";
import { brand } from "@/config/brand";

const steps = [
  {
    id: "theory",
    step: "Phase 1",
    day: "Classroom Learning",
    icon: BookOpen,
    title: "Learn in the Classroom",
    description:
      `A trained ${brand.shortName} educator visits the school and delivers a structured theory session. Students are introduced to concepts in agriculture, ecology, folk culture, and nutrition — priming their curiosity before the outdoor experience. Sessions are scheduled in coordination with the school's academic calendar.`,
    points: [
      "Curriculum-linked content for Classes 1–10",
      "Interactive worksheets, storytelling, and visual aids",
      "Concept introduction aligned to the upcoming practical session",
      "Activity briefing and field preparation guidance",
    ],
    color: "var(--color-sky-500)",
    bgColor: "var(--color-sky-100)",
    stepColor: "var(--color-sky-700)",
  },
  {
    id: "farm",
    step: "Phase 2",
    day: "Practical Experience",
    icon: Leaf,
    title: "Experience on the Farm",
    description:
      "Students visit the farm and apply what they learned in the classroom. Sessions are structured, supervised, and designed to make abstract concepts feel real — through farming, folk art, rural games, and healthy food experiences. Practical sessions are scheduled in coordination with each school.",
    points: [
      "Hands-on farm activities: sowing, watering, harvesting",
      "Folk art, pottery, rural games, and cultural immersion",
      "Millet tasting, nutrition awareness, welcome natural drinks",
      "Mandatory farm costume, mentor-supervised safety zones",
    ],
    color: "var(--color-green-700)",
    bgColor: "var(--color-green-100)",
    stepColor: "var(--color-green-800)",
  },
  {
    id: "reflect",
    step: "Phase 3",
    day: "Reflection & Application",
    icon: Lightbulb,
    title: "Reflect, Create & Apply",
    description:
      "After the practical experience, students consolidate their learning through creative output — journaling, artwork, group discussions, or waste-to-art projects. This closes the learning loop and builds a lasting connection with what they experienced.",
    points: [
      "Reflection worksheets and guided group discussion",
      "Waste-to-art projects from farm materials",
      "Student showcase and presentation opportunities",
      "Connection back to classroom curriculum and life skills",
    ],
    color: "var(--color-gold-700)",
    bgColor: "var(--color-gold-100)",
    stepColor: "var(--color-gold-900)",
  },
];

export default function HowItWorksSection() {
  return (
    <section
      id="how-it-works"
      className="section-pad"
      style={{ background: "var(--color-cream)" }}
      aria-label={`How the ${brand.shortName} program works`}
    >
      <div className="container-xl">
        <SectionHeader
          badge={`The ${brand.shortName} Model`}
          badgeVariant="green"
          title="Learn. Experience. Create."
          subtitle="Our three-phase model ensures students arrive at the farm prepared, leave with a real experience, and carry the learning forward through creative reflection."
        />

        {/* Steps grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-10">
          {steps.map((step, index) => (
            <div
              key={step.id}
              className="card-base overflow-hidden flex flex-col"
            >
              {/* Step header */}
              <div
                className="px-7 py-5 flex items-start gap-4"
                style={{ background: step.bgColor }}
              >
                <div
                  className="w-12 h-12 rounded-2xl flex items-center justify-center shrink-0"
                  style={{ background: step.color }}
                >
                  <step.icon size={22} color="white" />
                </div>
                <div>
                  <span
                    className="badge-pill text-xs mb-2 inline-flex"
                    style={{ background: step.stepColor, color: "white" }}
                  >
                    {step.step} · {step.day}
                  </span>
                  <h3
                    className="text-h3"
                    style={{ color: "var(--color-green-900)" }}
                  >
                    {step.title}
                  </h3>
                </div>
              </div>

              {/* Step body */}
              <div className="p-7 flex flex-col gap-5 flex-1">
                <p
                  className="text-sm leading-relaxed"
                  style={{ color: "var(--color-green-800)" }}
                >
                  {step.description}
                </p>
                <ul className="flex flex-col gap-2 mt-auto">
                  {step.points.map((point) => (
                    <li
                      key={point}
                      className="flex items-start gap-3 text-sm"
                      style={{ color: "var(--color-green-700)" }}
                    >
                      <span
                        className="w-5 h-5 rounded-full flex items-center justify-center shrink-0 mt-0.5"
                        style={{ background: step.bgColor }}
                      >
                        <ArrowRight size={10} style={{ color: step.color }} />
                      </span>
                      {point}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Step number watermark */}
              <div
                className="px-7 pb-5 text-right"
                style={{ color: step.color, opacity: 0.15 }}
              >
                <span className="font-display text-5xl font-bold">
                  {index + 1}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Connector note */}
        <p
          className="text-center text-sm font-medium opacity-60"
          style={{ color: "var(--color-green-700)" }}
        >
          The Classroom → Practical → Reflection cycle repeats throughout the
          academic term, building cumulative knowledge and a genuine relationship
          with nature. Scheduling is flexible and coordinated with each school.
        </p>
      </div>
    </section>
  );
}

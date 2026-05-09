import { testimonials } from "@/config/testimonials";
import SectionHeader from "@/components/ui/SectionHeader";
import { Quote } from "lucide-react";
import { brand } from "@/config/brand";

export default function TestimonialsSection() {
  return (
    <section
      id="testimonials"
      className="section-pad"
      style={{ background: "var(--color-cream)" }}
      aria-label="School testimonials"
    >
      <div className="container-xl">
        <SectionHeader
          badge="From Schools"
          badgeVariant="green"
          title="What School Leaders Are Saying"
          subtitle={`Feedback from principals, coordinators, and trustees who have seen ${brand.shortName} programs in action.`}
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((t) => (
            <div
              key={t.id}
              className="card-base p-7 flex flex-col gap-5"
            >
              {/* Quote icon */}
              <div
                className="w-10 h-10 rounded-xl flex items-center justify-center"
                style={{ background: "var(--color-green-100)" }}
              >
                <Quote size={18} style={{ color: "var(--color-green-700)" }} />
              </div>

              {/* Quote text */}
              <blockquote
                className="text-sm leading-relaxed flex-1 italic"
                style={{ color: "var(--color-green-800)" }}
              >
                &ldquo;{t.quote}&rdquo;
              </blockquote>

              {/* Author */}
              <div className="flex items-center gap-3 pt-4 border-t border-gray-100">
                <div
                  className="w-10 h-10 rounded-full flex items-center justify-center text-sm font-bold shrink-0"
                  style={{
                    background: "var(--color-green-700)",
                    color: "white",
                  }}
                >
                  {t.initials}
                </div>
                <div>
                  <p
                    className="text-sm font-semibold"
                    style={{ color: "var(--color-green-900)" }}
                  >
                    {t.author}
                  </p>
                  <p className="text-xs" style={{ color: "var(--color-green-600)" }}>
                    {t.role}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

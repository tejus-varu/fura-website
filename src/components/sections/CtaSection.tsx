import { ArrowRight, CalendarCheck } from "lucide-react";
import { brand } from "@/config/brand";
import Button from "@/components/ui/Button";

export default function CtaSection() {
  return (
    <section
      id="book-demo"
      className="section-pad"
      style={{
        background: "linear-gradient(135deg, var(--color-green-900) 0%, var(--color-brown-900) 100%)",
      }}
      aria-label="Call to action — book a demo"
    >
      <div className="container-xl">
        <div className="text-center max-w-2xl mx-auto flex flex-col items-center gap-6">
          {/* Eyebrow */}
          <span
            className="badge-pill border border-[var(--color-gold-500)]/40 text-[var(--color-gold-500)] bg-[var(--color-gold-500)]/10"
          >
            For School Management
          </span>

          {/* Headline */}
          <h2
            className="text-h1 font-display"
            style={{ color: "white" }}
          >
            Ready to Bring {brand.name} to Your School?
          </h2>

          {/* Sub-copy */}
          <p
            className="text-base leading-relaxed"
            style={{ color: "var(--color-green-200)" }}
          >
            Schedule a free 30-minute partnership demo with our team. We will walk you through the
            program structure, safety protocols, curriculum alignment, and partnership terms — tailored
            for your school&apos;s grade levels and academic calendar.
          </p>

          {/* Logistics detail */}
          <div
            className="flex flex-wrap justify-center gap-6 text-sm"
            style={{ color: "var(--color-green-300)" }}
          >
            <span className="flex items-center gap-2">
              <CalendarCheck size={16} style={{ color: "var(--color-gold-500)" }} />
              30-minute online or in-person session
            </span>
            <span className="flex items-center gap-2">
              <CalendarCheck size={16} style={{ color: "var(--color-gold-500)" }} />
              No commitment required
            </span>
            <span className="flex items-center gap-2">
              <CalendarCheck size={16} style={{ color: "var(--color-gold-500)" }} />
              Customised to your school board
            </span>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-wrap justify-center gap-4 mt-2">
            <Button href="/contact" variant="primary" size="lg">
              Book a School Partnership Demo
              <ArrowRight size={18} />
            </Button>
            <Button
              href="/programs"
              variant="outline"
              size="lg"
              className="!border-white/30 !text-white hover:!bg-white/10"
            >
              View All Programs
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}

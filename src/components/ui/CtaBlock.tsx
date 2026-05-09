import { ArrowRight } from "lucide-react";
import Button from "./Button";
import { brand } from "@/config/brand";

interface CtaBlockProps {
  title?: string;
  description?: string;
  buttonText?: string;
  href?: string;
  className?: string;
}

export default function CtaBlock({
  title = `Ready to Bring ${brand.shortName} to Your School?`,
  description = "Schedule a free 30-minute partnership demo. We will walk you through the program structure, safety protocols, and curriculum alignment tailored for your school's grade levels.",
  buttonText = "Book a Demo",
  href = "/contact",
  className = "",
}: CtaBlockProps) {
  return (
    <div
      className={`relative overflow-hidden rounded-3xl p-8 md:p-12 text-center flex flex-col items-center gap-6 ${className}`}
      style={{
        background: "linear-gradient(135deg, var(--color-green-700) 0%, var(--color-green-800) 100%)",
      }}
    >
      <div
        className="absolute inset-0 opacity-10 pointer-events-none"
        style={{
          backgroundImage: `radial-gradient(circle, var(--color-green-400) 1px, transparent 1px)`,
          backgroundSize: "24px 24px",
        }}
      />
      <div className="relative z-10 max-w-2xl mx-auto flex flex-col items-center gap-6">
        <h2 className="text-h2 text-white">{title}</h2>
        <p className="text-base" style={{ color: "var(--color-green-200)" }}>
          {description}
        </p>
        <Button href={href} variant="primary" size="lg" className="mt-2">
          {buttonText}
          <ArrowRight size={18} />
        </Button>
      </div>
    </div>
  );
}

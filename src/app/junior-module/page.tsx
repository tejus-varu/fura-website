import Link from "next/link";
import { brand } from "@/config/brand";
import { ArrowRight, Sparkles } from "lucide-react";
import Button from "@/components/ui/Button";

export const metadata = {
  title: `Junior Nature Module (Foundation) — ${brand.seo.siteName}`,
  description: `A lighter, safer, sensory-based nature and agriculture module specifically designed for Classes 1–4 as part of the Foundation Module.`,
};

export default function JuniorModulePage() {
  return (
    <>
      <div className="pt-28 pb-16 gradient-hero">
        <div className="container-xl text-center">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white/10 text-white text-xs font-semibold mb-4 border border-white/20">
            <Sparkles size={14} className="text-[var(--color-gold-400)]" />
            <span>Now Part of the Foundation Module</span>
          </div>
          <h1 className="text-h1 text-white font-display mb-4">Junior Nature Module</h1>
          <p className="text-base max-w-xl mx-auto" style={{ color: "var(--color-green-200)" }}>
            A sensory-based introduction to nature, farming, and food for Classes 1–4.
          </p>
          <div className="mt-6 flex justify-center">
            <Button href="/modules/foundation" variant="primary" size="md">
              View Complete Foundation Module (Classes 1–4)
              <ArrowRight size={16} />
            </Button>
          </div>
        </div>
      </div>

      <section className="section-pad bg-white">
        <div className="container-xl max-w-4xl mx-auto">
          <div className="flex flex-col gap-10">
            {/* Informative redirect alert */}
            <div className="p-4 rounded-2xl bg-emerald-50 border border-emerald-200 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
              <div>
                <p className="text-sm font-bold text-[var(--color-green-900)]">
                  Looking for our standardized curriculum modules?
                </p>
                <p className="text-xs text-[var(--color-green-700)] mt-0.5">
                  Our early years offering has been expanded into the comprehensive Foundation Module for Classes 1–4.
                </p>
              </div>
              <Link
                href="/modules/foundation"
                className="text-xs font-bold text-emerald-800 hover:text-emerald-950 underline shrink-0"
              >
                Go to Foundation Module →
              </Link>
            </div>

            <div>
              <h2 className="text-h2 mb-6" style={{ color: "var(--color-green-900)" }}>A Sensory-First Approach</h2>
              <p className="text-base leading-relaxed mb-4" style={{ color: "var(--color-green-800)" }}>
                For younger students (Classes 1 to 4), we focus on wonder, tactile exploration, and building comfort in outdoor environments rather than intensive technical science.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="p-6 rounded-2xl border" style={{ borderColor: "var(--color-green-100)" }}>
                <div className="w-10 h-10 rounded-xl bg-green-50 flex items-center justify-center mb-4">
                  <span className="text-xl">🌱</span>
                </div>
                <h3 className="font-semibold text-sm mb-2" style={{ color: "var(--color-green-900)" }}>Touch & Grow</h3>
                <p className="text-xs" style={{ color: "var(--color-green-700)" }}>Feeling different soil textures, handling soft seeds, and watering young saplings.</p>
              </div>
              <div className="p-6 rounded-2xl border" style={{ borderColor: "var(--color-green-100)" }}>
                <div className="w-10 h-10 rounded-xl bg-green-50 flex items-center justify-center mb-4">
                  <span className="text-xl">🎨</span>
                </div>
                <h3 className="font-semibold text-sm mb-2" style={{ color: "var(--color-green-900)" }}>Nature Art</h3>
                <p className="text-xs" style={{ color: "var(--color-green-700)" }}>Leaf-stamping, flower-dyeing, and simple clay modeling without complex tools.</p>
              </div>
              <div className="p-6 rounded-2xl border" style={{ borderColor: "var(--color-green-100)" }}>
                <div className="w-10 h-10 rounded-xl bg-green-50 flex items-center justify-center mb-4">
                  <span className="text-xl">🦋</span>
                </div>
                <h3 className="font-semibold text-sm mb-2" style={{ color: "var(--color-green-900)" }}>Guided Discovery</h3>
                <p className="text-xs" style={{ color: "var(--color-green-700)" }}>Short, supervised walks to spot butterflies, birds, and diverse leaf shapes.</p>
              </div>
            </div>

            <div className="mt-6 p-8 rounded-3xl" style={{ background: "var(--color-earth)" }}>
              <h3 className="text-h3 mb-4" style={{ color: "var(--color-green-900)" }}>Special Safety for Classes 1–4</h3>
              <ul className="flex flex-col gap-3">
                <li className="flex items-start gap-3">
                  <div className="w-1.5 h-1.5 rounded-full mt-1.5 shrink-0 bg-green-600" />
                  <p className="text-sm" style={{ color: "var(--color-green-800)" }}><strong>Zero-Tool Policy:</strong> Junior students do not handle any bladed or sharp agricultural tools.</p>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-1.5 h-1.5 rounded-full mt-1.5 shrink-0 bg-green-600" />
                  <p className="text-sm" style={{ color: "var(--color-green-800)" }}><strong>Designated Soft-Zones:</strong> Activities happen on soft-ground areas away from main farm machinery corridors.</p>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-1.5 h-1.5 rounded-full mt-1.5 shrink-0 bg-green-600" />
                  <p className="text-sm" style={{ color: "var(--color-green-800)" }}><strong>Higher Mentor Ratio:</strong> One mentor for every 8–10 junior students for constant supervision.</p>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

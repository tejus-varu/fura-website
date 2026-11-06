"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { Apple, ArrowRight } from "lucide-react";

export default function NutritionPage() {
  const router = useRouter();

  useEffect(() => {
    router.replace("/programs/furaa-farms#nutri-gardens");
  }, [router]);

  return (
    <div className="min-h-screen pt-32 pb-20 flex items-center justify-center bg-[var(--color-cream)]">
      <div className="max-w-md mx-auto p-8 rounded-3xl bg-white text-center shadow-lg border border-gray-100">
        <div className="w-12 h-12 rounded-2xl bg-emerald-50 text-emerald-800 flex items-center justify-center mx-auto mb-4">
          <Apple size={24} />
        </div>
        <h1 className="text-xl font-bold font-display text-[var(--color-green-950)] mb-2">
          FURAA Nutri Gardens
        </h1>
        <p className="text-xs text-[var(--color-green-700)] leading-relaxed mb-6">
          Food literacy and wholesome growing practices have been integrated into our dedicated FURAA Nutri Gardens experience. Redirecting you now...
        </p>
        <Link
          href="/programs/furaa-farms#nutri-gardens"
          className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-emerald-800 text-white text-xs font-bold hover:bg-emerald-900 transition-colors"
        >
          <span>Go to Nutri Gardens</span>
          <ArrowRight size={14} />
        </Link>
      </div>
    </div>
  );
}

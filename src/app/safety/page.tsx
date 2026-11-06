"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { ShieldCheck, ArrowRight } from "lucide-react";

export default function SafetyPage() {
  const router = useRouter();

  useEffect(() => {
    router.replace("/programs/furaa-farms");
  }, [router]);

  return (
    <div className="min-h-screen pt-32 pb-20 flex items-center justify-center bg-[var(--color-cream)]">
      <div className="max-w-md mx-auto p-8 rounded-3xl bg-white text-center shadow-lg border border-gray-100">
        <div className="w-12 h-12 rounded-2xl bg-emerald-50 text-emerald-800 flex items-center justify-center mx-auto mb-4">
          <ShieldCheck size={24} />
        </div>
        <h1 className="text-xl font-bold font-display text-[var(--color-green-950)] mb-2">
          Safety and Operational Protocols
        </h1>
        <p className="text-xs text-[var(--color-green-700)] leading-relaxed mb-6">
          Operational safeguards and age-appropriate supervision protocols are detailed within each dedicated program category. Redirecting you now...
        </p>
        <Link
          href="/programs/furaa-farms"
          className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-emerald-800 text-white text-xs font-bold hover:bg-emerald-900 transition-colors"
        >
          <span>Explore Farm Experiences</span>
          <ArrowRight size={14} />
        </Link>
      </div>
    </div>
  );
}

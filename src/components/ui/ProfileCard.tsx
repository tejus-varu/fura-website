"use client";

import React, { useState } from "react";
import type { TeamMember } from "@/config/team";
import TeamPortraitFallback from "@/components/ui/TeamPortraitFallback";
import { BookOpen, TrendingUp, Sprout, Network } from "lucide-react";

interface ProfileCardProps {
  member: TeamMember;
}

export default function ProfileCard({ member }: ProfileCardProps) {
  const [imgError, setImgError] = useState(false);

  // Profession motif icon mapping
  const MotifIcon =
    member.fallbackType === "agriculture-education"
      ? BookOpen
      : member.fallbackType === "strategy-innovation"
      ? TrendingUp
      : member.fallbackType === "agronomy-sustainability"
      ? Sprout
      : Network;

  return (
    <article
      tabIndex={0}
      aria-label={`${member.name}, ${member.title}`}
      className="group relative bg-white rounded-3xl overflow-hidden border border-[var(--color-green-100)] hover:border-emerald-500/60 focus-within:border-emerald-500/60 focus-visible:border-emerald-500/60 hover:shadow-lg focus-within:shadow-lg focus-visible:shadow-lg hover:-translate-y-1.5 focus-within:-translate-y-1.5 focus-visible:-translate-y-1.5 transition-all duration-200 ease-out flex flex-col h-full p-4 sm:p-5 outline-none focus-visible:ring-2 focus-visible:ring-emerald-600/40 motion-reduce:transform-none motion-reduce:transition-none"
    >
      {/* ─── Portrait Frame with Reserved Aspect Ratio (4:5) ───────────── */}
      <div className="relative aspect-[4/5] w-full overflow-hidden rounded-2xl bg-[var(--color-green-950)] shrink-0 shadow-inner">
        {member.image?.src && !imgError ? (
          // eslint-disable-next-line @next/next/no-img-element
          <img
            src={member.image.src}
            alt={member.image.alt || member.name}
            className="w-full h-full object-cover filter grayscale contrast-[1.05] transition-all duration-300 ease-out group-hover:scale-[1.02] group-focus-within:scale-[1.02] group-hover:contrast-100"
            style={{
              objectPosition: member.image.objectPosition || "center 20%",
            }}
            loading="lazy"
            onError={() => setImgError(true)}
          />
        ) : (
          <TeamPortraitFallback
            type={member.fallbackType}
            name={member.name}
            title={member.title}
          />
        )}

        {/* Subtle Vignette Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-[var(--color-green-950)]/60 via-transparent to-transparent pointer-events-none" />

        {/* Floating Profession Motif Icon (Softly Highlights on Card Hover/Focus) */}
        <div
          aria-hidden="true"
          className="absolute top-3 right-3 w-8 h-8 rounded-full bg-black/50 backdrop-blur-md border border-white/20 text-white flex items-center justify-center transition-all duration-200 ease-out group-hover:scale-110 group-hover:border-emerald-400 group-hover:bg-emerald-950/85 group-hover:text-emerald-300 group-focus-within:scale-110 group-focus-within:border-emerald-400 group-focus-within:text-emerald-300 shadow-sm"
        >
          <MotifIcon size={14} />
        </div>
      </div>

      {/* ─── Profile Content Hierarchy ─────────────────────────────────── */}
      <div className="mt-4 flex flex-col flex-1 justify-between">
        <div>
          {/* Focus Area Visual Label */}
          <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[11px] font-semibold bg-emerald-50 text-emerald-900 border border-emerald-200/80 group-hover:bg-emerald-100/90 group-hover:border-emerald-300 group-hover:text-emerald-950 group-focus-within:bg-emerald-100/90 group-focus-within:border-emerald-300 transition-colors duration-200">
            <span
              aria-hidden="true"
              className="w-1.5 h-1.5 rounded-full bg-emerald-600 group-hover:scale-125 group-focus-within:scale-125 transition-transform duration-200"
            />
            <span>{member.focus}</span>
          </div>

          {/* Member Name */}
          <h3 className="font-display text-lg sm:text-xl font-bold text-[var(--color-green-950)] leading-snug mt-3 mb-1">
            {member.name}
          </h3>

          {/* Role / Title */}
          <p className="text-xs font-semibold uppercase tracking-wider text-[var(--color-gold-600)] mb-3">
            {member.title}
          </p>

          {/* Concise Readable Biography (Visible at Rest) */}
          <p className="text-xs sm:text-sm text-[var(--color-green-800)] leading-relaxed">
            {member.bio}
          </p>
        </div>

        {/* Card Base Accent Line */}
        <div className="mt-5 pt-3 border-t border-gray-100 flex items-center justify-between text-[11px] text-[var(--color-green-700)]">
          <span className="font-medium text-emerald-800">FURAA Academy</span>
          <span className="text-[10px] uppercase tracking-wider text-gray-500 font-medium">
            Leadership
          </span>
        </div>
      </div>
    </article>
  );
}

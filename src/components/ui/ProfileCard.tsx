import React from "react";
import { User, Award } from "lucide-react";
import type { TeamMember } from "@/config/team";

interface ProfileCardProps {
  member: TeamMember;
}

export default function ProfileCard({ member }: ProfileCardProps) {
  return (
    <div className="card-base bg-white rounded-3xl overflow-hidden border border-[var(--color-green-100)] hover:border-emerald-500/40 shadow-xs hover:shadow-md transition-all duration-300 flex flex-col h-full group">
      {/* Profile Image / Portrait Placeholder */}
      <div className="relative aspect-[4/3] sm:aspect-square w-full overflow-hidden bg-[var(--color-green-950)]">
        {member.image?.src ? (
          // eslint-disable-next-line @next/next/no-img-element
          <img
            src={member.image.src}
            alt={member.image.alt || member.name}
            className="w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-105 filter brightness-95"
            loading="lazy"
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center bg-emerald-900/40 text-emerald-200">
            <User size={48} className="opacity-60" />
          </div>
        )}

        {/* Subtle gradient vignette */}
        <div className="absolute inset-0 bg-gradient-to-t from-[var(--color-green-950)]/70 via-transparent to-transparent pointer-events-none" />

        {/* Badge indicator */}
        <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between text-[11px] text-white/90">
          <span className="px-2.5 py-1 rounded-full bg-black/40 backdrop-blur-md border border-white/20 font-medium">
            Leadership &amp; Advisory
          </span>
        </div>
      </div>

      {/* Card Content */}
      <div className="p-5 sm:p-6 flex flex-col flex-1 justify-between">
        <div>
          <span className="text-[11px] font-bold uppercase tracking-wider text-emerald-700 block mb-1">
            {member.role}
          </span>
          <h3 className="font-display text-base sm:text-lg font-bold text-[var(--color-green-950)] leading-snug mb-2">
            {member.name}
          </h3>
          <p className="text-xs text-[var(--color-green-700)] italic leading-relaxed">
            &ldquo;{member.bio}&rdquo;
          </p>
        </div>

        {member.qualifications && (
          <div className="mt-4 pt-3 border-t border-gray-100 flex items-center gap-1.5 text-[11px] text-[var(--color-green-800)] font-medium">
            <Award size={13} className="text-[var(--color-gold-500)] shrink-0" />
            <span>{member.qualifications}</span>
          </div>
        )}
      </div>
    </div>
  );
}

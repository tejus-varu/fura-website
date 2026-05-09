import { LucideIcon, ArrowRight, Shield } from "lucide-react";
import Badge from "./Badge";

interface ProgramDetailCardProps {
  icon: LucideIcon;
  title: string;
  badge?: string;
  classBands: string;
  learn: string;
  do: string;
  outcome: string;
  safetyNote?: string;
}

export default function ProgramDetailCard({
  icon: Icon,
  title,
  badge,
  classBands,
  learn,
  do: actionStr,
  outcome,
  safetyNote,
}: ProgramDetailCardProps) {
  return (
    <div className="card-base bg-white overflow-hidden flex flex-col">
      <div className="p-6 border-b" style={{ borderColor: "var(--color-green-50)" }}>
        <div className="flex items-start justify-between gap-4 mb-4">
          <div
            className="w-12 h-12 rounded-xl flex items-center justify-center shrink-0"
            style={{ background: "var(--color-green-100)" }}
          >
            <Icon size={22} style={{ color: "var(--color-green-700)" }} />
          </div>
          {badge && <Badge variant="gold">{badge}</Badge>}
        </div>
        <h3 className="text-h3 mb-2" style={{ color: "var(--color-green-900)" }}>
          {title}
        </h3>
        <p className="text-xs font-semibold uppercase tracking-wider" style={{ color: "var(--color-green-600)" }}>
          Target: {classBands}
        </p>
      </div>
      
      <div className="p-6 flex flex-col gap-5 flex-1">
        <div>
          <p className="text-xs font-bold uppercase mb-1" style={{ color: "var(--color-gold-600)" }}>Friday Theory (In School)</p>
          <p className="text-sm leading-relaxed" style={{ color: "var(--color-green-800)" }}>{learn}</p>
        </div>
        <div>
          <p className="text-xs font-bold uppercase mb-1" style={{ color: "var(--color-gold-600)" }}>Saturday Practical (At Farm)</p>
          <p className="text-sm leading-relaxed" style={{ color: "var(--color-green-800)" }}>{actionStr}</p>
        </div>
        <div className="mt-auto pt-2">
          <div className="flex gap-3 items-start p-3 rounded-lg" style={{ background: "var(--color-green-50)" }}>
            <ArrowRight size={16} className="mt-0.5 shrink-0" style={{ color: "var(--color-green-600)" }} />
            <p className="text-sm" style={{ color: "var(--color-green-900)" }}>
              <span className="font-semibold">Outcome:</span> {outcome}
            </p>
          </div>
        </div>
      </div>

      {safetyNote && (
        <div className="px-6 py-4 flex gap-3 items-start border-t" style={{ background: "var(--color-sky-50)", borderColor: "var(--color-sky-100)" }}>
          <Shield size={16} className="mt-0.5 shrink-0" style={{ color: "var(--color-sky-600)" }} />
          <p className="text-xs leading-relaxed" style={{ color: "var(--color-sky-900)" }}>
            <span className="font-semibold">Safety note:</span> {safetyNote}
          </p>
        </div>
      )}
    </div>
  );
}

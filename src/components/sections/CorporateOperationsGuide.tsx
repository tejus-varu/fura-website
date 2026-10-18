"use client";

import { useState } from "react";
import {
  CalendarDays,
  Users,
  Compass,
  Bus,
  Stethoscope,
  ShieldCheck,
  ChevronDown,
  CheckCircle2,
  FileCheck2,
  Sparkles,
} from "lucide-react";
import { corporateOperationsList } from "@/config/partnerships";

const iconMap: Record<string, React.ElementType> = {
  "event-coordination": CalendarDays,
  "group-supervision": Users,
  "safe-outdoor-activities": Compass,
  "transport-arrival": Bus,
  "first-aid-emergency": Stethoscope,
  "corporate-outing-requirements": ShieldCheck,
};

export default function CorporateOperationsGuide() {
  // First item open by default for immediate discoverability
  const [openItems, setOpenItems] = useState<Record<string, boolean>>({
    "event-coordination": true,
    "group-supervision": true,
  });

  const toggleItem = (id: string) => {
    setOpenItems((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  const expandAll = () => {
    const allOpen: Record<string, boolean> = {};
    corporateOperationsList.forEach((item) => {
      allOpen[item.id] = true;
    });
    setOpenItems(allOpen);
  };

  const collapseAll = () => {
    setOpenItems({});
  };

  return (
    <div className="card-base p-6 sm:p-8 lg:p-10 bg-white border border-emerald-900/15 shadow-sm rounded-3xl">
      {/* Header with expand/collapse controls */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-gray-100">
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-100/70 text-emerald-800 text-xs font-semibold mb-2">
            <FileCheck2 size={13} />
            <span>Corporate Operations and Safety Protocols</span>
          </div>
          <h3 className="font-display text-xl sm:text-2xl font-bold text-[var(--color-green-900)]">
            Operations, Supervision and Event Logistics Guide
          </h3>
          <p className="text-xs sm:text-sm text-[var(--color-green-700)] mt-1 max-w-2xl">
            Detailed operational standards ensuring structured coordination, participant comfort, and proactive safety management during adult corporate farm visits.
          </p>
        </div>

        <div className="flex items-center gap-2 shrink-0 self-start sm:self-center">
          <button
            type="button"
            onClick={expandAll}
            className="text-xs font-semibold px-3 py-1.5 rounded-lg border border-gray-200 text-[var(--color-green-800)] hover:bg-gray-50 transition-colors"
          >
            Expand All
          </button>
          <button
            type="button"
            onClick={collapseAll}
            className="text-xs font-semibold px-3 py-1.5 rounded-lg border border-gray-200 text-[var(--color-green-800)] hover:bg-gray-50 transition-colors"
          >
            Collapse All
          </button>
        </div>
      </div>

      {/* Accordion / Expandable Item List */}
      <div className="divide-y divide-gray-100 mt-2">
        {corporateOperationsList.map((item) => {
          const isOpen = !!openItems[item.id];
          const IconComponent = iconMap[item.id] || Sparkles;

          return (
            <div key={item.id} className="py-4 first:pt-4 last:pb-2">
              <button
                type="button"
                onClick={() => toggleItem(item.id)}
                className="w-full text-left flex items-start justify-between gap-4 py-2 group focus:outline-none"
                aria-expanded={isOpen}
              >
                <div className="flex items-start gap-3.5">
                  <div
                    className={`w-9 h-9 rounded-xl flex items-center justify-center shrink-0 transition-colors mt-0.5 ${
                      isOpen
                        ? "bg-[var(--color-green-700)] text-white"
                        : "bg-[var(--color-green-50)] text-[var(--color-green-800)] group-hover:bg-emerald-100"
                    }`}
                  >
                    <IconComponent size={18} />
                  </div>
                  <div>
                    <h4 className="font-display text-base font-bold text-[var(--color-green-900)] group-hover:text-emerald-700 transition-colors">
                      {item.title}
                    </h4>
                    <p className="text-xs text-[var(--color-green-700)] mt-0.5">
                      {item.summary}
                    </p>
                  </div>
                </div>

                <div
                  className={`w-7 h-7 rounded-lg flex items-center justify-center border border-gray-200 text-gray-500 transition-transform duration-200 shrink-0 mt-1 ${
                    isOpen ? "rotate-180 bg-gray-50 text-[var(--color-green-800)]" : "group-hover:border-gray-300"
                  }`}
                >
                  <ChevronDown size={16} />
                </div>
              </button>

              {isOpen && (
                <div className="pl-0 sm:pl-[52px] pt-3 pb-2 animate-fadeIn">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 p-4 rounded-2xl bg-[var(--color-cream)] border border-emerald-900/10">
                    {item.details.map((detail, idx) => (
                      <div
                        key={idx}
                        className="flex items-start gap-2.5 text-xs text-[var(--color-green-900)] leading-relaxed"
                      >
                        <CheckCircle2
                          size={15}
                          className="text-emerald-600 shrink-0 mt-0.5"
                        />
                        <span>{detail}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          );
        })}
      </div>

      {/* Operational Assurance Footnote */}
      <div className="mt-6 pt-4 border-t border-gray-100 flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs text-[var(--color-green-700)]">
        <div className="flex items-center gap-2">
          <ShieldCheck size={16} className="text-emerald-700 shrink-0" />
          <span>
            Standardized outdoor safety protocols are calibrated for adult corporate participant cohorts.
          </span>
        </div>
        <a
          href="/contact?subject=Corporate%20Operations%20Dossier"
          className="text-emerald-800 font-semibold hover:underline flex items-center gap-1"
        >
          Request Complete Corporate Outing Dossier →
        </a>
      </div>
    </div>
  );
}

"use client";

import { useState, useEffect, useCallback, useRef } from "react";
import { usePathname } from "next/navigation";
import { Calendar, X, Sparkles } from "lucide-react";
import { brand } from "@/config/brand";
import BookADemoForm from "@/components/sections/BookADemoForm";

/**
 * Floating Inquiry CTA for FURAA V3.
 * Persistent unobtrusive floating button near bottom-right labeled "Book a Demo".
 * Clicking opens an accessible slide-over inquiry drawer with BookADemoForm,
 * without creating duplicate logic or breaking lead handling.
 * If user is already on /contact, clicking smoothly scrolls down to the on-page form.
 */
export default function FloatingInquiryCTA() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();
  const drawerRef = useRef<HTMLDivElement>(null);

  // Close on Escape key
  const handleKeyDown = useCallback((e: KeyboardEvent) => {
    if (e.key === "Escape") {
      setIsOpen(false);
    }
  }, []);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen, handleKeyDown]);

  const handleClick = () => {
    if (pathname === "/contact") {
      const formEl = document.getElementById("demo-form");
      if (formEl) {
        formEl.scrollIntoView({ behavior: "smooth" });
        return;
      }
    }
    setIsOpen(true);
  };

  return (
    <>
      {/* ── Persistent Floating Action Button ── */}
      <div className="fixed bottom-5 right-5 sm:bottom-6 sm:right-6 z-40 print:hidden">
        <button
          onClick={handleClick}
          type="button"
          aria-label={brand.cta.primary}
          aria-haspopup="dialog"
          aria-expanded={isOpen}
          className="group relative flex items-center gap-2.5 px-4 py-2.5 sm:px-5 sm:py-3 rounded-full text-white text-xs sm:text-sm font-bold shadow-2xl transition-all duration-200 hover:scale-105 active:scale-95 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[var(--color-gold-400)]"
          style={{
            background: "linear-gradient(135deg, var(--color-green-800) 0%, var(--color-green-950) 100%)",
            border: "1.5px solid rgba(212, 160, 23, 0.45)",
            boxShadow: "0 10px 25px -5px rgba(27, 67, 50, 0.5), 0 8px 10px -6px rgba(0, 0, 0, 0.3)",
          }}
        >
          {/* Subtle pulsating gold indicator */}
          <span className="relative flex h-2.5 w-2.5">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[var(--color-gold-400)] opacity-75" />
            <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-[var(--color-gold-500)]" />
          </span>

          <Calendar size={16} className="text-[var(--color-gold-400)] shrink-0 transition-transform duration-200 group-hover:rotate-12" />

          <span className="tracking-wide">{brand.cta.primary}</span>

          <Sparkles size={13} className="text-[var(--color-gold-300)] opacity-70 group-hover:opacity-100 transition-opacity" />
        </button>
      </div>

      {/* ── Slide-Over Inquiry Drawer ── */}
      {isOpen && (
        <div
          className="fixed inset-0 z-50 flex justify-end transition-opacity duration-300"
          role="dialog"
          aria-modal="true"
          aria-labelledby="inquiry-drawer-title"
        >
          {/* Backdrop */}
          <div
            className="fixed inset-0 bg-black/60 backdrop-blur-sm transition-opacity"
            onClick={() => setIsOpen(false)}
            aria-hidden="true"
          />

          {/* Drawer Panel */}
          <div
            ref={drawerRef}
            className="relative w-full max-w-2xl bg-white shadow-2xl flex flex-col h-full overflow-hidden z-10 animate-in slide-in-from-right duration-300"
            style={{
              borderLeft: "1px solid rgba(27, 67, 50, 0.15)",
            }}
          >
            {/* Drawer Header */}
            <div
              className="p-5 sm:p-6 text-white flex items-start justify-between gap-4 shrink-0"
              style={{
                background: "linear-gradient(135deg, var(--color-green-950) 0%, var(--color-green-800) 100%)",
                borderBottom: "2px solid var(--color-gold-500)",
              }}
            >
              <div>
                <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-[10px] font-semibold uppercase tracking-wider text-emerald-100 bg-white/10 border border-white/15 mb-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[var(--color-gold-400)] animate-pulse" />
                  School Partnership Inquiry
                </div>
                <h2 id="inquiry-drawer-title" className="text-xl sm:text-2xl font-bold font-display text-white">
                  {brand.cta.drawerTitle}
                </h2>
                <p className="text-xs sm:text-sm text-green-100/90 mt-1">
                  Schedule an experiential learning demonstration or curriculum dialogue.
                </p>
              </div>

              <button
                type="button"
                onClick={() => setIsOpen(false)}
                className="p-2 rounded-xl text-white/80 hover:text-white hover:bg-white/10 transition-colors focus-visible:outline-none"
                aria-label="Close inquiry drawer"
              >
                <X size={20} />
              </button>
            </div>

            {/* Drawer Body: Form */}
            <div className="flex-1 overflow-y-auto p-4 sm:p-6 bg-stone-50">
              <div className="max-w-xl mx-auto">
                <BookADemoForm />
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

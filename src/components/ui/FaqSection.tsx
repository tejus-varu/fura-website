"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { clsx } from "clsx";

interface FaqItem {
  question: string;
  answer: string;
}

interface FaqSectionProps {
  title?: string;
  faqs: FaqItem[];
}

export default function FaqSection({ title = "Frequently Asked Questions", faqs }: FaqSectionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <div className="max-w-3xl mx-auto w-full">
      {title && (
        <h2 className="text-h2 text-center mb-8" style={{ color: "var(--color-green-900)" }}>
          {title}
        </h2>
      )}
      <div className="flex flex-col gap-3">
        {faqs.map((faq, index) => {
          const isOpen = openIndex === index;
          return (
            <div
              key={index}
              className="card-base bg-white overflow-hidden transition-all duration-300"
              style={{
                borderColor: isOpen ? "var(--color-green-300)" : "var(--color-green-100)",
              }}
            >
              <button
                className="w-full px-6 py-5 flex items-center justify-between text-left"
                onClick={() => setOpenIndex(isOpen ? null : index)}
                aria-expanded={isOpen}
              >
                <span className="font-semibold text-sm" style={{ color: "var(--color-green-900)" }}>
                  {faq.question}
                </span>
                <ChevronDown
                  size={18}
                  className={clsx("transition-transform duration-300 shrink-0 ml-4", {
                    "rotate-180": isOpen,
                  })}
                  style={{ color: "var(--color-green-500)" }}
                />
              </button>
              <div
                className={clsx("px-6 overflow-hidden transition-all duration-300", {
                  "max-h-0 opacity-0 pb-0": !isOpen,
                  "max-h-40 opacity-100 pb-5": isOpen,
                })}
              >
                <p className="text-sm leading-relaxed" style={{ color: "var(--color-green-700)" }}>
                  {faq.answer}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

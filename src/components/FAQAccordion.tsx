"use client";

import { useId, useState } from "react";
import type { FAQItem } from "@/lib/schema";

type Props = { items: FAQItem[] };

export function FAQAccordion({ items }: Props) {
  const baseId = useId();
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <div className="overflow-hidden rounded-2xl border border-indigo-100/60 bg-white/95 shadow-inner shadow-indigo-950/[0.02] backdrop-blur-sm">
      {items.map((item, i) => {
        const isOpen = openIndex === i;
        const panelId = `${baseId}-panel-${i}`;
        const headerId = `${baseId}-header-${i}`;
        const isLast = i === items.length - 1;
        return (
          <div
            key={item.question}
            className={`px-1 py-0.5 sm:px-2 ${!isLast ? "border-b border-indigo-50/90" : ""}`}
          >
            <h3 className="text-sm font-semibold text-navy md:text-base">
              <button
                id={headerId}
                type="button"
                aria-expanded={isOpen}
                aria-controls={panelId}
                className="flex w-full items-center justify-between gap-4 rounded-xl px-4 py-4 text-left transition hover:bg-indigo-50/40 hover:text-primary sm:px-5 sm:py-5"
                onClick={() => setOpenIndex(isOpen ? null : i)}
              >
                <span className="text-pretty pr-2">{item.question}</span>
                <span
                  className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-full border bg-white text-slate-500 shadow-sm transition-all duration-300 ${
                    isOpen
                      ? "rotate-180 border-primary/35 bg-primary/[0.06] text-primary shadow-indigo-200/40"
                      : "border-indigo-100/90"
                  }`}
                  aria-hidden
                >
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                    <path
                      d="M6 9l6 6 6-6"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                    />
                  </svg>
                </span>
              </button>
            </h3>
            <div
              id={panelId}
              role="region"
              aria-labelledby={headerId}
              className={`overflow-hidden transition-[max-height] duration-300 ease-out ${
                isOpen ? "max-h-80" : "max-h-0"
              }`}
            >
              <p className="px-4 pb-5 text-pretty text-sm leading-relaxed text-slate-600 sm:px-5">
                {item.answer}
              </p>
            </div>
          </div>
        );
      })}
    </div>
  );
}

import Link from "next/link";
import { DashboardMockup } from "@/components/DashboardMockup";
import { HeroHeadline } from "@/components/sections/HeroHeadline";

export function HeroSection() {
  return (
    <section className="relative overflow-hidden border-b border-slate-200/40 bg-gradient-to-br from-slate-50 via-indigo-50/40 to-amber-50/35">
      <div
        className="pointer-events-none absolute -left-32 top-0 h-[420px] w-[420px] rounded-full bg-primary/[0.08] blur-3xl"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute -right-24 bottom-0 h-[380px] w-[380px] rounded-full bg-accent/[0.14] blur-3xl"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute left-1/2 top-1/2 h-[min(90vw,42rem)] w-[min(90vw,42rem)] -translate-x-1/2 -translate-y-1/2 rounded-full bg-gradient-to-tr from-indigo-200/15 via-transparent to-amber-100/20 blur-2xl"
        aria-hidden
      />
      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_right,#e2e8f0_1px,transparent_1px),linear-gradient(to_bottom,#e2e8f0_1px,transparent_1px)] bg-[size:56px_56px] opacity-[0.4] [mask-image:linear-gradient(to_bottom,transparent,black_10%,black_82%,transparent)]" aria-hidden />

      <div className="relative z-10 mx-auto grid max-w-6xl items-center gap-10 px-4 pb-20 pt-8 md:grid-cols-[minmax(0,1.12fr)_minmax(0,0.88fr)] md:gap-12 md:px-6 md:pb-28 md:pt-12 lg:gap-14 lg:pt-14">
        <div className="min-w-0 w-full">
          <div className="flex flex-col gap-5">
            <p className="w-fit rounded-full border border-orange-200/60 bg-gradient-to-r from-white/90 to-amber-50/50 px-3.5 py-1.5 text-[11px] font-semibold uppercase tracking-[0.14em] text-orange-900/85 shadow-sm shadow-orange-900/5">
              Ahrefs group buy guides
            </p>
            <HeroHeadline />
          </div>
          <p className="mt-6 max-w-xl text-pretty text-base leading-relaxed text-slate-600 md:text-lg md:leading-relaxed">
            Trust-focused info, comparisons, and safer decision pages for the “Ahrefs group buy”
            keyword family — pricing intent, alternatives, reviews, and use-cases.
          </p>
          <div className="mt-10 flex flex-col gap-3 sm:flex-row sm:items-center sm:gap-4">
            <Link
              href="/ahrefs-group-buy-pricing"
              className="inline-flex items-center justify-center rounded-xl bg-accent px-5 py-2.5 text-sm font-semibold leading-none text-white shadow-md shadow-orange-500/20 ring-2 ring-orange-400/25 transition hover:-translate-y-0.5 hover:bg-orange-600 hover:shadow-lg hover:shadow-orange-500/25"
            >
              Pricing & Alternatives
            </Link>
            <Link
              href="/ahrefs-group-buy-guide"
              className="inline-flex items-center justify-center rounded-xl border border-slate-200/80 bg-white/80 px-5 py-2.5 text-sm font-semibold leading-none text-navy shadow-sm shadow-slate-900/[0.04] backdrop-blur-md transition hover:-translate-y-0.5 hover:border-primary/30 hover:bg-white hover:shadow-md"
            >
              Start with the Guide
            </Link>
          </div>
        </div>
        <div className="flex justify-center md:justify-end">
          <div className="relative w-full max-w-md">
            <div
              className="pointer-events-none absolute -inset-10 rounded-[2.25rem] bg-gradient-to-tr from-accent/25 via-primary/[0.12] to-indigo-300/10 opacity-95 blur-2xl"
              aria-hidden
            />
            <div className="relative rounded-[1.25rem] ring-1 ring-slate-200/50 ring-offset-4 ring-offset-transparent md:ring-offset-8">
              <DashboardMockup />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

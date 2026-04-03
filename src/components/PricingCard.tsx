import Link from "next/link";
import type { PlanCard } from "@/content/plans";

type Props = { plan: PlanCard };

export function PricingCard({ plan }: Props) {
  return (
    <article className="group flex h-full flex-col rounded-2xl border border-slate-200/70 bg-white/90 p-5 shadow-sm shadow-slate-900/[0.04] backdrop-blur-sm transition duration-300 hover:-translate-y-0.5 hover:border-slate-300/80 hover:bg-white hover:shadow-md hover:shadow-slate-900/[0.06]">
      <h3 className="text-lg font-bold text-navy">{plan.name}</h3>
      <p className="mt-2 text-sm leading-relaxed text-slate-600">{plan.summary}</p>
      <p className="mt-4 text-xs font-medium uppercase tracking-wide text-indigo-600/70">Best for</p>
      <p className="mt-1 text-sm font-medium text-navy">{plan.bestFor}</p>
      <div className="mt-5 flex-1" />
      <Link
        href={plan.ctaHref}
        className="inline-flex w-full items-center justify-center rounded-md border border-slate-200/90 bg-white px-2 py-1.5 text-center text-xs font-medium leading-tight text-navy transition hover:border-primary/35 hover:bg-slate-50/80 hover:text-primary sm:text-[13px]"
      >
        {plan.ctaLabel}
      </Link>
    </article>
  );
}

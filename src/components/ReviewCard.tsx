import type { ReviewItem } from "@/content/reviews";

type Props = { review: ReviewItem };

export function ReviewCard({ review }: Props) {
  return (
    <figure className="group relative flex h-full flex-col rounded-2xl border border-white/90 bg-gradient-to-b from-white to-slate-50/95 p-6 shadow-lg shadow-indigo-950/[0.04] ring-1 ring-slate-200/35 transition duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-indigo-950/[0.07] hover:ring-indigo-200/55 md:p-6">
      <div className="pointer-events-none absolute right-4 top-4 text-4xl font-serif leading-none text-indigo-100/90 transition group-hover:text-indigo-100" aria-hidden>
        “
      </div>
      <div className="flex items-start gap-3">
        <div
          className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-navy via-slate-800 to-slate-700 text-xs font-bold text-white shadow-md ring-2 ring-indigo-100/80 ring-offset-2 ring-offset-white"
          aria-hidden
        >
          {review.initials}
        </div>
        <div className="min-w-0 pt-0.5">
          <figcaption className="text-sm font-semibold text-navy">{review.name}</figcaption>
          <p className="mt-0.5 text-xs leading-snug text-slate-500">{review.role}</p>
        </div>
      </div>
      <blockquote className="relative z-[1] mt-5 flex-1 border-l-[3px] border-accent pl-4 text-sm leading-relaxed text-slate-700">
        {review.quote}
      </blockquote>
    </figure>
  );
}

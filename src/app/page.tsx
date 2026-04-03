import Link from "next/link";
import { AhrefsBar } from "@/components/AhrefsBar";
import { FAQAccordion } from "@/components/FAQAccordion";
import { PricingCard } from "@/components/PricingCard";
import { ReviewCard } from "@/components/ReviewCard";
import { SchemaInjector } from "@/components/SchemaInjector";
import { HeroSection } from "@/components/sections/HeroSection";
import { homeFaqItems } from "@/content/home-faq";
import { homepagePlans } from "@/content/plans";
import { homepageReviews, reviewMetrics } from "@/content/reviews";
import { faqPageSchema } from "@/lib/schema";
import { metadataFor } from "@/content/seo";

export const metadata = metadataFor("/");

const eyebrow =
  "inline-flex items-center rounded-full border px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.14em]";

export default function HomePage() {
  return (
    <>
      <SchemaInjector data={faqPageSchema(homeFaqItems)} />
      <HeroSection />

      <section
        className="relative py-16 md:py-24"
        aria-labelledby="plans-heading"
      >
        <div
          className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_90%_50%_at_50%_-20%,rgba(99,102,241,0.11),transparent_50%)]"
          aria-hidden
        />
        <div className="relative mx-auto max-w-6xl px-4 md:px-6">
          <div className="rounded-[1.75rem] border border-white/70 bg-gradient-to-b from-white/75 via-white/55 to-indigo-50/20 p-8 shadow-[0_24px_80px_-24px_rgba(30,41,59,0.12)] backdrop-blur-xl md:p-10 lg:p-12">
            <div className="flex flex-col gap-3 md:max-w-2xl md:flex-row md:items-end md:justify-between md:gap-8">
              <div>
                <p
                  className={`${eyebrow} border-indigo-200/70 bg-indigo-50/50 text-indigo-700/90`}
                >
                  Plans & access
                </p>
                <h2
                  id="plans-heading"
                  className="mt-4 text-pretty text-2xl font-bold tracking-tight text-navy md:text-3xl lg:text-[2rem] lg:leading-tight"
                >
                  Find the Right Ahrefs Group Buy Plan
                </h2>
                <p className="mt-3 text-pretty text-base leading-relaxed text-slate-600 md:text-lg">
                  Each plan fits a different type of user, from beginners to larger SEO teams.
                </p>
              </div>
              <div className="hidden h-px flex-1 bg-gradient-to-r from-indigo-200/40 via-transparent to-transparent md:block md:self-center" aria-hidden />
            </div>
            <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-5 lg:gap-5">
              {homepagePlans.map((plan) => (
                <PricingCard key={plan.name} plan={plan} />
              ))}
            </div>
            <p className="mt-10 text-center text-sm text-slate-600 md:text-left">
              <Link
                href="/ahrefs-group-buy-for-beginners"
                className="font-medium text-primary hover:underline"
              >
                New to Ahrefs?
              </Link>{" "}
              Start with the beginner guide.
            </p>
          </div>
        </div>
      </section>

      <section
        className="relative overflow-hidden py-16 md:py-24"
        aria-labelledby="reviews-heading"
      >
        <div
          className="pointer-events-none absolute inset-0 bg-gradient-to-b from-indigo-50/40 via-white/30 to-sky-50/50"
          aria-hidden
        />
        <div
          className="pointer-events-none absolute left-1/2 top-0 h-72 w-[min(100%,48rem)] -translate-x-1/2 bg-gradient-to-b from-primary/[0.07] to-transparent blur-2xl"
          aria-hidden
        />
        <div
          className="pointer-events-none absolute -right-16 bottom-12 h-64 w-64 rounded-full bg-accent/[0.07] blur-3xl"
          aria-hidden
        />
        <div className="relative mx-auto max-w-6xl px-4 md:px-6">
          <div className="md:flex md:items-start md:justify-between md:gap-12">
            <div className="max-w-2xl">
              <p
                className={`${eyebrow} border-amber-200/80 bg-amber-50/60 text-amber-900/80`}
              >
                From real workflows
              </p>
              <h2
                id="reviews-heading"
                className="mt-4 text-pretty text-2xl font-bold tracking-tight text-navy md:text-3xl lg:text-[2rem] lg:leading-tight"
              >
                Why People Like Ahrefs Group Buy
              </h2>
              <p className="mt-4 text-pretty text-base leading-relaxed text-slate-600 md:text-lg">
                Ahrefs helps users research keywords, study competitors, review backlinks, and track
                progress in one workflow.
              </p>
            </div>
          </div>
          <div className="mt-12 grid gap-5 sm:grid-cols-2 md:grid-cols-3 md:gap-6">
            {homepageReviews.map((r) => (
              <ReviewCard key={r.name} review={r} />
            ))}
          </div>
          <div className="mt-12 rounded-2xl border border-white/80 bg-white/70 p-6 shadow-[0_20px_60px_-30px_rgba(99,102,241,0.25)] backdrop-blur-md md:mt-14 md:p-8">
            <p className="text-center text-[11px] font-semibold uppercase tracking-[0.14em] text-indigo-600/80 md:text-left">
              Popular focus areas
            </p>
            <ul className="mt-4 flex flex-wrap justify-center gap-2 md:justify-start md:gap-2.5">
              {reviewMetrics.map((m) => (
                <li key={m}>
                  <span className="inline-flex items-center gap-2 rounded-full border border-indigo-100/90 bg-gradient-to-b from-white to-indigo-50/35 px-4 py-2 text-sm font-medium text-navy shadow-sm shadow-indigo-950/[0.04] transition hover:border-indigo-200 hover:shadow-md">
                    <span
                      className="h-1.5 w-1.5 shrink-0 rounded-full bg-primary/70"
                      aria-hidden
                    />
                    {m}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="relative py-14 md:py-20">
        <div
          className="pointer-events-none absolute inset-0 bg-gradient-to-b from-violet-50/30 via-transparent to-sky-50/20"
          aria-hidden
        />
        <div className="relative mx-auto max-w-6xl px-4 md:px-6">
          <AhrefsBar />
        </div>
      </section>

      <section className="relative pb-20 pt-4 md:pb-28 md:pt-8" aria-labelledby="faq-heading">
        <div
          className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_75%_45%_at_50%_100%,rgba(59,130,246,0.08),transparent)]"
          aria-hidden
        />
        <div className="relative mx-auto max-w-6xl px-4 md:px-6">
          <div className="rounded-[1.75rem] border border-sky-100/80 bg-gradient-to-br from-white/90 via-white/70 to-sky-50/25 p-8 shadow-[0_24px_80px_-28px_rgba(14,116,144,0.12)] backdrop-blur-xl md:p-10 lg:p-12">
            <div className="max-w-2xl">
              <p
                className={`${eyebrow} border-sky-200/70 bg-sky-50/70 text-sky-800/90`}
              >
                Help
              </p>
              <h2
                id="faq-heading"
                className="mt-4 text-pretty text-2xl font-bold tracking-tight text-navy md:text-3xl lg:text-[2rem] lg:leading-tight"
              >
                Frequently Asked Questions About Ahrefs Group Buy
              </h2>
              <p className="mt-3 text-pretty text-base leading-relaxed text-slate-600 md:text-lg">
                Short answers about plans, tools, and where to start.
              </p>
            </div>
            <div className="mt-10 w-full">
              <FAQAccordion items={homeFaqItems} />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

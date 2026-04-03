import Link from "next/link";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { InternalLinkCard } from "@/components/InternalLinkCard";
import { SiteBottomCTA } from "@/components/SiteBottomCTA";
import { PageHero } from "@/components/PageHero";
import type { BreadcrumbItem } from "@/lib/breadcrumbs";
import type { TopicalPage } from "@/content/topical-map";
import { clusters, getPageByHref } from "@/content/topical-map";

type Props = {
  page: TopicalPage;
  breadcrumbs: BreadcrumbItem[];
};

function pickAnchor(anchors: readonly string[], fallback: string) {
  return anchors[0] ?? fallback;
}

export function TopicalStubPage({ page, breadcrumbs }: Props) {
  const cluster = clusters.find((c) => c.id === page.clusterId);
  const pillar = cluster ? getPageByHref(cluster.pillarHref) : undefined;

  const pillarLinkText = cluster
    ? pickAnchor(cluster.supportingToPillarAnchors, "main guide for this topic")
    : "main guide for this topic";

  return (
    <article className="mx-auto max-w-6xl px-4 py-10 md:px-6 md:py-14">
      <Breadcrumbs items={breadcrumbs} />

      <PageHero
        eyebrow={page.pageType === "pillar" ? "Main topic guide" : "Focused guide"}
        title={page.h1}
        description={page.intro}
      >
        {page.pageType === "supporting" ? (
          <p>
            This page connects back to the{" "}
            <Link
              href={page.pillarHref}
              className="font-semibold text-primary hover:underline"
            >
              {pillarLinkText}
            </Link>
            .
          </p>
        ) : null}
      </PageHero>

      <section className="mt-12 space-y-4 text-slate-700">
        <h2 className="text-2xl font-bold text-navy">What this page will cover</h2>
        <p>
          Placeholder outline only. Long-form content will be written later. For now, this page exists
          to lock in clean URLs and sensible internal linking for the “Ahrefs group buy” keyword family.
        </p>
        <ul className="list-disc space-y-2 pl-5">
          <li>Decision-focused sections aligned to this page’s search intent</li>
          <li>Trust and safety context (no shady marketplace positioning)</li>
          <li>Contextual links inside the topic cluster where they fit the outline</li>
        </ul>
      </section>

      {page.pageType === "supporting" && pillar ? (
        <section className="mt-12 rounded-2xl border border-slate-200/80 bg-white p-6 shadow-sm">
          <h2 className="text-xl font-bold text-navy">Back to the main guide</h2>
          <p className="mt-2 text-slate-600">
            Start from the overview for this topic, then pick a focused page when you need detail.
          </p>
          <div className="mt-5">
            <InternalLinkCard
              title={pillar.label}
              description="Main guide that ties this topic together."
              href={pillar.href}
              label="Open main guide"
            />
          </div>
        </section>
      ) : null}

      <div className="mt-14">
        <SiteBottomCTA />
      </div>
    </article>
  );
}


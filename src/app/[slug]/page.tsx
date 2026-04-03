import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { metadataFor } from "@/content/seo";
import { buildBreadcrumbs } from "@/lib/breadcrumbs";
import { TopicalStubPage } from "@/components/TopicalStubPage";
import { getPageByHref, topicalPages } from "@/content/topical-map";

type Props = {
  params: Promise<{ slug: string }>;
};

const DEDICATED_SLUGS = new Set([
  "ahrefs-group-buy-guide",
  "ahrefs-group-buy-keyword-research",
  "ahrefs-group-buy-pricing",
  "ahrefs-group-buy-alternative",
  "best-ahrefs-group-buy-alternative",
  "ahrefs-group-buy-vs-official-plans",
  "ahrefs-group-buy-vs-starter-plan",
  "ahrefs-lite-vs-standard",
  "ahrefs-keyword-research-for-beginners",
  "ahrefs-keyword-difficulty-guide",
  "ahrefs-long-tail-keywords",
  "ahrefs-keyword-gap-guide",
  "ahrefs-content-clusters-guide",
  "ahrefs-group-buy-backlink-guide",
  "how-to-check-backlinks-in-ahrefs",
  "ahrefs-backlink-analysis-guide",
  "ahrefs-referring-domains-guide",
  "ahrefs-top-pages-report-guide",
  "ahrefs-competitor-analysis-guide",
  "ahrefs-broken-link-opportunities",
  "ahrefs-group-buy-seo-tools",
  "ahrefs-site-audit-guide",
  "ahrefs-rank-tracker-guide",
  "technical-seo-checklist-with-ahrefs",
  "ahrefs-site-health-score",
  "how-to-track-seo-progress-in-ahrefs",
  "ahrefs-ranking-report-guide",
  "ahrefs-search-intent-guide",
  "cheap-ahrefs-options",
  "ahrefs-group-buy-cost-comparison",
  "best-plan-instead-of-ahrefs-group-buy",
  "ahrefs-starter-plan-review",
  "best-ahrefs-plan-for-beginners",
  "best-ahrefs-plan-for-freelancers",
  "what-is-ahrefs-group-buy",
  "is-ahrefs-group-buy-worth-it",
  "is-ahrefs-worth-it",
  "ahrefs-group-buy-for-beginners",
  "ahrefs-group-buy-pros-and-cons",
  "ahrefs-group-buy-review",
  "why-people-search-ahrefs-group-buy",
  "which-ahrefs-plan-should-you-buy",
]);

export async function generateStaticParams() {
  return topicalPages
    .filter((p) => !DEDICATED_SLUGS.has(p.href.replace(/^\//, "")))
    .map((p) => ({ slug: p.href.replace(/^\//, "") }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const href = `/${slug}`;
  return metadataFor(href);
}

export default async function TopicalPage({ params }: Props) {
  const { slug } = await params;
  const href = `/${slug}`;
  const page = getPageByHref(href);
  if (!page) return notFound();

  const breadcrumbs = buildBreadcrumbs(href);
  return <TopicalStubPage page={page} breadcrumbs={breadcrumbs} />;
}


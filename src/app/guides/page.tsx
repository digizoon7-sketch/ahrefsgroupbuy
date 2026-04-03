import { Breadcrumbs } from "@/components/Breadcrumbs";
import { InternalLinkCard } from "@/components/InternalLinkCard";
import { buildBreadcrumbs } from "@/lib/breadcrumbs";
import { clusters } from "@/content/topical-map";
import { metadataFor } from "@/content/seo";
import { SiteBottomCTA } from "@/components/SiteBottomCTA";

export const metadata = metadataFor("/guides");

export default function GuidesIndexPage() {
  const breadcrumbs = buildBreadcrumbs("/guides");

  return (
    <article className="mx-auto max-w-6xl px-4 py-14 md:px-6 md:py-20">
      <Breadcrumbs items={breadcrumbs} />

      <header className="mt-2 max-w-2xl">
        <h1 className="text-3xl font-bold tracking-tight text-navy md:text-4xl">
          Pick the topic you care about most
        </h1>
        <p className="mt-4 text-slate-600 md:text-lg">
          Each section below is a full guide with clear next steps—pricing, plans, keywords, backlinks,
          audits, and more—so you can move from a broad question to the exact answer you need.
        </p>
      </header>

      <div className="mt-12 grid gap-6 md:grid-cols-2">
        {clusters.map((c) => (
          <InternalLinkCard
            key={c.pillarHref}
            title={c.navLabel}
            description="Start here, then follow the in-page links to narrower guides on that subject."
            href={c.pillarHref}
            label="Open this guide"
          />
        ))}
      </div>
      <div className="mt-14">
        <SiteBottomCTA />
      </div>
    </article>
  );
}

import Link from "next/link";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { PageHero } from "@/components/PageHero";
import { buildBreadcrumbs } from "@/lib/breadcrumbs";
import { sitePages } from "@/content/site-pages";
import { metadataFor } from "@/content/seo";
import { SiteBottomCTA } from "@/components/SiteBottomCTA";

export const metadata = metadataFor("/site-pages");

export default function SitePagesDirectoryPage() {
  const breadcrumbs = buildBreadcrumbs("/site-pages");

  return (
    <article className="mx-auto max-w-6xl px-4 py-10 md:px-6 md:py-14">
      <Breadcrumbs items={breadcrumbs} />
      <PageHero
        eyebrow="Site directory"
        title="All pages on this site"
        description="Every public page in one place. New guides and sections get added to this list when they go live."
      />

      <ul className="mt-12 divide-y divide-slate-100 rounded-xl border border-slate-200 bg-white">
        {sitePages.map((page) => (
          <li key={page.href}>
            <Link
              href={page.href}
              className="flex flex-col gap-1 px-5 py-4 transition hover:bg-slate-50 md:flex-row md:items-center md:justify-between md:gap-6 md:py-5"
            >
              <span className="font-semibold text-navy">{page.label}</span>
              <span className="text-sm text-slate-600 md:max-w-xl md:text-right">{page.description}</span>
            </Link>
          </li>
        ))}
      </ul>
      <div className="mt-14">
        <SiteBottomCTA />
      </div>
    </article>
  );
}

import { InternalLinkCard } from "@/components/InternalLinkCard";
import { clusters, getPageByHref } from "@/content/topical-map";

type Props = {
  pillarHref: string;
};

export function PillarSupportingSection({ pillarHref }: Props) {
  const cluster = clusters.find((c) => c.pillarHref === pillarHref);
  if (!cluster) return null;

  const pages = cluster.supportingHrefs
    .map((href) => getPageByHref(href))
    .filter((p): p is NonNullable<typeof p> => Boolean(p));

  return (
    <section
      className="mt-14 border-t border-slate-200 pt-12"
      aria-labelledby="pillar-supporting-heading"
    >
      <h2 id="pillar-supporting-heading" className="text-2xl font-bold text-navy md:text-3xl">
        In-depth guides in this topic
      </h2>
      <p className="mt-3 max-w-2xl text-slate-600">
        Open any page below for a narrower focus. Each one links back to this main guide when you need
        the wider picture.
      </p>
      <div className="mt-8 grid gap-6 md:grid-cols-2">
        {pages.map((p) => (
          <InternalLinkCard
            key={p.href}
            title={p.label}
            description="Focused article on one part of this topic."
            href={p.href}
            label="Open guide"
          />
        ))}
      </div>
    </section>
  );
}

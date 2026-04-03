"use client";

import { usePathname } from "next/navigation";
import { CTASection } from "@/components/CTASection";
import { HOMEPAGE_HREF, getClusterByHref, isPillarHref } from "@/content/topical-map";

/** Bottom CTA: pillars → home only; supporting → that cluster’s pillar only. */
export function SiteBottomCTA() {
  const pathname = usePathname() || HOMEPAGE_HREF;

  if (pathname === HOMEPAGE_HREF) {
    return (
      <CTASection
        title="Pick your next step"
        description="Open the main Ahrefs group buy guide for a full overview."
        primary={{ label: "Ahrefs group buy guide", href: "/ahrefs-group-buy-guide" }}
      />
    );
  }

  if (isPillarHref(pathname)) {
    return (
      <CTASection
        title="Next step"
        description="Return to the homepage to choose another section."
        primary={{ label: "Home", href: HOMEPAGE_HREF }}
      />
    );
  }

  const cluster = getClusterByHref(pathname);
  if (cluster?.supportingHrefs.includes(pathname)) {
    const label = cluster.supportingToPillarAnchors[0] ?? cluster.navLabel;
    return (
      <CTASection
        title="Next step"
        description={`Open the ${cluster.navLabel} hub for the wider view in this topic.`}
        primary={{ label, href: cluster.pillarHref }}
      />
    );
  }

  return (
    <CTASection
      title="Next step"
      description="Return home to pick a section."
      primary={{ label: "Home", href: HOMEPAGE_HREF }}
    />
  );
}

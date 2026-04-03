import type { Metadata } from "next";
import { OPENGRAPH_IMAGE_URL, SITE_NAME, SITE_URL } from "./constants";

/** Canonical / OG URL segment: always slashless root or `/slug` (no duplicate slashes). */
export function pagePathToUrlSegment(path: string | undefined): string {
  if (!path || path === "/") return "";
  const p = path.startsWith("/") ? path : `/${path}`;
  return p;
}

type BuildMetadataInput = {
  title: string;
  description: string;
  path?: string;
  /** Absolute URL to an Open Graph image (1200×630). Defaults to site OG image. */
  ogImageUrl?: string;
  /** When true, `title` is used as the full document title (no ` | SITE_NAME` suffix). */
  titleAsIs?: boolean;
};

export function buildMetadata({
  title,
  description,
  path = "",
  ogImageUrl = OPENGRAPH_IMAGE_URL,
  titleAsIs = false,
}: BuildMetadataInput): Metadata {
  const url = `${SITE_URL}${pagePathToUrlSegment(path)}`;
  const fullTitle = titleAsIs ? title : `${title} | ${SITE_NAME}`;

  return {
    /** `absolute` avoids merging with root `title.template` (prevents a duplicate `| SITE_NAME`). */
    title: { absolute: fullTitle },
    description,
    metadataBase: new URL(SITE_URL),
    alternates: {
      canonical: url,
    },
    openGraph: {
      title: fullTitle,
      description,
      url,
      siteName: SITE_NAME,
      locale: "en_US",
      type: "website",
      images: [{ url: ogImageUrl, width: 1200, height: 630, alt: SITE_NAME }],
    },
    twitter: {
      card: "summary_large_image",
      title: fullTitle,
      description,
      images: [ogImageUrl],
    },
    robots: {
      index: true,
      follow: true,
    },
  };
}

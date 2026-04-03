import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Footer } from "@/components/layout/Footer";
import { Header } from "@/components/layout/Header";
import { OPENGRAPH_IMAGE_URL, SITE_NAME, SITE_URL } from "@/lib/constants";
import { organizationSchema } from "@/lib/schema";
import { SchemaInjector } from "@/components/SchemaInjector";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: `${SITE_NAME} | Ahrefs Group Buy (Guide, Pricing, Alternatives)`,
    template: `%s | ${SITE_NAME}`,
  },
  description:
    "SEO-first informational + comparison site focused on the “Ahrefs group buy” keyword family, including pricing intent, alternatives, reviews, and safe decision-making.",
  metadataBase: new URL(SITE_URL),
  alternates: {
    canonical: SITE_URL,
  },
  openGraph: {
    title: `${SITE_NAME} | Ahrefs Group Buy`,
    description:
      "Clear, trust-focused guides for the “Ahrefs group buy” keyword family.",
    url: SITE_URL,
    siteName: SITE_NAME,
    locale: "en_US",
    type: "website",
    images: [{ url: OPENGRAPH_IMAGE_URL, width: 1200, height: 630, alt: SITE_NAME }],
  },
  twitter: {
    card: "summary_large_image",
    title: `${SITE_NAME} | Ahrefs Group Buy`,
    description:
      "Clear, trust-focused Ahrefs group buy guides and comparisons.",
    images: [OPENGRAPH_IMAGE_URL],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.variable} flex min-h-screen flex-col font-sans antialiased`}
      >
        <SchemaInjector data={organizationSchema(SITE_URL, SITE_NAME)} />
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}

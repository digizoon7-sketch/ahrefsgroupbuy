import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Page not found",
  description: "The page you requested is not available.",
  robots: { index: false, follow: true },
};

export default function NotFound() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-20 md:px-6 md:py-28">
      <h1 className="text-3xl font-bold tracking-tight text-navy md:text-4xl">Page not found</h1>
      <p className="mt-4 max-w-xl text-slate-600">
        That URL does not match a page on this site. Use the navigation above or return to the
        homepage.
      </p>
      <Link
        href="/"
        className="mt-8 inline-flex items-center justify-center rounded-xl bg-accent px-6 py-3 text-sm font-semibold text-white shadow-sm transition hover:bg-orange-600"
      >
        Back to homepage
      </Link>
    </div>
  );
}

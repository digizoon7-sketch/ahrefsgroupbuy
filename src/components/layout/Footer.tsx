import Link from "next/link";
import { footerFeatureLinks } from "@/content/footer";
import { SITE_NAME } from "@/lib/constants";

export function Footer() {
  return (
    <footer className="border-t-4 border-accent bg-navy text-slate-300">
      <div className="mx-auto max-w-6xl px-4 py-8 md:px-6 md:py-10">
        <div className="flex flex-col items-center gap-3">
          <span className="text-center text-[10px] font-semibold uppercase tracking-[0.14em] text-slate-400">
            Main sections & guides
          </span>
          <div className="flex flex-wrap items-center justify-center gap-1.5 sm:gap-2">
            {footerFeatureLinks.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                className="inline-flex items-center rounded-md border border-slate-600/80 bg-slate-800/60 px-2.5 py-1 text-[11px] font-semibold text-slate-100 shadow-sm transition hover:border-accent/70 hover:bg-slate-800 hover:text-white sm:text-xs"
              >
                {l.label}
              </Link>
            ))}
          </div>
        </div>
        <p className="mt-6 border-t border-slate-600/50 pt-6 text-center text-xs text-slate-400">
          © {new Date().getFullYear()} {SITE_NAME}. All rights reserved.
        </p>
      </div>
    </footer>
  );
}

"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useLayoutEffect, useRef, useState } from "react";
import { headerCta, headerNavClusters } from "@/content/nav";
import { SITE_NAME } from "@/lib/constants";

function ChevronDown({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      width="11"
      height="11"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden
    >
      <path d="M6 9l6 6 6-6" />
    </svg>
  );
}

export function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mobileClusterOpen, setMobileClusterOpen] = useState<string | null>(null);
  const [openHref, setOpenHref] = useState<string | null>(null);
  const pathname = usePathname();
  const desktopNavRef = useRef<HTMLElement>(null);
  const headerRef = useRef<HTMLElement>(null);
  const [headerHeightPx, setHeaderHeightPx] = useState(56);

  useEffect(() => {
    setOpenHref(null);
  }, [pathname]);

  useEffect(() => {
    setMobileOpen(false);
    setMobileClusterOpen(null);
  }, [pathname]);

  useLayoutEffect(() => {
    const el = headerRef.current;
    if (!el) return;
    const update = () => setHeaderHeightPx(Math.ceil(el.getBoundingClientRect().height));
    update();
    const ro = new ResizeObserver(update);
    ro.observe(el);
    return () => ro.disconnect();
  }, []);

  useEffect(() => {
    if (!mobileOpen) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setMobileOpen(false);
    };
    document.addEventListener("keydown", onKey);
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = prev;
    };
  }, [mobileOpen]);

  useEffect(() => {
    if (openHref === null) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpenHref(null);
    };
    const onPointer = (e: MouseEvent) => {
      if (desktopNavRef.current && !desktopNavRef.current.contains(e.target as Node)) {
        setOpenHref(null);
      }
    };
    document.addEventListener("keydown", onKey);
    document.addEventListener("mousedown", onPointer);
    return () => {
      document.removeEventListener("keydown", onKey);
      document.removeEventListener("mousedown", onPointer);
    };
  }, [openHref]);

  return (
    <header
      ref={headerRef}
      className="sticky top-0 z-50 border-b border-slate-200/70 bg-white/85 shadow-sm shadow-slate-900/[0.03] backdrop-blur-md supports-[backdrop-filter]:bg-white/75"
    >
      <div className="relative mx-auto max-w-6xl px-4 md:px-6">
        <div className="flex items-center justify-between gap-3 py-2.5 md:py-3">
          <Link
            href="/"
            className="flex min-w-0 max-w-[min(100%,15rem)] shrink items-center gap-2 rounded-sm outline-none ring-offset-2 transition-opacity hover:opacity-90 focus-visible:ring-2 focus-visible:ring-primary sm:max-w-[min(100%,17rem)]"
          >
            <Image
              src="/logo.svg"
              alt=""
              width={36}
              height={36}
              className="h-8 w-8 shrink-0 md:h-9 md:w-9"
              priority
            />
            <span className="truncate text-base font-bold tracking-tight text-navy md:text-lg">
              {SITE_NAME}
            </span>
          </Link>

          <nav
            ref={desktopNavRef}
            className="relative z-[60] hidden min-w-0 flex-1 flex-wrap items-center justify-center gap-x-3 gap-y-1 sm:gap-x-4 lg:flex"
            aria-label="Main topics"
          >
            <Link
              href="/"
              className={`shrink-0 text-xs font-bold sm:text-sm ${
                pathname === "/"
                  ? "text-navy underline decoration-2 decoration-accent underline-offset-4"
                  : "text-slate-600 hover:text-navy"
              }`}
            >
              Home
            </Link>
            {headerNavClusters.map((c) => {
              const pillarActive = pathname === c.pillarHref;
              const childActive = c.supporting.some((s) => s.href === pathname);
              const active = pillarActive || childActive;
              const panelOpen = openHref === c.pillarHref;
              const panelId = `submenu-${c.pillarHref.replace(/\//g, "")}`;

              return (
                <div key={c.pillarHref} className="relative flex items-center gap-0.5">
                  <Link
                    href={c.pillarHref}
                    title={c.pillarTitle}
                    className={`max-w-[5.5rem] truncate text-xs font-bold sm:max-w-[6.5rem] sm:text-sm ${
                      pillarActive
                        ? "text-navy underline decoration-2 decoration-accent underline-offset-4"
                        : active
                          ? "text-navy"
                          : "text-slate-600 hover:text-navy"
                    }`}
                  >
                    {c.pillarShort}
                  </Link>
                  <button
                    type="button"
                    id={`${panelId}-opener`}
                    aria-haspopup="menu"
                    aria-expanded={panelOpen}
                    aria-controls={panelId}
                    className={`inline-flex rounded p-0.5 text-slate-400 outline-none hover:text-navy focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-1 ${
                      panelOpen ? "text-navy" : ""
                    }`}
                    title={`More guides: ${c.pillarTitle}`}
                    onClick={(e) => {
                      e.preventDefault();
                      setOpenHref(panelOpen ? null : c.pillarHref);
                    }}
                  >
                    <span className="sr-only">Open submenu for {c.pillarTitle}</span>
                    <ChevronDown
                      className={`transition-transform ${panelOpen ? "rotate-180" : ""}`}
                    />
                  </button>

                  {panelOpen ? (
                    <div
                      id={panelId}
                      role="menu"
                      aria-labelledby={`${panelId}-opener`}
                      className="absolute left-0 top-[calc(100%+10px)] z-50 w-[min(calc(100vw-2rem),20rem)] overflow-hidden rounded-lg border border-slate-200/90 bg-[#fafaf9] shadow-[0_12px_40px_-8px_rgba(15,23,42,0.18)] ring-1 ring-slate-900/5"
                    >
                      <div className="border-b border-slate-200/80 bg-gradient-to-b from-white to-slate-50/90 px-4 pb-3 pt-3">
                        <Link
                          href={c.pillarHref}
                          role="menuitem"
                          className="block text-[0.95rem] font-bold leading-tight text-navy transition-colors hover:text-primary"
                          onClick={() => setOpenHref(null)}
                        >
                          {c.pillarTitle}
                        </Link>
                      </div>
                      <ul className="divide-y divide-slate-100/80 py-1.5">
                        {c.supporting.map((s) => (
                          <li key={s.href}>
                            <Link
                              href={s.href}
                              role="menuitem"
                              className={`group mx-1.5 block rounded-md border-l-[3px] border-transparent px-3 py-2.5 text-xs leading-snug transition-colors sm:text-[0.8125rem] ${
                                pathname === s.href
                                  ? "border-l-accent bg-white font-semibold text-navy shadow-sm"
                                  : "text-slate-600 hover:border-l-primary/40 hover:bg-white hover:text-navy"
                              }`}
                              onClick={() => setOpenHref(null)}
                            >
                              <span className="block group-hover:text-navy">{s.label}</span>
                            </Link>
                          </li>
                        ))}
                      </ul>
                      <div className="border-t border-slate-200/80 bg-slate-50/50 px-4 py-2">
                        <Link
                          href={c.pillarHref}
                          className="text-xs font-semibold text-primary hover:underline"
                          onClick={() => setOpenHref(null)}
                        >
                          Open full guide →
                        </Link>
                      </div>
                    </div>
                  ) : null}
                </div>
              );
            })}
          </nav>

          <div className="flex shrink-0 items-center gap-2">
            <Link
              href={headerCta.href}
              className={`hidden items-center justify-center rounded-md border px-3.5 py-2 text-xs font-semibold shadow-sm transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 sm:inline-flex sm:text-sm ${
                pathname === headerCta.href
                  ? "border-navy bg-navy text-white hover:bg-navy/95"
                  : "border-accent/90 bg-accent text-accent-foreground hover:border-accent hover:bg-accent/95"
              }`}
            >
              {headerCta.label}
            </Link>
            <button
              type="button"
              className="flex h-10 w-10 items-center justify-center rounded-md text-slate-700 transition hover:bg-slate-100 active:bg-slate-200 lg:hidden"
              aria-expanded={mobileOpen}
              aria-controls="mobile-nav"
              aria-label={mobileOpen ? "Close menu" : "Open menu"}
              onClick={() => setMobileOpen((v) => !v)}
            >
              <span className="sr-only">Toggle menu</span>
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                aria-hidden
              >
                {mobileOpen ? (
                  <path
                    d="M6 6l12 12M18 6L6 18"
                    strokeWidth="2"
                    strokeLinecap="round"
                  />
                ) : (
                  <path
                    d="M4 7h16M4 12h16M4 17h16"
                    strokeWidth="2"
                    strokeLinecap="round"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {mobileOpen ? (
        <div className="lg:hidden" id="mobile-nav">
          <button
            type="button"
            className="fixed left-0 right-0 z-[90] bg-slate-900/45 backdrop-blur-[2px]"
            style={{ top: headerHeightPx, bottom: 0 }}
            aria-label="Close menu"
            onClick={() => setMobileOpen(false)}
          />
          <div
            className="fixed left-0 right-0 z-[95] flex flex-col border-t border-slate-200/80 bg-white shadow-[0_12px_40px_-8px_rgba(15,23,42,0.2)]"
            style={{
              top: headerHeightPx,
              bottom: 0,
              paddingBottom: "max(1rem, env(safe-area-inset-bottom, 0px))",
            }}
          >
            <nav
              className="min-h-0 flex-1 overflow-y-auto overscroll-y-contain px-4 pb-6 pt-2"
              aria-label="Topics and in-depth guides"
            >
              <Link
                href="/"
                className={`block border-b border-slate-100 py-3.5 text-base font-bold ${
                  pathname === "/" ? "text-primary" : "text-navy active:text-primary"
                }`}
                onClick={() => setMobileOpen(false)}
              >
                Home
              </Link>
              {headerNavClusters.map((cluster) => {
                const expanded = mobileClusterOpen === cluster.pillarHref;
                return (
                  <div key={cluster.pillarHref} className="border-b border-slate-100 last:border-b-0">
                    <div className="flex items-stretch gap-0">
                      <Link
                        href={cluster.pillarHref}
                        className={`min-w-0 flex-1 py-3.5 pr-2 text-base font-bold leading-snug ${
                          pathname === cluster.pillarHref
                            ? "text-primary"
                            : "text-navy active:text-primary"
                        }`}
                        onClick={() => setMobileOpen(false)}
                      >
                        {cluster.pillarTitle}
                      </Link>
                      <button
                        type="button"
                        className="flex w-12 shrink-0 items-center justify-center border-l border-slate-100 text-slate-500 transition active:bg-slate-100"
                        aria-expanded={expanded}
                        aria-controls={`mobile-sub-${cluster.pillarHref.replace(/\//g, "")}`}
                        onClick={() =>
                          setMobileClusterOpen((h) => (h === cluster.pillarHref ? null : cluster.pillarHref))
                        }
                      >
                        <span className="sr-only">
                          {expanded ? "Hide" : "Show"} guides for {cluster.pillarTitle}
                        </span>
                        <ChevronDown
                          className={`transition-transform duration-200 ${expanded ? "rotate-180" : ""}`}
                        />
                      </button>
                    </div>
                    {expanded ? (
                      <ul
                        id={`mobile-sub-${cluster.pillarHref.replace(/\//g, "")}`}
                        className="space-y-0.5 border-t border-slate-100 bg-slate-50/70 px-2 py-2"
                      >
                        {cluster.supporting.map((s) => (
                          <li key={s.href}>
                            <Link
                              href={s.href}
                              className={`block rounded-lg py-2.5 pl-3 pr-2 text-sm leading-snug ${
                                pathname === s.href
                                  ? "border-l-[3px] border-l-accent bg-white font-semibold text-navy shadow-sm"
                                  : "border-l-[3px] border-l-transparent text-slate-600 active:bg-white"
                              }`}
                              onClick={() => setMobileOpen(false)}
                            >
                              {s.label}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    ) : null}
                  </div>
                );
              })}
              <Link
                href={headerCta.href}
                className={`mt-5 block rounded-xl border py-3.5 text-center text-sm font-semibold shadow-sm transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 ${
                  pathname === headerCta.href
                    ? "border-navy bg-navy text-white"
                    : "border-accent/90 bg-accent text-accent-foreground active:bg-accent/95"
                }`}
                onClick={() => setMobileOpen(false)}
              >
                {headerCta.label}
              </Link>
            </nav>
          </div>
        </div>
      ) : null}
    </header>
  );
}

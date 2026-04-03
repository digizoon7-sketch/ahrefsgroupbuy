import Link from "next/link";
import { ahrefsBarItems, homepageToolsSection } from "@/content/ahrefs-bar";
import { AhrefsBarIcon } from "./AhrefsBarIcons";

export function AhrefsBar() {
  return (
    <section className="rounded-[1.75rem] border border-indigo-100/70 bg-gradient-to-br from-white/95 via-indigo-50/30 to-sky-50/35 p-8 shadow-[0_28px_90px_-32px_rgba(79,70,229,0.18)] backdrop-blur-xl md:p-10 lg:p-12">
      <div className="flex flex-col gap-3 md:max-w-3xl">
        <p className="w-fit rounded-full border border-violet-200/70 bg-violet-50/50 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.14em] text-violet-800/85">
          Tool hubs
        </p>
        <h2 className="text-pretty text-2xl font-bold tracking-tight text-navy md:text-3xl lg:text-[2rem] lg:leading-tight">
          {homepageToolsSection.title}
        </h2>
        <p className="text-pretty text-base leading-relaxed text-slate-600 md:text-lg">
          {homepageToolsSection.subtitle}
        </p>
      </div>
      <div className="mt-10 grid gap-3 sm:grid-cols-2 lg:grid-cols-5 lg:gap-4">
        {ahrefsBarItems.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            className="group flex flex-col rounded-2xl border border-slate-200/55 bg-white/75 p-4 shadow-sm shadow-slate-900/[0.03] transition duration-200 hover:-translate-y-1 hover:border-primary/25 hover:bg-white hover:shadow-lg hover:shadow-indigo-950/[0.06]"
          >
            <span className="inline-flex h-11 w-11 items-center justify-center rounded-xl border border-indigo-100 bg-gradient-to-br from-white to-indigo-50/60 text-navy shadow-md shadow-indigo-950/[0.04] transition group-hover:border-primary/20 group-hover:shadow-md">
              <AhrefsBarIcon icon={item.icon} />
            </span>
            <span className="mt-4 text-sm font-semibold text-navy transition group-hover:text-primary">
              {item.title}
            </span>
            <span className="mt-1.5 text-sm leading-snug text-slate-600">{item.description}</span>
          </Link>
        ))}
      </div>
    </section>
  );
}

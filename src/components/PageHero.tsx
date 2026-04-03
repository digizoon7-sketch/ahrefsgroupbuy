import type { ReactNode } from "react";

type Props = {
  eyebrow?: string;
  title: string;
  description: string;
  /** Optional extra block after the main description (e.g. inline links). */
  children?: ReactNode;
};

export function PageHero({ eyebrow, title, description, children }: Props) {
  return (
    <header className="relative overflow-hidden rounded-3xl border border-slate-200/80 bg-gradient-to-br from-white via-slate-50 to-blue-50/40 p-8 md:p-12">
      <div className="pointer-events-none absolute -right-24 -top-24 h-64 w-64 rounded-full bg-accent/10 blur-3xl" />
      <div className="relative">
        {eyebrow ? (
          <p className="text-sm font-semibold uppercase tracking-wide text-primary">
            {eyebrow}
          </p>
        ) : null}
        <h1 className="mt-3 max-w-4xl text-balance text-3xl font-bold tracking-tight text-navy md:text-4xl lg:text-5xl">
          {title}
        </h1>
        <p className="mt-5 max-w-3xl text-lg leading-relaxed text-slate-600">
          {description}
        </p>
        {children ? <div className="mt-4 max-w-3xl text-lg leading-relaxed text-slate-600">{children}</div> : null}
      </div>
    </header>
  );
}

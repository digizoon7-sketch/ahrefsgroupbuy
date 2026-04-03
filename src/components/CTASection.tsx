import Link from "next/link";

type Props = {
  title: string;
  description: string;
  primary: { label: string; href: string };
  secondary?: { label: string; href: string };
};

export function CTASection({ title, description, primary, secondary }: Props) {
  return (
    <section className="rounded-3xl border border-slate-200/80 bg-navy p-8 text-white md:p-10">
      <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
        <div>
          <h2 className="text-2xl font-bold tracking-tight md:text-3xl">{title}</h2>
          <p className="mt-3 max-w-2xl text-slate-200">{description}</p>
        </div>
        <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
          <Link
            href={primary.href}
            className="inline-flex items-center justify-center rounded-xl bg-accent px-6 py-3 text-center text-sm font-semibold text-white shadow-lg shadow-orange-900/20 transition hover:bg-orange-600"
          >
            {primary.label}
          </Link>
          {secondary ? (
            <Link
              href={secondary.href}
              className="inline-flex items-center justify-center rounded-xl border border-white/20 bg-white/5 px-6 py-3 text-center text-sm font-semibold text-white transition hover:bg-white/10"
            >
              {secondary.label}
            </Link>
          ) : null}
        </div>
      </div>
    </section>
  );
}

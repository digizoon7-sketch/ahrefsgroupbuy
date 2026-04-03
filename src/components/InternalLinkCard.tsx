import Link from "next/link";

type Props = {
  title: string;
  description: string;
  href: string;
  label?: string;
};

export function InternalLinkCard({
  title,
  description,
  href,
  label = "Read guide",
}: Props) {
  return (
    <Link
      href={href}
      className="group block rounded-2xl border border-slate-200/80 bg-white p-6 shadow-sm transition-all hover:-translate-y-0.5 hover:border-primary/25 hover:shadow-md"
    >
      <h3 className="text-lg font-semibold text-navy group-hover:text-primary">
        {title}
      </h3>
      <p className="mt-2 text-sm leading-relaxed text-slate-600">{description}</p>
      <span className="mt-4 inline-flex items-center text-sm font-semibold text-accent">
        {label}
        <span className="ml-1 transition-transform group-hover:translate-x-0.5">→</span>
      </span>
    </Link>
  );
}

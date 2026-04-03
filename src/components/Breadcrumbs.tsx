import Link from "next/link";
import { SITE_URL } from "@/lib/constants";
import { SchemaInjector } from "@/components/SchemaInjector";
import { breadcrumbListSchema } from "@/lib/schema";
import type { BreadcrumbItem } from "@/lib/breadcrumbs";

type Props = {
  items: BreadcrumbItem[];
};

export function Breadcrumbs({ items }: Props) {
  const schemaItems = items.map((it) => ({
    name: it.label,
    item: `${SITE_URL}${it.href === "/" ? "" : it.href}`,
  }));

  return (
    <>
      <SchemaInjector data={breadcrumbListSchema(schemaItems)} />
      {/* Visual trail hidden: same links exist in the site header; keep markup for screen readers + schema for SEO. */}
      <nav aria-label="Breadcrumb" className="sr-only">
        <ol className="flex flex-wrap items-center gap-2 text-slate-600">
          {items.map((it, idx) => {
            const last = idx === items.length - 1;
            return (
              <li key={it.href} className="flex items-center gap-2">
                {idx > 0 ? <span className="text-slate-300">/</span> : null}
                {last ? (
                  <span className="font-medium text-navy">{it.label}</span>
                ) : (
                  <Link href={it.href} className="hover:text-navy hover:underline">
                    {it.label}
                  </Link>
                )}
              </li>
            );
          })}
        </ol>
      </nav>
    </>
  );
}


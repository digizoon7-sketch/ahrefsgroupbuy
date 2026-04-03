type Item = { title: string; description: string };

type Props = { items: Item[] };

export function BenefitGrid({ items }: Props) {
  return (
    <div className="grid gap-6 md:grid-cols-2">
      {items.map((item) => (
        <div
          key={item.title}
          className="rounded-2xl border border-slate-200/80 bg-white p-6 shadow-sm"
        >
          <h3 className="text-lg font-semibold text-navy">{item.title}</h3>
          <p className="mt-3 text-sm leading-relaxed text-slate-600">{item.description}</p>
        </div>
      ))}
    </div>
  );
}

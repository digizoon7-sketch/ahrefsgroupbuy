type Column = { key: string; label: string };
type Row = Record<string, string>;

type Props = {
  columns: Column[];
  rows: Row[];
  caption?: string;
};

export function ComparisonTable({ columns, rows, caption }: Props) {
  return (
    <div className="overflow-x-auto rounded-2xl border border-slate-200/80 bg-white shadow-sm">
      <table className="min-w-full border-collapse text-left text-sm">
        {caption ? <caption className="sr-only">{caption}</caption> : null}
        <thead>
          <tr className="border-b border-slate-200 bg-slate-50/80">
            {columns.map((col) => (
              <th
                key={col.key}
                scope="col"
                className="whitespace-nowrap px-4 py-3 font-semibold text-navy"
              >
                {col.label}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((row, i) => (
            <tr
              key={i}
              className="border-b border-slate-100 last:border-b-0 odd:bg-white even:bg-slate-50/40"
            >
              {columns.map((col) => (
                <td key={col.key} className="px-4 py-3 text-slate-700">
                  {row[col.key]}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

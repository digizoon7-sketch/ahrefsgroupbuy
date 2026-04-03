/** Decorative hero preview — generic SEO dashboard look (not Ahrefs product UI). */
export function DashboardMockup() {
  return (
    <div
      className="w-full max-w-md overflow-hidden rounded-2xl border border-slate-200/90 bg-white shadow-xl shadow-slate-200/50 ring-1 ring-slate-100"
      aria-hidden
    >
      <div className="flex min-h-[280px] md:min-h-[300px]">
        {/* Narrow app rail (common in analytics UIs) */}
        <div className="flex w-11 shrink-0 flex-col items-center gap-3 border-r border-slate-800 bg-slate-900 py-3">
          <span className="h-1.5 w-1.5 rounded-full bg-accent" />
          <span className="mt-1 h-6 w-6 rounded-md bg-slate-700/80" />
          <span className="h-6 w-6 rounded-md bg-slate-800" />
          <span className="h-6 w-6 rounded-md bg-slate-800" />
          <span className="mt-auto h-6 w-6 rounded-full bg-slate-700/60" />
        </div>

        <div className="min-w-0 flex-1">
          {/* Top bar: window dots + project */}
          <div className="flex items-center gap-2 border-b border-slate-100 bg-slate-50/90 px-3 py-2">
            <div className="flex gap-1">
              <span className="h-2 w-2 rounded-full bg-red-400/90" />
              <span className="h-2 w-2 rounded-full bg-amber-400/90" />
              <span className="h-2 w-2 rounded-full bg-emerald-500/80" />
            </div>
            <span className="text-[10px] font-semibold uppercase tracking-wider text-slate-400">
              Overview
            </span>
            <span className="ml-auto truncate rounded-md border border-slate-200 bg-white px-2 py-0.5 text-[10px] font-medium text-slate-600">
              yoursite.com
            </span>
          </div>

          <div className="p-4 md:p-5">
            <div className="flex flex-wrap items-start justify-between gap-3">
              <div>
                <p className="text-[11px] font-medium uppercase tracking-wide text-slate-400">
                  Organic search traffic
                </p>
                <p className="mt-1 text-2xl font-bold tabular-nums tracking-tight text-slate-900 md:text-3xl">
                  24.8K
                </p>
                <p className="mt-1 text-xs">
                  <span className="font-semibold text-emerald-600">+12.4%</span>
                  <span className="text-slate-400"> vs last period</span>
                </p>
              </div>
              <div className="text-right">
                <p className="text-[10px] font-medium text-slate-400">Report</p>
                <p className="mt-0.5 rounded-md border border-slate-200 bg-white px-2 py-1 text-[11px] font-medium text-slate-700 shadow-sm">
                  Last 28 days
                </p>
              </div>
            </div>

            {/* Area-style chart — orange series */}
            <div className="relative mt-4 h-[120px] rounded-lg border border-slate-100 bg-slate-50/80">
              <svg
                className="h-full w-full"
                viewBox="0 0 400 120"
                preserveAspectRatio="none"
                role="presentation"
              >
                <defs>
                  <linearGradient id="heroTrafficFill" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor="#f97316" stopOpacity="0.45" />
                    <stop offset="100%" stopColor="#f97316" stopOpacity="0.02" />
                  </linearGradient>
                </defs>
                {[24, 48, 72, 96].map((y) => (
                  <line
                    key={y}
                    x1="0"
                    y1={y}
                    x2="400"
                    y2={y}
                    stroke="#e2e8f0"
                    strokeWidth="1"
                    vectorEffect="non-scaling-stroke"
                  />
                ))}
                <path
                  d="M0,98 L36,92 L72,85 L108,78 L144,72 L180,58 L216,52 L252,45 L288,40 L324,36 L360,32 L400,26 L400,120 L0,120 Z"
                  fill="url(#heroTrafficFill)"
                />
                <path
                  d="M0,98 L36,92 L72,85 L108,78 L144,72 L180,58 L216,52 L252,45 L288,40 L324,36 L360,32 L400,26"
                  fill="none"
                  stroke="#f97316"
                  strokeWidth="2.25"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  vectorEffect="non-scaling-stroke"
                />
              </svg>
            </div>

            {/* Metric row — DR + counts */}
            <ul className="mt-4 grid grid-cols-3 gap-2 border-t border-slate-100 pt-4">
              <li className="rounded-lg bg-slate-50 px-2 py-2 text-center">
                <p className="text-[9px] font-semibold uppercase tracking-wide text-slate-400">
                  DR
                </p>
                <p className="mt-0.5 text-lg font-bold tabular-nums text-slate-900">42</p>
              </li>
              <li className="rounded-lg bg-slate-50 px-2 py-2 text-center">
                <p className="text-[9px] font-semibold uppercase tracking-wide text-slate-400">
                  Keywords
                </p>
                <p className="mt-0.5 text-lg font-bold tabular-nums text-slate-900">1.2K</p>
              </li>
              <li className="rounded-lg bg-slate-50 px-2 py-2 text-center">
                <p className="text-[9px] font-semibold uppercase tracking-wide text-slate-400">
                  Ref. domains
                </p>
                <p className="mt-0.5 text-lg font-bold tabular-nums text-slate-900">640</p>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

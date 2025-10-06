import { useState } from "react";
import { Bar, BarChart, CartesianGrid, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts";
import type { TimeframeKey } from "../data/analytics";
import { conversionTimeline } from "../data/analytics";
import TimeframeTabs from "./TimeframeTabs";

const formatNumber = (value: number) =>
  new Intl.NumberFormat("en-US", { maximumFractionDigits: 0 }).format(value);

const ConversionTooltip = ({
  active,
  payload,
}: {
  active?: boolean;
  payload?: { value: number; dataKey: string; payload: { label: string; leads: number; conversions: number } }[];
}) => {
  if (!active || !payload || payload.length === 0) {
    return null;
  }
  const [{ payload: point }] = payload;
  return (
    <div className="rounded-xl border border-slate-200/70 bg-white/90 p-3 text-xs shadow-lg backdrop-blur dark:border-slate-700/70 dark:bg-slate-900/90">
      <p className="font-semibold text-slate-900 dark:text-white">{point.label}</p>
      <p className="mt-2 text-slate-500 dark:text-slate-400">Leads · {formatNumber(point.leads)}</p>
      <p className="text-slate-500 dark:text-slate-400">
        Conversions · {formatNumber(point.conversions)}
      </p>
      <p className="mt-1 text-emerald-500 dark:text-emerald-300">
        Conversion Rate · {((point.conversions / point.leads) * 100).toFixed(1)}%
      </p>
    </div>
  );
};

export const ConversionBarChart = () => {
  const [timeframe, setTimeframe] = useState<TimeframeKey>("weekly");
  const dataset = conversionTimeline[timeframe];

  return (
    <div className="glass-panel h-full rounded-3xl border border-slate-200/70 p-6 transition hover:shadow-xl dark:border-slate-800/70">
      <div className="flex items-start justify-between gap-3 pb-6">
        <div>
          <p className="text-sm uppercase tracking-[0.3em] text-slate-400 dark:text-slate-500">
            Growth Diagnostics
          </p>
          <h3 className="mt-2 text-xl font-semibold text-slate-900 dark:text-white">
            Pipeline Health
          </h3>
          <p className="text-sm text-slate-500 dark:text-slate-400">
            Compare lead inflow to closed-won conversions and unlock optimization levers.
          </p>
        </div>
        <TimeframeTabs value={timeframe} onChange={setTimeframe} />
      </div>
      <div className="h-72 w-full">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={dataset} barCategoryGap="28%">
            <CartesianGrid stroke="rgba(100,116,139,0.15)" vertical={false} />
            <XAxis dataKey="label" tickLine={false} axisLine={false} tick={{ fill: "#94a3b8", fontSize: 12 }} />
            <YAxis
              tickFormatter={(value) => `${(value / 1000).toFixed(0)}k`}
              tickLine={false}
              axisLine={false}
              tick={{ fill: "#94a3b8", fontSize: 12 }}
            />
            <Tooltip cursor={{ fill: "rgba(99,102,241,0.08)" }} content={<ConversionTooltip />} />
            <Bar dataKey="leads" name="Leads" fill="#c7d2fe" radius={[12, 12, 12, 12]} />
            <Bar dataKey="conversions" name="Conversions" fill="#6366f1" radius={[12, 12, 12, 12]} />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default ConversionBarChart;

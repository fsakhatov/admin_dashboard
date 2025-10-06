import { useMemo, useState } from "react";
import {
  Area,
  AreaChart,
  CartesianGrid,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import type { TimeframeKey } from "../data/analytics";
import { revenueTimeline } from "../data/analytics";
import TimeframeTabs from "./TimeframeTabs";

type TooltipPayload = {
  color: string;
  dataKey: "revenue" | "profit";
  payload: {
    label: string;
    revenue: number;
    profit: number;
  };
  value: number;
};

const formatCurrency = (value: number) =>
  new Intl.NumberFormat("en-US", { style: "currency", currency: "USD", maximumFractionDigits: 0 }).format(
    value,
  );

const CustomizedTooltip = ({ active, payload }: { active?: boolean; payload?: TooltipPayload[] }) => {
  if (!active || !payload || payload.length === 0) {
    return null;
  }
  const [primary] = payload;
  const { label, revenue, profit } = primary.payload;
  return (
    <div className="rounded-xl border border-slate-200/70 bg-white/90 p-4 text-xs shadow-lg backdrop-blur dark:border-slate-700/70 dark:bg-slate-900/90">
      <p className="text-sm font-semibold text-slate-800 dark:text-slate-100">{label}</p>
      <div className="mt-2 space-y-1 text-slate-500 dark:text-slate-400">
        <p>
          Revenue: <span className="font-semibold text-slate-900 dark:text-white">{formatCurrency(revenue)}</span>
        </p>
        <p>
          Profit: <span className="font-semibold text-slate-900 dark:text-white">{formatCurrency(profit)}</span>
        </p>
        <p className="text-emerald-500 dark:text-emerald-300">
          Margin: {((profit / revenue) * 100).toFixed(1)}%
        </p>
      </div>
    </div>
  );
};

export const RevenueTimelineChart = () => {
  const [timeframe, setTimeframe] = useState<TimeframeKey>("monthly");
  const dataset = revenueTimeline[timeframe];

  const totals = useMemo(() => {
    const revenueTotal = dataset.reduce((acc, point) => acc + point.revenue, 0);
    const profitTotal = dataset.reduce((acc, point) => acc + point.profit, 0);
    return {
      revenue: formatCurrency(revenueTotal),
      profit: formatCurrency(profitTotal),
      margin: `${((profitTotal / revenueTotal) * 100).toFixed(1)}%`,
    };
  }, [dataset]);

  return (
    <div className="glass-panel h-full rounded-3xl border border-slate-200/70 p-6 transition hover:shadow-xl dark:border-slate-800/70">
      <div className="flex flex-col gap-4 pb-6 md:flex-row md:items-center md:justify-between">
        <div>
          <p className="text-sm uppercase tracking-[0.3em] text-slate-400 dark:text-slate-500">
            Revenue Intelligence
          </p>
          <h3 className="mt-3 text-2xl font-semibold text-slate-900 dark:text-white">
            Operating Momentum
          </h3>
          <p className="text-sm text-slate-500 dark:text-slate-400">
            Monitor run rate, margin stability, and forecast accuracy with multi-horizon context.
          </p>
        </div>
        <TimeframeTabs value={timeframe} onChange={setTimeframe} />
      </div>
      <div className="grid gap-4 rounded-2xl bg-slate-100/60 p-4 text-sm dark:bg-slate-900/60 md:grid-cols-3">
        <div>
          <p className="text-xs uppercase tracking-wide text-slate-400 dark:text-slate-500">
            Total Revenue
          </p>
          <p className="text-xl font-semibold text-brand">{totals.revenue}</p>
        </div>
        <div>
          <p className="text-xs uppercase tracking-wide text-slate-400 dark:text-slate-500">
            Contribution Margin
          </p>
          <p className="text-xl font-semibold text-emerald-500 dark:text-emerald-300">{totals.margin}</p>
        </div>
        <div>
          <p className="text-xs uppercase tracking-wide text-slate-400 dark:text-slate-500">
            Net Profit
          </p>
          <p className="text-xl font-semibold text-slate-900 dark:text-white">{totals.profit}</p>
        </div>
      </div>
      <div className="mt-6 h-80 w-full">
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart data={dataset} margin={{ top: 10, right: 20, left: -10, bottom: 0 }}>
            <defs>
              <linearGradient id="revenueFill" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#6366f1" stopOpacity={0.8} />
                <stop offset="95%" stopColor="#6366f1" stopOpacity={0} />
              </linearGradient>
              <linearGradient id="profitFill" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#34d399" stopOpacity={0.85} />
                <stop offset="95%" stopColor="#34d399" stopOpacity={0} />
              </linearGradient>
            </defs>
            <CartesianGrid stroke="rgba(100,116,139,0.15)" strokeDasharray="4 8" />
            <XAxis dataKey="label" tickLine={false} axisLine={false} tick={{ fill: "#94a3b8", fontSize: 12 }} />
            <YAxis
              tickFormatter={(value) => `$${(value / 1000).toFixed(0)}k`}
              tickLine={false}
              axisLine={false}
              tick={{ fill: "#94a3b8", fontSize: 12 }}
            />
            <Tooltip content={<CustomizedTooltip />} />
            <Area
              type="monotone"
              dataKey="revenue"
              stroke="#6366f1"
              strokeWidth={3}
              fillOpacity={1}
              fill="url(#revenueFill)"
            />
            <Area
              type="monotone"
              dataKey="profit"
              stroke="#34d399"
              strokeWidth={2}
              fillOpacity={1}
              fill="url(#profitFill)"
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default RevenueTimelineChart;

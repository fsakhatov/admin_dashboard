import { ArrowDownRight, ArrowUpRight } from "lucide-react";
import { teamDelivery } from "../data/analytics";

const badgeStyles: Record<
  (typeof teamDelivery)[number]["health"],
  { label: string; className: string }
> = {
  excellent: {
    label: "Excellent",
    className:
      "bg-emerald-100/70 text-emerald-700 border border-emerald-300/70 dark:bg-emerald-500/10 dark:text-emerald-300 dark:border-emerald-400/30",
  },
  good: {
    label: "On Track",
    className:
      "bg-blue-100/70 text-blue-600 border border-blue-300/70 dark:bg-blue-500/10 dark:text-blue-300 dark:border-blue-400/30",
  },
  "at-risk": {
    label: "At Risk",
    className:
      "bg-rose-100/70 text-rose-600 border border-rose-300/70 dark:bg-rose-500/10 dark:text-rose-300 dark:border-rose-400/30",
  },
};

export const TeamHealth = () => {
  return (
    <div className="glass-panel rounded-3xl border border-slate-200/70 p-6 transition hover:shadow-xl dark:border-slate-800/70">
      <div className="flex items-center justify-between pb-5">
        <div>
          <p className="text-sm uppercase tracking-[0.3em] text-slate-400 dark:text-slate-500">
            Delivery Health
          </p>
          <h3 className="mt-2 text-xl font-semibold text-slate-900 dark:text-white">
            Squad Velocity
          </h3>
        </div>
        <span className="rounded-full bg-slate-100/80 px-3 py-1 text-xs font-semibold text-slate-600 dark:bg-slate-800/70 dark:text-slate-300">
          Sprint 42
        </span>
      </div>
      <div className="space-y-3">
        {teamDelivery.map((team) => {
          const badge = badgeStyles[team.health];
          const isPositive = team.delta >= 0;
          return (
            <div
              key={team.squad}
              className="flex items-center justify-between rounded-2xl border border-slate-200/70 bg-white/60 p-4 shadow-sm dark:border-slate-800/70 dark:bg-slate-900/60"
            >
              <div>
                <p className="text-sm font-semibold text-slate-900 dark:text-white">{team.squad}</p>
                <p className="text-xs text-slate-500 dark:text-slate-400">Velocity Index</p>
              </div>
              <div className="flex items-center gap-4">
                <span className={`rounded-full px-3 py-1 text-xs font-semibold ${badge.className}`}>
                  {badge.label}
                </span>
                <div className="text-right">
                  <p className="text-lg font-semibold text-slate-900 dark:text-white">{team.velocity}%</p>
                  <p
                    className={`flex items-center justify-end gap-1 text-xs font-medium ${isPositive ? "text-emerald-500 dark:text-emerald-300" : "text-rose-500 dark:text-rose-300"}`}
                  >
                    {isPositive ? <ArrowUpRight className="h-3.5 w-3.5" /> : <ArrowDownRight className="h-3.5 w-3.5" />}
                    {Math.abs(team.delta).toFixed(1)} pts
                  </p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default TeamHealth;

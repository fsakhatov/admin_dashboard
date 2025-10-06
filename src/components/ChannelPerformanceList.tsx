import { channelPerformance } from "../data/analytics";

export const ChannelPerformanceList = () => {
  return (
    <div className="glass-panel rounded-3xl border border-slate-200/70 p-6 transition hover:shadow-xl dark:border-slate-800/70">
      <div className="flex items-center justify-between pb-5">
        <div>
          <p className="text-sm uppercase tracking-[0.3em] text-slate-400 dark:text-slate-500">
            Channel Mix
          </p>
          <h3 className="mt-2 text-xl font-semibold text-slate-900 dark:text-white">
            Growth Contribution
          </h3>
        </div>
        <span className="rounded-full bg-brand/10 px-3 py-1 text-xs font-semibold text-brand">
          +18.3% QoQ
        </span>
      </div>
      <div className="space-y-4">
        {channelPerformance.map((entry) => (
          <div key={entry.channel} className="space-y-2 rounded-2xl border border-slate-200/60 p-4 dark:border-slate-800/70">
            <div className="flex items-center justify-between text-sm">
              <p className="font-semibold text-slate-900 dark:text-white">{entry.channel}</p>
              <p className="text-emerald-500 dark:text-emerald-300">+{entry.growth.toFixed(1)}%</p>
            </div>
            <div className="h-2 w-full rounded-full bg-slate-200/60 dark:bg-slate-700/60">
              <div
                className="h-full rounded-full bg-gradient-to-r from-brand to-indigo-500"
                style={{ width: `${entry.share}%` }}
              />
            </div>
            <p className="text-xs text-slate-500 dark:text-slate-400">
              Share of new revenue · <span className="font-semibold text-slate-700 dark:text-slate-200">{entry.share}%</span>
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ChannelPerformanceList;

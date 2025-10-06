import { Clock3, MessageSquare } from "lucide-react";
import { activityFeed } from "../data/analytics";

export const ActivityFeed = () => {
  return (
    <div className="glass-panel rounded-3xl border border-slate-200/70 p-6 transition hover:shadow-xl dark:border-slate-800/70">
      <div className="flex items-center justify-between pb-5">
        <div>
          <p className="text-sm uppercase tracking-[0.3em] text-slate-400 dark:text-slate-500">
            Operating Rhythm
          </p>
          <h3 className="mt-2 text-xl font-semibold text-slate-900 dark:text-white">Activity Feed</h3>
        </div>
        <button
          type="button"
          className="inline-flex items-center gap-2 rounded-xl border border-slate-200/70 bg-slate-100/70 px-3 py-1.5 text-xs font-semibold text-slate-600 transition hover:border-brand hover:text-brand dark:border-slate-700/70 dark:bg-slate-800/70 dark:text-slate-300"
        >
          <MessageSquare className="h-4 w-4" /> Share Update
        </button>
      </div>
      <div className="space-y-4">
        {activityFeed.map((item) => (
          <div
            key={item.id}
            className="group rounded-2xl border border-slate-200/70 bg-white/60 p-4 transition hover:border-brand/70 hover:shadow-md dark:border-slate-800/70 dark:bg-slate-900/60"
          >
            <div className="flex items-center justify-between text-xs text-slate-400 dark:text-slate-500">
              <span className="inline-flex items-center gap-1">
                <Clock3 className="h-3.5 w-3.5" /> {item.timestamp}
              </span>
              <span>{item.actor}</span>
            </div>
            <p className="mt-3 text-sm font-medium text-slate-900 transition group-hover:text-brand dark:text-slate-100">
              {item.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ActivityFeed;

import { clsx } from "clsx";
import type { LucideIcon } from "lucide-react";

type StatCardProps = {
  title: string;
  primary: string;
  caption: string;
  change: string;
  positive?: boolean;
  icon: LucideIcon;
};

export const StatCard = ({
  title,
  primary,
  caption,
  change,
  positive = true,
  icon: Icon,
}: StatCardProps) => {
  return (
    <div className="glass-panel group flex flex-col gap-4 overflow-hidden rounded-3xl border border-slate-200/80 p-5 transition hover:-translate-y-1 hover:shadow-xl hover:shadow-brand/10 dark:border-slate-800/70">
      <div className="flex items-center justify-between">
        <div>
          <p className="text-sm uppercase tracking-[0.3em] text-slate-400 dark:text-slate-500">
            {title}
          </p>
          <p className="mt-2 text-3xl font-semibold">{primary}</p>
        </div>
        <div className="rounded-2xl bg-brand/10 p-3 text-brand shadow-inner shadow-brand/20 transition group-hover:bg-brand group-hover:text-white">
          <Icon className="h-5 w-5" strokeWidth={2.5} />
        </div>
      </div>
      <div className="flex items-center justify-between text-sm text-slate-500 dark:text-slate-400">
        <span>{caption}</span>
        <span
          className={clsx(
            "rounded-full border px-3 py-1 font-semibold",
            positive
              ? "border-emerald-400/60 bg-emerald-100/60 text-emerald-700 dark:border-emerald-400/40 dark:bg-emerald-500/10 dark:text-emerald-300"
              : "border-rose-400/60 bg-rose-100/60 text-rose-600 dark:border-rose-400/40 dark:bg-rose-500/10 dark:text-rose-300",
          )}
        >
          {change}
        </span>
      </div>
    </div>
  );
};

export default StatCard;

import { clsx } from "clsx";
import type { TimeframeKey } from "../data/analytics";

const OPTIONS: { key: TimeframeKey; label: string }[] = [
  { key: "daily", label: "Daily" },
  { key: "weekly", label: "Weekly" },
  { key: "monthly", label: "Monthly" },
  { key: "yearly", label: "Yearly" },
];

type TimeframeTabsProps = {
  value: TimeframeKey;
  onChange: (value: TimeframeKey) => void;
};

export const TimeframeTabs = ({ value, onChange }: TimeframeTabsProps) => {
  return (
    <div className="flex w-full justify-end">
      <div className="inline-flex rounded-full border border-slate-200/70 bg-white/70 p-1 text-xs shadow-inner dark:border-slate-700/70 dark:bg-slate-900/70">
        {OPTIONS.map((option) => (
          <button
            key={option.key}
            type="button"
            onClick={() => onChange(option.key)}
            className={clsx(
              "rounded-full px-3.5 py-1.5 font-semibold transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand",
              value === option.key
                ? "bg-brand text-white shadow-sm"
                : "text-slate-500 hover:bg-slate-200/80 dark:text-slate-400 dark:hover:bg-slate-800/80",
            )}
          >
            {option.label}
          </button>
        ))}
      </div>
    </div>
  );
};

export default TimeframeTabs;

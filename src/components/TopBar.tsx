import { Bell, Menu, Search, Sparkles, UserCircle2 } from "lucide-react";
import ThemeToggle from "./ThemeToggle";

type TopBarProps = {
  onOpenSidebar: () => void;
};

export const TopBar = ({ onOpenSidebar }: TopBarProps) => {
  return (
    <header className="glass-panel sticky top-0 z-20 flex items-center justify-between border-b border-slate-200/70 px-6 py-4 backdrop-blur dark:border-slate-800/70">
      <div className="flex flex-1 items-center gap-3">
        <button
          type="button"
          onClick={onOpenSidebar}
          className="inline-flex h-10 w-10 items-center justify-center rounded-xl border border-slate-200/60 text-slate-500 transition hover:border-brand hover:text-brand focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand focus-visible:ring-offset-2 dark:border-slate-700/70 dark:text-slate-400 dark:hover:border-brand lg:hidden"
          aria-label="Open navigation"
        >
          <Menu className="h-5 w-5" />
        </button>
        <div className="relative hidden flex-1 items-center lg:flex">
          <Search className="absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400" />
          <input
            type="search"
            placeholder="Search metrics, teams, or playbooks…"
            className="w-full rounded-xl border border-transparent bg-slate-100/80 py-2.5 pl-11 pr-4 text-sm text-slate-700 shadow-inner transition placeholder:text-slate-400 focus:border-brand focus:bg-white focus:outline-none dark:bg-slate-800/70 dark:text-slate-100 dark:placeholder:text-slate-500"
          />
        </div>
      </div>
      <div className="ml-4 flex items-center gap-3">
        <span className="hidden items-center gap-2 rounded-full bg-brand/10 px-3 py-1 text-xs font-medium text-brand lg:inline-flex">
          <Sparkles className="h-4 w-4" /> Live
        </span>
        <ThemeToggle />
        <button
          type="button"
          className="flex h-10 w-10 items-center justify-center rounded-full border border-slate-200/60 text-slate-500 transition hover:border-brand hover:text-brand focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand focus-visible:ring-offset-2 dark:border-slate-700/70 dark:text-slate-400 dark:hover:border-brand"
          aria-label="View notifications"
        >
          <Bell className="h-5 w-5" />
        </button>
        <button
          type="button"
          className="flex items-center gap-2 rounded-full border border-transparent bg-slate-100/80 px-3 py-1.5 text-sm font-semibold text-slate-700 transition hover:bg-slate-200/80 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand focus-visible:ring-offset-2 dark:bg-slate-800/70 dark:text-slate-200 dark:hover:bg-slate-700/70"
        >
          <UserCircle2 className="h-8 w-8 text-brand" />
          <div className="hidden text-left leading-tight md:block">
            <span className="block text-xs uppercase tracking-wide text-slate-400 dark:text-slate-500">
              Operator
            </span>
            <span className="block text-sm font-semibold">Avery Stone</span>
          </div>
        </button>
      </div>
    </header>
  );
};

export default TopBar;

import { clsx } from "clsx";
import {
  ActivitySquare,
  BarChart3,
  Gauge,
  LayoutDashboard,
  LifeBuoy,
  Settings,
  Users2,
} from "lucide-react";
import { NavLink } from "react-router-dom";

type SidebarProps = {
  isOpen: boolean;
  onNavigate?: () => void;
};

const navigation = [
  { name: "Overview", to: "/overview", icon: LayoutDashboard },
  { name: "Sales", to: "/sales", icon: BarChart3 },
  { name: "Customers", to: "/customers", icon: Users2 },
  { name: "Performance", to: "/performance", icon: Gauge },
  { name: "Reports", to: "/reports", icon: ActivitySquare },
  { name: "Support", to: "/support", icon: LifeBuoy },
  { name: "Settings", to: "/settings", icon: Settings },
] as const;

export const Sidebar = ({ isOpen, onNavigate }: SidebarProps) => {
  return (
    <aside
      className={clsx(
        "glass-panel fixed inset-y-0 left-0 z-30 w-72 border-r border-slate-200/70 px-6 py-6 transition-transform dark:border-slate-800/70 lg:static lg:translate-x-0",
        isOpen ? "translate-x-0" : "-translate-x-full",
      )}
    >
      <div className="flex items-center justify-between pb-8">
        <div className="flex items-center gap-3">
          <span className="flex h-10 w-10 items-center justify-center rounded-2xl bg-brand text-lg font-bold text-white shadow-md shadow-brand/30">
            N
          </span>
          <div>
            <p className="text-sm font-medium uppercase tracking-[0.24em] text-slate-500">
              NovaPulse
            </p>
            <p className="text-lg font-semibold text-slate-900 dark:text-white">Admin</p>
          </div>
        </div>
      </div>
      <nav className="space-y-1">
        {navigation.map((item) => {
          const Icon = item.icon;
          return (
            <NavLink
              key={item.name}
              to={item.to}
              onClick={onNavigate}
              className={({ isActive }) =>
                clsx(
                  "group flex items-center gap-3 rounded-xl px-4 py-3 text-sm font-medium transition-all",
                  isActive
                    ? "bg-brand/10 text-brand shadow-sm shadow-brand/10"
                    : "text-slate-500 hover:bg-slate-100/70 hover:text-slate-900 dark:text-slate-400 dark:hover:bg-slate-800/70 dark:hover:text-white",
                )
              }
            >
              <Icon className="h-5 w-5" strokeWidth={2} />
              {item.name}
            </NavLink>
          );
        })}
      </nav>
      <div className="mt-10 rounded-2xl border border-dashed border-slate-300/70 p-5 dark:border-slate-700/70">
        <p className="text-sm font-semibold text-slate-900 dark:text-white">Quarterly Pulse</p>
        <p className="mt-2 text-sm text-slate-500 dark:text-slate-400">
          Track strategic initiatives and OKR progress with real-time insights for your leadership
          rituals.
        </p>
        <button
          type="button"
          className="mt-4 w-full rounded-xl bg-gradient-to-r from-brand to-indigo-500 px-4 py-2 text-sm font-semibold text-white shadow-lg shadow-brand/30 transition hover:opacity-90 focus:outline-none focus-visible:ring-2 focus-visible:ring-white/70"
        >
          View Strategy Hub
        </button>
      </div>
    </aside>
  );
};

export default Sidebar;

import { Moon, Sun } from "lucide-react";
import { useTheme } from "../context/theme-context";

export const ThemeToggle = () => {
  const { theme, toggleTheme } = useTheme();
  const isDark = theme === "dark";

  return (
    <button
      type="button"
      onClick={toggleTheme}
      className="flex h-10 w-10 items-center justify-center rounded-full border border-slate-200/60 bg-white/80 shadow-sm backdrop-blur transition hover:border-brand hover:text-brand focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand focus-visible:ring-offset-2 dark:border-slate-700/80 dark:bg-slate-900/80 dark:hover:border-brand"
      aria-label={isDark ? "Activate light mode" : "Activate dark mode"}
    >
      <Sun className={`h-5 w-5 ${isDark ? "hidden" : ""}`} />
      <Moon className={`h-5 w-5 ${isDark ? "" : "hidden"}`} />
    </button>
  );
};

export default ThemeToggle;

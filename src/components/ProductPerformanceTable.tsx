import { ArrowUpRight } from "lucide-react";
import { topProducts } from "../data/analytics";

export const ProductPerformanceTable = () => {
  return (
    <div className="glass-panel rounded-3xl border border-slate-200/70 p-6 transition hover:shadow-xl dark:border-slate-800/70">
      <div className="flex items-center justify-between pb-5">
        <div>
          <p className="text-sm uppercase tracking-[0.3em] text-slate-400 dark:text-slate-500">
            Product Ladder
          </p>
          <h3 className="mt-2 text-xl font-semibold text-slate-900 dark:text-white">
            Top Performing Suites
          </h3>
        </div>
        <button
          type="button"
          className="inline-flex items-center gap-2 rounded-xl border border-transparent bg-brand px-3 py-1.5 text-xs font-semibold text-white shadow-brand/20 transition hover:opacity-90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-brand"
        >
          View Catalog
          <ArrowUpRight className="h-4 w-4" />
        </button>
      </div>
      <div className="overflow-x-auto">
        <table className="min-w-full divide-y divide-slate-200/80 text-left text-sm dark:divide-slate-700/70">
          <thead className="text-xs uppercase tracking-wider text-slate-500 dark:text-slate-400">
            <tr>
              <th className="px-4 py-3 font-medium">Product</th>
              <th className="px-4 py-3 font-medium">Segment</th>
              <th className="px-4 py-3 font-medium">Run Rate</th>
              <th className="px-4 py-3 font-medium text-right">Momentum</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-200/60 dark:divide-slate-800/60">
            {topProducts.map((product) => (
              <tr key={product.name} className="transition hover:bg-slate-100/70 dark:hover:bg-slate-800/50">
                <td className="px-4 py-3 font-semibold text-slate-900 dark:text-white">{product.name}</td>
                <td className="px-4 py-3 text-slate-500 dark:text-slate-400">{product.category}</td>
                <td className="px-4 py-3 font-medium text-slate-900 dark:text-slate-100">{product.revenue}</td>
                <td className="px-4 py-3 text-right font-semibold text-emerald-500 dark:text-emerald-300">
                  +{product.trend.toFixed(1)}%
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ProductPerformanceTable;

import { CalendarSearch, FileBarChart2, FileText, Share2 } from "lucide-react";
import PageHeader from "../components/PageHeader";

const reportCollections = [
  {
    title: "Board Readout",
    cadence: "Monthly · Delivered every first Tuesday",
    audience: "Executive Leadership · Board Advisors",
    highlights: [
      "Revenue trajectory with confidence intervals",
      "Customer narratives & product roadmap signals",
      "Strategic bets, risks, and mitigation playbooks",
    ],
  },
  {
    title: "Functional Review",
    cadence: "Weekly · Delivered every Thursday",
    audience: "GTM, Product, Operations",
    highlights: [
      "KPIs vs plan with anomaly detection",
      "Experiment velocity and insights pipeline",
      "Customer sentiment and escalation drill-downs",
    ],
  },
];

const Reports = () => {
  return (
    <div className="space-y-8 pb-16">
      <PageHeader
        title="Reporting Workspace"
        subtitle="Curated storytelling for leadership rituals — grounded in metrics, infused with narrative."
        actions={
          <>
            <button
              type="button"
              className="inline-flex items-center gap-2 rounded-xl border border-slate-200/70 bg-white/70 px-4 py-2 text-sm font-semibold text-slate-600 transition hover:border-brand hover:text-brand dark:border-slate-700/70 dark:bg-slate-900/70 dark:text-slate-300"
            >
              <CalendarSearch className="h-4 w-4" /> Schedule Report
            </button>
            <button
              type="button"
              className="inline-flex items-center gap-2 rounded-xl bg-brand px-4 py-2 text-sm font-semibold text-white shadow-brand/30 transition hover:opacity-90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-brand"
            >
              <Share2 className="h-4 w-4" /> Share Workspace
            </button>
          </>
        }
      />

      <section className="grid gap-6 lg:grid-cols-2">
        {reportCollections.map((collection) => (
          <div
            key={collection.title}
            className="glass-panel rounded-3xl border border-slate-200/70 p-6 dark:border-slate-800/70"
          >
            <div className="flex items-start justify-between">
              <div>
                <p className="text-xs uppercase tracking-[0.3em] text-slate-400 dark:text-slate-500">
                  Narrative
                </p>
                <h3 className="mt-2 text-xl font-semibold text-slate-900 dark:text-white">
                  {collection.title}
                </h3>
                <p className="mt-2 text-sm text-slate-500 dark:text-slate-400">{collection.cadence}</p>
                <p className="mt-1 text-xs uppercase tracking-[0.2em] text-brand">
                  {collection.audience}
                </p>
              </div>
              <FileBarChart2 className="h-7 w-7 text-brand" />
            </div>
            <ul className="mt-5 space-y-3 text-sm text-slate-500 dark:text-slate-400">
              {collection.highlights.map((point) => (
                <li
                  key={point}
                  className="rounded-2xl border border-slate-200/70 bg-white/70 px-4 py-3 dark:border-slate-800/70 dark:bg-slate-900/60"
                >
                  {point}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </section>

      <section className="glass-panel rounded-3xl border border-slate-200/70 p-6 dark:border-slate-800/70">
        <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
          <div>
            <p className="text-sm uppercase tracking-[0.3em] text-slate-400 dark:text-slate-500">
              Storytelling System
            </p>
            <h3 className="mt-2 text-xl font-semibold text-slate-900 dark:text-white">
              Guided Report Builder
            </h3>
            <p className="mt-2 max-w-2xl text-sm text-slate-500 dark:text-slate-400">
              Assemble data-rich narratives with drag-and-drop components, executive crib notes, and
              contextual annotations.
            </p>
          </div>
          <button
            type="button"
            className="inline-flex items-center gap-2 rounded-xl border border-slate-200/70 bg-white/70 px-4 py-2 text-sm font-semibold text-slate-600 transition hover:border-brand hover:text-brand dark:border-slate-700/70 dark:bg-slate-900/70 dark:text-slate-300"
          >
            <FileText className="h-4 w-4" /> Launch Builder
          </button>
        </div>
      </section>
    </div>
  );
};

export default Reports;

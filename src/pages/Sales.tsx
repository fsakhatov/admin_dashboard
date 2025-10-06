import { CalendarDays, Download, Filter, Target, Trophy } from "lucide-react";
import ConversionBarChart from "../components/ConversionBarChart";
import PageHeader from "../components/PageHeader";
import RevenueTimelineChart from "../components/RevenueTimelineChart";

const strategicDeals = [
  {
    company: "Horizon Systems",
    stage: "Contract Review",
    value: "$240,500",
    owner: "Avery Stone",
    eta: "Close ETA: 12 days",
  },
  {
    company: "Atlas Manufacturing",
    stage: "Executive Alignment",
    value: "$187,900",
    owner: "Yara Chen",
    eta: "Close ETA: 21 days",
  },
  {
    company: "BlueOrbit Labs",
    stage: "Pilot Deployment",
    value: "$146,300",
    owner: "Luis Martinez",
    eta: "Close ETA: 35 days",
  },
];

const playbooks = [
  {
    title: "Expansion Motions",
    description: "Land and expand framework for enterprise whitespace.",
  },
  {
    title: "Velocity Pod Rituals",
    description: "Daily pipeline inspection across SDR → AE → CS handoffs.",
  },
  {
    title: "Executive Storyboard",
    description: "Narrative toolkit used for late-stage alignment meetings.",
  },
];

const Sales = () => {
  return (
    <div className="space-y-8 pb-16">
      <PageHeader
        title="Sales Performance"
        subtitle="Forecast accuracy, strategic deal execution, and revenue velocity insights powering operating reviews."
        actions={
          <>
            <button
              type="button"
              className="inline-flex items-center gap-2 rounded-xl border border-slate-200/70 bg-white/70 px-4 py-2 text-sm font-semibold text-slate-600 transition hover:border-brand hover:text-brand dark:border-slate-700/70 dark:bg-slate-900/70 dark:text-slate-300"
            >
              <Filter className="h-4 w-4" /> Segment Filter
            </button>
            <button
              type="button"
              className="inline-flex items-center gap-2 rounded-xl bg-brand px-4 py-2 text-sm font-semibold text-white shadow-brand/30 transition hover:opacity-90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-brand"
            >
              <Download className="h-4 w-4" /> Export Snapshot
            </button>
          </>
        }
      />

      <section className="grid gap-6 xl:grid-cols-3">
        <div className="xl:col-span-2">
          <RevenueTimelineChart />
        </div>
        <div className="glass-panel flex h-full flex-col gap-5 rounded-3xl border border-slate-200/70 p-6 dark:border-slate-800/70">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm uppercase tracking-[0.3em] text-slate-400 dark:text-slate-500">
                Quarter Pulse
              </p>
              <h3 className="mt-2 text-xl font-semibold text-slate-900 dark:text-white">
                Forecast Confidence
              </h3>
            </div>
            <span className="rounded-full bg-emerald-500/10 px-4 py-1 text-xs font-semibold text-emerald-500 dark:text-emerald-300">
              92.4%
            </span>
          </div>
          <div className="rounded-2xl border border-dashed border-slate-300/70 p-5 text-sm dark:border-slate-700/70">
            <p className="font-semibold text-slate-900 dark:text-white">Commit Coverage · 118%</p>
            <p className="mt-1 text-slate-500 dark:text-slate-400">
              Commit pipeline is 18% above target. Track progress through multi-threaded deal
              reviews.
            </p>
            <div className="mt-4 grid gap-3">
              <div className="flex items-center justify-between text-xs text-slate-500 dark:text-slate-400">
                <span>Enterprise</span>
                <span className="font-semibold text-slate-900 dark:text-white">128%</span>
              </div>
              <div className="flex items-center justify-between text-xs text-slate-500 dark:text-slate-400">
                <span>Mid-Market</span>
                <span className="font-semibold text-slate-900 dark:text-white">114%</span>
              </div>
              <div className="flex items-center justify-between text-xs text-slate-500 dark:text-slate-400">
                <span>Velocity</span>
                <span className="font-semibold text-slate-900 dark:text-white">104%</span>
              </div>
            </div>
          </div>
          <div className="rounded-2xl border border-slate-200/70 bg-white/70 p-5 dark:border-slate-800/70 dark:bg-slate-900/70">
            <p className="flex items-center gap-2 text-sm font-semibold text-slate-900 dark:text-white">
              <CalendarDays className="h-4 w-4 text-brand" /> Weekly Revenue Ritual
            </p>
            <p className="mt-2 text-xs text-slate-500 dark:text-slate-400">
              Every Monday · 8:30 AM PST · Hosted by GTM Ops
            </p>
            <div className="mt-4 flex items-center gap-3 text-xs text-slate-500 dark:text-slate-400">
              <Target className="h-4 w-4 text-brand" />
              Focus: aligning forecasts, risks, and enablement motion for week+.
            </div>
          </div>
        </div>
      </section>

      <section className="grid gap-6 lg:grid-cols-2">
        <ConversionBarChart />
        <div className="glass-panel rounded-3xl border border-slate-200/70 p-6 dark:border-slate-800/70">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm uppercase tracking-[0.3em] text-slate-400 dark:text-slate-500">
                Strategic Motions
              </p>
              <h3 className="mt-2 text-xl font-semibold text-slate-900 dark:text-white">
                Top Deals This Quarter
              </h3>
            </div>
            <span className="rounded-full bg-slate-100/80 px-3 py-1 text-xs font-semibold text-slate-600 dark:bg-slate-800/70 dark:text-slate-300">
              Updated Weekly
            </span>
          </div>
          <div className="mt-5 space-y-4">
            {strategicDeals.map((deal) => (
              <div
                key={deal.company}
                className="rounded-2xl border border-slate-200/70 bg-white/70 p-4 dark:border-slate-800/70 dark:bg-slate-900/60"
              >
                <div className="flex items-center justify-between text-sm">
                  <p className="font-semibold text-slate-900 dark:text-white">{deal.company}</p>
                  <p className="text-brand">{deal.value}</p>
                </div>
                <p className="mt-1 text-xs text-slate-500 dark:text-slate-400">{deal.stage}</p>
                <div className="mt-3 flex items-center justify-between text-xs text-slate-500 dark:text-slate-400">
                  <span>Owner · {deal.owner}</span>
                  <span>{deal.eta}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="grid gap-6 lg:grid-cols-5">
        <div className="lg:col-span-3">
          <div className="glass-panel rounded-3xl border border-slate-200/70 p-6 dark:border-slate-800/70">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm uppercase tracking-[0.3em] text-slate-400 dark:text-slate-500">
                  Sales Enablement
                </p>
                <h3 className="mt-2 text-xl font-semibold text-slate-900 dark:text-white">
                  Playbook Library
                </h3>
              </div>
              <span className="rounded-full bg-brand/10 px-4 py-1 text-xs font-semibold text-brand">
                Curated by RevOps
              </span>
            </div>
            <div className="mt-5 space-y-4">
              {playbooks.map((playbook) => (
                <div
                  key={playbook.title}
                  className="rounded-2xl border border-slate-200/70 bg-white/70 p-4 text-sm shadow-sm transition hover:-translate-y-1 hover:border-brand/70 hover:shadow-lg dark:border-slate-800/70 dark:bg-slate-900/60"
                >
                  <p className="font-semibold text-slate-900 dark:text-white">{playbook.title}</p>
                  <p className="mt-2 text-slate-500 dark:text-slate-400">{playbook.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="lg:col-span-2">
          <div className="glass-panel h-full rounded-3xl border border-slate-200/70 p-6 dark:border-slate-800/70">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm uppercase tracking-[0.3em] text-slate-400 dark:text-slate-500">
                  Leaderboard
                </p>
                <h3 className="mt-2 text-xl font-semibold text-slate-900 dark:text-white">
                  Top Performers
                </h3>
              </div>
              <Trophy className="h-8 w-8 text-amber-400" />
            </div>
            <div className="mt-5 space-y-4 text-sm">
              <div className="rounded-2xl border border-transparent bg-gradient-to-r from-brand to-indigo-400 p-4 text-white shadow-lg shadow-brand/30">
                <p className="text-xs uppercase tracking-[0.2em] text-white/70">#1</p>
                <p className="mt-1 text-lg font-semibold">Avery Stone</p>
                <p className="text-sm text-white/80">Quota Attainment · 178%</p>
              </div>
              <div className="rounded-2xl border border-slate-200/70 bg-white/70 p-4 text-slate-700 shadow-sm dark:border-slate-800/70 dark:bg-slate-900/60 dark:text-slate-300">
                <p className="text-xs uppercase tracking-[0.2em] text-slate-400 dark:text-slate-500">#2</p>
                <p className="mt-1 text-lg font-semibold text-slate-900 dark:text-white">Luis Martinez</p>
                <p className="text-sm">Quota Attainment · 164%</p>
              </div>
              <div className="rounded-2xl border border-slate-200/70 bg-white/70 p-4 text-slate-700 shadow-sm dark:border-slate-800/70 dark:bg-slate-900/60 dark:text-slate-300">
                <p className="text-xs uppercase tracking-[0.2em] text-slate-400 dark:text-slate-500">#3</p>
                <p className="mt-1 text-lg font-semibold text-slate-900 dark:text-white">Yara Chen</p>
                <p className="text-sm">Quota Attainment · 152%</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Sales;

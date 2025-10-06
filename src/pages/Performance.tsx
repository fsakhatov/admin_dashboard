import { Activity, BarChart4, Brain, Workflow } from "lucide-react";
import ChannelPerformanceList from "../components/ChannelPerformanceList";
import PageHeader from "../components/PageHeader";
import TeamHealth from "../components/TeamHealth";

const operatingCadence = [
  {
    title: "Weekly Metrics Review",
    owner: "Analytics Guild",
    focus: "Forecasting accuracy, anomalies, and mitigation plans.",
  },
  {
    title: "Delivery Sync",
    owner: "Program Management",
    focus: "Feature readiness, launch criteria, and capacity scenarios.",
  },
  {
    title: "Experience Stand-Up",
    owner: "Customer Office",
    focus: "Voice of customer signals and journey instrumentation.",
  },
];

const Performance = () => {
  return (
    <div className="space-y-8 pb-16">
      <PageHeader
        title="Operating Performance"
        subtitle="Integrate product, go-to-market, and delivery signals to run the business with precision and confidence."
        actions={
          <button
            type="button"
            className="inline-flex items-center gap-2 rounded-xl bg-brand px-4 py-2 text-sm font-semibold text-white shadow-brand/30 transition hover:opacity-90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-brand"
          >
            <Workflow className="h-4 w-4" /> Launch War Room
          </button>
        }
      />

      <section className="grid gap-6 lg:grid-cols-2">
        <TeamHealth />
        <ChannelPerformanceList />
      </section>

      <section className="grid gap-6 lg:grid-cols-5">
        <div className="lg:col-span-3">
          <div className="glass-panel rounded-3xl border border-slate-200/70 p-6 dark:border-slate-800/70">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm uppercase tracking-[0.3em] text-slate-400 dark:text-slate-500">
                  Operating Rhythms
                </p>
                <h3 className="mt-2 text-xl font-semibold text-slate-900 dark:text-white">
                  Weekly Leadership Cadence
                </h3>
              </div>
              <Activity className="h-6 w-6 text-brand" />
            </div>
            <div className="mt-5 space-y-4 text-sm">
              {operatingCadence.map((ritual) => (
                <div
                  key={ritual.title}
                  className="rounded-2xl border border-slate-200/70 bg-white/70 p-4 dark:border-slate-800/70 dark:bg-slate-900/60"
                >
                  <p className="text-xs uppercase tracking-[0.2em] text-brand">{ritual.owner}</p>
                  <p className="mt-1 font-semibold text-slate-900 dark:text-white">{ritual.title}</p>
                  <p className="mt-2 text-slate-500 dark:text-slate-400">{ritual.focus}</p>
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
                  Strategic Bet
                </p>
                <h3 className="mt-2 text-xl font-semibold text-slate-900 dark:text-white">
                  Systems Health Index
                </h3>
              </div>
              <Brain className="h-7 w-7 text-emerald-400" />
            </div>
            <div className="mt-6 space-y-4 text-sm">
              <div className="rounded-2xl border border-transparent bg-gradient-to-r from-emerald-400 to-teal-500 p-4 text-white shadow-lg shadow-emerald-500/40">
                <p className="text-xs uppercase tracking-[0.2em] text-white/70">AI Observability</p>
                <p className="mt-2 text-lg font-semibold">Real-time anomaly detection across GTM workflows.</p>
              </div>
              <div className="rounded-2xl border border-slate-200/70 bg-white/70 p-4 text-slate-600 dark:border-slate-800/70 dark:bg-slate-900/60 dark:text-slate-300">
                <p className="font-semibold text-slate-900 dark:text-white">Health Score</p>
                <p className="mt-2 text-emerald-500 dark:text-emerald-300">
                  87.5% · up 3.1 pts week-over-week.
                </p>
                <p className="mt-1">Focus on automation coverage and signal-to-noise ratio.</p>
              </div>
              <div className="rounded-2xl border border-slate-200/70 bg-white/70 p-4 text-slate-600 dark:border-slate-800/70 dark:bg-slate-900/60 dark:text-slate-300">
                <div className="flex items-center justify-between">
                  <p className="font-semibold text-slate-900 dark:text-white">Experiment Velocity</p>
                  <BarChart4 className="h-5 w-5 text-brand" />
                </div>
                <p className="mt-1">21 experiments live · 7 validated wins driving 4.2% lift.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Performance;

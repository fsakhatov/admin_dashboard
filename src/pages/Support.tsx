import { HelpCircle, LifeBuoy, PhoneCall, Rocket } from "lucide-react";
import PageHeader from "../components/PageHeader";

const escalations = [
  {
    title: "Critical Deployment",
    description: "Incident #4821 · Services latency above SLO for 12 minutes.",
    assignee: "SRE · Mitra Dev",
    eta: "Resolution ETA 45 mins",
  },
  {
    title: "Data Sync",
    description: "Analytics warehouse sync lagging by 28 minutes.",
    assignee: "Data Platform · Umair Khan",
    eta: "Catch-up ETA 60 mins",
  },
];

const Support = () => {
  return (
    <div className="space-y-8 pb-16">
      <PageHeader
        title="Customer Support"
        subtitle="Operational view of customer escalations, service health, and enablement programs powering effortless experiences."
        actions={
          <>
            <button
              type="button"
              className="inline-flex items-center gap-2 rounded-xl border border-slate-200/70 bg-white/70 px-4 py-2 text-sm font-semibold text-slate-600 transition hover:border-brand hover:text-brand dark:border-slate-700/70 dark:bg-slate-900/70 dark:text-slate-300"
            >
              <HelpCircle className="h-4 w-4" /> Knowledge Base
            </button>
            <button
              type="button"
              className="inline-flex items-center gap-2 rounded-xl bg-brand px-4 py-2 text-sm font-semibold text-white shadow-brand/30 transition hover:opacity-90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-brand"
            >
              <PhoneCall className="h-4 w-4" /> Hotline
            </button>
          </>
        }
      />

      <section className="grid gap-6 lg:grid-cols-3">
        <div className="glass-panel rounded-3xl border border-slate-200/70 p-6 dark:border-slate-800/70">
          <p className="text-sm uppercase tracking-[0.3em] text-slate-400 dark:text-slate-500">
            Response Health
          </p>
          <h3 className="mt-3 text-3xl font-semibold text-slate-900 dark:text-white">12m</h3>
          <p className="text-sm text-slate-500 dark:text-slate-400">
            Average first response time across priority tickets over the last 24 hours.
          </p>
          <span className="mt-4 inline-flex w-fit items-center gap-2 rounded-full bg-emerald-500/10 px-3 py-1 text-xs font-semibold text-emerald-500 dark:text-emerald-300">
            Trending up by 6%
          </span>
        </div>
        <div className="glass-panel rounded-3xl border border-slate-200/70 p-6 dark:border-slate-800/70">
          <p className="text-sm uppercase tracking-[0.3em] text-slate-400 dark:text-slate-500">
            Customer Effort
          </p>
          <h3 className="mt-3 text-3xl font-semibold text-slate-900 dark:text-white">2.7</h3>
          <p className="text-sm text-slate-500 dark:text-slate-400">
            CES score across lifecycle moments · goal is to stay below 3.0 globally.
          </p>
          <span className="mt-4 inline-flex w-fit items-center gap-2 rounded-full bg-amber-400/10 px-3 py-1 text-xs font-semibold text-amber-400">
            Monitoring
          </span>
        </div>
        <div className="glass-panel rounded-3xl border border-slate-200/70 p-6 dark:border-slate-800/70">
          <p className="text-sm uppercase tracking-[0.3em] text-slate-400 dark:text-slate-500">
            Enablement
          </p>
          <h3 className="mt-3 text-3xl font-semibold text-slate-900 dark:text-white">94%</h3>
          <p className="text-sm text-slate-500 dark:text-slate-400">
            Agents certified on Q3 launch materials and scenario playbooks.
          </p>
          <span className="mt-4 inline-flex w-fit items-center gap-2 rounded-full bg-brand/10 px-3 py-1 text-xs font-semibold text-brand">
            Ready for Launch
          </span>
        </div>
      </section>

      <section className="grid gap-6 lg:grid-cols-5">
        <div className="lg:col-span-3">
          <div className="glass-panel rounded-3xl border border-slate-200/70 p-6 dark:border-slate-800/70">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm uppercase tracking-[0.3em] text-slate-400 dark:text-slate-500">
                  Escalations
                </p>
                <h3 className="mt-2 text-xl font-semibold text-slate-900 dark:text-white">
                  High Severity Incidents
                </h3>
              </div>
              <LifeBuoy className="h-7 w-7 text-brand" />
            </div>
            <div className="mt-5 space-y-4">
              {escalations.map((ticket) => (
                <div
                  key={ticket.title}
                  className="rounded-2xl border border-slate-200/70 bg-white/70 p-4 text-sm dark:border-slate-800/70 dark:bg-slate-900/60"
                >
                  <p className="font-semibold text-slate-900 dark:text-white">{ticket.title}</p>
                  <p className="mt-1 text-slate-500 dark:text-slate-400">{ticket.description}</p>
                  <div className="mt-3 flex items-center justify-between text-xs text-slate-500 dark:text-slate-400">
                    <span>{ticket.assignee}</span>
                    <span>{ticket.eta}</span>
                  </div>
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
                  Experience Labs
                </p>
                <h3 className="mt-2 text-xl font-semibold text-slate-900 dark:text-white">
                  Launch Concierge
                </h3>
              </div>
              <Rocket className="h-6 w-6 text-brand" />
            </div>
            <p className="mt-4 text-sm text-slate-500 dark:text-slate-400">
              An embedded Tiger Team guiding major customer launches through readiness checklists,
              dry-runs, and executive status updates.
            </p>
            <div className="mt-5 space-y-3 text-xs">
              <div className="rounded-2xl border border-slate-200/70 bg-white/70 p-4 dark:border-slate-800/70 dark:bg-slate-900/60">
                <p className="font-semibold text-slate-900 dark:text-white">Launch Scorecard</p>
                <p className="mt-1 text-slate-500 dark:text-slate-400">98% complete for Q3 cohort.</p>
              </div>
              <div className="rounded-2xl border border-slate-200/70 bg-white/70 p-4 dark:border-slate-800/70 dark:bg-slate-900/60">
                <p className="font-semibold text-slate-900 dark:text-white">Executive Brief</p>
                <p className="mt-1 text-slate-500 dark:text-slate-400">
                  Weekly digest shipped every Friday with next-step commitments.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Support;

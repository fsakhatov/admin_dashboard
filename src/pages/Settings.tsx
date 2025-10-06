import PageHeader from "../components/PageHeader";

const Settings = () => {
  return (
    <div className="space-y-8 pb-16">
      <PageHeader
        title="Workspace Settings"
        subtitle="Manage branding, notifications, and access policies for the NovaPulse operating platform."
      />

      <section className="grid gap-6 lg:grid-cols-2">
        <form className="glass-panel rounded-3xl border border-slate-200/70 p-6 dark:border-slate-800/70">
          <h3 className="text-xl font-semibold text-slate-900 dark:text-white">Branding</h3>
          <p className="mt-2 text-sm text-slate-500 dark:text-slate-400">
            Customize the workspace identity that appears across dashboards and shared reports.
          </p>
          <div className="mt-6 space-y-4">
            <label className="flex flex-col gap-2 text-sm">
              <span className="font-medium text-slate-700 dark:text-slate-200">Workspace Name</span>
              <input
                type="text"
                defaultValue="NovaPulse Ops"
                className="rounded-xl border border-slate-200/70 bg-white/80 px-4 py-2.5 text-sm text-slate-700 shadow-inner focus:border-brand focus:outline-none dark:border-slate-700/70 dark:bg-slate-900/70 dark:text-slate-100"
              />
            </label>
            <label className="flex flex-col gap-2 text-sm">
              <span className="font-medium text-slate-700 dark:text-slate-200">Primary Color</span>
              <input
                type="color"
                defaultValue="#6366f1"
                className="h-12 w-24 rounded-xl border border-slate-200/70 bg-white/80 p-1 dark:border-slate-700/70 dark:bg-slate-900/70"
              />
            </label>
            <button
              type="submit"
              className="inline-flex items-center justify-center rounded-xl bg-brand px-5 py-2 text-sm font-semibold text-white shadow-brand/30 transition hover:opacity-90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-brand"
            >
              Save Branding
            </button>
          </div>
        </form>

        <form className="glass-panel rounded-3xl border border-slate-200/70 p-6 dark:border-slate-800/70">
          <h3 className="text-xl font-semibold text-slate-900 dark:text-white">Notification Rules</h3>
          <p className="mt-2 text-sm text-slate-500 dark:text-slate-400">
            Select signals that broadcast to leadership and operations channels.
          </p>
          <div className="mt-6 space-y-4 text-sm">
            <label className="flex items-start gap-3">
              <input
                type="checkbox"
                defaultChecked
                className="mt-1 h-4 w-4 rounded border-slate-300 text-brand focus:ring-brand dark:border-slate-600"
              />
              <span>
                <span className="font-semibold text-slate-900 dark:text-white">Revenue Variance</span>
                <p className="text-slate-500 dark:text-slate-400">
                  Notify when forecast deviates by more than 5% versus plan.
                </p>
              </span>
            </label>
            <label className="flex items-start gap-3">
              <input
                type="checkbox"
                defaultChecked
                className="mt-1 h-4 w-4 rounded border-slate-300 text-brand focus:ring-brand dark:border-slate-600"
              />
              <span>
                <span className="font-semibold text-slate-900 dark:text-white">Customer Escalations</span>
                <p className="text-slate-500 dark:text-slate-400">Ping support leaders for P0 and P1 tickets.</p>
              </span>
            </label>
            <label className="flex items-start gap-3">
              <input
                type="checkbox"
                className="mt-1 h-4 w-4 rounded border-slate-300 text-brand focus:ring-brand dark:border-slate-600"
              />
              <span>
                <span className="font-semibold text-slate-900 dark:text-white">Experiment Outcomes</span>
                <p className="text-slate-500 dark:text-slate-400">
                  Weekly digest of validated wins and backlog prioritization.
                </p>
              </span>
            </label>
            <button
              type="submit"
              className="inline-flex items-center justify-center rounded-xl bg-brand px-5 py-2 text-sm font-semibold text-white shadow-brand/30 transition hover:opacity-90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-brand"
            >
              Save Notifications
            </button>
          </div>
        </form>
      </section>

      <section className="glass-panel rounded-3xl border border-slate-200/70 p-6 dark:border-slate-800/70">
        <h3 className="text-xl font-semibold text-slate-900 dark:text-white">Access Policies</h3>
        <p className="mt-2 max-w-2xl text-sm text-slate-500 dark:text-slate-400">
          Govern how teams access sensitive dashboards, datasets, and planning artifacts across the
          workspace.
        </p>
        <div className="mt-6 grid gap-6 lg:grid-cols-3">
          <div className="rounded-2xl border border-slate-200/70 bg-white/70 p-4 text-sm dark:border-slate-800/70 dark:bg-slate-900/60">
            <p className="font-semibold text-slate-900 dark:text-white">Leadership</p>
            <p className="mt-1 text-slate-500 dark:text-slate-400">Full access with edit rights to board-level reports.</p>
          </div>
          <div className="rounded-2xl border border-slate-200/70 bg-white/70 p-4 text-sm dark:border-slate-800/70 dark:bg-slate-900/60">
            <p className="font-semibold text-slate-900 dark:text-white">Operations Pods</p>
            <p className="mt-1 text-slate-500 dark:text-slate-400">Can edit dashboards, manage automations, and publish rituals.</p>
          </div>
          <div className="rounded-2xl border border-slate-200/70 bg-white/70 p-4 text-sm dark:border-slate-800/70 dark:bg-slate-900/60">
            <p className="font-semibold text-slate-900 dark:text-white">Executors</p>
            <p className="mt-1 text-slate-500 dark:text-slate-400">Read-only access with ability to subscribe to notifications.</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Settings;

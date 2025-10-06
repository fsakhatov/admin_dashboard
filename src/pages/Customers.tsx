import { ArrowRight, MessageCircle, Star, UsersRound } from "lucide-react";
import PageHeader from "../components/PageHeader";

const personaInsights = [
  {
    title: "Enterprise",
    size: "1,482 accounts",
    health: "132% net revenue retention",
    notes: "Dedicated value engineers embedded in executive steering committees.",
  },
  {
    title: "Scale-Up",
    size: "2,940 accounts",
    health: "118% net revenue retention",
    notes: "Focus on product activation rituals across onboarding + first value.",
  },
  {
    title: "Velocity",
    size: "399 accounts",
    health: "109% net revenue retention",
    notes: "Experimenting with lifecycle automation and self-service playbooks.",
  },
];

const advocacyMoments = [
  {
    customer: "Solaris Grid",
    story: "15% reduction in outage response time using NovaPulse automations.",
  },
  {
    customer: "Northwind Aero",
    story: "Unified analytics lowered executive prep time by 40% per week.",
  },
  {
    customer: "Vertex Health",
    story: "AI-driven insights recovered $7.4M in expansion revenue last quarter.",
  },
];

const Customers = () => {
  return (
    <div className="space-y-8 pb-16">
      <PageHeader
        title="Customer Intelligence"
        subtitle="Engagement health, advocacy signals, and lifecycle milestones to orchestrate world-class customer experience."
        actions={
          <button
            type="button"
            className="inline-flex items-center gap-2 rounded-xl bg-brand px-4 py-2 text-sm font-semibold text-white shadow-brand/30 transition hover:opacity-90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-brand"
          >
            <MessageCircle className="h-4 w-4" /> Launch Listening Tour
          </button>
        }
      />

      <section className="grid gap-6 lg:grid-cols-3">
        {personaInsights.map((persona) => (
          <div
            key={persona.title}
            className="glass-panel rounded-3xl border border-slate-200/70 p-6 transition hover:-translate-y-1 hover:shadow-xl hover:shadow-brand/10 dark:border-slate-800/70"
          >
            <div className="flex items-center justify-between">
              <div>
                <p className="text-xs uppercase tracking-[0.3em] text-slate-400 dark:text-slate-500">
                  Segment
                </p>
                <h3 className="mt-2 text-xl font-semibold text-slate-900 dark:text-white">
                  {persona.title}
                </h3>
              </div>
              <UsersRound className="h-9 w-9 text-brand" />
            </div>
            <p className="mt-4 text-sm font-semibold text-slate-900 dark:text-white">{persona.size}</p>
            <p className="mt-1 text-sm text-emerald-500 dark:text-emerald-300">{persona.health}</p>
            <p className="mt-3 text-sm text-slate-500 dark:text-slate-400">{persona.notes}</p>
          </div>
        ))}
      </section>

      <section className="grid gap-6 lg:grid-cols-2">
        <div className="glass-panel rounded-3xl border border-slate-200/70 p-6 dark:border-slate-800/70">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm uppercase tracking-[0.3em] text-slate-400 dark:text-slate-500">
                Lifecycle
              </p>
              <h3 className="mt-2 text-xl font-semibold text-slate-900 dark:text-white">
                Adoption Milestones
              </h3>
            </div>
            <span className="rounded-full bg-brand/10 px-4 py-1 text-xs font-semibold text-brand">
              86% Converted
            </span>
          </div>
          <div className="mt-5 space-y-4 text-sm">
            <div className="rounded-2xl border border-slate-200/70 bg-white/70 p-4 dark:border-slate-800/70 dark:bg-slate-900/60">
              <p className="font-semibold text-slate-900 dark:text-white">Activation</p>
              <p className="mt-1 text-slate-500 dark:text-slate-400">
                72 hours from onboarding to first automation — target is 48 hours.
              </p>
            </div>
            <div className="rounded-2xl border border-slate-200/70 bg-white/70 p-4 dark:border-slate-800/70 dark:bg-slate-900/60">
              <p className="font-semibold text-slate-900 dark:text-white">Expansion</p>
              <p className="mt-1 text-slate-500 dark:text-slate-400">
                Cross-functional playbooks now active in 51% of strategic accounts.
              </p>
            </div>
            <div className="rounded-2xl border border-slate-200/70 bg-white/70 p-4 dark:border-slate-800/70 dark:bg-slate-900/60">
              <p className="font-semibold text-slate-900 dark:text-white">Advocacy</p>
              <p className="mt-1 text-slate-500 dark:text-slate-400">
                32 executive references secured for upcoming analyst briefing.
              </p>
            </div>
          </div>
        </div>
        <div className="glass-panel rounded-3xl border border-slate-200/70 p-6 dark:border-slate-800/70">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm uppercase tracking-[0.3em] text-slate-400 dark:text-slate-500">
                Voice of Customer
              </p>
              <h3 className="mt-2 text-xl font-semibold text-slate-900 dark:text-white">
                Advocacy Moments
              </h3>
            </div>
            <Star className="h-7 w-7 text-amber-400" />
          </div>
          <div className="mt-5 space-y-4">
            {advocacyMoments.map((moment) => (
              <div
                key={moment.customer}
                className="rounded-2xl border border-slate-200/70 bg-white/70 p-4 text-sm dark:border-slate-800/70 dark:bg-slate-900/60"
              >
                <p className="text-xs uppercase tracking-[0.2em] text-brand">{moment.customer}</p>
                <p className="mt-2 text-slate-700 dark:text-slate-200">{moment.story}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="glass-panel rounded-3xl border border-slate-200/70 p-6 dark:border-slate-800/70">
        <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
          <div>
            <p className="text-sm uppercase tracking-[0.3em] text-slate-400 dark:text-slate-500">
              Experience Journey
            </p>
            <h3 className="mt-2 text-xl font-semibold text-slate-900 dark:text-white">
              Quarterly Listening Tour
            </h3>
            <p className="mt-2 max-w-2xl text-sm text-slate-500 dark:text-slate-400">
              Leadership pairs with customer champions for executive business reviews to uncover
              opportunities and pre-empt risks.
            </p>
          </div>
          <button
            type="button"
            className="inline-flex items-center gap-2 rounded-xl border border-slate-200/70 bg-white/70 px-4 py-2 text-sm font-semibold text-slate-600 transition hover:border-brand hover:text-brand dark:border-slate-700/70 dark:bg-slate-900/70 dark:text-slate-300"
          >
            Download Agenda <ArrowRight className="h-4 w-4" />
          </button>
        </div>
      </section>
    </div>
  );
};

export default Customers;

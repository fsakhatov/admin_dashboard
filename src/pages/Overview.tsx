import { LifeBuoy, Target, TrendingUp, Users } from "lucide-react";
import StatCard from "../components/StatCard";
import ActivityFeed from "../components/ActivityFeed";
import ChannelPerformanceList from "../components/ChannelPerformanceList";
import ConversionBarChart from "../components/ConversionBarChart";
import ProductPerformanceTable from "../components/ProductPerformanceTable";
import RevenueTimelineChart from "../components/RevenueTimelineChart";
import TeamHealth from "../components/TeamHealth";
import { kpiCards } from "../data/analytics";

const Overview = () => {
  const mappedCards = [
    { ...kpiCards[0], icon: TrendingUp },
    { ...kpiCards[1], icon: Users },
    { ...kpiCards[2], icon: Target },
    { ...kpiCards[3], icon: LifeBuoy },
  ];

  return (
    <div className="space-y-10 pb-16">
      <section className="flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
        <div>
          <p className="text-sm uppercase tracking-[0.3em] text-slate-400 dark:text-slate-500">
            Executive Command
          </p>
          <h1 className="mt-3 text-3xl font-semibold text-slate-900 dark:text-white lg:text-4xl">
            Growth Operations Dashboard
          </h1>
          <p className="mt-2 max-w-2xl text-sm text-slate-500 dark:text-slate-400">
            A unified cockpit for revenue, retention, and delivery rituals. Monitor the full funnel in
            one collaborative workspace.
          </p>
        </div>
        <div className="inline-flex items-center gap-2 rounded-full border border-slate-200/70 bg-white/70 px-4 py-2 text-xs font-semibold text-slate-600 dark:border-slate-700/70 dark:bg-slate-900/70 dark:text-slate-300">
          Updated · <span className="text-brand">Less than 5 minutes ago</span>
        </div>
      </section>

      <section className="grid gap-4 lg:grid-cols-2 xl:grid-cols-4">
        {mappedCards.map((card) => (
          <StatCard
            key={card.id}
            title={card.title}
            primary={card.primary}
            caption={card.caption}
            change={card.change}
            positive={card.positive}
            icon={card.icon}
          />
        ))}
      </section>

      <section className="grid gap-6 xl:grid-cols-3">
        <div className="xl:col-span-2">
          <RevenueTimelineChart />
        </div>
        <ConversionBarChart />
      </section>

      <section className="grid gap-6 lg:grid-cols-2">
        <ChannelPerformanceList />
        <TeamHealth />
      </section>

      <section className="grid gap-6 lg:grid-cols-5">
        <div className="lg:col-span-3">
          <ProductPerformanceTable />
        </div>
        <div className="lg:col-span-2">
          <ActivityFeed />
        </div>
      </section>
    </div>
  );
};

export default Overview;

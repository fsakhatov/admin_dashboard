export type TimeframeKey = "daily" | "weekly" | "monthly" | "yearly";

export type TimelinePoint = {
  label: string;
  revenue: number;
  profit: number;
};

export const revenueTimeline: Record<TimeframeKey, TimelinePoint[]> = {
  daily: [
    { label: "Mon", revenue: 18200, profit: 5200 },
    { label: "Tue", revenue: 20100, profit: 6400 },
    { label: "Wed", revenue: 21900, profit: 7100 },
    { label: "Thu", revenue: 23200, profit: 7600 },
    { label: "Fri", revenue: 24500, profit: 8200 },
    { label: "Sat", revenue: 17100, profit: 4800 },
    { label: "Sun", revenue: 15600, profit: 4100 },
  ],
  weekly: [
    { label: "W01", revenue: 121000, profit: 34200 },
    { label: "W02", revenue: 137500, profit: 38100 },
    { label: "W03", revenue: 149200, profit: 41200 },
    { label: "W04", revenue: 158400, profit: 44900 },
  ],
  monthly: [
    { label: "Jan", revenue: 432000, profit: 126000 },
    { label: "Feb", revenue: 458000, profit: 139000 },
    { label: "Mar", revenue: 486000, profit: 148000 },
    { label: "Apr", revenue: 512000, profit: 156000 },
    { label: "May", revenue: 547000, profit: 168000 },
    { label: "Jun", revenue: 583000, profit: 176000 },
  ],
  yearly: [
    { label: "2021", revenue: 1620000, profit: 468000 },
    { label: "2022", revenue: 1890000, profit: 532000 },
    { label: "2023", revenue: 2130000, profit: 617000 },
    { label: "2024", revenue: 2390000, profit: 702000 },
  ],
};

export type ConversionPoint = {
  label: string;
  leads: number;
  conversions: number;
};

export const conversionTimeline: Record<TimeframeKey, ConversionPoint[]> = {
  daily: [
    { label: "Mon", leads: 720, conversions: 214 },
    { label: "Tue", leads: 680, conversions: 198 },
    { label: "Wed", leads: 760, conversions: 245 },
    { label: "Thu", leads: 801, conversions: 266 },
    { label: "Fri", leads: 843, conversions: 288 },
    { label: "Sat", leads: 564, conversions: 157 },
    { label: "Sun", leads: 498, conversions: 131 },
  ],
  weekly: [
    { label: "W01", leads: 4230, conversions: 1287 },
    { label: "W02", leads: 4410, conversions: 1344 },
    { label: "W03", leads: 4680, conversions: 1417 },
    { label: "W04", leads: 4920, conversions: 1492 },
  ],
  monthly: [
    { label: "Jan", leads: 15120, conversions: 4625 },
    { label: "Feb", leads: 15840, conversions: 4941 },
    { label: "Mar", leads: 16980, conversions: 5216 },
    { label: "Apr", leads: 17880, conversions: 5480 },
    { label: "May", leads: 18930, conversions: 5782 },
    { label: "Jun", leads: 19980, conversions: 6024 },
  ],
  yearly: [
    { label: "2021", leads: 152400, conversions: 45321 },
    { label: "2022", leads: 168900, conversions: 50871 },
    { label: "2023", leads: 183600, conversions: 56218 },
    { label: "2024", leads: 195300, conversions: 59104 },
  ],
};

export type ChannelMetric = {
  channel: string;
  growth: number;
  share: number;
};

export const channelPerformance: ChannelMetric[] = [
  { channel: "Organic", growth: 19.4, share: 34 },
  { channel: "Paid Ads", growth: 14.2, share: 27 },
  { channel: "Referral", growth: 11.6, share: 18 },
  { channel: "Email", growth: 9.3, share: 12 },
  { channel: "Social", growth: 6.8, share: 9 },
];

export type TeamMetric = {
  squad: string;
  velocity: number;
  health: "excellent" | "good" | "at-risk";
  delta: number;
};

export const teamDelivery: TeamMetric[] = [
  { squad: "Acquisition", velocity: 92, health: "excellent", delta: 6.4 },
  { squad: "Onboarding", velocity: 88, health: "good", delta: 4.8 },
  { squad: "Success", velocity: 81, health: "good", delta: 3.2 },
  { squad: "Retention", velocity: 76, health: "at-risk", delta: -1.8 },
];

export type ProductMetric = {
  name: string;
  category: string;
  revenue: string;
  trend: number;
};

export const topProducts: ProductMetric[] = [
  { name: "Nova CRM", category: "Enterprise", revenue: "$82,400", trend: 12.4 },
  { name: "Pulse Analytics", category: "Insights", revenue: "$67,910", trend: 9.1 },
  { name: "Flow Automation", category: "Workflow", revenue: "$54,220", trend: 7.6 },
  { name: "Core Billing", category: "Finance", revenue: "$42,870", trend: 5.8 },
];

export type Activity = {
  id: string;
  timestamp: string;
  description: string;
  actor: string;
};

export const activityFeed: Activity[] = [
  {
    id: "1",
    timestamp: "15 minutes ago",
    description: "Maya Reynolds published the Q4 projections dashboard.",
    actor: "Product Intelligence",
  },
  {
    id: "2",
    timestamp: "42 minutes ago",
    description: "Sales Velocity alert triggered: +12.6% week-over-week change.",
    actor: "Revenue Ops",
  },
  {
    id: "3",
    timestamp: "2 hours ago",
    description: "New enterprise account onboarded: Horizon Systems.",
    actor: "Customer Success",
  },
  {
    id: "4",
    timestamp: "5 hours ago",
    description: "Marketing pushed June lifecycle campaign to production.",
    actor: "Lifecycle Marketing",
  },
];

export const kpiCards = [
  {
    id: "revenue",
    title: "Revenue Run Rate",
    primary: "$248.2K",
    change: "+12.4%",
    caption: "vs last month",
    positive: true,
  },
  {
    id: "customers",
    title: "Active Accounts",
    primary: "4,821",
    change: "+186",
    caption: "net new customers",
    positive: true,
  },
  {
    id: "retention",
    title: "Net Revenue Retention",
    primary: "132%",
    change: "+4.3 pts",
    caption: "trailing 90 day",
    positive: true,
  },
  {
    id: "support",
    title: "Support Backlog",
    primary: "18 tickets",
    change: "-5",
    caption: "awaiting triage",
    positive: true,
  },
] as const;

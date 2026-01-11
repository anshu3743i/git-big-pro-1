"use client";

import {
  Globe,
  Search,
  Link2,
  FileText,
  ChevronDown,
  Monitor,
  Calendar,
  DollarSign,
  Info,
  TrendingUp,
  Users
} from "lucide-react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
  RadarChart,
  Radar,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis,
  BarChart,
  Bar
} from "recharts";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Progress } from "@/components/ui/progress";
import { ChartContainer, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart";

// Organic Traffic Trend data
const organicTrafficData = [
  { month: "Jan", organic: 45000, paid: 15000, direct: 20000 },
  { month: "Feb", organic: 52000, paid: 18000, direct: 22000 },
  { month: "Mar", organic: 58000, paid: 20000, direct: 25000 },
  { month: "Apr", organic: 65000, paid: 22000, direct: 28000 },
  { month: "May", organic: 72000, paid: 25000, direct: 30000 },
  { month: "Jun", organic: 78000, paid: 28000, direct: 32000 },
  { month: "Jul", organic: 85000, paid: 30000, direct: 35000 },
  { month: "Aug", organic: 92000, paid: 32000, direct: 38000 },
  { month: "Sep", organic: 100000, paid: 35000, direct: 40000 },
  { month: "Oct", organic: 110000, paid: 38000, direct: 42000 },
  { month: "Nov", organic: 120000, paid: 40000, direct: 45000 },
  { month: "Dec", organic: 130000, paid: 42000, direct: 48000 }
];

const chartConfig = {
  organic: { label: "Organic", color: "#8b5cf6" },
  paid: { label: "Paid", color: "#f97316" },
  direct: { label: "Direct", color: "#3b82f6" }
};

// Market Share Pie Chart data
const marketShareData = [
  { name: "Your Site", value: 29, color: "#f97316" },
  { name: "Competitor 1", value: 23, color: "#eab308" },
  { name: "Competitor 2", value: 12, color: "#3b82f6" },
  { name: "Competitor 4", value: 20, color: "#22c55e" },
  { name: "Competitor 3", value: 17, color: "#8b5cf6" }
];

// Traffic Source Breakdown data
const trafficBreakdownData = [
  { source: "Organic Search", visits: 125000, change: "+68.5%" },
  { source: "Paid Search", visits: 35000, change: "-19.2%" },
  { source: "Direct", visits: 17800, change: "+9.8%" },
  { source: "Social", visits: 4200, change: "+2.3%" },
  { source: "Referral", visits: 500, change: "-0.2%" }
];

// Radar Chart data for Traffic Sources
const radarData = [
  { day: "Mon", value: 80 },
  { day: "Tue", value: 65 },
  { day: "Wed", value: 70 },
  { day: "Thu", value: 85 },
  { day: "Fri", value: 60 },
  { day: "Sat", value: 45 },
  { day: "Sun", value: 55 }
];

// Traffic sources list data
const trafficSourcesList = [
  { name: "Google", visits: 65223, change: "+87%" },
  { name: "Social Media", visits: 7549, change: "+59%" },
  { name: "Email", visits: 3448, change: "-36%" },
  { name: "Referral", visits: 163, change: "+17%" }
];

// Backlinks Growth data
const backlinksGrowthData = [
  { month: "Jan", backlinks: 1200 },
  { month: "Feb", backlinks: 1650 },
  { month: "Mar", backlinks: 1400 },
  { month: "Apr", backlinks: 2100 },
  { month: "May", backlinks: 2400 },
  { month: "Jun", backlinks: 2650 },
  { month: "Jul", backlinks: 2800 },
  { month: "Aug", backlinks: 3250 },
  { month: "Sep", backlinks: 2900 },
  { month: "Oct", backlinks: 2200 },
  { month: "Nov", backlinks: 2400 },
  { month: "Dec", backlinks: 2100 }
];

// Top Performing Pages data (for Backlinks tab)
const topPerformingPages = [
  { domain: "blog.example.org", type: "Do-Follow", links: 28, authority: 98 },
  { domain: "news.site.com", type: "No-Follow", links: 31, authority: 88 },
  { domain: "directory.info", type: "No-Follow", links: 16, authority: 12.75 }
];

// Top Pages data (for Top Pages tab)
const topPagesData = [
  { url: "/product/premium-software", traffic: "#1", keywords: 156, position: 28450 },
  { url: "/solutions/enterprise", traffic: "#9", keywords: 94, position: 19820 },
  { url: "/about/team", traffic: "#2", keywords: 75, position: 15640 },
  { url: "/resources/ultimate-guide", traffic: "#9", keywords: 14, position: 12380 },
  { url: "/product/freelancer-tools", traffic: "#2", keywords: 37, position: 8950 }
];

// Top Keywords data (for Keywords tab)
const topKeywordsData = [
  { term: "advanced analytics tools", rank: "#1", volume: "25.4K", traffic: "20.1K", cpc: "$4.50" },
  { term: "expert team software development", rank: "#3", volume: "27.4K", traffic: "20.1K", cpc: "$5.50" },
  { term: "future market insights 2025", rank: "#2", volume: "20.8K", traffic: "16.5K", cpc: "$2.90" },
  { term: "ultimate guide to optimization", rank: "#9", volume: "11.3K", traffic: "10.2K", cpc: "$6.50" },
  { term: "/product/freelancer-tools", rank: "#7", volume: "15.3K", traffic: "20.2K", cpc: "$4.50" }
];

export default function DomainOverviewPage() {
  return (
    <div className="space-y-6">
      {/* Page Header */}
      <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
        <div>
          <h1 className="text-2xl font-bold tracking-tight">Domain Overview</h1>
          <div className="flex items-center gap-1 text-sm text-violet-600">
            example.com
            <Info className="size-4 text-muted-foreground" />
          </div>
        </div>
        <div className="flex flex-wrap items-center gap-2">
          <Button variant="outline" size="sm" className="gap-2">
            <Globe className="size-4" />
            United States
            <ChevronDown className="size-4" />
          </Button>
          <Button variant="outline" size="sm" className="gap-2">
            <Monitor className="size-4" />
            Desktop
            <ChevronDown className="size-4" />
          </Button>
          <Button variant="outline" size="sm" className="gap-2">
            <Calendar className="size-4" />
            May 6, 2025
            <ChevronDown className="size-4" />
          </Button>
          <Button variant="outline" size="sm" className="gap-2">
            <DollarSign className="size-4" />
            USD
            <ChevronDown className="size-4" />
          </Button>
        </div>
      </div>

      {/* Search Bar */}
      <div className="flex flex-col gap-3 sm:flex-row">
        <div className="relative flex-1">
          <Input
            placeholder="example.com"
            className="pr-10"
          />
          <Search className="absolute right-3 top-1/2 -translate-y-1/2 size-4 text-muted-foreground" />
        </div>
        <div className="flex gap-2">
          <Button variant="default" className="bg-gray-900 hover:bg-gray-800">
            Compare domains
          </Button>
          <Button variant="outline">
            Export report
          </Button>
        </div>
      </div>

      {/* Stat Cards */}
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        {/* Authority Score */}
        <Card>
          <CardHeader className="pb-2">
            <div className="text-sm text-muted-foreground">Authority Score</div>
          </CardHeader>
          <CardContent>
            <div className="flex items-baseline gap-2">
              <span className="text-3xl font-bold text-violet-600">78/100</span>
              <span className="rounded bg-green-100 px-1.5 py-0.5 text-xs font-medium text-green-700 dark:bg-green-900/30 dark:text-green-400">
                +4
              </span>
            </div>
            <Progress value={78} className="mt-3 h-2" indicatorColor="bg-violet-600" />
            <p className="mt-2 text-xs text-muted-foreground">
              Very good authority score compared to competitors
            </p>
          </CardContent>
        </Card>

        {/* Organic Search Traffic */}
        <Card>
          <CardHeader className="pb-2">
            <div className="text-sm text-muted-foreground">Organic Search Traffic</div>
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold text-violet-600">125K</div>
            <p className="mt-1 text-sm font-medium text-green-600">+12.5% from last month</p>
            <p className="mt-1 text-xs text-muted-foreground">
              Based on 5,420 keywords tracked
            </p>
          </CardContent>
        </Card>

        {/* Backlinks */}
        <Card>
          <CardHeader className="pb-2">
            <div className="text-sm text-muted-foreground">Backlinks</div>
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold text-violet-600">3,580</div>
            <p className="mt-1 text-sm font-medium text-green-600">+330 new links this month</p>
            <p className="mt-1 text-xs text-muted-foreground">
              From 870 referring domains
            </p>
          </CardContent>
        </Card>

        {/* Indexed Pages */}
        <Card>
          <CardHeader className="pb-2">
            <div className="text-sm text-muted-foreground">Indexed Pages</div>
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold text-violet-600">1,245</div>
            <div className="mt-3 flex gap-4 text-xs">
              <div>
                <div className="text-muted-foreground">HTTP</div>
                <div className="font-medium text-violet-600">23</div>
              </div>
              <div>
                <div className="text-muted-foreground">HTTPS</div>
                <div className="font-medium text-violet-600">1,222</div>
              </div>
              <div>
                <div className="text-muted-foreground">Mobile</div>
                <div className="font-medium text-violet-600">1,245</div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Charts Row */}
      <div className="grid gap-4 lg:grid-cols-3">
        {/* Organic Traffic Trend */}
        <Card className="lg:col-span-2">
          <CardHeader>
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <Globe className="size-5 text-muted-foreground" />
                <CardTitle>Organic Traffic Trend</CardTitle>
              </div>
              <div className="flex items-center gap-4 text-sm">
                <div className="flex items-center gap-2">
                  <div className="size-3 rounded-full bg-violet-500" />
                  <span className="text-muted-foreground">Organic</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="size-3 rounded-full bg-orange-500" />
                  <span className="text-muted-foreground">Paid</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="size-3 rounded-full bg-blue-500" />
                  <span className="text-muted-foreground">Direct</span>
                </div>
              </div>
            </div>
          </CardHeader>
          <CardContent>
            <ChartContainer config={chartConfig} className="h-[300px] w-full">
              <LineChart data={organicTrafficData} margin={{ top: 20, right: 30, left: 20, bottom: 20 }}>
                <CartesianGrid strokeDasharray="3 3" className="stroke-muted" />
                <XAxis
                  dataKey="month"
                  tickLine={false}
                  axisLine={false}
                  tick={{ fill: "var(--color-muted-foreground)", fontSize: 12 }}
                />
                <YAxis
                  tickLine={false}
                  axisLine={false}
                  tick={{ fill: "var(--color-muted-foreground)", fontSize: 12 }}
                  tickFormatter={(value) => `${value / 1000}k`}
                />
                <ChartTooltip content={<ChartTooltipContent indicator="dot" />} />
                <Line
                  type="monotone"
                  dataKey="organic"
                  stroke="#8b5cf6"
                  strokeWidth={2}
                  dot={{ fill: "#8b5cf6", strokeWidth: 2, r: 3 }}
                  fill="url(#organicGradient)"
                />
                <Line
                  type="monotone"
                  dataKey="paid"
                  stroke="#f97316"
                  strokeWidth={2}
                  dot={{ fill: "#f97316", strokeWidth: 2, r: 3 }}
                />
                <Line
                  type="monotone"
                  dataKey="direct"
                  stroke="#3b82f6"
                  strokeWidth={2}
                  dot={{ fill: "#3b82f6", strokeWidth: 2, r: 3 }}
                />
                <defs>
                  <linearGradient id="organicGradient" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#8b5cf6" stopOpacity={0.3} />
                    <stop offset="95%" stopColor="#8b5cf6" stopOpacity={0} />
                  </linearGradient>
                </defs>
              </LineChart>
            </ChartContainer>
          </CardContent>
        </Card>

        {/* Market Share vs Competitors */}
        <Card>
          <CardHeader>
            <CardTitle>Market Share vs Competitors</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="relative h-[260px] w-full">
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie
                    data={marketShareData}
                    cx="50%"
                    cy="50%"
                    innerRadius={0}
                    outerRadius={95}
                    paddingAngle={2}
                    dataKey="value"
                    label={({ value }) => `${value}%`}
                    labelLine={false}
                  >
                    {marketShareData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={entry.color} />
                    ))}
                  </Pie>
                </PieChart>
              </ResponsiveContainer>
            </div>
            <div className="flex flex-wrap justify-center gap-3 text-xs">
              {marketShareData.map((item) => (
                <div key={item.name} className="flex items-center gap-1.5">
                  <div className="size-2.5 rounded-full" style={{ backgroundColor: item.color }} />
                  <span className="text-muted-foreground">{item.name}</span>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Bottom Tabs Section */}
      <Tabs defaultValue="keywords" className="space-y-4">
        <TabsList className="bg-transparent border-b rounded-none w-full justify-start gap-4 px-0 h-auto pb-0">
          <TabsTrigger
            value="traffic"
            className="rounded-none border-b-2 border-transparent data-[state=active]:border-violet-600 data-[state=active]:bg-transparent data-[state=active]:shadow-none px-0 pb-3"
          >
            Traffic Sources
          </TabsTrigger>
          <TabsTrigger
            value="backlinks"
            className="rounded-none border-b-2 border-transparent data-[state=active]:border-violet-600 data-[state=active]:bg-transparent data-[state=active]:shadow-none px-0 pb-3"
          >
            Backlinks Profile
          </TabsTrigger>
          <TabsTrigger
            value="pages"
            className="rounded-none border-b-2 border-transparent data-[state=active]:border-violet-600 data-[state=active]:bg-transparent data-[state=active]:shadow-none px-0 pb-3"
          >
            Top Pages
          </TabsTrigger>
          <TabsTrigger
            value="keywords"
            className="rounded-none border-b-2 border-transparent data-[state=active]:border-violet-600 data-[state=active]:bg-transparent data-[state=active]:shadow-none px-0 pb-3"
          >
            Keywords
          </TabsTrigger>
        </TabsList>

        <TabsContent value="traffic" className="space-y-4">
          <div className="grid gap-4 lg:grid-cols-2">
            {/* Traffic Source Breakdown */}
            <Card>
              <CardHeader>
                <div className="flex items-center gap-2">
                  <Users className="size-5 text-muted-foreground" />
                  <CardTitle>Traffic Source Breakdown</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                {/* Table Header */}
                <div className="grid grid-cols-3 gap-4 border-b pb-3 text-sm font-medium text-muted-foreground">
                  <div>Source</div>
                  <div className="text-right">Visits</div>
                  <div className="text-right">%</div>
                </div>
                {/* Table Rows */}
                <div className="divide-y">
                  {trafficBreakdownData.map((item) => (
                    <div key={item.source} className="grid grid-cols-3 gap-4 py-3 items-center">
                      <div className="text-sm">{item.source}</div>
                      <div className="text-sm text-right">{item.visits.toLocaleString()}</div>
                      <div className="text-right">
                        <span
                          className={`rounded px-1.5 py-0.5 text-xs font-medium ${
                            item.change.startsWith("+")
                              ? "bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400"
                              : "bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-400"
                          }`}
                        >
                          {item.change}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Traffic Sources Radar */}
            <Card>
              <CardHeader>
                <div className="flex items-center gap-2">
                  <Globe className="size-5 text-muted-foreground" />
                  <CardTitle>Traffic Sources</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <div className="flex gap-6">
                  {/* Radar Chart */}
                  <div className="h-[280px] w-[280px]">
                    <ResponsiveContainer width="100%" height="100%">
                      <RadarChart data={radarData}>
                        <PolarGrid stroke="var(--color-border)" />
                        <PolarAngleAxis
                          dataKey="day"
                          tick={{ fill: "var(--color-muted-foreground)", fontSize: 12 }}
                        />
                        <Radar
                          dataKey="value"
                          stroke="#8b5cf6"
                          fill="#8b5cf6"
                          fillOpacity={0.3}
                        />
                      </RadarChart>
                    </ResponsiveContainer>
                  </div>
                  {/* Source List */}
                  <div className="flex-1 space-y-4 py-4">
                    {trafficSourcesList.map((item) => (
                      <div key={item.name} className="flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          <div className="w-1 h-4 rounded bg-violet-500" />
                          <span className="text-sm">{item.name}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <span className="text-sm">{item.visits.toLocaleString()}</span>
                          <span
                            className={`text-xs font-medium ${
                              item.change.startsWith("+")
                                ? "text-green-600 dark:text-green-400"
                                : "text-red-600 dark:text-red-400"
                            }`}
                          >
                            {item.change}
                          </span>
                        </div>
                      </div>
                    ))}
                    <Button variant="outline" className="w-full mt-4">
                      View detailed report
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="backlinks" className="space-y-4">
          {/* Backlinks Growth Chart */}
          <Card>
            <CardHeader>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <Link2 className="size-5 text-muted-foreground" />
                  <CardTitle>Backlinks Growth</CardTitle>
                </div>
                <div className="flex items-center gap-2">
                  <Button variant="outline" size="sm">3 Months</Button>
                  <Button variant="outline" size="sm">6 Months</Button>
                  <Button size="sm" className="bg-violet-600 hover:bg-violet-700 text-white">12 Months</Button>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <div className="h-[300px] w-full">
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart data={backlinksGrowthData} margin={{ top: 20, right: 30, left: 20, bottom: 20 }}>
                    <CartesianGrid strokeDasharray="3 3" stroke="#d1d5db" horizontal={true} vertical={true} />
                    <XAxis
                      dataKey="month"
                      tickLine={false}
                      axisLine={false}
                      tick={{ fill: "var(--color-muted-foreground)", fontSize: 12 }}
                    />
                    <YAxis
                      tickLine={false}
                      axisLine={false}
                      tick={{ fill: "var(--color-muted-foreground)", fontSize: 12 }}
                    />
                    <ChartTooltip
                      cursor={false}
                      content={({ active, payload, label }) => {
                        if (active && payload && payload.length) {
                          return (
                            <div className="rounded-lg border bg-background p-2 shadow-sm">
                              <div className="font-medium">{label} 2025</div>
                              <div className="text-sm text-muted-foreground">
                                Backlink: {payload[0].value?.toLocaleString()}
                              </div>
                            </div>
                          );
                        }
                        return null;
                      }}
                    />
                    <Bar
                      dataKey="backlinks"
                      fill="#c4b5fd"
                      radius={[4, 4, 0, 0]}
                      activeBar={{ fill: "#8b5cf6" }}
                    />
                  </BarChart>
                </ResponsiveContainer>
              </div>
            </CardContent>
          </Card>

          {/* Stats Cards */}
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            <Card className="group transition-colors hover:bg-muted/50">
              <CardContent className="pt-6">
                <div className="text-sm text-muted-foreground">Total Backlinks</div>
                <div className="flex items-baseline gap-2 mt-1">
                  <span className="text-3xl font-bold text-violet-300 group-hover:text-violet-600 transition-colors">3,580</span>
                  <span className="rounded bg-green-100/50 group-hover:bg-green-100 px-1.5 py-0.5 text-xs font-medium text-green-400 group-hover:text-green-700 transition-colors dark:bg-green-900/20 dark:group-hover:bg-green-900/30 dark:text-green-600 dark:group-hover:text-green-400">
                    +4
                  </span>
                </div>
              </CardContent>
            </Card>

            <Card className="group transition-colors hover:bg-muted/50">
              <CardContent className="pt-6">
                <div className="text-sm text-muted-foreground">Referring Domains</div>
                <div className="mt-1">
                  <span className="text-3xl font-bold text-violet-300 group-hover:text-violet-600 transition-colors">870</span>
                </div>
              </CardContent>
            </Card>

            <Card className="group transition-colors hover:bg-muted/50">
              <CardContent className="pt-6">
                <div className="text-sm text-muted-foreground">New Backlinks (30d)</div>
                <div className="mt-1">
                  <span className="text-3xl font-bold text-green-300 group-hover:text-green-600 transition-colors">+330</span>
                </div>
              </CardContent>
            </Card>

            <Card className="group transition-colors hover:bg-muted/50">
              <CardContent className="pt-6">
                <div className="text-sm text-muted-foreground">Lost Backlinks (30d)</div>
                <div className="mt-1">
                  <span className="text-3xl font-bold text-red-300 group-hover:text-red-500 transition-colors">-42</span>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Top Performing Pages Table */}
          <Card>
            <CardHeader>
              <CardTitle>Top Performing Pages</CardTitle>
            </CardHeader>
            <CardContent>
              {/* Table Header */}
              <div className="grid grid-cols-4 gap-4 border-b pb-3 text-sm font-medium text-muted-foreground">
                <div>Domain</div>
                <div>Type</div>
                <div>Links</div>
                <div>Authority</div>
              </div>
              {/* Table Rows */}
              <div className="divide-y">
                {topPerformingPages.map((page) => (
                  <div key={page.domain} className="grid grid-cols-4 gap-4 py-4 items-center">
                    <div className="text-sm">{page.domain}</div>
                    <div>
                      <span
                        className={`inline-flex items-center rounded-md px-2 py-1 text-xs font-medium ${
                          page.type === "Do-Follow"
                            ? "bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400"
                            : "bg-orange-100 text-orange-700 dark:bg-orange-900/30 dark:text-orange-400"
                        }`}
                      >
                        {page.type}
                      </span>
                    </div>
                    <div className="text-sm">{page.links}</div>
                    <div className="text-sm">{page.authority}</div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="pages">
          <Card>
            <CardHeader>
              <div className="flex items-center justify-between">
                <CardTitle>Top Performing Pages</CardTitle>
                <Button variant="outline" size="sm" className="gap-2">
                  Export
                  <ChevronDown className="size-4" />
                </Button>
              </div>
            </CardHeader>
            <CardContent>
              {/* Table Header */}
              <div className="grid grid-cols-4 gap-4 border-b pb-3 text-sm font-medium text-muted-foreground">
                <div>URL</div>
                <div>Traffic</div>
                <div>Keywords</div>
                <div className="text-right">Top Position</div>
              </div>
              {/* Table Rows */}
              <div className="divide-y">
                {topPagesData.map((page) => (
                  <div key={page.url} className="grid grid-cols-4 gap-4 py-4 items-center">
                    <div className="text-sm">{page.url}</div>
                    <div>
                      <span
                        className={`inline-flex items-center rounded-md px-2 py-1 text-xs font-medium ${
                          page.traffic === "#1"
                            ? "bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400"
                            : page.traffic === "#2"
                            ? "bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-400"
                            : "bg-orange-100 text-orange-700 dark:bg-orange-900/30 dark:text-orange-400"
                        }`}
                      >
                        {page.traffic}
                      </span>
                    </div>
                    <div className="text-sm">{page.keywords}</div>
                    <div className="text-sm text-right">{page.position.toLocaleString()}</div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="keywords">
          <Card>
            <CardHeader>
              <div className="flex items-center justify-between">
                <CardTitle>Top Performing Keywords</CardTitle>
                <Button variant="outline" size="sm" className="gap-2">
                  Export
                  <ChevronDown className="size-4" />
                </Button>
              </div>
            </CardHeader>
            <CardContent>
              {/* Table Header */}
              <div className="grid grid-cols-5 gap-4 border-b pb-3 text-sm font-medium text-muted-foreground">
                <div>Search Term</div>
                <div>Rank</div>
                <div>Search Volume</div>
                <div>Estimated Traffic</div>
                <div className="text-right">Cost Per Click</div>
              </div>
              {/* Table Rows */}
              <div className="divide-y">
                {topKeywordsData.map((keyword) => (
                  <div key={keyword.term} className="grid grid-cols-5 gap-4 py-4 items-center">
                    <div className="text-sm">{keyword.term}</div>
                    <div>
                      <span
                        className={`inline-flex items-center rounded-md px-2 py-1 text-xs font-medium ${
                          keyword.rank === "#1"
                            ? "bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400"
                            : keyword.rank === "#2"
                            ? "bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-400"
                            : keyword.rank === "#3"
                            ? "bg-violet-100 text-violet-700 dark:bg-violet-900/30 dark:text-violet-400"
                            : "bg-orange-100 text-orange-700 dark:bg-orange-900/30 dark:text-orange-400"
                        }`}
                      >
                        {keyword.rank}
                      </span>
                    </div>
                    <div className="text-sm">{keyword.volume}</div>
                    <div className="text-sm">{keyword.traffic}</div>
                    <div className="text-sm text-right">{keyword.cpc}</div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
}

"use client";

import {
  Globe,
  Users,
  MessageSquare,
  Link2,
  Calendar,
  ChevronDown,
  TrendingUp,
  Search,
  ExternalLink,
  BarChart3
} from "lucide-react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  ResponsiveContainer,
  Tooltip,
  PieChart,
  Pie,
  Cell
} from "recharts";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Progress } from "@/components/ui/progress";
import { ChartContainer, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart";

// Chart data for Traffic Trend
const trafficData = [
  { month: "Jan", organic: 3200, direct: 1500, referral: 1200 },
  { month: "Feb", organic: 2800, direct: 2200, referral: 1500 },
  { month: "Mar", organic: 4700, direct: 2800, referral: 1600 },
  { month: "Apr", organic: 3800, direct: 3200, referral: 2800 },
  { month: "May", organic: 4200, direct: 3400, referral: 3100 },
  { month: "Jun", organic: 5200, direct: 3200, referral: 3400 }
];

const chartConfig = {
  organic: {
    label: "Organic",
    color: "#8b5cf6"
  },
  direct: {
    label: "Direct",
    color: "#f97316"
  },
  referral: {
    label: "Referral",
    color: "#eab308"
  }
};

// Top Landing Pages data
const landingPages = [
  { path: "/resources/seo-guide", visits: 4682, change: "+3.8%" },
  { path: "/pricing", visits: 3219, change: "+2.5%" },
  { path: "/blog/analytics-tips", visits: 2871, change: "-4.2%" },
  { path: "/features", visits: 1958, change: "+3.1%" }
];

// Geographical Distribution data
const geoData = [
  { country: "United States", visits: 11682, percentage: 47.5 },
  { country: "United Kingdom", visits: 4219, percentage: 17.1 },
  { country: "Canada", visits: 2871, percentage: 11.6 },
  { country: "Australia", visits: 1958, percentage: 7.9 },
  { country: "Germany", visits: 1342, percentage: 5.4 }
];

// Referral Traffic data
const referralData = [
  { source: "Google", visits: 9452, change: "+12.4%" },
  { source: "Facebook", visits: 2187, change: "-3.8%" },
  { source: "Twitter", visits: 1526, change: "+7.2%" },
  { source: "LinkedIn", visits: 943, change: "+15.6%" },
  { source: "Reddit", visits: 1526, change: "-2.1%" }
];

// Top Performing Keywords data
const keywordsData = [
  { term: "data analysis tools", ranking: "#1 Position", rankType: "position", volume: 25600, competition: 80 },
  { term: "keyword research tools", ranking: "#1 Rank", rankType: "rank", volume: 20300, competition: 70 },
  { term: "traffic source analysis", ranking: "#3 Rank", rankType: "rank", volume: 15400, competition: 85 },
  { term: "user engagement optimization", ranking: "#2 Position", rankType: "position", volume: 11200, competition: 72 },
  { term: "web analytics tools", ranking: "#4 Rank", rankType: "rank", volume: 9600, competition: 78 }
];

// Traffic Sources Pie Chart data
const trafficSourcesData = [
  { name: "Organic", value: 40, color: "#8b5cf6" },
  { name: "Direct", value: 25, color: "#f97316" },
  { name: "Referral", value: 12, color: "#22c55e" },
  { name: "Social", value: 15, color: "#eab308" },
  { name: "Email", value: 8, color: "#ec4899" }
];

// User Engagement data
const userEngagementData = [
  { label: "Pages per session", value: "3.2", percentage: 64, color: "bg-violet-500" },
  { label: "Average session duration", value: "5 minutes", percentage: 75, color: "bg-violet-500" },
  { label: "New visitors", value: "1,500", percentage: 85, color: "bg-violet-500" },
  { label: "Bounce rate", value: "45%", percentage: 45, color: "bg-violet-500" },
  { label: "Return visitors", value: "800", percentage: 60, color: "bg-violet-500" },
  { label: "Conversion rate", value: "2.5%", percentage: 25, color: "bg-violet-500" }
];

export default function SEODashboardPage() {
  return (
    <div className="space-y-6">
      {/* Page Header */}
      <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
        <div>
          <h1 className="text-2xl font-bold tracking-tight">SEO Dashboard</h1>
          <p className="text-muted-foreground text-sm">Analytics overview of your website</p>
        </div>
        <div className="flex items-center gap-3">
          <Button variant="outline" className="gap-2">
            <Calendar className="size-4" />
            Last 30 days
            <ChevronDown className="size-4" />
          </Button>
          <Button variant="outline" className="gap-2">
            <Globe className="size-4" />
            analysepro.com
            <ChevronDown className="size-4" />
          </Button>
        </div>
      </div>

      {/* Stat Cards */}
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        {/* Domain Authority */}
        <Card>
          <CardHeader className="pb-2">
            <div className="flex items-center gap-2 text-muted-foreground text-sm">
              <Globe className="size-4" />
              Domain Authority
            </div>
          </CardHeader>
          <CardContent>
            <div className="flex items-baseline gap-2">
              <span className="text-3xl font-bold text-violet-600">78/100</span>
              <span className="text-sm font-medium text-green-600">+4</span>
            </div>
            <Progress value={78} className="mt-3 h-2" indicatorColor="bg-violet-600" />
          </CardContent>
        </Card>

        {/* Visitors */}
        <Card>
          <CardHeader className="pb-2">
            <div className="flex items-center gap-2 text-muted-foreground text-sm">
              <Users className="size-4" />
              Visitors
            </div>
          </CardHeader>
          <CardContent>
            <div className="flex items-baseline gap-2">
              <span className="text-3xl font-bold text-violet-600">24.8K</span>
              <span className="rounded bg-green-100 px-1.5 py-0.5 text-xs font-medium text-green-700 dark:bg-green-900/30 dark:text-green-400">
                +35
              </span>
            </div>
            <p className="mt-1 text-xs text-muted-foreground">from last month</p>
          </CardContent>
        </Card>

        {/* Keywords */}
        <Card>
          <CardHeader className="pb-2">
            <div className="flex items-center gap-2 text-muted-foreground text-sm">
              <MessageSquare className="size-4" />
              Keywords
            </div>
          </CardHeader>
          <CardContent>
            <div className="flex items-baseline gap-2">
              <span className="text-3xl font-bold text-violet-600">1,204</span>
              <span className="rounded bg-green-100 px-1.5 py-0.5 text-xs font-medium text-green-700 dark:bg-green-900/30 dark:text-green-400">
                +86
              </span>
            </div>
            <p className="mt-1 text-xs text-muted-foreground">from last month</p>
          </CardContent>
        </Card>

        {/* Backlinks */}
        <Card>
          <CardHeader className="pb-2">
            <div className="flex items-center gap-2 text-muted-foreground text-sm">
              <Link2 className="size-4" />
              Backlinks
            </div>
          </CardHeader>
          <CardContent>
            <div className="flex items-baseline gap-2">
              <span className="text-3xl font-bold text-violet-600">3,879</span>
            </div>
            <p className="mt-1 text-xs text-muted-foreground">from last month</p>
          </CardContent>
        </Card>
      </div>

      {/* Tabs Section */}
      <Tabs defaultValue="sources" className="space-y-4">
        <TabsList className="bg-transparent border-b rounded-none w-full justify-start gap-4 px-0 h-auto pb-0">
          <TabsTrigger
            value="performance"
            className="rounded-none border-b-2 border-transparent data-[state=active]:border-violet-600 data-[state=active]:bg-transparent data-[state=active]:shadow-none px-0 pb-3"
          >
            Website Performance
          </TabsTrigger>
          <TabsTrigger
            value="keywords"
            className="rounded-none border-b-2 border-transparent data-[state=active]:border-violet-600 data-[state=active]:bg-transparent data-[state=active]:shadow-none px-0 pb-3"
          >
            Keywords
          </TabsTrigger>
          <TabsTrigger
            value="sources"
            className="rounded-none border-b-2 border-transparent data-[state=active]:border-violet-600 data-[state=active]:bg-transparent data-[state=active]:shadow-none px-0 pb-3"
          >
            Traffic Sources
          </TabsTrigger>
        </TabsList>

        <TabsContent value="performance" className="space-y-6">
          {/* Traffic Trend Chart */}
          <Card>
            <CardHeader>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <BarChart3 className="size-5 text-muted-foreground" />
                  <CardTitle>Traffic Trend</CardTitle>
                </div>
                <div className="flex items-center gap-6 text-sm">
                  <div className="flex items-center gap-2">
                    <div className="size-3 rounded-full bg-violet-500" />
                    <span className="text-muted-foreground">Organic</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="size-3 rounded-full bg-orange-500" />
                    <span className="text-muted-foreground">Direct</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="size-3 rounded-full bg-yellow-500" />
                    <span className="text-muted-foreground">Referral</span>
                  </div>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <ChartContainer config={chartConfig} className="h-[300px] w-full">
                <LineChart data={trafficData} margin={{ top: 20, right: 30, left: 20, bottom: 20 }}>
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
                    tickFormatter={(value) => `${value}`}
                  />
                  <ChartTooltip
                    content={<ChartTooltipContent indicator="dot" />}
                    cursor={{ stroke: "var(--color-muted)", strokeWidth: 1 }}
                  />
                  <Line
                    type="monotone"
                    dataKey="organic"
                    stroke="#8b5cf6"
                    strokeWidth={2}
                    dot={{ fill: "#8b5cf6", strokeWidth: 2, r: 4 }}
                    activeDot={{ r: 6 }}
                  />
                  <Line
                    type="monotone"
                    dataKey="direct"
                    stroke="#f97316"
                    strokeWidth={2}
                    dot={{ fill: "#f97316", strokeWidth: 2, r: 4 }}
                    activeDot={{ r: 6 }}
                  />
                  <Line
                    type="monotone"
                    dataKey="referral"
                    stroke="#eab308"
                    strokeWidth={2}
                    dot={{ fill: "#eab308", strokeWidth: 2, r: 4 }}
                    activeDot={{ r: 6 }}
                  />
                </LineChart>
              </ChartContainer>
            </CardContent>
          </Card>

          {/* Bottom Cards Grid */}
          <div className="grid gap-4 lg:grid-cols-3">
            {/* Top Landing Pages */}
            <Card>
              <CardHeader>
                <div className="flex items-center gap-2">
                  <Search className="size-5 text-muted-foreground" />
                  <CardTitle className="text-base">Top Landing Pages</CardTitle>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                {landingPages.map((page) => (
                  <div key={page.path} className="flex items-center justify-between">
                    <span className="text-sm truncate max-w-[150px]">{page.path}</span>
                    <div className="flex items-center gap-3">
                      <span className="text-sm text-muted-foreground">{page.visits.toLocaleString()}</span>
                      <span
                        className={`text-xs font-medium ${
                          page.change.startsWith("+")
                            ? "text-green-600 dark:text-green-400"
                            : "text-red-600 dark:text-red-400"
                        }`}
                      >
                        {page.change}
                      </span>
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>

            {/* Geographical Distribution */}
            <Card>
              <CardHeader>
                <div className="flex items-center gap-2">
                  <Globe className="size-5 text-muted-foreground" />
                  <CardTitle className="text-base">Geographical Distribution</CardTitle>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                {geoData.map((item) => (
                  <div key={item.country} className="space-y-2">
                    <div className="flex items-center justify-between">
                      <span className="text-sm">{item.country}</span>
                      <div className="text-right">
                        <span className="text-sm font-medium">{item.visits.toLocaleString()}</span>
                        <span className="ml-2 text-xs text-muted-foreground">{item.percentage}%</span>
                      </div>
                    </div>
                    <Progress
                      value={item.percentage}
                      className="h-1.5"
                      indicatorColor="bg-violet-500"
                    />
                  </div>
                ))}
              </CardContent>
            </Card>

            {/* Referral Traffic */}
            <Card>
              <CardHeader>
                <div className="flex items-center gap-2">
                  <ExternalLink className="size-5 text-muted-foreground" />
                  <CardTitle className="text-base">Referral Traffic</CardTitle>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                {referralData.map((item) => (
                  <div key={item.source} className="flex items-center justify-between">
                    <span className="text-sm">{item.source}</span>
                    <div className="flex items-center gap-3">
                      <span className="text-sm text-muted-foreground">{item.visits.toLocaleString()}</span>
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
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="keywords" className="space-y-6">
          {/* Top Performing Keywords */}
          <Card>
            <CardHeader>
              <div className="flex items-center justify-between">
                <CardTitle>Top Performing Keywords</CardTitle>
                <Button variant="outline" size="sm">
                  Explore All Keywords
                </Button>
              </div>
            </CardHeader>
            <CardContent>
              {/* Table Header */}
              <div className="grid grid-cols-4 gap-4 border-b pb-3 text-sm font-medium text-muted-foreground">
                <div>Search Term</div>
                <div>Ranking</div>
                <div>Search Volume</div>
                <div>Competition Level</div>
              </div>
              {/* Table Rows */}
              <div className="divide-y">
                {keywordsData.map((keyword) => (
                  <div key={keyword.term} className="grid grid-cols-4 gap-4 py-4 items-center">
                    <div className="text-sm">{keyword.term}</div>
                    <div>
                      <span
                        className={`inline-flex items-center rounded-md px-2 py-1 text-xs font-medium ${
                          keyword.rankType === "position"
                            ? "bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400"
                            : "bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400"
                        }`}
                      >
                        {keyword.ranking}
                      </span>
                    </div>
                    <div className="text-sm">{keyword.volume.toLocaleString()}</div>
                    <div className="flex items-center gap-3">
                      <div className="flex-1">
                        <div className="h-2 w-full rounded-full bg-muted overflow-hidden">
                          <div
                            className="h-full rounded-full"
                            style={{
                              width: `${keyword.competition}%`,
                              background: `linear-gradient(90deg, #a855f7 0%, #22c55e ${keyword.competition}%)`
                            }}
                          />
                        </div>
                      </div>
                      <span className="text-sm text-muted-foreground w-10 text-right">
                        {keyword.competition}%
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Bottom Cards Grid */}
          <div className="grid gap-4 lg:grid-cols-3">
            {/* Top Landing Pages */}
            <Card>
              <CardHeader>
                <div className="flex items-center gap-2">
                  <Search className="size-5 text-muted-foreground" />
                  <CardTitle className="text-base">Top Landing Pages</CardTitle>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                {landingPages.map((page) => (
                  <div key={page.path} className="flex items-center justify-between">
                    <span className="text-sm truncate max-w-[150px]">{page.path}</span>
                    <div className="flex items-center gap-3">
                      <span className="text-sm text-muted-foreground">{page.visits.toLocaleString()}</span>
                      <span
                        className={`text-xs font-medium ${
                          page.change.startsWith("+")
                            ? "text-green-600 dark:text-green-400"
                            : "text-red-600 dark:text-red-400"
                        }`}
                      >
                        {page.change}
                      </span>
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>

            {/* Geographical Distribution */}
            <Card>
              <CardHeader>
                <div className="flex items-center gap-2">
                  <Globe className="size-5 text-muted-foreground" />
                  <CardTitle className="text-base">Geographical Distribution</CardTitle>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                {geoData.map((item) => (
                  <div key={item.country} className="flex items-center gap-4">
                    <span className="text-sm flex-1">{item.country}</span>
                    <div className="w-24">
                      <Progress
                        value={item.percentage}
                        className="h-2"
                        indicatorColor="bg-violet-500"
                      />
                    </div>
                    <div className="text-right w-20">
                      <div className="text-sm font-medium">{item.visits.toLocaleString()}</div>
                      <div className="text-xs text-muted-foreground">{item.percentage}%</div>
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>

            {/* Referral Traffic */}
            <Card>
              <CardHeader>
                <div className="flex items-center gap-2">
                  <ExternalLink className="size-5 text-muted-foreground" />
                  <CardTitle className="text-base">Referral Traffic</CardTitle>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                {referralData.map((item) => (
                  <div key={item.source} className="flex items-center justify-between">
                    <span className="text-sm">{item.source}</span>
                    <div className="flex items-center gap-3">
                      <span className="text-sm text-muted-foreground">{item.visits.toLocaleString()}</span>
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
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="sources" className="space-y-6">
          {/* Top Row - Pie Chart and User Engagement */}
          <div className="grid gap-4 lg:grid-cols-2">
            {/* Traffic Sources Pie Chart */}
            <Card>
              <CardHeader>
                <CardTitle>Traffic Sources</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="relative h-[350px] w-full">
                  <ResponsiveContainer width="100%" height="100%">
                    <PieChart>
                      <Pie
                        data={trafficSourcesData}
                        cx="50%"
                        cy="50%"
                        innerRadius={70}
                        outerRadius={120}
                        paddingAngle={2}
                        dataKey="value"
                        label={({ name, value }) => `${name} ${value}%`}
                        labelLine={{ stroke: "var(--color-muted-foreground)", strokeWidth: 1 }}
                      >
                        {trafficSourcesData.map((entry, index) => (
                          <Cell key={`cell-${index}`} fill={entry.color} />
                        ))}
                      </Pie>
                    </PieChart>
                  </ResponsiveContainer>
                </div>
              </CardContent>
            </Card>

            {/* User Engagement */}
            <Card>
              <CardHeader>
                <CardTitle>User Engagement</CardTitle>
              </CardHeader>
              <CardContent className="space-y-5">
                {userEngagementData.map((item) => (
                  <div key={item.label} className="space-y-2">
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-muted-foreground">{item.label}</span>
                      <span className="text-sm font-medium">{item.value}</span>
                    </div>
                    <div className="h-2 w-full rounded-full bg-muted overflow-hidden">
                      <div
                        className={`h-full rounded-full ${item.color}`}
                        style={{ width: `${item.percentage}%` }}
                      />
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>
          </div>

          {/* Bottom Cards Grid */}
          <div className="grid gap-4 lg:grid-cols-3">
            {/* Top Landing Pages */}
            <Card>
              <CardHeader>
                <div className="flex items-center gap-2">
                  <Search className="size-5 text-muted-foreground" />
                  <CardTitle className="text-base">Top Landing Pages</CardTitle>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                {landingPages.map((page) => (
                  <div key={page.path} className="flex items-center justify-between">
                    <span className="text-sm truncate max-w-[150px]">{page.path}</span>
                    <div className="flex items-center gap-3">
                      <span className="text-sm text-muted-foreground">{page.visits.toLocaleString()}</span>
                      <span
                        className={`text-xs font-medium ${
                          page.change.startsWith("+")
                            ? "text-green-600 dark:text-green-400"
                            : "text-red-600 dark:text-red-400"
                        }`}
                      >
                        {page.change}
                      </span>
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>

            {/* Geographical Distribution */}
            <Card>
              <CardHeader>
                <div className="flex items-center gap-2">
                  <Globe className="size-5 text-muted-foreground" />
                  <CardTitle className="text-base">Geographical Distribution</CardTitle>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                {geoData.map((item) => (
                  <div key={item.country} className="flex items-center gap-4">
                    <span className="text-sm flex-1">{item.country}</span>
                    <div className="w-24">
                      <Progress
                        value={item.percentage}
                        className="h-2"
                        indicatorColor="bg-violet-500"
                      />
                    </div>
                    <div className="text-right w-20">
                      <div className="text-sm font-medium">{item.visits.toLocaleString()}</div>
                      <div className="text-xs text-muted-foreground">{item.percentage}%</div>
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>

            {/* Referral Traffic */}
            <Card>
              <CardHeader>
                <div className="flex items-center gap-2">
                  <ExternalLink className="size-5 text-muted-foreground" />
                  <CardTitle className="text-base">Referral Traffic</CardTitle>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                {referralData.map((item) => (
                  <div key={item.source} className="flex items-center justify-between">
                    <span className="text-sm">{item.source}</span>
                    <div className="flex items-center gap-3">
                      <span className="text-sm text-muted-foreground">{item.visits.toLocaleString()}</span>
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
              </CardContent>
            </Card>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
}

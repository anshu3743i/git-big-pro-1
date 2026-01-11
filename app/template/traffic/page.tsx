"use client";

import {
  Globe,
  Search,
  ChevronDown,
  Monitor,
  Calendar,
  Info,
  BarChart3,
  Settings2
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
  BarChart,
  Bar,
  ComposedChart,
  Area
} from "recharts";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ChartContainer, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger
} from "@/components/ui/dropdown-menu";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow
} from "@/components/ui/table";

// Traffic Overview data (combined bar + line chart)
const trafficOverviewData = [
  { month: "Jan 2025", visit: 280000, pageViews: 420000, users: 520000 },
  { month: "Feb 2025", visit: 320000, pageViews: 450000, users: 550000 },
  { month: "Mar 2025", visit: 380000, pageViews: 480000, users: 580000 },
  { month: "Apr 2025", visit: 350000, pageViews: 460000, users: 560000 },
  { month: "May 2025", visit: 400000, pageViews: 500000, users: 600000 },
  { month: "Jun 2025", visit: 380000, pageViews: 480000, users: 580000 },
  { month: "Jul 2025", visit: 420000, pageViews: 520000, users: 620000 },
  { month: "Aug 2025", visit: 450000, pageViews: 560000, users: 680000 },
  { month: "Sep 2025", visit: 380000, pageViews: 500000, users: 600000 },
  { month: "Oct 2025", visit: 340000, pageViews: 460000, users: 560000 },
  { month: "Nov 2025", visit: 300000, pageViews: 420000, users: 520000 },
  { month: "Dec 2025", visit: 260000, pageViews: 380000, users: 480000 }
];

const chartConfig = {
  visit: { label: "Visit", color: "#8b5cf6" },
  pageViews: { label: "Page Views", color: "#f97316" },
  users: { label: "Users", color: "#eab308" }
};

// Traffic by Device data
const deviceData = [
  { name: "Desktop", value: 45, color: "#8b5cf6" },
  { name: "Mobile", value: 42, color: "#eab308" },
  { name: "Tablet", value: 13, color: "#3b82f6" }
];

// Traffic Sources data
const trafficSourcesData = [
  { channel: "Organic Search", traffic: 125800, change: "+49%" },
  { channel: "Paid Search", traffic: 54200, change: "+21.1%" },
  { channel: "Direct", traffic: 38500, change: "+15%" },
  { channel: "Social", traffic: 18600, change: "-7.2%" },
  { channel: "Referral", traffic: 12400, change: "+4.8%" },
  { channel: "Email", traffic: 7280, change: "-2.9%" }
];

// Geographic Distribution data
const geoDistributionData = [
  { country: "OrUnited States", traffic: 86450, change: "+33%" },
  { country: "India", traffic: 42370, change: "+96.1%" },
  { country: "Bangladesh", traffic: 28450, change: "-14%" },
  { country: "Canada", traffic: 22600, change: "-3.8%" },
  { country: "Australia", traffic: 15700, change: "+9.8%" },
  { country: "Others", traffic: 42630, change: "-12.4%" }
];

// Top Referral Sources data
const topReferralSourcesData = [
  { domain: "google.com", referrals: 84250, percentTotal: "32.8%", change: "+8.2%" },
  { domain: "twitter.com", referrals: 37800, percentTotal: "18.4%", change: "+2.0%" },
  { domain: "linkedin.com", referrals: 45600, percentTotal: "22.3%", change: "+3.8%" },
  { domain: "facebook.com", referrals: 61500, percentTotal: "25.1%", change: "-4.5%" },
  { domain: "instagram.com", referrals: 72100, percentTotal: "29.6%", change: "+5.1%" },
  { domain: "youtube.com", referrals: 93750, percentTotal: "36.5%", change: "+7.0%" }
];

// Most Visited Pages data
const mostVisitedPagesData = [
  { url: "/products/enterprise-solution", traffic: 45280, percentTotal: "17.6%", avgTime: "3:42", bounceRate: "24%" },
  { url: "/blog/advanced-analytics-guide", traffic: 38450, percentTotal: "15.0%", avgTime: "4:15", bounceRate: "18%" },
  { url: "/features/dashboard-overview", traffic: 32100, percentTotal: "12.5%", avgTime: "2:58", bounceRate: "31%" },
  { url: "/pricing", traffic: 28750, percentTotal: "11.2%", avgTime: "2:24", bounceRate: "35%" },
  { url: "/resources/documentation", traffic: 24320, percentTotal: "9.5%", avgTime: "5:12", bounceRate: "15%" },
  { url: "/about/our-team", traffic: 18960, percentTotal: "7.4%", avgTime: "1:48", bounceRate: "42%" }
];

// User Engagement Trends data
const engagementTrendsData = [
  { month: "Jan 2025", bounceRate: 280000, avgTime: 380000, pagesPerSession: 220000 },
  { month: "Feb 2025", bounceRate: 300000, avgTime: 400000, pagesPerSession: 240000 },
  { month: "Mar 2025", bounceRate: 320000, avgTime: 420000, pagesPerSession: 260000 },
  { month: "Apr 2025", bounceRate: 340000, avgTime: 440000, pagesPerSession: 280000 },
  { month: "May 2025", bounceRate: 380000, avgTime: 480000, pagesPerSession: 320000 },
  { month: "Jun 2025", bounceRate: 400000, avgTime: 500000, pagesPerSession: 340000 },
  { month: "Jul 2025", bounceRate: 420000, avgTime: 520000, pagesPerSession: 360000 },
  { month: "Aug 2025", bounceRate: 480000, avgTime: 620000, pagesPerSession: 420000 },
  { month: "Sep 2025", bounceRate: 440000, avgTime: 560000, pagesPerSession: 380000 },
  { month: "Oct 2025", bounceRate: 400000, avgTime: 500000, pagesPerSession: 340000 },
  { month: "Nov 2025", bounceRate: 360000, avgTime: 460000, pagesPerSession: 300000 },
  { month: "Dec 2025", bounceRate: 320000, avgTime: 420000, pagesPerSession: 260000 }
];

export default function TrafficAnalyticsPage() {
  return (
    <div className="space-y-6">
      {/* Page Header */}
      <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
        <div>
          <h1 className="text-2xl font-bold tracking-tight">Traffic Analytics:</h1>
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
            All Device
            <ChevronDown className="size-4" />
          </Button>
          <Button variant="outline" size="sm" className="gap-2">
            <Calendar className="size-4" />
            May 6, 2025
            <ChevronDown className="size-4" />
          </Button>
          <Button variant="outline" size="sm" className="gap-2">
            <Settings2 className="size-4" />
            Compare
            <ChevronDown className="size-4" />
          </Button>
        </div>
      </div>

      {/* Search Bar */}
      <div className="flex flex-col gap-3 sm:flex-row">
        <div className="relative flex-1">
          <Input placeholder="example.com" className="pr-10" />
          <Search className="absolute right-3 top-1/2 -translate-y-1/2 size-4 text-muted-foreground" />
        </div>
        <div className="flex gap-2">
          <Button variant="outline">Add competitors</Button>
          <Button variant="outline">Export PDF</Button>
        </div>
      </div>

      {/* Stat Cards */}
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <Card>
          <CardContent className="pt-6">
            <div className="text-sm text-muted-foreground">Total Traffic</div>
            <div className="text-3xl font-bold text-violet-600 mt-1">256.8K</div>
            <p className="text-sm text-green-600 mt-1">+5.9% from previous period</p>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="pt-6">
            <div className="text-sm text-muted-foreground">Page Per Visit</div>
            <div className="text-3xl font-bold text-violet-600 mt-1">783.4K</div>
            <p className="text-sm text-green-600 mt-1">+6.0% from previous period</p>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="pt-6">
            <div className="text-sm text-muted-foreground">Page Per Visit</div>
            <div className="text-3xl font-bold text-violet-600 mt-1">2:48</div>
            <p className="text-sm text-green-600 mt-1">+14.3% from previous period</p>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="pt-6">
            <div className="text-sm text-muted-foreground">Avg. Visit Duration</div>
            <div className="text-3xl font-bold text-violet-600 mt-1">4.0</div>
            <p className="text-sm text-green-600 mt-1">+8.1% from previous period</p>
          </CardContent>
        </Card>
      </div>

      {/* Traffic Overview Chart */}
      <Card>
        <CardHeader>
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <BarChart3 className="size-5 text-muted-foreground" />
              <CardTitle>Traffic Overview</CardTitle>
            </div>
            <div className="flex items-center gap-2">
              <Button variant="outline" size="sm">30 days</Button>
              <Button variant="outline" size="sm">3 Months</Button>
              <Button variant="outline" size="sm">6 Months</Button>
              <Button size="sm" className="bg-violet-600 hover:bg-violet-700 text-white">12 Months</Button>
            </div>
          </div>
        </CardHeader>
        <CardContent>
          <ChartContainer config={chartConfig} className="h-[350px] w-full">
            <ComposedChart data={trafficOverviewData} margin={{ top: 20, right: 30, left: 20, bottom: 20 }}>
              <CartesianGrid strokeDasharray="3 3" stroke="#d1d5db" />
              <XAxis
                dataKey="month"
                tickLine={false}
                axisLine={false}
                tick={{ fill: "var(--color-muted-foreground)", fontSize: 11 }}
                tickFormatter={(value) => value.replace(" 2025", "")}
              />
              <YAxis
                tickLine={false}
                axisLine={false}
                tick={{ fill: "var(--color-muted-foreground)", fontSize: 12 }}
                tickFormatter={(value) => `${value / 1000}k`}
              />
              <ChartTooltip
                content={({ active, payload, label }) => {
                  if (active && payload && payload.length) {
                    return (
                      <div className="rounded-lg border bg-background p-3 shadow-sm">
                        <div className="font-medium mb-2">{label?.replace(" 2025", "")}</div>
                        {payload.map((entry, index) => (
                          <div key={index} className="flex items-center gap-2 text-sm">
                            <div className="size-2 rounded-full" style={{ backgroundColor: entry.color }} />
                            <span className="text-muted-foreground">{entry.name}:</span>
                            <span className="font-medium">{entry.value?.toLocaleString()}</span>
                          </div>
                        ))}
                      </div>
                    );
                  }
                  return null;
                }}
              />
              <Bar dataKey="visit" fill="#c4b5fd" radius={[4, 4, 0, 0]} name="Visit" />
              <Line type="monotone" dataKey="pageViews" stroke="#f97316" strokeWidth={2} dot={{ fill: "#f97316", r: 4 }} name="Page Views" />
              <Line type="monotone" dataKey="users" stroke="#eab308" strokeWidth={2} dot={{ fill: "#eab308", r: 4 }} name="Users" />
            </ComposedChart>
          </ChartContainer>
          <div className="flex justify-center gap-6 mt-4 text-sm">
            <div className="flex items-center gap-2">
              <div className="size-3 rounded-full bg-violet-400" />
              <span className="text-muted-foreground">Visit</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="size-3 rounded-full bg-orange-500" />
              <span className="text-muted-foreground">Page Views</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="size-3 rounded-full bg-yellow-500" />
              <span className="text-muted-foreground">Users</span>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Three Cards Row */}
      <div className="grid gap-4 lg:grid-cols-3">
        {/* Traffic by Device */}
        <Card>
          <CardHeader>
            <CardTitle>Traffic by Device</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="relative h-[200px] w-full">
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie
                    data={deviceData}
                    cx="50%"
                    cy="50%"
                    innerRadius={50}
                    outerRadius={80}
                    paddingAngle={2}
                    dataKey="value"
                  >
                    {deviceData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={entry.color} />
                    ))}
                  </Pie>
                </PieChart>
              </ResponsiveContainer>
            </div>
            <div className="flex justify-center gap-4 text-xs mt-2">
              {deviceData.map((item) => (
                <div key={item.name} className="flex items-center gap-1.5">
                  <div className="size-3 rounded" style={{ backgroundColor: item.color }} />
                  <span style={{ color: item.color }}>{item.name}</span>
                  <span className="text-muted-foreground">{item.value}%</span>
                </div>
              ))}
            </div>
            <Button variant="outline" className="w-full mt-4">
              View detailed report
            </Button>
          </CardContent>
        </Card>

        {/* Traffic Sources */}
        <Card>
          <CardHeader>
            <CardTitle>Traffic Sources</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-3 gap-2 border-b pb-2 text-xs font-medium text-muted-foreground">
              <div>Channel</div>
              <div className="text-right">Traffic</div>
              <div className="text-right">%</div>
            </div>
            <div className="divide-y max-h-[180px] overflow-y-auto">
              {trafficSourcesData.map((item) => (
                <div key={item.channel} className="grid grid-cols-3 gap-2 py-2 items-center text-sm">
                  <div className="truncate">{item.channel}</div>
                  <div className="text-right">{item.traffic.toLocaleString()}</div>
                  <div className="text-right">
                    <span className={`text-xs font-medium ${item.change.startsWith("+") ? "text-green-600" : "text-red-500"}`}>
                      {item.change}
                    </span>
                  </div>
                </div>
              ))}
            </div>
            <Button variant="outline" className="w-full mt-4">
              View detailed report
            </Button>
          </CardContent>
        </Card>

        {/* Geographic Distribution */}
        <Card>
          <CardHeader>
            <CardTitle>Geographic Distribution</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-3 gap-2 border-b pb-2 text-xs font-medium text-muted-foreground">
              <div>Country</div>
              <div className="text-right">Traffic</div>
              <div className="text-right">%</div>
            </div>
            <div className="divide-y max-h-[180px] overflow-y-auto">
              {geoDistributionData.map((item) => (
                <div key={item.country} className="grid grid-cols-3 gap-2 py-2 items-center text-sm">
                  <div className="truncate">{item.country}</div>
                  <div className="text-right">{item.traffic.toLocaleString()}</div>
                  <div className="text-right">
                    <span className={`text-xs font-medium ${item.change.startsWith("+") ? "text-green-600" : "text-red-500"}`}>
                      {item.change}
                    </span>
                  </div>
                </div>
              ))}
            </div>
            <Button variant="outline" className="w-full mt-4">
              View detailed report
            </Button>
          </CardContent>
        </Card>
      </div>

      {/* Bottom Tabs Section */}
      <Tabs defaultValue="engagement" className="space-y-4">
        <TabsList className="bg-transparent border-b rounded-none w-full justify-start gap-4 px-0 h-auto pb-0">
          <TabsTrigger
            value="engagement"
            className="rounded-none border-b-2 border-transparent data-[state=active]:border-violet-600 data-[state=active]:bg-transparent data-[state=active]:shadow-none px-0 pb-3"
          >
            Engagement Metrics
          </TabsTrigger>
          <TabsTrigger
            value="pages"
            className="rounded-none border-b-2 border-transparent data-[state=active]:border-violet-600 data-[state=active]:bg-transparent data-[state=active]:shadow-none px-0 pb-3"
          >
            Top Pages
          </TabsTrigger>
          <TabsTrigger
            value="referral"
            className="rounded-none border-b-2 border-transparent data-[state=active]:border-violet-600 data-[state=active]:bg-transparent data-[state=active]:shadow-none px-0 pb-3"
          >
            Referral Traffic
          </TabsTrigger>
        </TabsList>

        <TabsContent value="engagement" className="space-y-4">
          <Card>
            <CardHeader>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <BarChart3 className="size-5 text-muted-foreground" />
                  <CardTitle>User Engagement Trends</CardTitle>
                </div>
                <Button variant="outline" size="sm">Export</Button>
              </div>
            </CardHeader>
            <CardContent className="space-y-6">
              {/* Stats Row */}
              <div className="grid gap-4 md:grid-cols-3">
                <Card className="border-dashed">
                  <CardContent className="pt-4">
                    <div className="text-sm text-muted-foreground">Bounce Rate</div>
                    <div className="text-3xl font-bold text-violet-600 mt-1">32%</div>
                    <p className="text-sm text-red-500 mt-1">-3% from last period</p>
                  </CardContent>
                </Card>

                <Card className="border-dashed">
                  <CardContent className="pt-4">
                    <div className="text-sm text-muted-foreground">Avg. Time on Page</div>
                    <div className="text-3xl font-bold text-violet-600 mt-1">2.7 min</div>
                    <p className="text-sm text-green-600 mt-1">+0.2 min from last period</p>
                  </CardContent>
                </Card>

                <Card className="border-dashed">
                  <CardContent className="pt-4">
                    <div className="text-sm text-muted-foreground">Pages Per Session</div>
                    <div className="text-3xl font-bold text-violet-600 mt-1">4.0</div>
                    <p className="text-sm text-green-600 mt-1">+0.3 from last period</p>
                  </CardContent>
                </Card>
              </div>

              {/* Engagement Chart */}
              <ChartContainer config={chartConfig} className="h-[300px] w-full">
                <LineChart data={engagementTrendsData} margin={{ top: 20, right: 30, left: 20, bottom: 20 }}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#d1d5db" />
                  <XAxis
                    dataKey="month"
                    tickLine={false}
                    axisLine={false}
                    tick={{ fill: "var(--color-muted-foreground)", fontSize: 11 }}
                    tickFormatter={(value) => value.replace(" 2025", "")}
                  />
                  <YAxis
                    tickLine={false}
                    axisLine={false}
                    tick={{ fill: "var(--color-muted-foreground)", fontSize: 12 }}
                    tickFormatter={(value) => `${value / 1000}k`}
                  />
                  <ChartTooltip content={<ChartTooltipContent indicator="dot" />} />
                  <Line type="monotone" dataKey="bounceRate" stroke="#f97316" strokeWidth={2} dot={{ fill: "#f97316", r: 3 }} name="Bounce Rate (%)" />
                  <Line type="monotone" dataKey="avgTime" stroke="#22c55e" strokeWidth={2} dot={{ fill: "#22c55e", r: 3 }} name="Avg. Time on Page (min)" />
                  <Line type="monotone" dataKey="pagesPerSession" stroke="#3b82f6" strokeWidth={2} dot={{ fill: "#3b82f6", r: 3 }} name="Pages Per Session" />
                </LineChart>
              </ChartContainer>
              <div className="flex justify-center gap-6 text-sm">
                <div className="flex items-center gap-2">
                  <div className="size-3 rounded-full bg-orange-500" />
                  <span className="text-muted-foreground">Bounce Rate (%)</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="size-3 rounded-full bg-green-500" />
                  <span className="text-muted-foreground">Avg. Time on Page (min)</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="size-3 rounded-full bg-blue-500" />
                  <span className="text-muted-foreground">Pages Per Session</span>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="pages">
          <Card>
            <CardHeader>
              <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                <div className="flex items-center gap-2">
                  <BarChart3 className="size-5 text-muted-foreground" />
                  <CardTitle>Most Visited Pages</CardTitle>
                </div>
                <div className="flex items-center gap-2">
                  <div className="relative w-full sm:w-64">
                    <Input placeholder="Search pages..." className="pr-10" />
                    <Search className="absolute right-3 top-1/2 -translate-y-1/2 size-4 text-muted-foreground" />
                  </div>
                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <Button variant="outline" size="sm">
                        Export
                        <ChevronDown className="ml-1 size-4" />
                      </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="end">
                      <DropdownMenuItem>Export CSV</DropdownMenuItem>
                      <DropdownMenuItem>Export PDF</DropdownMenuItem>
                      <DropdownMenuItem>Export Excel</DropdownMenuItem>
                    </DropdownMenuContent>
                  </DropdownMenu>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Page URL</TableHead>
                    <TableHead className="text-right">Traffic</TableHead>
                    <TableHead className="text-right">% of Total</TableHead>
                    <TableHead className="text-right">Avg. Time</TableHead>
                    <TableHead className="text-right">Bounce Rate</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {mostVisitedPagesData.map((page) => (
                    <TableRow key={page.url}>
                      <TableCell className="font-medium text-violet-600">{page.url}</TableCell>
                      <TableCell className="text-right">{page.traffic.toLocaleString()}</TableCell>
                      <TableCell className="text-right">{page.percentTotal}</TableCell>
                      <TableCell className="text-right">{page.avgTime}</TableCell>
                      <TableCell className="text-right">{page.bounceRate}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
              <div className="flex justify-center mt-6">
                <Button variant="outline">Load more pages</Button>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="referral">
          <Card>
            <CardHeader>
              <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                <CardTitle>Top Referral Sources</CardTitle>
                <div className="flex items-center gap-2">
                  <div className="relative w-full sm:w-64">
                    <Input placeholder="Search pages..." className="pr-10" />
                    <Search className="absolute right-3 top-1/2 -translate-y-1/2 size-4 text-muted-foreground" />
                  </div>
                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <Button variant="outline" size="sm">
                        Export
                        <ChevronDown className="ml-1 size-4" />
                      </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="end">
                      <DropdownMenuItem>Export CSV</DropdownMenuItem>
                      <DropdownMenuItem>Export PDF</DropdownMenuItem>
                      <DropdownMenuItem>Export Excel</DropdownMenuItem>
                    </DropdownMenuContent>
                  </DropdownMenu>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Domain</TableHead>
                    <TableHead className="text-right">Referrals</TableHead>
                    <TableHead className="text-right">% of Total</TableHead>
                    <TableHead className="text-right">Change</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {topReferralSourcesData.map((source) => (
                    <TableRow key={source.domain}>
                      <TableCell className="font-medium">{source.domain}</TableCell>
                      <TableCell className="text-right">{source.referrals.toLocaleString()}</TableCell>
                      <TableCell className="text-right">{source.percentTotal}</TableCell>
                      <TableCell className="text-right">
                        <span className={source.change.startsWith("+") ? "text-green-600" : "text-red-500"}>
                          {source.change}
                        </span>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
              <div className="flex justify-center mt-6">
                <Button variant="outline">View all referral sources</Button>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
}

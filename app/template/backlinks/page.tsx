"use client";

import {
  Search,
  SlidersHorizontal,
  Download,
  TrendingUp,
  TrendingDown,
  PieChart,
  ExternalLink,
  ChevronDown
} from "lucide-react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  ResponsiveContainer,
  PieChart as RechartsPieChart,
  Pie,
  Cell,
  ScatterChart,
  Scatter,
  ZAxis
} from "recharts";

import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
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

// Backlink Growth bubble data - creating a scatter plot appearance
const backlinkGrowthData: Array<{ month: string; x: number; totalBacklinks: number; newBacklinks: number; lostBacklinks: number }> = [];
const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

// Generate bubble data for each month
months.forEach((month, monthIndex) => {
  // Create multiple data points per month to simulate bubble chart
  for (let i = 0; i < 8; i++) {
    backlinkGrowthData.push({
      month,
      x: monthIndex * 10 + Math.random() * 8,
      totalBacklinks: Math.floor(Math.random() * 3000) + 500,
      newBacklinks: Math.floor(Math.random() * 2000) + 200,
      lostBacklinks: Math.floor(Math.random() * 1500) + 100
    });
  }
});

// Market Share Analysis data
const marketShareData = [
  { range: "0-20", value: 8 },
  { range: "21-40", value: 32 },
  { range: "41-60", value: 22 },
  { range: "61-80", value: 15 },
  { range: "81-100", value: 5 }
];

// Backlink Types pie data
const backlinkTypesData = [
  { name: "Do-follow", value: 75, count: 49740, color: "#8b5cf6" },
  { name: "No-follow", value: 25, count: 8640, color: "#fbbf24" }
];

const chartConfig = {
  totalBacklinks: { label: "Total Backlinks", color: "#8b5cf6" },
  newBacklinks: { label: "New Backlinks", color: "#c4b5fd" },
  lostBacklinks: { label: "Lost Backlinks", color: "#6d28d9" }
};

export default function BacklinkCheckerPage() {
  return (
    <div className="space-y-6">
      {/* Page Header */}
      <div className="flex flex-col gap-4 lg:flex-row lg:items-start lg:justify-between">
        <div>
          <h1 className="text-2xl font-bold tracking-tight">Backlink Checker</h1>
          <p className="text-muted-foreground">
            Analyze your backlink profile and track link building performance
          </p>
        </div>
        <div className="flex items-center gap-2">
          <Button variant="outline" size="sm" className="gap-2">
            <SlidersHorizontal className="size-4" />
            Filter
          </Button>
          <Button variant="outline" size="sm" className="gap-2">
            <Download className="size-4" />
            Export
          </Button>
        </div>
      </div>

      {/* Check Backlinks Card */}
      <Card>
        <CardHeader>
          <CardTitle>Check Backlinks</CardTitle>
          <CardDescription>Enter a domain to analyze its backlink profile</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="flex flex-col gap-3 sm:flex-row">
            <div className="relative flex-1">
              <Input placeholder="example.com" className="pr-10" />
              <Search className="absolute right-3 top-1/2 -translate-y-1/2 size-4 text-muted-foreground" />
            </div>
            <Button className="bg-violet-600 hover:bg-violet-700 text-white">Analyze</Button>
          </div>
        </CardContent>
      </Card>

      {/* Tabs */}
      <Tabs defaultValue="overview" className="space-y-6">
        <TabsList className="bg-transparent border-b rounded-none w-full justify-start gap-4 px-0 h-auto pb-0">
          <TabsTrigger
            value="overview"
            className="rounded-none border-b-2 border-transparent data-[state=active]:border-violet-600 data-[state=active]:bg-transparent data-[state=active]:shadow-none px-0 pb-3"
          >
            Overview
          </TabsTrigger>
          <TabsTrigger
            value="list"
            className="rounded-none border-b-2 border-transparent data-[state=active]:border-violet-600 data-[state=active]:bg-transparent data-[state=active]:shadow-none px-0 pb-3"
          >
            Backlinks List
          </TabsTrigger>
          <TabsTrigger
            value="domains"
            className="rounded-none border-b-2 border-transparent data-[state=active]:border-violet-600 data-[state=active]:bg-transparent data-[state=active]:shadow-none px-0 pb-3"
          >
            Referring Domains
          </TabsTrigger>
          <TabsTrigger
            value="anchor"
            className="rounded-none border-b-2 border-transparent data-[state=active]:border-violet-600 data-[state=active]:bg-transparent data-[state=active]:shadow-none px-0 pb-3"
          >
            Anchor Text
          </TabsTrigger>
        </TabsList>

        <TabsContent value="overview" className="space-y-6">
          {/* Stat Cards */}
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            <Card>
              <CardContent className="pt-6">
                <div className="flex items-start justify-between">
                  <div>
                    <div className="text-sm text-muted-foreground">Total Backlinks</div>
                    <div className="text-3xl font-bold text-violet-600 mt-1">2,120</div>
                    <p className="text-sm text-red-500 mt-1">-180 in the last month</p>
                  </div>
                  <div className="text-red-200">
                    <TrendingDown className="size-8" />
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="pt-6">
                <div className="flex items-start justify-between">
                  <div>
                    <div className="text-sm text-muted-foreground">Referring Domains</div>
                    <div className="text-3xl font-bold text-violet-600 mt-1">348</div>
                    <p className="text-sm text-green-600 mt-1">+24 in the last month</p>
                  </div>
                  <div className="text-green-200">
                    <TrendingUp className="size-8" />
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="pt-6">
                <div>
                  <div className="text-sm text-muted-foreground">Domain Rating</div>
                  <div className="text-3xl font-bold text-violet-600 mt-1">76/100</div>
                  <div className="w-full h-2 bg-gray-200 rounded-full mt-3 overflow-hidden">
                    <div className="h-full bg-gradient-to-r from-violet-400 to-pink-400 rounded-full" style={{ width: "76%" }} />
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="pt-6">
                <div className="flex items-start justify-between">
                  <div>
                    <div className="text-sm text-muted-foreground">DoFollow Ratio</div>
                    <div className="flex items-center gap-2 mt-1">
                      <span className="text-3xl font-bold text-violet-600">65%</span>
                      <span className="text-xs bg-green-100 text-green-700 px-1.5 py-0.5 rounded">+19</span>
                    </div>
                    <p className="text-sm text-muted-foreground mt-1">1,378 DoFollow links</p>
                  </div>
                  <div className="text-green-200">
                    <TrendingUp className="size-8" />
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Backlink Growth Chart */}
          <Card>
            <CardHeader>
              <div className="flex items-center justify-between">
                <CardTitle>Backlink Growth</CardTitle>
                <div className="flex items-center gap-2">
                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <Button variant="outline" size="sm">
                        This Years
                        <ChevronDown className="ml-1 size-4" />
                      </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent>
                      <DropdownMenuItem>This Year</DropdownMenuItem>
                      <DropdownMenuItem>Last Year</DropdownMenuItem>
                    </DropdownMenuContent>
                  </DropdownMenu>
                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <Button variant="outline" size="sm">
                        Export
                        <ChevronDown className="ml-1 size-4" />
                      </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent>
                      <DropdownMenuItem>Export CSV</DropdownMenuItem>
                      <DropdownMenuItem>Export PDF</DropdownMenuItem>
                    </DropdownMenuContent>
                  </DropdownMenu>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <div className="h-[380px] w-full relative">
                <div className="absolute inset-0 flex">
                  {/* Y-axis labels */}
                  <div className="flex flex-col justify-between text-xs text-muted-foreground pr-2 py-1">
                    <span>8k</span>
                    <span>7k</span>
                    <span>6k</span>
                    <span>5k</span>
                    <span>4k</span>
                    <span>3k</span>
                    <span>2k</span>
                    <span>1k</span>
                    <span>0</span>
                  </div>

                  {/* Chart area with grid */}
                  <div className="flex-1 relative border border-dashed border-violet-300 rounded">
                    {/* Horizontal grid lines */}
                    {[1, 2, 3, 4, 5, 6, 7].map((i) => (
                      <div
                        key={`h-${i}`}
                        className="absolute w-full border-t border-dashed border-violet-200"
                        style={{ top: `${(i / 8) * 100}%` }}
                      />
                    ))}

                    {/* May highlight background */}
                    <div
                      className="absolute h-full bg-violet-100/50"
                      style={{ left: `${(4 / 12) * 100}%`, width: `${(1 / 12) * 100}%` }}
                    />

                    {/* Month columns with bubbles */}
                    {months.map((month, monthIndex) => {
                      // Generate many bubbles for each column
                      const columnX = ((monthIndex + 0.5) / 12) * 100;

                      // Create dense bubble patterns - different for each month
                      const bubbleRows = [];
                      const rowCount = 18; // Number of vertical positions

                      for (let row = 0; row < rowCount; row++) {
                        const yPos = (row / rowCount) * 100;
                        // Vary number of bubbles per row (1-3)
                        const bubblesInRow = ((monthIndex + row) % 3) + 1;

                        for (let b = 0; b < bubblesInRow; b++) {
                          const xOffset = (b - (bubblesInRow - 1) / 2) * 2.5;
                          // Determine color based on position and variation
                          const colorSeed = (monthIndex * 7 + row * 3 + b) % 10;
                          let colorClass = "bg-violet-300"; // Light - Total
                          if (colorSeed < 3) colorClass = "bg-violet-500"; // Medium - New
                          if (colorSeed >= 7) colorClass = "bg-violet-700"; // Dark - Lost

                          // Vary bubble sizes
                          const sizeSeed = (monthIndex + row + b) % 5;
                          const sizes = [8, 10, 12, 14, 16];
                          const size = sizes[sizeSeed];

                          bubbleRows.push({
                            x: columnX + xOffset,
                            y: yPos + 2,
                            size,
                            colorClass,
                            key: `${monthIndex}-${row}-${b}`
                          });
                        }
                      }

                      return bubbleRows.map((bubble) => (
                        <div
                          key={bubble.key}
                          className={`absolute rounded-full ${bubble.colorClass}`}
                          style={{
                            width: `${bubble.size}px`,
                            height: `${bubble.size}px`,
                            bottom: `${bubble.y}%`,
                            left: `${bubble.x}%`,
                            transform: 'translate(-50%, 50%)'
                          }}
                        />
                      ));
                    })}
                  </div>
                </div>

                {/* X-axis labels */}
                <div className="flex justify-between mt-2 ml-7">
                  {months.map((month) => (
                    <span
                      key={month}
                      className={`text-xs ${month === "May" ? "text-violet-600 font-medium" : "text-muted-foreground"}`}
                      style={{ width: `${100/12}%`, textAlign: 'center' }}
                    >
                      {month}
                    </span>
                  ))}
                </div>
              </div>
              <div className="flex justify-center gap-6 mt-4 text-sm">
                <div className="flex items-center gap-2">
                  <div className="size-3 rounded-full bg-violet-300" />
                  <span className="text-muted-foreground">Total Backlinks</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="size-3 rounded-full bg-violet-500" />
                  <span className="text-muted-foreground">New Backlinks</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="size-3 rounded-full bg-violet-700" />
                  <span className="text-muted-foreground">Lost Backlinks</span>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Two Cards Row */}
          <div className="grid gap-6 lg:grid-cols-2">
            {/* Market Share Analysis */}
            <Card>
              <CardHeader className="pb-2">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <PieChart className="size-5 text-muted-foreground" />
                    <CardTitle className="text-base">Market Share Analysis</CardTitle>
                  </div>
                  <span className="text-sm text-muted-foreground">Organic search visibility in your niche</span>
                </div>
              </CardHeader>
              <CardContent>
                <ChartContainer config={chartConfig} className="h-[280px] w-full">
                  <BarChart
                    data={marketShareData}
                    layout="vertical"
                    margin={{ top: 10, right: 20, left: -20, bottom: 10 }}
                  >
                    <CartesianGrid strokeDasharray="3 3" stroke="#d1d5db" horizontal={true} vertical={false} />
                    <XAxis
                      type="number"
                      tickLine={false}
                      axisLine={false}
                      tick={{ fill: "var(--color-muted-foreground)", fontSize: 11 }}
                      ticks={[0, 10, 20, 30, 40]}
                    />
                    <YAxis
                      type="category"
                      dataKey="range"
                      tickLine={false}
                      axisLine={false}
                      tick={{ fill: "var(--color-muted-foreground)", fontSize: 11 }}
                    />
                    <ChartTooltip cursor={false} content={<ChartTooltipContent />} />
                    <Bar dataKey="value" radius={[0, 4, 4, 0]}>
                      {marketShareData.map((entry, index) => (
                        <Cell
                          key={`cell-${index}`}
                          fill={["#c4b5fd", "#a78bfa", "#8b5cf6", "#7c3aed", "#6d28d9"][index]}
                        />
                      ))}
                    </Bar>
                  </BarChart>
                </ChartContainer>
              </CardContent>
            </Card>

            {/* Backlink Types */}
            <Card>
              <CardHeader className="pb-2">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <ExternalLink className="size-5 text-muted-foreground" />
                    <div>
                      <CardTitle className="text-base">Backlink Types</CardTitle>
                      <CardDescription>Distribution of DoFollow vs NoFollow links</CardDescription>
                    </div>
                  </div>
                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <Button variant="outline" size="sm">
                        This Years
                        <ChevronDown className="ml-1 size-4" />
                      </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent>
                      <DropdownMenuItem>This Year</DropdownMenuItem>
                      <DropdownMenuItem>Last Year</DropdownMenuItem>
                    </DropdownMenuContent>
                  </DropdownMenu>
                </div>
              </CardHeader>
              <CardContent>
                <div className="relative h-[280px]">
                  {/* 25% Label with connection line - Top Left */}
                  <div className="absolute top-4 left-4 text-sm">
                    <div className="font-semibold">25%</div>
                    <div className="text-muted-foreground">8640 No-follow</div>
                    {/* Connection line */}
                    <svg className="absolute top-2 left-20 w-16 h-16" viewBox="0 0 60 60">
                      <circle cx="4" cy="4" r="4" fill="#fbbf24" />
                      <line x1="8" y1="8" x2="55" y2="50" stroke="#fbbf24" strokeWidth="2" />
                    </svg>
                  </div>

                  {/* Pie Chart */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="relative w-[220px] h-[220px]">
                      <ResponsiveContainer width="100%" height="100%">
                        <RechartsPieChart>
                          <Pie
                            data={backlinkTypesData}
                            cx="50%"
                            cy="50%"
                            innerRadius={70}
                            outerRadius={105}
                            paddingAngle={2}
                            dataKey="value"
                            startAngle={90}
                            endAngle={-270}
                          >
                            {backlinkTypesData.map((entry, index) => (
                              <Cell key={`cell-${index}`} fill={entry.color} />
                            ))}
                          </Pie>
                        </RechartsPieChart>
                      </ResponsiveContainer>
                      <div className="absolute inset-0 flex items-center justify-center">
                        <div className="text-center">
                          <div className="text-2xl font-bold">58380</div>
                          <div className="text-sm text-muted-foreground">Total Backlink</div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* 75% Label with connection line - Bottom Right */}
                  <div className="absolute bottom-4 right-4 text-sm text-right">
                    {/* Connection line */}
                    <svg className="absolute -top-12 right-20 w-16 h-16" viewBox="0 0 60 60">
                      <line x1="5" y1="10" x2="52" y2="52" stroke="#8b5cf6" strokeWidth="2" />
                      <circle cx="56" cy="56" r="4" fill="#8b5cf6" />
                    </svg>
                    <div className="font-semibold">75%</div>
                    <div className="text-muted-foreground">49740 Do-follow</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="list" className="space-y-6">
          {/* All Backlinks */}
          <Card>
            <CardHeader>
              <CardTitle>All Backlinks</CardTitle>
              <CardDescription>Complete list of backlinks pointing to yourdomain.com</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b text-muted-foreground">
                      <th className="text-left font-medium py-3 pr-4">Source Domain</th>
                      <th className="text-left font-medium py-3 pr-4">Link URL</th>
                      <th className="text-left font-medium py-3 pr-4">Anchor Text</th>
                      <th className="text-left font-medium py-3 pr-4">Domain Authority</th>
                      <th className="text-left font-medium py-3 pr-4">Link Type</th>
                      <th className="text-left font-medium py-3 pr-4">First Seen</th>
                      <th className="text-left font-medium py-3"></th>
                    </tr>
                  </thead>
                  <tbody>
                    {[
                      { domain: "blog.example.com", url: "https://blog.example.com/best-seo-tools", anchor: "best SEO tools", da: 72, type: "DoFollow", date: "2023-10-15" },
                      { domain: "news.tech.com", url: "https://news.tech.com/seo-industry-news", anchor: "analytics platform", da: 85, type: "DoFollow", date: "2023-09-22" },
                      { domain: "marketingmag.org", url: "https://marketingmag.org/top-analytics-tools", anchor: "top analytics tools", da: 78, type: "DoFollow", date: "2023-11-05" },
                      { domain: "webtools.review", url: "https://webtools.review/analytics-comparison", anchor: "click here", da: 63, type: "NoFollow", date: "2023-12-18" },
                      { domain: "digitaltrends.com", url: "https://digitaltrends.com/best-software-2023", anchor: "AnalyticsPro", da: 89, type: "DoFollow", date: "2023-12-18" },
                      { domain: "digitaltrends.com", url: "https://digitaltrends.com/best-software-2023", anchor: "AnalyticsPro", da: 89, type: "DoFollow", date: "2023-12-18" },
                      { domain: "techradar.com", url: "https://techradar.com/best-software-2023", anchor: "DesignMaster", da: 63, type: "DoFollow", date: "2023-11-30" },
                      { domain: "pcmag.com", url: "https://pcmag.com/best-software-2023", anchor: "CodeGuru", da: 52, type: "NoFollow", date: "2023-10-25" },
                      { domain: "cnet.com", url: "https://cnet.com/best-software-2023", anchor: "DataViz", da: 90, type: "DoFollow", date: "2023-09-15" },
                      { domain: "engadget.com", url: "https://engadget.com/best-software-2023", anchor: "ProjectPilot", da: 78, type: "NoFollow", date: "2023-08-05" },
                    ].map((backlink, i) => (
                      <tr key={i} className="border-b last:border-0">
                        <td className="py-3 pr-4">{backlink.domain}</td>
                        <td className="py-3 pr-4 text-muted-foreground max-w-[280px] truncate">{backlink.url}</td>
                        <td className="py-3 pr-4 text-muted-foreground">"{backlink.anchor}"</td>
                        <td className="py-3 pr-4">
                          <div className="flex items-center gap-2">
                            <span>{backlink.da}</span>
                            <div className="w-16 h-2 bg-gray-200 rounded-full overflow-hidden">
                              <div
                                className={`h-full rounded-full ${backlink.da >= 80 ? "bg-green-500" : backlink.da >= 60 ? "bg-yellow-500" : "bg-red-500"}`}
                                style={{ width: `${backlink.da}%` }}
                              />
                            </div>
                          </div>
                        </td>
                        <td className="py-3 pr-4">
                          <span className={`text-xs ${backlink.type === "DoFollow" ? "text-violet-600" : "text-gray-500"}`}>
                            {backlink.type}
                          </span>
                        </td>
                        <td className="py-3 pr-4 text-muted-foreground">{backlink.date}</td>
                        <td className="py-3">
                          <ExternalLink className="size-4 text-muted-foreground" />
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <div className="flex items-center justify-between mt-4 pt-4 border-t">
                <span className="text-sm text-muted-foreground">Showing 1-10 of 2,120 backlinks</span>
                <div className="flex gap-2">
                  <Button variant="outline" size="sm">Previous</Button>
                  <Button variant="outline" size="sm">Next</Button>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* New Backlinks */}
          <Card>
            <CardHeader>
              <CardTitle>New Backlinks</CardTitle>
              <CardDescription>Links discovered in the last 30 days</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b text-muted-foreground">
                      <th className="text-left font-medium py-3 pr-4">Source Domain</th>
                      <th className="text-left font-medium py-3 pr-4">Anchor Text</th>
                      <th className="text-left font-medium py-3 pr-4">Domain Authority</th>
                      <th className="text-left font-medium py-3 pr-4">Link Type</th>
                      <th className="text-left font-medium py-3 pr-4">Discovered</th>
                      <th className="text-left font-medium py-3"></th>
                    </tr>
                  </thead>
                  <tbody>
                    {[
                      { domain: "blog.example.com", anchor: "best SEO tools", da: 72, type: "DoFollow", date: "2023-10-15" },
                      { domain: "webmaster.example.net", anchor: "top website analyzers", da: 85, type: "NoFollow", date: "2023-10-10" },
                      { domain: "analytics.example.org", anchor: "keyword research tools", da: 65, type: "DoFollow", date: "2023-10-12" },
                      { domain: "marketplace.example.co", anchor: "link building strategies", da: 90, type: "DoFollow", date: "2023-10-05" },
                      { domain: "socialmedia.example.edu", anchor: "social media analytics", da: 88, type: "DoFollow", date: "2023-10-01" },
                    ].map((backlink, i) => (
                      <tr key={i} className="border-b last:border-0">
                        <td className="py-3 pr-4">{backlink.domain}</td>
                        <td className="py-3 pr-4 text-muted-foreground">"{backlink.anchor}"</td>
                        <td className="py-3 pr-4">
                          <div className="flex items-center gap-2">
                            <span>{backlink.da}</span>
                            <div className="w-16 h-2 bg-gray-200 rounded-full overflow-hidden">
                              <div
                                className={`h-full rounded-full ${backlink.da >= 80 ? "bg-green-500" : backlink.da >= 60 ? "bg-yellow-500" : "bg-red-500"}`}
                                style={{ width: `${backlink.da}%` }}
                              />
                            </div>
                          </div>
                        </td>
                        <td className="py-3 pr-4">
                          <span className={`text-xs ${backlink.type === "DoFollow" ? "text-violet-600" : "text-gray-500"}`}>
                            {backlink.type}
                          </span>
                        </td>
                        <td className="py-3 pr-4 text-muted-foreground">{backlink.date}</td>
                        <td className="py-3">
                          <ExternalLink className="size-4 text-muted-foreground" />
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </CardContent>
          </Card>

          {/* Lost Backlinks */}
          <Card>
            <CardHeader>
              <CardTitle>Lost Backlinks</CardTitle>
              <CardDescription>Links that no longer point to your site</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b text-muted-foreground">
                      <th className="text-left font-medium py-3 pr-4">Source Domain</th>
                      <th className="text-left font-medium py-3 pr-4">Anchor Text</th>
                      <th className="text-left font-medium py-3 pr-4">Domain Authority</th>
                      <th className="text-left font-medium py-3 pr-4">Link Type</th>
                      <th className="text-left font-medium py-3 pr-4">Lost Date</th>
                      <th className="text-left font-medium py-3">Action</th>
                    </tr>
                  </thead>
                  <tbody>
                    {[
                      { domain: "blog.example.com", anchor: "best SEO tools", da: 72, type: "DoFollow", date: "2023-10-15" },
                      { domain: "blog.example.com", anchor: "social media analytics", da: 78, type: "NoFollow", date: "2023-10-08" },
                      { domain: "blog.example.com", anchor: "top digital marketing strategies", da: 85, type: "NoFollow", date: "2023-10-12" },
                      { domain: "blog.example.com", anchor: "content marketing tips", da: 90, type: "DoFollow", date: "2023-10-10" },
                    ].map((backlink, i) => (
                      <tr key={i} className="border-b last:border-0">
                        <td className="py-3 pr-4">{backlink.domain}</td>
                        <td className="py-3 pr-4 text-muted-foreground">"{backlink.anchor}"</td>
                        <td className="py-3 pr-4">
                          <div className="flex items-center gap-2">
                            <span>{backlink.da}</span>
                            <div className="w-16 h-2 bg-gray-200 rounded-full overflow-hidden">
                              <div
                                className={`h-full rounded-full ${backlink.da >= 80 ? "bg-green-500" : backlink.da >= 60 ? "bg-yellow-500" : "bg-red-500"}`}
                                style={{ width: `${backlink.da}%` }}
                              />
                            </div>
                          </div>
                        </td>
                        <td className="py-3 pr-4">
                          <span className={`text-xs ${backlink.type === "DoFollow" ? "text-violet-600" : "text-gray-500"}`}>
                            {backlink.type}
                          </span>
                        </td>
                        <td className="py-3 pr-4 text-muted-foreground">{backlink.date}</td>
                        <td className="py-3">
                          <Button variant="outline" size="sm">Recover</Button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="domains" className="space-y-6">
          {/* Health Score Card */}
          <Card>
            <CardContent className="pt-6">
              <div className="text-sm text-muted-foreground mb-2">Health Score</div>
              <div className="flex items-center gap-2 mb-3">
                <span className="text-4xl font-bold text-violet-600">82/100</span>
                <span className="text-xs bg-green-100 text-green-700 px-1.5 py-0.5 rounded">+4</span>
              </div>
              <div className="w-full h-3 bg-gray-200 rounded-full overflow-hidden mb-3">
                <div className="h-full flex">
                  <div className="bg-green-500 rounded-l-full" style={{ width: "82%" }} />
                  <div className="bg-red-400 rounded-r-full" style={{ width: "18%" }} />
                </div>
              </div>
              <p className="text-sm text-muted-foreground">
                Your backlink profile is healthy with mostly high-quality, relevant links. There are a few toxic links that should be addressed.
              </p>
            </CardContent>
          </Card>

          {/* Metrics Cards */}
          <div className="grid gap-4 md:grid-cols-3">
            <Card>
              <CardContent className="pt-6">
                <div className="text-sm text-muted-foreground mb-2">Spam Score</div>
                <div className="text-2xl font-bold text-green-500 mb-3">Very Low</div>
                <div className="w-full h-2 bg-gray-200 rounded-full overflow-hidden mb-3">
                  <div className="h-full flex">
                    <div className="bg-green-500 rounded-l-full" style={{ width: "70%" }} />
                    <div className="bg-orange-400 rounded-r-full" style={{ width: "30%" }} />
                  </div>
                </div>
                <p className="text-sm text-muted-foreground">
                  Only 3% of your backlinks come from potentially spammy domains
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="pt-6">
                <div className="text-sm text-muted-foreground mb-2">Link Relevance</div>
                <div className="text-2xl font-bold text-green-500 mb-3">High</div>
                <div className="w-full h-2 bg-gray-200 rounded-full overflow-hidden mb-3">
                  <div className="bg-green-500 rounded-full" style={{ width: "85%" }} />
                </div>
                <p className="text-sm text-muted-foreground">
                  85% of your backlinks are from topically relevant websites
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="pt-6">
                <div className="text-sm text-muted-foreground mb-2">Domain Diversity</div>
                <div className="text-2xl font-bold text-green-500 mb-3">Excellent</div>
                <div className="w-full h-2 bg-gray-200 rounded-full overflow-hidden mb-3">
                  <div className="bg-green-500 rounded-full" style={{ width: "90%" }} />
                </div>
                <p className="text-sm text-muted-foreground">
                  Your backlink profile includes a diverse range of domains
                </p>
              </CardContent>
            </Card>
          </div>

          {/* Top Referring Domains */}
          <Card>
            <CardHeader>
              <CardTitle>Top Referring Domains</CardTitle>
              <CardDescription>Domains sending the most traffic through backlinks</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b text-muted-foreground">
                      <th className="text-left font-medium py-3 pr-4">Source Domain</th>
                      <th className="text-left font-medium py-3 pr-4">Link URL</th>
                      <th className="text-left font-medium py-3 pr-4">Domain Authority</th>
                      <th className="text-left font-medium py-3 pr-4">Estimated Traffic</th>
                      <th className="text-left font-medium py-3 pr-4">Link Type</th>
                      <th className="text-left font-medium py-3">First Seen</th>
                    </tr>
                  </thead>
                  <tbody>
                    {[
                      { domain: "techcrunch.com", links: 10, da: 65, traffic: "6,500", type: "Medium", date: "2023-09-20" },
                      { domain: "digitaltrends.com", links: 12, da: 72, traffic: "7,800", type: "High", date: "2023-09-22" },
                      { domain: "wired.com", links: 15, da: 80, traffic: "10,000", type: "High", date: "2023-09-19" },
                      { domain: "theverge.com", links: 8, da: 55, traffic: "4,200", type: "Low", date: "2023-09-18" },
                      { domain: "engadget.com", links: 11, da: 36, traffic: "8,300", type: "High", date: "2023-09-17" },
                      { domain: "cnet.com", links: 14, da: 78, traffic: "9,500", type: "High", date: "2023-09-16" },
                      { domain: "tomshardware.com", links: 9, da: 60, traffic: "5,600", type: "Medium", date: "2023-09-15" },
                      { domain: "gizmodo.com", links: 13, da: 75, traffic: "7,900", type: "High", date: "2023-09-14" },
                    ].map((item, i) => (
                      <tr key={i} className="border-b last:border-0">
                        <td className="py-3 pr-4">{item.domain}</td>
                        <td className="py-3 pr-4 text-muted-foreground">{item.links}</td>
                        <td className="py-3 pr-4">
                          <div className="flex items-center gap-2">
                            <span>{item.da}</span>
                            <div className="w-16 h-2 bg-gray-200 rounded-full overflow-hidden">
                              <div
                                className={`h-full rounded-full ${item.da >= 70 ? "bg-green-500" : item.da >= 50 ? "bg-yellow-500" : "bg-red-500"}`}
                                style={{ width: `${item.da}%` }}
                              />
                            </div>
                          </div>
                        </td>
                        <td className="py-3 pr-4">{item.traffic}</td>
                        <td className="py-3 pr-4">
                          <span className={`text-xs px-2 py-1 rounded ${
                            item.type === "High" ? "bg-green-100 text-green-700" :
                            item.type === "Medium" ? "bg-yellow-100 text-yellow-700" :
                            "bg-gray-100 text-gray-600"
                          }`}>
                            {item.type}
                          </span>
                        </td>
                        <td className="py-3 text-muted-foreground">{item.date}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="anchor" className="space-y-6">
          {/* Distribution and Analysis */}
          <div className="grid gap-6 lg:grid-cols-2">
            {/* Anchor Text Distribution */}
            <Card>
              <CardHeader>
                <CardTitle>Anchor Text Distribution</CardTitle>
                <CardDescription>Analysis of the anchor text used in your backlinks</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="relative h-[280px] flex items-center justify-center">
                  {/* Bubble visualization - clustered together */}
                  <div className="relative w-[320px] h-[250px]">
                    {/* Brand Name - 45% - Large violet bubble */}
                    <div className="absolute left-0 top-[20px] w-[180px] h-[180px] rounded-full bg-violet-200 flex items-center justify-center">
                      <span className="text-4xl font-bold text-violet-600">45%</span>
                    </div>
                    {/* Topic - 25% - Pink bubble */}
                    <div className="absolute right-0 top-0 w-[110px] h-[110px] rounded-full bg-pink-300 flex items-center justify-center">
                      <span className="text-xl font-bold text-pink-700">25%</span>
                    </div>
                    {/* Generic - 18% - Blue bubble */}
                    <div className="absolute right-[30px] bottom-0 w-[90px] h-[90px] rounded-full bg-blue-300 flex items-center justify-center">
                      <span className="text-lg font-bold text-blue-700">18%</span>
                    </div>
                    {/* URL - 12% - Yellow bubble */}
                    <div className="absolute right-0 bottom-[50px] w-[60px] h-[60px] rounded-full bg-yellow-300 flex items-center justify-center">
                      <span className="text-sm font-bold text-yellow-700">12%</span>
                    </div>
                  </div>
                </div>
                {/* Legend */}
                <div className="flex justify-center gap-6 mt-4 text-sm">
                  <div className="flex items-center gap-2">
                    <div className="size-3 rounded-full bg-violet-200" />
                    <span className="text-muted-foreground">Brand Name</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="size-3 rounded-full bg-pink-300" />
                    <span className="text-muted-foreground">Topic</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="size-3 rounded-full bg-blue-300" />
                    <span className="text-muted-foreground">Generic</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="size-3 rounded-full bg-yellow-300" />
                    <span className="text-muted-foreground">URL</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Anchor Text Analysis */}
            <Card>
              <CardHeader>
                <CardTitle>Anchor Text Analysis</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center justify-between p-4 border rounded-lg">
                  <div>
                    <div className="font-medium">Brand Name Anchors</div>
                    <div className="text-sm text-muted-foreground">45% of your anchors are brand related</div>
                  </div>
                  <span className="text-xs px-3 py-1 rounded-full bg-green-100 text-green-700">Healthy</span>
                </div>
                <div className="flex items-center justify-between p-4 border rounded-lg">
                  <div>
                    <div className="font-medium">Topic/Keyword Anchors</div>
                    <div className="text-sm text-muted-foreground">25% of anchors are topic/keyword related</div>
                  </div>
                  <span className="text-xs px-3 py-1 rounded-full bg-green-100 text-green-700">Healthy</span>
                </div>
                <div className="flex items-center justify-between p-4 border rounded-lg">
                  <div>
                    <div className="font-medium">Generic/Navigational Anchors</div>
                    <div className="text-sm text-muted-foreground">18% are generic terms like "click here"</div>
                  </div>
                  <span className="text-xs px-3 py-1 rounded-full bg-yellow-100 text-yellow-700">Moderate</span>
                </div>
                <div className="flex items-center justify-between p-4 border rounded-lg">
                  <div>
                    <div className="font-medium">URL Anchors</div>
                    <div className="text-sm text-muted-foreground">12% use your full or partial URL as anchor</div>
                  </div>
                  <span className="text-xs px-3 py-1 rounded-full bg-green-100 text-green-700">Healthy</span>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Top Anchor Texts */}
          <Card>
            <CardHeader>
              <CardTitle>Top Anchor Texts</CardTitle>
              <CardDescription>Most common anchor texts in your backlink profile</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b text-muted-foreground">
                      <th className="text-left font-medium py-3 pr-4">Anchor Text</th>
                      <th className="text-left font-medium py-3 pr-4">Type</th>
                      <th className="text-left font-medium py-3 pr-4">Occurrences</th>
                      <th className="text-left font-medium py-3 pr-4">% of Total</th>
                      <th className="text-left font-medium py-3 pr-4">Average DA</th>
                      <th className="text-left font-medium py-3">Landing Page</th>
                    </tr>
                  </thead>
                  <tbody>
                    {[
                      { anchor: "AnalyticsPro", type: "Brand", occurrences: 345, percent: "16.3%", da: 74, page: "/" },
                      { anchor: "analytics platform", type: "Topical", occurrences: 218, percent: "10.3%", da: 7.68, page: "/platform" },
                      { anchor: "MarketInsights", type: "Brand", occurrences: 520, percent: "22.7%", da: 89, page: "/" },
                      { anchor: "analytics platform", type: "URL", occurrences: 218, percent: "10.3%", da: 7.68, page: "/platform" },
                      { anchor: "SEO analytics", type: "Generic", occurrences: 15, percent: "8.7%", da: 71, page: "/features" },
                      { anchor: "TrendMapper", type: "Brand", occurrences: 290, percent: "12.4%", da: 58, page: "/platform" },
                      { anchor: "SEO analytics", type: "Generic", occurrences: 15, percent: "8.7%", da: 71, page: "/features" },
                      { anchor: "DataVision", type: "Brand", occurrences: 410, percent: "19.5%", da: 65, page: "/" },
                      { anchor: "InsightSphere", type: "Brand", occurrences: 610, percent: "25.1%", da: 97, page: "/features" },
                    ].map((item, i) => (
                      <tr key={i} className="border-b last:border-0">
                        <td className="py-3 pr-4">"{item.anchor}"</td>
                        <td className="py-3 pr-4">
                          <span className={`text-xs px-2 py-1 rounded border ${
                            item.type === "Brand" ? "border-green-300 text-green-700" :
                            item.type === "Topical" ? "border-orange-300 text-orange-600" :
                            item.type === "URL" ? "border-gray-300 text-gray-600" :
                            "border-green-300 text-green-700"
                          }`}>
                            {item.type}
                          </span>
                        </td>
                        <td className="py-3 pr-4">{item.occurrences}</td>
                        <td className="py-3 pr-4">{item.percent}</td>
                        <td className="py-3 pr-4">{item.da}</td>
                        <td className="py-3 text-muted-foreground">{item.page}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
}

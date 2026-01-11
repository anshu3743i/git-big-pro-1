"use client";

import {
  Globe,
  Search,
  ChevronDown,
  Monitor,
  Calendar,
  Settings2,
  TrendingUp,
  ExternalLink,
  Filter
} from "lucide-react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  ResponsiveContainer,
  BarChart,
  Bar,
  ComposedChart,
  Cell,
  Tooltip,
  ReferenceLine
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

// Organic Search Trend data
const organicSearchTrendData = [
  { month: "Jan", keywords: 3200, traffic: -5500 },
  { month: "Feb", keywords: 3800, traffic: -4800 },
  { month: "Mar", keywords: 4500, traffic: -3500 },
  { month: "Apr", keywords: 5200, traffic: -2800 },
  { month: "May", keywords: 4800, traffic: 200 },
  { month: "Jun", keywords: 5800, traffic: -4200 },
  { month: "Jul", keywords: 6200, traffic: -5800 },
  { month: "Aug", keywords: 7200, traffic: -6500 },
  { month: "Sep", keywords: 6800, traffic: -5200 },
  { month: "Oct", keywords: 7500, traffic: -6800 },
  { month: "Nov", keywords: 8200, traffic: -7200 },
  { month: "Dec", keywords: 7800, traffic: -6000 }
];

const trendChartConfig = {
  keywords: { label: "Keywords", color: "#8b5cf6" },
  traffic: { label: "Traffic", color: "#22c55e" }
};

// Keyword Positions data
const keywordPositionsData = [
  { range: "1-3", value: 3575, percent: "17.7%" },
  { range: "4-10", value: 6328, percent: "7%" },
  { range: "11-20", value: 5607, percent: "11.2%" },
  { range: "21-50", value: 8002, percent: "22.2%" },
  { range: "51-100", value: 6293, percent: "22.2%" },
  { range: "101-150", value: 7200, percent: "19.7%" }
];

// Search Intent Distribution data
const searchIntentData = [
  { label: "Commercial", value: 18690, percent: "33.7%", color: "#a78bfa" },
  { label: "Informational", value: 26803, percent: "48%", color: "#8b5cf6" },
  { label: "Navigational", value: 5420, percent: "9.3%", color: "#6366f1" },
  { label: "Transactional", value: 3670, percent: "18.2%", color: "#4f46e5" }
];

// Bubble chart data for search intent
const intentBubbleData = [
  { period: "Jan-Feb", commercial: 6500, informational: 7200, navigational: 5800, transactional: 4200 },
  { period: "Mar-Apr", commercial: 6800, informational: 7500, navigational: 6200, transactional: 4800 },
  { period: "May-Jun", commercial: 5200, informational: 6800, navigational: 5400, transactional: 3800 },
  { period: "Jul-Aug", commercial: 7200, informational: 8000, navigational: 6500, transactional: 5200 },
  { period: "Sep-Oct", commercial: 6000, informational: 7000, navigational: 5800, transactional: 4500 },
  { period: "Nov-Dec", commercial: 7500, informational: 7800, navigational: 6800, transactional: 5500 }
];

// Top Competitors data
const competitorsData = [
  { domain: "competitor1.com", keywords: 6240, commonKeywords: 2850, traffic: 168500 },
  { domain: "competitor2.com", keywords: 5820, commonKeywords: 2650, traffic: 154200 },
  { domain: "competitor3.com", keywords: 4980, commonKeywords: 1980, traffic: 132800 },
  { domain: "competitor4.com", keywords: 4120, commonKeywords: 1540, traffic: 108600 },
  { domain: "competitor5.com", keywords: 3162, commonKeywords: 860, traffic: 98620 }
];

// Top Organic Keywords data
const topOrganicKeywordsData = [
  { keyword: "premium software tools", position: "#1", volume: "22,800", traffic: "18,200", kd: 78, cpc: "$5.40", url: "/product/premium-softw...", change: null },
  { keyword: "industry trends 2025", position: "#1", volume: "18,500", traffic: "15,700", kd: 65, cpc: "$3.80", url: "/blog/industry-trends-20...", change: "+2" },
  { keyword: "enterprise solutions comparison", position: "#3", volume: "12,200", traffic: "8,400", kd: 82, cpc: "$7.60", url: "/solutions/enterprise...", change: "-1" },
  { keyword: "enterprise solutions comparison", position: "#2", volume: "9,800", traffic: "7,400", kd: 71, cpc: "$4.60", url: "/resources/ultimate-guide", change: "+1" },
  { keyword: "expert team software development", position: "#4", volume: "8,500", traffic: "5,200", kd: 75, cpc: "$6.10", url: "/about/team", change: "-2" },
  { keyword: "software pricing comparison", position: "#5", volume: "7,800", traffic: "4,300", kd: 68, cpc: "$5.80", url: "/pricing", change: "+3" },
  { keyword: "digital transformation strategy", position: "#6", volume: "7,200", traffic: "3,800", kd: 79, cpc: "$8.20", url: "/solutions/transformation", change: null },
  { keyword: "software integration guide", position: "#7", volume: "6,500", traffic: "3,100", kd: 72, cpc: "$5.20", url: "/resources/integrations", change: "+4" }
];

export default function OrganicResearchPage() {
  return (
    <div className="space-y-6">
      {/* Page Header */}
      <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
        <div>
          <h1 className="text-2xl font-bold tracking-tight">Organic Research</h1>
          <div className="flex items-center gap-1 text-sm text-violet-600">
            example.com
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
            <div className="flex items-start justify-between">
              <div>
                <div className="text-sm text-muted-foreground">Organic Keywords</div>
                <div className="text-3xl font-bold text-violet-600 mt-1">5,580</div>
                <p className="text-sm text-green-600 mt-1">+160 from last month</p>
              </div>
              <div className="text-violet-200">
                <TrendingUp className="size-8" />
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="pt-6">
            <div className="flex items-start justify-between">
              <div>
                <div className="text-sm text-muted-foreground">Organic Traffic</div>
                <div className="text-3xl font-bold text-violet-600 mt-1">125K</div>
                <p className="text-sm text-green-600 mt-1">+5.8% from last month</p>
              </div>
              <div className="text-violet-200">
                <TrendingUp className="size-8" />
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="pt-6">
            <div className="flex items-start justify-between">
              <div>
                <div className="text-sm text-muted-foreground">Traffic Cost</div>
                <div className="text-3xl font-bold text-violet-600 mt-1">$362K</div>
                <p className="text-xs text-muted-foreground mt-1">Estimated monthly cost if using paid search</p>
              </div>
              <div className="text-violet-200">
                <TrendingUp className="size-8" />
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="pt-6">
            <div className="flex items-start justify-between">
              <div>
                <div className="text-sm text-muted-foreground">Top 10 Positions</div>
                <div className="text-3xl font-bold text-violet-600 mt-1">820</div>
                <p className="text-sm text-green-600 mt-1">+35 from last month</p>
                <p className="text-xs text-muted-foreground">14.7% of total keywords</p>
              </div>
              <div className="text-violet-200">
                <TrendingUp className="size-8" />
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Organic Search Trend Chart */}
      <Card>
        <CardHeader>
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Search className="size-5 text-muted-foreground" />
              <CardTitle>Organic Search Trend</CardTitle>
            </div>
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
                  <DropdownMenuItem>Last 2 Years</DropdownMenuItem>
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
          <ChartContainer config={trendChartConfig} className="h-[350px] w-full">
            <ComposedChart data={organicSearchTrendData} margin={{ top: 20, right: 30, left: 20, bottom: 20 }}>
              <CartesianGrid strokeDasharray="3 3" stroke="#d1d5db" />
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
                tickFormatter={(value) => `${Math.abs(value / 1000)}k`}
                domain={[-8000, 8000]}
              />
              <ReferenceLine y={0} stroke="#d1d5db" />
              <ChartTooltip
                content={({ active, payload, label }) => {
                  if (active && payload && payload.length) {
                    return (
                      <div className="rounded-lg border bg-background p-3 shadow-sm">
                        <div className="font-medium mb-2">{label}</div>
                        <div className="text-xs text-muted-foreground mb-1">2025</div>
                        {payload.map((entry, index) => (
                          <div key={index} className="flex items-center gap-2 text-sm">
                            <div className="size-2 rounded-full" style={{ backgroundColor: entry.color }} />
                            <span className="text-muted-foreground">{entry.name}:</span>
                            <span className="font-medium">{Math.abs(Number(entry.value)).toLocaleString()}</span>
                          </div>
                        ))}
                      </div>
                    );
                  }
                  return null;
                }}
              />
              <Bar dataKey="keywords" fill="#c4b5fd" radius={[4, 4, 0, 0]} name="Keywords" />
              <Bar dataKey="traffic" fill="#86efac" radius={[0, 0, 4, 4]} name="Traffic" />
              <Line
                type="monotone"
                dataKey="keywords"
                stroke="#22c55e"
                strokeWidth={2}
                dot={{ fill: "#22c55e", r: 4 }}
                name="Keywords Trend"
              />
            </ComposedChart>
          </ChartContainer>
          <div className="flex justify-center gap-6 mt-4 text-sm">
            <div className="flex items-center gap-2">
              <div className="size-3 rounded-full bg-violet-400" />
              <span className="text-muted-foreground">Keywords</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="size-3 rounded-full bg-green-400" />
              <span className="text-muted-foreground">Traffic</span>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Two Cards Row */}
      <div className="grid gap-4 lg:grid-cols-2">
        {/* Keyword Positions */}
        <Card>
          <CardHeader>
            <CardTitle>Keyword Positions</CardTitle>
          </CardHeader>
          <CardContent>
            <ChartContainer config={{ value: { label: "Keywords", color: "#8b5cf6" } }} className="h-[250px] w-full">
              <BarChart data={keywordPositionsData} margin={{ top: 20, right: 20, left: 20, bottom: 20 }}>
                <CartesianGrid strokeDasharray="3 3" stroke="#d1d5db" vertical={false} />
                <XAxis
                  dataKey="range"
                  tickLine={false}
                  axisLine={false}
                  tick={{ fill: "var(--color-muted-foreground)", fontSize: 11 }}
                />
                <YAxis
                  tickLine={false}
                  axisLine={false}
                  tick={{ fill: "var(--color-muted-foreground)", fontSize: 11 }}
                  tickFormatter={(value) => `${value / 1000}k`}
                />
                <ChartTooltip cursor={false} content={<ChartTooltipContent />} />
                <Bar dataKey="value" fill="#c4b5fd" radius={[4, 4, 0, 0]} activeBar={{ fill: "#8b5cf6" }} />
              </BarChart>
            </ChartContainer>
            <div className="grid grid-cols-4 gap-2 mt-4">
              <div className="text-center p-2 bg-violet-50 dark:bg-violet-950/30 rounded">
                <div className="text-xs text-muted-foreground">Pos. 1-3</div>
                <div className="text-lg font-bold text-violet-600">3575</div>
                <div className="text-xs text-muted-foreground">17.7%</div>
              </div>
              <div className="text-center p-2 bg-violet-50 dark:bg-violet-950/30 rounded">
                <div className="text-xs text-muted-foreground">Pos. 4-10</div>
                <div className="text-lg font-bold text-violet-600">6328</div>
                <div className="text-xs text-muted-foreground">7%</div>
              </div>
              <div className="text-center p-2 bg-violet-50 dark:bg-violet-950/30 rounded">
                <div className="text-xs text-muted-foreground">Pos. 11-20</div>
                <div className="text-lg font-bold text-violet-600">5607</div>
                <div className="text-xs text-muted-foreground">11.2%</div>
              </div>
              <div className="text-center p-2 bg-violet-50 dark:bg-violet-950/30 rounded">
                <div className="text-xs text-muted-foreground">Pos. 21-50</div>
                <div className="text-lg font-bold text-violet-600">8002</div>
                <div className="text-xs text-muted-foreground">22.2%</div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Search Intent Distribution */}
        <Card>
          <CardHeader>
            <CardTitle>Search Intent Distribution</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="h-[250px] w-full relative">
              {/* Bubble visualization */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="grid grid-cols-6 gap-2 w-full h-full p-4">
                  {intentBubbleData.map((period, periodIndex) => (
                    <div key={period.period} className="flex flex-col items-center justify-end gap-1 h-full">
                      <div className="flex flex-col gap-1 items-center flex-1 justify-end">
                        <div
                          className="rounded-full bg-violet-300"
                          style={{ width: `${Math.min(period.commercial / 200, 40)}px`, height: `${Math.min(period.commercial / 200, 40)}px` }}
                        />
                        <div
                          className="rounded-full bg-violet-500"
                          style={{ width: `${Math.min(period.informational / 200, 45)}px`, height: `${Math.min(period.informational / 200, 45)}px` }}
                        />
                        <div
                          className="rounded-full bg-indigo-500"
                          style={{ width: `${Math.min(period.navigational / 200, 35)}px`, height: `${Math.min(period.navigational / 200, 35)}px` }}
                        />
                        <div
                          className="rounded-full bg-indigo-700"
                          style={{ width: `${Math.min(period.transactional / 200, 30)}px`, height: `${Math.min(period.transactional / 200, 30)}px` }}
                        />
                      </div>
                      <span className="text-xs text-muted-foreground mt-2">{period.period}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            <div className="grid grid-cols-4 gap-2 mt-4">
              <div className="text-center p-2 bg-violet-100 dark:bg-violet-950/50 rounded">
                <div className="text-xs text-muted-foreground">Commercial</div>
                <div className="text-lg font-bold text-violet-600">18690</div>
                <div className="text-xs text-muted-foreground">33.7%</div>
              </div>
              <div className="text-center p-2 bg-violet-200 dark:bg-violet-900/50 rounded">
                <div className="text-xs text-muted-foreground">Informational</div>
                <div className="text-lg font-bold text-violet-700">26803</div>
                <div className="text-xs text-muted-foreground">48%</div>
              </div>
              <div className="text-center p-2 bg-indigo-100 dark:bg-indigo-950/50 rounded">
                <div className="text-xs text-muted-foreground">Navigational</div>
                <div className="text-lg font-bold text-indigo-600">5420</div>
                <div className="text-xs text-muted-foreground">9.3%</div>
              </div>
              <div className="text-center p-2 bg-indigo-200 dark:bg-indigo-900/50 rounded">
                <div className="text-xs text-muted-foreground">Transactional</div>
                <div className="text-lg font-bold text-indigo-700">3670</div>
                <div className="text-xs text-muted-foreground">18.2%</div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Top Competitors Table */}
      <Card>
        <CardHeader>
          <div className="flex items-center justify-between">
            <CardTitle>Top Competitors in Organic Search</CardTitle>
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
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Domain</TableHead>
                <TableHead className="text-right">Keywords</TableHead>
                <TableHead className="text-right">Common Keywords</TableHead>
                <TableHead className="text-right">Traffic</TableHead>
                <TableHead className="text-right">Action</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {competitorsData.map((competitor) => (
                <TableRow key={competitor.domain}>
                  <TableCell>
                    <div className="flex items-center gap-2">
                      <span className="font-medium">{competitor.domain}</span>
                      <ExternalLink className="size-3 text-muted-foreground" />
                    </div>
                  </TableCell>
                  <TableCell className="text-right">{competitor.keywords.toLocaleString()}</TableCell>
                  <TableCell className="text-right">{competitor.commonKeywords.toLocaleString()}</TableCell>
                  <TableCell className="text-right">{competitor.traffic.toLocaleString()}</TableCell>
                  <TableCell className="text-right">
                    <Button variant="outline" size="sm">Compare</Button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>

      {/* Keywords Tabs Section */}
      <Tabs defaultValue="top" className="space-y-4">
        <TabsList className="bg-transparent border-b rounded-none w-full justify-start gap-4 px-0 h-auto pb-0">
          <TabsTrigger
            value="top"
            className="rounded-none border-b-2 border-transparent data-[state=active]:border-violet-600 data-[state=active]:bg-transparent data-[state=active]:shadow-none px-0 pb-3"
          >
            Top Keywords
          </TabsTrigger>
          <TabsTrigger
            value="new"
            className="rounded-none border-b-2 border-transparent data-[state=active]:border-violet-600 data-[state=active]:bg-transparent data-[state=active]:shadow-none px-0 pb-3"
          >
            New Keywords
          </TabsTrigger>
          <TabsTrigger
            value="lost"
            className="rounded-none border-b-2 border-transparent data-[state=active]:border-violet-600 data-[state=active]:bg-transparent data-[state=active]:shadow-none px-0 pb-3"
          >
            Lost Keywords
          </TabsTrigger>
          <TabsTrigger
            value="improvements"
            className="rounded-none border-b-2 border-transparent data-[state=active]:border-violet-600 data-[state=active]:bg-transparent data-[state=active]:shadow-none px-0 pb-3"
          >
            Position Improvements
          </TabsTrigger>
          <TabsTrigger
            value="deteriorations"
            className="rounded-none border-b-2 border-transparent data-[state=active]:border-violet-600 data-[state=active]:bg-transparent data-[state=active]:shadow-none px-0 pb-3"
          >
            Position Deteriorations
          </TabsTrigger>
        </TabsList>

        <TabsContent value="top">
          <Card>
            <CardHeader>
              <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                <CardTitle>Top Organic Keywords</CardTitle>
                <div className="flex items-center gap-2">
                  <Button variant="outline" size="sm">
                    <Filter className="mr-1 size-4" />
                    Filter
                  </Button>
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
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Keyword</TableHead>
                    <TableHead className="text-center">Position</TableHead>
                    <TableHead className="text-right">Volume</TableHead>
                    <TableHead className="text-right">Traffic</TableHead>
                    <TableHead className="text-center">KD</TableHead>
                    <TableHead className="text-right">CPC</TableHead>
                    <TableHead>URL</TableHead>
                    <TableHead className="text-right">Change</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {topOrganicKeywordsData.map((keyword, index) => (
                    <TableRow key={index}>
                      <TableCell className="font-medium">{keyword.keyword}</TableCell>
                      <TableCell className="text-center">
                        <span className="bg-violet-100 dark:bg-violet-950 text-violet-700 dark:text-violet-300 px-2 py-1 rounded text-sm font-medium">
                          {keyword.position}
                        </span>
                      </TableCell>
                      <TableCell className="text-right">{keyword.volume}</TableCell>
                      <TableCell className="text-right">{keyword.traffic}</TableCell>
                      <TableCell className="text-center">
                        <div className="flex items-center justify-center gap-2">
                          <div className="w-12 h-2 bg-gray-200 rounded-full overflow-hidden">
                            <div
                              className="h-full bg-violet-600 rounded-full"
                              style={{ width: `${keyword.kd}%` }}
                            />
                          </div>
                          <span className="text-sm">{keyword.kd}</span>
                        </div>
                      </TableCell>
                      <TableCell className="text-right">{keyword.cpc}</TableCell>
                      <TableCell>
                        <div className="flex items-center gap-1 text-violet-600">
                          <span className="truncate max-w-[150px]">{keyword.url}</span>
                          <ExternalLink className="size-3 flex-shrink-0" />
                        </div>
                      </TableCell>
                      <TableCell className="text-right">
                        {keyword.change ? (
                          <span className={`flex items-center justify-end gap-1 ${keyword.change.startsWith("+") ? "text-green-600" : "text-red-500"}`}>
                            <TrendingUp className={`size-3 ${keyword.change.startsWith("-") ? "rotate-180" : ""}`} />
                            {keyword.change}
                          </span>
                        ) : (
                          <span className="text-muted-foreground">-</span>
                        )}
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
              <div className="flex justify-center mt-6">
                <Button variant="outline">View all keywords</Button>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="new">
          <Card>
            <CardContent className="pt-6">
              <div className="flex flex-col items-center justify-center py-12 text-center">
                <TrendingUp className="size-12 text-muted-foreground mb-4" />
                <h3 className="text-lg font-semibold">New Keywords</h3>
                <p className="text-sm text-muted-foreground mt-2">
                  New keywords analysis coming soon.
                </p>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="lost">
          <Card>
            <CardContent className="pt-6">
              <div className="flex flex-col items-center justify-center py-12 text-center">
                <TrendingUp className="size-12 text-muted-foreground mb-4 rotate-180" />
                <h3 className="text-lg font-semibold">Lost Keywords</h3>
                <p className="text-sm text-muted-foreground mt-2">
                  Lost keywords analysis coming soon.
                </p>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="improvements">
          <Card>
            <CardContent className="pt-6">
              <div className="flex flex-col items-center justify-center py-12 text-center">
                <TrendingUp className="size-12 text-green-500 mb-4" />
                <h3 className="text-lg font-semibold">Position Improvements</h3>
                <p className="text-sm text-muted-foreground mt-2">
                  Position improvements analysis coming soon.
                </p>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="deteriorations">
          <Card>
            <CardContent className="pt-6">
              <div className="flex flex-col items-center justify-center py-12 text-center">
                <TrendingUp className="size-12 text-red-500 mb-4 rotate-180" />
                <h3 className="text-lg font-semibold">Position Deteriorations</h3>
                <p className="text-sm text-muted-foreground mt-2">
                  Position deteriorations analysis coming soon.
                </p>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
}

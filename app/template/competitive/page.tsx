"use client";

import {
  Search,
  SlidersHorizontal,
  Download,
  X,
  PieChart,
  TrendingUp,
  ExternalLink
} from "lucide-react";
import {
  BarChart,
  Bar,
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  ResponsiveContainer,
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis,
  Radar
} from "recharts";

import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow
} from "@/components/ui/table";
import { ChartContainer, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart";

// Selected competitors
const selectedCompetitors = ["competitor1.com", "competitor2.com", "competitor3.com"];

// Market Share Analysis data
const marketShareData = [
  { name: "competitor2.com", bar1: 24, bar2: 18, bar3: 14 },
  { name: "competitor4.com", bar1: 15, bar2: 13, bar3: 22 },
  { name: "Others", bar1: 5, bar2: 4, bar3: 3 }
];

// Organic Traffic Trend data
const organicTrafficTrendData = [
  { month: "Jan", yourdomain: 8000, competitor1: 7500, competitor2: 6500, competitor3: 5000, competitor4: 4500 },
  { month: "Feb", yourdomain: 9500, competitor1: 8000, competitor2: 7000, competitor3: 5500, competitor4: 5000 },
  { month: "Mar", yourdomain: 11000, competitor1: 14000, competitor2: 8500, competitor3: 6000, competitor4: 5500 },
  { month: "Apr", yourdomain: 12500, competitor1: 15500, competitor2: 9000, competitor3: 7000, competitor4: 6000 },
  { month: "May", yourdomain: 14000, competitor1: 13000, competitor2: 10000, competitor3: 8000, competitor4: 7000 },
  { month: "Jun", yourdomain: 15500, competitor1: 14500, competitor2: 11000, competitor3: 9000, competitor4: 8000 },
  { month: "Jul", yourdomain: 17000, competitor1: 16000, competitor2: 12000, competitor3: 10000, competitor4: 8500 },
  { month: "Aug", yourdomain: 19000, competitor1: 17500, competitor2: 13000, competitor3: 11000, competitor4: 9000 },
  { month: "Sep", yourdomain: 21000, competitor1: 18000, competitor2: 14000, competitor3: 10500, competitor4: 9500 },
  { month: "Oct", yourdomain: 23000, competitor1: 19000, competitor2: 12500, competitor3: 11500, competitor4: 10000 },
  { month: "Nov", yourdomain: 25000, competitor1: 20000, competitor2: 11000, competitor3: 10000, competitor4: 9500 },
  { month: "Dec", yourdomain: 27000, competitor1: 21000, competitor2: 10500, competitor3: 9500, competitor4: 9000 }
];

const trafficChartConfig = {
  yourdomain: { label: "yourdomain.com", color: "#8b5cf6" },
  competitor1: { label: "competitor1.com", color: "#ef4444" },
  competitor2: { label: "competitor2.com", color: "#3b82f6" },
  competitor3: { label: "competitor3.com", color: "#22c55e" },
  competitor4: { label: "competitor4.com", color: "#eab308" }
};

const marketShareChartConfig = {
  bar1: { label: "Share 1", color: "#c4b5fd" },
  bar2: { label: "Share 2", color: "#a78bfa" },
  bar3: { label: "Share 3", color: "#8b5cf6" }
};

// Performance Radar data
const performanceRadarData = [
  { metric: "Traffic", yourdomain: 80, xavify: 65, crips: 45, xary: 55 },
  { metric: "Keywords", yourdomain: 70, xavify: 55, crips: 60, xary: 50 },
  { metric: "Backlinks", yourdomain: 60, xavify: 75, crips: 40, xary: 65 },
  { metric: "Content", yourdomain: 55, xavify: 45, crips: 70, xary: 60 }
];

// Content Length Analysis data
const contentLengthData = [
  { page: "Homepage", yourdomain: 120, xavify: 95, crips: 85, xary: 110 },
  { page: "Product Pages", yourdomain: 389, xavify: 348, crips: 256, xary: 287 },
  { page: "Category Pages", yourdomain: 180, xavify: 220, crips: 150, xary: 195 }
];

// Comprehensive Metrics Overview data
const comprehensiveMetricsData = [
  { indicator: "Domain Strength", mywebsite: "12,500", rival1: "12,500", rival2: "12,500", rival3: "12,500" },
  { indicator: "Keyword Count", mywebsite: "8,300", rival1: "8,300", rival2: "8,300", rival3: "8,300" },
  { indicator: "Leading Keywords", mywebsite: "17,000", rival1: "17,000", rival2: "17,000", rival3: "17,000" },
  { indicator: "Inbound Links", mywebsite: "5,200", rival1: "5,200", rival2: "5,200", rival3: "5,200" },
  { indicator: "Linking Domains", mywebsite: "9,000", rival1: "9,000", rival2: "9,000", rival3: "9,000" },
  { indicator: "Pages Indexed", mywebsite: "9,000", rival1: "9,000", rival2: "9,000", rival3: "9,000" },
  { indicator: "Load Time (seconds)", mywebsite: "2.5", rival1: "2.5", rival2: "2.5", rival3: "2.5" }
];

const radarChartConfig = {
  yourdomain: { label: "yourdomain.com", color: "#8b5cf6" },
  xavify: { label: "xavify.com", color: "#ef4444" },
  crips: { label: "crips.com", color: "#3b82f6" },
  xary: { label: "xary.com", color: "#22c55e" }
};

// Competitive Keyword Insights data
const competitiveKeywordInsightsData = [
  { keyword: "enterprise seo platform", topCompetitor: "competitor1.com", theirPosition: "#1", volume: "9,500", opportunity: 70, yourPosition: "#12" },
  { keyword: "seo competitor analysis", topCompetitor: "competitor2.com", theirPosition: "#2", volume: "5,600", opportunity: 65, yourPosition: "#13" },
  { keyword: "seo reporting dashboard", topCompetitor: "competitor3.com", theirPosition: "#7", volume: "12,000", opportunity: 85, yourPosition: "#3" },
  { keyword: "best backlink tracker", topCompetitor: "competitor4.com", theirPosition: "#4", volume: "3,800", opportunity: 60, yourPosition: "#8" },
  { keyword: "website keyword ranking", topCompetitor: "competitor5.com", theirPosition: "#10", volume: "6,700", opportunity: 40, yourPosition: "#76" }
];

// Trending Keywords data
const trendingKeywordsData = [
  { searchTerm: "digital marketing tools", searchVolume: "10,200", yourRanking: "#15", leadingCompetitor: "rival1.com", competitorRanking: "#3", discrepancy: "#2" },
  { searchTerm: "website monitoring software", searchVolume: "6,800", yourRanking: "#14", leadingCompetitor: "rival2.com", competitorRanking: "#4", discrepancy: "#3" },
  { searchTerm: "website monitoring software", searchVolume: "15,000", yourRanking: "#5", leadingCompetitor: "rival2.com", competitorRanking: "#9", discrepancy: "#9" },
  { searchTerm: "website monitoring software", searchVolume: "4,500", yourRanking: "#11", leadingCompetitor: "rival2.com", competitorRanking: "#6", discrepancy: "#6" },
  { searchTerm: "website monitoring software", searchVolume: "7,200", yourRanking: "#80", leadingCompetitor: "rival2.com", competitorRanking: "#12", discrepancy: "#12" }
];

// Competitor Keywords Analysis data
const competitorKeywordsData = [
  {
    competitor: "competitor1.com",
    keywords: [
      { keyword: "seo software", position: "#1", volume: "8,500", yourPosition: "#15" },
      { keyword: "keyword research tool", position: "#2", volume: "3,600", yourPosition: "#11" },
      { keyword: "backlink analyzer", position: "#1", volume: "9,500", yourPosition: "#25" }
    ]
  },
  {
    competitor: "competitor2.com",
    keywords: [
      { keyword: "content marketing", position: "#3", volume: "5,200", yourPosition: "#10" },
      { keyword: "link building", position: "#2", volume: "6,800", yourPosition: "#12" },
      { keyword: "seo software", position: "#1", volume: "8,500", yourPosition: "#15" }
    ]
  },
  {
    competitor: "competitor3.com",
    keywords: [
      { keyword: "email marketing", position: "#5", volume: "4,000", yourPosition: "#8" },
      { keyword: "social media", position: "#4", volume: "7,300", yourPosition: "#9" },
      { keyword: "content writing", position: "#3", volume: "5,800", yourPosition: "#11" }
    ]
  }
];

// Competitor Overview data
const competitorOverviewData = [
  { domain: "competitor1.com", trafficShare: "28%", organicKeywords: "16,300", backlinks: "56,350", domainAuthority: 76, trendUp: true },
  { domain: "competitor2.com", trafficShare: "22%", organicKeywords: "17,500", backlinks: "42,000", domainAuthority: 72, trendUp: true },
  { domain: "competitor3.com", trafficShare: "18%", organicKeywords: "900", backlinks: "34,260", domainAuthority: 68, trendUp: false },
  { domain: "competitor4.com", trafficShare: "15%", organicKeywords: "30,200", backlinks: "26,200", domainAuthority: 64, trendUp: false },
  { domain: "competitor5.com", trafficShare: "12%", organicKeywords: "19,009", backlinks: "18,290", domainAuthority: 61, trendUp: true },
  { domain: "competitor6.com", trafficShare: "20%", organicKeywords: "13,201", backlinks: "31,500", domainAuthority: 72, trendUp: false }
];

// Mini trend line component
function TrendLine({ isUp }: { isUp: boolean }) {
  return (
    <svg width="60" height="24" viewBox="0 0 60 24" className="inline-block">
      {isUp ? (
        <path
          d="M0 20 Q15 18, 20 14 T40 10 T60 4"
          fill="none"
          stroke="#22c55e"
          strokeWidth="2"
          strokeLinecap="round"
        />
      ) : (
        <path
          d="M0 4 Q15 8, 20 12 T40 16 T60 20"
          fill="none"
          stroke="#ef4444"
          strokeWidth="2"
          strokeLinecap="round"
        />
      )}
    </svg>
  );
}

export default function CompetitiveAnalysisPage() {
  return (
    <div className="space-y-6">
      {/* Page Header */}
      <div className="flex flex-col gap-4 lg:flex-row lg:items-start lg:justify-between">
        <div>
          <h1 className="text-2xl font-bold tracking-tight">Competitive Analysis</h1>
          <p className="text-muted-foreground">
            Analyze your competitors and identify opportunities
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

      {/* Analyze Competitors Card */}
      <Card>
        <CardHeader>
          <CardTitle>Analyze Competitors</CardTitle>
          <CardDescription>Enter your domain and add competitors to compare</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="flex flex-col gap-3 sm:flex-row">
            <div className="relative flex-1">
              <Input placeholder="example.com" className="pr-10" />
              <Search className="absolute right-3 top-1/2 -translate-y-1/2 size-4 text-muted-foreground" />
            </div>
            <Button className="bg-violet-600 hover:bg-violet-700 text-white">Analyze</Button>
          </div>
          <div>
            <p className="text-sm text-muted-foreground mb-2">Selected competitors:</p>
            <div className="flex flex-wrap gap-2">
              {selectedCompetitors.map((competitor) => (
                <Badge key={competitor} variant="secondary" className="gap-1 pr-1">
                  {competitor}
                  <button className="ml-1 rounded-full hover:bg-muted p-0.5">
                    <X className="size-3" />
                  </button>
                </Badge>
              ))}
            </div>
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
            value="keywords"
            className="rounded-none border-b-2 border-transparent data-[state=active]:border-violet-600 data-[state=active]:bg-transparent data-[state=active]:shadow-none px-0 pb-3"
          >
            Keyword Analysis
          </TabsTrigger>
          <TabsTrigger
            value="content"
            className="rounded-none border-b-2 border-transparent data-[state=active]:border-violet-600 data-[state=active]:bg-transparent data-[state=active]:shadow-none px-0 pb-3"
          >
            Content Gaps
          </TabsTrigger>
          <TabsTrigger
            value="metrics"
            className="rounded-none border-b-2 border-transparent data-[state=active]:border-violet-600 data-[state=active]:bg-transparent data-[state=active]:shadow-none px-0 pb-3"
          >
            Metrics Comparison
          </TabsTrigger>
        </TabsList>

        <TabsContent value="overview" className="space-y-6">
          {/* Two Charts Row */}
          <div className="grid gap-6 lg:grid-cols-2">
            {/* Market Share Analysis */}
            <Card>
              <CardHeader className="pb-2">
                <div className="flex items-center gap-2">
                  <PieChart className="size-5 text-muted-foreground" />
                  <CardTitle className="text-base">Market Share Analysis</CardTitle>
                  <span className="text-sm text-muted-foreground ml-2">Share of organic search visibility in your niche</span>
                </div>
              </CardHeader>
              <CardContent>
                <ChartContainer config={marketShareChartConfig} className="h-[280px] w-full">
                  <BarChart data={marketShareData} margin={{ top: 20, right: 20, left: 20, bottom: 20 }}>
                    <CartesianGrid strokeDasharray="3 3" stroke="#d1d5db" />
                    <XAxis
                      dataKey="name"
                      tickLine={false}
                      axisLine={false}
                      tick={{ fill: "var(--color-muted-foreground)", fontSize: 11 }}
                    />
                    <YAxis
                      tickLine={false}
                      axisLine={false}
                      tick={{ fill: "var(--color-muted-foreground)", fontSize: 11 }}
                      ticks={[0, 7, 14, 21, 28]}
                    />
                    <ChartTooltip cursor={false} content={<ChartTooltipContent />} />
                    <Bar dataKey="bar1" fill="#c4b5fd" radius={[4, 4, 0, 0]} />
                    <Bar dataKey="bar2" fill="#a78bfa" radius={[4, 4, 0, 0]} />
                    <Bar dataKey="bar3" fill="#8b5cf6" radius={[4, 4, 0, 0]} />
                  </BarChart>
                </ChartContainer>
              </CardContent>
            </Card>

            {/* Organic Traffic Trend */}
            <Card>
              <CardHeader className="pb-2">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <TrendingUp className="size-5 text-muted-foreground" />
                    <CardTitle className="text-base">Organic Traffic Trend</CardTitle>
                  </div>
                  <span className="text-sm text-muted-foreground">12-month organic traffic comparison</span>
                </div>
              </CardHeader>
              <CardContent>
                <ChartContainer config={trafficChartConfig} className="h-[250px] w-full">
                  <LineChart data={organicTrafficTrendData} margin={{ top: 20, right: 20, left: 20, bottom: 20 }}>
                    <CartesianGrid strokeDasharray="3 3" stroke="#d1d5db" />
                    <XAxis
                      dataKey="month"
                      tickLine={false}
                      axisLine={false}
                      tick={{ fill: "var(--color-muted-foreground)", fontSize: 10 }}
                    />
                    <YAxis
                      tickLine={false}
                      axisLine={false}
                      tick={{ fill: "var(--color-muted-foreground)", fontSize: 10 }}
                      ticks={[0, 7000, 14000, 21000, 28000]}
                    />
                    <ChartTooltip content={<ChartTooltipContent />} />
                    <Line type="monotone" dataKey="yourdomain" stroke="#8b5cf6" strokeWidth={2} dot={{ fill: "#8b5cf6", r: 3 }} />
                    <Line type="monotone" dataKey="competitor1" stroke="#ef4444" strokeWidth={2} dot={{ fill: "#ef4444", r: 3 }} />
                    <Line type="monotone" dataKey="competitor2" stroke="#3b82f6" strokeWidth={2} dot={{ fill: "#3b82f6", r: 3 }} />
                    <Line type="monotone" dataKey="competitor3" stroke="#22c55e" strokeWidth={2} dot={{ fill: "#22c55e", r: 3 }} />
                    <Line type="monotone" dataKey="competitor4" stroke="#eab308" strokeWidth={2} dot={{ fill: "#eab308", r: 3 }} />
                  </LineChart>
                </ChartContainer>
                <div className="flex flex-wrap justify-center gap-4 mt-2 text-xs">
                  <div className="flex items-center gap-1">
                    <div className="size-2 rounded-full bg-violet-500" />
                    <span className="text-muted-foreground">yourdomain.com</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <div className="size-2 rounded-full bg-red-500" />
                    <span className="text-muted-foreground">competitor1.com</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <div className="size-2 rounded-full bg-blue-500" />
                    <span className="text-muted-foreground">competitor2.com</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <div className="size-2 rounded-full bg-green-500" />
                    <span className="text-muted-foreground">competitor3.com</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <div className="size-2 rounded-full bg-yellow-500" />
                    <span className="text-muted-foreground">competitor4.com</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Competitor Overview Table */}
          <Card>
            <CardHeader>
              <CardTitle>Competitor Overview</CardTitle>
              <CardDescription>Key metrics for your top competitors</CardDescription>
            </CardHeader>
            <CardContent>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Domain</TableHead>
                    <TableHead>Traffic Share (%)</TableHead>
                    <TableHead>Organic Keywords</TableHead>
                    <TableHead>Backlinks</TableHead>
                    <TableHead>Domain Authority</TableHead>
                    <TableHead className="text-right">Traffic Trend</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {competitorOverviewData.map((item) => (
                    <TableRow key={item.domain}>
                      <TableCell className="font-medium">{item.domain}</TableCell>
                      <TableCell>{item.trafficShare}</TableCell>
                      <TableCell>{item.organicKeywords}</TableCell>
                      <TableCell>{item.backlinks}</TableCell>
                      <TableCell>{item.domainAuthority}</TableCell>
                      <TableCell className="text-right">
                        <TrendLine isUp={item.trendUp} />
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="keywords">
          <Card>
            <CardHeader>
              <CardTitle>Competitor Keywords Analysis</CardTitle>
              <CardDescription>Top performing keywords for each competitor</CardDescription>
            </CardHeader>
            <CardContent className="space-y-8">
              {competitorKeywordsData.map((competitorData) => (
                <div key={competitorData.competitor}>
                  <h3 className="font-semibold text-lg mb-4">{competitorData.competitor}</h3>
                  <Table>
                    <TableHeader>
                      <TableRow>
                        <TableHead>Keyword</TableHead>
                        <TableHead>Position</TableHead>
                        <TableHead>Volume</TableHead>
                        <TableHead>Your Position</TableHead>
                        <TableHead className="text-right">Actions</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {competitorData.keywords.map((kw, index) => (
                        <TableRow key={index}>
                          <TableCell className="font-medium">{kw.keyword}</TableCell>
                          <TableCell>
                            <span className="bg-violet-100 dark:bg-violet-950 text-violet-700 dark:text-violet-300 px-2 py-1 rounded text-sm font-medium">
                              {kw.position}
                            </span>
                          </TableCell>
                          <TableCell>{kw.volume}</TableCell>
                          <TableCell>
                            <span className="bg-red-100 dark:bg-red-950 text-red-700 dark:text-red-300 px-2 py-1 rounded text-sm font-medium">
                              {kw.yourPosition}
                            </span>
                          </TableCell>
                          <TableCell className="text-right">
                            <Button variant="ghost" size="sm" className="gap-1">
                              <ExternalLink className="size-4" />
                              Analyze
                            </Button>
                          </TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </div>
              ))}
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="content" className="space-y-6">
          {/* Competitive Keyword Insights */}
          <Card>
            <CardHeader>
              <CardTitle>Competitive Keyword Insights</CardTitle>
              <CardDescription>Discover the keywords that give your competitors an edge.</CardDescription>
            </CardHeader>
            <CardContent>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Keyword</TableHead>
                    <TableHead>Top Competitor</TableHead>
                    <TableHead>Their Position</TableHead>
                    <TableHead>Volume</TableHead>
                    <TableHead>Opportunity</TableHead>
                    <TableHead>Your Position</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {competitiveKeywordInsightsData.map((item, index) => (
                    <TableRow key={index}>
                      <TableCell className="font-medium">{item.keyword}</TableCell>
                      <TableCell>{item.topCompetitor}</TableCell>
                      <TableCell>
                        <span className="bg-violet-100 dark:bg-violet-950 text-violet-700 dark:text-violet-300 px-2 py-1 rounded text-sm font-medium">
                          {item.theirPosition}
                        </span>
                      </TableCell>
                      <TableCell>{item.volume}</TableCell>
                      <TableCell>
                        <div className="flex items-center gap-2">
                          <span>{item.opportunity}%</span>
                          <div className="w-16 h-2 bg-gray-200 rounded-full overflow-hidden">
                            <div
                              className={`h-full rounded-full ${
                                item.opportunity >= 70 ? "bg-green-500" :
                                item.opportunity >= 50 ? "bg-orange-400" : "bg-red-500"
                              }`}
                              style={{ width: `${item.opportunity}%` }}
                            />
                          </div>
                        </div>
                      </TableCell>
                      <TableCell>
                        <span className="bg-green-100 dark:bg-green-950 text-green-700 dark:text-green-300 px-2 py-1 rounded text-sm font-medium">
                          {item.yourPosition}
                        </span>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
              <div className="flex justify-center mt-6">
                <Button variant="outline">Show More Opportunities</Button>
              </div>
            </CardContent>
          </Card>

          {/* Trending Keywords */}
          <Card>
            <CardHeader>
              <CardTitle>Trending Keywords</CardTitle>
              <CardDescription>Keywords that overlap with your competitors</CardDescription>
            </CardHeader>
            <CardContent>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Search Term</TableHead>
                    <TableHead>Search Volume</TableHead>
                    <TableHead>Your Ranking</TableHead>
                    <TableHead>Leading Competitor</TableHead>
                    <TableHead>Competitor's Ranking</TableHead>
                    <TableHead>Ranking Discrepancy</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {trendingKeywordsData.map((item, index) => {
                    const yourRankNum = parseInt(item.yourRanking.replace("#", ""));
                    const compRankNum = parseInt(item.competitorRanking.replace("#", ""));
                    const discrepancyNum = parseInt(item.discrepancy.replace("#", ""));

                    return (
                      <TableRow key={index}>
                        <TableCell className="font-medium">{item.searchTerm}</TableCell>
                        <TableCell>{item.searchVolume}</TableCell>
                        <TableCell>
                          <span className={`px-2 py-1 rounded text-sm font-medium ${
                            yourRankNum <= 10 ? "bg-green-100 dark:bg-green-950 text-green-700 dark:text-green-300" :
                            yourRankNum <= 20 ? "bg-violet-100 dark:bg-violet-950 text-violet-700 dark:text-violet-300" :
                            "bg-red-100 dark:bg-red-950 text-red-700 dark:text-red-300"
                          }`}>
                            {item.yourRanking}
                          </span>
                        </TableCell>
                        <TableCell>{item.leadingCompetitor}</TableCell>
                        <TableCell>
                          <span className={`px-2 py-1 rounded text-sm font-medium ${
                            compRankNum <= 5 ? "bg-green-100 dark:bg-green-950 text-green-700 dark:text-green-300" :
                            compRankNum <= 10 ? "bg-orange-100 dark:bg-orange-950 text-orange-700 dark:text-orange-300" :
                            "bg-red-100 dark:bg-red-950 text-red-700 dark:text-red-300"
                          }`}>
                            {item.competitorRanking}
                          </span>
                        </TableCell>
                        <TableCell>
                          <span className={`px-2 py-1 rounded text-sm font-medium ${
                            discrepancyNum <= 5 ? "bg-green-100 dark:bg-green-950 text-green-700 dark:text-green-300" :
                            discrepancyNum <= 10 ? "bg-orange-100 dark:bg-orange-950 text-orange-700 dark:text-orange-300" :
                            "bg-red-100 dark:bg-red-950 text-red-700 dark:text-red-300"
                          }`}>
                            {item.discrepancy}
                          </span>
                        </TableCell>
                      </TableRow>
                    );
                  })}
                </TableBody>
              </Table>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="metrics" className="space-y-6">
          {/* Two Charts Row */}
          <div className="grid gap-6 lg:grid-cols-2">
            {/* Performance Radar */}
            <Card>
              <CardHeader>
                <CardTitle>Performance Radar</CardTitle>
                <CardDescription>Multi-dimensional performance comparison</CardDescription>
              </CardHeader>
              <CardContent>
                <ChartContainer config={radarChartConfig} className="h-[300px] w-full">
                  <RadarChart data={performanceRadarData} margin={{ top: 20, right: 30, left: 30, bottom: 20 }}>
                    <PolarGrid stroke="#d1d5db" />
                    <PolarAngleAxis
                      dataKey="metric"
                      tick={{ fill: "var(--color-muted-foreground)", fontSize: 12 }}
                    />
                    <PolarRadiusAxis
                      angle={90}
                      domain={[0, 100]}
                      tick={{ fill: "var(--color-muted-foreground)", fontSize: 10 }}
                    />
                    <Radar name="yourdomain.com" dataKey="yourdomain" stroke="#8b5cf6" fill="#8b5cf6" fillOpacity={0.3} />
                    <Radar name="xavify.com" dataKey="xavify" stroke="#ef4444" fill="#ef4444" fillOpacity={0.3} />
                    <Radar name="crips.com" dataKey="crips" stroke="#3b82f6" fill="#3b82f6" fillOpacity={0.3} />
                    <Radar name="xary.com" dataKey="xary" stroke="#22c55e" fill="#22c55e" fillOpacity={0.3} />
                  </RadarChart>
                </ChartContainer>
                <div className="flex flex-wrap justify-center gap-4 mt-2 text-xs">
                  <div className="flex items-center gap-1">
                    <div className="size-2 rounded-full bg-violet-500" />
                    <span className="text-muted-foreground">yourdomain.com</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <div className="size-2 rounded-full bg-red-500" />
                    <span className="text-muted-foreground">xavify.com</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <div className="size-2 rounded-full bg-blue-500" />
                    <span className="text-muted-foreground">crips.com</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <div className="size-2 rounded-full bg-green-500" />
                    <span className="text-muted-foreground">xary.com</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Content Length Analysis */}
            <Card>
              <CardHeader>
                <CardTitle>Content Length Analysis</CardTitle>
                <CardDescription>Average word count for top-ranking pages</CardDescription>
              </CardHeader>
              <CardContent>
                <ChartContainer config={radarChartConfig} className="h-[300px] w-full">
                  <BarChart data={contentLengthData} margin={{ top: 20, right: 20, left: 20, bottom: 20 }}>
                    <CartesianGrid strokeDasharray="3 3" stroke="#d1d5db" vertical={false} />
                    <XAxis
                      dataKey="page"
                      tickLine={false}
                      axisLine={false}
                      tick={{ fill: "var(--color-muted-foreground)", fontSize: 11 }}
                    />
                    <YAxis
                      tickLine={false}
                      axisLine={false}
                      tick={{ fill: "var(--color-muted-foreground)", fontSize: 11 }}
                      ticks={[0, 100, 200, 300, 400]}
                    />
                    <ChartTooltip content={<ChartTooltipContent />} />
                    <Bar dataKey="yourdomain" fill="#8b5cf6" radius={[4, 4, 0, 0]} name="yourdomain.com" />
                    <Bar dataKey="xavify" fill="#ef4444" radius={[4, 4, 0, 0]} name="xavify.com" />
                    <Bar dataKey="crips" fill="#3b82f6" radius={[4, 4, 0, 0]} name="crips.com" />
                    <Bar dataKey="xary" fill="#22c55e" radius={[4, 4, 0, 0]} name="xary.com" />
                  </BarChart>
                </ChartContainer>
                <div className="flex flex-wrap justify-center gap-4 mt-2 text-xs">
                  <div className="flex items-center gap-1">
                    <div className="size-2 rounded-full bg-violet-500" />
                    <span className="text-muted-foreground">yourdomain.com</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <div className="size-2 rounded-full bg-red-500" />
                    <span className="text-muted-foreground">xavify.com</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <div className="size-2 rounded-full bg-blue-500" />
                    <span className="text-muted-foreground">crips.com</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <div className="size-2 rounded-full bg-green-500" />
                    <span className="text-muted-foreground">xary.com</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Comprehensive Metrics Overview */}
          <Card>
            <CardHeader>
              <CardTitle>Comprehensive Metrics Overview</CardTitle>
              <CardDescription>In-depth side-by-side analysis of metrics against industry competitors</CardDescription>
            </CardHeader>
            <CardContent>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Performance Indicator</TableHead>
                    <TableHead>mywebsite.com</TableHead>
                    <TableHead>rival1.com</TableHead>
                    <TableHead>rival2.com</TableHead>
                    <TableHead>rival3.com</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {comprehensiveMetricsData.map((item) => (
                    <TableRow key={item.indicator}>
                      <TableCell className="font-medium">{item.indicator}</TableCell>
                      <TableCell>{item.mywebsite}</TableCell>
                      <TableCell>{item.rival1}</TableCell>
                      <TableCell>{item.rival2}</TableCell>
                      <TableCell>{item.rival3}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
}

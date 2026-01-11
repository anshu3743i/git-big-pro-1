"use client";

import {
  Search,
  SlidersHorizontal,
  Download,
  TrendingUp,
  PlusCircle
} from "lucide-react";
import {
  BarChart,
  Bar,
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  ResponsiveContainer
} from "recharts";

import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow
} from "@/components/ui/table";
import { ChartContainer, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart";

// Search Volume Trends data
const searchVolumeTrendsData = [
  { month: "Jan", volume: 2200 },
  { month: "Feb", volume: 1800 },
  { month: "Mar", volume: 6200 },
  { month: "Apr", volume: 2400 },
  { month: "May", volume: 2000 },
  { month: "Jun", volume: 2200 }
];

// Keyword Difficulty Distribution data
const difficultyDistributionData = [
  { level: "Very Easy", value: 5 },
  { level: "Easy", value: 8 },
  { level: "Medium", value: 18 },
  { level: "Hard", value: 30 },
  { level: "Very Hard", value: 22 }
];

// Keyword Recommendations data
const keywordRecommendationsData = [
  { term: "free SEO tools", volume: "10,200", competition: 65, relevance: "High" },
  { term: "best seo tools", volume: "8,300", competition: 70, relevance: "High" },
  { term: "seo tools comparison", volume: "6,500", competition: 80, relevance: "Medium" },
  { term: "affordable seo tools", volume: "5,000", competition: 60, relevance: "High" },
  { term: "enterprise seo tools", volume: "4,500", competition: 55, relevance: "Medium" },
  { term: "free SEO", volume: "7,200", competition: 62, relevance: "Low" }
];

// Questions People Ask data
const questionsPeopleAskData = [
  { question: "How does this product work?", answer: "An overview of the product's functionality and features." },
  { question: "What are the benefits of using it?", answer: "Key advantages that users can expect from this product." },
  { question: "Are there any side effects?", answer: "Common concerns or issues that may arise from usage." },
  { question: "How do I get started?", answer: "Step-by-step instructions for beginners." },
  { question: "What is the pricing structure?", answer: "Details about the cost and any available plans." }
];

// SERP Analysis data
const serpAnalysisData = [
  { pos: 1, title: "leading free SEO tools", url: "top-rated free SEO tools", domainAuthority: 15000, monthlyTraffic: 15000, inboundLinks: 15000 },
  { pos: 2, title: "top-rated free SEO tools", url: "leading free SEO tools", domainAuthority: 10500, monthlyTraffic: 10500, inboundLinks: 10500 },
  { pos: 3, title: "top-rated free SEO tools", url: "leading free SEO tools", domainAuthority: 8000, monthlyTraffic: 8000, inboundLinks: 8000 },
  { pos: 4, title: "top-rated free SEO tools", url: "leading free SEO tools", domainAuthority: 7000, monthlyTraffic: 7000, inboundLinks: 7000 },
  { pos: 5, title: "top-rated free SEO tools", url: "leading free SEO tools", domainAuthority: 4500, monthlyTraffic: 4500, inboundLinks: 4500 }
];

const volumeChartConfig = {
  volume: { label: "Volume", color: "#8b5cf6" }
};

const difficultyChartConfig = {
  value: { label: "Value", color: "#8b5cf6" }
};

// Keyword Analysis data
const keywordAnalysisData = [
  { keyword: "seo tools", volume: "9,500", difficulty: 68, cpc: "$5.20", intent: "Commercial", trendUp: true },
  { keyword: "seo agency", volume: "7,500", difficulty: 72, cpc: "$7.50", intent: "Commercial", trendUp: true },
  { keyword: "seo audit", volume: "5,900", difficulty: 75, cpc: "$6.80", intent: "Transactional", trendUp: true },
  { keyword: "best seo practices", volume: "4,800", difficulty: 65, cpc: "$3.90", intent: "Informational", trendUp: false },
  { keyword: "backlink analysis", volume: "4,200", difficulty: 60, cpc: "$5.30", intent: "Informational", trendUp: true },
  { keyword: "on page seo", volume: "6,700", difficulty: 58, cpc: "$6.20", intent: "Informational", trendUp: true },
  { keyword: "off page seo", volume: "4,500", difficulty: 70, cpc: "$5.80", intent: "Informational", trendUp: false }
];

// Get difficulty bar color based on value
function getDifficultyColor(difficulty: number) {
  if (difficulty >= 70) return "bg-red-500";
  if (difficulty >= 50) return "bg-orange-400";
  return "bg-green-500";
}

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

export default function KeywordExplorerPage() {
  return (
    <div className="space-y-6">
      {/* Page Header */}
      <div className="flex flex-col gap-4 lg:flex-row lg:items-start lg:justify-between">
        <div>
          <h1 className="text-2xl font-bold tracking-tight">Keyword Explorer</h1>
          <p className="text-muted-foreground">
            Find the best keywords to target for your SEO strategy
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
            value="trends"
            className="rounded-none border-b-2 border-transparent data-[state=active]:border-violet-600 data-[state=active]:bg-transparent data-[state=active]:shadow-none px-0 pb-3"
          >
            Trends
          </TabsTrigger>
          <TabsTrigger
            value="serp"
            className="rounded-none border-b-2 border-transparent data-[state=active]:border-violet-600 data-[state=active]:bg-transparent data-[state=active]:shadow-none px-0 pb-3"
          >
            SERP Analysis
          </TabsTrigger>
          <TabsTrigger
            value="suggestions"
            className="rounded-none border-b-2 border-transparent data-[state=active]:border-violet-600 data-[state=active]:bg-transparent data-[state=active]:shadow-none px-0 pb-3"
          >
            Keyword Suggestions
          </TabsTrigger>
        </TabsList>

        <TabsContent value="overview" className="space-y-6">
          {/* Stat Cards */}
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            <Card className="border-violet-200 dark:border-violet-800">
              <CardContent className="pt-6">
                <div className="flex items-start justify-between">
                  <div>
                    <div className="text-sm text-muted-foreground">Monthly Volume</div>
                    <div className="text-3xl font-bold text-violet-600 mt-1">9,500</div>
                    <p className="text-sm text-muted-foreground mt-1">Searches per month</p>
                  </div>
                  <div className="text-violet-200">
                    <TrendingUp className="size-8" />
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-violet-200 dark:border-violet-800">
              <CardContent className="pt-6">
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <div className="text-sm text-muted-foreground">Keyword Difficulty</div>
                    <div className="text-3xl font-bold text-violet-600 mt-1">68/100</div>
                    <div className="w-full h-2 bg-gray-200 rounded-full mt-3 overflow-hidden">
                      <div className="h-full bg-gradient-to-r from-green-500 via-yellow-500 to-red-500 rounded-full" style={{ width: "68%" }} />
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-violet-200 dark:border-violet-800">
              <CardContent className="pt-6">
                <div className="flex items-start justify-between">
                  <div>
                    <div className="text-sm text-muted-foreground">Cost Per Click</div>
                    <div className="text-3xl font-bold text-violet-600 mt-1">$5.20</div>
                    <p className="text-sm text-muted-foreground mt-1">Average CPC in Google Ads</p>
                  </div>
                  <div className="text-violet-200">
                    <TrendingUp className="size-8" />
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-violet-200 dark:border-violet-800">
              <CardContent className="pt-6">
                <div className="flex items-start justify-between">
                  <div>
                    <div className="text-sm text-muted-foreground">Search Intent</div>
                    <div className="text-3xl font-bold text-violet-600 mt-1">Commercial</div>
                    <p className="text-sm text-muted-foreground mt-1">Primary user intent</p>
                  </div>
                  <div className="text-violet-200">
                    <TrendingUp className="size-8" />
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Keyword Analysis Table */}
          <Card>
            <CardHeader>
              <CardTitle>Keyword Analysis</CardTitle>
              <CardDescription>Detailed metrics for "seo tools" and related keywords</CardDescription>
            </CardHeader>
            <CardContent>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Keyword</TableHead>
                    <TableHead className="text-right">Volume</TableHead>
                    <TableHead>Difficulty</TableHead>
                    <TableHead className="text-right">CPC ($)</TableHead>
                    <TableHead>Intent</TableHead>
                    <TableHead className="text-right">Trend</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {keywordAnalysisData.map((item) => (
                    <TableRow key={item.keyword}>
                      <TableCell className="font-medium">{item.keyword}</TableCell>
                      <TableCell className="text-right">{item.volume}</TableCell>
                      <TableCell>
                        <div className="flex items-center gap-2">
                          <span>{item.difficulty}</span>
                          <div className="w-16 h-2 bg-gray-200 rounded-full overflow-hidden">
                            <div
                              className={`h-full rounded-full ${getDifficultyColor(item.difficulty)}`}
                              style={{ width: `${item.difficulty}%` }}
                            />
                          </div>
                        </div>
                      </TableCell>
                      <TableCell className="text-right">{item.cpc}</TableCell>
                      <TableCell>{item.intent}</TableCell>
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

        <TabsContent value="trends" className="space-y-6">
          <div className="grid gap-6 lg:grid-cols-2">
            {/* Search Volume Trends */}
            <Card>
              <CardHeader>
                <CardTitle>Search Volume Trends</CardTitle>
                <CardDescription>Yearly trends for "seo tools" search volume</CardDescription>
              </CardHeader>
              <CardContent>
                <ChartContainer config={volumeChartConfig} className="h-[300px] w-full">
                  <BarChart data={searchVolumeTrendsData} margin={{ top: 20, right: 20, left: 20, bottom: 20 }}>
                    <CartesianGrid strokeDasharray="3 3" stroke="#d1d5db" vertical={false} />
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
                      ticks={[0, 100, 500, 1000, 2000, 4000, 6000, 8000]}
                    />
                    <ChartTooltip cursor={false} content={<ChartTooltipContent />} />
                    <Bar dataKey="volume" fill="#c4b5fd" radius={[4, 4, 0, 0]} activeBar={{ fill: "#8b5cf6" }} />
                  </BarChart>
                </ChartContainer>
              </CardContent>
            </Card>

            {/* Keyword Difficulty Distribution */}
            <Card>
              <CardHeader>
                <CardTitle>Keyword Difficulty Distribution</CardTitle>
                <CardDescription>How competitive keywords are in this category</CardDescription>
              </CardHeader>
              <CardContent>
                <ChartContainer config={difficultyChartConfig} className="h-[300px] w-full">
                  <LineChart data={difficultyDistributionData} margin={{ top: 20, right: 20, left: 20, bottom: 20 }}>
                    <CartesianGrid strokeDasharray="3 3" stroke="#d1d5db" />
                    <XAxis
                      dataKey="level"
                      tickLine={false}
                      axisLine={false}
                      tick={{ fill: "var(--color-muted-foreground)", fontSize: 11 }}
                    />
                    <YAxis
                      tickLine={false}
                      axisLine={false}
                      tick={{ fill: "var(--color-muted-foreground)", fontSize: 12 }}
                      ticks={[0, 9, 18, 27, 36]}
                    />
                    <ChartTooltip
                      content={({ active, payload, label }) => {
                        if (active && payload && payload.length) {
                          const difficultyRanges: Record<string, string> = {
                            "Very Easy": "(0-20)",
                            "Easy": "(21-40)",
                            "Medium": "(41-60)",
                            "Hard": "(61-80)",
                            "Very Hard": "(81-100)"
                          };
                          return (
                            <div className="rounded-lg border bg-background p-3 shadow-sm">
                              <div className="font-medium mb-1">{label} {difficultyRanges[label]}</div>
                              <div className="flex items-center gap-2 text-sm">
                                <div className="size-2 rounded-full bg-violet-500" />
                                <span className="text-muted-foreground">Value</span>
                                <span className="font-medium">{payload[0].value}</span>
                              </div>
                            </div>
                          );
                        }
                        return null;
                      }}
                    />
                    <Line
                      type="monotone"
                      dataKey="value"
                      stroke="#8b5cf6"
                      strokeWidth={2}
                      dot={{ fill: "#8b5cf6", r: 4 }}
                      activeDot={{ r: 6, fill: "#8b5cf6" }}
                    />
                  </LineChart>
                </ChartContainer>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="serp">
          <Card>
            <CardHeader>
              <CardTitle>SEO Performance Insights</CardTitle>
              <CardDescription>Top-ranking pages for "best SEO tools"</CardDescription>
            </CardHeader>
            <CardContent>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead className="w-16">Pos</TableHead>
                    <TableHead>Page Title & URL</TableHead>
                    <TableHead className="text-right">Domain Authority Score</TableHead>
                    <TableHead className="text-right">Estimated Monthly Traffic</TableHead>
                    <TableHead className="text-right">Total Inbound Links</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {serpAnalysisData.map((item) => (
                    <TableRow key={item.pos}>
                      <TableCell className="font-medium">{item.pos}</TableCell>
                      <TableCell>
                        <div>
                          <div className="font-medium">{item.title}</div>
                          <div className="text-sm text-muted-foreground">{item.url}</div>
                        </div>
                      </TableCell>
                      <TableCell className="text-right">{item.domainAuthority.toLocaleString()}</TableCell>
                      <TableCell className="text-right">{item.monthlyTraffic.toLocaleString()}</TableCell>
                      <TableCell className="text-right">{item.inboundLinks.toLocaleString()}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
              <div className="mt-6 pt-4 border-t text-center text-sm text-muted-foreground">
                Average metrics for page 1 results: Domain Rating: 83, Backlinks: 3,560, Word Count: 2,450
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="suggestions" className="space-y-6">
          {/* Keyword Recommendations */}
          <Card>
            <CardHeader>
              <CardTitle>Keyword Recommendations</CardTitle>
              <CardDescription>Explore additional keywords users commonly search for alongside "SEO tools"</CardDescription>
            </CardHeader>
            <CardContent>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Search Term</TableHead>
                    <TableHead>Search Volume</TableHead>
                    <TableHead>Competition Level</TableHead>
                    <TableHead>Keyword Relevance</TableHead>
                    <TableHead className="text-right">Select Action</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {keywordRecommendationsData.map((item) => (
                    <TableRow key={item.term}>
                      <TableCell className="font-medium">{item.term}</TableCell>
                      <TableCell>{item.volume}</TableCell>
                      <TableCell>
                        <div className="flex items-center gap-2">
                          <span>{item.competition}</span>
                          <div className="w-16 h-2 bg-gray-200 rounded-full overflow-hidden">
                            <div
                              className={`h-full rounded-full ${
                                item.competition >= 70 ? "bg-green-500" :
                                item.competition >= 55 ? "bg-orange-400" : "bg-red-500"
                              }`}
                              style={{ width: `${item.competition}%` }}
                            />
                          </div>
                        </div>
                      </TableCell>
                      <TableCell>
                        <span className={`px-2 py-1 rounded text-xs font-medium ${
                          item.relevance === "High" ? "bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400" :
                          item.relevance === "Medium" ? "bg-orange-100 text-orange-700 dark:bg-orange-900/30 dark:text-orange-400" :
                          "bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-400"
                        }`}>
                          {item.relevance}
                        </span>
                      </TableCell>
                      <TableCell className="text-right">
                        <Button variant="outline" size="sm" className="gap-1">
                          <PlusCircle className="size-4" />
                          Include
                        </Button>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </CardContent>
          </Card>

          {/* Questions People Ask */}
          <Card>
            <CardHeader>
              <CardTitle>Questions People Ask</CardTitle>
              <CardDescription>Common questions related to your keyword</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                {questionsPeopleAskData.map((item, index) => (
                  <div
                    key={index}
                    className="flex items-center justify-between p-4 bg-muted/50 rounded-lg"
                  >
                    <span className="font-medium">{item.question}</span>
                    <span className="text-sm text-muted-foreground text-right max-w-md">{item.answer}</span>
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

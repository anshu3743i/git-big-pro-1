"use client";

import {
  Search,
  SlidersHorizontal,
  Download,
  X,
  Edit,
  TrendingUp,
  TrendingDown,
  Megaphone,
  Link2,
  Globe,
  ExternalLink,
  CheckCircle,
  UserPlus,
  Upload,
  Mail,
  Send
} from "lucide-react";

import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

// Link Building Opportunities data
const opportunitiesData = [
  {
    domain: "digitalmarketingpro.com",
    description: "Popular digital marketing blo...",
    type: "Guest Post",
    typeColor: "bg-green-100 text-green-700 border-green-300",
    da: 78,
    relevance: "High",
    relevanceColor: "text-green-600",
    difficulty: "Medium",
    difficultyColor: "bg-yellow-100 text-yellow-700",
    competitors: ["competitor1", "competitor2"]
  },
  {
    domain: "contentmarketing.com",
    description: "Broken link to an analytics to...",
    type: "Broken Link",
    typeColor: "bg-red-100 text-red-600 border-red-300",
    da: 85,
    relevance: "Easy",
    relevanceColor: "text-green-600",
    difficulty: "Easy",
    difficultyColor: "bg-green-100 text-green-700",
    competitors: ["competitor1", "competitor3"]
  },
  {
    domain: "seoeducation.org",
    description: "Educational resource listing...",
    type: "Resource Page",
    typeColor: "bg-blue-100 text-blue-700 border-blue-300",
    da: 82,
    relevance: "Medium",
    relevanceColor: "text-yellow-600",
    difficulty: "Easy",
    difficultyColor: "bg-green-100 text-green-700",
    competitors: ["competitor2"]
  },
  {
    domain: "busineanalyticsreview.com",
    description: "Your product is mentioned...",
    type: "Unlinked Mention",
    typeColor: "bg-orange-100 text-orange-600 border-orange-300",
    da: 74,
    relevance: "High",
    relevanceColor: "text-green-600",
    difficulty: "Easy",
    difficultyColor: "bg-green-100 text-green-700",
    competitors: []
  },
  {
    domain: "marketingconference.com",
    description: "Major marketing conference...",
    type: "Sponsorship",
    typeColor: "bg-purple-100 text-purple-700 border-purple-300",
    da: 80,
    relevance: "Medium",
    relevanceColor: "text-yellow-600",
    difficulty: "Hard",
    difficultyColor: "bg-red-100 text-red-600",
    competitors: ["competitor1", "competitor2", "competitor3"]
  },
  {
    domain: "seowebinar.tech",
    description: "Upcoming webinar about...",
    type: "Webinar Participation",
    typeColor: "bg-gray-100 text-gray-700 border-gray-300",
    da: 71,
    relevance: "Easy",
    relevanceColor: "text-green-600",
    difficulty: "Medium",
    difficultyColor: "bg-yellow-100 text-yellow-700",
    competitors: ["competitor2"]
  },
  {
    domain: "seowebinar.tech",
    description: "Upcoming webinar about...",
    type: "Content Collaboration",
    typeColor: "bg-gray-100 text-gray-700 border-gray-300",
    da: 76,
    relevance: "Easy",
    relevanceColor: "text-green-600",
    difficulty: "Medium",
    difficultyColor: "bg-yellow-100 text-yellow-700",
    competitors: ["competitor3"]
  }
];

// Competitor Link Gap data
const competitorGapData = [
  { domain: "industry-news.com", competitorsWithLink: 12, authority: 80 },
  { domain: "marketing-resources.org", competitorsWithLink: 54, authority: 50 },
  { domain: "seo-insights.net", competitorsWithLink: 38, authority: 89 },
  { domain: "analytics-weekly.com", competitorsWithLink: 12, authority: 54 },
  { domain: "digital-strategy.co", competitorsWithLink: 7, authority: 64 }
];

// Quick Win Opportunities data
const quickWinData = [
  {
    icon: Megaphone,
    iconBg: "bg-orange-100",
    iconColor: "text-orange-600",
    title: "Unlinked Brand Mentions",
    description: "Websites mentioning your brand without linking",
    trend: "+12",
    trendUp: true
  },
  {
    icon: Link2,
    iconBg: "bg-violet-100",
    iconColor: "text-violet-600",
    title: "Broken Competitor Links",
    description: "Pages linking to competitors' broken pages",
    trend: "+18",
    trendUp: true
  },
  {
    icon: Globe,
    iconBg: "bg-blue-100",
    iconColor: "text-blue-600",
    title: "Resource Pages",
    description: "Pages linking to competitors' broken pages",
    trend: "-15",
    trendUp: false
  }
];

// Outreach Prospects data
const prospectsData = [
  {
    website: "seoexpert.blog",
    contact: "Sarah Johnson",
    email: "sarah@seoexpert.blog",
    opportunity: "Guest Post",
    opportunityColor: "bg-green-100 text-green-700 border-green-300",
    da: 68,
    status: "Not Contacted",
    statusColor: "text-gray-500",
    difficulty: "High",
    difficultyColor: "bg-red-100 text-red-600"
  },
  {
    website: "digitalmarketer.news",
    contact: "Michael Chen",
    email: "michael@digitalmarketer.news",
    opportunity: "Resource Mention",
    opportunityColor: "bg-blue-100 text-blue-700 border-blue-300",
    da: 72,
    status: "Contacted",
    statusColor: "text-yellow-600",
    difficulty: "Medium",
    difficultyColor: "bg-yellow-100 text-yellow-700"
  },
  {
    website: "analyticspro.io",
    contact: "Jessica Williams",
    email: "jessica@analyticspro.io",
    opportunity: "Broken Link",
    opportunityColor: "bg-red-100 text-red-600 border-red-300",
    da: 75,
    status: "Responded",
    statusColor: "text-blue-600",
    difficulty: "High",
    difficultyColor: "bg-red-100 text-red-600"
  },
  {
    website: "marketinghub.com",
    contact: "David Miller",
    email: "david@marketinghub.com",
    opportunity: "Unlinked Mention",
    opportunityColor: "bg-orange-100 text-orange-600 border-orange-300",
    da: 82,
    status: "Successful",
    statusColor: "text-green-600",
    difficulty: "High",
    difficultyColor: "bg-red-100 text-red-600"
  },
  {
    website: "contentmaster.org",
    contact: "Emily Roberts",
    email: "emily@contentmaster.org",
    opportunity: "Content Collaboration",
    opportunityColor: "bg-purple-100 text-purple-700 border-purple-300",
    da: 70,
    status: "Not Interested",
    statusColor: "text-red-500",
    difficulty: "Medium",
    difficultyColor: "bg-yellow-100 text-yellow-700"
  }
];

// Prospects by Status data
const prospectsByStatus = [
  { status: "Not Contacted", count: 18, color: "bg-gray-400" },
  { status: "Contacted", count: 12, color: "bg-yellow-400" },
  { status: "Responded", count: 5, color: "bg-blue-500" },
  { status: "Successful", count: 3, color: "bg-green-500" },
  { status: "Not Interested", count: 1, color: "bg-red-500" }
];

// Prospects by Type data
const prospectsByType = [
  { type: "Guest Post", count: 16, color: "bg-pink-400" },
  { type: "Resource Mention", count: 11, color: "bg-blue-500" },
  { type: "Broken Link", count: 9, color: "bg-green-500" },
  { type: "Unlinked Mention", count: 5, color: "bg-yellow-400" },
  { type: "Content Collaboration", count: 3, color: "bg-red-500" }
];

export default function LinkOpportunitiesPage() {
  return (
    <div className="space-y-6">
      {/* Page Header */}
      <div className="flex flex-col gap-4 lg:flex-row lg:items-start lg:justify-between">
        <div>
          <h1 className="text-2xl font-bold tracking-tight">Link Opportunities</h1>
          <p className="text-muted-foreground">
            Discover and manage link building opportunities
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

      {/* Find Link Opportunities Card */}
      <Card>
        <CardHeader>
          <CardTitle>Find Link Opportunities</CardTitle>
          <CardDescription>Enter your domain and competitors to discover link building opportunities</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="flex flex-col gap-3 sm:flex-row">
            <div className="relative flex-1">
              <Input placeholder="example.com" className="pr-10" />
              <Search className="absolute right-3 top-1/2 -translate-y-1/2 size-4 text-muted-foreground" />
            </div>
            <Button className="bg-violet-600 hover:bg-violet-700 text-white">Find Opportunities</Button>
          </div>
          <div>
            <div className="text-sm text-muted-foreground mb-2">Selected competitors:</div>
            <div className="flex flex-wrap gap-2">
              <span className="inline-flex items-center gap-1 px-3 py-1 bg-gray-100 rounded-full text-sm">
                competitor1.com
                <X className="size-3 cursor-pointer" />
              </span>
              <span className="inline-flex items-center gap-1 px-3 py-1 bg-gray-100 rounded-full text-sm">
                competitor2.com
                <X className="size-3 cursor-pointer" />
              </span>
              <span className="inline-flex items-center gap-1 px-3 py-1 bg-gray-100 rounded-full text-sm">
                competitor3.com
                <X className="size-3 cursor-pointer" />
              </span>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Tabs */}
      <Tabs defaultValue="discover" className="space-y-6">
        <TabsList className="bg-transparent border-b rounded-none w-full justify-start gap-4 px-0 h-auto pb-0">
          <TabsTrigger
            value="discover"
            className="rounded-none border-b-2 border-transparent data-[state=active]:border-violet-600 data-[state=active]:bg-transparent data-[state=active]:shadow-none px-0 pb-3"
          >
            Discover
          </TabsTrigger>
          <TabsTrigger
            value="prospects"
            className="rounded-none border-b-2 border-transparent data-[state=active]:border-violet-600 data-[state=active]:bg-transparent data-[state=active]:shadow-none px-0 pb-3"
          >
            Prospects
          </TabsTrigger>
          <TabsTrigger
            value="campaigns"
            className="rounded-none border-b-2 border-transparent data-[state=active]:border-violet-600 data-[state=active]:bg-transparent data-[state=active]:shadow-none px-0 pb-3"
          >
            Campaigns
          </TabsTrigger>
          <TabsTrigger
            value="reporting"
            className="rounded-none border-b-2 border-transparent data-[state=active]:border-violet-600 data-[state=active]:bg-transparent data-[state=active]:shadow-none px-0 pb-3"
          >
            Reporting
          </TabsTrigger>
        </TabsList>

        <TabsContent value="discover" className="space-y-6">
          {/* Link Building Opportunities */}
          <Card>
            <CardHeader>
              <CardTitle>Link Building Opportunities</CardTitle>
              <CardDescription>Potential opportunities based on competitor analysis and industry research.</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b text-muted-foreground">
                      <th className="text-left font-medium py-3 pr-4">Domain</th>
                      <th className="text-left font-medium py-3 pr-4">Opportunity Type</th>
                      <th className="text-left font-medium py-3 pr-4">Domain Authority</th>
                      <th className="text-left font-medium py-3 pr-4">Relevance</th>
                      <th className="text-left font-medium py-3 pr-4">Difficulty</th>
                      <th className="text-left font-medium py-3 pr-4">Competitor Links</th>
                      <th className="text-left font-medium py-3">Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    {opportunitiesData.map((item, i) => (
                      <tr key={i} className="border-b last:border-0">
                        <td className="py-3 pr-4">
                          <div>
                            <div className="font-medium">{item.domain}</div>
                            <div className="text-xs text-muted-foreground">{item.description}</div>
                          </div>
                        </td>
                        <td className="py-3 pr-4">
                          <span className={`text-xs px-2 py-1 rounded border ${item.typeColor}`}>
                            {item.type}
                          </span>
                        </td>
                        <td className="py-3 pr-4">
                          <div className="flex items-center gap-2">
                            <span>{item.da}</span>
                            <div className="w-16 h-2 bg-gray-200 rounded-full overflow-hidden">
                              <div
                                className="h-full rounded-full bg-green-500"
                                style={{ width: `${item.da}%` }}
                              />
                            </div>
                          </div>
                        </td>
                        <td className="py-3 pr-4">
                          <span className={`font-medium ${item.relevanceColor}`}>{item.relevance}</span>
                        </td>
                        <td className="py-3 pr-4">
                          <span className={`text-xs px-2 py-1 rounded ${item.difficultyColor}`}>
                            {item.difficulty}
                          </span>
                        </td>
                        <td className="py-3 pr-4">
                          <div className="flex flex-wrap gap-1">
                            {item.competitors.map((comp, j) => (
                              <span key={j} className="text-xs text-muted-foreground">{comp}</span>
                            ))}
                          </div>
                        </td>
                        <td className="py-3">
                          <Button variant="outline" size="sm" className="gap-1">
                            <Edit className="size-3" />
                            Add to Prospects
                          </Button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <div className="flex items-center justify-between mt-4 pt-4 border-t">
                <span className="text-sm text-muted-foreground">Showing 7 of 42 opportunities</span>
                <div className="flex gap-2">
                  <Button variant="outline" size="sm">Previous</Button>
                  <Button variant="outline" size="sm">Next</Button>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Bottom Row */}
          <div className="grid gap-6 lg:grid-cols-2">
            {/* Competitor Link Gap */}
            <Card>
              <CardHeader>
                <CardTitle>Competitor Link Gap</CardTitle>
                <CardDescription>Links your competitors have that you don't</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="overflow-x-auto">
                  <table className="w-full text-sm">
                    <thead>
                      <tr className="border-b text-muted-foreground">
                        <th className="text-left font-medium py-3 pr-4">Domain</th>
                        <th className="text-left font-medium py-3 pr-4">Competitors With Link</th>
                        <th className="text-left font-medium py-3 pr-4">Authority</th>
                        <th className="text-left font-medium py-3">Action</th>
                      </tr>
                    </thead>
                    <tbody>
                      {competitorGapData.map((item, i) => (
                        <tr key={i} className="border-b last:border-0">
                          <td className="py-3 pr-4">{item.domain}</td>
                          <td className="py-3 pr-4 text-muted-foreground">{item.competitorsWithLink}</td>
                          <td className="py-3 pr-4 text-muted-foreground">{item.authority}</td>
                          <td className="py-3">
                            <Button variant="outline" size="sm" className="gap-1">
                              <Edit className="size-3" />
                              Add
                            </Button>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </CardContent>
            </Card>

            {/* Quick Win Opportunities */}
            <Card>
              <CardHeader>
                <CardTitle>Quick Win Opportunities</CardTitle>
                <CardDescription>Easier opportunities with high value potential</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                {quickWinData.map((item, i) => (
                  <div key={i} className="flex items-start gap-4 p-4 border rounded-lg">
                    <div className={`p-2 rounded-lg ${item.iconBg}`}>
                      <item.icon className={`size-5 ${item.iconColor}`} />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center justify-between">
                        <div className="font-medium">{item.title}</div>
                        <div className={`flex items-center gap-1 text-sm ${item.trendUp ? "text-green-600" : "text-red-500"}`}>
                          {item.trendUp ? <TrendingUp className="size-4" /> : <TrendingDown className="size-4" />}
                          {item.trend}
                        </div>
                      </div>
                      <div className="text-sm text-muted-foreground">{item.description}</div>
                      <button className="text-sm text-violet-600 hover:underline mt-1">View opportunities</button>
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="prospects" className="space-y-6">
          {/* Outreach Prospects */}
          <Card>
            <CardHeader>
              <CardTitle>Outreach Prospects</CardTitle>
              <CardDescription>Manage your link building prospects and track outreach status</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b text-muted-foreground">
                      <th className="text-left font-medium py-3 pr-4">Website</th>
                      <th className="text-left font-medium py-3 pr-4">Contact</th>
                      <th className="text-left font-medium py-3 pr-4">Opportunity</th>
                      <th className="text-left font-medium py-3 pr-4">Domain Authority</th>
                      <th className="text-left font-medium py-3 pr-4">Competitor Links</th>
                      <th className="text-left font-medium py-3 pr-4">Difficulty</th>
                      <th className="text-left font-medium py-3">Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    {prospectsData.map((item, i) => (
                      <tr key={i} className="border-b last:border-0">
                        <td className="py-3 pr-4 font-medium">{item.website}</td>
                        <td className="py-3 pr-4">
                          <div>
                            <div>{item.contact}</div>
                            <div className="text-xs text-violet-600">{item.email}</div>
                          </div>
                        </td>
                        <td className="py-3 pr-4">
                          <span className={`text-xs px-2 py-1 rounded border ${item.opportunityColor}`}>
                            {item.opportunity}
                          </span>
                        </td>
                        <td className="py-3 pr-4">
                          <div className="flex items-center gap-2">
                            <span>{item.da}</span>
                            <div className="w-16 h-2 bg-gray-200 rounded-full overflow-hidden">
                              <div
                                className="h-full rounded-full bg-green-500"
                                style={{ width: `${item.da}%` }}
                              />
                            </div>
                          </div>
                        </td>
                        <td className="py-3 pr-4">
                          <span className={`text-sm ${item.statusColor}`}>{item.status}</span>
                        </td>
                        <td className="py-3 pr-4">
                          <span className={`text-xs px-2 py-1 rounded ${item.difficultyColor}`}>
                            {item.difficulty}
                          </span>
                        </td>
                        <td className="py-3">
                          <div className="flex items-center gap-2">
                            <Button variant="ghost" size="icon" className="size-8">
                              <ExternalLink className="size-4" />
                            </Button>
                            <Button variant="ghost" size="icon" className="size-8">
                              <CheckCircle className="size-4" />
                            </Button>
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <div className="flex items-center justify-between mt-4 pt-4 border-t">
                <span className="text-sm text-muted-foreground">Showing 5 of 28 prospects</span>
                <div className="flex gap-2">
                  <Button variant="outline" size="sm">Previous</Button>
                  <Button variant="outline" size="sm">Next</Button>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Bottom Row */}
          <div className="grid gap-6 lg:grid-cols-3">
            {/* Prospects by Status */}
            <Card>
              <CardHeader>
                <CardTitle>Prospects by Status</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                {prospectsByStatus.map((item, i) => (
                  <div key={i} className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <div className={`size-3 rounded-full ${item.color}`} />
                      <span className="text-sm">{item.status}</span>
                    </div>
                    <span className="text-sm text-muted-foreground">{item.count}</span>
                  </div>
                ))}
              </CardContent>
            </Card>

            {/* Prospects by Type */}
            <Card>
              <CardHeader>
                <CardTitle>Prospects by Type</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                {prospectsByType.map((item, i) => (
                  <div key={i} className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <div className={`size-3 rounded-full ${item.color}`} />
                      <span className="text-sm">{item.type}</span>
                    </div>
                    <span className="text-sm text-muted-foreground">{item.count}</span>
                  </div>
                ))}
              </CardContent>
            </Card>

            {/* Actions */}
            <Card>
              <CardHeader>
                <CardTitle>Actions</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <Button variant="outline" className="w-full justify-start gap-2">
                  <UserPlus className="size-4" />
                  Add New Prospect
                </Button>
                <Button variant="outline" className="w-full justify-start gap-2">
                  <Upload className="size-4" />
                  Import From CSV
                </Button>
                <Button variant="outline" className="w-full justify-start gap-2">
                  <Mail className="size-4" />
                  Create Email Template
                </Button>
                <Button variant="outline" className="w-full justify-start gap-2">
                  <Send className="size-4" />
                  Start Campaign
                </Button>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="campaigns" className="space-y-6">
          {/* Outreach Prospects Table */}
          <Card>
            <CardHeader>
              <CardTitle>Outreach Prospects</CardTitle>
              <CardDescription>Manage your link building prospects and track outreach status</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b text-muted-foreground">
                      <th className="text-left font-medium py-3 pr-4">Campaign Name</th>
                      <th className="text-left font-medium py-3 pr-4">Targets</th>
                      <th className="text-left font-medium py-3 pr-4">Contacted</th>
                      <th className="text-left font-medium py-3 pr-4">Responses</th>
                      <th className="text-left font-medium py-3 pr-4">Success Rate</th>
                      <th className="text-left font-medium py-3 pr-4">Status</th>
                      <th className="text-left font-medium py-3 pr-4">Last Updated</th>
                      <th className="text-left font-medium py-3">Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    {[
                      { name: "Q2 Guest Post Campaign", targets: 25, contacted: 25, responses: 12, rate: 32, status: "Active", statusColor: "text-green-600", updated: "2 days ago" },
                      { name: "Resource Page Outreach", targets: 40, contacted: 35, responses: 18, rate: 40, status: "Active", statusColor: "text-green-600", updated: "1 week ago" },
                      { name: "Broken Link Building", targets: 30, contacted: 30, responses: 15, rate: 30, status: "Completed", statusColor: "text-blue-600", updated: "1 month ago" },
                      { name: "Industry Sponsorships", targets: 10, contacted: 8, responses: 6, rate: 38, status: "Fail", statusColor: "text-red-500", updated: "3 month ago" },
                    ].map((campaign, i) => (
                      <tr key={i} className="border-b last:border-0">
                        <td className="py-3 pr-4 font-medium">{campaign.name}</td>
                        <td className="py-3 pr-4 text-muted-foreground">{campaign.targets}</td>
                        <td className="py-3 pr-4 text-muted-foreground">{campaign.contacted}</td>
                        <td className="py-3 pr-4 text-muted-foreground">{campaign.responses}</td>
                        <td className="py-3 pr-4">
                          <div className="flex items-center gap-2">
                            <span>{campaign.rate}%</span>
                            <div className="w-16 h-2 bg-gray-200 rounded-full overflow-hidden">
                              <div
                                className="h-full rounded-full bg-yellow-400"
                                style={{ width: `${campaign.rate}%` }}
                              />
                            </div>
                          </div>
                        </td>
                        <td className="py-3 pr-4">
                          <span className={`text-sm ${campaign.statusColor}`}>{campaign.status}</span>
                        </td>
                        <td className="py-3 pr-4 text-muted-foreground">{campaign.updated}</td>
                        <td className="py-3">
                          <Button variant="outline" size="sm">View Details</Button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </CardContent>
          </Card>

          {/* Bottom Row */}
          <div className="grid gap-6 lg:grid-cols-2">
            {/* Create New Outreach Campaign */}
            <Card>
              <CardHeader>
                <CardTitle>Create New Outreach Campaign</CardTitle>
                <CardDescription>Set up a new link building outreach campaign</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <label className="text-sm font-medium">Campaign Name</label>
                  <Input placeholder="Enter campaign name" />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium">Campaign Type</label>
                  <div className="relative">
                    <select className="w-full h-10 px-3 pr-10 border rounded-md bg-background text-sm appearance-none cursor-pointer">
                      <option>Guest Post Outreach</option>
                      <option>Resource Page</option>
                      <option>Broken Link Building</option>
                      <option>Unlinked Mentions</option>
                    </select>
                    <div className="absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none">
                      <svg className="size-4 text-muted-foreground" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    </div>
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium">Target Prospects</label>
                  <div className="relative">
                    <select className="w-full h-10 px-3 pr-10 border rounded-md bg-background text-sm appearance-none cursor-pointer">
                      <option>28 prospects available</option>
                      <option>All prospects</option>
                      <option>High priority only</option>
                    </select>
                    <div className="absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none">
                      <svg className="size-4 text-muted-foreground" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    </div>
                  </div>
                </div>
                <Button className="w-full bg-violet-600 hover:bg-violet-700 text-white">
                  Create Campaign
                </Button>
              </CardContent>
            </Card>

            {/* Campaign Performance */}
            <Card>
              <CardHeader>
                <CardTitle>Campaign Performance</CardTitle>
                <CardDescription>Success rates by campaign type</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                {[
                  { name: "Guest Post Outreach", rate: 32, attempts: 120, color: "bg-yellow-400" },
                  { name: "Resource Page Link Building", rate: 40, attempts: 100, color: "bg-yellow-400" },
                  { name: "Broken Link Building", rate: 30, attempts: 90, color: "bg-yellow-400" },
                  { name: "Unlinked Mention Recovery", rate: 60, attempts: 75, color: "bg-green-500" },
                ].map((item, i) => (
                  <div key={i} className="p-4 border rounded-lg space-y-2">
                    <div className="flex items-center justify-between">
                      <span className="font-medium">{item.name}</span>
                      <span className="font-semibold">{item.rate}%</span>
                    </div>
                    <div className="w-full h-2 bg-gray-200 rounded-full overflow-hidden">
                      <div
                        className={`h-full rounded-full ${item.color}`}
                        style={{ width: `${item.rate}%` }}
                      />
                    </div>
                    <p className="text-sm text-muted-foreground">
                      {item.rate}% success rate from {item.attempts} outreach attempts
                    </p>
                  </div>
                ))}
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="reporting" className="space-y-6">
          {/* Stat Cards */}
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            <Card>
              <CardContent className="pt-6">
                <div className="flex items-start justify-between">
                  <div>
                    <div className="text-sm text-muted-foreground">Total Links Built</div>
                    <div className="text-3xl font-bold text-violet-600 mt-1">34</div>
                    <p className="text-sm mt-1">
                      <span className="text-green-600">+8</span>
                      <span className="text-muted-foreground"> in the last month</span>
                    </p>
                  </div>
                  <svg className="w-12 h-8" viewBox="0 0 48 32">
                    <path d="M0 28 L12 20 L24 24 L36 12 L48 16" fill="none" stroke="#22c55e" strokeWidth="2"/>
                  </svg>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="pt-6">
                <div className="flex items-start justify-between">
                  <div>
                    <div className="text-sm text-muted-foreground">Average DA</div>
                    <div className="text-3xl font-bold text-violet-600 mt-1">68</div>
                    <p className="text-sm mt-1">
                      <span className="text-green-600">+3</span>
                      <span className="text-muted-foreground"> in the last month</span>
                    </p>
                  </div>
                  <svg className="w-12 h-8" viewBox="0 0 48 32">
                    <path d="M0 24 L12 20 L24 16 L36 18 L48 8" fill="none" stroke="#22c55e" strokeWidth="2"/>
                  </svg>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="pt-6">
                <div className="flex items-start justify-between">
                  <div>
                    <div className="text-sm text-muted-foreground">Success Rate</div>
                    <div className="text-3xl font-bold text-violet-600 mt-1">32%</div>
                    <p className="text-sm mt-1">
                      <span className="text-red-500">-5</span>
                      <span className="text-muted-foreground"> in the last month</span>
                    </p>
                  </div>
                  <svg className="w-12 h-8" viewBox="0 0 48 32">
                    <path d="M0 8 L12 12 L24 16 L36 20 L48 28" fill="none" stroke="#ef4444" strokeWidth="2"/>
                  </svg>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="pt-6">
                <div className="flex items-start justify-between">
                  <div>
                    <div className="text-sm text-muted-foreground">Response Rate</div>
                    <div className="text-3xl font-bold text-violet-600 mt-1">48%</div>
                    <p className="text-sm mt-1">
                      <span className="text-green-600">+7%</span>
                      <span className="text-muted-foreground"> from last month</span>
                    </p>
                  </div>
                  <svg className="w-12 h-8" viewBox="0 0 48 32">
                    <path d="M0 28 L12 24 L24 20 L36 16 L48 8" fill="none" stroke="#22c55e" strokeWidth="2"/>
                  </svg>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Bottom Row */}
          <div className="grid gap-6 lg:grid-cols-2">
            {/* Recent Link Acquisitions */}
            <Card>
              <CardHeader>
                <CardTitle>Recent Link Acquisitions</CardTitle>
                <CardDescription>Links built in the last 30 days</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="overflow-x-auto">
                  <table className="w-full text-sm">
                    <thead>
                      <tr className="border-b text-muted-foreground">
                        <th className="text-left font-medium py-3 pr-4">Website</th>
                        <th className="text-left font-medium py-3 pr-4">Authority</th>
                        <th className="text-left font-medium py-3 pr-4">Type</th>
                        <th className="text-left font-medium py-3">Date</th>
                      </tr>
                    </thead>
                    <tbody>
                      {[
                        { website: "marketinghub.com", authority: 82, type: "Guest Post", typeColor: "bg-green-100 text-green-700 border-green-300", date: "3 days ago" },
                        { website: "seoexpert.blog", authority: 68, type: "Resource Link", typeColor: "bg-blue-100 text-blue-700 border-blue-300", date: "1 week ago" },
                        { website: "digitalmarketer.news", authority: 72, type: "Editorial", typeColor: "bg-purple-100 text-purple-700 border-purple-300", date: "2 weeks ago" },
                        { website: "webanalytics.edu", authority: 79, type: "Guest Post", typeColor: "bg-green-100 text-green-700 border-green-300", date: "2 weeks ago" },
                        { website: "contentmaster.org", authority: 70, type: "Unlinked Mention", typeColor: "bg-orange-100 text-orange-600 border-orange-300", date: "3 weeks ago" },
                      ].map((item, i) => (
                        <tr key={i} className="border-b last:border-0">
                          <td className="py-3 pr-4 font-medium">{item.website}</td>
                          <td className="py-3 pr-4 text-muted-foreground">{item.authority}</td>
                          <td className="py-3 pr-4">
                            <span className={`text-xs px-2 py-1 rounded border ${item.typeColor}`}>
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

            {/* Link Building Tasks */}
            <Card>
              <CardHeader>
                <CardTitle>Link Building Tasks</CardTitle>
                <CardDescription>Outstanding tasks for your link building</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                {[
                  { title: "Follow up with digitaltrends.com", status: "In Progress", statusColor: "bg-blue-100 text-blue-700", priority: "High", priorityColor: "bg-red-100 text-red-600", due: "Due: Today" },
                  { title: "Create guest post for marketing101.edu", status: "Not Started", statusColor: "bg-gray-100 text-gray-600", priority: "Medium", priorityColor: "bg-yellow-100 text-yellow-700", due: "Due: Tomorrow" },
                  { title: "Respond to analyticspro.io's inquiry", status: "Not Started", statusColor: "bg-gray-100 text-gray-600", priority: "Medium", priorityColor: "bg-yellow-100 text-yellow-700", due: "Due: In 2 days" },
                ].map((task, i) => (
                  <div key={i} className="p-4 border rounded-lg">
                    <div className="flex items-center justify-between mb-2">
                      <span className="font-medium">{task.title}</span>
                      <span className={`text-xs px-2 py-1 rounded ${task.statusColor}`}>
                        {task.status}
                      </span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className={`text-xs px-2 py-0.5 rounded ${task.priorityColor}`}>
                        {task.priority}
                      </span>
                      <span className="text-sm text-muted-foreground">{task.due}</span>
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

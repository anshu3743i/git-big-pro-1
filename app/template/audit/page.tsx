"use client";

import {
  Search,
  AlertCircle,
  AlertTriangle,
  CheckCircle,
  TrendingUp,
  FileText,
  Download
} from "lucide-react";

import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

// Issue Breakdown data
const issueBreakdownData = [
  { category: "Performance", errors: 3, warnings: 8, passed: 10, summary: "3 errors, 8 warnings, 10 Passed" },
  { category: "SEO", errors: 5, warnings: 12, passed: 20, summary: "5 errors, 12 warnings, Full Passed" },
  { category: "Accessibility", errors: 2, warnings: 7, passed: 8, summary: "2 errors, 7 warnings, 8 Passed" },
  { category: "Best Practices", errors: 1, warnings: 4, passed: 9, summary: "1 errors, 4 warnings, 9 Passed" },
  { category: "Security", errors: 1, warnings: 3, passed: 11, summary: "1 errors, 3 warnings, 11 Passed" }
];

// Top Issues data
const topIssuesData = [
  { issue: "Images missing alt text", icon: "warning", pages: 8, impact: "Easy", impactColor: "bg-green-100 text-green-700" },
  { issue: "Slow page load speed (>3s)", icon: "error", pages: 6, impact: "High", impactColor: "bg-red-100 text-red-600" },
  { issue: "Missing meta descriptions", icon: "warning", pages: 14, impact: "Medium", impactColor: "bg-yellow-100 text-yellow-700" },
  { issue: "Low word count", icon: "warning", pages: 12, impact: "Medium", impactColor: "bg-yellow-100 text-yellow-700" },
  { issue: "Broken links", icon: "error", pages: 4, impact: "High", impactColor: "bg-red-100 text-red-600" },
  { issue: "Duplicate title tags", icon: "warning", pages: 8, impact: "Medium", impactColor: "bg-yellow-100 text-yellow-700" }
];

export default function SiteAuditPage() {
  return (
    <div className="space-y-6">
      {/* Page Header */}
      <div>
        <h1 className="text-2xl font-bold tracking-tight">Site Audit</h1>
        <p className="text-muted-foreground">
          Analyze your website for technical SEO issues
        </p>
      </div>

      {/* Start a New Audit Card */}
      <Card>
        <CardHeader>
          <CardTitle>Start a New Audit</CardTitle>
          <CardDescription>Enter your domain to begin a comprehensive site audit</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="flex flex-col gap-3 sm:flex-row">
            <div className="relative flex-1">
              <Input placeholder="example.com" className="pr-10" />
              <Search className="absolute right-3 top-1/2 -translate-y-1/2 size-4 text-muted-foreground" />
            </div>
            <Button className="bg-violet-600 hover:bg-violet-700 text-white">Start Audit</Button>
          </div>
        </CardContent>
      </Card>

      {/* Audit Results Card */}
      <Card>
        <CardHeader>
          <CardTitle>Audit Results</CardTitle>
          <CardDescription>Summary of issues across different aspects of your site</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid gap-6 md:grid-cols-4">
            {/* Site Score */}
            <div className="flex items-center justify-center">
              <div className="w-36 h-36 rounded-full bg-violet-600 flex flex-col items-center justify-center text-white">
                <span className="text-5xl font-bold">78</span>
                <span className="text-sm">Site Score</span>
              </div>
            </div>

            {/* Issues Found */}
            <div className="space-y-3 border-l pl-6">
              <h3 className="font-medium">Issues Found</h3>
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <AlertCircle className="size-4 text-red-500" />
                    <span className="text-red-500">Errors</span>
                  </div>
                  <span className="font-medium">12</span>
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <AlertTriangle className="size-4 text-yellow-500" />
                    <span className="text-yellow-500">Warnings</span>
                  </div>
                  <span className="font-medium">35</span>
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <CheckCircle className="size-4 text-green-500" />
                    <span className="text-green-500">Passed</span>
                  </div>
                  <span className="font-medium">156</span>
                </div>
              </div>
            </div>

            {/* Crawl Stats */}
            <div className="space-y-3 border-l pl-6">
              <h3 className="font-medium">Crawl Stats</h3>
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <span className="text-muted-foreground">Pages Crawled</span>
                  <div className="flex items-center gap-1 text-green-600">
                    <TrendingUp className="size-4" />
                    <span>+102</span>
                  </div>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-muted-foreground">Crawl Time</span>
                  <span>24 minutes</span>
                </div>
              </div>
            </div>

            {/* Next Steps */}
            <div className="space-y-3 border-l pl-6">
              <h3 className="font-medium">Next Steps</h3>
              <div className="space-y-2">
                <Button variant="outline" className="w-full justify-center gap-2">
                  <FileText className="size-4" />
                  View Full Report
                </Button>
                <Button variant="outline" className="w-full justify-center gap-2">
                  <Download className="size-4" />
                  Export Result
                </Button>
              </div>
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
            value="issues"
            className="rounded-none border-b-2 border-transparent data-[state=active]:border-violet-600 data-[state=active]:bg-transparent data-[state=active]:shadow-none px-0 pb-3"
          >
            Issues
          </TabsTrigger>
          <TabsTrigger
            value="performance"
            className="rounded-none border-b-2 border-transparent data-[state=active]:border-violet-600 data-[state=active]:bg-transparent data-[state=active]:shadow-none px-0 pb-3"
          >
            Performance
          </TabsTrigger>
          <TabsTrigger
            value="seo"
            className="rounded-none border-b-2 border-transparent data-[state=active]:border-violet-600 data-[state=active]:bg-transparent data-[state=active]:shadow-none px-0 pb-3"
          >
            SEO
          </TabsTrigger>
        </TabsList>

        <TabsContent value="overview" className="space-y-6">
          {/* Issue Breakdown by Category */}
          <Card>
            <CardHeader>
              <CardTitle>Issue Breakdown by Category</CardTitle>
              <CardDescription>Summary of issues across different aspects of your site</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              {issueBreakdownData.map((item, i) => {
                const total = item.errors + item.warnings + item.passed;
                const errorPercent = (item.errors / total) * 100;
                const warningPercent = (item.warnings / total) * 100;
                const passedPercent = (item.passed / total) * 100;

                return (
                  <div key={i} className="space-y-2">
                    <div className="flex items-center justify-between">
                      <span className="text-sm font-medium">{item.category}</span>
                      <span className="text-sm text-muted-foreground">{item.summary}</span>
                    </div>
                    <div className="h-3 flex rounded-full overflow-hidden">
                      <div className="bg-red-500" style={{ width: `${errorPercent}%` }} />
                      <div className="bg-yellow-400" style={{ width: `${warningPercent}%` }} />
                      <div className="bg-green-500" style={{ width: `${passedPercent}%` }} />
                    </div>
                  </div>
                );
              })}

              <div className="flex items-center justify-between mt-4 pt-4 border-t">
                <span className="text-sm text-muted-foreground">Showing 7 of 42 opportunities</span>
                <div className="flex gap-2">
                  <Button variant="outline" size="sm">Previous</Button>
                  <Button variant="outline" size="sm">Next</Button>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Top Issues to Fix */}
          <Card>
            <CardHeader>
              <CardTitle>Top Issues to Fix</CardTitle>
              <CardDescription>Prioritized list of issues with the highest impact</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b text-muted-foreground">
                      <th className="text-left font-medium py-3 pr-4">Issue</th>
                      <th className="text-left font-medium py-3 pr-4">Pages Affected</th>
                      <th className="text-left font-medium py-3 pr-4">Impact</th>
                      <th className="text-left font-medium py-3">Action</th>
                    </tr>
                  </thead>
                  <tbody>
                    {topIssuesData.map((item, i) => (
                      <tr key={i} className="border-b last:border-0">
                        <td className="py-3 pr-4">
                          <div className="flex items-center gap-2">
                            {item.icon === "error" ? (
                              <AlertCircle className="size-4 text-red-500" />
                            ) : (
                              <AlertTriangle className="size-4 text-yellow-500" />
                            )}
                            <span>{item.issue}</span>
                          </div>
                        </td>
                        <td className="py-3 pr-4 text-muted-foreground">{item.pages}</td>
                        <td className="py-3 pr-4">
                          <span className={`text-xs px-2 py-1 rounded ${item.impactColor}`}>
                            {item.impact}
                          </span>
                        </td>
                        <td className="py-3">
                          <Button variant="ghost" size="sm" className="text-muted-foreground hover:text-foreground">
                            Fix
                          </Button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="issues">
          <Card>
            <CardContent className="pt-6">
              <div className="flex flex-col items-center justify-center py-12 text-center">
                <AlertCircle className="size-12 text-muted-foreground mb-4" />
                <h3 className="text-lg font-semibold">Issues</h3>
                <p className="text-sm text-muted-foreground mt-2">
                  Detailed list of all issues found during the audit.
                </p>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="performance">
          <Card>
            <CardContent className="pt-6">
              <div className="flex flex-col items-center justify-center py-12 text-center">
                <TrendingUp className="size-12 text-muted-foreground mb-4" />
                <h3 className="text-lg font-semibold">Performance</h3>
                <p className="text-sm text-muted-foreground mt-2">
                  Performance metrics and optimization suggestions.
                </p>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="seo">
          <Card>
            <CardContent className="pt-6">
              <div className="flex flex-col items-center justify-center py-12 text-center">
                <Search className="size-12 text-muted-foreground mb-4" />
                <h3 className="text-lg font-semibold">SEO</h3>
                <p className="text-sm text-muted-foreground mt-2">
                  SEO analysis and recommendations.
                </p>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
}

"use client";

import {
  Search,
  FileText,
  Clock,
  Link2,
  List,
  Table,
  Image,
  Heading,
  AlignLeft
} from "lucide-react";

import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

export default function ContentAnalyzerPage() {
  return (
    <div className="space-y-6">
      {/* Page Header */}
      <div>
        <h1 className="text-2xl font-bold tracking-tight">Content Analyzer</h1>
        <p className="text-muted-foreground">
          Analyze and optimize your content for SEO
        </p>
      </div>

      {/* Analyze Content Card */}
      <Card>
        <CardHeader>
          <CardTitle>Analyze Content</CardTitle>
          <CardDescription>Enter a URL or paste your content to analyze</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="flex flex-col gap-3 sm:flex-row">
            <div className="relative flex-1">
              <Input placeholder="example.com" className="pr-10" />
              <Search className="absolute right-3 top-1/2 -translate-y-1/2 size-4 text-muted-foreground" />
            </div>
            <Button className="bg-violet-600 hover:bg-violet-700 text-white">Start Audit</Button>
          </div>

          {/* Or Divider */}
          <div className="flex items-center gap-4">
            <div className="flex-1 border-t border-dashed" />
            <span className="text-sm text-muted-foreground">Or</span>
            <div className="flex-1 border-t border-dashed" />
          </div>

          {/* Paste Content Button */}
          <Button variant="outline" className="w-full">
            Paste Content
          </Button>
        </CardContent>
      </Card>

      {/* Content Score Card */}
      <Card>
        <CardHeader>
          <CardTitle>Content Score</CardTitle>
          <CardDescription>Overall assessment of your content</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid gap-6 md:grid-cols-3">
            {/* Content Score */}
            <div className="flex items-center justify-center bg-gradient-to-br from-violet-400 to-pink-400 rounded-lg p-8">
              <div className="text-center text-white">
                <span className="text-6xl font-bold">83</span>
                <div className="text-lg mt-1">Content Score</div>
              </div>
            </div>

            {/* Content Stats */}
            <div className="space-y-4 border-l pl-6">
              <h3 className="font-medium">Content Stats</h3>
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <FileText className="size-4 text-muted-foreground" />
                    <span>Word Count</span>
                  </div>
                  <span className="font-medium">1547</span>
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <Clock className="size-4 text-muted-foreground" />
                    <span>Reading Time</span>
                  </div>
                  <span className="font-medium">7 min</span>
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <Link2 className="size-4 text-muted-foreground" />
                    <span>Backlink</span>
                  </div>
                  <span className="font-medium">8</span>
                </div>
              </div>
            </div>

            {/* Readability */}
            <div className="space-y-4 border-l pl-6">
              <h3 className="font-medium">Readability</h3>
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span>Score</span>
                  <span className="font-medium">68/100</span>
                </div>
                <div className="flex items-center justify-between">
                  <span>Level</span>
                  <span className="font-medium">College</span>
                </div>
                <div className="w-full h-2 bg-gray-200 rounded-full overflow-hidden">
                  <div className="h-full rounded-full bg-gradient-to-r from-violet-500 to-pink-500" style={{ width: "68%" }} />
                </div>
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
            value="keywords"
            className="rounded-none border-b-2 border-transparent data-[state=active]:border-violet-600 data-[state=active]:bg-transparent data-[state=active]:shadow-none px-0 pb-3"
          >
            Keywords
          </TabsTrigger>
          <TabsTrigger
            value="readability"
            className="rounded-none border-b-2 border-transparent data-[state=active]:border-violet-600 data-[state=active]:bg-transparent data-[state=active]:shadow-none px-0 pb-3"
          >
            Readability
          </TabsTrigger>
          <TabsTrigger
            value="improvements"
            className="rounded-none border-b-2 border-transparent data-[state=active]:border-violet-600 data-[state=active]:bg-transparent data-[state=active]:shadow-none px-0 pb-3"
          >
            Improvements
          </TabsTrigger>
        </TabsList>

        <TabsContent value="overview" className="space-y-6">
          {/* Content Structure */}
          <Card>
            <CardHeader>
              <CardTitle>Content Structure</CardTitle>
              <CardDescription>Breakdown of your content elements</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid gap-4 md:grid-cols-3">
                {/* Paragraph Count */}
                <div className="border rounded-lg p-6 text-center">
                  <div className="text-4xl font-bold text-violet-600">18</div>
                  <div className="text-muted-foreground mt-1">Paragraph Count</div>
                </div>

                {/* Headings */}
                <div className="border rounded-lg p-6 text-center">
                  <div className="text-4xl font-bold text-violet-600">7</div>
                  <div className="text-muted-foreground mt-1">Headings</div>
                </div>

                {/* Images */}
                <div className="border rounded-lg p-6 text-center">
                  <div className="text-4xl font-bold text-violet-600">4</div>
                  <div className="text-muted-foreground mt-1">Images</div>
                </div>

                {/* Links */}
                <div className="border rounded-lg p-6 text-center">
                  <div className="text-4xl font-bold text-violet-600">8</div>
                  <div className="text-muted-foreground mt-1">Links</div>
                </div>

                {/* List */}
                <div className="border rounded-lg p-6 text-center">
                  <div className="text-4xl font-bold text-violet-600">3</div>
                  <div className="text-muted-foreground mt-1">List</div>
                </div>

                {/* Tables */}
                <div className="border rounded-lg p-6 text-center">
                  <div className="text-4xl font-bold text-violet-600">1</div>
                  <div className="text-muted-foreground mt-1">Tables</div>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="keywords">
          <Card>
            <CardHeader>
              <CardTitle>Keyword Analysis</CardTitle>
              <CardDescription>Keywords found in your content and their metrics</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b text-muted-foreground">
                      <th className="text-left font-medium py-3 pr-4">Keyword</th>
                      <th className="text-left font-medium py-3 pr-4">Count</th>
                      <th className="text-left font-medium py-3 pr-4">Density</th>
                      <th className="text-left font-medium py-3">Competition</th>
                    </tr>
                  </thead>
                  <tbody>
                    {[
                      { keyword: "content marketing", count: 24, density: "1.55%", competition: "High", compColor: "bg-red-100 text-red-600" },
                      { keyword: "SEO strategy", count: 18, density: "1.16%", competition: "High", compColor: "bg-red-100 text-red-600" },
                      { keyword: "content analysis", count: 15, density: "0.97%", competition: "Medium", compColor: "bg-yellow-100 text-yellow-700" },
                      { keyword: "blog content", count: 12, density: "0.78%", competition: "Medium", compColor: "bg-yellow-100 text-yellow-700" },
                      { keyword: "digital marketing", count: 10, density: "0.65%", competition: "High", compColor: "bg-red-100 text-red-600" },
                      { keyword: "content optimization", count: 8, density: "0.52%", competition: "Easy", compColor: "bg-green-100 text-green-700" },
                    ].map((item, i) => (
                      <tr key={i} className="border-b last:border-0">
                        <td className="py-3 pr-4">{item.keyword}</td>
                        <td className="py-3 pr-4 text-muted-foreground">{item.count}</td>
                        <td className="py-3 pr-4 text-muted-foreground">{item.density}</td>
                        <td className="py-3">
                          <span className={`text-xs px-2 py-1 rounded ${item.compColor}`}>
                            {item.competition}
                          </span>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="readability" className="space-y-6">
          {/* Readability Metrics */}
          <Card>
            <CardHeader>
              <CardTitle>Keyword Analysis</CardTitle>
              <CardDescription>Keywords found in your content and their metrics</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid gap-4 md:grid-cols-2">
                {/* Flesch Reading Ease */}
                <div className="border rounded-lg p-4 space-y-3">
                  <h3 className="font-semibold">Flesch Reading Ease</h3>
                  <div className="flex items-center justify-between">
                    <span className="text-muted-foreground">Score</span>
                    <span className="font-medium">58.3</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-muted-foreground">Rating</span>
                    <span className="font-medium">Fairly Difficult</span>
                  </div>
                </div>

                {/* Flesch-Kincaid Grade */}
                <div className="border rounded-lg p-4 space-y-3">
                  <h3 className="font-semibold">Flesch-Kincaid Grade</h3>
                  <div className="flex items-center justify-between">
                    <span className="text-muted-foreground">Score</span>
                    <span className="font-medium">10.2</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-muted-foreground">Rating</span>
                    <span className="font-medium">High School</span>
                  </div>
                </div>

                {/* Gunning Fog Index */}
                <div className="border rounded-lg p-4 space-y-3">
                  <h3 className="font-semibold">Gunning Fog Index</h3>
                  <div className="flex items-center justify-between">
                    <span className="text-muted-foreground">Score</span>
                    <span className="font-medium">12.8</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-muted-foreground">Rating</span>
                    <span className="font-medium">College</span>
                  </div>
                </div>

                {/* SMOG Index */}
                <div className="border rounded-lg p-4 space-y-3">
                  <h3 className="font-semibold">SMOG Index</h3>
                  <div className="flex items-center justify-between">
                    <span className="text-muted-foreground">Score</span>
                    <span className="font-medium">11.4</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-muted-foreground">Rating</span>
                    <span className="font-medium">High School</span>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Sentence Length Distribution */}
          <Card>
            <CardHeader>
              <CardTitle>Sentence Length Distribution</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex items-end gap-2 h-[280px] pb-8">
                {/* Very Short */}
                <div className="flex-1 flex flex-col items-center">
                  <div className="w-full bg-violet-200 border-2 border-violet-300 rounded-t-lg" style={{ height: "120px" }} />
                  <span className="text-sm text-muted-foreground mt-2">Very Short</span>
                </div>
                {/* Short */}
                <div className="flex-1 flex flex-col items-center">
                  <div className="w-full bg-green-200 border-2 border-green-300 rounded-t-lg" style={{ height: "160px" }} />
                  <span className="text-sm text-muted-foreground mt-2">Short</span>
                </div>
                {/* Medium */}
                <div className="flex-1 flex flex-col items-center">
                  <div className="w-full bg-yellow-100 border-2 border-yellow-300 rounded-t-lg" style={{ height: "200px" }} />
                  <span className="text-sm text-muted-foreground mt-2">Medium</span>
                </div>
                {/* Long */}
                <div className="flex-1 flex flex-col items-center">
                  <div className="w-full bg-green-100 border-2 border-green-200 rounded-t-lg" style={{ height: "140px" }} />
                  <span className="text-sm text-muted-foreground mt-2">Long</span>
                </div>
                {/* Very Long */}
                <div className="flex-1 flex flex-col items-center">
                  <div className="w-full bg-red-100 border-2 border-red-200 rounded-t-lg" style={{ height: "80px" }} />
                  <span className="text-sm text-muted-foreground mt-2">Very Long</span>
                </div>
              </div>
              <p className="text-center text-sm text-muted-foreground mt-4">
                Ideal content has a mix of sentence lengths with an emphasis on short and medium sentences
              </p>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="improvements">
          <Card>
            <CardHeader>
              <CardTitle>Suggested Improvements</CardTitle>
              <CardDescription>Actionable recommendations to enhance your content</CardDescription>
            </CardHeader>
            <CardContent className="space-y-3">
              {/* Neutral suggestions */}
              <div className="p-4 bg-gray-100 rounded-lg">
                <span>Consider breaking up paragraphs that exceed 300 words</span>
              </div>
              <div className="p-4 bg-gray-100 rounded-lg">
                <span>Add more transition words to improve flow between paragraphs</span>
              </div>

              {/* Warning suggestions */}
              <div className="p-4 bg-yellow-50 border border-yellow-200 rounded-lg">
                <span>Increase keyword density for "content optimization"</span>
              </div>
              <div className="p-4 bg-yellow-50 border border-yellow-200 rounded-lg">
                <span>Add more descriptive alt text to images</span>
              </div>

              {/* Success suggestions */}
              <div className="p-4 bg-green-50 border border-green-200 rounded-lg">
                <span className="text-green-800">Good use of headers and subheaders</span>
              </div>
              <div className="p-4 bg-green-50 border border-green-200 rounded-lg">
                <span className="text-green-800">Appropriate reading level for target audience</span>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
}

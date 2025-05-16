import { DashboardHeader } from "@/components/dashboard/header"
import { SearchBar } from "@/components/search-bar"
import { RiskScoreCard } from "@/components/risk-score-card"
import { RecentScans } from "@/components/recent-scans"
import { RiskFactorsBreakdown } from "@/components/risk-factors-breakdown"
import { EducationalResources } from "@/components/educational-resources"
import { WatchlistTable } from "@/components/watchlist-table"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      <DashboardHeader />
      <main className="flex-1 bg-muted/40">
        <div className="container mx-auto py-6 px-4 md:px-6">
          <div className="mb-8">
            <h1 className="text-3xl font-bold mb-2">Ocean Protocol Rug Pull Detector</h1>
            <p className="text-muted-foreground">
              Analyze and detect potential rug pulls in Ocean Protocol data pools and tokens
            </p>
          </div>

          <SearchBar />

          <div className="grid gap-6 mt-8 md:grid-cols-2 lg:grid-cols-3">
            <RiskScoreCard />
            <div className="md:col-span-1 lg:col-span-2">
              <RecentScans />
            </div>
          </div>

          <Tabs defaultValue="watchlist" className="mt-8">
            <TabsList className="grid w-full grid-cols-3">
              <TabsTrigger value="watchlist">Watchlist</TabsTrigger>
              <TabsTrigger value="analysis">Risk Analysis</TabsTrigger>
              <TabsTrigger value="education">Education</TabsTrigger>
            </TabsList>
            <TabsContent value="watchlist" className="mt-4">
              <WatchlistTable />
            </TabsContent>
            <TabsContent value="analysis" className="mt-4">
              <RiskFactorsBreakdown />
            </TabsContent>
            <TabsContent value="education" className="mt-4">
              <EducationalResources />
            </TabsContent>
          </Tabs>
        </div>
      </main>
    </div>
  )
}

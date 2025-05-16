import { DashboardHeader } from "@/components/dashboard/header"
import { SearchBar } from "@/components/search-bar"
import { RiskScoreCard } from "@/components/risk-score-card"
import { RiskFactorsBreakdown } from "@/components/risk-factors-breakdown"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { AlertTriangle, ArrowLeft, Download, Eye, Plus } from "lucide-react"
import Link from "next/link"

export default function ScanPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <DashboardHeader />
      <main className="flex-1 bg-muted/40">
        <div className="container mx-auto py-6 px-4 md:px-6">
          <div className="mb-6 flex items-center gap-4">
            <Button variant="outline" size="icon" asChild>
              <Link href="/">
                <ArrowLeft className="h-4 w-4" />
                <span className="sr-only">Back to dashboard</span>
              </Link>
            </Button>
            <div>
              <h1 className="text-3xl font-bold">Scan Token</h1>
              <p className="text-muted-foreground">Analyze a token or pool for rug pull risk</p>
            </div>
          </div>

          <SearchBar />

          <div className="mt-8 grid gap-6 md:grid-cols-3">
            <div className="md:col-span-1">
              <RiskScoreCard />
              <Card className="mt-6">
                <CardHeader>
                  <CardTitle>Actions</CardTitle>
                </CardHeader>
                <CardContent className="space-y-2">
                  <Button className="w-full justify-start" variant="outline">
                    <Eye className="mr-2 h-4 w-4" />
                    View on Ocean Market
                  </Button>
                  <Button className="w-full justify-start" variant="outline">
                    <Plus className="mr-2 h-4 w-4" />
                    Add to Watchlist
                  </Button>
                  <Button className="w-full justify-start" variant="outline">
                    <Download className="mr-2 h-4 w-4" />
                    Download Report
                  </Button>
                </CardContent>
              </Card>
              <Card className="mt-6">
                <CardHeader>
                  <CardTitle>Token Information</CardTitle>
                </CardHeader>
                <CardContent>
                  <dl className="space-y-2">
                    <div>
                      <dt className="text-sm font-medium text-muted-foreground">Name</dt>
                      <dd>Ocean Data Science Pool</dd>
                    </div>
                    <div>
                      <dt className="text-sm font-medium text-muted-foreground">Address</dt>
                      <dd className="font-mono text-xs">0x7e92...f3a1</dd>
                    </div>
                    <div>
                      <dt className="text-sm font-medium text-muted-foreground">Created</dt>
                      <dd>March 15, 2023</dd>
                    </div>
                    <div>
                      <dt className="text-sm font-medium text-muted-foreground">Total Supply</dt>
                      <dd>1,000,000 OCEAN</dd>
                    </div>
                    <div>
                      <dt className="text-sm font-medium text-muted-foreground">Holders</dt>
                      <dd>245</dd>
                    </div>
                  </dl>
                </CardContent>
              </Card>
            </div>
            <div className="md:col-span-2">
              <Tabs defaultValue="analysis">
                <TabsList className="grid w-full grid-cols-2">
                  <TabsTrigger value="analysis">Risk Analysis</TabsTrigger>
                  <TabsTrigger value="alerts">Alerts & History</TabsTrigger>
                </TabsList>
                <TabsContent value="analysis" className="mt-4">
                  <RiskFactorsBreakdown />
                </TabsContent>
                <TabsContent value="alerts" className="mt-4">
                  <Card>
                    <CardHeader>
                      <CardTitle>Risk Alerts</CardTitle>
                      <CardDescription>Recent alerts for this token</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-4">
                        <div className="flex items-start gap-3 rounded-md border p-4">
                          <AlertTriangle className="mt-0.5 h-5 w-5 text-red-500" />
                          <div>
                            <h4 className="font-medium">Large Token Movement Detected</h4>
                            <p className="text-sm text-muted-foreground">
                              A wallet holding 15% of the total supply transferred all tokens to a new address.
                            </p>
                            <p className="mt-1 text-xs text-muted-foreground">2 hours ago</p>
                          </div>
                        </div>
                        <div className="flex items-start gap-3 rounded-md border p-4">
                          <AlertTriangle className="mt-0.5 h-5 w-5 text-amber-500" />
                          <div>
                            <h4 className="font-medium">Liquidity Reduction</h4>
                            <p className="text-sm text-muted-foreground">
                              Pool liquidity decreased by 25% in the last 24 hours.
                            </p>
                            <p className="mt-1 text-xs text-muted-foreground">1 day ago</p>
                          </div>
                        </div>
                        <div className="flex items-start gap-3 rounded-md border p-4">
                          <AlertTriangle className="mt-0.5 h-5 w-5 text-amber-500" />
                          <div>
                            <h4 className="font-medium">Contract Interaction</h4>
                            <p className="text-sm text-muted-foreground">
                              Owner address called the updateFees function, changing the fee structure.
                            </p>
                            <p className="mt-1 text-xs text-muted-foreground">3 days ago</p>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </TabsContent>
              </Tabs>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}

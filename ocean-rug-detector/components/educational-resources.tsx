"use client"

import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { AlertTriangle, BookOpen, ExternalLink, FileText, Shield } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export function EducationalResources() {
  return (
    <Tabs defaultValue="basics">
      <TabsList className="grid w-full grid-cols-3">
        <TabsTrigger value="basics">Rug Pull Basics</TabsTrigger>
        <TabsTrigger value="indicators">Warning Signs</TabsTrigger>
        <TabsTrigger value="protection">Protection Strategies</TabsTrigger>
      </TabsList>

      <TabsContent value="basics" className="mt-4 space-y-4">
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <BookOpen className="h-5 w-5 text-primary" />
              What is a Rug Pull?
            </CardTitle>
            <CardDescription>Understanding the basics of crypto rug pulls</CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground">
              A rug pull is a type of exit scam where crypto developers create a seemingly legitimate project, build up
              value and liquidity, then suddenly abandon the project and withdraw all funds, leaving investors with
              worthless tokens.
            </p>
            <div className="mt-4 space-y-2">
              <h4 className="font-medium">Common Types of Rug Pulls:</h4>
              <ul className="ml-6 list-disc space-y-1 text-muted-foreground">
                <li>Liquidity stealing - Developers remove all liquidity from trading pools</li>
                <li>Selling pressure - Team dumps large amounts of tokens, crashing the price</li>
                <li>Honeypot scams - Tokens that can be purchased but not sold</li>
                <li>Soft rug - Gradual abandonment of a project without explicit theft</li>
              </ul>
            </div>
          </CardContent>
          <CardFooter>
            <Button variant="outline" className="w-full" asChild>
              <Link href="/education/rug-pulls">
                Learn More <ExternalLink className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </CardFooter>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <FileText className="h-5 w-5 text-primary" />
              Ocean Protocol Specifics
            </CardTitle>
            <CardDescription>How rug pulls manifest in Ocean Protocol</CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground">
              In Ocean Protocol, rug pulls can occur in data pools and datatokens. Since Ocean Protocol focuses on data
              monetization, scammers may create fake datasets or AI models with inflated value propositions, then exit
              once sufficient investment has been gathered.
            </p>
            <div className="mt-4 space-y-2">
              <h4 className="font-medium">Ocean-specific Concerns:</h4>
              <ul className="ml-6 list-disc space-y-1 text-muted-foreground">
                <li>Fake or low-quality datasets with misleading descriptions</li>
                <li>Manipulated datatoken pricing</li>
                <li>Compute-to-Data services that don't deliver promised functionality</li>
                <li>Unverified or malicious algorithms in the marketplace</li>
              </ul>
            </div>
          </CardContent>
          <CardFooter>
            <Button variant="outline" className="w-full" asChild>
              <Link href="/education/ocean-protocol">
                Learn More <ExternalLink className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </CardFooter>
        </Card>
      </TabsContent>

      <TabsContent value="indicators" className="mt-4">
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <AlertTriangle className="h-5 w-5 text-primary" />
              Warning Signs to Watch For
            </CardTitle>
            <CardDescription>Red flags that may indicate a potential rug pull</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="rounded-md border p-4">
                <h3 className="font-medium">Contract Red Flags</h3>
                <ul className="mt-2 ml-6 list-disc space-y-1 text-muted-foreground">
                  <li>Unverified smart contract code</li>
                  <li>Mint functions that allow unlimited token creation</li>
                  <li>Owner privileges that haven't been renounced</li>
                  <li>Blacklist functions that can block specific addresses</li>
                  <li>Hidden fees or transfer restrictions</li>
                </ul>
              </div>

              <div className="rounded-md border p-4">
                <h3 className="font-medium">Liquidity & Token Distribution Red Flags</h3>
                <ul className="mt-2 ml-6 list-disc space-y-1 text-muted-foreground">
                  <li>Very short liquidity lock periods (or no lock at all)</li>
                  <li>High concentration of tokens in few wallets</li>
                  <li>Team tokens without vesting or lock-up periods</li>
                  <li>Suspicious wallet activity by team members</li>
                </ul>
              </div>

              <div className="rounded-md border p-4">
                <h3 className="font-medium">Project & Team Red Flags</h3>
                <ul className="mt-2 ml-6 list-disc space-y-1 text-muted-foreground">
                  <li>Anonymous team without verifiable backgrounds</li>
                  <li>Unrealistic promises or returns</li>
                  <li>Copied website or documentation</li>
                  <li>Excessive marketing with little substance</li>
                  <li>No clear roadmap or development activity</li>
                </ul>
              </div>
            </div>
          </CardContent>
          <CardFooter>
            <Button variant="outline" className="w-full" asChild>
              <Link href="/education/warning-signs">
                View Comprehensive Checklist <ExternalLink className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </CardFooter>
        </Card>
      </TabsContent>

      <TabsContent value="protection" className="mt-4">
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Shield className="h-5 w-5 text-primary" />
              How to Protect Yourself
            </CardTitle>
            <CardDescription>Strategies to minimize risk when investing in Ocean Protocol</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="rounded-md border p-4">
                <h3 className="font-medium">Before Investing</h3>
                <ul className="mt-2 ml-6 list-disc space-y-1 text-muted-foreground">
                  <li>Use this tool to scan any Ocean token or pool before investing</li>
                  <li>Research the team thoroughly - verify identities and backgrounds</li>
                  <li>Check contract code on Etherscan and look for audit reports</li>
                  <li>Verify token distribution and liquidity lock status</li>
                  <li>Join community channels and gauge sentiment</li>
                </ul>
              </div>

              <div className="rounded-md border p-4">
                <h3 className="font-medium">During Investment</h3>
                <ul className="mt-2 ml-6 list-disc space-y-1 text-muted-foreground">
                  <li>Start with small positions and increase gradually</li>
                  <li>Set up alerts for suspicious activity (using our watchlist feature)</li>
                  <li>Monitor wallet movements of large holders</li>
                  <li>Watch for sudden changes in team behavior or communication</li>
                </ul>
              </div>

              <div className="rounded-md border p-4">
                <h3 className="font-medium">General Best Practices</h3>
                <ul className="mt-2 ml-6 list-disc space-y-1 text-muted-foreground">
                  <li>Never invest more than you can afford to lose</li>
                  <li>Diversify your portfolio across multiple projects</li>
                  <li>Be especially cautious of projects with extremely high APYs</li>
                  <li>Take profits regularly rather than holding indefinitely</li>
                  <li>Report suspicious projects to the Ocean Protocol team</li>
                </ul>
              </div>
            </div>
          </CardContent>
          <CardFooter>
            <Button variant="outline" className="w-full" asChild>
              <Link href="/education/protection-guide">
                Download Protection Guide <ExternalLink className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </CardFooter>
        </Card>
      </TabsContent>
    </Tabs>
  )
}

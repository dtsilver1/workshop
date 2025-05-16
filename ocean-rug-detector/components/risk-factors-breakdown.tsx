"use client"

import type React from "react"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { AlertTriangle, CheckCircle, Info } from "lucide-react"
import { Button } from "@/components/ui/button"

export function RiskFactorsBreakdown() {
  // Mock data - in a real app, this would come from the risk analysis engine
  const riskFactors = [
    {
      id: "contract",
      name: "Contract Analysis",
      score: 85,
      details: [
        {
          name: "Unverified Contract",
          status: "high-risk",
          description: "The smart contract code is not verified on Etherscan, making it impossible to audit.",
        },
        {
          name: "Owner Privileges",
          status: "high-risk",
          description: "Contract owner can mint unlimited tokens and has not renounced ownership.",
        },
        {
          name: "Blacklist Function",
          status: "medium-risk",
          description: "Contract includes functions to blacklist addresses from trading.",
        },
      ],
    },
    {
      id: "liquidity",
      name: "Liquidity Analysis",
      score: 60,
      details: [
        {
          name: "Liquidity Lock",
          status: "medium-risk",
          description: "Liquidity is locked for only 30 days, which is shorter than recommended.",
        },
        {
          name: "LP Concentration",
          status: "medium-risk",
          description: "70% of LP tokens are held by a single address.",
        },
        {
          name: "Liquidity Depth",
          status: "low-risk",
          description: "Sufficient liquidity depth relative to market cap.",
        },
      ],
    },
    {
      id: "holders",
      name: "Token Holders Analysis",
      score: 75,
      details: [
        {
          name: "Wallet Concentration",
          status: "high-risk",
          description: "Top 3 wallets control 85% of the token supply.",
        },
        { name: "Team Tokens", status: "medium-risk", description: "Team tokens are not locked or vested." },
        { name: "Holder Count", status: "low-risk", description: "Token has a reasonable number of holders (250+)." },
      ],
    },
    {
      id: "market",
      name: "Market Behavior",
      score: 40,
      details: [
        { name: "Price Action", status: "low-risk", description: "No suspicious price movements in the last 30 days." },
        { name: "Trading Volume", status: "medium-risk", description: "Irregular trading volume spikes detected." },
        { name: "Sell Pressure", status: "low-risk", description: "Balanced buy/sell ratio in recent transactions." },
      ],
    },
  ]

  const getStatusIcon = (status: string) => {
    switch (status) {
      case "high-risk":
        return <AlertTriangle className="h-5 w-5 text-red-500" />
      case "medium-risk":
        return <Info className="h-5 w-5 text-amber-500" />
      case "low-risk":
        return <CheckCircle className="h-5 w-5 text-green-500" />
      default:
        return null
    }
  }

  const getStatusColor = (score: number) => {
    if (score > 70) return "text-red-500"
    if (score > 30) return "text-amber-500"
    return "text-green-500"
  }

  const getProgressColor = (score: number) => {
    if (score > 70) return "var(--destructive)"
    if (score > 30) return "var(--warning)"
    return "var(--success)"
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle>Risk Factors Breakdown</CardTitle>
        <CardDescription>Detailed analysis of potential rug pull indicators</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-6">
          {riskFactors.map((factor) => (
            <div key={factor.id} className="space-y-2">
              <div className="flex items-center justify-between">
                <h3 className="font-medium">{factor.name}</h3>
                <span className={`font-bold ${getStatusColor(factor.score)}`}>{factor.score}/100</span>
              </div>
              <Progress
                value={factor.score}
                className="h-2"
                style={{ "--progress-background": getProgressColor(factor.score) } as React.CSSProperties}
              />
              <Accordion type="single" collapsible className="w-full">
                <AccordionItem value={factor.id} className="border-b-0">
                  <AccordionTrigger className="py-2 text-sm">View Details</AccordionTrigger>
                  <AccordionContent>
                    <div className="space-y-4 pt-2">
                      {factor.details.map((detail, index) => (
                        <div key={index} className="flex gap-3">
                          {getStatusIcon(detail.status)}
                          <div>
                            <h4 className="font-medium">{detail.name}</h4>
                            <p className="text-sm text-muted-foreground">{detail.description}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </div>
          ))}
        </div>
        <div className="mt-6 flex justify-end">
          <Button>Download Full Report</Button>
        </div>
      </CardContent>
    </Card>
  )
}

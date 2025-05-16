"use client"

import type React from "react"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { AlertTriangle, Info, ShieldCheck } from "lucide-react"
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip"

export function RiskScoreCard() {
  // Mock data - in a real app, this would come from the risk analysis engine
  const riskScore = 75
  const riskLevel = riskScore > 70 ? "High" : riskScore > 30 ? "Medium" : "Low"
  const riskColor = riskScore > 70 ? "text-red-500" : riskScore > 30 ? "text-amber-500" : "text-green-500"
  const riskIcon = riskScore > 70 ? AlertTriangle : riskScore > 30 ? Info : ShieldCheck
  const RiskIcon = riskIcon

  return (
    <Card>
      <CardHeader className="pb-2">
        <div className="flex items-center justify-between">
          <CardTitle>Risk Score</CardTitle>
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger>
                <Info className="h-4 w-4 text-muted-foreground" />
              </TooltipTrigger>
              <TooltipContent>
                <p className="max-w-xs">
                  Risk score is calculated based on contract analysis, liquidity patterns, and market behavior. Higher
                  scores indicate higher risk of a potential rug pull.
                </p>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
        </div>
        <CardDescription>
          Current analysis for: <span className="font-mono">0x7e92...f3a1</span>
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="flex flex-col items-center justify-center space-y-4 pt-4">
          <div className="relative flex h-32 w-32 items-center justify-center rounded-full border-8 border-muted">
            <div className={`text-4xl font-bold ${riskColor}`}>{riskScore}</div>
            <div className="absolute bottom-0 flex items-center justify-center gap-1 rounded-full bg-background px-2 py-1 text-xs font-medium">
              <RiskIcon className={`h-3.5 w-3.5 ${riskColor}`} />
              <span className={riskColor}>{riskLevel} Risk</span>
            </div>
          </div>
          <div className="w-full space-y-1">
            <div className="flex justify-between text-xs">
              <span>Safe</span>
              <span>Risky</span>
            </div>
            <Progress
              value={riskScore}
              className="h-2"
              style={
                {
                  "--progress-background":
                    riskScore > 70
                      ? "hsl(var(--destructive))"
                      : riskScore > 30
                        ? "hsl(var(--warning))"
                        : "hsl(var(--success))",
                } as React.CSSProperties
              }
            />
          </div>
        </div>
      </CardContent>
    </Card>
  )
}

"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { AlertTriangle, Info, ShieldCheck } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"

export function RecentScans() {
  // Mock data - in a real app, this would come from a database or local storage
  const recentScans = [
    {
      id: "1",
      name: "Ocean Data Science Pool",
      address: "0x7e92f3a1b4e6e5d6c9f3a1b4e6e5d6c9f3a1b4e6",
      score: 25,
      timestamp: "2 hours ago",
    },
    {
      id: "2",
      name: "AI Training Dataset",
      address: "0x1a2b3c4d5e6f7g8h9i0j1k2l3m4n5o6p7q8r9s0t",
      score: 82,
      timestamp: "1 day ago",
    },
    {
      id: "3",
      name: "Climate Data Token",
      address: "0x9s8r7q6p5o4n3m2l1k0j9i8h7g6f5e4d3c2b1a0",
      score: 45,
      timestamp: "3 days ago",
    },
  ]

  const getRiskIcon = (score: number) => {
    if (score > 70) return <AlertTriangle className="h-4 w-4 text-red-500" />
    if (score > 30) return <Info className="h-4 w-4 text-amber-500" />
    return <ShieldCheck className="h-4 w-4 text-green-500" />
  }

  const getRiskBadge = (score: number) => {
    if (score > 70) return <Badge variant="destructive">High Risk</Badge>
    if (score > 30)
      return (
        <Badge variant="outline" className="border-amber-500 text-amber-500">
          Medium Risk
        </Badge>
      )
    return (
      <Badge variant="outline" className="border-green-500 text-green-500">
        Low Risk
      </Badge>
    )
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle>Recent Scans</CardTitle>
        <CardDescription>Your recently analyzed tokens and pools</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {recentScans.map((scan) => (
            <div key={scan.id} className="flex items-center justify-between border-b pb-4 last:border-0 last:pb-0">
              <div className="space-y-1">
                <div className="flex items-center gap-2">
                  {getRiskIcon(scan.score)}
                  <span className="font-medium">{scan.name}</span>
                </div>
                <div className="flex items-center gap-2 text-xs text-muted-foreground">
                  <span className="font-mono">
                    {scan.address.substring(0, 6)}...{scan.address.substring(scan.address.length - 4)}
                  </span>
                  <span>•</span>
                  <span>{scan.timestamp}</span>
                </div>
              </div>
              <div className="flex items-center gap-2">
                {getRiskBadge(scan.score)}
                <Button variant="ghost" size="sm">
                  View
                </Button>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}

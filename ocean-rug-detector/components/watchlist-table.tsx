"use client"

import type React from "react"

import { useState } from "react"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { AlertTriangle, Bell, BellOff, Info, MoreHorizontal, ShieldCheck, Trash } from "lucide-react"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"

export function WatchlistTable() {
  // Mock data - in a real app, this would come from a database
  const [watchlist, setWatchlist] = useState([
    {
      id: "1",
      name: "Ocean Data Science Pool",
      address: "0x7e92f3a1b4e6e5d6c9f3a1b4e6e5d6c9f3a1b4e6",
      score: 25,
      change: -5,
      alerts: true,
      lastUpdated: "2 hours ago",
    },
    {
      id: "2",
      name: "AI Training Dataset",
      address: "0x1a2b3c4d5e6f7g8h9i0j1k2l3m4n5o6p7q8r9s0t",
      score: 82,
      change: 15,
      alerts: true,
      lastUpdated: "1 day ago",
    },
    {
      id: "3",
      name: "Climate Data Token",
      address: "0x9s8r7q6p5o4n3m2l1k0j9i8h7g6f5e4d3c2b1a0",
      score: 45,
      change: 0,
      alerts: false,
      lastUpdated: "3 days ago",
    },
    {
      id: "4",
      name: "Medical Research Data",
      address: "0x2b3c4d5e6f7g8h9i0j1k2l3m4n5o6p7q8r9s0t1a",
      score: 12,
      change: -8,
      alerts: false,
      lastUpdated: "1 week ago",
    },
  ])

  const toggleAlerts = (id: string) => {
    setWatchlist(watchlist.map((item) => (item.id === id ? { ...item, alerts: !item.alerts } : item)))
  }

  const removeFromWatchlist = (id: string) => {
    setWatchlist(watchlist.filter((item) => item.id !== id))
  }

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

  const getChangeIndicator = (change: number) => {
    if (change === 0) return <span className="text-muted-foreground">0</span>
    if (change > 0) return <span className="text-red-500">+{change}</span>
    return <span className="text-green-500">{change}</span>
  }

  return (
    <Card className="overflow-hidden rounded-lg border shadow-sm">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Name</TableHead>
            <TableHead>Risk Score</TableHead>
            <TableHead className="hidden md:table-cell">Change</TableHead>
            <TableHead className="hidden md:table-cell">Last Updated</TableHead>
            <TableHead className="text-right">Actions</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {watchlist.map((item) => (
            <TableRow key={item.id}>
              <TableCell>
                <div className="font-medium">{item.name}</div>
                <div className="hidden text-xs text-muted-foreground sm:inline-block">
                  {item.address.substring(0, 6)}...{item.address.substring(item.address.length - 4)}
                </div>
              </TableCell>
              <TableCell>
                <div className="flex items-center gap-2">
                  {getRiskIcon(item.score)}
                  <span>{item.score}</span>
                  {getRiskBadge(item.score)}
                </div>
              </TableCell>
              <TableCell className="hidden md:table-cell">{getChangeIndicator(item.change)}</TableCell>
              <TableCell className="hidden md:table-cell">{item.lastUpdated}</TableCell>
              <TableCell className="text-right">
                <div className="flex items-center justify-end gap-2">
                  <Button
                    variant="ghost"
                    size="icon"
                    onClick={() => toggleAlerts(item.id)}
                    title={item.alerts ? "Disable alerts" : "Enable alerts"}
                  >
                    {item.alerts ? <Bell className="h-4 w-4" /> : <BellOff className="h-4 w-4" />}
                  </Button>
                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <Button variant="ghost" size="icon">
                        <MoreHorizontal className="h-4 w-4" />
                        <span className="sr-only">More options</span>
                      </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="end">
                      <DropdownMenuItem>View Details</DropdownMenuItem>
                      <DropdownMenuItem>Rescan Now</DropdownMenuItem>
                      <DropdownMenuItem onClick={() => removeFromWatchlist(item.id)} className="text-red-500">
                        <Trash className="mr-2 h-4 w-4" />
                        Remove
                      </DropdownMenuItem>
                    </DropdownMenuContent>
                  </DropdownMenu>
                </div>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </Card>
  )
}

function Card({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) {
  return <div className={`overflow-hidden rounded-lg border shadow-sm ${className}`} {...props} />
}

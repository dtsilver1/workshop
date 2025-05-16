"use client"

import type React from "react"

import { useState } from "react"
import { Search } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

export function SearchBar() {
  const [searchQuery, setSearchQuery] = useState("")

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault()
    // In a real implementation, this would trigger the token analysis
    console.log("Searching for:", searchQuery)
  }

  return (
    <div className="bg-card rounded-lg p-4 shadow-sm">
      <form onSubmit={handleSearch} className="flex flex-col gap-4 md:flex-row md:items-end">
        <div className="flex-1 space-y-2">
          <label htmlFor="token-search" className="text-sm font-medium">
            Enter Ocean Protocol Token Address or Pool ID
          </label>
          <div className="relative">
            <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
            <Input
              id="token-search"
              placeholder="0x1234... or ocean://pool/1234..."
              className="pl-10"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
        </div>
        <Button type="submit" className="md:w-auto">
          Analyze Risk
        </Button>
      </form>
    </div>
  )
}

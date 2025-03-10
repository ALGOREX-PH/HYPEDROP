"use client"

import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Flame, Trophy, TrendingUp, TrendingDown } from "lucide-react"

const sortOptions = [
  { label: "Trending", icon: Flame },
  { label: "Most Popular", icon: Trophy },
  { label: "Price: High to Low", icon: TrendingUp },
  { label: "Price: Low to High", icon: TrendingDown },
]

export function SortDropdown() {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline" className="gap-2">
          <Flame className="w-4 h-4" />
          Sort by: Trending
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="w-48">
        {sortOptions.map((option) => (
          <DropdownMenuItem key={option.label} className="gap-2">
            <option.icon className="w-4 h-4" />
            {option.label}
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
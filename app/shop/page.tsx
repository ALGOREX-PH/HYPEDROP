"use client"

import { useState } from "react"
import { Nav } from "@/components/nav"
import { Footer } from "@/components/footer"
import { ProductGrid } from "@/components/product-grid"
import { FilterSidebar } from "@/components/filter-sidebar"
import { SortDropdown } from "@/components/sort-dropdown"
import { ActiveFilters } from "@/components/active-filters"
import { cn } from "@/lib/utils"

export default function ShopPage() {
  const [view, setView] = useState<"grid" | "list">("grid")
  const [activeFilters, setActiveFilters] = useState<string[]>([])

  return (
    <main className="min-h-screen bg-black">
      <Nav />
      
      <div className="max-w-7xl mx-auto px-4 pt-24 pb-12">
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <h1 className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-violet-400 to-cyan-400">
            Latest Drops
          </h1>
          <SortDropdown />
        </div>

        {/* Active Filters */}
        <ActiveFilters filters={activeFilters} onRemove={(filter) => {
          setActiveFilters(activeFilters.filter(f => f !== filter))
        }} />

        <div className="flex gap-8 mt-8">
          {/* Sidebar */}
          <FilterSidebar
            activeFilters={activeFilters}
            onFilterChange={setActiveFilters}
            className="w-64 flex-shrink-0 hidden lg:block"
          />

          {/* Product Grid */}
          <div className="flex-1">
            <ProductGrid view={view} onViewChange={setView} />
          </div>
        </div>
      </div>

      <Footer />
    </main>
  )
}
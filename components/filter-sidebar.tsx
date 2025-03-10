"use client"

import { useState } from "react"
import { ChevronDown, ChevronUp } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Slider } from "@/components/ui/slider"
import { cn } from "@/lib/utils"

interface FilterSidebarProps {
  className?: string
  activeFilters: string[]
  onFilterChange: (filters: string[]) => void
}

interface FilterSection {
  title: string
  items: { label: string; value: string; icon?: string }[]
}

const filterSections: FilterSection[] = [
  {
    title: "Categories",
    items: [
      { label: "Sneakers", value: "sneakers", icon: "👟" },
      { label: "Hoodies", value: "hoodies", icon: "🏀" },
      { label: "Tees", value: "tees", icon: "👕" },
      { label: "Accessories", value: "accessories", icon: "🧢" },
      { label: "Bottoms", value: "bottoms", icon: "👖" }
    ]
  },
  {
    title: "Brands",
    items: [
      { label: "Nike", value: "nike" },
      { label: "Adidas", value: "adidas" },
      { label: "Off-White", value: "off-white" },
      { label: "Supreme", value: "supreme" },
      { label: "Palm Angels", value: "palm-angels" }
    ]
  },
  {
    title: "Drop Type",
    items: [
      { label: "Limited Edition", value: "limited", icon: "🔒" },
      { label: "Collabs", value: "collabs", icon: "🤝" },
      { label: "Resale", value: "resale", icon: "💰" },
      { label: "New Arrival", value: "new", icon: "🔥" }
    ]
  }
]

const sizes = ["S", "M", "L", "XL", "XXL"]
const colors = [
  { label: "Black", value: "black", class: "bg-black" },
  { label: "White", value: "white", class: "bg-white" },
  { label: "Red", value: "red", class: "bg-red-500" },
  { label: "Blue", value: "blue", class: "bg-blue-500" },
  { label: "Green", value: "green", class: "bg-green-500" }
]

export function FilterSidebar({ className, activeFilters, onFilterChange }: FilterSidebarProps) {
  const [expandedSections, setExpandedSections] = useState<string[]>(["Categories"])
  const [priceRange, setPriceRange] = useState([50, 2000])

  const toggleSection = (title: string) => {
    setExpandedSections(current =>
      current.includes(title)
        ? current.filter(t => t !== title)
        : [...current, title]
    )
  }

  const toggleFilter = (value: string) => {
    onFilterChange(
      activeFilters.includes(value)
        ? activeFilters.filter(f => f !== value)
        : [...activeFilters, value]
    )
  }

  return (
    <div className={cn("space-y-6", className)}>
      {/* Price Range */}
      <div>
        <h3 className="font-semibold mb-4">Price Range</h3>
        <Slider
          defaultValue={[50, 2000]}
          max={2000}
          min={50}
          step={10}
          value={priceRange}
          onValueChange={setPriceRange}
          className="mb-2"
        />
        <div className="flex justify-between text-sm text-gray-400">
          <span>${priceRange[0]}</span>
          <span>${priceRange[1]}</span>
        </div>
      </div>

      {/* Filter Sections */}
      {filterSections.map((section) => (
        <div key={section.title}>
          <Button
            variant="ghost"
            className="w-full flex items-center justify-between mb-2"
            onClick={() => toggleSection(section.title)}
          >
            <span className="font-semibold">{section.title}</span>
            {expandedSections.includes(section.title) ? (
              <ChevronUp className="w-4 h-4" />
            ) : (
              <ChevronDown className="w-4 h-4" />
            )}
          </Button>

          {expandedSections.includes(section.title) && (
            <div className="space-y-2">
              {section.items.map((item) => (
                <Button
                  key={item.value}
                  variant="ghost"
                  className={cn(
                    "w-full justify-start gap-2",
                    activeFilters.includes(item.value) && "bg-violet-500/20"
                  )}
                  onClick={() => toggleFilter(item.value)}
                >
                  {item.icon && <span>{item.icon}</span>}
                  {item.label}
                </Button>
              ))}
            </div>
          )}
        </div>
      ))}

      {/* Sizes */}
      <div>
        <h3 className="font-semibold mb-4">Size</h3>
        <div className="grid grid-cols-5 gap-2">
          {sizes.map((size) => (
            <Button
              key={size}
              variant="outline"
              className={cn(
                "h-10 p-0",
                activeFilters.includes(size) && "bg-violet-500/20 border-violet-500"
              )}
              onClick={() => toggleFilter(size)}
            >
              {size}
            </Button>
          ))}
        </div>
      </div>

      {/* Colors */}
      <div>
        <h3 className="font-semibold mb-4">Color</h3>
        <div className="grid grid-cols-5 gap-2">
          {colors.map((color) => (
            <Button
              key={color.value}
              variant="outline"
              className={cn(
                "h-10 p-0",
                activeFilters.includes(color.value) && "border-violet-500"
              )}
              onClick={() => toggleFilter(color.value)}
            >
              <span className={cn(
                "w-6 h-6 rounded-full",
                color.class,
                color.value === "white" && "border border-gray-300"
              )} />
            </Button>
          ))}
        </div>
      </div>
    </div>
  )
}
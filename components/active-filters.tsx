import { X } from "lucide-react"
import { Button } from "@/components/ui/button"

interface ActiveFiltersProps {
  filters: string[]
  onRemove: (filter: string) => void
}

export function ActiveFilters({ filters, onRemove }: ActiveFiltersProps) {
  if (filters.length === 0) return null

  return (
    <div className="flex flex-wrap gap-2">
      {filters.map((filter) => (
        <Button
          key={filter}
          variant="secondary"
          className="h-8 gap-1 pr-2 bg-violet-500/20 hover:bg-violet-500/30"
          onClick={() => onRemove(filter)}
        >
          {filter}
          <X className="w-4 h-4" />
        </Button>
      ))}
    </div>
  )
}
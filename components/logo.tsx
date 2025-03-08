import { Flame } from "lucide-react"

export function Logo() {
  return (
    <div className="flex items-center gap-1 font-bold text-xl">
      <Flame className="w-6 h-6 text-violet-500" strokeWidth={2.5} />
      <span className="tracking-tight">HYPEDROP</span>
    </div>
  )
}
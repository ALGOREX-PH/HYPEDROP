"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Crown, Zap, Copy } from "lucide-react"
import { cn } from "@/lib/utils"

interface TierSelectionProps {
  show: boolean
}

const tiers = [
  {
    name: "Basic",
    price: "Free",
    icon: Zap,
    features: ["Access to basic drops", "Community features", "Standard shipping"]
  },
  {
    name: "VIP",
    price: "$19.99/month",
    icon: Crown,
    features: ["Early access to drops", "Exclusive colorways", "Free express shipping"]
  },
  {
    name: "HypeBeast",
    price: "$49.99/month",
    icon: Crown,
    features: ["First access to all drops", "Limited edition items", "Personal shopping assistant"]
  }
]

export function TierSelection({ show }: TierSelectionProps) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: show ? 1 : 0.5 }}
      className={cn(
        "p-8 rounded-2xl bg-black/40 backdrop-blur-sm border border-white/10",
        !show && "pointer-events-none"
      )}
    >
      <h2 className="text-2xl font-bold text-center mb-8">Choose Your Tier</h2>

      <div className="space-y-4">
        {tiers.map((tier, index) => (
          <motion.div
            key={tier.name}
            initial={{ x: 50, opacity: 0 }}
            animate={{ x: show ? 0 : 50, opacity: show ? 1 : 0 }}
            transition={{ delay: index * 0.1 }}
            className={cn(
              "p-4 rounded-lg border transition-colors",
              tier.name === "VIP" 
                ? "bg-gradient-to-r from-amber-900/20 to-yellow-900/20 border-amber-500/20" 
                : tier.name === "HypeBeast"
                ? "bg-gradient-to-r from-violet-900/20 to-blue-900/20 border-violet-500/20"
                : "bg-white/5 border-white/10"
            )}
          >
            <div className="flex items-center justify-between mb-4">
              <div>
                <h3 className="font-bold">{tier.name}</h3>
                <p className={cn(
                  "text-sm",
                  tier.name === "VIP" ? "text-amber-400" : tier.name === "HypeBeast" ? "text-violet-400" : "text-gray-400"
                )}>
                  {tier.price}
                </p>
              </div>
              <tier.icon className={cn(
                "w-6 h-6",
                tier.name === "VIP" ? "text-amber-400" : tier.name === "HypeBeast" ? "text-violet-400" : "text-gray-400"
              )} />
            </div>
            <ul className="space-y-2 mb-4 text-sm text-gray-400">
              {tier.features.map((feature, i) => (
                <li key={i} className="flex items-center gap-2">
                  <div className="w-1 h-1 rounded-full bg-current" />
                  {feature}
                </li>
              ))}
            </ul>
            <Button 
              className={cn(
                "w-full",
                tier.name === "VIP" 
                  ? "bg-gradient-to-r from-amber-500 to-yellow-500 hover:from-amber-600 hover:to-yellow-600 text-black" 
                  : tier.name === "HypeBeast"
                  ? "bg-gradient-to-r from-violet-500 to-blue-500 hover:from-violet-600 hover:to-blue-600"
                  : "bg-white/10 hover:bg-white/20"
              )}
            >
              {tier.name === "Basic" ? "Get Started" : "Subscribe"}
            </Button>
          </motion.div>
        ))}
      </div>

      <div className="mt-8 p-4 rounded-lg bg-white/5 border border-white/10">
        <h3 className="font-semibold mb-2">Invite Friends & Earn Points</h3>
        <div className="flex gap-2">
          <Input
            value="HYPE2025"
            type="text"
            readOnly
            className="bg-white/5 border-white/10"
          />
          <Button variant="outline" size="icon">
            <Copy className="w-4 h-4" />
          </Button>
        </div>
        <Button className="w-full mt-2 bg-gradient-to-r from-blue-500 to-violet-500 hover:from-blue-600 hover:to-violet-600">
          Share Link
        </Button>
      </div>
    </motion.div>
  )
}
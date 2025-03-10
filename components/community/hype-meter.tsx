"use client"

import { motion } from "framer-motion"

const trends = [
  { name: "Nike Dunk", growth: 89, color: "from-emerald-500" },
  { name: "Tech Wear", growth: 92, color: "from-violet-500" },
  { name: "Y2K Revival", growth: 78, color: "from-amber-500" },
  { name: "Vintage Tees", growth: -45, color: "from-red-500" }
]

export function HypeMeter() {
  return (
    <section className="py-20">
      <h2 className="text-2xl font-bold mb-8">Hype Meter</h2>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {trends.map((trend, i) => (
          <motion.div
            key={trend.name}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            className="bg-[#0A0A0B] rounded-lg p-4 border border-white/5"
          >
            <div className="flex justify-between items-center mb-2">
              <span className="font-medium">{trend.name}</span>
              <span className={trend.growth > 0 ? "text-green-500" : "text-red-500"}>
                {trend.growth > 0 ? "↑" : "↓"} {Math.abs(trend.growth)}%
              </span>
            </div>
            <div className="h-2 rounded-full bg-white/5 overflow-hidden">
              <div
                className={`h-full rounded-full bg-gradient-to-r ${trend.color} to-gray-500`}
                style={{ width: `${Math.abs(trend.growth)}%` }}
              />
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
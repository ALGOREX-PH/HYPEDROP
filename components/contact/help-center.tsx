"use client"

import { motion } from "framer-motion"
import { Search } from "lucide-react"
import { Input } from "@/components/ui/input"
import { ShoppingBag, Monitor, Shield, Gift } from "lucide-react"

const categories = [
  {
    icon: ShoppingBag,
    title: "My Orders",
    description: "Track shipments, manage returns, and check order status"
  },
  {
    icon: Monitor,
    title: "Technical Support",
    description: "Resolve technical issues and payment problems"
  },
  {
    icon: Shield,
    title: "Account & Security",
    description: "Manage account settings and security options"
  },
  {
    icon: Gift,
    title: "Product & Drop Info",
    description: "Learn about drops, odds, and mystery boxes"
  }
]

export function HelpCenter() {
  return (
    <section className="mb-24">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.1 }}
        className="text-center mb-12"
      >
        <h2 className="text-3xl font-bold mb-8">Help Center</h2>
        <div className="relative max-w-2xl mx-auto">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
          <Input
            placeholder="Search for help..."
            className="pl-12 py-6 bg-white/5 border-white/10 rounded-xl"
          />
        </div>
      </motion.div>

      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
        {categories.map((category, i) => (
          <motion.div
            key={category.title}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 + (i * 0.1) }}
            className="group bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10 hover:border-violet-500/50 transition-colors"
          >
            <category.icon className="w-8 h-8 text-violet-400 mb-4" />
            <h3 className="font-bold mb-2">{category.title}</h3>
            <p className="text-sm text-gray-400">{category.description}</p>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
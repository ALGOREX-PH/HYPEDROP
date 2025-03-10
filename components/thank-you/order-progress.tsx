"use client"

import { motion } from "framer-motion"
import { Bell, Mail, Phone, Home } from "lucide-react"

const steps = [
  { icon: Bell, label: "Order Confirmed", date: "Jan 15, 2025", done: true },
  { icon: Mail, label: "Picked Up", date: "Jan 15, 2025", done: true },
  { icon: Phone, label: "In Transit", date: "Pending", done: false },
  { icon: Home, label: "Delivered", date: "Pending", done: false }
]

export function OrderProgress() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.3 }}
      className="grid grid-cols-4 gap-4 mb-12"
    >
      {steps.map((step, i) => (
        <div
          key={i}
          className="relative text-center"
        >
          <div className={`w-10 h-10 mx-auto rounded-full flex items-center justify-center mb-2 ${
            step.done ? "bg-blue-500" : "bg-gray-800"
          }`}>
            <step.icon className="w-5 h-5" />
          </div>
          <div className="text-sm font-medium">{step.label}</div>
          <div className="text-xs text-gray-400">{step.date}</div>
          {i < 3 && (
            <div className={`absolute top-5 left-1/2 w-full h-0.5 ${
              step.done ? "bg-blue-500" : "bg-gray-800"
            }`} />
          )}
        </div>
      ))}
    </motion.div>
  )
}
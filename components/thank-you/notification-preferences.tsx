"use client"

import { motion } from "framer-motion"
import { Bell, Mail, Phone } from "lucide-react"
import { Switch } from "@/components/ui/switch"

const notificationOptions = [
  { icon: Mail, label: "Email Updates" },
  { icon: Phone, label: "SMS Alerts" },
  { icon: Bell, label: "Push Notifications" }
]

export function NotificationPreferences() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.4 }}
      className="bg-[#0A0A0B] rounded-xl border border-white/10 p-6 mb-12"
    >
      <h3 className="text-xl font-bold mb-6">Stay Updated</h3>
      <div className="grid gap-4">
        {notificationOptions.map((option, i) => (
          <div key={i} className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <option.icon className="w-5 h-5 text-gray-400" />
              <span>{option.label}</span>
            </div>
            <Switch />
          </div>
        ))}
      </div>
    </motion.div>
  )
}
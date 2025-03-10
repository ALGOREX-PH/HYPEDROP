"use client"

import { motion } from "framer-motion"
import { Instagram, Twitter } from "lucide-react"
import Link from "next/link"

const socialLinks = [
  { icon: Instagram, color: "hover:bg-pink-600" },
  { icon: Twitter, color: "hover:bg-blue-400" }
]

export function SocialShare() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.5 }}
      className="text-center"
    >
      <h3 className="text-xl font-bold mb-6">Share Your Purchase</h3>
      <div className="flex justify-center gap-4">
        {socialLinks.map((social, i) => (
          <Link
            key={i}
            href="#"
            className={`w-12 h-12 rounded-full bg-white/5 flex items-center justify-center transition-colors ${social.color}`}
          >
            <social.icon className="w-5 h-5" />
          </Link>
        ))}
      </div>
    </motion.div>
  )
}
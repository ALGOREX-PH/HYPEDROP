"use client"

import { motion } from "framer-motion"
import { Shield, Users, Lock } from "lucide-react"

const privacyTerms = [
  {
    icon: Shield,
    title: "Data Protection",
    description: "Your data is encrypted and stored securely following industry standards."
  },
  {
    icon: Users,
    title: "Your Rights",
    description: "Access, modify, or delete your personal data at any time."
  },
  {
    icon: Lock,
    title: "Security",
    description: "Regular security audits and updates to protect your information."
  }
]

export function PrivacyTerms() {
  return (
    <section>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-center mb-12"
      >
        <h2 className="text-3xl font-bold mb-4">Privacy & Terms</h2>
        <p className="text-gray-400">
          Your privacy and security are our top priorities
        </p>
      </motion.div>

      <div className="grid md:grid-cols-3 gap-6">
        {privacyTerms.map((term, i) => (
          <motion.div
            key={term.title}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            className="bg-white/5 backdrop-blur-sm rounded-xl p-8 border border-white/10 text-center"
          >
            <term.icon className="w-12 h-12 mx-auto mb-4 text-violet-400" />
            <h3 className="text-xl font-bold mb-2">{term.title}</h3>
            <p className="text-gray-400">{term.description}</p>
          </motion.div>
        ))}
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.4 }}
        className="mt-12 text-center"
      >
        <p className="text-sm text-gray-400">
          By using HYPEDROP, you agree to our Terms of Service and Privacy Policy.
          For more information about how we use your data, please contact our support team.
        </p>
      </motion.div>
    </section>
  )
}
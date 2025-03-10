"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Nav } from "@/components/nav"
import { AuthForm } from "@/components/auth-form"
import { TierSelection } from "@/components/tier-selection"

export default function AuthPage() {
  const [showTiers, setShowTiers] = useState(true)

  return (
    <main className="min-h-screen bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-violet-900/20 via-black to-black">
      <Nav />
      
      <div className="container max-w-6xl mx-auto px-4 pt-32 pb-12">
        <div className="grid md:grid-cols-2 gap-8">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <AuthForm onSignUp={() => setShowTiers(true)} />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <TierSelection show={showTiers} />
          </motion.div>
        </div>
      </div>
    </main>
  )
}
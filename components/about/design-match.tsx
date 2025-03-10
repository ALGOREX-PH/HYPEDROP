"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"

export function DesignMatch() {
  return (
    <section className="py-24">
      <div className="max-w-4xl mx-auto text-center px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="bg-gradient-to-br from-blue-900/50 via-violet-900/50 to-purple-900/50 rounded-2xl p-12 border border-white/10 backdrop-blur-sm"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Find Your Design Match
          </h2>
          <p className="text-gray-400 mb-8">
            Take our style quiz to discover which designer's aesthetic matches yours
          </p>
          
          <Button
            size="lg"
            className="bg-gradient-to-r from-blue-500 to-violet-500 hover:from-blue-600 hover:to-violet-600"
          >
            Start Style Quiz
          </Button>
        </motion.div>
      </div>
    </section>
  )
}
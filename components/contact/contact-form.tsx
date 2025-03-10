"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { Button } from "@/components/ui/button"

const inquiryTypes = [
  "Sponsorship",
  "Marketing",
  "Influencer Partnership",
  "Business Proposal",
  "Custom Drops",
  "Other"
]

export function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1000))
    setIsSubmitting(false)
    setIsSubmitted(true)
  }

  return (
    <section className="relative">
      {/* Background Effect */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-900/20 via-violet-900/20 to-purple-900/20 rounded-2xl -z-10" />
      
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.3 }}
        className="max-w-4xl mx-auto rounded-2xl border border-white/10 backdrop-blur-sm overflow-hidden"
      >
        <div className="p-8 md:p-12">
          <h2 className="text-3xl md:text-4xl font-bold text-center bg-gradient-to-r from-blue-400 to-violet-400 bg-clip-text text-transparent mb-8">
            LET'S BUILD SOMETHING LEGENDARY TOGETHER
          </h2>

          {isSubmitted ? (
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              className="text-center py-12"
            >
              <h3 className="text-2xl font-bold mb-4">
                Your request has been sent!
              </h3>
              <p className="text-gray-400">
                Our team will reach out shortly. Stay hyped! 🔥
              </p>
            </motion.div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Input
                    placeholder="Full Name"
                    required
                    className="bg-white/5 border-white/10"
                  />
                </div>
                <div className="space-y-2">
                  <Input
                    placeholder="Company/Brand Name"
                    required
                    className="bg-white/5 border-white/10"
                  />
                </div>
              </div>

              <Select required>
                <SelectTrigger className="bg-white/5 border-white/10">
                  <SelectValue placeholder="Select Inquiry Type" />
                </SelectTrigger>
                <SelectContent>
                  {inquiryTypes.map(type => (
                    <SelectItem key={type} value={type.toLowerCase()}>
                      {type}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>

              <Textarea
                placeholder="Your Message"
                required
                className="min-h-[200px] bg-white/5 border-white/10"
              />

              <Button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-gradient-to-r from-blue-500 to-violet-500 hover:from-blue-600 hover:to-violet-600 h-12 text-lg"
              >
                {isSubmitting ? "Sending..." : "Submit Inquiry"}
              </Button>
            </form>
          )}
        </div>
      </motion.div>
    </section>
  )
}
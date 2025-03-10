"use client"

import { Nav } from "@/components/nav"
import { Footer } from "@/components/footer"
import { HelpCenter } from "@/components/contact/help-center"
import { ContactForm } from "@/components/contact/contact-form"
import { motion } from "framer-motion"

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-blue-900/20 via-black to-black">
      <Nav />
      
      <div className="max-w-7xl mx-auto px-4 pt-32 pb-24">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-20"
        >
          <h1 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-violet-400 to-blue-400 bg-clip-text text-transparent mb-4">
            Contact Us
          </h1>
          <p className="text-gray-400 text-lg">
            Get in touch with our support team or explore partnership opportunities with HYPEDROP
          </p>
        </motion.div>

        <HelpCenter />
        <ContactForm />
      </div>

      <Footer />
    </main>
  )
}
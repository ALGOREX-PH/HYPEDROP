"use client"

import { Nav } from "@/components/nav"
import { Footer } from "@/components/footer"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { ReturnPolicy } from "@/components/terms/return-policy"
import { ShippingPolicy } from "@/components/terms/shipping-policy"
import { PrivacyTerms } from "@/components/terms/privacy-terms"
import Link from "next/link"

export default function TermsPage() {
  return (
    <main className="min-h-screen bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-blue-900/20 via-black to-black">
      <Nav />
      
      {/* Hero Section */}
      <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <video
            autoPlay
            loop
            muted
            playsInline
            className="object-cover w-full h-full opacity-30"
          >
            <source src="https://cdn.pixabay.com/vimeo/147860386/urban-19420.mp4?width=1280&hash=bc7c3ca7945fa4a92f32f72b0c4c37f5f2d82245" type="video/mp4" />
          </video>
          <div className="absolute inset-0 bg-gradient-to-b from-black via-black/50 to-black" />
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="relative z-10 text-center px-4"
        >
          <h1 className="text-5xl md:text-7xl font-bold mb-6">
            Terms & Policies
          </h1>
          <p className="text-xl text-gray-400 mb-8">
            Because Transparency is 🔥
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/shop">
              <Button size="lg" className="bg-blue-600 hover:bg-blue-700">
                Start Shopping
              </Button>
            </Link>
            <Link href="/contact">
              <Button size="lg" variant="outline">
                Contact Support
              </Button>
            </Link>
          </div>
        </motion.div>
      </section>

      <div className="max-w-7xl mx-auto px-4 py-24 space-y-32">
        <ReturnPolicy />
        <ShippingPolicy />
        <PrivacyTerms />
      </div>

      <Footer />
    </main>
  )
}
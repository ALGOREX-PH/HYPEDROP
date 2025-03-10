"use client"

import { motion } from "framer-motion"
import { Nav } from "@/components/nav"
import { OrderSummary } from "@/components/thank-you/order-summary"
import { OrderProgress } from "@/components/thank-you/order-progress"
import { NotificationPreferences } from "@/components/thank-you/notification-preferences"
import { SocialShare } from "@/components/thank-you/social-share"

export default function ThankYouPage() {
  return (
    <main className="min-h-screen bg-black">
      <Nav />
      
      <div className="max-w-4xl mx-auto px-4 pt-24 pb-12">
        {/* Thank You Message */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-blue-500 via-violet-500 to-pink-500 bg-clip-text text-transparent animate-gradient-xy">
            THANK YOU FOR YOUR ORDER!
          </h1>
          <p className="text-gray-400 mt-4">
            Your HYPEDROP exclusive is on its way. We&apos;ll keep you updated every step of the journey.
          </p>
        </motion.div>

        {/* Order Summary Card */}
        <OrderSummary
          orderNumber="HYPED-24601"
          productName="HYPEDROP X Supreme Sneakers"
          productImage="https://images.unsplash.com/photo-1552346154-21d32810aba3?w=400"
          size="US 10"
          quantity={1}
          subtotal={299.00}
          shipping={15.00}
          total={314.00}
        />

        {/* Order Progress */}
        <OrderProgress />

        {/* Stay Updated Section */}
        <NotificationPreferences />

        {/* Share Section */}
        <SocialShare />
      </div>
    </main>
  )
}
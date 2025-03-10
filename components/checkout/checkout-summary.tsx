"use client"

import Image from "next/image"
import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"
import { Shield } from "lucide-react"

export function CheckoutSummary() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="bg-[#0A0A0B] rounded-lg border border-white/5 overflow-hidden"
    >
      <div className="p-6">
        <h2 className="text-xl font-bold mb-6">Order Summary</h2>

        {/* Product */}
        <div className="flex gap-4 pb-6 border-b border-white/5">
          <div className="relative w-20 h-20 rounded-lg overflow-hidden bg-white/5">
            <Image
              src="https://images.unsplash.com/photo-1552346154-21d32810aba3?w=200"
              alt="Product"
              fill
              className="object-cover"
            />
          </div>
          <div>
            <h3 className="font-medium">Premium Insights Package</h3>
            <p className="text-sm text-gray-400">Annual Subscription</p>
            <p className="text-lg font-bold mt-1">$499.99</p>
          </div>
        </div>

        {/* Summary */}
        <div className="py-6 space-y-2 text-sm border-b border-white/5">
          <div className="flex justify-between">
            <span className="text-gray-400">Subtotal</span>
            <span>$499.99</span>
          </div>
          <div className="flex justify-between">
            <span className="text-gray-400">Shipping</span>
            <span>$9.99</span>
          </div>
          <div className="flex justify-between">
            <span className="text-gray-400">Tax</span>
            <span>$25.00</span>
          </div>
        </div>

        {/* Total */}
        <div className="pt-6">
          <div className="flex justify-between items-baseline">
            <span className="text-lg font-bold">Total</span>
            <div className="text-right">
              <span className="text-2xl font-bold">$534.98</span>
              <div className="text-sm text-gray-400">≈ 0.0125 BTC</div>
            </div>
          </div>
        </div>
      </div>

      {/* Complete Purchase */}
      <div className="p-6 bg-black/20">
        <Button 
          className="w-full bg-blue-600 hover:bg-blue-700 h-12 text-lg mb-4"
          onClick={() => window.location.href = "/thank-you"}
        >
          Complete Purchase
        </Button>
        <div className="flex items-center justify-center gap-2 text-sm text-gray-400">
          <Shield className="w-4 h-4" />
          <span>Secured by Nakamoto Protocol</span>
        </div>
      </div>
    </motion.div>
  )
}
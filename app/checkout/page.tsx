"use client"

import { useState } from "react"
import { Nav } from "@/components/nav"
import { PaymentMethods } from "@/components/checkout/payment-methods"
import { CryptoPayment } from "@/components/checkout/crypto-payment"
import { ShippingForm } from "@/components/checkout/shipping-form"
import { CheckoutSummary } from "@/components/checkout/checkout-summary"
import { motion } from "framer-motion"

export default function CheckoutPage() {
  const [paymentMethod, setPaymentMethod] = useState<"card" | "crypto">("card")

  return (
    <main className="min-h-screen bg-black">
      <Nav />
      
      <div className="max-w-7xl mx-auto px-4 pt-24 pb-12">
        <div className="grid lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 space-y-6">
            {/* Payment Methods */}
            <motion.section
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="text-xl font-bold mb-4">Payment Method</h2>
              <PaymentMethods
                selected={paymentMethod}
                onSelect={setPaymentMethod}
              />
              
              {paymentMethod === "crypto" && <CryptoPayment />}
            </motion.section>

            {/* Shipping Information */}
            <motion.section
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <h2 className="text-xl font-bold mb-4">Shipping Information</h2>
              <ShippingForm />
            </motion.section>
          </div>

          {/* Order Summary */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="lg:sticky lg:top-24"
          >
            <CheckoutSummary />
          </motion.div>
        </div>
      </div>
    </main>
  )
}
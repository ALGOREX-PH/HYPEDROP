"use client"

import { motion } from "framer-motion"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import Image from "next/image"

const shippingPartners = [
  {
    name: "DHL",
    logo: "https://cdn.jsdelivr.net/gh/gilbarbara/logos@main/logos/dhl.svg"
  },
  {
    name: "FedEx",
    logo: "https://cdn.jsdelivr.net/gh/gilbarbara/logos@main/logos/fedex.svg"
  },
  {
    name: "UPS",
    logo: "https://cdn.jsdelivr.net/gh/gilbarbara/logos@main/logos/ups.svg"
  },
  {
    name: "USPS",
    logo: "https://cdn.jsdelivr.net/gh/gilbarbara/logos@main/logos/usps.svg"
  }
]

export function ShippingPolicy() {
  return (
    <section>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-center mb-12"
      >
        <h2 className="text-3xl font-bold mb-4">Shipping & Delivery</h2>
        <p className="text-gray-400">
          Fast, secure shipping worldwide with real-time tracking
        </p>
      </motion.div>

      {/* Shipping Partners */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
        {shippingPartners.map((partner, i) => (
          <motion.div
            key={partner.name}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            className="bg-white/5 backdrop-blur-sm rounded-xl p-6 flex items-center justify-center border border-white/10"
          >
            <Image
              src={partner.logo}
              alt={partner.name}
              width={120}
              height={40}
              className="h-8 w-auto opacity-75"
            />
          </motion.div>
        ))}
      </div>

      {/* Track Order */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.4 }}
        className="bg-white/5 backdrop-blur-sm rounded-xl p-8 border border-white/10"
      >
        <h3 className="text-xl font-bold mb-6">Track Your Order</h3>
        <div className="flex gap-4">
          <Input
            placeholder="Enter tracking number"
            className="bg-black/40 border-white/10"
          />
          <Button className="bg-blue-600 hover:bg-blue-700 px-8">
            Track
          </Button>
        </div>
      </motion.div>
    </section>
  )
}
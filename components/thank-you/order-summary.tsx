"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { Button } from "@/components/ui/button"

interface OrderSummaryProps {
  orderNumber: string
  productName: string
  productImage: string
  size: string
  quantity: number
  subtotal: number
  shipping: number
  total: number
}

export function OrderSummary({
  orderNumber,
  productName,
  productImage,
  size,
  quantity,
  subtotal,
  shipping,
  total
}: OrderSummaryProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.2 }}
      className="bg-[#0A0A0B] rounded-2xl border border-white/10 overflow-hidden backdrop-blur-sm mb-8"
    >
      <div className="p-6">
        <div className="flex justify-between items-start mb-4">
          <h2 className="text-xl font-bold">Order #{orderNumber}</h2>
          <span className="text-green-400 text-sm bg-green-400/10 px-3 py-1 rounded-full">
            Confirmed
          </span>
        </div>

        <div className="flex gap-6">
          <div className="relative w-40 h-40 rounded-lg overflow-hidden">
            <Image
              src={productImage}
              alt={productName}
              fill
              className="object-cover"
            />
          </div>

          <div className="flex-1">
            <h3 className="font-bold mb-2">{productName}</h3>
            <div className="text-sm text-gray-400 space-y-1">
              <p>Size: {size}</p>
              <p>Quantity: {quantity}</p>
            </div>
            <div className="mt-4 space-y-1">
              <div className="flex justify-between text-sm">
                <span className="text-gray-400">Subtotal</span>
                <span>${subtotal.toFixed(2)}</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-gray-400">Shipping</span>
                <span>${shipping.toFixed(2)}</span>
              </div>
              <div className="flex justify-between text-lg font-bold pt-2 border-t border-white/10">
                <span>Total</span>
                <span className="text-blue-400">${total.toFixed(2)}</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Button 
        className="w-full bg-blue-600 hover:bg-blue-700 rounded-none h-14 text-lg"
      >
        TRACK YOUR ORDER NOW
      </Button>
    </motion.div>
  )
}
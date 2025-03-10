"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { useRouter } from "next/navigation"

interface CartSummaryProps {
  subtotal: number
  shipping: number
  tax: number
  total: number
}

export function CartSummary({ subtotal, shipping, tax, total }: CartSummaryProps) {
  const router = useRouter()

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.2 }}
      className="bg-[#0A0A0B] rounded-lg p-6 border border-white/5"
    >
      <h3 className="font-bold mb-4">Summary</h3>
      
      <div className="space-y-2 text-sm">
        <div className="flex justify-between">
          <span className="text-gray-400">Subtotal</span>
          <span>${subtotal.toFixed(2)}</span>
        </div>
        <div className="flex justify-between">
          <span className="text-gray-400">Shipping</span>
          <span>${shipping.toFixed(2)}</span>
        </div>
        <div className="flex justify-between">
          <span className="text-gray-400">Tax</span>
          <span>${tax.toFixed(2)}</span>
        </div>
        <div className="border-t border-white/5 pt-2 mt-2">
          <div className="flex justify-between font-bold">
            <span>Total</span>
            <span>${total.toFixed(2)}</span>
          </div>
        </div>
      </div>

      <div className="mt-6 space-y-4">
        <div className="flex gap-2">
          <Input
            placeholder="Got a Code? Get Your Hype Discount"
            className="bg-black/40"
          />
          <Button>Apply</Button>
        </div>

        <div className="bg-black/40 rounded-lg p-4">
          <div className="flex justify-between items-center mb-2">
            <span>Your Drop Points</span>
            <span className="text-violet-400">1,250 points</span>
          </div>
          <div className="text-sm text-gray-400">
            Use 1000 points to get $10 off
          </div>
        </div>

        <Button 
          className="w-full bg-violet-600 hover:bg-violet-700"
          onClick={() => router.push("/checkout")}
        >
          Proceed to Checkout
        </Button>
      </div>
    </motion.div>
  )
}
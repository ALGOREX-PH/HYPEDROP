"use client"

import { useState } from "react"
import Image from "next/image"
import { motion } from "framer-motion"
import { Nav } from "@/components/nav"
import { Button } from "@/components/ui/button"
import { MessageCircle, Plus } from "lucide-react"
import { CartItem } from "@/components/cart/cart-item"
import { ShippingMethod, shippingMethods } from "@/components/cart/shipping-method"
import { CartSummary } from "@/components/cart/cart-summary"

export default function CartPage() {
  const [itemQuantity, setItemQuantity] = useState(1)
  const [selectedShipping, setSelectedShipping] = useState("standard")
  const basePrice = 299.99
  
  // Pre-calculate values to avoid state updates during render
  const calculatedValues = {
    subtotal: basePrice * itemQuantity,
    shipping: shippingMethods.find(m => m.id === selectedShipping)?.price || 0,
    get tax() { return this.subtotal * 0.1 },
    get total() { return this.subtotal + this.shipping + this.tax }
  }

  return (
    <main className="min-h-screen bg-black">
      <Nav />
      
      <div className="max-w-7xl mx-auto px-4 pt-24 pb-12">
        {/* Progress Bar */}
        <div className="bg-white/5 rounded-full p-4 mb-8">
          <div className="relative h-2 bg-white/10 rounded-full overflow-hidden">
            <div 
              className="absolute inset-y-0 left-0 bg-gradient-to-r from-blue-500 to-violet-500 rounded-full"
              style={{ width: "75%" }}
            />
          </div>
          <p className="text-sm text-gray-400 mt-2">Spend $50 more for FREE shipping!</p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Cart Items */}
          <div className="lg:col-span-2 space-y-6">
            <CartItem
              id="1"
              name="Supreme x Nike Air Max Plus"
              price={basePrice}
              size="US 10"
              image="https://images.unsplash.com/photo-1552346154-21d32810aba3?w=400"
              initialQuantity={itemQuantity}
              onQuantityChange={setItemQuantity}
              onRemove={() => console.log("Remove item")}
            />

            {/* Shipping Method */}
            <ShippingMethod
              selectedMethod={selectedShipping}
              onMethodChange={setSelectedShipping}
            />
          </div>

          {/* Summary */}
          <div className="lg:sticky lg:top-24">
            <CartSummary
              subtotal={calculatedValues.subtotal}
              shipping={calculatedValues.shipping}
              tax={calculatedValues.tax}
              total={calculatedValues.total}
            />
          </div>
        </div>

        {/* You Might Also Like */}
        <section className="mt-16">
          <h2 className="text-2xl font-bold mb-8">You Might Also Like</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="group bg-[#0A0A0B] rounded-lg overflow-hidden border border-white/5"
            >
              <div className="relative aspect-square">
                <Image
                  src="https://images.unsplash.com/photo-1578681994506-b8f463449011?w=400"
                  alt="Supreme Box Logo Hoodie"
                  fill
                  className="object-cover transition-transform group-hover:scale-110"
                />
                <div className="absolute top-2 left-2 bg-violet-600/90 backdrop-blur-sm text-xs px-2 py-1 rounded-full">
                  🔥 Trending
                </div>
              </div>
              <div className="p-4">
                <h3 className="font-medium">Supreme Box Logo Hoodie</h3>
                <div className="flex justify-between items-center mt-2">
                  <span className="font-bold">$199.99</span>
                  <Button size="icon" variant="ghost" className="h-8 w-8">
                    <Plus className="w-4 h-4" />
                  </Button>
                </div>
              </div>
            </motion.div>
          </div>
        </section>
      </div>

      {/* Chat Button */}
      <Button
        className="fixed bottom-4 right-4 h-12 w-12 rounded-full bg-violet-600 hover:bg-violet-700"
        size="icon"
      >
        <MessageCircle className="w-6 h-6" />
      </Button>
    </main>
  )
}
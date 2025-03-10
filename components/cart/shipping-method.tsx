"use client"

import { Truck, Zap } from "lucide-react"
import { cn } from "@/lib/utils"

export const shippingMethods = [
  {
    id: "standard",
    name: "Standard",
    icon: Truck,
    price: 9.99,
    estimate: "5-7 business days"
  },
  {
    id: "express",
    name: "Express",
    icon: Truck,
    price: 19.99,
    estimate: "2-3 business days"
  },
  {
    id: "same-day",
    name: "Same Day",
    icon: Zap,
    price: 29.99,
    estimate: "Today"
  }
]

interface ShippingMethodProps {
  selectedMethod: string
  onMethodChange: (method: string) => void
}

export function ShippingMethod({ selectedMethod, onMethodChange }: ShippingMethodProps) {
  return (
    <div className="bg-[#0A0A0B] rounded-lg p-6 border border-white/5">
      <h3 className="font-bold mb-4">Shipping Method</h3>
      <div className="grid sm:grid-cols-3 gap-4">
        {shippingMethods.map((method) => (
          <button
            key={method.id}
            className={cn(
              "p-4 rounded-lg border transition-all text-left",
              selectedMethod === method.id
                ? "border-violet-500 bg-violet-500/10"
                : "border-white/5 hover:border-white/20"
            )}
            onClick={() => onMethodChange(method.id)}
          >
            <method.icon className="w-5 h-5 mb-2" />
            <div className="font-medium">{method.name}</div>
            <div className="text-sm text-gray-400">{method.estimate}</div>
            <div className="mt-2 font-bold">${method.price.toFixed(2)}</div>
          </button>
        ))}
      </div>
    </div>
  )
}
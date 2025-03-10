"use client"

import Image from "next/image"
import { cn } from "@/lib/utils"

interface PaymentMethodsProps {
  selected: "card" | "crypto"
  onSelect: (method: "card" | "crypto") => void
}

const paymentOptions = [
  {
    id: "apple-pay",
    name: "Apple Pay",
    logo: "https://cdn.jsdelivr.net/gh/gilbarbara/logos@main/logos/apple-pay.svg",
    dark: true
  },
  {
    id: "google-pay",
    name: "Google Pay",
    logo: "https://cdn.jsdelivr.net/gh/gilbarbara/logos@main/logos/google-pay.svg"
  },
  {
    id: "paypal",
    name: "PayPal",
    logo: "https://cdn.jsdelivr.net/gh/gilbarbara/logos@main/logos/paypal.svg"
  }
]

export function PaymentMethods({ selected, onSelect }: PaymentMethodsProps) {
  return (
    <div className="space-y-4">
      {/* Traditional Payment Methods */}
      <div className="grid grid-cols-3 gap-4">
        {paymentOptions.map((option) => (
          <button
            key={option.id}
            onClick={() => onSelect("card")}
            className={cn(
              "p-4 rounded-lg border transition-all flex items-center justify-center",
              selected === "card"
                ? "border-violet-500 bg-violet-500/10"
                : "border-white/5 hover:border-white/20",
              option.dark && "bg-black"
            )}
          >
            <Image
              src={option.logo}
              alt={option.name}
              width={80}
              height={32}
              className="h-8 w-auto opacity-75"
            />
          </button>
        ))}
      </div>

      {/* Crypto Payment Toggle */}
      <button
        onClick={() => onSelect("crypto")}
        className={cn(
          "w-full p-4 rounded-lg border transition-all text-left",
          selected === "crypto"
            ? "border-violet-500 bg-violet-500/10"
            : "border-white/5 hover:border-white/20"
        )}
      >
        <div className="flex items-center gap-4">
          <div className="w-8 h-8 rounded-full bg-gradient-to-br from-orange-500 to-purple-500 flex items-center justify-center">
            ₿
          </div>
          <div>
            <div className="font-medium">Pay with Crypto</div>
            <div className="text-sm text-gray-400">BTC, ETH, USDT, SOL</div>
          </div>
        </div>
      </button>
    </div>
  )
}
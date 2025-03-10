"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Copy } from "lucide-react"
import { Button } from "@/components/ui/button"

const cryptoOptions = [
  { id: "btc", name: "Bitcoin", symbol: "₿", color: "from-orange-500" },
  { id: "eth", name: "Ethereum", symbol: "Ξ", color: "from-blue-500" },
  { id: "usdt", name: "USDT", symbol: "₮", color: "from-green-500" },
  { id: "sol", name: "Solana", symbol: "◎", color: "from-purple-500" }
]

export function CryptoPayment() {
  const [selectedCrypto, setSelectedCrypto] = useState("eth")
  
  return (
    <motion.div
      initial={{ opacity: 0, height: 0 }}
      animate={{ opacity: 1, height: "auto" }}
      exit={{ opacity: 0, height: 0 }}
      transition={{ duration: 0.3 }}
      className="mt-4 p-6 rounded-lg bg-[#0A0A0B] border border-white/5"
    >
      {/* Crypto Selection */}
      <div className="grid grid-cols-4 gap-4 mb-6">
        {cryptoOptions.map((crypto) => (
          <button
            key={crypto.id}
            onClick={() => setSelectedCrypto(crypto.id)}
            className={`p-4 rounded-lg border transition-all text-center ${
              selectedCrypto === crypto.id
                ? "border-violet-500 bg-violet-500/10"
                : "border-white/5 hover:border-white/20"
            }`}
          >
            <div className={`w-8 h-8 mx-auto mb-2 rounded-full bg-gradient-to-br ${crypto.color} to-gray-500 flex items-center justify-center`}>
              {crypto.symbol}
            </div>
            <div className="text-sm font-medium">{crypto.name}</div>
          </button>
        ))}
      </div>

      {/* QR Code and Address */}
      <div className="flex gap-6">
        <div className="w-32 h-32 bg-white p-2 rounded-lg">
          <div className="w-full h-full bg-[#0A0A0B] rounded" />
        </div>
        
        <div className="flex-1">
          <div className="text-sm text-gray-400 mb-2">
            Scan QR code or send to address:
          </div>
          <div className="flex gap-2 mb-4">
            <code className="flex-1 p-2 bg-black/40 rounded font-mono text-sm">
              0x1a2b...3c4d
            </code>
            <Button variant="outline" size="icon">
              <Copy className="w-4 h-4" />
            </Button>
          </div>
          
          <div className="space-y-2 text-sm text-gray-400">
            <div className="flex justify-between">
              <span>Network</span>
              <span>Ethereum (ERC-20)</span>
            </div>
            <div className="flex justify-between">
              <span>Gas Fee</span>
              <span>~$2.50 USD</span>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  )
}
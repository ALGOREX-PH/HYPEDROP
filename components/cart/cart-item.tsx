"use client"

import { useState } from "react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Minus, Plus } from "lucide-react"
import { motion } from "framer-motion"

interface CartItemProps {
  id: string
  name: string
  price: number
  size: string
  image: string
  initialQuantity?: number
  onQuantityChange?: (quantity: number) => void
  onRemove?: () => void
}

export function CartItem({
  name,
  price,
  size,
  image,
  initialQuantity = 1,
  onQuantityChange,
  onRemove
}: CartItemProps) {
  const [quantity, setQuantity] = useState(initialQuantity)

  const handleQuantityChange = (newQuantity: number) => {
    const validQuantity = Math.max(1, newQuantity)
    setQuantity(validQuantity)
    onQuantityChange?.(validQuantity)
  }

  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="bg-[#0A0A0B] rounded-lg p-4 border border-white/5"
    >
      <div className="flex gap-4">
        <div className="relative w-32 h-32 rounded-lg overflow-hidden">
          <Image
            src={image}
            alt={name}
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
          <div className="absolute bottom-2 left-2">
            <div className="flex space-x-1">
              <div className="w-1 h-1 bg-blue-500 rounded-full animate-pulse" />
              <div className="w-1 h-1 bg-blue-500 rounded-full animate-pulse delay-100" />
              <div className="w-1 h-1 bg-blue-500 rounded-full animate-pulse delay-200" />
            </div>
          </div>
        </div>
        
        <div className="flex-1">
          <div className="flex justify-between items-start">
            <div>
              <h3 className="font-bold">{name}</h3>
              <p className="text-sm text-gray-400">Size: {size}</p>
            </div>
            <span className="text-xl font-bold">${price.toFixed(2)}</span>
          </div>
          
          <div className="flex items-center gap-4 mt-4">
            <div className="flex items-center gap-2">
              <Button
                variant="outline"
                size="icon"
                className="h-8 w-8"
                onClick={() => handleQuantityChange(quantity - 1)}
              >
                <Minus className="w-4 h-4" />
              </Button>
              <span className="w-8 text-center">{quantity}</span>
              <Button
                variant="outline"
                size="icon"
                className="h-8 w-8"
                onClick={() => handleQuantityChange(quantity + 1)}
              >
                <Plus className="w-4 h-4" />
              </Button>
            </div>
            <Button 
              variant="ghost" 
              className="text-red-500 hover:text-red-400"
              onClick={onRemove}
            >
              Remove
            </Button>
          </div>
        </div>
      </div>
    </motion.div>
  )
}
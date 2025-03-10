"use client"

import { useState } from "react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Eye, Users, Star, ChevronLeft, ChevronRight, Flame } from "lucide-react"
import { cn } from "@/lib/utils"

interface Product {
  id: string
  name: string
  price: number
  images: string[]
  colors: string[]
  sizes: string[]
  type: string
  stockCount: number
  viewerCount: number
  purchaseCount: number
  rating: number
  reviewCount: number
}

interface ProductDetailsProps {
  product: Product
}

export function ProductDetails({ product }: ProductDetailsProps) {
  const [selectedImage, setSelectedImage] = useState(0)
  const [selectedColor, setSelectedColor] = useState(0)
  const [selectedSize, setSelectedSize] = useState(1)

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
      {/* Product Images */}
      <div className="space-y-4">
        {/* Main Image */}
        <div className="relative aspect-square rounded-lg overflow-hidden bg-gray-900">
          <Image
            src={product.images[selectedImage]}
            alt={product.name}
            fill
            className="object-cover"
          />
          <div className="absolute top-4 left-4 bg-[#FF2D55] text-white px-3 py-1 rounded-full text-sm font-medium">
            {product.type}
          </div>
        </div>
        
        {/* Thumbnail Grid */}
        <div className="grid grid-cols-4 gap-4">
          {product.images.map((image, idx) => (
            <button
              key={idx}
              className={cn(
                "relative aspect-square rounded-lg overflow-hidden",
                "ring-2 ring-offset-2 ring-offset-black transition-all",
                selectedImage === idx ? "ring-violet-500" : "ring-transparent"
              )}
              onClick={() => setSelectedImage(idx)}
            >
              <Image
                src={image}
                alt={`View ${idx + 1}`}
                fill
                className="object-cover"
              />
            </button>
          ))}
        </div>
      </div>

      {/* Product Info */}
      <div className="space-y-6">
        {/* Live Stats */}
        <div className="flex items-center gap-4 text-sm text-gray-400">
          <div className="flex items-center gap-1">
            <Users className="w-4 h-4" />
            <span>{product.viewerCount} people are viewing this right now</span>
          </div>
          <div className="flex items-center gap-1">
            <Flame className="w-4 h-4 text-orange-500" />
            <span>{product.purchaseCount} purchased in last 24 hours</span>
          </div>
        </div>

        {/* Title & Price */}
        <div>
          <h1 className="text-3xl font-bold mb-2">{product.name}</h1>
          <div className="flex items-center gap-4">
            <span className="text-2xl font-bold">${product.price.toFixed(2)}</span>
            <div className="flex items-center gap-1">
              <Star className="w-4 h-4 text-yellow-500 fill-yellow-500" />
              <span>{product.rating}</span>
              <span className="text-gray-400">({product.reviewCount} reviews)</span>
            </div>
          </div>
        </div>

        {/* Color Selection */}
        <div>
          <label className="block text-sm font-medium mb-2">COLOR</label>
          <div className="flex gap-2">
            {product.colors.map((color, idx) => (
              <button
                key={idx}
                className={cn(
                  "w-8 h-8 rounded-full",
                  "ring-2 ring-offset-2 ring-offset-black transition-all",
                  selectedColor === idx ? "ring-violet-500" : "ring-transparent"
                )}
                style={{ backgroundColor: color }}
                onClick={() => setSelectedColor(idx)}
              />
            ))}
          </div>
        </div>

        {/* Size Selection */}
        <div>
          <div className="flex items-center justify-between mb-2">
            <label className="block text-sm font-medium">SIZE</label>
            <Button variant="link" className="text-sm h-auto p-0">
              Size Guide
            </Button>
          </div>
          <div className="grid grid-cols-3 gap-2">
            {product.sizes.map((size, idx) => (
              <Button
                key={size}
                variant="outline"
                className={cn(
                  selectedSize === idx && "bg-violet-500/20 border-violet-500"
                )}
                onClick={() => setSelectedSize(idx)}
              >
                {size}
              </Button>
            ))}
          </div>
        </div>

        {/* Stock Status */}
        <div className="flex items-center gap-2 text-red-500">
          <Flame className="w-4 h-4" />
          <span>Only {product.stockCount} Left in Size L</span>
        </div>

        {/* Add to Cart */}
        <Button className="w-full h-12 text-lg bg-[#00BCD4] hover:bg-[#00ACC1]">
          Add to Cart
        </Button>

        {/* Payment Methods */}
        <div className="grid grid-cols-3 gap-2">
          <Button variant="outline" className="h-12">
            <img
              src="https://cdn.jsdelivr.net/gh/gilbarbara/logos@main/logos/apple-pay.svg"
              alt="Apple Pay"
              className="h-8 w-auto opacity-75"
            />
          </Button>
          <Button variant="outline" className="h-12">
            <img
              src="https://cdn.jsdelivr.net/gh/gilbarbara/logos@main/logos/google-pay.svg"
              alt="Google Pay"
              className="h-8 w-auto opacity-75"
            />
          </Button>
          <Button variant="outline" className="h-12">
            <img
              src="https://cdn.jsdelivr.net/gh/gilbarbara/logos@main/logos/paypal.svg"
              alt="PayPal"
              className="h-8 w-auto opacity-75"
            />
          </Button>
        </div>
      </div>
    </div>
  )
}
"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import Image from "next/image"
import { LayoutGrid, List, ShoppingCart, Flame } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { cn } from "@/lib/utils"

interface Product {
  id: string
  brand: string
  name: string
  price: number
  image: string
  hoverImage: string
  hypeScore: number
  type: "Limited Edition" | "Collab" | "Resale" | "New Arrival"
}

const products: Product[] = [
  {
    id: "1",
    brand: "Nike x Travis Scott",
    name: "Air Jordan 1 Reverse Mocha",
    price: 1200,
    image: "https://images.unsplash.com/photo-1523398002811-999ca8dec234?w=800",
    hoverImage: "https://images.unsplash.com/photo-1523398002811-999ca8dec234?w=800",
    hypeScore: 95,
    type: "Collab"
  },
  {
    id: "2",
    brand: "Off-White",
    name: "Pascal Oversized Hoodie",
    price: 650,
    image: "https://images.unsplash.com/photo-1578681994506-b8f463449011?w=800",
    hoverImage: "https://images.unsplash.com/photo-1578681994506-b8f463449011?w=800",
    hypeScore: 88,
    type: "Limited Edition"
  },
  {
    id: "3",
    brand: "Supreme",
    name: "Box Logo Tee SS25",
    price: 450,
    image: "https://images.unsplash.com/photo-1591047139829-d91aecb6caea?w=800",
    hoverImage: "https://images.unsplash.com/photo-1591047139829-d91aecb6caea?w=800",
    hypeScore: 92,
    type: "New Arrival"
  }
]

interface ProductGridProps {
  view: "grid" | "list"
  onViewChange: (view: "grid" | "list") => void
}

export function ProductGrid({ view, onViewChange }: ProductGridProps) {
  const [hoveredProduct, setHoveredProduct] = useState<string | null>(null)
  const router = useRouter()

  const handleProductClick = (productId: string) => {
    router.push(`/shop/${productId}`)
  }

  return (
    <div>
      {/* View Toggle */}
      <div className="flex justify-end gap-2 mb-6">
        <Button
          variant="ghost"
          size="icon"
          onClick={() => onViewChange("grid")}
          className={cn(view === "grid" && "bg-white/10")}
        >
          <LayoutGrid className="w-4 h-4" />
        </Button>
        <Button
          variant="ghost"
          size="icon"
          onClick={() => onViewChange("list")}
          className={cn(view === "list" && "bg-white/10")}
        >
          <List className="w-4 h-4" />
        </Button>
      </div>

      {/* Product Grid */}
      <div className={cn(
        "grid gap-6",
        view === "grid" ? "grid-cols-1 sm:grid-cols-2 lg:grid-cols-3" : "grid-cols-1"
      )}>
        {products.map((product) => (
          <Card
            key={product.id}
            onClick={() => handleProductClick(product.id)}
            className={cn(
              "group relative overflow-hidden bg-black/40 border-gray-800 transition-all duration-300 cursor-pointer",
              "hover:border-violet-500/50 hover:shadow-lg hover:shadow-violet-500/10",
              view === "list" && "sm:flex"
            )}
            onMouseEnter={() => setHoveredProduct(product.id)}
            onMouseLeave={() => setHoveredProduct(null)}
          >
            <div className={cn(
              "aspect-square relative overflow-hidden",
              view === "list" && "sm:w-48"
            )}>
              <Image
                src={hoveredProduct === product.id ? product.hoverImage : product.image}
                alt={product.name}
                fill
                className={cn(
                  "object-cover transition-transform duration-500",
                  "sm:group-hover:scale-110"
                )}
              />
              <div className="absolute top-4 left-4 bg-violet-600 px-3 py-1 rounded-full text-sm">
                {product.type}
              </div>
            </div>

            <div className="p-4 flex-1">
              <div className="text-sm text-gray-400 mb-1">{product.brand}</div>
              <h3 className="text-lg font-semibold mb-2">{product.name}</h3>
              
              <div className="flex items-center justify-between">
                <span className="text-xl sm:text-2xl font-bold text-violet-400">${product.price}</span>
                <div className="flex items-center gap-1 text-sm">
                  <Flame className="w-4 h-4 text-orange-500" />
                  <span>{product.hypeScore}</span>
                </div>
              </div>

              <Button
                className="w-full mt-4 bg-violet-600 hover:bg-violet-700 gap-2"
                onClick={(e) => {
                  e.stopPropagation()
                  console.log("Add to cart:", product.id)
                }}
              >
                <ShoppingCart className="w-4 h-4" />
                Add to Cart
              </Button>
            </div>
          </Card>
        ))}
      </div>

      {/* Load More */}
      <div className="text-center mt-12">
        <Button variant="outline" className="gap-2">
          <span>Fetching More Heat...</span>
          <Flame className="w-4 h-4 animate-pulse text-orange-500" />
        </Button>
      </div>
    </div>
  )
}
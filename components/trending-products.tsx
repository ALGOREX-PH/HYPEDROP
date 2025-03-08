"use client"

import { Card } from "@/components/ui/card"
import Image from "next/image"

const products = [
  {
    id: 1,
    name: "Nike Air Max 2025",
    price: 299,
    image: "https://images.unsplash.com/photo-1552346154-21d32810aba3?w=800&h=800&q=80",
    stock: 5,
    tag: "Limited Edition"
  },
  {
    id: 2,
    name: "BAPE Hoodie",
    price: 425,
    image: "https://images.unsplash.com/photo-1578681994506-b8f463449011?w=800&h=800&q=80",
    stock: 8,
    tag: "Exclusive Drop"
  },
  {
    id: 3,
    name: "Off-White Jacket",
    price: 895,
    image: "https://images.unsplash.com/photo-1591047139829-d91aecb6caea?w=800&h=800&q=80",
    stock: 3,
    tag: "New Arrival"
  }
]

export function TrendingProducts() {
  return (
    <section className="py-20 px-4">
      <h2 className="text-3xl font-bold text-center mb-12">TRENDING NOW</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl mx-auto">
        {products.map(product => (
          <Card key={product.id} className="group relative overflow-hidden bg-black/40 border-gray-800">
            <div className="aspect-square relative overflow-hidden">
              <Image
                src={product.image}
                alt={product.name}
                fill
                className="object-cover transition-transform group-hover:scale-110"
              />
              <div className="absolute top-4 left-4 bg-violet-600 px-3 py-1 rounded-full text-sm">
                {product.tag}
              </div>
            </div>
            <div className="p-4">
              <h3 className="text-lg font-semibold mb-2">{product.name}</h3>
              <div className="flex justify-between items-center">
                <span className="text-2xl font-bold">${product.price}</span>
                <span className="text-sm text-gray-400">{product.stock} left in stock</span>
              </div>
            </div>
          </Card>
        ))}
      </div>
    </section>
  )
}
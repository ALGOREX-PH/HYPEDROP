"use client"

import Image from "next/image"
import { Card } from "@/components/ui/card"
import { Flame } from "lucide-react"

const relatedProducts = [
  {
    id: 1,
    name: "TECH Cargo Pants",
    price: 149.00,
    image: "https://images.unsplash.com/photo-1523398002811-999ca8dec234?w=600"
  },
  {
    id: 2,
    name: "CYBER Kicks",
    price: 229.00,
    image: "https://images.unsplash.com/photo-1552346154-21d32810aba3?w=600"
  },
  {
    id: 3,
    name: "TECH Backpack",
    price: 129.00,
    image: "https://images.unsplash.com/photo-1578681994506-b8f463449011?w=600"
  },
  {
    id: 4,
    name: "Chain Necklace",
    price: 89.00,
    image: "https://images.unsplash.com/photo-1591047139829-d91aecb6caea?w=600"
  }
]

export function RelatedProducts() {
  return (
    <section className="mt-24">
      <h2 className="text-2xl font-bold mb-8 flex items-center gap-2">
        <Flame className="w-6 h-6 text-orange-500" />
        Style with This
      </h2>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
        {relatedProducts.map((product) => (
          <Card
            key={product.id}
            className="group relative overflow-hidden bg-black/40 border-gray-800 transition-all duration-300 hover:border-violet-500/50 hover:shadow-lg hover:shadow-violet-500/10"
          >
            <div className="aspect-square relative overflow-hidden">
              <Image
                src={product.image}
                alt={product.name}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-110"
              />
            </div>
            <div className="p-4">
              <h3 className="font-semibold mb-2">{product.name}</h3>
              <span className="text-lg font-bold text-violet-400">
                ${product.price.toFixed(2)}
              </span>
            </div>
          </Card>
        ))}
      </div>
    </section>
  )
}
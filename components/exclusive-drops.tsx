"use client"

import Image from "next/image"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"

const drops = [
  {
    id: 1,
    name: "HYPEDROP x BAPE Collab",
    image: "https://images.unsplash.com/photo-1552346154-21d32810aba3?w=800",
    type: "LIMITED STOCK",
    description: "Premium Limited Edition Hoodie"
  },
  {
    id: 2,
    name: "Cyber Runners 2.0",
    image: "https://images.unsplash.com/photo-1523398002811-999ca8dec234?w=800",
    type: "UPCOMING DROP",
    description: "Limited Edition Sneakers"
  },
  {
    id: 3,
    name: "Tech Wear Jacket",
    image: "https://images.unsplash.com/photo-1591047139829-d91aecb6caea?w=800",
    type: "PRE-ORDER",
    description: "Urban Tactical Collection"
  }
]

export function ExclusiveDrops() {
  return (
    <section className="py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold mb-12 text-center">
          Exclusive Streetwear Releases
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {drops.map((drop) => (
            <Card
              key={drop.id}
              className="group relative overflow-hidden bg-black/40 border-gray-800 hover:border-violet-500/50"
            >
              <div className="aspect-square relative overflow-hidden">
                <Image
                  src={drop.image}
                  alt={drop.name}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute top-4 left-4 bg-violet-600 px-3 py-1 rounded-full text-sm">
                  {drop.type}
                </div>
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">{drop.name}</h3>
                <p className="text-gray-400 mb-4">{drop.description}</p>
                <Button
                  variant="outline"
                  className="w-full hover:bg-violet-600 hover:text-white transition-colors"
                >
                  Tap to Reveal Price
                </Button>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
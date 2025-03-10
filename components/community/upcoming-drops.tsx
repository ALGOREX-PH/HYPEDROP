"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { Button } from "@/components/ui/button"

const drops = [
  {
    id: 1,
    name: "Air Max 2025",
    image: "https://images.unsplash.com/photo-1552346154-21d32810aba3",
    price: 159,
    releaseDate: "2 days",
    brand: "Nike"
  },
  {
    id: 2,
    name: "Yeezy Boost 950",
    image: "https://images.unsplash.com/photo-1578681994506-b8f463449011",
    price: 299,
    releaseDate: "5 days",
    brand: "Adidas"
  },
  {
    id: 3,
    name: "Box Logo Hoodie",
    image: "https://images.unsplash.com/photo-1591047139829-d91aecb6caea",
    price: 159,
    releaseDate: "1 week",
    brand: "Supreme"
  },
  {
    id: 4,
    name: "Shark Full Zip",
    image: "https://images.unsplash.com/photo-1523398002811-999ca8dec234",
    price: 389,
    releaseDate: "2 weeks",
    brand: "BAPE"
  }
]

export function UpcomingDrops() {
  return (
    <section className="py-20">
      <h2 className="text-2xl font-bold mb-8">Upcoming Drops</h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {drops.map((drop, i) => (
          <motion.div
            key={drop.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            className="group bg-[#0A0A0B] rounded-xl overflow-hidden border border-white/5"
          >
            <div className="relative aspect-square overflow-hidden">
              <Image
                src={drop.image}
                alt={drop.name}
                fill
                className="object-cover transition-transform group-hover:scale-110"
              />
              <div className="absolute top-4 left-4 px-3 py-1 rounded-full text-xs font-medium bg-blue-500/90 backdrop-blur-sm">
                In {drop.releaseDate}
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
            </div>

            <div className="p-4">
              <div className="text-sm text-gray-400 mb-1">{drop.brand}</div>
              <h3 className="font-bold mb-2">{drop.name}</h3>
              <div className="flex items-center justify-between">
                <span className="font-bold">${drop.price}</span>
                <Button size="sm" variant="outline">
                  Notify Me
                </Button>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
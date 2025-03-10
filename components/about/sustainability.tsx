"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { Recycle, Leaf, Users } from "lucide-react"

const initiatives = [
  {
    icon: Recycle,
    title: "Recycled Materials",
    description: "High-res images with detailed close-ups of biodegradable soles, repurposed mesh, plant-based dyes."
  },
  {
    icon: Leaf,
    title: "Carbon-Neutral",
    description: "Interactive globe visualizing HYPEDROP's factory emissions reduction strategy."
  },
  {
    icon: Users,
    title: "Ethical Labor",
    description: "Behind-the-scenes clips of skilled artisans working in a well-lit, modern facility."
  }
]

export function Sustainability() {
  return (
    <section className="py-24">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Sustainability & Ethical Sourcing
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            We believe in creating products that not only look good but do good. Our commitment to sustainability drives every decision we make.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 mb-16">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="relative aspect-[4/3] rounded-2xl overflow-hidden"
          >
            <Image
              src="https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=800"
              alt="Sustainable Production"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent" />
            <div className="absolute bottom-6 left-6 right-6">
              <h3 className="text-xl font-bold mb-2">Sustainable Production</h3>
              <p className="text-gray-300 text-sm">
                Our factories use 100% renewable energy and innovative recycling systems
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="relative aspect-[4/3] rounded-2xl overflow-hidden"
          >
            <Image
              src="https://images.unsplash.com/photo-1521898284481-a5ec348cb555?w=800"
              alt="Ethical Manufacturing"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent" />
            <div className="absolute bottom-6 left-6 right-6">
              <h3 className="text-xl font-bold mb-2">Ethical Manufacturing</h3>
              <p className="text-gray-300 text-sm">
                Fair wages and safe working conditions for all our artisans
              </p>
            </div>
          </motion.div>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {initiatives.map((initiative, i) => (
            <motion.div
              key={initiative.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 + (i * 0.1) }}
              className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10"
            >
              <initiative.icon className="w-8 h-8 text-violet-400 mb-4" />
              <h3 className="text-lg font-bold mb-2">{initiative.title}</h3>
              <p className="text-gray-400 text-sm">{initiative.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
"use client"

import { motion } from "framer-motion"
import Image from "next/image"

const team = [
  {
    name: "Alex Chen",
    role: "Lead Designer",
    image: "https://api.dicebear.com/7.x/avataaars/svg?seed=1",
    specialty: "Sneaker Innovation"
  },
  {
    name: "Sarah Kim",
    role: "Creative Director",
    image: "https://api.dicebear.com/7.x/avataaars/svg?seed=2",
    specialty: "Streetwear Trends"
  },
  {
    name: "Marcus Williams",
    role: "Technical Designer",
    image: "https://api.dicebear.com/7.x/avataaars/svg?seed=3",
    specialty: "Material Science"
  },
  {
    name: "Emma Garcia",
    role: "Pattern Designer",
    image: "https://api.dicebear.com/7.x/avataaars/svg?seed=4",
    specialty: "Urban Fashion"
  }
]

export function DesignTeam() {
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
            Meet Our Design Team
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            The creative minds behind HYPEDROP's most iconic designs. Each bringing their unique perspective to streetwear culture.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-4 gap-6">
          {team.map((member, i) => (
            <motion.div
              key={member.name}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 + (i * 0.1) }}
              className="group relative"
            >
              <div className="aspect-square rounded-xl overflow-hidden bg-gradient-to-br from-violet-600/20 to-transparent border border-white/10">
                <Image
                  src={member.image}
                  alt={member.name}
                  width={400}
                  height={400}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="absolute bottom-4 left-4 right-4 transform translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
                  <h3 className="font-bold text-lg">{member.name}</h3>
                  <p className="text-violet-400 text-sm">{member.role}</p>
                  <p className="text-gray-400 text-sm mt-1">{member.specialty}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
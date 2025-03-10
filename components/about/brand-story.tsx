"use client"

import { motion } from "framer-motion"

export function BrandStory() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden py-24">
      {/* Background Video */}
      <div className="absolute inset-0">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="object-cover w-full h-full opacity-30"
        >
          <source src="https://cdn.pixabay.com/vimeo/147860386/urban-19420.mp4?width=1280&hash=bc7c3ca7945fa4a92f32f72b0c4c37f5f2d82245" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-gradient-to-b from-black via-black/50 to-black" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-4xl mx-auto text-center px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="space-y-8"
        >
          <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-blue-400 via-cyan-400 to-violet-400 bg-clip-text text-transparent [text-shadow:_0_4px_24px_rgb(0_0_0_/_50%)]">
            HYPEDROP:
            <br />
            Elevate. Innovate.
            <br />
            Dominate.
          </h1>

          <p className="text-xl text-gray-300 leading-relaxed">
            HYPEDROP was born from a love for innovation and an obsession with the future of fashion. Our mission is to break boundaries between streetwear and technology, crafting sneakers that aren't just worn—they're experienced.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="relative aspect-square rounded-xl overflow-hidden"
            >
              <video
                autoPlay
                loop
                muted
                playsInline
                className="absolute inset-0 w-full h-full object-cover"
              >
                <source src="https://cdn.pixabay.com/vimeo/147860386/urban-19420.mp4?width=640&hash=bc7c3ca7945fa4a92f32f72b0c4c37f5f2d82245" type="video/mp4" />
              </video>
              <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent" />
              <div className="absolute bottom-4 left-4 right-4">
                <h3 className="text-lg font-bold">Design Process</h3>
                <p className="text-sm text-gray-300">Watch our creative journey</p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="relative aspect-square rounded-xl overflow-hidden bg-gradient-to-br from-violet-600/20 to-transparent"
            >
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center">
                  <div className="text-4xl font-bold mb-2">150+</div>
                  <div className="text-sm text-gray-300">Limited Drops</div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="relative aspect-square rounded-xl overflow-hidden bg-gradient-to-br from-blue-600/20 to-transparent"
            >
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center">
                  <div className="text-4xl font-bold mb-2">50K+</div>
                  <div className="text-sm text-gray-300">Happy Customers</div>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
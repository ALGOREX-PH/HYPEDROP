"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { Heart, MessageCircle } from "lucide-react"

const posts = [
  {
    id: 1,
    title: "Supreme x Nike SB: The Ultimate Collab",
    description: "Everything you need to know about this week's most anticipated release.",
    image: "https://images.unsplash.com/photo-1523398002811-999ca8dec234",
    category: "NEW DROP",
    author: {
      name: "streetmaster",
      avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=1"
    },
    likes: 2.4,
    comments: 512
  },
  {
    id: 2,
    title: "Top 10 Grails of 2025",
    description: "The most sought-after sneakers that every collector needs.",
    image: "https://images.unsplash.com/photo-1552346154-21d32810aba3",
    category: "COLLECTION",
    author: {
      name: "sneakerhead",
      avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=2"
    },
    likes: 1.8,
    comments: 312
  },
  {
    id: 3,
    title: "Tech Wear: Future of Fashion",
    description: "Breaking down the cyberpunk-inspired fashion movement.",
    image: "https://images.unsplash.com/photo-1591047139829-d91aecb6caea",
    category: "STYLE GUIDE",
    author: {
      name: "futurefire",
      avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=3"
    },
    likes: 3.2,
    comments: 246
  }
]

export function TrendingPosts() {
  return (
    <section className="py-20">
      <div className="flex items-center justify-between mb-8">
        <h2 className="text-2xl font-bold">Trending Now</h2>
        <div className="flex gap-2">
          <button className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center">
            ←
          </button>
          <button className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center">
            →
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {posts.map((post, i) => (
          <motion.article
            key={post.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            className="group bg-[#0A0A0B] rounded-xl overflow-hidden border border-white/5"
          >
            <div className="relative aspect-[4/3] overflow-hidden">
              <Image
                src={post.image}
                alt={post.title}
                fill
                className="object-cover transition-transform group-hover:scale-110"
              />
              <div className="absolute top-4 left-4 px-3 py-1 rounded-full text-xs font-medium bg-blue-500/90 backdrop-blur-sm">
                {post.category}
              </div>
            </div>

            <div className="p-6">
              <h3 className="text-lg font-bold mb-2 line-clamp-2">
                {post.title}
              </h3>
              <p className="text-gray-400 text-sm mb-4 line-clamp-2">
                {post.description}
              </p>

              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <div className="w-6 h-6 rounded-full overflow-hidden">
                    <Image
                      src={post.author.avatar}
                      alt={post.author.name}
                      width={24}
                      height={24}
                    />
                  </div>
                  <span className="text-sm text-gray-400">@{post.author.name}</span>
                </div>
                <div className="flex items-center gap-3 text-sm text-gray-400">
                  <div className="flex items-center gap-1">
                    <Heart className="w-4 h-4" />
                    <span>{post.likes}k</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <MessageCircle className="w-4 h-4" />
                    <span>{post.comments}</span>
                  </div>
                </div>
              </div>
            </div>
          </motion.article>
        ))}
      </div>
    </section>
  )
}
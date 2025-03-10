"use client"

import { Nav } from "@/components/nav"
import { HeroSection } from "@/components/community/hero-section"
import { TrendingPosts } from "@/components/community/trending-posts"
import { HypeMeter } from "@/components/community/hype-meter"
import { UpcomingDrops } from "@/components/community/upcoming-drops"
import { Footer } from "@/components/footer"

export default function CommunityPage() {
  return (
    <main className="min-h-screen bg-black">
      <Nav />
      
      <div className="max-w-7xl mx-auto px-4">
        <HeroSection />
        <TrendingPosts />
        <HypeMeter />
        <UpcomingDrops />
      </div>

      <Footer />
    </main>
  )
}
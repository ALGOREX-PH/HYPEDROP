"use client"

import { Nav } from "@/components/nav"
import { Footer } from "@/components/footer"
import { BrandStory } from "@/components/about/brand-story"
import { Sustainability } from "@/components/about/sustainability"
import { DesignTeam } from "@/components/about/design-team"
import { DesignMatch } from "@/components/about/design-match"

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-black">
      <Nav />
      
      <div className="max-w-7xl mx-auto px-4">
        <BrandStory />
        <Sustainability />
        <DesignTeam />
        <DesignMatch />
      </div>

      <Footer />
    </main>
  )
}
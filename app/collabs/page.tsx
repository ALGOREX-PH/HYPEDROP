import { Nav } from "@/components/nav"
import { Footer } from "@/components/footer"
import { CollabHero } from "@/components/collab-hero"
import { ExclusiveDrops } from "@/components/exclusive-drops"
import { VipAccess } from "@/components/vip-access"
import { BehindScenes } from "@/components/behind-scenes"

export default function CollabsPage() {
  return (
    <main className="min-h-screen bg-black">
      <Nav />
      
      <CollabHero />
      <ExclusiveDrops />
      <VipAccess />
      <BehindScenes />
      
      <Footer />
    </main>
  )
}
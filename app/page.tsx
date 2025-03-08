import { Nav } from "@/components/nav"
import { CountdownTimer } from "@/components/countdown-timer"
import { TrendingProducts } from "@/components/trending-products"
import Image from "next/image"
import { Button } from "@/components/ui/button"

export default function Home() {
  return (
    <main className="min-h-screen bg-black">
      <Nav />
      
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <video
            autoPlay
            loop
            muted
            playsInline
            className="object-cover w-full h-full"
          >
            <source src="https://cdn.pixabay.com/vimeo/147860386/urban-19420.mp4?width=1280&hash=bc7c3ca7945fa4a92f32f72b0c4c37f5f2d82245" type="video/mp4" />
          </video>
          <div className="absolute inset-0 bg-black/70 backdrop-blur-sm"></div>
        </div>
        
        <div className="relative z-10 text-center px-4">
          <div className="space-y-4">
            <span className="inline-block bg-violet-600 text-white px-4 py-1 rounded-full text-sm">
              🔥 EXCLUSIVE DROP
            </span>
            <h1 className="text-5xl md:text-7xl font-bold">
              SUPREME × NIKE<br />SPRING 2025
            </h1>
            <p className="text-xl text-gray-400">ONLY 50 PIECES LEFT</p>
            <Button size="lg" className="bg-violet-600 hover:bg-violet-700 mt-8">
              Shop The Drop
            </Button>
          </div>
        </div>
      </section>

      <CountdownTimer />
      
      <TrendingProducts />
      
      {/* Social Feed Section */}
      <section className="py-20 px-4 text-center">
        <h2 className="text-3xl font-bold mb-4">#HYPEDROPSTYLE</h2>
        <p className="text-gray-400 mb-12">Tag us to be featured</p>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-7xl mx-auto">
          {Array.from({ length: 4 }).map((_, i) => (
            <div key={i} className="aspect-square relative overflow-hidden rounded-lg">
              <Image
                src={`https://images.unsplash.com/photo-${[
                  "1523398002811-999ca8dec234",
                  "1552346154-21d32810aba3",
                  "1578681994506-b8f463449011",
                  "1591047139829-d91aecb6caea"
                ][i]}?w=600&h=600&q=80`}
                alt={`Style ${i + 1}`}
                fill
                className="object-cover hover:scale-110 transition-transform"
              />
            </div>
          ))}
        </div>
      </section>
    </main>

  )
}
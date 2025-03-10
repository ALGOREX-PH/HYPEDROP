import { Nav } from "@/components/nav"
import { CountdownTimer } from "@/components/countdown-timer"
import { TrendingProducts } from "@/components/trending-products"
import { Footer } from "@/components/footer"
import { ChatBot } from "@/components/chat-bot"
import Image from "next/image"
import { Button } from "@/components/ui/button"

export default function Home() {
  return (
    <main className="min-h-screen bg-black">
      <Nav />
      
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          {/* Animated gradient background */}
          <div className="absolute inset-0 bg-gradient-to-br from-violet-600/20 via-fuchsia-500/20 to-cyan-500/20 animate-gradient-xy"></div>
          
          <video
            autoPlay
            loop
            muted
            playsInline
            className="object-cover w-full h-full mix-blend-overlay opacity-50"
          >
            <source src="https://cdn.pixabay.com/vimeo/147860386/urban-19420.mp4?width=1280&hash=bc7c3ca7945fa4a92f32f72b0c4c37f5f2d82245" type="video/mp4" />
          </video>
          <div className="absolute inset-0 bg-black/50 backdrop-blur-[2px]"></div>
          
          {/* Animated mesh gradient */}
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(50,0,100,0.3),transparent_70%)]"></div>
        </div>
        
        <div className="relative z-10 text-center px-4 animate-fade-in">
          <div className="space-y-4">
            <span className="inline-block bg-violet-600/90 text-white px-4 py-1 rounded-full text-sm backdrop-blur-sm shadow-lg shadow-violet-500/20">
              🔥 EXCLUSIVE DROP
            </span>
            <h1 className="text-5xl md:text-7xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-white via-violet-200 to-white">
              SUPREME × NIKE<br />SPRING 2025
            </h1>
            <p className="text-xl text-gray-300">ONLY 50 PIECES LEFT</p>
            <Button
              size="lg"
              className="bg-violet-600 hover:bg-violet-700 mt-8 shadow-lg shadow-violet-500/20 transition-all hover:scale-105"
              onClick={() => window.location.href = '/shop'}
            >
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
      <Footer />
      <ChatBot />
    </main>

  )
}
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Clock, Siren as Fire, Sparkles, TrendingUp } from "lucide-react"

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1523398002811-999ca8dec234?q=80&w=2000')] bg-cover bg-center">
          <div className="absolute inset-0 bg-black/70 backdrop-blur-sm"></div>
        </div>
        
        <div className="relative z-10 text-center px-4">
          <h1 className="text-6xl md:text-8xl font-bold mb-6 bg-gradient-to-r from-red-500 via-purple-500 to-blue-500 text-transparent bg-clip-text animate-gradient">
            HYPEDROP
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-gray-300">
            Wear the Culture. Own the Streets.
          </p>
          <div className="flex gap-4 justify-center">
            <Button size="lg" className="bg-primary hover:bg-primary/90">
              Shop Latest Drops
            </Button>
            <Button size="lg" variant="outline">
              Join the Culture
            </Button>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4 bg-black/50 backdrop-blur">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            The Future of Streetwear
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <FeatureCard
              icon={<Fire className="w-8 h-8 text-red-500" />}
              title="Limited Drops"
              description="Exclusive releases from top underground brands and designers"
            />
            <FeatureCard
              icon={<Clock className="w-8 h-8 text-blue-500" />}
              title="Drop Timer"
              description="Never miss a release with our real-time countdown system"
            />
            <FeatureCard
              icon={<Sparkles className="w-8 h-8 text-purple-500" />}
              title="AI Styling"
              description="Get personalized fits based on your unique style"
            />
            <FeatureCard
              icon={<TrendingUp className="w-8 h-8 text-green-500" />}
              title="Hype Tracker"
              description="Track trending pieces and price movements in real-time"
            />
          </div>
        </div>
      </section>
    </main>
  );
}

function FeatureCard({
  icon,
  title,
  description,
}: {
  icon: React.ReactNode;
  title: string;
  description: string;
}) {
  return (
    <Card className="p-6 bg-black/40 border-gray-800 hover:bg-black/60 transition-colors">
      <div className="mb-4">{icon}</div>
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-gray-400">{description}</p>
    </Card>
  );
}

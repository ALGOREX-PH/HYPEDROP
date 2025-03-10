import Image from "next/image"
import { Card } from "@/components/ui/card"
import { Play } from "lucide-react"

const content = [
  {
    id: 1,
    title: "Designer Interview",
    description: "Watch the creative process behind our latest collaboration",
    image: "https://images.unsplash.com/photo-1521898284481-a5ec348cb555?w=800",
    type: "video"
  },
  {
    id: 2,
    title: "Crafted in Tokyo",
    description: "See how our limited editions come to life",
    image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=800",
    type: "photo"
  }
]

export function BehindScenes() {
  return (
    <section className="py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold mb-12">Behind The Scenes</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {content.map((item) => (
            <Card
              key={item.id}
              className="group relative overflow-hidden bg-black/40 border-gray-800 hover:border-violet-500/50"
            >
              <div className="aspect-video relative overflow-hidden">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />
                {item.type === "video" && (
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-16 h-16 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center">
                      <Play className="w-8 h-8 text-white" />
                    </div>
                  </div>
                )}
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                <p className="text-gray-400">{item.description}</p>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
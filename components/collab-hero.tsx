"use client"

import { useEffect, useState } from "react"
import { Button } from "@/components/ui/button"

interface TimeLeft {
  days: string
  hours: string
  minutes: string
  seconds: string
}

export function CollabHero() {
  const [timeLeft, setTimeLeft] = useState<TimeLeft>({
    days: "00",
    hours: "12",
    minutes: "45",
    seconds: "23"
  })

  useEffect(() => {
    const timer = setInterval(() => {
      const now = new Date()
      const target = new Date(now.getFullYear(), now.getMonth(), now.getDate() + 2)
      const diff = target.getTime() - now.getTime()

      const days = Math.floor(diff / (1000 * 60 * 60 * 24)).toString().padStart(2, "0")
      const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)).toString().padStart(2, "0")
      const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60)).toString().padStart(2, "0")
      const seconds = Math.floor((diff % (1000 * 60)) / 1000).toString().padStart(2, "0")

      setTimeLeft({ days, hours, minutes, seconds })
    }, 1000)

    return () => clearInterval(timer)
  }, [])

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
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
        <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/50 to-black"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-4 space-y-8">
        <h1 className="text-4xl md:text-6xl font-bold">NEXT DROP IN</h1>
        
        <div className="flex justify-center items-center gap-4 text-5xl md:text-7xl font-bold font-mono">
          <div className="bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 bg-clip-text text-transparent">
            {timeLeft.hours}:{timeLeft.minutes}:{timeLeft.seconds}
          </div>
        </div>

        <div className="flex flex-col items-center gap-4">
          <Button 
            size="lg"
            className="bg-white text-black hover:bg-white/90 text-lg px-8"
          >
            Join the VIP Drop
          </Button>
          <span className="text-sm text-gray-400">© Exclusive to HYPEDROP</span>
        </div>
      </div>
    </section>
  )
}
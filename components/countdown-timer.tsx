"use client"

import { useEffect, useState } from "react"
import { Button } from "@/components/ui/button"
import { Clock } from "lucide-react"

interface TimeLeft {
  days: number
  hours: number
  minutes: number
  seconds: number
}

export function CountdownTimer() {
  const [timeLeft, setTimeLeft] = useState<TimeLeft>({
    days: 2,
    hours: 14,
    minutes: 36,
    seconds: 12
  })

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(current => {
        if (current.seconds > 0) {
          return { ...current, seconds: current.seconds - 1 }
        }
        if (current.minutes > 0) {
          return { ...current, minutes: current.minutes - 1, seconds: 59 }
        }
        if (current.hours > 0) {
          return { ...current, hours: current.hours - 1, minutes: 59, seconds: 59 }
        }
        if (current.days > 0) {
          return { ...current, days: current.days - 1, hours: 23, minutes: 59, seconds: 59 }
        }
        return current
      })
    }, 1000)

    return () => clearInterval(timer)
  }, [])

  return (
    <div className="text-center py-12 bg-black/40 backdrop-blur border-t border-b border-white/10">
      <h3 className="text-2xl font-bold mb-8">NEXT DROP GOES LIVE IN</h3>
      <div className="flex justify-center gap-4 mb-8">
        <TimeBlock value={timeLeft.days} label="DAYS" />
        <TimeBlock value={timeLeft.hours} label="HOURS" />
        <TimeBlock value={timeLeft.minutes} label="MINUTES" />
        <TimeBlock value={timeLeft.seconds} label="SECONDS" />
      </div>
      <Button variant="outline" className="gap-2">
        <Clock className="w-4 h-4" />
        Set Reminder
      </Button>
    </div>
  )
}

function TimeBlock({ value, label }: { value: number; label: string }) {
  return (
    <div className="bg-black/60 p-4 rounded-lg min-w-[100px]">
      <div className="text-4xl font-bold mb-1">{value.toString().padStart(2, '0')}</div>
      <div className="text-sm text-gray-400">{label}</div>
    </div>
  )
}
"use client"

import { useState, useEffect } from "react"

interface CountdownTimerProps {
  targetDate: string
}

export function CountdownTimer({ targetDate }: CountdownTimerProps) {
  const [timeLeft, setTimeLeft] = useState({
    days: 90,
    hours: 24,
    minutes: 0,
    seconds: 0,
  })

  useEffect(() => {
    const target = new Date(targetDate).getTime()

    const interval = setInterval(() => {
      const now = new Date().getTime()
      const difference = target - now

      if (difference <= 0) {
        clearInterval(interval)
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 })
        return
      }

      const days = Math.floor(difference / (1000 * 60 * 60 * 24))
      const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
      const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60))
      const seconds = Math.floor((difference % (1000 * 60)) / 1000)

      setTimeLeft({ days, hours, minutes, seconds })
    }, 1000)

    return () => clearInterval(interval)
  }, [targetDate])

  return (
    <div className="flex gap-4 text-center">
      <div className="flex flex-col">
        <div className="text-3xl font-bold tabular-nums text-orange-500">{timeLeft.days}</div>
        <div className="text-xs uppercase text-muted-foreground">Days</div>
      </div>
      <div className="flex flex-col">
        <div className="text-3xl font-bold tabular-nums text-orange-500">{timeLeft.hours}</div>
        <div className="text-xs uppercase text-muted-foreground">Hours</div>
      </div>
      <div className="flex flex-col">
        <div className="text-3xl font-bold tabular-nums text-orange-500">{timeLeft.minutes}</div>
        <div className="text-xs uppercase text-muted-foreground">Minutes</div>
      </div>
      <div className="flex flex-col">
        <div className="text-3xl font-bold tabular-nums text-orange-500">{timeLeft.seconds}</div>
        <div className="text-xs uppercase text-muted-foreground">Seconds</div>
      </div>
    </div>
  )
}

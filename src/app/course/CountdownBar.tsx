"use client"

import { useEffect, useState } from "react"

const CountdownBar = () => {
  const [timeLeft, setTimeLeft] = useState<{
    days: number
    hours: number
    minutes: number
    seconds: number
  } | null>(null)

  useEffect(() => {
    const calculateTimeLeft = () => {
      const targetDate = new Date("March 25, 2025 00:00:00").getTime()
      const now = new Date().getTime()
      const difference = targetDate - now

      if (difference <= 0) {
        return { days: 0, hours: 0, minutes: 0, seconds: 0 }
      }

      return {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor(
          (difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60),
        ),
        minutes: Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60)),
        seconds: Math.floor((difference % (1000 * 60)) / 1000),
      }
    }

    setTimeLeft(calculateTimeLeft())

    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft())
    }, 1000)

    return () => clearInterval(timer)
  }, [])

  if (!timeLeft) return null // Prevent hydration mismatch

  return (
    <div className="fixed left-0 right-0 top-0 z-50 flex flex-col items-center justify-center bg-rose-600 px-4 py-2 text-center text-base font-semibold text-white shadow-md sm:flex-row sm:gap-2 sm:text-lg">
      <span className="text-sm sm:text-base">
        🚀 Price increases on launch! Pre-order now:
      </span>
      <span className="font-bold">
        {timeLeft.days}d {timeLeft.hours}h {timeLeft.minutes}m{" "}
        {timeLeft.seconds}s
      </span>
    </div>
  )
}

export default CountdownBar

import { useState, useEffect } from 'react'

export default function Countdown({ targetDate }) {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  })

  useEffect(() => {
    const interval = setInterval(() => {
      const now = new Date().getTime()
      const target = new Date(targetDate).getTime()
      const distance = target - now

      if (distance < 0) {
        clearInterval(interval)
        return
      }

      setTimeLeft({
        days: Math.floor(distance / (1000 * 60 * 60 * 24)),
        hours: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
        minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
        seconds: Math.floor((distance % (1000 * 60)) / 1000)
      })
    }, 1000)

    return () => clearInterval(interval)
  }, [targetDate])

  return (
    <div className="text-center">
      <h3 className="text-2xl mb-6 text-green-400">EVENT STARTS IN</h3>
      <div className="flex justify-center gap-4">
        {Object.entries(timeLeft).map(([unit, value]) => (
          <div key={unit} className="flex flex-col items-center">
            <div className="w-20 h-20 flex items-center justify-center bg-gray-800 rounded-lg border border-green-900/50">
              <span className="text-3xl font-bold text-green-400">{String(value).padStart(2, '0')}</span>
            </div>
            <span className="mt-2 text-gray-400 uppercase text-sm">{unit}</span>
          </div>
        ))}
      </div>
    </div>
  )
}
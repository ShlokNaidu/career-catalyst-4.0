import { useState, useEffect } from 'react'

export default function CountdownTimer() {
  const targetDate = new Date('2026-04-22T00:00:00').getTime()

  const calcTimeLeft = () => {
    const now = Date.now()
    const diff = targetDate - now
    if (diff <= 0) return { days: 0, hrs: 0, min: 0, sec: 0 }
    return {
      days: Math.floor(diff / (1000 * 60 * 60 * 24)),
      hrs: Math.floor((diff / (1000 * 60 * 60)) % 24),
      min: Math.floor((diff / (1000 * 60)) % 60),
      sec: Math.floor((diff / 1000) % 60),
    }
  }

  const [time, setTime] = useState(calcTimeLeft)

  useEffect(() => {
    const id = setInterval(() => setTime(calcTimeLeft), 1000)
    return () => clearInterval(id)
  }, [])

  const units = [
    { label: 'DAYS', value: time.days },
    { label: 'HRS', value: time.hrs },
    { label: 'MIN', value: time.min },
    { label: 'SEC', value: time.sec },
  ]

  return (
    <div className="flex gap-3 md:gap-4 mt-8">
      {units.map((u) => (
        <div
          key={u.label}
          className="flex flex-col items-center justify-center w-[72px] h-[80px] md:w-[84px] md:h-[92px] bg-[#0F0F1A] rounded-sm"
          style={{ border: '1px solid rgba(124, 58, 237, 0.25)' }}
        >
          <span className="font-mono-accent text-2xl md:text-3xl font-bold text-[#F1F5F9] leading-none">
            {String(u.value).padStart(2, '0')}
          </span>
          <span className="font-mono-accent text-[10px] tracking-[0.15em] text-[#94A3B8] mt-1.5">
            {u.label}
          </span>
        </div>
      ))}
    </div>
  )
}

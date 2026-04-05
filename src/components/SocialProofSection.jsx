import { motion, useInView } from 'framer-motion'
import { useRef, useState, useEffect } from 'react'

function AnimatedCounter({ target, suffix = '', duration = 2000 }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true })
  const [count, setCount] = useState(0)

  const isNumber = !isNaN(parseInt(target))

  useEffect(() => {
    if (!inView || !isNumber) return
    const end = parseInt(target)
    const startTime = Date.now()

    const tick = () => {
      const elapsed = Date.now() - startTime
      const progress = Math.min(elapsed / duration, 1)
      const eased = 1 - Math.pow(1 - progress, 3)
      setCount(Math.floor(eased * end))
      if (progress < 1) requestAnimationFrame(tick)
    }

    requestAnimationFrame(tick)
  }, [inView, target, duration, isNumber])

  return (
    <span ref={ref}>
      {isNumber ? count : target}{suffix}
    </span>
  )
}

const stats = [
  { number: '350', suffix: '+', label: 'CC 1.0', sublabel: 'Online' },
  { number: '300', suffix: '+', label: 'CC 2.0', sublabel: 'Offline' },
  { number: 'APR 2025', suffix: '', label: 'CC 4.0', sublabel: 'Coming Soon' },
]

export default function SocialProofSection() {
  return (
    <section className="relative py-24 md:py-32 grid-dot-bg">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: 'easeOut' }}
          className="font-display text-4xl md:text-6xl lg:text-7xl uppercase tracking-[0.06em] leading-[1.05] text-[#F1F5F9] mb-16 text-center"
        >
          Our Legacy
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-8 mb-14">
          {stats.map((s, i) => (
            <motion.div
              key={s.label}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, ease: 'easeOut', delay: i * 0.12 }}
              className="text-center"
            >
              <span className="font-display text-5xl md:text-6xl lg:text-7xl text-[#F1F5F9] block leading-none">
                <AnimatedCounter target={s.number} suffix={s.suffix} />
              </span>
              <span className="font-mono-accent text-xs tracking-[0.15em] text-[#A78BFA] uppercase block mt-3">
                {s.label}
              </span>
              <span className="font-body text-sm text-[#94A3B8] block mt-1">
                {s.sublabel}
              </span>
            </motion.div>
          ))}
        </div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: 'easeOut', delay: 0.3 }}
          className="font-body text-[#94A3B8] text-base italic text-center max-w-2xl mx-auto"
        >
          "Every edition, we raise the bar. This time, will you rise with it?"
        </motion.p>
      </div>
    </section>
  )
}

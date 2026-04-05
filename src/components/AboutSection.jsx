import { motion } from 'framer-motion'

export default function AboutSection() {
  const callouts = [
    { number: '4', label: 'Days of competition' },
    { number: '6', label: 'Placement Stages' },
    { number: '2+', label: 'Editions completed' },
  ]

  return (
    <section className="relative py-24 md:py-32 overflow-hidden skew-divider">
      {/* Large decorative faded "4.0" behind heading */}
      <div
        className="absolute top-8 md:top-0 left-0 md:left-10 font-display text-[12rem] md:text-[20rem] lg:text-[28rem] text-[#7C3AED]/[0.04] leading-none pointer-events-none select-none uppercase tracking-tight"
        aria-hidden="true"
      >
        4.0
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-10">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: 'easeOut' }}
          className="font-display text-4xl md:text-6xl lg:text-7xl uppercase tracking-[0.06em] leading-[1.05] text-[#F1F5F9] mb-14"
        >
          What Is Career Catalyst
        </motion.h2>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 lg:gap-16">
          {/* Left — body copy */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: 'easeOut', delay: 0.1 }}
            className="lg:col-span-3"
          >
            <p className="font-body text-[#94A3B8] text-base md:text-lg leading-[1.7] max-w-2xl">
              Career Catalyst 4.0 is the flagship event of the AWS Cloud Club at Medicaps University, designed to simulate the real placement experience and help students evaluate their actual readiness for campus recruitment. Much like a soldier prepares before entering the battlefield, this event ensures that students understand how placements truly work before they face them in reality.
            </p>
          </motion.div>

          {/* Right — stat callouts */}
          <div className="lg:col-span-2 flex flex-row lg:flex-col gap-8 lg:gap-10">
            {callouts.map((c, i) => (
              <motion.div
                key={c.label}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, ease: 'easeOut', delay: 0.15 + i * 0.1 }}
                className="text-left"
              >
                <span className="font-display text-5xl md:text-6xl text-[#F1F5F9] block leading-none">
                  {c.number}
                </span>
                <span className="font-body text-sm text-[#94A3B8] mt-1 block">
                  {c.label}
                </span>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

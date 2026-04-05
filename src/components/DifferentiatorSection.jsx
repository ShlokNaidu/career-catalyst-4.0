import { motion } from 'framer-motion'

const points = [
  {
    num: '01',
    title: 'Real Placement Simulation',
    desc: 'Not a workshop. A full multi-round competitive process.',
  },
  {
    num: '02',
    title: 'Elimination Format',
    desc: 'Every round has stakes. You either move forward or you don\'t.',
  },
  {
    num: '03',
    title: 'Zero Theory',
    desc: 'No slides, no lectures. Pure performance under pressure.',
  },
  {
    num: '04',
    title: 'Benchmark Yourself',
    desc: 'See exactly where you stand against your peers.',
  },
]

export default function DifferentiatorSection() {
  return (
    <section className="relative py-24 md:py-32 skew-divider">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: 'easeOut' }}
          className="font-display text-4xl md:text-6xl lg:text-7xl uppercase tracking-[0.06em] leading-[1.05] text-[#F1F5F9] mb-16 max-w-4xl"
        >
          What Makes This Different
        </motion.h2>

        <div className="space-y-0">
          {points.map((p, i) => (
            <motion.div
              key={p.num}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, ease: 'easeOut', delay: i * 0.1 }}
              className="flex items-start gap-6 md:gap-10 py-8 md:py-10"
              style={{ borderBottom: '1px solid rgba(124, 58, 237, 0.12)' }}
            >
              <span className="font-mono-accent text-3xl md:text-5xl text-[#A78BFA]/25 leading-none shrink-0 w-16 md:w-24">
                {p.num}
              </span>
              <div>
                <h3 className="font-body font-semibold text-lg md:text-xl text-[#F1F5F9] mb-1.5">
                  {p.title}
                </h3>
                <p className="font-body text-[#94A3B8] text-sm md:text-base leading-relaxed">
                  {p.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

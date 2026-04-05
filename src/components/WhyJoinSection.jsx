import { motion } from 'framer-motion'

const reasons = [
  {
    num: '01',
    title: 'KNOW YOUR REAL LEVEL',
    desc: 'Stop guessing. Compete and find out exactly where you stand.',
  },
  {
    num: '02',
    title: "PRESSURE YOU WON'T GET IN CLASS",
    desc: 'Real interview simulation. Real GD pressure. Real aptitude cutoffs.',
  },
  {
    num: '03',
    title: 'FIND YOUR WEAK SPOTS',
    desc: 'Every round shows you what needs work before placements begin.',
  },
  {
    num: '04',
    title: 'COMPETE WITH YOUR PEERS',
    desc: 'Not against a textbook. Against real people at your level.',
  },
]

export default function WhyJoinSection() {
  return (
    <section className="relative py-24 md:py-32">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: 'easeOut' }}
          className="font-display text-4xl md:text-6xl lg:text-7xl uppercase tracking-[0.06em] leading-[1.05] text-[#F1F5F9] mb-16 max-w-5xl"
        >
          Why You Cannot Skip This
        </motion.h2>

        <div className="space-y-0">
          {reasons.map((r, i) => (
            <motion.div
              key={r.num}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, ease: 'easeOut', delay: i * 0.1 }}
              className="py-10 md:py-12"
              style={{ borderBottom: '1px solid rgba(124, 58, 237, 0.12)' }}
            >
              <span className="font-display text-5xl md:text-7xl text-[#A78BFA]/25 block leading-none mb-4">
                {r.num}
              </span>
              <h3 className="font-body font-semibold text-lg md:text-xl text-[#F1F5F9] tracking-wide mb-2">
                {r.title}
              </h3>
              <p className="font-body text-[#94A3B8] text-sm md:text-base leading-relaxed max-w-xl">
                {r.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

import { motion } from 'framer-motion'

const rounds = [
  { num: '01', name: 'APTITUDE', desc: 'Tests logical reasoning, quantitative ability, and problem-solving speed.' },
  { num: '02', name: 'TECHNICAL', desc: 'Core subjects (OOPs, DBMS, OS, CN). Focus on concepts.' },
  { num: '03', name: 'GROUP DISCUSSION', desc: 'Communication, clarity of thought, and confidence.' },
  { num: '04', name: 'MINI PROJECT', desc: 'Build or solve a problem within a limited time.' },
  { num: '05', name: 'RESUME EVALUATION', desc: 'Honest, practical feedback to highlight strengths and areas of improvement.' },
  { num: '06', name: 'INTERVIEW ROUND', desc: 'Face-to-face with industry experts. Real pressure, real feedback.' },
]

export default function RoundsSection() {
  return (
    <section className="relative py-24 md:py-32">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: 'easeOut' }}
          className="font-display text-4xl md:text-6xl lg:text-7xl uppercase tracking-[0.06em] leading-[1.05] text-[#F1F5F9] mb-3"
        >
          The 6 Stages
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: 'easeOut', delay: 0.1 }}
          className="font-mono-accent text-xs md:text-sm tracking-[0.12em] text-[#94A3B8] uppercase mb-14"
        >
          // Each round is a filter
        </motion.p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-5">
          {rounds.map((r, i) => (
            <motion.div
              key={r.num}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, ease: 'easeOut', delay: i * 0.08 }}
              whileHover={{ scale: 1.02 }}
              className="group relative bg-[#0F0F1A] p-6 md:p-8 rounded-sm transition-colors duration-300 hover:bg-[#13132A] cursor-default"
              style={{ borderLeft: '3px solid rgba(124, 58, 237, 0.3)' }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderLeftColor = '#7C3AED'
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderLeftColor = 'rgba(124, 58, 237, 0.3)'
              }}
            >
              <span className="font-mono-accent text-xs tracking-[0.15em] text-[#7C3AED]/60 block mb-4">
                {r.num} /
              </span>
              <h3 className="font-body font-semibold text-lg md:text-xl text-[#F1F5F9] tracking-wide mb-2">
                {r.name}
              </h3>
              <p className="font-body text-[#94A3B8] text-sm leading-relaxed">
                {r.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

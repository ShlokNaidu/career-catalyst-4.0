import { motion } from 'framer-motion'

const judges = [
  {
    id: '01',
    name: 'Rajesh Verma',
    role: 'Senior Software Engineer',
    org: 'Microsoft',
    detail: '8+ years in system design and technical interviews.',
  },
  {
    id: '02',
    name: 'Priya Sharma',
    role: 'HR Head',
    org: 'Infosys',
    detail: 'Conducted 500+ campus placement drives.',
  },
  {
    id: '03',
    name: 'Ankit Deshmukh',
    role: 'Product Manager',
    org: 'Google',
    detail: 'Ex-SDE, specializes in behavioral and case interviews.',
  },
  {
    id: '04',
    name: 'Sneha Patil',
    role: 'Talent Acquisition Lead',
    org: 'TCS',
    detail: 'Expert in GD moderation and aptitude assessment.',
  },
]

export default function JudgesSection() {
  return (
    <section className="relative py-24 md:py-32 overflow-hidden">
      {/* Large decorative faded text */}
      <div
        className="absolute -top-4 right-0 md:right-10 font-display text-[10rem] md:text-[16rem] lg:text-[22rem] text-[#7C3AED]/[0.03] leading-none pointer-events-none select-none uppercase tracking-tight"
        aria-hidden="true"
      >
        JURY
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-10">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: 'easeOut' }}
          className="font-display text-4xl md:text-6xl lg:text-7xl uppercase tracking-[0.06em] leading-[1.05] text-[#F1F5F9] mb-3"
        >
          The Judges
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: 'easeOut', delay: 0.1 }}
          className="font-mono-accent text-xs md:text-sm tracking-[0.12em] text-[#94A3B8] uppercase mb-16"
        >
          // The ones who decide if you make it
        </motion.p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {judges.map((j, i) => (
            <motion.div
              key={j.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, ease: 'easeOut', delay: i * 0.08 }}
              className="group flex gap-5 bg-[#0F0F1A] p-5 md:p-6 rounded-sm transition-colors duration-300 hover:bg-[#13132A]"
              style={{ borderLeft: '3px solid rgba(124, 58, 237, 0.3)' }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderLeftColor = '#7C3AED'
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderLeftColor = 'rgba(124, 58, 237, 0.3)'
              }}
            >
              {/* Placeholder avatar — rectangular, not circular */}
              {/* TODO: replace with actual judge photo */}
              <div className="shrink-0 w-16 h-20 md:w-20 md:h-24 bg-[#13132A] rounded-sm flex items-end justify-center overflow-hidden"
                style={{ border: '1px solid rgba(124, 58, 237, 0.15)' }}
              >
                <span className="font-mono-accent text-[10px] tracking-widest text-[#A78BFA]/40 pb-2 uppercase">
                  Photo
                </span>
              </div>

              <div className="flex-1 min-w-0">
                <span className="font-mono-accent text-xs tracking-[0.15em] text-[#A78BFA]/40 block mb-2">
                  {j.id} /
                </span>
                <h3 className="font-body font-semibold text-base md:text-lg text-[#F1F5F9] mb-0.5 truncate">
                  {j.name}
                </h3>
                <span className="font-body text-sm text-[#A78BFA] block">
                  {j.role} — {j.org}
                </span>
                <p className="font-body text-xs md:text-sm text-[#94A3B8] mt-2 leading-relaxed">
                  {j.detail}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

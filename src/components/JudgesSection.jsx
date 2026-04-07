import { motion } from 'framer-motion'

const judges = [
  {
    id: '01',
    name: 'To be revealed soon',
    role: 'Senior Industry Expert',
    org: 'Top Tech Firm',
    detail: 'Experienced professional with years of system design and technical interviews.',
  },
  {
    id: '02',
    name: 'To be revealed soon',
    role: 'Talent Acquisition Head',
    org: 'Global Enterprise',
    detail: 'Extensive experience in conducting campus placement drives and evaluations.',
  },
  {
    id: '03',
    name: 'To be revealed soon',
    role: 'Senior Product Manager',
    org: 'Top Tech Giant',
    detail: 'Specializes in behavioral, product sense, and case interviews.',
  },
  {
    id: '04',
    name: 'To be revealed soon',
    role: 'HR & Operations Lead',
    org: 'Leading Firm',
    detail: 'Expert in GD moderation, aptitude assessment, and cultural fit.',
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

        <motion.div
           initial={{ opacity: 0, scale: 0.95 }}
           whileInView={{ opacity: 1, scale: 1 }}
           viewport={{ once: true }}
           transition={{ duration: 0.5, ease: 'easeOut', delay: 0.2 }}
           className="flex flex-col items-center justify-center py-20 px-6 border border-[#7C3AED]/20 bg-[#0F0F1A] rounded-sm relative overflow-hidden"
        >
          <div className="absolute inset-0 bg-gradient-to-br from-[#7C3AED]/5 to-transparent pointer-events-none" />
          
          <h3 className="font-display text-3xl md:text-5xl text-[#F1F5F9] mb-4 tracking-wide uppercase relative z-10 text-center">
            To Be Revealed Soon
          </h3>
          <p className="font-body text-[#94A3B8] max-w-lg mx-auto text-sm md:text-base text-center relative z-10 leading-relaxed">
            We're lining up some of the best minds in the industry to evaluate your skills. Stay tuned as we unveil our esteemed panel of judges.
          </p>
        </motion.div>
      </div>
    </section>
  )
}

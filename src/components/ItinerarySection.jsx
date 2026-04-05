import { motion } from 'framer-motion'

const days = [
  {
    date: 'APR 22',
    dayLabel: 'DAY 1',
    title: 'Aptitude Round',
    desc: 'Speed and logic under time pressure.',
  },
  {
    date: 'APR 23',
    dayLabel: 'DAY 2',
    title: 'Technical Round',
    desc: 'Core concepts. No code. No shortcuts.',
  },
  {
    date: 'APR 24',
    dayLabel: 'DAY 3',
    title: 'GD Round + Mini Project',
    desc: 'Communicate and build. Both on the same day.',
  },
  {
    date: 'APR 25',
    dayLabel: 'DAY 4',
    title: 'Interview Round',
    desc: 'Face-to-face. The final filter.',
  },
]

export default function ItinerarySection() {
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
          Schedule
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: 'easeOut', delay: 0.1 }}
          className="font-body text-[#94A3B8] text-base md:text-lg mb-16 italic"
        >
          4 days to prove yourself
        </motion.p>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical line */}
          <div
            className="absolute left-[19px] md:left-[23px] top-0 bottom-0 w-px"
            style={{ background: 'rgba(124, 58, 237, 0.25)' }}
          />

          <div className="space-y-10 md:space-y-14">
            {days.map((d, i) => (
              <motion.div
                key={d.dayLabel}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, ease: 'easeOut', delay: i * 0.1 }}
                className="relative flex items-start gap-6 md:gap-10 pl-2"
              >
                {/* Dot */}
                <div className="relative shrink-0 mt-1.5">
                  <div
                    className="w-[10px] h-[10px] md:w-[12px] md:h-[12px] rounded-full bg-[#7C3AED] timeline-dot-pulse"
                    style={{ animationDelay: `${i * 0.3}s` }}
                  />
                </div>

                {/* Content */}
                <div className="flex-1 flex flex-col md:flex-row md:items-start gap-3 md:gap-10">
                  {/* Date stamp */}
                  <div className="shrink-0 md:w-28">
                    <span className="font-mono-accent text-xs tracking-[0.15em] text-[#A78BFA] uppercase block">
                      {d.dayLabel}
                    </span>
                    <span className="font-mono-accent text-xs tracking-[0.12em] text-[#94A3B8] uppercase block mt-0.5">
                      {d.date}
                    </span>
                  </div>

                  {/* Card */}
                  <div
                    className="flex-1 bg-[#0F0F1A] p-5 md:p-6 rounded-sm"
                    style={{ borderLeft: '3px solid rgba(124, 58, 237, 0.3)' }}
                  >
                    <h3 className="font-body font-semibold text-base md:text-lg text-[#F1F5F9] mb-1">
                      {d.title}
                    </h3>
                    <p className="font-body text-sm text-[#94A3B8] leading-relaxed">
                      {d.desc}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

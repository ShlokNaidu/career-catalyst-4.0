import { motion } from 'framer-motion'
import CountdownTimer from './CountdownTimer'

export default function HeroSection({ registrationOpen, registrationLink }) {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background overlay — placeholder for event photo */}
      {/* TODO: replace with actual event photo */}
      <div className="absolute inset-0 bg-[#07070F]" />

      {/* Animated glow orbs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div
          className="glow-orb-1 absolute -top-40 -left-40 w-[600px] h-[600px] rounded-full opacity-20"
          style={{ background: 'radial-gradient(circle, #7C3AED 0%, transparent 70%)' }}
        />
        <div
          className="glow-orb-2 absolute top-1/3 right-0 w-[500px] h-[500px] rounded-full opacity-15"
          style={{ background: 'radial-gradient(circle, #3B82F6 0%, transparent 70%)' }}
        />
        <div
          className="glow-orb-3 absolute -bottom-20 left-1/3 w-[400px] h-[400px] rounded-full opacity-10"
          style={{ background: 'radial-gradient(circle, #7C3AED 0%, transparent 70%)' }}
        />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-10 pt-28 pb-20 w-full">
        <motion.span
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          className="font-mono-accent text-sm md:text-base tracking-[0.12em] text-[#A78BFA] block mb-6"
        >
          // CAREER CATALYST 4.0
        </motion.span>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: 'easeOut', delay: 0.1 }}
          className="font-display uppercase leading-[0.95] tracking-[0.05em]"
        >
          <span className="block text-[clamp(3.5rem,12vw,10rem)] text-[#F1F5F9]">
            CAREER CATALYST
          </span>
          <span className="block text-[clamp(4rem,14vw,12rem)] text-[#F1F5F9] font-light -mt-2 md:-mt-4">
            4.0
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: 'easeOut', delay: 0.25 }}
          className="font-body text-[#94A3B8] text-base md:text-lg max-w-xl mt-6 leading-relaxed"
        >
          Not another seminar. This is a real placement simulation.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: 'easeOut', delay: 0.35 }}
          className="font-mono-accent text-xs md:text-sm tracking-[0.15em] text-[#94A3B8] mt-5 uppercase"
        >
          4 Days · 5 Rounds · Apr 22–25
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: 'easeOut', delay: 0.45 }}
          className="mt-8"
        >
          {registrationOpen ? (
            <a
              href={registrationLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block font-body font-semibold text-sm md:text-base tracking-wide px-10 py-3.5 bg-[#7C3AED] text-white rounded-sm transition-all duration-300 hover:shadow-[0_0_30px_rgba(124,58,237,0.45)]"
            >
              REGISTER NOW
            </a>
          ) : (
            <button
              disabled
              className="inline-block font-body font-semibold text-sm md:text-base tracking-wide px-10 py-3.5 bg-[#7C3AED]/40 text-[#94A3B8] rounded-sm cursor-not-allowed"
            >
              REGISTRATIONS OPENING SOON
            </button>
          )}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: 'easeOut', delay: 0.55 }}
        >
          <CountdownTimer />
        </motion.div>
      </div>
    </section>
  )
}

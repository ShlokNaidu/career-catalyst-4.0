import { motion } from 'framer-motion'

export default function Navbar({ registrationOpen, registrationLink }) {
  return (
    <motion.nav
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className="fixed top-0 left-0 right-0 z-[100] bg-[#07070F]/90 backdrop-blur-md"
      style={{ borderBottom: '1px solid rgba(124, 58, 237, 0.2)' }}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-10 flex items-center justify-between h-16">
        <span className="font-mono-accent text-sm tracking-[0.15em] uppercase text-[#F1F5F9]">
          Career Catalyst
        </span>

        {registrationOpen ? (
          <a
            href={registrationLink}
            target="_blank"
            rel="noopener noreferrer"
            className="font-body font-semibold text-sm tracking-wide px-6 py-2.5 bg-[#7C3AED] text-white rounded-sm transition-all duration-300 hover:shadow-[0_0_20px_rgba(124,58,237,0.4)]"
          >
            REGISTER NOW
          </a>
        ) : (
          <button
            disabled
            className="font-body font-semibold text-sm tracking-wide px-6 py-2.5 bg-[#7C3AED]/40 text-[#94A3B8] rounded-sm cursor-not-allowed"
          >
            REGISTRATIONS OPENING SOON
          </button>
        )}
      </div>
    </motion.nav>
  )
}

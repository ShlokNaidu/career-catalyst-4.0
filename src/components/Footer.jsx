import { motion } from 'framer-motion'

export default function Footer({ instagramHandle }) {
  return (
    <footer
      className="relative py-8 md:py-10"
      style={{ borderTop: '1px solid rgba(124, 58, 237, 0.2)' }}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-10 flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
        >
          <span className="font-mono-accent text-xs tracking-[0.15em] uppercase text-[#F1F5F9] block">
            Career Catalyst 4.0
          </span>
          <span className="font-mono-accent text-xs tracking-[0.12em] text-[#94A3B8] block mt-1">
            APR 22–25
          </span>
        </motion.div>

        <motion.a
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: 'easeOut', delay: 0.1 }}
          href={`https://instagram.com/${instagramHandle.replace('@', '')}`}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2.5 text-[#94A3B8] hover:text-[#A78BFA] transition-colors duration-300 group"
        >
          {/* Instagram icon */}
          <svg
            className="w-5 h-5"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
          >
            <rect x="2" y="2" width="20" height="20" rx="5" />
            <circle cx="12" cy="12" r="5" />
            <circle cx="17.5" cy="6.5" r="1.5" fill="currentColor" stroke="none" />
          </svg>
          <span className="font-mono-accent text-xs tracking-[0.12em] uppercase">
            {instagramHandle}
          </span>
        </motion.a>
      </div>
    </footer>
  )
}

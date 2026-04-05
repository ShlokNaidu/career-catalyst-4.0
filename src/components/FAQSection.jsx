import { motion, AnimatePresence } from 'framer-motion'
import { useState } from 'react'

const faqs = [
  {
    q: 'Who can participate?',
    a: 'Any college student preparing for placements can participate. There are no restrictions on branch or year — if you want to test yourself, you’re eligible.',
  },
  {
    q: 'Is there a registration fee?',
    a: <>Yes, the registration fee is <strong className="text-[#F1F5F9] font-semibold">₹49 only</strong>.</>,
  },
  {
    q: 'Do I need coding skills?',
    a: 'Yes, basic coding skills are required. While the technical round focuses on core subjects like OOPs, DBMS, OS, and Computer Networks, the mini project round involves building a solution within a limited time. You don’t need advanced competitive programming skills, but you should be comfortable with fundamentals and implementation.',
  },
  {
    q: 'What happens if I get eliminated?',
    a: 'Even if you get eliminated, you will receive feedback on your performance. The goal is to help you identify your weak areas so you can improve before actual placement drives.',
  },
  {
    q: 'Is this online or offline?',
    a: 'Career Catalyst 4.0 is a completely offline event. Participants are required to be physically present on campus for all four days.',
  },
  {
    q: 'Can I participate in a team?',
    a: 'No, Career Catalyst 4.0 is strictly an individual participation event. All rounds are designed to evaluate your personal skills, performance, and decision-making.',
  },
  {
    q: 'What do winners get?',
    a: 'Winners will receive recognition, certificates, and the experience of successfully completing a full placement simulation. Specific rewards and prizes will be announced closer to the event.',
  },
]

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState(null)

  const toggle = (i) => {
    setOpenIndex(openIndex === i ? null : i)
  }

  return (
    <section className="relative py-24 md:py-32">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 lg:gap-20">
          {/* Left — heading */}
          <div className="lg:col-span-2">
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, ease: 'easeOut' }}
              className="font-display text-4xl md:text-6xl lg:text-7xl uppercase tracking-[0.06em] leading-[1.05] text-[#F1F5F9] mb-3 lg:sticky lg:top-28"
            >
              FAQ
            </motion.h2>
          </div>

          {/* Right — accordion */}
          <div className="lg:col-span-3">
            {faqs.map((faq, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, ease: 'easeOut', delay: i * 0.05 }}
                style={{ borderBottom: '1px solid rgba(124, 58, 237, 0.12)' }}
              >
                <button
                  onClick={() => toggle(i)}
                  className="w-full flex items-start justify-between gap-4 py-6 md:py-7 text-left cursor-pointer group"
                >
                  <span className="font-body font-medium text-base md:text-lg text-[#F1F5F9] group-hover:text-[#A78BFA] transition-colors duration-200 leading-snug">
                    {faq.q}
                  </span>
                  <span
                    className="shrink-0 mt-1 font-mono-accent text-lg text-[#94A3B8] transition-transform duration-300"
                    style={{ transform: openIndex === i ? 'rotate(45deg)' : 'rotate(0deg)' }}
                  >
                    +
                  </span>
                </button>

                <AnimatePresence initial={false}>
                  {openIndex === i && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: 'easeOut' }}
                      className="overflow-hidden"
                    >
                      <p className="font-body text-sm md:text-base text-[#94A3B8] leading-[1.7] pb-6 pr-8">
                        {faq.a}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

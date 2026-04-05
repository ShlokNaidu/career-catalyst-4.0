import { motion } from 'framer-motion'
import { useState } from 'react'

const galleryItems = [
  { id: 1, label: 'CC 2.0 · OFFLINE', span: '' },
  { id: 2, label: 'CC 1.0 · ONLINE', span: 'row-span-2' },
  { id: 3, label: 'CC 2.0 · OFFLINE', span: '' },
  { id: 4, label: 'CC 2.0 · OFFLINE', span: 'row-span-2' },
  { id: 5, label: 'CC 1.0 · ONLINE', span: '' },
  { id: 6, label: 'CC 2.0 · OFFLINE', span: '' },
  { id: 7, label: 'CC 1.0 · ONLINE', span: '' },
  { id: 8, label: 'CC 2.0 · OFFLINE', span: '' },
]

export default function GallerySection() {
  const [lightbox, setLightbox] = useState(null)

  return (
    <section className="relative py-24 md:py-32 skew-divider">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: 'easeOut' }}
          className="font-display text-4xl md:text-6xl lg:text-7xl uppercase tracking-[0.06em] leading-[1.05] text-[#F1F5F9] mb-14"
        >
          The Energy Was Real
        </motion.h2>

        {/* Masonry grid */}
        <div className="columns-1 sm:columns-2 lg:columns-3 gap-4 space-y-4">
          {galleryItems.map((item, i) => {
            const heights = ['h-48', 'h-64', 'h-56', 'h-72', 'h-52', 'h-60', 'h-44', 'h-68']
            return (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, ease: 'easeOut', delay: i * 0.06 }}
                className={`group relative ${heights[i % heights.length]} bg-[#0F0F1A] rounded-sm overflow-hidden cursor-pointer break-inside-avoid`}
                onClick={() => setLightbox(item)}
              >
                {/* TODO: replace with actual event photo */}
                <div className="absolute inset-0 bg-[rgba(124,58,237,0.15)] group-hover:bg-transparent transition-colors duration-300" />

                {/* Hover label */}
                <div className="absolute bottom-0 left-0 right-0 p-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <span className="font-mono-accent text-xs tracking-[0.12em] text-[#A78BFA] uppercase">
                    {item.label}
                  </span>
                </div>
              </motion.div>
            )
          })}
        </div>
      </div>

      {/* Lightbox */}
      {lightbox && (
        <div
          className="lightbox-overlay"
          onClick={() => setLightbox(null)}
        >
          <div className="relative max-w-4xl w-full mx-6 aspect-video bg-[#0F0F1A] rounded-sm flex items-center justify-center">
            {/* TODO: replace with actual event photo */}
            <span className="font-mono-accent text-sm text-[#94A3B8] tracking-widest uppercase">
              {lightbox.label}
            </span>
          </div>
        </div>
      )}
    </section>
  )
}

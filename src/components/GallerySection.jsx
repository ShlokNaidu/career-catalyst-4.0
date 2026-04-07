import { motion } from 'framer-motion'
import { useState } from 'react'

import img1 from '../assets/DSC02006.webp'
import img2 from '../assets/DSC02036.webp'
import img3 from '../assets/DSC02058.webp'
import img4 from '../assets/DSC02083.webp'
import img5 from '../assets/DSC02128.webp'
import img7 from '../assets/DSC_7232.webp'
import img8 from '../assets/DSC_7303.webp'
import img9 from '../assets/IMG_2673.webp'
import img10 from '../assets/IMG_2891.webp'
import img11 from '../assets/IMG_2949.webp'

const galleryItems = [
  { id: 1, label: 'CC · Event Moment', src: img1 },
  { id: 2, label: 'CC · Event Moment', src: img3 },
  { id: 3, label: 'CC · Event Moment', src: img4 },
  { id: 4, label: 'CC · Event Moment', src: img5 },
  { id: 5, label: 'CC · Event Moment', src: img7 },
  { id: 6, label: 'CC · Event Moment', src: img8 },
  { id: 7, label: 'CC · Event Moment', src: img9 },
  { id: 8, label: 'CC · Event Moment', src: img2 },
  { id: 9, label: 'CC · Event Moment', src: img10 },
  { id: 10, label: 'CC · Event Moment', src: img11 },
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
        <div className="columns-1 sm:columns-2 lg:columns-3 gap-4">
          {galleryItems.map((item, i) => {
            return (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, ease: 'easeOut', delay: (i % 3) * 0.1 }}
                className="group relative w-full mb-4 bg-[#0F0F1A] rounded-sm overflow-hidden cursor-pointer inline-block"
                onClick={() => setLightbox(item)}
              >
                <img 
                  src={item.src} 
                  alt={item.label}
                  loading="lazy"
                  decoding="async" 
                  className="w-full h-auto block transform group-hover:scale-105 transition-transform duration-700 ease-out" 
                />
                <div className="absolute inset-0 bg-[#7C3AED]/20 group-hover:bg-transparent transition-colors duration-300 mix-blend-overlay" />

                {/* Hover label */}
                <div className="absolute bottom-0 left-0 right-0 p-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-gradient-to-t from-black/80 to-transparent">
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
          className="lightbox-overlay z-[10000]"
          onClick={() => setLightbox(null)}
        >
          <div className="relative max-w-5xl w-full mx-6 flex flex-col items-center justify-center pointer-events-none">
            <img 
              src={lightbox.src} 
              alt={lightbox.label}
              loading="lazy"
              decoding="async" 
              className="max-h-[85vh] w-auto object-contain rounded-sm shadow-2xl pointer-events-auto" 
            />
            <span className="font-mono-accent text-sm text-[#A78BFA] tracking-widest uppercase mt-4 block">
              {lightbox.label}
            </span>
          </div>
        </div>
      )}
    </section>
  )
}

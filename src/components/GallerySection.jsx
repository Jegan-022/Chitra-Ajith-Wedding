import { useEffect, useRef, useState } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { FaTimes, FaChevronLeft, FaChevronRight } from 'react-icons/fa'

gsap.registerPlugin(ScrollTrigger)

const images = [
  { src: '/WhatsApp Image 2026-03-14 at 5.39.21 PM.jpeg', alt: 'Couple photo 1' },
  { src: '/WhatsApp Image 2026-03-14 at 5.39.23 PM.jpeg', alt: 'Couple photo 2' },
  { src: '/WhatsApp Image 2026-03-14 at 5.39.27 PM.jpeg', alt: 'Couple photo 3' },
  { src: '/WhatsApp Image 2026-03-14 at 5.39.31 PM.jpeg', alt: 'Couple photo 4' },
  { src: '/WhatsApp Image 2026-03-14 at 5.39.43 PM.jpeg', alt: 'Couple photo 5' },
  { src: '/WhatsApp Image 2026-03-14 at 5.40.27 PM.jpeg', alt: 'Couple photo 6' },
  { src: '/WhatsApp Image 2026-03-14 at 5.40.28 PM.jpeg', alt: 'Couple photo 7' },
  { src: '/WhatsApp Image 2026-03-14 at 5.40.29 PM.jpeg', alt: 'Couple photo 8' },
  { src: '/Gemini_Generated_Image_xs1qomxs1qomxs1q.png', alt: 'Couple photo 9' },
]

// Masonry column assignments
const cols = [
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
]

export default function GallerySection() {
  const sectionRef = useRef(null)
  const [lightbox, setLightbox] = useState(null)
  const photoRefs = useRef([])

  useEffect(() => {
    photoRefs.current.forEach((el, i) => {
      if (!el) return
      gsap.fromTo(el,
        { opacity: 0, scale: 0.85, y: 30 },
        {
          opacity: 1, scale: 1, y: 0, duration: 0.8, ease: 'power3.out',
          scrollTrigger: { trigger: el, start: 'top 88%' },
          delay: (i % 3) * 0.15,
        }
      )
    })
  }, [])

  useEffect(() => {
    const handler = (e) => {
      if (lightbox === null) return
      if (e.key === 'ArrowRight') setLightbox(l => (l + 1) % images.length)
      if (e.key === 'ArrowLeft') setLightbox(l => (l - 1 + images.length) % images.length)
      if (e.key === 'Escape') setLightbox(null)
    }
    window.addEventListener('keydown', handler)
    return () => window.removeEventListener('keydown', handler)
  }, [lightbox])

  return (
    <section id="gallery" ref={sectionRef} className="py-24 px-4" style={{ background: 'rgba(255,248,240,0.5)' }}>
      <div className="absolute left-8 opacity-10 text-6xl float-anim-2 select-none">🌸</div>

      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-14">
          <p className="section-subtitle mb-2">Captured Moments</p>
          <h2 className="section-title text-gray-800">Photo Gallery</h2>
          <div className="divider-gold mt-4" />
        </div>

        {/* Masonry Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {cols.map((colImages, colIdx) => (
            <div key={colIdx} className="flex flex-col gap-4">
              {colImages.map((imgIdx) => (
                <div
                  key={imgIdx}
                  ref={el => photoRefs.current[imgIdx] = el}
                  className="relative overflow-hidden rounded-2xl cursor-pointer group"
                  style={{ boxShadow: '0 4px 20px rgba(0,0,0,0.08)' }}
                  onClick={() => setLightbox(imgIdx)}
                >
                  <img
                    src={images[imgIdx].src}
                    alt={images[imgIdx].alt}
                    className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-110"
                    style={{ minHeight: '150px' }}
                    loading="lazy"
                  />
                  {/* Hover overlay */}
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-all duration-400 flex items-center justify-center">
                    <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-white text-3xl">
                      🔍
                    </div>
                  </div>
                  {/* Gold corner accent */}
                  <div className="absolute top-0 right-0 w-8 h-8 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    style={{ background: 'linear-gradient(225deg, rgba(201,168,76,0.8), transparent)' }}
                  />
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      {lightbox !== null && (
        <div className="lightbox-overlay" onClick={() => setLightbox(null)}>
          <button
            className="absolute left-4 md:left-8 text-white/70 hover:text-white transition-colors z-10"
            onClick={e => { e.stopPropagation(); setLightbox(l => (l - 1 + images.length) % images.length) }}
          >
            <FaChevronLeft size={32} />
          </button>
          <img
            src={images[lightbox].src}
            alt={images[lightbox].alt}
            className="max-w-[90vw] max-h-[85vh] object-contain rounded-2xl"
            style={{ boxShadow: '0 0 80px rgba(201,168,76,0.3)' }}
            onClick={e => e.stopPropagation()}
          />
          <button
            className="absolute right-4 md:right-8 text-white/70 hover:text-white transition-colors z-10"
            onClick={e => { e.stopPropagation(); setLightbox(l => (l + 1) % images.length) }}
          >
            <FaChevronRight size={32} />
          </button>
          <button
            className="absolute top-6 right-6 text-white/70 hover:text-white transition-colors z-10"
            onClick={() => setLightbox(null)}
          >
            <FaTimes size={24} />
          </button>
          {/* Counter */}
          <div className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white/50 text-sm tracking-widest">
            {lightbox + 1} / {images.length}
          </div>
        </div>
      )}
    </section>
  )
}

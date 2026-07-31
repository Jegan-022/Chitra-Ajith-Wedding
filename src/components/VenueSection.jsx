import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { imagesConfig } from '../config/images'

gsap.registerPlugin(ScrollTrigger)

export default function VenueSection() {
  const sectionRef = useRef(null)
  const cardRef = useRef(null)

  useEffect(() => {
    gsap.fromTo(cardRef.current,
      { opacity: 0, y: 50 },
      { opacity: 1, y: 0, duration: 1, ease: 'power3.out',
        scrollTrigger: { trigger: cardRef.current, start: 'top 80%' }
      }
    )
  }, [])

  return (
    <section id="venue" className="py-24 px-4 relative overflow-hidden"
      style={{ background: 'linear-gradient(180deg, rgba(255,240,243,0.55), rgba(255,248,240,0.5))' }}
    >
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <div className="text-center mb-14">
          <p className="section-subtitle mb-2">Find Us Here</p>
          <h2 className="section-title text-gray-800">Wedding Venue</h2>
          <div className="divider-gold mt-4" />
        </div>

        <div ref={cardRef} className="glass-card overflow-hidden" style={{ boxShadow: '0 20px 60px rgba(0,0,0,0.1)' }}>
          {/* Venue photo */}
          <div className="relative h-64 md:h-80 overflow-hidden">
            <img
              src={imagesConfig.venue}
              alt="Wedding Venue"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0" style={{ background: 'linear-gradient(to top, rgba(0,0,0,0.6), transparent 60%)' }} />
            <div className="absolute bottom-6 left-6 right-6">
              <h3 className="font-serif text-2xl md:text-3xl text-white font-bold mb-1">
                Kalyana Mandapam
              </h3>
              <p className="text-white/70 font-elegant italic text-sm">
                📍 Sri Jaga Shankara Mahal 
              </p>
            </div>
          </div>

          {/* Details + Map */}
          <div className="p-6 md:p-8 grid md:grid-cols-2 gap-8">
            {/* Info */}
            <div>
              <h4 className="font-serif text-xl font-bold text-gray-800 mb-4">Venue Details</h4>
              <div className="space-y-4">
                {[
                  { icon: '📅', label: 'Date', val: 'August 23, 2026' },
                  { icon: '⏰', label: 'Time', val: '9:00 AM Onwards' },
                  { icon: '📍', label: 'Address', val: 'Sri Jaga Sankara Mahal, Thiru nagar, Sivagiripatti, Palani, Tamil Nadu' },
                  { icon: '🚗', label: 'Parking', val: 'Available at venue' },
                  { icon: '📞', label: 'Contact', val: '+91 8508504169,\n+91 6382104870' },
                ].map(item => (
                  <div key={item.label} className="flex items-start gap-3">
                    <span className="text-xl flex-shrink-0">{item.icon}</span>
                    <div>
                      <span className="text-[10px] sm:text-xs uppercase tracking-widest text-yellow-600 block">{item.label}</span>
                      <span className="font-elegant text-gray-700 text-sm sm:text-base whitespace-pre-line break-words leading-relaxed">{item.val}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Embedded Map */}
            <div className="rounded-2xl overflow-hidden w-full" style={{ minHeight: '250px' }}>
              <iframe
                title="Wedding Venue Map"
                src="https://www.google.com/maps?q=10.446876,77.535813&output=embed"
                width="100%"
                height="100%"
                style={{ border: 'none', minHeight: '250px' }}
                allowFullScreen
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

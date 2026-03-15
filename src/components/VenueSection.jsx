import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

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
              src="/WhatsApp Image 2026-03-14 at 5.40.29 PM.jpeg"
              alt="Wedding Venue"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0" style={{ background: 'linear-gradient(to top, rgba(0,0,0,0.6), transparent 60%)' }} />
            <div className="absolute bottom-6 left-6 right-6">
              <h3 className="font-serif text-2xl md:text-3xl text-white font-bold mb-1">
                Kalyana Mandapam
              </h3>
              <p className="text-white/70 font-elegant italic text-sm">
                📍 Anna Salai, Chennai, Tamil Nadu 600002
              </p>
            </div>
          </div>

          {/* Details + Map */}
          <div className="p-6 md:p-8 grid md:grid-cols-2 gap-8">
            {/* Info */}
            <div>
              <h4 className="font-serif text-xl font-bold text-gray-800 mb-4">Venue Details</h4>
              <div className="space-y-3">
                {[
                  { icon: '📅', label: 'Date', val: 'June 15, 2026' },
                  { icon: '⏰', label: 'Time', val: '9:00 AM Onwards' },
                  { icon: '📍', label: 'Address', val: 'Kalyana Mandapam, Anna Salai, Chennai' },
                  { icon: '🚗', label: 'Parking', val: 'Available at venue' },
                  { icon: '📞', label: 'Contact', val: '+91 98765 43210' },
                ].map(item => (
                  <div key={item.label} className="flex items-start gap-3">
                    <span className="text-xl flex-shrink-0">{item.icon}</span>
                    <div>
                      <span className="text-xs uppercase tracking-widest text-yellow-600 block">{item.label}</span>
                      <span className="font-elegant text-gray-700">{item.val}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Embedded Map */}
            <div className="rounded-2xl overflow-hidden" style={{ minHeight: '250px' }}>
              <iframe
                title="Wedding Venue Map"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3886.6484!2d80.2707!3d13.0827!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a5265ea4f7d3361%3A0x6e61a70b6863d433!2sChennai%2C%20Tamil%20Nadu!5e0!3m2!1sen!2sin!4v1234567890"
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

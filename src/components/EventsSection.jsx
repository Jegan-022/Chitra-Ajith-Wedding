import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const events = [
  {
    icon: '🌿',
    title: 'Mehendi Function',
    date: 'August 20, 2026',
    time: '10:00 AM',
    venue: 'Srimathi\'s Residence',
    color: 'from-green-50 to-emerald-100',
    accent: '#10b981',
  },
  {
    icon: '🎉',
    title: 'Family Unite Fun Day',
    date: 'August 21, 2026',
    time: '4:00 PM',
    venue: 'Srimathi\'s Residence',
    color: 'from-yellow-50 to-amber-100',
    accent: '#f59e0b',
  },
  {
    icon: '💍',
    title: 'Wedding Ceremony',
    date: 'August 23, 2026',
    time: '9:00 AM',
    venue: 'Kalyana Mandapam, Chennai',
    color: 'from-rose-50 to-pink-100',
    accent: '#f43f5e',
  },
  {
    icon: '🥂',
    title: 'Grand Reception',
    date: 'August 22, 2026',
    time: '7:00 PM',
    venue: 'Elite Grand Hotel, Chennai',
    color: 'from-purple-50 to-lavender-100',
    accent: '#8b5cf6',
  },
]

export default function EventsSection() {
  const cardRefs = useRef([])

  useEffect(() => {
    cardRefs.current.forEach((card, i) => {
      gsap.fromTo(card,
        { opacity: 0, y: 50 },
        {
          opacity: 1, y: 0, duration: 0.9, ease: 'power3.out',
          scrollTrigger: { trigger: card, start: 'top 85%' },
          delay: i * 0.15,
        }
      )
    })
  }, [])

  return (
    <section id="events" className="py-24 px-4 relative overflow-hidden"
      style={{ background: 'linear-gradient(135deg, rgba(255,248,240,0.55), rgba(248,240,255,0.5), rgba(255,240,243,0.55))' }}
    >
      {/* Decorative elements */}
      <div className="absolute top-8 left-8 text-5xl opacity-10 float-anim-1 select-none">🎊</div>
      <div className="absolute bottom-8 right-8 text-5xl opacity-10 float-anim-2 select-none">🎉</div>

      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-14">
          <p className="section-subtitle mb-2">Mark Your Calendar</p>
          <h2 className="section-title text-gray-800">Wedding Events</h2>
          <div className="divider-gold mt-4" />
        </div>

        {/* Event cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {events.map((ev, i) => (
            <div
              key={ev.title}
              ref={el => cardRefs.current[i] = el}
              className={`group rounded-3xl p-6 bg-gradient-to-br ${ev.color} transition-all duration-500 hover:-translate-y-4 cursor-default`}
              style={{
                border: '1px solid rgba(201,168,76,0.15)',
                boxShadow: '0 4px 20px rgba(0,0,0,0.06)',
              }}
            >
              {/* Hover glow overlay */}
              <div
                className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                style={{ boxShadow: `0 0 40px ${ev.accent}22` }}
              />

              {/* Icon */}
              <div className="text-5xl mb-5 text-center group-hover:scale-110 transition-transform duration-400">
                {ev.icon}
              </div>

              {/* Title */}
              <h3 className="font-serif text-xl font-bold text-center text-gray-800 mb-4">
                {ev.title}
              </h3>

              {/* Divider */}
              <div className="w-10 h-0.5 mx-auto mb-4" style={{ background: ev.accent }} />

              {/* Details */}
              <div className="space-y-2 text-center">
                <p className="font-sans text-sm font-medium text-gray-700">📅 {ev.date}</p>
                <p className="font-sans text-sm text-gray-600">⏰ {ev.time}</p>
                <p className="font-elegant italic text-sm text-gray-600 mt-2">📍 {ev.venue}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

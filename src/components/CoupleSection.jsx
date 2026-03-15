import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const couple = [
  {
    role: 'Bride',
    name: 'Srimathi',
    img: '/WhatsApp Image 2026-03-14 at 5.39.23 PM.jpeg',
    quote: '"She is clothed in strength and dignity; she laughs without fear of the future."',
    color: 'from-pink-100 to-rose-100',
    glow: 'rgba(255,182,193,0.6)',
  },
  {
    role: 'Groom',
    name: 'Ajith Kumar',
    img: '/WhatsApp Image 2026-03-14 at 5.39.21 PM.jpeg',
    quote: '"He is her sun and she is his universe; together they are one beautiful world."',
    color: 'from-amber-50 to-yellow-100',
    glow: 'rgba(201,168,76,0.4)',
  },
]

export default function CoupleSection() {
  const sectionRef = useRef(null)
  const cardsRef = useRef([])

  useEffect(() => {
    cardsRef.current.forEach((card, i) => {
      gsap.fromTo(card,
        { opacity: 0, y: 60, scale: 0.9 },
        {
          opacity: 1, y: 0, scale: 1, duration: 1, ease: 'power3.out',
          scrollTrigger: {
            trigger: card,
            start: 'top 80%',
          },
          delay: i * 0.2,
        }
      )
    })
  }, [])

  return (
    <section id="couple" className="py-24 px-4 relative overflow-hidden" style={{ background: 'linear-gradient(135deg, rgba(255,248,240,0.55), rgba(255,240,243,0.5), rgba(248,240,255,0.55))' }}>
      {/* Floating decor */}
      <div className="absolute top-10 left-10 text-5xl opacity-10 float-anim-1 select-none">💐</div>
      <div className="absolute bottom-10 right-10 text-5xl opacity-10 float-anim-2 select-none">💐</div>

      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="section-subtitle mb-2">The Couple</p>
          <h2 className="section-title font-serif text-gray-800">
            Two Hearts, One Destiny
          </h2>
          <div className="divider-gold mt-4" />
        </div>

        {/* Cards */}
        <div className="grid md:grid-cols-2 gap-10">
          {couple.map((person, i) => (
            <div
              key={person.role}
              ref={el => cardsRef.current[i] = el}
              className={`relative rounded-3xl overflow-hidden bg-gradient-to-br ${person.color} p-8 group cursor-pointer transition-all duration-500 hover:-translate-y-3`}
              style={{
                boxShadow: `0 10px 40px rgba(0,0,0,0.08)`,
                border: '1px solid rgba(201,168,76,0.2)',
              }}
            >
              {/* Glow on hover */}
              <div
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-3xl pointer-events-none"
                style={{ boxShadow: `inset 0 0 60px ${person.glow}`, border: `1px solid ${person.glow}` }}
              />

              {/* Role tag */}
              <div className="text-center mb-6">
                <span className="inline-block px-4 py-1 rounded-full text-xs tracking-widest uppercase font-sans border border-yellow-400/40 text-yellow-700 bg-white/50">
                  {person.role}
                </span>
              </div>

              {/* Circular photo */}
              <div className="relative mx-auto mb-6" style={{ width: 200, height: 200 }}>
                {/* Decorative rings */}
                <div className="absolute inset-0 rounded-full border-2 border-yellow-400/30 scale-110 animate-ping opacity-30" />
                <div className="absolute inset-0 rounded-full border border-yellow-300/40 scale-105" />
                <img
                  src={person.img}
                  alt={person.name}
                  className="w-full h-full object-cover rounded-full transition-transform duration-500 group-hover:scale-105"
                  style={{
                    boxShadow: `0 8px 30px ${person.glow}`,
                    border: '3px solid rgba(201,168,76,0.5)',
                  }}
                />
              </div>

              {/* Name */}
              <h3 className="font-serif text-3xl md:text-4xl text-center font-bold mb-3 text-gray-800">
                {person.name}
              </h3>

              {/* Divider */}
              <div className="divider-gold mb-4" />

              {/* Quote */}
              <p className="font-elegant italic text-center text-gray-600 text-base leading-relaxed">
                {person.quote}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

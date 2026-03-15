import { useEffect, useRef, useState } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const steps = [
  {
    id: 1,
    label: 'First Meeting',
    icon: '💫',
    date: 'January 2022',
    img: '/WhatsApp Image 2026-03-14 at 5.39.31 PM.jpeg',
    desc: 'A chance encounter turned into a magical moment that neither of them could forget. Their eyes met and the world stood still — the beginning of a beautiful journey.',
  },
  {
    id: 2,
    label: 'Smooth Bike Rides',
    icon: '🏍️',
    date: 'March 2022',
    img: '/WhatsApp Image 2026-03-14 at 5.39.43 PM.jpeg',
    desc: 'A day fully spent together with fun and created lot more new memories.',
  },
  {
    id: 3,
    label: 'Poo vaikum Ceremony',
    icon: '💍',
    date: 'December 2024',
    img: '/WhatsApp Image 2026-03-14 at 5.40.27 PM.jpeg',
    desc: 'Under a sky full of stars, he got down on one knee and asked the most beautiful question. She said yes, and their hearts became one forever.',
  },
  {
    id: 4,
    label: 'Wedding',
    icon: '👰',
    date: 'June 2026',
    img: '/WhatsApp Image 2026-03-14 at 5.40.28 PM.jpeg',
    desc: 'The culmination of a love story written in the stars — two families united, two hearts joined as one in a celebration of eternal love and commitment.',
  },
]

export default function LoveStorySection() {
  const sectionRef = useRef(null)
  const [active, setActive] = useState(null)
  const itemRefs = useRef([])
  const lineRef = useRef(null)

  useEffect(() => {
    gsap.fromTo(lineRef.current,
      { scaleY: 0 },
      {
        scaleY: 1, duration: 1.5, ease: 'power2.out',
        scrollTrigger: { trigger: sectionRef.current, start: 'top 70%' }
      }
    )
    itemRefs.current.forEach((el, i) => {
      gsap.fromTo(el,
        { opacity: 0, x: i % 2 === 0 ? -50 : 50 },
        {
          opacity: 1, x: 0, duration: 1, ease: 'power3.out',
          scrollTrigger: { trigger: el, start: 'top 80%' },
          delay: i * 0.1,
        }
      )
    })
  }, [])

  return (
    <section
      id="our-story"
      ref={sectionRef}
      className="py-24 px-4 relative overflow-hidden"
      style={{ background: 'linear-gradient(180deg, rgba(255,240,243,0.55) 0%, rgba(255,248,240,0.5) 50%, rgba(240,240,255,0.55) 100%)' }}
    >
      <div className="absolute top-0 left-0 right-0 h-px" style={{ background: 'linear-gradient(90deg, transparent, var(--gold), transparent)' }} />

      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="section-subtitle mb-2">Our Journey</p>
          <h2 className="section-title text-gray-800">Our Love Story</h2>
          <div className="divider-gold mt-4" />
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Center line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 top-0 bottom-0 w-0.5 origin-top" ref={lineRef}
            style={{ background: 'linear-gradient(180deg, transparent, var(--gold), transparent)' }}
          />

          {steps.map((step, i) => (
            <div
              key={step.id}
              ref={el => itemRefs.current[i] = el}
              className={`relative flex items-center mb-16 ${i % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}
            >
              {/* Content card */}
              <div className={`w-5/12 ${i % 2 === 0 ? 'pr-8 text-right' : 'pl-8 text-left'}`}>
                <div
                  className="glass-card p-6 cursor-pointer transition-all duration-400 hover:-translate-y-2"
                  style={{ boxShadow: active === step.id ? '0 10px 40px rgba(201,168,76,0.3)' : '0 4px 20px rgba(0,0,0,0.06)' }}
                  onClick={() => setActive(active === step.id ? null : step.id)}
                >
                  <span className="text-2xl mb-2 block">{step.icon}</span>
                  <h3 className="font-serif text-xl font-bold text-gray-800 mb-1">{step.label}</h3>
                  <p className="text-xs tracking-widest uppercase text-yellow-600 mb-3">{step.date}</p>

                  {/* Expandable content */}
                  <div
                    className="overflow-hidden transition-all duration-500"
                    style={{ maxHeight: active === step.id ? '300px' : '0px' }}
                  >
                    <img
                      src={step.img}
                      alt={step.label}
                      className="w-full h-36 object-cover rounded-xl mb-3"
                    />
                    <p className="font-elegant text-gray-600 text-sm leading-relaxed italic">
                      {step.desc}
                    </p>
                  </div>

                  <p className="text-xs text-yellow-600 mt-2">
                    {active === step.id ? '▲ Close' : '▼ Read More'}
                  </p>
                </div>
              </div>

              {/* Center node */}
              <div className="absolute left-1/2 transform -translate-x-1/2 z-10">
                <div
                  className="w-12 h-12 rounded-full flex items-center justify-center text-xl"
                  style={{
                    background: 'linear-gradient(135deg, #f5ddbb, #c9a84c)',
                    boxShadow: '0 0 20px rgba(201,168,76,0.6), 0 0 40px rgba(201,168,76,0.2)',
                    border: '3px solid white',
                  }}
                >
                  {step.icon}
                </div>
              </div>

              {/* Empty opposite side */}
              <div className="w-5/12" />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

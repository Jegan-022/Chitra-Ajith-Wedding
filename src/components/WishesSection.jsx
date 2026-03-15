import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { FaQuoteLeft } from 'react-icons/fa'

gsap.registerPlugin(ScrollTrigger)

const wishes = [
  { name: 'Priya & Rahul', wish: 'Wishing you both a lifetime of happiness, laughter, and endless love. May every day be as beautiful as your wedding day!', emoji: '💑' },
  { name: 'Ananya', wish: 'Two souls, one heart. Congratulations Srimathi & Ajith! May your love story be the most beautiful one ever told. 💕', emoji: '🌸' },
  { name: 'Karthik & Family', wish: 'May your home be filled with warmth, laughter, and love. So happy to witness the beginning of your forever!', emoji: '🏡' },
  { name: 'Meena Aunty', wish: 'Your love is a blessing to all who witness it. Wishing you eternal happiness and togetherness. God bless you both! 🙏', emoji: '🌺' },
  { name: 'Ravi & Divya', wish: 'Today you become each other\'s greatest adventure. Here\'s to a lifetime of beautiful discoveries together!', emoji: '✈️' },
  { name: 'College Friends', wish: 'From college corridors to wedding halls — what a journey! You two are the best love story we know. Cheers! 🥂', emoji: '🎓' },
]

export default function WishesSection() {
  const cardRefs = useRef([])

  useEffect(() => {
    cardRefs.current.forEach((card, i) => {
      if (!card) return
      gsap.fromTo(card,
        { opacity: 0, y: 40, scale: 0.95 },
        {
          opacity: 1, y: 0, scale: 1, duration: 0.9, ease: 'power3.out',
          scrollTrigger: { trigger: card, start: 'top 85%' },
          delay: (i % 3) * 0.15,
        }
      )
    })
  }, [])

  return (
    <section id="wishes" className="py-24 px-4 relative overflow-hidden"
      style={{ background: 'linear-gradient(180deg, rgba(255,248,240,0.5), rgba(255,240,243,0.5))' }}
    >
      {/* Decorative */}
      <div className="absolute top-6 left-6 text-5xl opacity-10 float-anim-2 select-none">💌</div>
      <div className="absolute bottom-6 right-6 text-5xl opacity-10 float-anim-1 select-none">💝</div>

      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-14">
          <p className="section-subtitle mb-2">With Love</p>
          <h2 className="section-title text-gray-800">Guest Wishes</h2>
          <div className="divider-gold mt-4" />
        </div>

        {/* Wishes grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {wishes.map((w, i) => (
            <div
              key={i}
              ref={el => cardRefs.current[i] = el}
              className="glass-card p-6 hover:-translate-y-2 transition-all duration-400 cursor-default"
              style={{
                background: 'rgba(255,255,255,0.6)',
                boxShadow: '0 4px 24px rgba(201,168,76,0.08)',
              }}
            >
              {/* Quote icon */}
              <FaQuoteLeft className="mb-3" style={{ color: 'var(--gold)', opacity: 0.5 }} size={20} />

              {/* Wish text */}
              <p className="font-elegant italic text-gray-600 text-base leading-relaxed mb-5">
                {w.wish}
              </p>

              {/* Author */}
              <div className="flex items-center gap-3">
                <div
                  className="w-10 h-10 rounded-full flex items-center justify-center text-xl flex-shrink-0"
                  style={{ background: 'linear-gradient(135deg, #ffecd2, #fcb69f)' }}
                >
                  {w.emoji}
                </div>
                <div>
                  <p className="font-sans font-semibold text-sm text-gray-800">{w.name}</p>
                  <div className="flex gap-0.5 mt-0.5">
                    {[...Array(5)].map((_, j) => (
                      <span key={j} className="text-yellow-400 text-xs">★</span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

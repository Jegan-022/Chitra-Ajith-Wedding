import { useEffect, useRef, useState } from 'react'
import gsap from 'gsap'
import { FaChevronDown, FaHeart } from 'react-icons/fa'

const WEDDING_DATE = new Date('2026-08-23T09:00:00')

function useCountdown(target) {
  const [timeLeft, setTimeLeft] = useState({})

  useEffect(() => {
    const calc = () => {
      const now = new Date()
      const diff = target - now
      if (diff <= 0) return setTimeLeft({ d: 0, h: 0, m: 0, s: 0 })
      setTimeLeft({
        d: Math.floor(diff / 86400000),
        h: Math.floor((diff % 86400000) / 3600000),
        m: Math.floor((diff % 3600000) / 60000),
        s: Math.floor((diff % 60000) / 1000),
      })
    }
    calc()
    const id = setInterval(calc, 1000)
    return () => clearInterval(id)
  }, [target])

  return timeLeft
}

export default function HeroSection() {
  const heroRef = useRef(null)
  const leftRef = useRef(null)
  const rightRef = useRef(null)
  const countdownRef = useRef(null)
  const ctaRef = useRef(null)
  const time = useCountdown(WEDDING_DATE)

  useEffect(() => {
    const tl = gsap.timeline({ delay: 0.2 })

    // Left text slides in from left
    tl.fromTo(leftRef.current.children,
      { opacity: 0, x: -50 },
      { opacity: 1, x: 0, duration: 1.1, stagger: 0.18, ease: 'power3.out' }
    )
    // Couple photo slides in from right
    .fromTo(rightRef.current,
      { opacity: 0, x: 80, scale: 0.92 },
      { opacity: 1, x: 0, scale: 1, duration: 1.3, ease: 'power3.out' },
      '-=0.8'
    )
    .fromTo(countdownRef.current,
      { opacity: 0, y: 20 },
      { opacity: 1, y: 0, duration: 0.8, ease: 'back.out(1.5)' },
      '-=0.5'
    )
    .fromTo(ctaRef.current,
      { opacity: 0, y: 20 },
      { opacity: 1, y: 0, duration: 0.7, ease: 'power2.out' },
      '-=0.3'
    )
  }, [])

  const scrollToStory = () => {
    document.getElementById('our-story')?.scrollIntoView({ behavior: 'smooth' })
  }

  const pad = (n) => String(n ?? 0).padStart(2, '0')

  return (
    <section
      id="home"
      ref={heroRef}
      className="relative min-h-screen flex items-center overflow-hidden"
      style={{
        background: 'linear-gradient(135deg, #1a0a20 0%, #2d1040 40%, #0a0510 100%)',
      }}
    >
      {/* Gold radial glow */}
      <div className="absolute inset-0 pointer-events-none" style={{
        background: 'radial-gradient(ellipse 60% 80% at 30% 50%, rgba(201,168,76,0.10) 0%, transparent 70%)'
      }} />

      {/* Floating floral decor */}
      <div className="absolute top-8 left-8 opacity-20 float-anim-1 text-5xl select-none">🌸</div>
      <div className="absolute bottom-24 left-4 opacity-15 float-anim-3 text-4xl select-none">🌺</div>
      <div className="absolute top-12 right-[52%] opacity-10 float-anim-2 text-4xl select-none">✨</div>

      {/* Split layout */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 md:px-12 flex flex-col md:flex-row items-center gap-10 md:gap-0 py-20 md:py-0 min-h-screen">

        {/* LEFT — Text */}
        <div ref={leftRef} className="flex-1 flex flex-col items-start gap-4 md:pr-10">

          <p className="font-elegant italic text-white/60 text-sm md:text-base tracking-widest" style={{ opacity: 0 }}>
            ✦ Together With Their Families ✦
          </p>

          <h1 className="font-serif font-bold leading-none" style={{ fontSize: 'clamp(3rem, 7vw, 6.5rem)', opacity: 0 }}>
            <span className="gold-text">Srimathi</span>
          </h1>

          <div className="flex items-center gap-4 w-full" style={{ opacity: 0 }}>
            <div className="divider-gold flex-1" style={{ maxWidth: '80px' }} />
            <FaHeart className="text-pink-400 animate-pulse flex-shrink-0" size={18} />
            <div className="divider-gold flex-1" style={{ maxWidth: '80px' }} />
          </div>

          <h1 className="font-serif font-bold leading-none" style={{ fontSize: 'clamp(2.4rem, 5.5vw, 5.5rem)', opacity: 0 }}>
            <span className="gold-text">Ajith Kumar</span>
          </h1>

          <p className="font-elegant italic text-white/70 text-base md:text-lg leading-relaxed max-w-md" style={{ opacity: 0 }}>
            "We Invite You To Celebrate Our Wedding"
          </p>

          <div style={{ opacity: 0 }}>
            <p className="font-script text-2xl md:text-3xl" style={{ color: '#f5ddbb' }}>23rd August 2026</p>
            <p className="font-elegant text-white/50 tracking-[0.25em] uppercase text-xs md:text-sm mt-1">
              Chennai, Tamil Nadu, India
            </p>
          </div>

          {/* Countdown */}
          <div ref={countdownRef} className="glass-card inline-flex gap-5 md:gap-8 px-6 md:px-10 py-4 mt-2" style={{ opacity: 0 }}>
            {[
              { label: 'Days', val: time.d },
              { label: 'Hours', val: time.h },
              { label: 'Mins', val: time.m },
              { label: 'Secs', val: time.s },
            ].map(({ label, val }) => (
              <div key={label} className="text-center">
                <div className="font-serif text-2xl md:text-3xl font-bold gold-text">{pad(val)}</div>
                <div className="text-white/50 text-xs tracking-widest uppercase mt-0.5">{label}</div>
              </div>
            ))}
          </div>

          {/* CTA */}
          <div ref={ctaRef} className="mt-2" style={{ opacity: 0 }}>
            <button onClick={scrollToStory} className="btn-gold glow-gold">
              ✦ View Our Story ✦
            </button>
          </div>
        </div>

        {/* RIGHT — Couple photo */}
        <div
          ref={rightRef}
          className="flex-1 flex items-center justify-center relative"
          style={{ opacity: 0 }}
        >
          <div className="absolute inset-0 rounded-3xl pointer-events-none" style={{
            background: 'radial-gradient(ellipse at center, rgba(201,168,76,0.25) 0%, transparent 70%)',
          }} />

          <div className="relative">
            {/* Animated ring borders */}
            <div className="absolute -inset-3 rounded-3xl border border-yellow-500/20 animate-pulse" />
            <div className="absolute -inset-6 rounded-3xl border border-yellow-400/10" />

            {/* Photo */}
            <div
              className="relative overflow-hidden bg-white"
              style={{
                borderRadius: '2rem',
                maxWidth: '480px',
                width: '100%',
                boxShadow: '0 0 60px rgba(201,168,76,0.3), 0 0 120px rgba(201,168,76,0.1), 0 30px 80px rgba(0,0,0,0.5)',
                border: '2px solid rgba(201,168,76,0.35)',
              }}
            >
              <img
                src="/Gemini_Generated_Image_xs1qomxs1qomxs1q.png"
                alt="Srimathi and Ajith Kumar"
                className="w-full h-full object-cover object-top"
                style={{ 
                  minHeight: '450px', 
                  maxHeight: '600px',
                  mixBlendMode: 'multiply', // Blends the white background seamlessly
                  filter: 'contrast(1.05) saturate(1.1)' 
                }}
              />
              {/* Bottom gradient on photo */}
              <div className="absolute bottom-0 left-0 right-0 h-24 pointer-events-none" style={{
                background: 'linear-gradient(to top, rgba(26,10,32,0.6), transparent)'
              }} />
              {/* Gold corner accents */}
              <div className="absolute top-3 left-3 w-6 h-6 border-t-2 border-l-2 border-yellow-400/60 rounded-tl-lg" />
              <div className="absolute top-3 right-3 w-6 h-6 border-t-2 border-r-2 border-yellow-400/60 rounded-tr-lg" />
              <div className="absolute bottom-3 left-3 w-6 h-6 border-b-2 border-l-2 border-yellow-400/60 rounded-bl-lg" />
              <div className="absolute bottom-3 right-3 w-6 h-6 border-b-2 border-r-2 border-yellow-400/60 rounded-br-lg" />
            </div>

            {/* Floating label */}
            <div className="absolute -bottom-5 left-1/2 -translate-x-1/2 whitespace-nowrap">
              <div className="glass-card px-5 py-2 flex items-center gap-2"
                style={{ background: 'rgba(26,10,32,0.8)', borderColor: 'rgba(201,168,76,0.4)' }}
              >
                <FaHeart className="text-pink-400 animate-pulse" size={12} />
                <span className="font-elegant italic text-xs md:text-sm" style={{ color: '#f5ddbb' }}>
                  Forever &amp; Always
                </span>
                <FaHeart className="text-pink-400 animate-pulse" size={12} />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white/40 animate-bounce flex flex-col items-center gap-1 z-10">
        <span className="text-xs tracking-widest uppercase font-sans">Scroll</span>
        <FaChevronDown size={14} />
      </div>
    </section>
  )
}

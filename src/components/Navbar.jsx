import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { FaHeart } from 'react-icons/fa'

const navLinks = ['Home', 'Our Story', 'Gallery', 'Events', 'RSVP']

export default function Navbar() {
  const navRef = useRef(null)

  useEffect(() => {
    gsap.fromTo(navRef.current,
      { y: -80, opacity: 0 },
      { y: 0, opacity: 1, duration: 1, delay: 0.3, ease: 'power3.out' }
    )

    // Scroll effect
    const handleScroll = () => {
      if (window.scrollY > 50) {
        navRef.current.classList.add('scrolled-nav')
      } else {
        navRef.current.classList.remove('scrolled-nav')
      }
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollTo = (id) => {
    const el = document.getElementById(id.toLowerCase().replace(' ', '-').replace("'s", ''))
    if (el) el.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <>
      <style>{`
        .scrolled-nav {
          background: rgba(255,248,240,0.9) !important;
          backdrop-filter: blur(20px) !important;
          box-shadow: 0 4px 30px rgba(201,168,76,0.15) !important;
        }
      `}</style>
      <nav
        ref={navRef}
        className="fixed top-0 left-0 right-0 z-50 transition-all duration-500 py-4 px-6 md:px-12"
        style={{ background: 'transparent' }}
      >
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <FaHeart className="text-pink-400 animate-pulse" size={18} />
            <span className="font-script text-2xl md:text-3xl gold-text">S & AK</span>
          </div>

          {/* Nav Links - desktop */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <button
                key={link}
                onClick={() => scrollTo(link)}
                className="font-sans text-sm tracking-widest uppercase text-gray-600 hover:text-yellow-600 transition-colors duration-300 relative group"
              >
                {link}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 group-hover:w-full transition-all duration-300" style={{ background: 'var(--gold)' }} />
              </button>
            ))}
          </div>

          {/* CTA */}
          <button
            onClick={() => scrollTo('RSVP')}
            className="btn-gold text-xs md:text-sm hidden md:block"
          >
            RSVP Now
          </button>

          {/* Mobile hamburger icon */}
          <div className="md:hidden text-yellow-700">
            <FaHeart size={22} className="animate-pulse" />
          </div>
        </div>
      </nav>
    </>
  )
}

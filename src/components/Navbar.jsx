import { useEffect, useRef, useState } from 'react'
import gsap from 'gsap'
import { FaHeart, FaBars, FaTimes } from 'react-icons/fa'

const navLinks = ['Home', 'Events']

export default function Navbar() {
  const navRef = useRef(null)
  const [isOpen, setIsOpen] = useState(false)

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
    setIsOpen(false)
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

          {/* Mobile hamburger icon */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-yellow-700 hover:text-yellow-900 transition-colors duration-300 p-2 z-50 relative"
            aria-label="Toggle menu"
          >
            {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
          </button>
        </div>

        {/* Mobile Dropdown Menu */}
        <div
          className={`fixed inset-0 bg-white/95 backdrop-blur-xl z-40 md:hidden flex flex-col items-center justify-center gap-8 transition-all duration-500 ${
            isOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none translate-y-[-10px]'
          }`}
          style={{ height: '100vh', width: '100vw', top: 0, left: 0 }}
        >
          <div className="flex items-center gap-2 mb-4">
            <FaHeart className="text-pink-400 animate-pulse" size={24} />
            <span className="font-script text-4xl gold-text">Ajith & Srimathi</span>
          </div>

          {navLinks.map((link) => (
            <button
              key={link}
              onClick={() => scrollTo(link)}
              className="font-sans text-xl tracking-widest uppercase text-gray-800 hover:text-yellow-600 transition-colors duration-300 py-2"
            >
              {link}
            </button>
          ))}
        </div>
      </nav>
    </>
  )
}

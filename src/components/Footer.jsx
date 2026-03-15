import { FaHeart, FaInstagram, FaFacebook, FaWhatsapp, FaYoutube } from 'react-icons/fa'

export default function Footer() {
  return (
    <footer className="py-16 px-4 relative overflow-hidden"
      style={{ background: 'linear-gradient(135deg, #0a0510, #15071f, #0a0510)' }}
    >
      {/* Gold top border */}
      <div className="absolute top-0 left-0 right-0 h-px" style={{ background: 'linear-gradient(90deg, transparent, var(--gold), transparent)' }} />

      {/* Floral decorations */}
      <div className="absolute top-8 left-8 text-4xl opacity-10 float-anim-1 select-none">🌸</div>
      <div className="absolute top-8 right-8 text-4xl opacity-10 float-anim-2 select-none">🌸</div>
      <div className="absolute bottom-8 left-1/3 text-3xl opacity-10 float-anim-3 select-none">✿</div>

      <div className="max-w-3xl mx-auto text-center relative z-10">
        {/* Monogram */}
        <div className="mb-6">
          <span className="font-script text-5xl gold-text">S & AK</span>
        </div>

        {/* Divider */}
        <div className="divider-gold mb-8" />

        {/* Quote */}
        <p className="font-elegant italic text-white/60 text-xl md:text-2xl mb-8 leading-relaxed">
          "Two souls with but a single thought,<br />
          Two hearts that beat as one."
        </p>

        {/* Date & Location */}
        <p className="font-sans text-xs tracking-[0.3em] uppercase text-yellow-400/60 mb-8">
          June 15, 2026 &nbsp;✦&nbsp; Chennai, Tamil Nadu
        </p>

        {/* Social Icons */}
        <div className="flex items-center justify-center gap-6 mb-10">
          {[
            { Icon: FaInstagram, label: 'Instagram' },
            { Icon: FaFacebook, label: 'Facebook' },
            { Icon: FaWhatsapp, label: 'WhatsApp' },
            { Icon: FaYoutube, label: 'YouTube' },
          ].map(({ Icon, label }) => (
            <a
              key={label}
              href="#"
              aria-label={label}
              className="w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110 hover:-translate-y-1"
              style={{
                background: 'rgba(255,255,255,0.05)',
                border: '1px solid rgba(201,168,76,0.2)',
              }}
              onMouseEnter={e => {
                e.currentTarget.style.background = 'rgba(201,168,76,0.2)'
                e.currentTarget.style.borderColor = 'rgba(201,168,76,0.6)'
                e.currentTarget.style.boxShadow = '0 0 20px rgba(201,168,76,0.3)'
              }}
              onMouseLeave={e => {
                e.currentTarget.style.background = 'rgba(255,255,255,0.05)'
                e.currentTarget.style.borderColor = 'rgba(201,168,76,0.2)'
                e.currentTarget.style.boxShadow = 'none'
              }}
            >
              <Icon style={{ color: 'rgba(245,221,187,0.7)' }} size={16} />
            </a>
          ))}
        </div>

        {/* Divider */}
        <div className="divider-gold mb-6" />

        {/* Copyright */}
        <div className="flex items-center justify-center gap-2 text-white/30 text-xs tracking-widest">
          <FaHeart size={10} className="text-pink-500" />
          <span>Made with love for Srimathi & Ajith Kumar · 2026</span>
          <FaHeart size={10} className="text-pink-500" />
        </div>
      </div>
    </footer>
  )
}

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
          <span className="font-script text-5xl gold-text">AK & Mathi</span>
        </div>

        {/* Divider */}
        <div className="divider-gold mb-8" />

        {/* Quote */}
        <p className="font-elegant italic text-white/60 text-xl md:text-2xl mb-8 leading-relaxed">
          "Two souls. One Promise"</p>
        <p className="font-elegant italic text-white/60 text-xl md:text-2xl mb-8 leading-relaxed">
          "A life time of love ,laughter and countless beautiful Memories."
        </p>

        {/* Date & Location */}
        <p className="font-sans text-xs tracking-[0.3em] uppercase text-yellow-400/60 mb-8">
          August 23rd ,2026 &nbsp;✦&nbsp; Palani, Tamil Nadu
        </p>

        {/* Divider */}
        <div className="divider-gold mb-6" />

        {/* Copyright */}
        <div className="flex flex-col items-center justify-center gap-2 text-white/30 text-[10px] sm:text-xs tracking-widest text-center px-4">
          <div className="flex items-center gap-2">
            <FaHeart size={10} className="text-pink-500 animate-pulse" />
            <span>Made with love for Srimathi & Ajith Kumar · 2026</span>
            <FaHeart size={10} className="text-pink-500 animate-pulse" />
          </div>
          <span>By R.Jegatheeswaran Tech Innovations</span>
        </div>
      </div>
    </footer>
  )
}

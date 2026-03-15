import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

export default function VideoMessageSection() {
  const sectionRef = useRef(null)
  const textRef = useRef(null)

  useEffect(() => {
    // Parallax fade in for the text
    gsap.fromTo(textRef.current.children,
      { opacity: 0, y: 30 },
      {
        opacity: 1, 
        y: 0, 
        duration: 1, 
        stagger: 0.2, 
        ease: 'power3.out',
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 60%',
        }
      }
    )
  }, [])

  return (
    <section 
      id="message" 
      ref={sectionRef} 
      className="relative w-full h-screen min-h-[600px] flex items-center justify-center overflow-hidden"
    >
      {/* Background Video */}
      <video
        src="/Video_Focus_Adjustment_Request.mp4"
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover z-0"
        style={{ filter: 'brightness(0.6)' }} // Darken slightly for text readability
      />

      {/* Glass Overlay for Text Readability */}
      <div className="absolute inset-0 bg-black/30 z-0" />

      {/* Content */}
      <div 
        ref={textRef} 
        className="relative z-10 text-center px-6 max-w-4xl mx-auto flex flex-col items-center gap-6"
      >
        {/* Top Accent */}
        <div className="text-pink-300 text-3xl opacity-80 mb-2">✦</div>

        <h2 className="font-serif text-5xl md:text-7xl font-bold text-white drop-shadow-xl" style={{ opacity: 0 }}>
          Srimathi <span className="text-gold mx-2 text-4xl">&</span> Ajith Kumar
        </h2>
        
        <p className="font-elegant text-white/90 text-lg md:text-2xl italic max-w-2xl leading-relaxed drop-shadow-lg" style={{ opacity: 0 }}>
          "Two ordinary people, writing one extraordinary love story. Thank you for being part of our beautiful beginning."
        </p>

        <div className="divider-gold mt-4 w-32" style={{ opacity: 0 }} />
      </div>
    </section>
  )
}

import { useEffect, useRef, useState } from 'react'
import gsap from 'gsap'

export default function VideoIntro({ onComplete }) {
  const videoRef = useRef(null)
  const overlayRef = useRef(null)
  const textRef = useRef(null)
  const [skipped, setSkipped] = useState(false)
  const [isPlaying, setIsPlaying] = useState(false)

  useEffect(() => {
    const tl = gsap.timeline()
    tl.fromTo(textRef.current,
      { opacity: 0, y: 40 },
      { opacity: 1, y: 0, duration: 1.5, delay: 0.5, ease: 'power3.out' }
    )

    // Fallback timeout: If video takes more than 5 seconds to play, auto-skip to ensure the website loads
    const fallbackTimer = setTimeout(() => {
      if (!isPlaying && !skipped) {
        console.log("Video taking too long, auto-skipping intro")
        handleSkip()
      }
    }, 6000)

    return () => clearTimeout(fallbackTimer)
  }, [isPlaying, skipped])

  useEffect(() => {
    // Attempt to force play in case autoPlay is blocked or slow
    if (videoRef.current) {
      videoRef.current.play().catch(e => console.log("Auto-play prevented or loading:", e))
    }
  }, [])

  const handleEnd = () => {
    if (skipped) return
    gsap.to(overlayRef.current, {
      opacity: 0,
      duration: 1.5,
      ease: 'power2.inOut',
      onComplete: onComplete,
    })
  }

  const handleSkip = () => {
    if (skipped) return
    setSkipped(true)
    gsap.to(overlayRef.current, {
      opacity: 0,
      duration: 1,
      ease: 'power2.inOut',
      onComplete: onComplete,
    })
  }

  return (
    <div
      ref={overlayRef}
      className="fixed inset-0 z-[9999] bg-black flex items-center justify-center overflow-hidden"
    >
      {/* Video */}
      <video
        ref={videoRef}
        src="/Pink_Heart_Tree_Video_Generation.mp4"
        autoPlay
        muted
        playsInline
        preload="auto"
        onPlay={() => setIsPlaying(true)}
        onEnded={handleEnd}
        onError={handleSkip} // Automatically skip if video fails to load
        className="absolute inset-0 w-full h-full object-cover opacity-80"
      />

      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/40" />

      {/* Couple names overlay */}
      <div ref={textRef} className="relative z-10 text-center px-4 w-full max-w-2xl mx-auto">
        <p className="font-script text-2xl sm:text-3xl md:text-4xl mb-4" style={{ color: '#F5DDBB' }}>
          Together Forever
        </p>
        <h1 className="font-serif text-3xl sm:text-5xl md:text-7xl lg:text-8xl font-bold leading-tight drop-shadow-lg flex flex-col sm:flex-row items-center justify-center gap-1 sm:gap-0">
          <span className="gold-text">Ajith Kumar</span>
          <span className="text-white/60 mx-2 md:mx-6 text-xl sm:text-3xl md:text-5xl">&</span>
          <span className="gold-text">Srimathi</span>
        </h1>
        <div className="divider-gold mt-6 mb-4" />
        <p className="font-elegant text-white/70 text-sm sm:text-base md:text-xl tracking-widest uppercase drop-shadow-md">
          Are Getting Married
        </p>

        {/* Loading indicator if not playing yet */}
        {!isPlaying && (
          <div className="flex justify-center mt-8 gap-2">
            <div className="w-3 h-3 rounded-full animate-ping" style={{ background: 'var(--gold)', animationDelay: '0s' }} />
            <div className="w-3 h-3 rounded-full animate-ping" style={{ background: 'var(--gold)', animationDelay: '0.3s' }} />
            <div className="w-3 h-3 rounded-full animate-ping" style={{ background: 'var(--gold)', animationDelay: '0.6s' }} />
          </div>
        )}
      </div>

      {/* Skip button */}
      <button
        onClick={handleSkip}
        className="absolute bottom-6 right-6 sm:bottom-8 sm:right-8 z-20 px-4 py-1.5 sm:px-6 sm:py-2 rounded-full text-xs sm:text-sm tracking-widest uppercase transition-all duration-300 border border-white/30 text-white hover:border-gold hover:bg-gold/10 backdrop-blur-sm"
      >
        Skip Intro →
      </button>
    </div>
  )
}

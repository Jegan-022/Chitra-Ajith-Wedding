import { useEffect, useRef } from 'react'

const WEDDING_BG = 'https://static.vecteezy.com/system/resources/previews/047/274/684/non_2x/beautiful-indoor-wedding-aisle-with-elegant-floral-decorations-in-soft-pastel-colors-creating-a-romantic-and-enchanting-atmosphere-photo.jpg'

export default function AnimatedBackground() {
  const bg1Ref = useRef(null)
  const bg2Ref = useRef(null)

  useEffect(() => {
    let frame
    let start = null
    const DURATION = 20000 // 20s Ken Burns cycle
    const SCALE_MAX = 1.12
    const SCALE_MIN = 1.0

    const animate = (ts) => {
      if (!start) start = ts
      const elapsed = (ts - start) % (DURATION * 2)
      // Smooth ping-pong between 1.0 and 1.12
      const progress = elapsed / (DURATION * 2)
      const t = Math.abs(Math.sin(progress * Math.PI * 2))
      const scale = SCALE_MIN + (SCALE_MAX - SCALE_MIN) * t

      // Pan: slow drift across the image
      const panX = 50 + (Math.sin(progress * Math.PI * 2) * 4)
      const panY = 50 + (Math.cos(progress * Math.PI * 2) * 2)

      if (bg1Ref.current) {
        bg1Ref.current.style.transform = `scale(${scale})`
        bg1Ref.current.style.backgroundPosition = `${panX}% ${panY}%`
      }

      frame = requestAnimationFrame(animate)
    }

    frame = requestAnimationFrame(animate)
    return () => cancelAnimationFrame(frame)
  }, [])

  return (
    <>
      {/* Animated wedding aisle background — fixed, behind everything */}
      <div
        ref={bg1Ref}
        className="fixed inset-0 z-[-2] transition-none"
        style={{
          backgroundImage: `url('${WEDDING_BG}')`,
          backgroundSize: 'cover',
          backgroundPosition: '50% 50%',
          backgroundRepeat: 'no-repeat',
          willChange: 'transform',
          transformOrigin: 'center center',
        }}
      />
      {/* Soft pastel veil overlay — preserves readability */}
      <div
        className="fixed inset-0 z-[-1] pointer-events-none"
        style={{
          background: 'linear-gradient(135deg, rgba(255,248,240,0.82) 0%, rgba(255,240,243,0.78) 50%, rgba(248,240,255,0.80) 100%)',
        }}
      />
    </>
  )
}

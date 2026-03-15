import { useEffect, useRef } from 'react'

const PETAL_COUNT = 20

const randomBetween = (a, b) => a + Math.random() * (b - a)

export default function PetalsAnimation() {
  const containerRef = useRef(null)

  useEffect(() => {
    const petals = []
    const container = containerRef.current
    if (!container) return

    for (let i = 0; i < PETAL_COUNT; i++) {
      spawnPetal(container, petals)
    }

    const interval = setInterval(() => {
      spawnPetal(container, petals)
    }, 600)

    return () => {
      clearInterval(interval)
      petals.forEach(p => p.remove())
    }
  }, [])

  return <div ref={containerRef} className="fixed inset-0 pointer-events-none z-[9998] overflow-hidden" />
}

function spawnPetal(container, petals) {
  const emojis = ['🌸', '🌺', '✿', '🌷', '❀', '🌼']
  const petal = document.createElement('div')
  petal.className = 'petal select-none'
  petal.style.left = `${Math.random() * 100}vw`
  petal.style.top = '-60px'
  petal.style.fontSize = `${randomBetween(10, 22)}px`
  petal.style.opacity = '0'
  petal.innerHTML = emojis[Math.floor(Math.random() * emojis.length)]

  const duration = randomBetween(6, 12)
  const drift = randomBetween(-80, 80)
  const startDelay = randomBetween(0, 3)

  petal.style.transition = `none`
  container.appendChild(petal)
  petals.push(petal)

  // Animate with Web Animations API for performance
  const anim = petal.animate([
    { transform: `translateY(0px) translateX(0px) rotate(0deg)`, opacity: 0 },
    { transform: `translateY(20vh) translateX(${drift * 0.3}px) rotate(120deg)`, opacity: 0.8, offset: 0.1 },
    { transform: `translateY(70vh) translateX(${drift * 0.7}px) rotate(360deg)`, opacity: 0.6, offset: 0.7 },
    { transform: `translateY(110vh) translateX(${drift}px) rotate(720deg)`, opacity: 0 },
  ], {
    duration: duration * 1000,
    delay: startDelay * 1000,
    easing: 'ease-in-out',
    fill: 'forwards',
  })

  anim.onfinish = () => {
    petal.remove()
    const idx = petals.indexOf(petal)
    if (idx > -1) petals.splice(idx, 1)
  }
}

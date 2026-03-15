import { useRef } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay, EffectFade, Pagination, Navigation } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/effect-fade'
import 'swiper/css/pagination'
import 'swiper/css/navigation'

const slides = [
  { src: '/WhatsApp Image 2026-03-14 at 5.39.21 PM.jpeg', caption: 'Beautiful moments we shared' },
  { src: '/WhatsApp Image 2026-03-14 at 5.39.23 PM.jpeg', caption: 'Every smile tells our story' },
  { src: '/WhatsApp Image 2026-03-14 at 5.39.27 PM.jpeg', caption: 'Together is our favourite place' },
  { src: '/WhatsApp Image 2026-03-14 at 5.39.31 PM.jpeg', caption: 'Love is everything we are' },
  { src: '/WhatsApp Image 2026-03-14 at 5.39.43 PM.jpeg', caption: 'Two hearts, one beautiful journey' },
  { src: '/WhatsApp Image 2026-03-14 at 5.40.27 PM.jpeg', caption: 'Forever starts right here' },
  { src: '/WhatsApp Image 2026-03-14 at 5.40.28 PM.jpeg', caption: 'You make every moment magical' },
  { src: '/WhatsApp Image 2026-03-14 at 5.40.29 PM.jpeg', caption: 'Our story, written in love' },
]

export default function MemoriesSlider() {
  return (
    <section id="memories" className="py-24 relative overflow-hidden" style={{ background: '#0a0510' }}>
      {/* Title overlay */}
      <div className="relative z-10 text-center mb-10 px-4">
        <p className="section-subtitle mb-2">Relive The Magic</p>
        <h2 className="section-title" style={{ color: '#f5ddbb' }}>
          Our Memories
        </h2>
        <div className="divider-gold mt-4" />
      </div>

      {/* Swiper */}
      <div className="max-w-5xl mx-auto px-4">
        <Swiper
          modules={[Autoplay, EffectFade, Pagination, Navigation]}
          effect="fade"
          autoplay={{ delay: 3500, disableOnInteraction: false }}
          pagination={{ clickable: true }}
          navigation
          loop
          className="rounded-3xl overflow-hidden"
          style={{ boxShadow: '0 30px 80px rgba(201,168,76,0.25)' }}
        >
          {slides.map((slide, i) => (
            <SwiperSlide key={i}>
              <div className="relative aspect-[16/9]">
                <img
                  src={slide.src}
                  alt={slide.caption}
                  className="w-full h-full object-cover"
                />
                {/* Dark gradient bottom */}
                <div className="absolute inset-0" style={{
                  background: 'linear-gradient(to top, rgba(0,0,0,0.75) 0%, transparent 60%)'
                }} />
                {/* Caption */}
                <div className="absolute bottom-8 left-0 right-0 text-center px-8">
                  <p className="font-script text-2xl md:text-4xl" style={{ color: '#F5DDBB' }}>
                    {slide.caption}
                  </p>
                  <div className="divider-gold mt-3" />
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  )
}

import { useState, useEffect } from 'react'
import LoadingScreen from './components/LoadingScreen'
import VideoIntro from './components/VideoIntro'
import Navbar from './components/Navbar'
import HeroSection from './components/HeroSection'
import CoupleSection from './components/CoupleSection'
import LoveStorySection from './components/LoveStorySection'
import GallerySection from './components/GallerySection'
import EventsSection from './components/EventsSection'
import VenueSection from './components/VenueSection'
import MemoriesSlider from './components/MemoriesSlider'
import RSVPSection from './components/RSVPSection'
import WishesSection from './components/WishesSection'
import Footer from './components/Footer'
import PetalsAnimation from './components/PetalsAnimation'
import MusicToggle from './components/MusicToggle'
import AnimatedBackground from './components/AnimatedBackground'
import VideoMessageSection from './components/VideoMessageSection'

export default function App() {
  const [phase, setPhase] = useState('loading') // loading | intro | main

  useEffect(() => {
    const timer = setTimeout(() => {
      setPhase('intro')
    }, 1800)
    return () => clearTimeout(timer)
  }, [])

  return (
    <>
      {/* Always mount petals after loading */}
      {phase === 'main' && <PetalsAnimation />}

      {/* Phase: Loading */}
      {phase === 'loading' && <LoadingScreen />}

      {/* Phase: Video Intro */}
      {phase === 'intro' && (
        <VideoIntro onComplete={() => setPhase('main')} />
      )}

      {/* Phase: Main Website */}
      {phase === 'main' && (
        <div className="relative">
          {/* Animated Wedding Aisle Background (Ken Burns) */}
          <AnimatedBackground />
          <Navbar />
          <MusicToggle />

          <main>
            <HeroSection />
            <CoupleSection />
            <VideoMessageSection />
            <LoveStorySection />
            <GallerySection />
            <EventsSection />
            <VenueSection />
            <MemoriesSlider />
            <RSVPSection />
            <WishesSection />
          </main>

          <Footer />
        </div>
      )}
    </>
  )
}

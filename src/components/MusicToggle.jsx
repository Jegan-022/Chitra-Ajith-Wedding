import { useState, useRef } from "react"
import { FaMusic, FaVolumeMute } from "react-icons/fa"

export default function MusicToggle() {

  const [playing, setPlaying] = useState(false)
  const audioRef = useRef(null)

  const toggleMusic = () => {

    if (!audioRef.current) {
      audioRef.current = new Audio("/anbil-avan-bgm.mp3")
      audioRef.current.loop = true
      audioRef.current.volume = 0.35
    }

    if (playing) {
      audioRef.current.pause()
    } else {
      audioRef.current.play().catch(() => {})
    }

    setPlaying(!playing)
  }

  return (
    <button
      onClick={toggleMusic}
      className="fixed bottom-6 left-6 z-50 w-12 h-12 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110"
      style={{
        background: "linear-gradient(135deg,#f5ddbb,#c9a84c)",
        boxShadow: playing
          ? "0 0 20px rgba(201,168,76,0.8), 0 0 40px rgba(201,168,76,0.3)"
          : "0 4px 20px rgba(0,0,0,0.2)"
      }}
      title={playing ? "Mute music" : "Play music"}
      aria-label={playing ? "Mute music" : "Play music"}
    >

      {playing
        ? <FaMusic className="text-white animate-pulse" size={18}/>
        : <FaVolumeMute className="text-white" size={18}/>
      }

      {playing && (
        <>
          <span
            className="absolute inset-0 rounded-full animate-ping opacity-30"
            style={{ background: "rgba(201,168,76,0.5)" }}
          />
          <span
            className="absolute inset-0 rounded-full animate-ping opacity-20"
            style={{
              background: "rgba(201,168,76,0.3)",
              animationDelay: "0.5s"
            }}
          />
        </>
      )}

    </button>
  )
}

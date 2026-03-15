import { useEffect, useRef } from 'react'

export default function LoadingScreen() {
  return (
    <div className="fixed inset-0 z-[9999] flex flex-col items-center justify-center"
      style={{ background: 'linear-gradient(135deg, #0a0510, #1a0a20)' }}
    >
      {/* Animated rings */}
      <div className="relative w-24 h-24 mb-6">
        <div className="absolute inset-0 rounded-full border-2 border-yellow-500/30 animate-ping" />
        <div className="absolute inset-2 rounded-full border-2 border-yellow-400/50 animate-ping" style={{ animationDelay: '0.3s' }} />
        <div className="absolute inset-4 rounded-full border-2 border-yellow-300/60 animate-ping" style={{ animationDelay: '0.6s' }} />
        <div className="absolute inset-6 rounded-full flex items-center justify-center text-2xl">
          💍
        </div>
      </div>

      <p className="font-script text-4xl gold-text mb-2">Srimathi & Ajith Kumar</p>
      <p className="text-white/40 text-xs tracking-[0.3em] uppercase font-sans">Loading your invite...</p>

      {/* Progress bar */}
      <div className="mt-6 w-48 h-0.5 bg-white/10 rounded-full overflow-hidden">
        <div
          className="h-full rounded-full"
          style={{
            background: 'linear-gradient(90deg, #f5ddbb, #c9a84c)',
            animation: 'loadBar 1.5s ease-out forwards',
          }}
        />
      </div>

      <style>{`
        @keyframes loadBar {
          from { width: 0%; }
          to { width: 100%; }
        }
      `}</style>
    </div>
  )
}

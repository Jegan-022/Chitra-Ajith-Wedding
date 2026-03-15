import { useState, useRef } from 'react'
import { FaPaperPlane, FaHeart } from 'react-icons/fa'

export default function RSVPSection() {
  const [form, setForm] = useState({ name: '', email: '', guests: '1', attending: 'yes', message: '' })
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    setSubmitted(true)
  }

  return (
    <section
      id="rsvp"
      className="py-24 px-4 relative overflow-hidden"
      style={{ background: 'linear-gradient(135deg, #0a0510, #1a0a20, #0a0510)' }}
    >
      {/* Floating decorations */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {['💐', '🌸', '💫', '✨'].map((e, i) => (
          <div key={i} className={`absolute text-4xl opacity-10 float-anim-${(i % 3) + 1} select-none`}
            style={{ left: `${20 + i * 20}%`, top: `${10 + (i % 2) * 60}%` }}
          >
            {e}
          </div>
        ))}
      </div>

      <div className="max-w-xl mx-auto relative z-10">
        {/* Header */}
        <div className="text-center mb-12">
          <p className="section-subtitle mb-2">Join The Celebration</p>
          <h2 className="section-title" style={{ color: '#f5ddbb' }}>RSVP</h2>
          <div className="divider-gold mt-4 mb-6" />
          <p className="font-elegant italic text-white/60 text-base">
            Please reply by May 31st, 2026
          </p>
        </div>

        {!submitted ? (
          <form
            onSubmit={handleSubmit}
            className="glass-card p-8 space-y-5"
            style={{ background: 'rgba(255,255,255,0.07)', borderColor: 'rgba(201,168,76,0.2)' }}
          >
            {/* Name */}
            <div>
              <label className="block text-xs tracking-widest uppercase text-yellow-400/70 mb-2">Your Name</label>
              <input
                type="text"
                required
                placeholder="Enter your full name"
                className="form-input bg-white/10 text-white placeholder-white/30 border-white/10 focus:border-yellow-500"
                value={form.name}
                onChange={e => setForm({ ...form, name: e.target.value })}
              />
            </div>

            {/* Email */}
            <div>
              <label className="block text-xs tracking-widest uppercase text-yellow-400/70 mb-2">Email Address</label>
              <input
                type="email"
                required
                placeholder="your@email.com"
                className="form-input bg-white/10 text-white placeholder-white/30 border-white/10 focus:border-yellow-500"
                value={form.email}
                onChange={e => setForm({ ...form, email: e.target.value })}
              />
            </div>

            {/* Guests + Attending row */}
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-xs tracking-widest uppercase text-yellow-400/70 mb-2">Guests</label>
                <select
                  className="form-input bg-white/10 text-white border-white/10 focus:border-yellow-500"
                  value={form.guests}
                  onChange={e => setForm({ ...form, guests: e.target.value })}
                >
                  {[1,2,3,4,5].map(n => <option key={n} value={n} className="text-gray-800">{n} Guest{n > 1 ? 's' : ''}</option>)}
                </select>
              </div>
              <div>
                <label className="block text-xs tracking-widest uppercase text-yellow-400/70 mb-2">Attending?</label>
                <select
                  className="form-input bg-white/10 text-white border-white/10 focus:border-yellow-500"
                  value={form.attending}
                  onChange={e => setForm({ ...form, attending: e.target.value })}
                >
                  <option value="yes" className="text-gray-800">Yes, Joyfully! 🎉</option>
                  <option value="no" className="text-gray-800">Unable to Attend 😢</option>
                </select>
              </div>
            </div>

            {/* Message */}
            <div>
              <label className="block text-xs tracking-widest uppercase text-yellow-400/70 mb-2">Message to Couple</label>
              <textarea
                rows={3}
                placeholder="Your warm wishes..."
                className="form-input resize-none bg-white/10 text-white placeholder-white/30 border-white/10 focus:border-yellow-500"
                value={form.message}
                onChange={e => setForm({ ...form, message: e.target.value })}
              />
            </div>

            {/* Submit */}
            <button
              type="submit"
              className="btn-gold w-full flex items-center justify-center gap-3 py-4 text-base"
            >
              <FaPaperPlane /> Send RSVP
            </button>
          </form>
        ) : (
          <div className="glass-card p-12 text-center"
            style={{ background: 'rgba(255,255,255,0.07)', borderColor: 'rgba(201,168,76,0.3)' }}
          >
            <div className="text-6xl mb-5 animate-bounce">💌</div>
            <h3 className="font-serif text-3xl mb-3" style={{ color: '#f5ddbb' }}>
              Thank You, {form.name}!
            </h3>
            <FaHeart className="text-pink-400 mx-auto mb-3 animate-pulse" size={24} />
            <p className="font-elegant italic text-white/70 text-lg leading-relaxed">
              Thank you for celebrating with us. We cannot wait to share this beautiful day with you!
            </p>
            <div className="divider-gold mt-6" />
            <p className="text-white/50 text-sm mt-4 tracking-widest uppercase">
              See you on June 15, 2026 ✨
            </p>
          </div>
        )}
      </div>
    </section>
  )
}

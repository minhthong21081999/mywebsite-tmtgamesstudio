import React, { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { Star, Play, Download, Users, CalendarDays, Gamepad } from 'lucide-react'
import ParticlesBg from './ParticlesBg'

const stats = [
  { label: 'Games Released', value: '8+', icon: Gamepad },
  { label: 'Downloads', value: '100K+', icon: Download },
  { label: 'Active Players', value: '10K+', icon: Users },
  { label: 'Years Experience', value: '3+', icon: CalendarDays },
]

function parseTarget(value: string) {
  const number = Number(value.replace(/[^0-9]/g, ''))
  return Number.isNaN(number) ? 0 : number
}

function useCountUp(value: string, active = true) {
  const target = parseTarget(value)
  const [count, setCount] = useState(0)

  useEffect(() => {
    if (!active || target === 0) {
      setCount(target)
      return
    }

    const duration = 1200
    const stepTime = 30
    const steps = Math.max(1, Math.ceil(duration / stepTime))
    const increment = Math.max(1, Math.floor(target / steps))
    let current = 0
    const timer = window.setInterval(() => {
      current += increment
      if (current >= target) {
        setCount(target)
        window.clearInterval(timer)
      } else {
        setCount(current)
      }
    }, stepTime)

    return () => window.clearInterval(timer)
  }, [target, active])

  return count
}

export default function Hero() {
  const reveal = { opacity: 0, y: 30 }

  return (
    <section className="relative overflow-hidden bg-[radial-gradient(circle_at_top_left,rgba(212,175,55,0.18),transparent_20%),radial-gradient(circle_at_bottom_right,rgba(245,215,142,0.12),transparent_22%),#0B0B0B] py-24">
      <div className="pointer-events-none absolute inset-0 opacity-80 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.04),transparent_25%)] mix-blend-screen" />
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid gap-10 lg:grid-cols-[40%_60%] items-center">
        <motion.div initial={reveal} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.25 }} transition={{ duration: 0.9, ease: 'easeOut' }} className="space-y-8">
          <span className="inline-flex items-center gap-2 rounded-full border border-[#D4AF37]/20 bg-[#D4AF37]/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.35em] text-[#F5D78E] shadow-[0_16px_50px_rgba(212,175,55,0.1)]">
            <Star size={14} className="text-[#D4AF37]" /> WE BUILD AMAZING GAMES
          </span>

          <div className="space-y-6">
            <h1 className="text-5xl sm:text-6xl xl:text-7xl font-black leading-[0.92] tracking-[-0.04em] text-white">
              Building <span className="bg-gradient-to-r from-[#F5D78E] via-[#D4AF37] to-[#E6C77A] bg-clip-text text-transparent">Games</span>
              <br />
              For Millions Of Players
            </h1>
            <p className="max-w-xl text-[#BDBDBD] text-lg leading-8">
              TMT Games Studio is an indie game development studio focused on creating fun, innovative and engaging mobile games.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-4">
            <a href="#projects" className="btn-primary">View Our Games</a>
            <a href="/contact" className="btn-ghost">Contact Us</a>
          </div>

          <div className="grid gap-3 sm:grid-cols-2">
            {stats.map((item) => {
              const Icon = item.icon
              return (
                <motion.div
                  key={item.label}
                  whileHover={{ y: -4 }}
                  transition={{ type: 'spring', stiffness: 260, damping: 20 }}
                  className="group flex items-center gap-3 rounded-3xl bg-white/5 p-4 text-sm shadow-[0_20px_50px_rgba(0,0,0,0.28)] backdrop-blur-xl transition-transform duration-300"
                >
                  <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-[#D4AF37]/15 text-[#F5D78E] shadow-[0_10px_30px_rgba(212,175,55,0.15)]">
                    <Icon size={18} />
                  </div>
                  <div>
                    <StatValue value={item.value} />
                    <p className="mt-1 text-xs uppercase tracking-[0.18em] text-[#BDBDBD]">{item.label}</p>
                  </div>
                </motion.div>
              )
            })}
          </div>
        </motion.div>

        <motion.div initial={reveal} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.25 }} transition={{ duration: 0.9, ease: 'easeOut', delay: 0.1 }} className="relative">
          <div className="absolute -left-12 top-10 h-32 w-32 rounded-full bg-[#D4AF37]/20 blur-3xl" />
          <div className="absolute -right-10 bottom-10 h-40 w-40 rounded-full bg-[#F5D78E]/15 blur-3xl" />

          <motion.div initial={{ scale: 0.98, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} transition={{ duration: 1.1, ease: 'easeOut' }} className="hero-showcase-card relative overflow-hidden rounded-[32px] border border-[#D4AF37]/20 bg-[#121212]/90 p-1 shadow-[0_40px_90px_rgba(0,0,0,0.55)] backdrop-blur-3xl">
            <div className="relative overflow-hidden rounded-[30px] border border-white/10 bg-[#111111]/90 p-6">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(212,175,55,0.15),transparent_45%),radial-gradient(circle_at_bottom_right,rgba(245,215,142,0.08),transparent_55%)] opacity-90 pointer-events-none" />
              <img
                src="/images/background.png"
                alt="Animal Clash TD Showcase"
                className="h-[420px] w-full rounded-[24px] object-cover shadow-[0_35px_90px_rgba(0,0,0,0.55)]"
              />
              <div className="absolute inset-x-8 bottom-8 rounded-3xl border border-[#D4AF37]/15 bg-[#0B0B0B]/70 p-5 backdrop-blur-xl">
                <p className="text-sm uppercase tracking-[0.2em] text-[#F5D78E]/90">Premium Demo Reel</p>
                <p className="mt-2 text-xl font-semibold text-white">Animal Clash TD</p>
              </div>
            </div>
          </motion.div>

          <motion.div initial={{ y: 20, opacity: 0 }} whileInView={{ y: 0, opacity: 1 }} viewport={{ once: true, amount: 0.25 }} transition={{ duration: 0.8, delay: 0.25 }} className="absolute right-0 bottom-0 translate-y-12 rounded-[28px] border border-[#D4AF37]/20 bg-[#0B0B0B]/90 px-5 py-4 shadow-[0_30px_90px_rgba(0,0,0,0.45)] backdrop-blur-3xl">
            <div className="flex items-center gap-3 text-[#F5D78E] font-semibold">
              <Play size={18} />
              <span>Watch Showreel</span>
            </div>
            <p className="mt-2 text-sm text-[#BDBDBD]">See our games in action</p>
          </motion.div>
        </motion.div>
      </div>
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-56 bg-[radial-gradient(circle_at_bottom,rgba(212,175,55,0.08),transparent_40%)]" />
      <div className="pointer-events-none absolute left-0 top-1/2 h-40 w-40 -translate-y-1/2 rounded-full bg-[#D4AF37]/10 blur-3xl" />
      <div className="pointer-events-none absolute right-0 top-1/3 h-24 w-24 rounded-full bg-[#F5D78E]/10 blur-3xl" />
    </section>
  )
}

function StatValue({ value }: { value: string }) {
  const count = useCountUp(value)
  const suffix = value.replace(/[0-9]/g, '')

  return (
    <div className="text-3xl font-extrabold text-white">
      {count}
      <span className="text-[#F5D78E]">{suffix}</span>
    </div>
  )
}

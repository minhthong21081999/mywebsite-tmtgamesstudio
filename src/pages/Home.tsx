import React from 'react'
import { Link } from 'react-router-dom'
import projects from '../data/projects'
import { motion } from 'framer-motion'
import Hero from '../components/Hero'
import SEO from '../components/SEO'

export default function Home() {
  return (
    <div>
      <SEO title="TMTGamesStudio — Building Amazing Mobile Apps & Games" description="We create innovative mobile applications and engaging game experiences for millions of users." />
      <Hero />

      <section id="projects" className="mt-12 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-10 flex flex-col gap-5 lg:flex-row lg:items-end lg:justify-between">
            <div className="max-w-2xl space-y-3">
              <div className="inline-flex items-center gap-2 rounded-full border border-[#D4AF37]/20 bg-[#D4AF37]/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.35em] text-[#F5D78E] shadow-[0_16px_50px_rgba(212,175,55,0.1)]">
                🎮 OUR GAMES
              </div>
              <div className="space-y-2">
                <h2 className="text-4xl sm:text-5xl font-black tracking-[-0.04em] text-white">Featured Games</h2>
                <p className="max-w-xl text-[#BDBDBD] text-lg">Explore our most popular games</p>
              </div>
            </div>
            <a href="#projects" className="inline-flex items-center justify-center rounded-full border border-[#D4AF37]/20 bg-[#111111]/90 px-5 py-3 text-sm font-semibold text-[#F5D78E] transition duration-300 hover:-translate-y-1 hover:shadow-[0_0_40px_rgba(212,175,55,0.18)]">
              View All Games →
            </a>
          </div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={{
              hidden: { opacity: 0, y: 24 },
              visible: { opacity: 1, y: 0, transition: { staggerChildren: 0.12 } }
            }}
            className="grid gap-6"
          >
            {projects.length > 0 && (
              <motion.div
                variants={{ hidden: { opacity: 0, y: 24 }, visible: { opacity: 1, y: 0 } }}
                whileHover={{ y: -8, scale: 1.02 }}
                transition={{ type: 'spring', stiffness: 240, damping: 20 }}
                className="relative overflow-hidden rounded-[30px] border border-[#D4AF37]/15 bg-[#111111]/90 shadow-[0_35px_90px_rgba(212,175,55,0.18)]"
              >
                <div className="grid h-[420px] grid-cols-1 overflow-hidden rounded-[30px] lg:grid-cols-[70%_30%]">
                  <div className="relative overflow-hidden">
                    <img
                      src={projects[0].image}
                      alt={projects[0].name}
                      onError={(e) => { e.currentTarget.src = 'https://via.placeholder.com/1200x675.png?text=Animal+Clash+TD' }}
                      className="h-full w-auto object-cover transition-transform duration-500 hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0B0B0B]/95 via-[#0B0B0B]/20 to-transparent" />
                    <div className="absolute inset-y-0 left-0 flex flex-col justify-between p-8 text-white">
                      <div className="space-y-3">
                        <span className="inline-flex items-center gap-2 rounded-full border border-[#D4AF37]/30 bg-[#0B0B0B]/60 px-3 py-2 text-xs uppercase tracking-[0.24em] text-[#F5D78E]">
                          {projects[0].category}
                        </span>
                        <h3 className="text-5xl font-black leading-tight">{projects[0].name}</h3>
                        <p className="max-w-2xl text-sm leading-6 text-[#D5CAB0]">A charming tower defense with animal heroes and deep progression.</p>
                      </div>
                      <div className="grid gap-3 sm:grid-cols-3">
                        <div className="inline-flex items-center gap-2 rounded-full bg-black/50 px-4 py-3 text-sm text-[#F5D78E] backdrop-blur-md">
                          <span>⭐</span>
                          <span>{projects[0].rating}</span>
                        </div>
                        <div className="inline-flex items-center gap-2 rounded-full bg-black/50 px-4 py-3 text-sm text-[#F5D78E] backdrop-blur-md">
                          <span>⬇</span>
                          <span>{projects[0].downloads}</span>
                        </div>
                        <div className="inline-flex items-center gap-2 rounded-full bg-black/50 px-4 py-3 text-sm text-[#F5D78E] backdrop-blur-md">
                          <span>{projects[0].technologies.join(' • ')}</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="flex items-center border-t border-[#FFFFFF]/5 bg-[#111111]/95 px-6 py-8 lg:border-t-0 lg:border-l lg:px-8">
                    <div className="flex h-full flex-col justify-between">
                      <div className="space-y-6">
                        <div className="rounded-3xl border border-[#FFFFFF]/10 bg-white/5 p-5 text-sm text-[#BDBDBD] shadow-[0_20px_50px_rgba(0,0,0,0.35)]">
                          <p className="uppercase tracking-[0.24em] text-[#F5D78E]/90">Featured Game</p>
                          <p className="mt-3 text-xl font-semibold text-white">Animal Clash TD</p>
                          <p className="mt-2 text-sm text-[#BDBDBD]">A cinematic tower defense experience with deep progression and hero units.</p>
                        </div>

                        <div className="grid gap-3">
                          <Link to={`/projects/${projects[0].slug}`} className="btn-primary inline-flex justify-center px-4 py-3 text-sm">
                            View Details
                          </Link>
                          <a href="#" className="btn-ghost inline-flex justify-center px-4 py-3 text-sm">
                            Play Now
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            )}

            <div className="grid gap-5 lg:grid-cols-2">
              {projects.slice(1).map((p, index) => (
                <motion.div
                  key={p.id}
                  whileHover={{ y: -8, scale: 1.02 }}
                  transition={{ type: 'spring', stiffness: 240, damping: 22 }}
                  className="group flex flex-col overflow-hidden rounded-[24px] border border-[#D4AF37]/15 bg-[#111111]/90 shadow-[0_25px_70px_rgba(212,175,55,0.14)] transition-transform duration-300"
                >
                  <Link to={`/projects/${p.slug}`} className="flex h-full flex-col sm:flex-row">
                    <div className="sm:w-[45%] overflow-hidden rounded-t-[24px] sm:rounded-tl-[24px] sm:rounded-bl-[24px]">
                      <img
                        src={p.image}
                        alt={p.name}
                        onError={(e) => { e.currentTarget.src = 'https://via.placeholder.com/800x450.png?text=Game+Artwork' }}
                        className="aspect-[16/9] h-full object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                    </div>
                    <div className="flex flex-1 flex-col justify-between p-5 sm:p-6">
                      <div>
                        <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-white/10 bg-black/40 px-3 py-1 text-[11px] uppercase tracking-[0.25em] text-[#F5D78E] backdrop-blur-sm">
                          {p.category}
                        </div>
                        <h3 className="text-2xl font-bold text-white">{p.name}</h3>
                        <div className="mt-3 text-sm leading-6 text-[#BDBDBD]">{p.description}</div>
                      </div>
                      <div className="mt-6 flex flex-wrap items-center justify-between gap-3 text-sm text-[#BDBDBD]">
                        <span className="inline-flex items-center gap-2 rounded-full bg-white/5 px-3 py-2">
                          ⭐ {p.rating}
                        </span>
                        <span className="inline-flex items-center gap-2 rounded-full bg-white/5 px-3 py-2">
                          ⬇ {p.downloads}
                        </span>
                      </div>
                      <div className="mt-5 flex items-center gap-3 text-sm font-semibold text-[#F5D78E] transition hover:text-white">
                        <span>View Details →</span>
                      </div>
                    </div>
                  </Link>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

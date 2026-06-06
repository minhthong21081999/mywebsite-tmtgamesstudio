import React from 'react'
import { useParams, Link } from 'react-router-dom'
import projects from '../data/projects'
import { motion } from 'framer-motion'
import SEO from '../components/SEO'

type TimelineItem = { date: string; text: string }

export default function ProjectDetail() {
  const { slug } = useParams()
  const project = projects.find((p) => p.slug === slug)
  if (!project) return <div>Project not found</div>
  const [idx, setIdx] = React.useState(0)

  const screenshots: string[] = (project as any).screenshots || [project.image]

  return (
    <>
      <SEO title={`${project.name} — TMTGamesStudio`} description={project.description} image={project.image} />
      <motion.div className="space-y-6" initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
      <div className="flex flex-col md:flex-row gap-6 items-start">
        {/* <img src={project.image} alt={project.name} className="rounded shadow-lg w-full md:w-2/3" /> */}
        <div className="w-full md:w-1/3">
          <h1 className="text-2xl font-bold">{project.name}</h1>
          <p className="text-sm text-gray-300">{project.category} • {project.technologies.join(', ')}</p>
          <p className="mt-4 text-gray-200">{project.description}</p>

          <div className="mt-6 space-y-2">
            <a target="_blank" href={project.googlePlay || '#'} className="btn-primary inline-block px-4 py-2 bg-gradient-to-r rounded text-white">Google Play</a>
            <a target="_blank" href={project.appStore || '#'} className="inline-block px-4 py-2 ml-2 border border-gray-700 rounded text-gray-100">App Store</a>
          </div>
        </div>
      </div>

      <div>
        <h2 className="text-xl font-semibold">Screenshots</h2>
        <div className="mt-4">
          <div className="relative">
            {/* <img src={screenshots[idx]} alt={`screenshot-${idx}`} className="rounded w-full object-cover" /> */}
            <div className="absolute left-2 top-1/2 -translate-y-1/2">
              <button onClick={() => setIdx((i) => (i - 1 + screenshots.length) % screenshots.length)} className="p-2 bg-black/40 rounded">Prev</button>
            </div>
            <div className="absolute right-2 top-1/2 -translate-y-1/2">
              <button onClick={() => setIdx((i) => (i + 1) % screenshots.length)} className="p-2 bg-black/40 rounded">Next</button>
            </div>
          </div>

          <div className="mt-3 flex gap-2 overflow-x-auto">
            {screenshots.map((s, i) => (
              <button key={s} onClick={() => setIdx(i)} className={`w-28 h-16 rounded overflow-hidden ${i === idx ? 'ring-2 ring-indigo-400' : ''}`}>
                <img src={s} alt={`thumb-${i}`} className="w-full h-full object-cover" />
              </button>
            ))}
          </div>
        </div>
      </div>

      {project.video && (
        <div>
          <h2 className="text-xl font-semibold">Demo Video</h2>
          <div className="mt-4 aspect-video">
            <iframe src={project.video} title="demo" className="w-full h-full rounded" frameBorder={0} allowFullScreen />
          </div>
        </div>
      )}

      <div>
        <h2 className="text-xl font-semibold">Key Features</h2>
        <ul className="mt-3 grid grid-cols-1 sm:grid-cols-2 gap-2">
          {(project as any).features?.map((f: string) => (
            <li key={f} className="glass p-3">{f}</li>
          ))}
        </ul>
      </div>

      <div>
        <h2 className="text-xl font-semibold">Timeline</h2>
        <div className="mt-3 space-y-2">
          {(project as any).timeline?.map((t: TimelineItem) => (
            <div key={t.date} className="flex items-center gap-4">
              <div className="w-20 text-sm text-gray-400">{t.date}</div>
              <div className="glass p-3 flex-1">{t.text}</div>
            </div>
          ))}
        </div>
      </div>

      <div className="pt-4">
        <Link to="/" className="text-sm text-indigo-400">Back to Projects</Link>
      </div>
    </motion.div>
  </>
  )
}

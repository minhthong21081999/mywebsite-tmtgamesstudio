import React from 'react'
import { Link } from 'react-router-dom'
import { Sun, Moon } from 'lucide-react'

export default function Navbar() {
  const [isDark, setIsDark] = React.useState(true)
  const [logoError, setLogoError] = React.useState(false)

  React.useEffect(() => {
    const cls = document.documentElement.classList
    if (isDark) cls.add('dark')
    else cls.remove('dark')
  }, [isDark])

  return (
    <header className="header fixed top-0 left-0 right-0 z-50">
      <div className="flex items-center gap-4">
        {!logoError ? (
          <img
            src="/images/logo_transparent.png"
            alt="TMT Game Studio"
            className="h-20 w-auto object-contain"
            onError={() => setLogoError(true)}
          />
        ) : (
          <div className="text-2xl font-bold">TMT <span className="text-indigo-400">Game Studio</span></div>
        )}
        <nav className="hidden md:flex gap-4 ml-6">
          <Link to="/">Home</Link>
          <Link to="/projects">Projects</Link>
          <Link to="/profile">About</Link>
          <Link to="/contact">Contact</Link>
        </nav>
      </div>

      <div className="flex items-center gap-3">
        <button
          aria-label="Toggle dark mode"
          onClick={() => setIsDark((v) => !v)}
          className="p-2 rounded bg-gray-800/40 hover:bg-gray-700/50"
        >
          {isDark ? <Sun size={16} /> : <Moon size={16} />}
        </button>
        <Link to="/contact" className="btn-primary hidden sm:inline-block">Contact Us</Link>
      </div>
    </header>
  )
}

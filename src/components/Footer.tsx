import React from 'react'
import { Link } from 'react-router-dom'

export default function Footer() {
  return (
    <footer className="footer">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center gap-4">
        <div className="flex items-center gap-3">
          <img src="/images/logo.png" alt="TMT Game Studio" className="h-8 w-auto object-contain" onError={(e) => { (e.target as HTMLImageElement).style.display = 'none' }} />
          <div className="text-lg font-bold">TMT <span className="text-indigo-400">Game Studio</span></div>
          <div className="text-sm text-gray-400">© {new Date().getFullYear()} TMT Game Studio</div>
        </div>
        <div className="flex gap-4">
          <Link to="/projects">Projects</Link>
          <Link to="/profile">About</Link>
          <Link to="/contact">Contact</Link>
        </div>
      </div>
    </footer>
  )
}

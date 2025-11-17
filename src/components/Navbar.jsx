import React, { useState } from 'react'
import { Menu, X, Sun, Moon } from 'lucide-react'

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const [dark, setDark] = useState(false)

  return (
    <header className="bg-white/60 backdrop-blur sticky top-0 z-40 border-b">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center space-x-3">
            <a href="#" className="text-xl font-semibold">YourName</a>
            <nav className="hidden md:flex gap-4 text-sm text-slate-600">
              <a href="#projects" className="hover:text-slate-900">Projects</a>
              <a href="#experience" className="hover:text-slate-900">Experience</a>
              <a href="#education" className="hover:text-slate-900">Education</a>
              <a href="#contact" className="hover:text-slate-900">Contact</a>
            </nav>
          </div>

          <div className="flex items-center gap-3">
            <button
              aria-label="Toggle theme"
              onClick={() => setDark(d => !d)}
              className="p-2 rounded hover:bg-slate-100"
            >
              {dark ? <Sun size={16} /> : <Moon size={16} />}
            </button>

            <button
              className="md:hidden p-2 rounded hover:bg-slate-100"
              onClick={() => setOpen(o => !o)}
              aria-label="Toggle menu"
            >
              {open ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>
        {open && (
          <div className="md:hidden py-2">
            <nav className="flex flex-col gap-2 text-sm">
              <a href="#projects" className="px-2 py-1 rounded hover:bg-slate-100">Projects</a>
              <a href="#experience" className="px-2 py-1 rounded hover:bg-slate-100">Experience</a>
              <a href="#education" className="px-2 py-1 rounded hover:bg-slate-100">Education</a>
              <a href="#contact" className="px-2 py-1 rounded hover:bg-slate-100">Contact</a>
            </nav>
          </div>
        )}
      </div>
    </header>
  )
}

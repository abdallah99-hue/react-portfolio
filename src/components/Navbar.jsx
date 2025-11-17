import React, { useState } from 'react'
import { Menu, X, Sun, Moon } from 'lucide-react'

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const [dark, setDark] = useState(false)

  return (
    <header className="sticky top-0 z-40">
      <div className="bg-gradient-to-r from-white via-slate-50 to-white/70 border-b backdrop-blur">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center gap-4">
              <a href="#" className="flex items-center gap-3">
                <span className="w-8 h-8 rounded-full bg-indigo-600 inline-block shadow-md" />
                <span className="text-lg font-semibold">YourName</span>
              </a>

              <nav className="hidden md:flex gap-2 text-sm">
                <a href="#projects" className="px-3 py-1 rounded-full text-slate-700 hover:bg-slate-100">Projects</a>
                <a href="#experience" className="px-3 py-1 rounded-full text-slate-700 hover:bg-slate-100">Experience</a>
                <a href="#education" className="px-3 py-1 rounded-full text-slate-700 hover:bg-slate-100">Education</a>
                <a href="#contact" className="px-3 py-1 rounded-full text-slate-700 hover:bg-slate-100">Contact</a>
              </nav>
            </div>

            <div className="flex items-center gap-3">
              <button
                aria-label="Toggle theme"
                onClick={() => setDark(d => !d)}
                className="p-2 rounded-md hover:bg-slate-100"
                title="Toggle theme"
              >
                {dark ? <Sun size={16} /> : <Moon size={16} />}
              </button>

              <button
                className="md:hidden p-2 rounded-md hover:bg-slate-100"
                onClick={() => setOpen(o => !o)}
                aria-label="Toggle menu"
              >
                {open ? <X size={20} /> : <Menu size={20} />}
              </button>
            </div>
          </div>

          {open && (
            <div className="md:hidden py-3">
              <nav className="flex flex-col gap-2 text-sm">
                <a href="#projects" className="px-3 py-2 rounded-md hover:bg-slate-100">Projects</a>
                <a href="#experience" className="px-3 py-2 rounded-md hover:bg-slate-100">Experience</a>
                <a href="#education" className="px-3 py-2 rounded-md hover:bg-slate-100">Education</a>
                <a href="#contact" className="px-3 py-2 rounded-md hover:bg-slate-100">Contact</a>
              </nav>
            </div>
          )}
        </div>
      </div>
    </header>
  )
}

import React, { useState } from 'react'
import { Menu, X, Sun, Moon } from 'lucide-react'

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const [dark, setDark] = useState(false)

  return (
    <header className="sticky top-0 z-40">
      <div className="backdrop-blur bg-white/60 dark:bg-slate-900/60 border-b border-slate-200 dark:border-slate-700">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center gap-4">
              <a href="#" className="flex items-center gap-3">
                <span className="w-9 h-9 rounded-full bg-gradient-to-tr from-indigo-600 to-purple-500 inline-block shadow-lg ring-1 ring-white/30" />
                <span className="text-lg font-semibold bg-clip-text text-transparent bg-gradient-to-r from-indigo-600 to-purple-600">YourName</span>
              </a>

              <nav className="hidden md:flex gap-3 text-sm items-center">
                <a href="#projects" className="px-3 py-1 rounded-full text-slate-700 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800 transition">Projects</a>
                <a href="#experience" className="px-3 py-1 rounded-full text-slate-700 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800 transition">Experience</a>
                <a href="#education" className="px-3 py-1 rounded-full text-slate-700 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800 transition">Education</a>
                <a href="#contact" className="px-3 py-1 rounded-full text-slate-700 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800 transition">Contact</a>
              </nav>
            </div>

            <div className="flex items-center gap-3">
              <div className="hidden md:flex items-center gap-3">
                <a href="/resume.pdf" className="px-3 py-1 rounded-md text-sm bg-gradient-to-r from-indigo-600 to-purple-600 text-white shadow hover:opacity-95 transition">Resume</a>
              </div>

              <button
                aria-label="Toggle theme"
                onClick={() => setDark(d => !d)}
                className="p-2 rounded-md hover:bg-slate-100 dark:hover:bg-slate-800 transition"
                title="Toggle theme"
              >
                {dark ? <Sun size={16} /> : <Moon size={16} />}
              </button>

              <button
                className="md:hidden p-2 rounded-md hover:bg-slate-100 dark:hover:bg-slate-800 transition"
                onClick={() => setOpen(o => !o)}
                aria-label="Toggle menu"
              >
                {open ? <X size={20} /> : <Menu size={20} />}
              </button>
            </div>
          </div>

          {open && (
            <div className="md:hidden py-3">
              <nav className="flex flex-col gap-2 text-sm bg-white/70 dark:bg-slate-900/70 rounded-lg p-3 shadow-sm border border-slate-100 dark:border-slate-700">
                <a href="#projects" className="px-3 py-2 rounded-md hover:bg-slate-100 dark:hover:bg-slate-800 transition">Projects</a>
                <a href="#experience" className="px-3 py-2 rounded-md hover:bg-slate-100 dark:hover:bg-slate-800 transition">Experience</a>
                <a href="#education" className="px-3 py-2 rounded-md hover:bg-slate-100 dark:hover:bg-slate-800 transition">Education</a>
                <a href="#contact" className="px-3 py-2 rounded-md hover:bg-slate-100 dark:hover:bg-slate-800 transition">Contact</a>
                <a href="/resume.pdf" className="mt-2 px-3 py-2 rounded-md bg-indigo-600 text-white text-center">Resume</a>
              </nav>
            </div>
          )}
        </div>
      </div>
    </header>
  )
}

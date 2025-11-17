import React from 'react'

export default function Hero() {
  return (
    <section id="hero" className="py-20">
      <div className="max-w-4xl mx-auto px-4 text-center">
        <div className="flex flex-col items-center gap-6 sm:flex-row sm:items-center sm:gap-8 sm:justify-between">
          <div className="text-left sm:text-left">
            <h1 className="text-4xl sm:text-5xl font-extrabold text-slate-900 leading-tight">
              Hi, I'm <span className="bg-clip-text text-transparent bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-500">Your Name</span>
            </h1>
            <p className="mt-4 text-lg text-slate-600 max-w-xl">I build accessible, performant web applications — primarily with React, Vite, and Tailwind CSS. I enjoy turning designs into delightful user experiences.</p>

            <div className="mt-6 flex flex-wrap gap-3">
              <a href="#projects" className="inline-flex items-center px-5 py-2 rounded-md bg-indigo-600 text-white shadow hover:opacity-95">See projects</a>
              <a href="#contact" className="inline-flex items-center px-5 py-2 rounded-md border border-slate-200 text-slate-700 hover:bg-slate-50">Contact me</a>
            </div>
          </div>

          <div className="mt-6 sm:mt-0">
            <div className="w-36 h-36 rounded-full bg-gradient-to-tr from-indigo-100 to-pink-100 flex items-center justify-center shadow-lg">
              <div className="w-32 h-32 rounded-full bg-white flex items-center justify-center text-xl font-medium text-slate-700">IMG</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

import React from 'react'

export default function Hero() {
  return (
    <section id="hero" className="py-16">
      <div className="max-w-3xl mx-auto text-center">
        <h1 className="text-4xl sm:text-5xl font-extrabold text-slate-900">Hi, I'm Your Name</h1>
        <p className="mt-4 text-lg text-slate-600">I'm a full-stack developer building accessible, performant web apps. I focus on React, Tailwind, and delightful UI.</p>
        <div className="mt-6 flex justify-center gap-3">
          <a href="#projects" className="inline-flex items-center px-4 py-2 rounded bg-slate-900 text-white hover:opacity-95">See projects</a>
          <a href="#contact" className="inline-flex items-center px-4 py-2 rounded border border-slate-200 text-slate-700 hover:bg-slate-50">Contact me</a>
        </div>
      </div>
    </section>
  )
}

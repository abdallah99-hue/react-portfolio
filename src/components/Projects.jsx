import React from 'react'
import { ExternalLink } from 'lucide-react'

const sampleProjects = [
  { id: 1, title: 'Portfolio Site', desc: 'A fast portfolio built with Vite + React + Tailwind.', link: '#' },
  { id: 2, title: 'Task Manager', desc: 'A productivity app with CRUD and offline support.', link: '#' },
  { id: 3, title: 'E-commerce demo', desc: 'Shopping UI with cart and checkout demo.', link: '#' }
]

export default function Projects() {
  return (
    <section id="projects" className="py-16">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-2xl font-bold">Projects</h2>
        <p className="text-slate-600 mt-2">Selected projects demonstrating frontend and full-stack work.</p>

        <div className="mt-6 grid gap-4 sm:grid-cols-2">
          {sampleProjects.map(p => (
            <article key={p.id} className="p-4 border rounded hover:shadow">
              <h3 className="font-semibold">{p.title}</h3>
              <p className="text-sm text-slate-600 mt-1">{p.desc}</p>
              <a href={p.link} className="mt-3 inline-flex items-center text-sm text-slate-700 hover:underline">
                View <ExternalLink className="ml-2" size={14} />
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

import React from 'react'

const experiences = [
  { id: 1, role: 'Frontend Developer', company: 'Acme Co', period: '2022 - Present', desc: 'Built responsive UI and component libraries with React and Tailwind.' },
  { id: 2, role: 'Full-stack Engineer', company: 'Startup X', period: '2020 - 2022', desc: 'Implemented APIs, auth, and realtime features.' }
]

export default function Experience() {
  return (
    <section id="experience" className="py-16">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-2xl font-bold">Experience</h2>
        <div className="mt-6 space-y-4">
          {experiences.map(e => (
            <div key={e.id} className="p-4 border rounded">
              <div className="flex items-baseline justify-between">
                <h3 className="font-semibold">{e.role} — <span className="text-slate-600">{e.company}</span></h3>
                <span className="text-sm text-slate-500">{e.period}</span>
              </div>
              <p className="text-sm text-slate-600 mt-2">{e.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

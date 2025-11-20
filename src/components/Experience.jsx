import React from 'react'

const experiences = [
  {
    id: 1,
    role: 'Frontend Developer',
    company: 'Acme Co',
    period: '2023 — Present',
    details: [
      'Built responsive UI and reusable component libraries using React, Tailwind CSS, and Shadcn UI.',
      'Optimized page performance and reduced bundle size by 25%.',
      'Collaborated with backend teams to integrate REST APIs and WebSocket events.'
    ]
  },
  {
    id: 2,
    role: 'Full-stack Engineer',
    company: 'Startup X',
    period: '2022 — 2023',
    details: [
      'Designed and implemented RESTful APIs using Node.js and Express.',
      'Integrated authentication and role-based access control using JWT.',
      'Built real-time features such as live notifications and activity streams.'
    ]
  },
  {
    id: 3,
    role: 'JavaScript Developer',
    company: 'DigitalWave Agency',
    period: '2021 — 2022',
    details: [
      'Developed interactive landing pages and dashboards using JavaScript, React, and GSAP animations.',
      'Improved Lighthouse performance scores from 70 → 95+.',
      'Worked closely with clients to transform business requirements into technical solutions.'
    ]
  },
  {
    id: 4,
    role: 'Full-Stack Developer',
    company: 'DevWorks Studio',
    period: '2020 — 2021',
    details: [
      'Created scalable backend services using Node.js + MongoDB.',
      'Built responsive, pixel-perfect UI with Tailwind, React, and Next.js.',
      'Wrote automated tests (Jest) and improved code reliability by 30%.'
    ]
  }
]

export default function Experience() {
  return (
    <section id="experience" className="py-16">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-2xl font-bold">Experience</h2>
        <div className="mt-6 space-y-6">
          {experiences.map(e => (
            <div key={e.id} className="p-5 border rounded-lg bg-white/50 dark:bg-slate-900/50 border-slate-100 dark:border-slate-700">
              <div className="flex items-baseline justify-between">
                <h3 className="font-semibold text-lg">{e.role} — <span className="text-slate-600 dark:text-slate-300">{e.company}</span></h3>
                <span className="text-sm text-slate-500">{e.period}</span>
              </div>
              <div className="mt-3 space-y-2">
                {e.details.map((d, i) => (
                  <p key={i} className="text-sm text-slate-600 dark:text-slate-300">{d}</p>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

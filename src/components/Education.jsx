import React from 'react'

const educations = [
  {
    id: 1,
    title: 'ALX Professional Foundations Certificate',
    period: '2025 – 2026',
    details: ['Professional Foundations program focused on essential skills for modern tech careers.']
  },
  {
    id: 2,
    title: 'ALX Frontend Development Certificate',
    period: '2025 – 2026',
    details: ['Training in HTML, CSS, JavaScript, React, UI/UX, and modern frontend workflows.']
  },
  {
    id: 3,
    title: 'ALX Backend Development Certificate',
    period: '2025 – 2026',
    details: ['Specialization in Backend Development: Node.js, APIs, authentication, and databases.']
  },
  {
    id: 4,
    title: 'Jadara Foundation — Digital Learning Certificate',
    period: '2025 – 2026',
    details: ['Certificate in digital learning, technology literacy, and modern digital tools.']
  },
  {
    id: 5,
    title: 'Full-Stack Web Development Bootcamp — Bootcamp B',
    period: '2021',
    details: ['Comprehensive program covering Full-Stack Web Development: frontend, backend, and databases.']
  },
  {
    id: 6,
    title: 'B.Sc. in Computer Science — University A',
    period: '2016 – 2020',
    details: ['Bachelor\'s degree in Computer Science.']
  },
  {
    id: 7,
    title: 'Office Administration Certificate',
    period: '2016',
    details: ['Training in office tools, documentation management, and administrative workflow.']
  },
  {
    id: 8,
    title: 'Baccalaureate — Life & Earth Sciences (SVT)',
    period: '2011 – 2012',
    details: ['High School Diploma in Life and Earth Sciences (SVT), Moulay Driss High School.']
  },
  {
    id: 9,
    title: 'Additional Certifications — Driving License (Category B)',
    period: '2013',
    details: ['2013 driving license (Category B) allowing operation of standard vehicles.']
  }
]

export default function Education() {
  return (
    <section id="education" className="py-16">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-2xl font-bold">Education & Certifications</h2>
        <div className="mt-6 space-y-6">
          {educations.map(ed => (
            <div key={ed.id} className="p-5 border rounded-lg bg-white/50 dark:bg-slate-900/50 border-slate-100 dark:border-slate-700">
              <div className="flex items-baseline justify-between">
                <h3 className="font-semibold text-lg">{ed.title}</h3>
                <span className="text-sm text-slate-500">{ed.period}</span>
              </div>
              <div className="mt-2 space-y-1">
                {ed.details.map((d, i) => (
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

import React from 'react'

const educations = [
  { id: 1, school: 'University A', degree: 'B.Sc. Computer Science', period: '2016 - 2020' },
  { id: 2, school: 'Bootcamp B', degree: 'Full-Stack Web Dev', period: '2021' }
]

export default function Education() {
  return (
    <section id="education" className="py-16">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-2xl font-bold">Education</h2>
        <div className="mt-6 space-y-4">
          {educations.map(ed => (
            <div key={ed.id} className="p-4 border rounded">
              <div className="flex items-baseline justify-between">
                <h3 className="font-semibold">{ed.school}</h3>
                <span className="text-sm text-slate-500">{ed.period}</span>
              </div>
              <p className="text-sm text-slate-600 mt-1">{ed.degree}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

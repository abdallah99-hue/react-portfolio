import React from 'react'
import { Mail, Linkedin, Github } from 'lucide-react'

export default function Contact() {
  return (
    <section id="contact" className="py-16">
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="text-2xl font-bold">Contact</h2>
        <p className="text-slate-600 mt-2">Want to work together? Reach out via email or connect on LinkedIn.</p>

        <div className="mt-6 flex justify-center gap-4">
          <a href="mailto:you@example.com" className="inline-flex items-center gap-2 px-4 py-2 border rounded hover:bg-slate-50">
            <Mail size={16} /> Email
          </a>
          <a href="#" className="inline-flex items-center gap-2 px-4 py-2 border rounded hover:bg-slate-50">
            <Linkedin size={16} /> LinkedIn
          </a>
          <a href="#" className="inline-flex items-center gap-2 px-4 py-2 border rounded hover:bg-slate-50">
            <Github size={16} /> GitHub
          </a>
        </div>
      </div>
    </section>
  )
}

import React from 'react'
import { Github, Linkedin } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="mt-12 border-t bg-white/60 backdrop-blur py-6">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        <div className="text-sm text-slate-600">© {new Date().getFullYear()} ABDALLAH BENOMAR</div>
        <div className="flex gap-3">
          <a href="#" aria-label="GitHub" className="p-2 rounded hover:bg-slate-100"><Github size={16} /></a>
          <a href="#" aria-label="LinkedIn" className="p-2 rounded hover:bg-slate-100"><Linkedin size={16} /></a>
        </div>
      </div>
    </footer>
  )
}

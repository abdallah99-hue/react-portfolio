import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Projects from './components/Projects'
import Experience from './components/Experience'
import Education from './components/Education'
import Contact from './components/Contact'
import Footer from './components/Footer'

function App() {
  return (
    <div className="min-h-screen bg-white text-slate-800">
      <Navbar />
      <main className="container mx-auto px-4 sm:px-6 lg:px-8">
        <Hero />
        <Projects />
        <Experience />
        <Education />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}

export default App;
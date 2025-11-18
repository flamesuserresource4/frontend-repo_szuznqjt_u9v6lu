import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Features from './components/Features'
import Projects from './components/Projects'
import CTA from './components/CTA'
import ChatWidget from './components/ChatWidget'

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 text-slate-100 relative">
      <div className="absolute inset-0 pointer-events-none bg-[linear-gradient(to_right,transparent,rgba(99,102,241,0.06),transparent)]" />
      <Navbar />
      <main>
        <Hero />
        <Features />
        <Projects />
        <CTA />
      </main>
      <footer className="border-t border-white/10 py-10">
        <div className="mx-auto max-w-7xl px-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-slate-400">
          <p>© {new Date().getFullYear()} Nex Rail AS. Alle rettigheter forbeholdt.</p>
          <div className="flex items-center gap-6">
            <a href="#tjenester" className="hover:text-white">Tjenester</a>
            <a href="#prosjekter" className="hover:text-white">Prosjekter</a>
            <a href="#kontakt" className="hover:text-white">Kontakt</a>
          </div>
        </div>
      </footer>
      <ChatWidget />
    </div>
  )
}

export default App

import { useState } from 'react'
import { Menu, X } from 'lucide-react'

function Navbar() {
  const [open, setOpen] = useState(false)

  const links = [
    { href: '#tjenester', label: 'Tjenester' },
    { href: '#prosjekter', label: 'Prosjekter' },
    { href: '#kontakt', label: 'Kontakt' },
  ]

  return (
    <header className="fixed top-0 inset-x-0 z-50">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mt-6 rounded-2xl border border-white/10 bg-white/5 backdrop-blur supports-[backdrop-filter]:bg-white/10">
          <div className="flex items-center justify-between px-4 py-3 sm:px-6">
            <a href="#" className="flex items-center gap-3">
              <div className="h-9 w-9 rounded-lg bg-gradient-to-tr from-sky-500 to-blue-600 shadow-lg shadow-sky-500/30 ring-1 ring-white/20" />
              <span className="text-white text-lg font-semibold tracking-tight">Nex Rail AS</span>
            </a>

            <nav className="hidden md:flex items-center gap-8">
              {links.map((l) => (
                <a key={l.href} href={l.href} className="text-slate-200 hover:text-white transition-colors">
                  {l.label}
                </a>
              ))}
              <a href="#kontakt" className="inline-flex items-center rounded-lg bg-gradient-to-r from-sky-500 to-blue-600 px-4 py-2 text-white font-medium shadow-md shadow-sky-500/30 hover:shadow-sky-500/50 transition-shadow">
                Be om tilbud
              </a>
            </nav>

            <button onClick={() => setOpen(!open)} className="md:hidden inline-flex h-10 w-10 items-center justify-center rounded-lg border border-white/10 text-white/90 hover:text-white">
              {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
          {open && (
            <div className="md:hidden px-4 pb-4 space-y-2">
              {links.map((l) => (
                <a key={l.href} href={l.href} className="block rounded-lg px-3 py-2 text-slate-200 hover:bg-white/5">
                  {l.label}
                </a>
              ))}
              <a href="#kontakt" className="block text-center rounded-lg bg-gradient-to-r from-sky-500 to-blue-600 px-3 py-2 text-white font-medium">
                Be om tilbud
              </a>
            </div>
          )}
        </div>
      </div>
    </header>
  )
}

export default Navbar

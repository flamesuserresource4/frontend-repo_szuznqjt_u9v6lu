import { motion } from 'framer-motion'

function CTA() {
  return (
    <section id="kontakt" className="py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="rounded-3xl border border-white/10 bg-gradient-to-br from-slate-800/60 to-slate-900/60 p-10 backdrop-blur-lg relative overflow-hidden">
          <div className="absolute inset-0 -z-10">
            <div className="absolute -top-20 -right-20 h-72 w-72 rounded-full bg-sky-500/20 blur-3xl" />
            <div className="absolute -bottom-20 -left-20 h-72 w-72 rounded-full bg-blue-600/20 blur-3xl" />
          </div>

          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <motion.h3
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.4 }}
                transition={{ duration: 0.5 }}
                className="text-2xl sm:text-3xl font-bold text-white"
              >
                Klar for neste prosjekt?
              </motion.h3>
              <p className="mt-3 text-slate-300">Ta kontakt med oss for befaring, tilbud eller mer informasjon om våre tjenester.</p>
            </div>

            <form className="space-y-4">
              <div className="grid sm:grid-cols-2 gap-4">
                <input type="text" placeholder="Navn" className="w-full rounded-lg border border-white/10 bg-white/5 px-4 py-3 text-white placeholder:text-white/50 focus:outline-none focus:ring-2 focus:ring-sky-500/60" />
                <input type="email" placeholder="E-post" className="w-full rounded-lg border border-white/10 bg-white/5 px-4 py-3 text-white placeholder:text-white/50 focus:outline-none focus:ring-2 focus:ring-sky-500/60" />
              </div>
              <input type="text" placeholder="Telefon" className="w-full rounded-lg border border-white/10 bg-white/5 px-4 py-3 text-white placeholder:text-white/50 focus:outline-none focus:ring-2 focus:ring-sky-500/60" />
              <textarea rows="4" placeholder="Fortell kort om oppdraget" className="w-full rounded-lg border border-white/10 bg-white/5 px-4 py-3 text-white placeholder:text-white/50 focus:outline-none focus:ring-2 focus:ring-sky-500/60" />
              <button type="button" className="inline-flex items-center rounded-xl bg-gradient-to-r from-sky-500 to-blue-600 px-6 py-3 text-white font-semibold shadow-lg shadow-sky-500/30 hover:shadow-sky-500/50 transition-all">
                Send forespørsel
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}

export default CTA

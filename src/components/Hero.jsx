import { motion } from 'framer-motion'

function Hero() {
  return (
    <section className="relative overflow-hidden pt-32 pb-24">
      <div className="absolute inset-0 -z-10">
        <div className="absolute -top-40 -left-32 h-[40rem] w-[40rem] rounded-full bg-sky-500/20 blur-3xl" />
        <div className="absolute -bottom-40 -right-32 h-[40rem] w-[40rem] rounded-full bg-blue-600/20 blur-3xl" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(255,255,255,0.06),transparent_60%)]" />
      </div>

      <div className="mx-auto max-w-7xl px-6">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white"
            >
              Fremtidens jernbanearbeid, levert trygt og presist
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1, duration: 0.6 }}
              className="mt-6 text-lg text-slate-300 max-w-2xl"
            >
              Nex Rail AS er en norsk entreprenør innen jernbane, med fokus på sikkerhet, kvalitet og effektiv gjennomføring av sporarbeid.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="mt-8 flex flex-wrap gap-4"
            >
              <a href="#kontakt" className="inline-flex items-center rounded-xl bg-gradient-to-r from-sky-500 to-blue-600 px-6 py-3 text-white font-semibold shadow-lg shadow-sky-500/30 hover:shadow-sky-500/50 transition-all">
                Kontakt oss
              </a>
              <a href="#tjenester" className="inline-flex items-center rounded-xl border border-white/15 px-6 py-3 text-white/90 hover:text-white hover:bg-white/5 backdrop-blur">
                Våre tjenester
              </a>
            </motion.div>

            <div className="mt-10 flex items-center gap-6 text-slate-300">
              <div className="text-3xl font-bold text-white">10+</div>
              <div>år med erfaring innen norsk jernbane</div>
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7 }}
            className="relative"
          >
            <div className="relative rounded-2xl border border-white/10 bg-gradient-to-br from-slate-800/60 to-slate-900/60 p-4 backdrop-blur-lg">
              <div className="aspect-[4/3] w-full overflow-hidden rounded-lg">
                <img
                  src="https://images.unsplash.com/photo-1509817316-7f3b83b79d5b?q=80&w=1600&auto=format&fit=crop"
                  alt="Nex Rail AS - jernbane i Norge"
                  className="h-full w-full object-cover scale-[1.02]"
                  loading="eager"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 hidden sm:block">
                <div className="rounded-xl bg-white/5 px-4 py-3 border border-white/10 text-white/90 shadow-lg backdrop-blur">
                  <p className="text-sm">Sertifisert personell • 24/7 beredskap • Landsdekkende</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default Hero

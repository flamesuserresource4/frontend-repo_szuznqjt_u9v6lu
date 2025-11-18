import { motion } from 'framer-motion'
import { Building2, Wrench, Shield, LifeBuoy } from 'lucide-react'

const features = [
  {
    icon: Building2,
    title: 'Nybygg',
    desc: 'Planlegging og bygging av nye jernbaneanlegg og spor – levert sikkert og til avtalt tid.',
  },
  {
    icon: Wrench,
    title: 'Vedlikehold',
    desc: 'Forebyggende og korrektivt sporvedlikehold tilpasset trafikk og sikkerhetskrav.',
  },
  {
    icon: Shield,
    title: 'Sikkerhet',
    desc: 'Strenge prosedyrer, risikovurderinger og sertifisert personell – sikkerhet først, alltid.',
  },
  {
    icon: LifeBuoy,
    title: 'Beredskap',
    desc: 'Døgnkontinuerlig beredskap for uforutsette hendelser med rask mobilisering.',
  },
]

function Features() {
  return (
    <section id="tjenester" className="py-24 relative">
      <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(ellipse_at_bottom_left,rgba(56,189,248,0.08),transparent_60%)]" />
      <div className="mx-auto max-w-7xl px-6">
        <div className="text-center mb-14">
          <motion.h2
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.5 }}
            className="text-3xl sm:text-4xl font-bold text-white"
          >
            Våre tjenester
          </motion.h2>
          <p className="mt-3 text-slate-300 max-w-2xl mx-auto">
            Vi fokuserer på nybygg, vedlikehold, sikkerhet og beredskap – ikke KL- eller signalarbeid.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((f, i) => (
            <motion.div
              key={f.title}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.45, delay: i * 0.05 }}
              className="group rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur hover:bg-white/10 hover:shadow-xl hover:shadow-sky-500/10 transition-all"
            >
              <div className="flex items-center gap-4">
                <div className="h-12 w-12 rounded-xl bg-gradient-to-br from-sky-500 to-blue-600 text-white grid place-items-center shadow-md shadow-sky-500/30">
                  <f.icon className="h-6 w-6" />
                </div>
                <h3 className="text-white font-semibold text-lg">{f.title}</h3>
              </div>
              <p className="mt-3 text-slate-300">{f.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Features

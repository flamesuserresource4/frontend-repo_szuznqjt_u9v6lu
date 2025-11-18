import { motion } from 'framer-motion'

const items = [
  {
    title: 'Oslo – Sporfornyelse',
    img: 'https://images.unsplash.com/photo-1536431311719-398b6704d4cc?q=80&w=1600&auto=format&fit=crop',
    desc: 'Utskifting av sviller og skinner med nattarbeid og trafikkavvikling.',
  },
  {
    title: 'Nordlandsbanen – Beredskap',
    img: 'https://images.unsplash.com/photo-1518546305927-5a555bb7020d?q=80&w=1600&auto=format&fit=crop',
    desc: 'Akutt utretting etter uvær. Sikring av strekning og gjenåpning.',
  },
  {
    title: 'Bergen – KL-arbeid',
    img: 'https://images.unsplash.com/photo-1526178312179-54a5b68b4ef1?q=80&w=1600&auto=format&fit=crop',
    desc: 'Vedlikehold av kontaktledningsanlegg med sikkerhetsplanlegging.',
  },
]

function Projects() {
  return (
    <section id="prosjekter" className="py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-10">
          <motion.h2
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.5 }}
            className="text-3xl sm:text-4xl font-bold text-white"
          >
            Utvalgte prosjekter
          </motion.h2>
          <p className="mt-3 text-slate-300 max-w-2xl">
            Et lite utvalg fra oppdrag vi har gjennomført med høy kvalitet og sikkerhet.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {items.map((p, i) => (
            <motion.div
              key={p.title}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.45, delay: i * 0.05 }}
              className="relative group overflow-hidden rounded-2xl border border-white/10 bg-white/5 backdrop-blur"
            >
              <div className="aspect-[4/3] overflow-hidden">
                <img src={p.img} alt={p.title} className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105" />
              </div>
              <div className="p-5">
                <h3 className="text-white font-semibold">{p.title}</h3>
                <p className="text-slate-300 mt-2 text-sm">{p.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects

import { Wheat, Shield, Flame } from 'lucide-react'

const FEATURES = [
  {
    Icon: Wheat,
    title: 'HECHO CON MAÍZ REAL',
    description: 'Cada snack está hecho con maíz 100% real. Sin ingredientes artificiales, solo sabor natural y esa textura crujiente que engancha.',
    bgClass: 'bg-secondary',
    textClass: 'text-secondary-foreground',
    iconBg: 'bg-secondary-foreground/10',
  },
  {
    Icon: Shield,
    title: 'SIN CERDO, SOLO SABOR',
    description: 'Todos nuestros chicharrones son de maíz puro. Crujientes, ligeros y con todo el sabor sin ningún compromiso.',
    bgClass: 'bg-primary',
    textClass: 'text-primary-foreground',
    iconBg: 'bg-primary-foreground/10',
  },
  {
    Icon: Flame,
    title: 'SABORES MEXICANOS',
    description: 'Desde el picante intenso del Fuego hasta el dulce del Churro — cada sabor es una experiencia 100% auténtica.',
    bgClass: 'bg-accent',
    textClass: 'text-accent-foreground',
    iconBg: 'bg-accent-foreground/10',
  },
]

/**
 * WhySection — 3 bold feature cards
 * Hippeas-inspired "Why choose us" section
 */
export const WhySection = () => {
  return (
    <section className="py-24 bg-background" aria-label="Por qué Los Carnales">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">

        {/* Header */}
        <div className="text-center mb-16">
          <p className="text-primary font-black uppercase tracking-widest text-xs mb-4">
            ¿Por qué elegirnos?
          </p>
          <h2
            className="text-foreground font-black uppercase leading-tight"
            style={{ fontSize: 'clamp(2.2rem, 5vw, 4rem)' }}
          >
            SNACKS QUE{' '}
            <span className="text-primary">HABLAN</span>{' '}
            FUERTE
          </h2>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {FEATURES.map(({ Icon, title, description, bgClass, textClass, iconBg }) => (
            <div
              key={title}
              className={`rounded-3xl p-10 transition-transform hover:-translate-y-2 duration-300 ${bgClass} ${textClass}`}
            >
              <div className={`inline-flex items-center justify-center w-14 h-14 rounded-2xl mb-6 ${iconBg}`}>
                <Icon className="w-7 h-7" />
              </div>
              <h3 className="font-black uppercase text-xl leading-tight mb-4">{title}</h3>
              <p className="opacity-80 leading-relaxed text-sm">{description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
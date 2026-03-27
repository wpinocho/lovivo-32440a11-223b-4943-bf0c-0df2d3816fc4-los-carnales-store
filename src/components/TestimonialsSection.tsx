import { Star } from 'lucide-react'

const REVIEWS = [
  {
    text: '¡El Fuego es completamente adictivo! Los mejores chicharrones que he probado. Sin cerdo y con todo el sabor que buscaba.',
    name: 'María G.',
    location: 'Los Angeles, CA',
    rating: 5,
    product: 'Chicharrón Fuego',
  },
  {
    text: 'El Churro corn puff es como comer un churro de feria pero en formato snack. OBSESIONADO. Toda mi familia los pide ahora.',
    name: 'Carlos R.',
    location: 'Houston, TX',
    rating: 5,
    product: 'Corn Puff Churro',
  },
  {
    text: 'El Mexican Street Corn tiene exactamente el sabor del elotero. Lime, chile y queso perfecto. ¡Los compro por caja!',
    name: 'Ana P.',
    location: 'Miami, FL',
    rating: 5,
    product: 'Chicharrón Mexican Street Corn',
  },
]

const Stars = ({ count }: { count: number }) => (
  <div className="flex gap-0.5 mb-4">
    {Array.from({ length: count }).map((_, i) => (
      <Star key={i} className="w-5 h-5 fill-secondary text-secondary" />
    ))}
  </div>
)

/**
 * TestimonialsSection — customer reviews
 * Hippeas-inspired social proof section
 */
export const TestimonialsSection = () => {
  return (
    <section className="py-24 bg-muted/50" aria-label="Reseñas de clientes">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">

        {/* Header */}
        <div className="text-center mb-16">
          <p className="text-primary font-black uppercase tracking-widest text-xs mb-4">
            Lo que dicen los carnales
          </p>
          <h2
            className="text-foreground font-black uppercase leading-tight"
            style={{ fontSize: 'clamp(2rem, 5vw, 3.8rem)' }}
          >
            LA GENTE{' '}
            <span className="text-primary">HABLA</span>
          </h2>
        </div>

        {/* Review cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {REVIEWS.map(({ text, name, location, rating, product }) => (
            <div
              key={name}
              className="bg-card rounded-3xl p-8 shadow-sm border border-border hover:-translate-y-1 transition-transform duration-300"
            >
              <Stars count={rating} />
              <p className="text-card-foreground/80 text-base leading-relaxed mb-6 italic">
                "{text}"
              </p>
              <div className="border-t border-border pt-5">
                <p className="font-black text-foreground text-sm">{name}</p>
                <p className="text-muted-foreground text-xs mt-0.5">{location}</p>
                <p className="text-primary font-semibold text-xs mt-2">{product}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Rating summary */}
        <div className="mt-16 text-center">
          <div className="inline-flex items-center gap-4 bg-card rounded-full px-8 py-4 shadow-sm border border-border">
            <Stars count={5} />
            <span className="font-black text-foreground text-lg">4.9 / 5</span>
            <span className="text-muted-foreground text-sm">basado en +2,000 reseñas</span>
          </div>
        </div>
      </div>
    </section>
  )
}
/**
 * ScrollingBand — yellow marquee band with flavor names
 * Hippeas-inspired design element
 */

const FLAVORS = [
  'NACHO',
  'FUEGO',
  'MEXICAN STREET CORN',
  'CHURRO',
  'ARROZ CON LECHE',
  'BOLD SABOR',
  'MAÍZ REAL',
  'SIN CERDO',
]

export const ScrollingBand = () => {
  const doubled = [...FLAVORS, ...FLAVORS]

  return (
    <div className="bg-secondary overflow-hidden py-5 border-y-2 border-secondary-foreground/15">
      <div className="flex whitespace-nowrap animate-marquee-fast">
        {doubled.map((item, i) => (
          <span
            key={i}
            className="inline-flex items-center shrink-0 mx-6 text-secondary-foreground font-black uppercase tracking-widest"
            style={{ fontSize: 'clamp(1.1rem, 2.5vw, 1.6rem)' }}
          >
            {item}
            <span className="ml-6 opacity-50 text-lg">✦</span>
          </span>
        ))}
      </div>
    </div>
  )
}
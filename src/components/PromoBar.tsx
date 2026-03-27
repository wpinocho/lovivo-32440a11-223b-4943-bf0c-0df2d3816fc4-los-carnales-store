/**
 * PromoBar — scrolling promotional top bar
 * Los Carnales brand — Hippeas-inspired design
 */

const PROMO_ITEMS = [
  '🌽 HECHO CON MAÍZ REAL',
  '🔥 SABORES MEXICANOS AUTÉNTICOS',
  '🚚 ENVÍO GRATIS EN PEDIDOS $50+',
  '💪 SIN CERDO · SIN GLUTEN',
  '🌶️ 5 SABORES ÚNICOS',
  '⭐ BOLD MEXICAN FLAVOR',
]

export const PromoBar = () => {
  const doubled = [...PROMO_ITEMS, ...PROMO_ITEMS]

  return (
    <div className="bg-primary text-primary-foreground overflow-hidden py-2.5 shrink-0">
      <div className="flex whitespace-nowrap animate-marquee">
        {doubled.map((item, i) => (
          <span
            key={i}
            className="inline-flex items-center shrink-0 mx-10 text-xs font-bold uppercase tracking-widest"
          >
            {item}
          </span>
        ))}
      </div>
    </div>
  )
}
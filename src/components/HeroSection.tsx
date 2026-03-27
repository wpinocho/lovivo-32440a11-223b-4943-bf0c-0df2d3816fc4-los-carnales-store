import { Link } from 'react-router-dom'
import { Button } from '@/components/ui/button'

const NACHO_BAG =
  'https://ptgmltivisbtvmoxwnhd.supabase.co/storage/v1/object/public/product-images/32440a11-223b-4943-bf0c-0df2d3816fc4/carnales-nacho.png'
const FUEGO_BAG =
  'https://ptgmltivisbtvmoxwnhd.supabase.co/storage/v1/object/public/product-images/32440a11-223b-4943-bf0c-0df2d3816fc4/carnales-fuego.png'
const CHURRO_BAG =
  'https://ptgmltivisbtvmoxwnhd.supabase.co/storage/v1/object/public/product-images/32440a11-223b-4943-bf0c-0df2d3816fc4/carnales-churro.png'

const TRUST_BADGES = [
  { emoji: '🌽', label: 'Maíz Real' },
  { emoji: '💪', label: 'Sin Cerdo' },
  { emoji: '🌾', label: 'Sin Gluten' },
  { emoji: '🤌', label: 'Auténtico' },
]

/**
 * HeroSection — full-screen Hippeas-style hero
 * Bold red background, floating product bags, massive headline
 */
export const HeroSection = () => {
  return (
    <section
      className="relative bg-primary overflow-hidden"
      style={{ minHeight: '92vh' }}
      aria-label="Hero — Los Carnales snacks"
    >
      {/* Polka-dot texture overlay */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.06]"
        style={{
          backgroundImage: 'radial-gradient(circle, white 1.5px, transparent 1.5px)',
          backgroundSize: '28px 28px',
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12 w-full h-full grid grid-cols-1 lg:grid-cols-2 gap-8 items-center py-16 lg:py-24">

        {/* ── Left: Text ── */}
        <div className="order-2 lg:order-1 flex flex-col justify-center">
          <p className="text-secondary font-black uppercase tracking-[0.35em] text-xs mb-5">
            ✦ El snack que habla Spanglish
          </p>

          <h1
            className="text-primary-foreground font-black uppercase leading-[0.88] mb-8"
            style={{ fontSize: 'clamp(3.2rem, 7.5vw, 7rem)' }}
          >
            BOLD.<br />
            <span className="text-secondary">SABOR.</span><br />
            GRANDE.
          </h1>

          <p className="text-primary-foreground/75 text-lg lg:text-xl mb-10 max-w-md leading-relaxed">
            Chicharrones y corn puffs de maíz real con sabores mexicanos auténticos.
            Sin cerdo. Puro sabor.
          </p>

          <div className="flex flex-wrap gap-4">
            <Link to="/#products">
              <Button
                size="lg"
                className="bg-secondary text-secondary-foreground hover:bg-secondary/90 font-black uppercase text-sm lg:text-base px-8 py-6 rounded-full shadow-lg"
              >
                COMPRAR AHORA →
              </Button>
            </Link>
            <Link to="/#products">
              <Button
                size="lg"
                variant="ghost"
                className="border-2 border-primary-foreground/60 text-primary-foreground hover:bg-primary-foreground/10 font-black uppercase text-sm lg:text-base px-8 py-6 rounded-full"
              >
                VER SABORES
              </Button>
            </Link>
          </div>

          {/* Trust badges */}
          <div className="flex flex-wrap gap-6 mt-12">
            {TRUST_BADGES.map(({ emoji, label }) => (
              <div
                key={label}
                className="flex items-center gap-2 text-primary-foreground/65 text-sm font-semibold"
              >
                <span>{emoji}</span>
                <span>{label}</span>
              </div>
            ))}
          </div>
        </div>

        {/* ── Right: Floating product bags ── */}
        <div className="order-1 lg:order-2 relative flex justify-center items-center"
             style={{ height: 'clamp(360px, 50vw, 580px)' }}>
          {/* Main bag — Nacho */}
          <img
            src={NACHO_BAG}
            alt="Chicharrón Nacho Los Carnales"
            fetchPriority="high"
            className="animate-float absolute z-20 drop-shadow-[0_30px_60px_rgba(0,0,0,0.45)]"
            style={{ width: 'clamp(200px, 28vw, 360px)', top: '8%', left: '18%' }}
          />
          {/* Secondary — Fuego */}
          <img
            src={FUEGO_BAG}
            alt="Chicharrón Fuego Los Carnales"
            loading="lazy"
            className="animate-float-delayed absolute z-10 drop-shadow-[0_20px_40px_rgba(0,0,0,0.35)]"
            style={{ width: 'clamp(130px, 18vw, 240px)', bottom: '4%', right: '4%' }}
          />
          {/* Accent — Churro */}
          <img
            src={CHURRO_BAG}
            alt="Corn Puff Churro Los Carnales"
            loading="lazy"
            className="animate-float-slow absolute z-10 drop-shadow-[0_16px_32px_rgba(0,0,0,0.3)]"
            style={{ width: 'clamp(100px, 14vw, 180px)', top: '2%', right: '2%' }}
          />
        </div>
      </div>

      {/* Wave divider */}
      <div className="absolute bottom-0 left-0 right-0 pointer-events-none">
        <svg viewBox="0 0 1440 72" xmlns="http://www.w3.org/2000/svg" className="w-full block">
          <path
            d="M0,50 C360,10 720,70 1080,30 C1260,10 1380,55 1440,35 L1440,72 L0,72 Z"
            className="fill-background"
          />
        </svg>
      </div>
    </section>
  )
}
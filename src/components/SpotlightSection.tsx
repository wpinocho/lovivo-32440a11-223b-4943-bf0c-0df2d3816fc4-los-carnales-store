import { Link } from 'react-router-dom'
import { Button } from '@/components/ui/button'

const FUEGO_BAG =
  'https://ptgmltivisbtvmoxwnhd.supabase.co/storage/v1/object/public/product-images/32440a11-223b-4943-bf0c-0df2d3816fc4/carnales-fuego.png'

/**
 * SpotlightSection — featured product highlight
 * Hippeas-inspired "Big Flavor Energy" section
 */
export const SpotlightSection = () => {
  return (
    <section
      className="bg-brand-dark overflow-hidden relative"
      aria-label="Producto destacado — Chicharrón Fuego"
    >
      {/* Decorative dots */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.05]"
        style={{
          backgroundImage: 'radial-gradient(circle, white 1.5px, transparent 1.5px)',
          backgroundSize: '28px 28px',
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12 grid grid-cols-1 lg:grid-cols-2 gap-0 items-center">

        {/* Left: Product image */}
        <div className="flex justify-center items-end py-10 lg:py-0">
          <img
            src={FUEGO_BAG}
            alt="Chicharrón Fuego Los Carnales — sabor más picante"
            loading="lazy"
            className="animate-float drop-shadow-[0_40px_80px_rgba(200,50,20,0.5)]"
            style={{ maxWidth: 'min(100%, 420px)' }}
          />
        </div>

        {/* Right: Text */}
        <div className="py-20 lg:py-24">
          <p className="text-secondary font-black uppercase tracking-widest text-xs mb-5">
            ✦ El más atrevido
          </p>
          <h2
            className="text-primary-foreground font-black uppercase leading-[0.88] mb-8"
            style={{ fontSize: 'clamp(2.8rem, 5.5vw, 5.5rem)' }}
          >
            BIG<br />
            <span className="text-primary">FUEGO</span><br />
            ENERGY.
          </h2>
          <p className="text-primary-foreground/65 text-lg mb-10 max-w-sm leading-relaxed">
            El Chicharrón Fuego trae el picante intenso de las especias mexicanas en cada mordida.
            Para los que viven sin límites.
          </p>
          <Link to="/productos/chicharrn-fuego">
            <Button
              size="lg"
              className="bg-primary text-primary-foreground hover:bg-primary/90 font-black uppercase px-10 py-6 rounded-full"
            >
              PROBAR FUEGO 🔥
            </Button>
          </Link>
        </div>
      </div>
    </section>
  )
}
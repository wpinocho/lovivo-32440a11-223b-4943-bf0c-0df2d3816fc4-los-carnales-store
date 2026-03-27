import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import { HeadlessNewsletter } from '@/components/headless/HeadlessNewsletter'
import { Mail } from 'lucide-react'

/**
 * EDITABLE UI COMPONENT - NewsletterSection
 * Los Carnales brand — bold Hippeas-inspired email signup
 */

export const NewsletterSection = () => {
  return (
    <HeadlessNewsletter>
      {(logic) => (
        <section className="bg-primary py-20 relative overflow-hidden" aria-label="Newsletter">
          {/* Dot texture */}
          <div
            className="pointer-events-none absolute inset-0 opacity-[0.07]"
            style={{
              backgroundImage: 'radial-gradient(circle, white 1.5px, transparent 1.5px)',
              backgroundSize: '28px 28px',
            }}
          />

          <div className="relative z-10 max-w-2xl mx-auto px-6 text-center">
            {logic.success ? (
              <div className="space-y-4">
                <div className="flex justify-center">
                  <div className="bg-primary-foreground/10 rounded-full p-4">
                    <Mail className="h-10 w-10 text-primary-foreground" />
                  </div>
                </div>
                <h3 className="text-primary-foreground font-black uppercase text-3xl">
                  ¡ÓRALE, CARNAL! 🌽
                </h3>
                <p className="text-primary-foreground/70 text-lg">
                  Ya eres parte del squad. Pronto recibirás ofertas exclusivas.
                </p>
              </div>
            ) : (
              <div className="space-y-8">
                <div>
                  <p className="text-secondary font-black uppercase tracking-widest text-xs mb-4">
                    ✦ Únete al squad
                  </p>
                  <h3
                    className="text-primary-foreground font-black uppercase leading-tight"
                    style={{ fontSize: 'clamp(2rem, 5vw, 3.5rem)' }}
                  >
                    15% OFF TU<br />
                    <span className="text-secondary">PRIMER PEDIDO</span>
                  </h3>
                  <p className="text-primary-foreground/65 text-base mt-4">
                    Suscríbete y sé el primero en saber de nuevos sabores y ofertas.
                  </p>
                </div>

                <form
                  onSubmit={(e) => {
                    e.preventDefault()
                    logic.handleSubscribe()
                  }}
                  className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto"
                >
                  <Input
                    type="email"
                    placeholder="tu@correo.com"
                    value={logic.email}
                    onChange={(e) => logic.setEmail(e.target.value)}
                    disabled={logic.isSubmitting}
                    required
                    className="flex-1 bg-primary-foreground/10 border-primary-foreground/30 text-primary-foreground placeholder:text-primary-foreground/40 focus:border-secondary rounded-full px-5"
                  />
                  <Button
                    type="submit"
                    disabled={logic.isSubmitting}
                    className="bg-secondary text-secondary-foreground hover:bg-secondary/90 font-black uppercase text-sm tracking-widest rounded-full px-8 shrink-0"
                  >
                    {logic.isSubmitting ? 'ENVIANDO...' : 'SUSCRIBIRME'}
                  </Button>
                </form>

                {logic.error && (
                  <p className="text-secondary text-sm font-semibold">{logic.error}</p>
                )}

                <p className="text-primary-foreground/40 text-xs">
                  Sin spam. Solo sabor. Puedes cancelar cuando quieras.
                </p>
              </div>
            )}
          </div>
        </section>
      )}
    </HeadlessNewsletter>
  )
}
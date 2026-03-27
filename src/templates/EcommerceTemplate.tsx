import { ReactNode } from 'react'
import { PageTemplate } from './PageTemplate'
import { BrandLogoLeft } from '@/components/BrandLogoLeft'
import { SocialLinks } from '@/components/SocialLinks'
import { FloatingCart } from '@/components/FloatingCart'
import { ProfileMenu } from '@/components/ProfileMenu'
import { PromoBar } from '@/components/PromoBar'
import { Link } from 'react-router-dom'
import { Button } from '@/components/ui/button'
import { ShoppingCart } from 'lucide-react'
import { useCartUISafe } from '@/components/CartProvider'
import { useCart } from '@/contexts/CartContext'
import { useCollections } from '@/hooks/useCollections'
import { ScrollLink } from '@/components/ScrollLink'

/**
 * EDITABLE TEMPLATE - EcommerceTemplate
 * Los Carnales brand — Hippeas-inspired layout
 */

interface EcommerceTemplateProps {
  children: ReactNode
  pageTitle?: string
  showCart?: boolean
  className?: string
  headerClassName?: string
  footerClassName?: string
  layout?: 'default' | 'full-width' | 'centered'
  hideFloatingCartOnMobile?: boolean
}

export const EcommerceTemplate = ({
  children,
  pageTitle,
  showCart = true,
  className,
  headerClassName,
  footerClassName,
  layout = 'default',
  hideFloatingCartOnMobile = false,
}: EcommerceTemplateProps) => {
  const cartUI = useCartUISafe()
  const openCart = cartUI?.openCart ?? (() => {})
  const { getTotalItems } = useCart()
  const totalItems = getTotalItems()
  const { hasCollections, loading: loadingCollections } = useCollections()

  /* ── Header ── */
  const header = (
    <div className={headerClassName}>
      {/* Promo bar */}
      <PromoBar />

      {/* Main nav */}
      <div className="bg-background border-b border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">

            {/* Logo */}
            <BrandLogoLeft />

            {/* Nav links — desktop */}
            <nav className="hidden md:flex items-center gap-8">
              {!loadingCollections && hasCollections && (
                <ScrollLink
                  to="/#collections"
                  className="text-foreground/60 hover:text-primary font-bold uppercase text-xs tracking-widest transition-colors"
                >
                  Colecciones
                </ScrollLink>
              )}
              <ScrollLink
                to="/#products"
                className="text-foreground/60 hover:text-primary font-bold uppercase text-xs tracking-widest transition-colors"
              >
                Productos
              </ScrollLink>
              <Link
                to="/blog"
                className="text-foreground/60 hover:text-primary font-bold uppercase text-xs tracking-widest transition-colors"
              >
                Blog
              </Link>
            </nav>

            {/* Right actions */}
            <div className="flex items-center gap-1">
              <ProfileMenu />

              {showCart && (
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={openCart}
                  className="relative"
                  aria-label="Ver carrito"
                >
                  <ShoppingCart className="h-5 w-5" />
                  {totalItems > 0 && (
                    <span className="absolute -top-1 -right-1 bg-primary text-primary-foreground text-[10px] font-black rounded-full h-5 w-5 flex items-center justify-center">
                      {totalItems > 99 ? '99+' : totalItems}
                    </span>
                  )}
                </Button>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Page title */}
      {pageTitle && (
        <div className="bg-background border-b border-border">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
            <h1 className="text-3xl font-black uppercase text-foreground">{pageTitle}</h1>
          </div>
        </div>
      )}
    </div>
  )

  /* ── Footer ── */
  const footer = (
    <div className={`bg-brand-dark py-16 ${footerClassName ?? ''}`}>
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">

          {/* Brand */}
          <div>
            <BrandLogoLeft dark />
            <p className="mt-4 text-primary-foreground/50 text-sm leading-relaxed max-w-xs">
              Chicharrones y corn puffs de maíz real con sabores mexicanos auténticos.
              Sin cerdo. Puro sabor.
            </p>
          </div>

          {/* Links */}
          <div>
            <h3 className="font-black uppercase tracking-widest text-xs text-primary-foreground/40 mb-5">
              Tienda
            </h3>
            <div className="space-y-3">
              {[
                { label: 'Todos los Productos', to: '/#products' },
                { label: 'Colecciones', to: '/#collections' },
                { label: 'Blog', to: '/blog' },
              ].map(({ label, to }) => (
                <Link
                  key={to}
                  to={to}
                  className="block text-primary-foreground/55 hover:text-secondary font-medium text-sm transition-colors"
                >
                  {label}
                </Link>
              ))}
            </div>
          </div>

          {/* Social */}
          <div>
            <h3 className="font-black uppercase tracking-widest text-xs text-primary-foreground/40 mb-5">
              Síguenos
            </h3>
            <SocialLinks />
          </div>
        </div>

        <div className="border-t border-primary-foreground/15 pt-8 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-primary-foreground/35 text-xs">
            © 2025 Los Carnales. Todos los derechos reservados.
          </p>
          <div className="flex gap-6">
            <a href="#" className="text-primary-foreground/35 hover:text-primary-foreground text-xs transition-colors">
              Privacidad
            </a>
            <a href="#" className="text-primary-foreground/35 hover:text-primary-foreground text-xs transition-colors">
              Términos
            </a>
          </div>
        </div>
      </div>
    </div>
  )

  return (
    <>
      <PageTemplate
        header={header}
        footer={footer}
        className={className}
        layout={layout}
      >
        {children}
      </PageTemplate>

      {showCart && <FloatingCart hideOnMobile={hideFloatingCartOnMobile} />}
    </>
  )
}
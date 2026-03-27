import { Link } from 'react-router-dom'
import { Button } from '@/components/ui/button'
import { ProductCard } from '@/components/ProductCard'
import { FloatingCart } from '@/components/FloatingCart'
import { EcommerceTemplate } from '@/templates/EcommerceTemplate'
import { HeroSection } from '@/components/HeroSection'
import { ScrollingBand } from '@/components/ScrollingBand'
import { WhySection } from '@/components/WhySection'
import { SpotlightSection } from '@/components/SpotlightSection'
import { TestimonialsSection } from '@/components/TestimonialsSection'
import { NewsletterSection } from '@/components/NewsletterSection'
import { BundleCard } from '@/components/ui/BundleCard'
import { useBundles } from '@/hooks/useBundles'
import type { UseIndexLogicReturn } from '@/components/headless/HeadlessIndex'

/**
 * EDITABLE UI - IndexUI
 * Los Carnales — Hippeas-inspired homepage layout
 */

interface IndexUIProps {
  logic: UseIndexLogicReturn
}

export const IndexUI = ({ logic }: IndexUIProps) => {
  const {
    collections,
    loading,
    loadingCollections,
    selectedCollectionId,
    filteredProducts,
    handleViewCollectionProducts,
    handleShowAllProducts,
  } = logic

  const { bundles, loading: loadingBundles } = useBundles()

  return (
    <EcommerceTemplate showCart layout="full-width">

      {/* ── 1. Hero ── */}
      <HeroSection />

      {/* ── 2. Scrolling flavor band ── */}
      <ScrollingBand />

      {/* ── 3. Collections ── */}
      {loadingCollections ? null : collections.length > 0 ? (
        <section id="collections" className="py-20 bg-muted/40">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="text-center mb-12">
              <p className="text-primary font-black uppercase tracking-widest text-xs mb-3">
                Explora
              </p>
              <h2
                className="text-foreground font-black uppercase"
                style={{ fontSize: 'clamp(2rem, 4.5vw, 3.5rem)' }}
              >
                NUESTRAS <span className="text-primary">COLECCIONES</span>
              </h2>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 max-w-3xl mx-auto">
              {collections.map((collection) => (
                <button
                  key={collection.id}
                  onClick={() => handleViewCollectionProducts(collection.id)}
                  className="group relative overflow-hidden rounded-3xl aspect-[4/3] cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-primary"
                  aria-label={`Ver productos de ${collection.name}`}
                >
                  {collection.image ? (
                    <img
                      src={collection.image}
                      alt={collection.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  ) : (
                    <div className="w-full h-full bg-muted flex items-center justify-center" />
                  )}
                  {/* Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-brand-dark/80 via-brand-dark/20 to-transparent" />
                  <div className="absolute bottom-0 left-0 right-0 p-6 text-left">
                    <h3 className="text-primary-foreground font-black uppercase text-xl leading-tight mb-2">
                      {collection.name}
                    </h3>
                    {collection.description && (
                      <p className="text-primary-foreground/70 text-sm line-clamp-2">
                        {collection.description}
                      </p>
                    )}
                    <span className="mt-3 inline-block text-secondary font-black uppercase text-xs tracking-widest">
                      VER PRODUCTOS →
                    </span>
                  </div>
                </button>
              ))}
            </div>
          </div>
        </section>
      ) : null}

      {/* ── 4. Bundles ── */}
      {!loadingBundles && bundles.length > 0 && (
        <section id="bundles" className="py-20 bg-background">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2
                className="text-foreground font-black uppercase"
                style={{ fontSize: 'clamp(2rem, 4.5vw, 3.5rem)' }}
              >
                PAQUETES <span className="text-primary">ESPECIALES</span>
              </h2>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {bundles.map((bundle) => (
                <BundleCard key={bundle.id} bundle={bundle} />
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ── 5. Products ── */}
      <section id="products" className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">

          {/* Section header */}
          <div className="flex items-end justify-between mb-12 gap-6 flex-wrap">
            <div>
              <p className="text-primary font-black uppercase tracking-widest text-xs mb-3">
                {selectedCollectionId ? 'Colección' : 'Todo el catálogo'}
              </p>
              <h2
                className="text-foreground font-black uppercase leading-tight"
                style={{ fontSize: 'clamp(2rem, 4.5vw, 3.5rem)' }}
              >
                {selectedCollectionId
                  ? collections.find((c) => c.id === selectedCollectionId)?.name?.toUpperCase() ?? 'COLECCIÓN'
                  : (
                    <>TODOS LOS <span className="text-primary">SABORES</span></>
                  )}
              </h2>
            </div>
            {selectedCollectionId && (
              <Button
                variant="outline"
                onClick={handleShowAllProducts}
                className="font-black uppercase text-xs tracking-widest border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground rounded-full px-6"
              >
                VER TODOS →
              </Button>
            )}
          </div>

          {/* Grid */}
          {loading ? (
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-6">
              {Array.from({ length: 5 }).map((_, i) => (
                <div key={i} className="bg-muted rounded-3xl aspect-square animate-pulse" />
              ))}
            </div>
          ) : filteredProducts.length > 0 ? (
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-6">
              {filteredProducts.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          ) : (
            <div className="text-center py-20">
              <p className="text-muted-foreground font-medium">
                No hay productos disponibles.
              </p>
            </div>
          )}
        </div>
      </section>

      {/* ── 6. Why Los Carnales ── */}
      <WhySection />

      {/* ── 7. Spotlight — Fuego ── */}
      <SpotlightSection />

      {/* ── 8. Testimonials ── */}
      <TestimonialsSection />

      {/* ── 9. Newsletter ── */}
      <NewsletterSection />

      <FloatingCart />
    </EcommerceTemplate>
  )
}
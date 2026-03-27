import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Link } from "react-router-dom"
import { HeadlessProductCard } from "@/components/headless/HeadlessProductCard"
import { PriceRuleBadge } from "@/components/ui/PriceRuleBadge"
import { usePriceRules } from "@/hooks/usePriceRules"
import type { Product } from "@/lib/supabase"

/**
 * EDITABLE UI COMPONENT - ProductCardUI
 * Los Carnales brand — clean, bold product card
 */

interface ProductCardUIProps {
  product: Product
}

export const ProductCardUI = ({ product }: ProductCardUIProps) => {
  const { getRulesForProduct } = usePriceRules()
  const productRules = getRulesForProduct(product.id)

  return (
    <HeadlessProductCard product={product}>
      {(logic) => (
        <Card className="bg-card border border-border overflow-hidden group hover:shadow-lg transition-shadow duration-300 rounded-2xl">
          <CardContent className="p-0">
            {/* Image */}
            <Link to={`/productos/${logic.product.slug}`} className="block">
              <div className="relative bg-muted overflow-hidden rounded-t-2xl" style={{ aspectRatio: '1/1' }}>
                {(logic.matchingVariant?.image || (logic.product.images && logic.product.images.length > 0)) ? (
                  <>
                    <img
                      src={
                        logic.matchingVariant?.image_urls?.[0] ||
                        (logic.matchingVariant?.image as string | undefined) ||
                        logic.product.images![0]
                      }
                      alt={logic.product.title}
                      loading="lazy"
                      decoding="async"
                      className={`w-full h-full object-contain transition-all duration-300 group-hover:scale-105 ${
                        logic.product.images && logic.product.images.length > 1 &&
                        !logic.matchingVariant?.image && !logic.matchingVariant?.image_urls?.[0]
                          ? 'group-hover:opacity-0'
                          : ''
                      }`}
                    />
                    {logic.product.images && logic.product.images.length > 1 &&
                      !logic.matchingVariant?.image && !logic.matchingVariant?.image_urls?.[0] && (
                        <img
                          src={logic.product.images[1]}
                          alt={`${logic.product.title} — alternativa`}
                          loading="lazy"
                          decoding="async"
                          className="absolute inset-0 w-full h-full object-contain opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                        />
                      )}
                  </>
                ) : (
                  <div className="w-full h-full flex items-center justify-center text-muted-foreground text-xs">
                    Sin imagen
                  </div>
                )}

                {/* Badges */}
                {(() => {
                  const badges: React.ReactNode[] = []
                  if (logic.discountPercentage) {
                    badges.push(
                      <span key="discount" className="bg-destructive text-destructive-foreground text-[10px] px-2 py-0.5 rounded-full font-black">
                        -{logic.discountPercentage}%
                      </span>
                    )
                  }
                  if (!logic.inStock) {
                    badges.push(
                      <span key="oos" className="bg-muted text-muted-foreground text-[10px] px-2 py-0.5 rounded-full font-bold">
                        Agotado
                      </span>
                    )
                  }
                  for (const rule of productRules.filter(r => r.rule_type === 'volume' || r.rule_type === 'bogo')) {
                    if (badges.length >= 2) break
                    badges.push(<PriceRuleBadge key={rule.id} rule={rule} />)
                  }
                  if (badges.length === 0) return null
                  return (
                    <div className="absolute top-2 left-2 flex flex-col gap-1">
                      {badges.slice(0, 2)}
                    </div>
                  )
                })()}
              </div>
            </Link>

            {/* Info */}
            <div className="p-4">
              <Link to={`/productos/${logic.product.slug}`}>
                <h3 className="text-card-foreground font-black text-sm mb-1 line-clamp-2 uppercase leading-tight">
                  {logic.product.title}
                </h3>
                {logic.product.description && (
                  <p className="text-muted-foreground text-xs mb-3 line-clamp-2">
                    {logic.product.description.replace(/<[^>]*>/g, '')}
                  </p>
                )}
              </Link>

              {/* Variants */}
              {logic.hasVariants && logic.options && (
                <div className="mb-3 space-y-2">
                  {logic.options.map((opt) => (
                    <div key={opt.id}>
                      <div className="text-xs font-bold text-foreground mb-1 uppercase tracking-wide">{opt.name}</div>
                      <div className="flex flex-wrap gap-1.5">
                        {opt.values
                          .filter((val) => logic.isOptionValueAvailable(opt.name, val))
                          .map((val) => {
                            const isSelected = logic.selected[opt.name] === val
                            const swatch = opt.name.toLowerCase() === 'color' ? opt.swatches?.[val] : undefined

                            if (swatch) {
                              return (
                                <button
                                  key={val}
                                  type="button"
                                  onClick={() => logic.handleOptionChange(opt.name, val)}
                                  title={`${opt.name}: ${val}`}
                                  aria-label={`${opt.name}: ${val}`}
                                  className={`h-6 w-6 rounded-full border-2 transition-all ${
                                    isSelected ? 'border-primary scale-110' : 'border-border'
                                  } ${logic.selected[opt.name] && !isSelected ? 'opacity-40' : ''}`}
                                  style={{ backgroundColor: swatch }}
                                />
                              )
                            }

                            return (
                              <button
                                key={val}
                                type="button"
                                onClick={() => logic.handleOptionChange(opt.name, val)}
                                aria-pressed={isSelected}
                                aria-label={`${opt.name}: ${val}`}
                                className={`border rounded-lg px-2 py-1 text-[10px] font-bold uppercase transition-all ${
                                  isSelected
                                    ? 'border-primary bg-primary text-primary-foreground'
                                    : logic.selected[opt.name] && !isSelected
                                    ? 'border-border bg-background text-muted-foreground opacity-40'
                                    : 'border-border bg-background text-foreground hover:border-primary'
                                }`}
                              >
                                {val}
                              </button>
                            )
                          })}
                      </div>
                    </div>
                  ))}
                </div>
              )}

              {/* Price + CTA */}
              <div className="flex items-center justify-between mt-2">
                <div className="flex flex-col">
                  <span className="text-foreground font-black text-base">
                    {logic.formatMoney(logic.currentPrice)}
                  </span>
                  {logic.currentCompareAt && logic.currentCompareAt > logic.currentPrice && (
                    <span className="text-muted-foreground text-xs line-through">
                      {logic.formatMoney(logic.currentCompareAt)}
                    </span>
                  )}
                </div>
                <Button
                  size="sm"
                  onClick={() => {
                    logic.onAddToCartSuccess()
                    logic.handleAddToCart()
                  }}
                  disabled={!logic.canAddToCart}
                  className="bg-primary text-primary-foreground hover:bg-primary/90 font-black uppercase text-[10px] tracking-widest rounded-full px-4 disabled:opacity-50"
                >
                  {logic.inStock ? 'AGREGAR' : 'AGOTADO'}
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>
      )}
    </HeadlessProductCard>
  )
}
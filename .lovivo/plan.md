# Store Plan
(This file is automatically updated by Lovivo AI to maintain context across sessions)

## Current State
Los Carnales snack brand homepage — fully built, Hippeas.com-inspired layout.

## Brand
- **Name:** Los Carnales
- **Type:** Mexican snack brand — corn chicharrones & corn puffs
- **Logo:** `/public/logo.png` (lucha libre mask + bold text, generated with flux.pro)
- **Colors:** Brand red (#C4341A), golden yellow (#F2A415), Mexican green (#2C9149), cream bg, dark footer
- **Fonts:** Montserrat Black for headings, Poppins for body

## Products Created (in DB)
| Title | ID |
|---|---|
| Chicharrón Nacho | 7cbd377b-d015-47cb-bbb6-6607ffe08976 |
| Chicharrón Fuego | bd6e88ec-ed6b-4f8e-a9d2-564746ae8868 |
| Chicharrón Mexican Street Corn | 95807f1b-afbc-412a-8008-66857f4da0b3 |
| Corn Puff Churro | 0820b403-867f-4760-91fb-9766785ddd74 |
| Corn Puff Arroz con Leche | b91326b8-095a-4d47-b323-4f3841b667ed |

## Collections Created
- **Chicharrones de Maíz** (id: d86a5900-f1e2-4056-bedc-25c697d24ea0) — Nacho, Fuego, Street Corn
- **Corn Puffs Dulces** (id: 11cfca3f-8ef8-4dfe-8fc1-514ec7b7310e) — Churro, Arroz con Leche

## Recent Changes (Session 1)
- Built complete Hippeas-inspired homepage
- Created design system: Los Carnales brand colors (red/yellow/green/cream/dark)
- Google Fonts: Montserrat + Poppins loaded via @import in index.css
- New components: PromoBar, HeroSection, ScrollingBand, WhySection, SpotlightSection, TestimonialsSection
- Updated: EcommerceTemplate (PromoBar + new nav/footer), BrandLogoLeft, IndexUI, ProductCardUI, NewsletterSection, PageTemplate (full-width no py-6)
- Generated hero image: `/public/carnales-hero.jpg`
- Generated 5 product images (in Supabase storage)
- Generated logo: `/public/logo.png`

## Homepage Layout (Hippeas-style)
1. PromoBar (scrolling red marquee)
2. Nav (white, logo + links + cart)
3. HeroSection (red bg, floating bags, bold BOLD.SABOR.GRANDE. headline)
4. ScrollingBand (yellow marquee with flavor names)
5. Collections section (2-col card grid)
6. Products section (5-col grid, "TODOS LOS SABORES")
7. WhySection (3 colored feature cards)
8. SpotlightSection (dark bg, Fuego product feature)
9. TestimonialsSection (3 reviews + rating badge)
10. NewsletterSection (red bg, "15% OFF" offer)
11. Footer (brand-dark bg)

## Future Sessions / TODO
- Mobile hamburger menu (currently hidden on mobile, just logo + cart)
- Product detail page — update ProductPageUI with brand styling
- Blog page branding
- Cart/Checkout branding updates
- Real product images (replace AI-generated with actual Los Carnales packaging)
- Find a Store page (if needed)
- Scroll animations / intersection observer for fade-in effects
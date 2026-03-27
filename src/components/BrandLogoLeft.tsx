interface BrandLogoLeftProps {
  /** If true, renders the light (white text) version for dark backgrounds */
  dark?: boolean
}

export const BrandLogoLeft = ({ dark = false }: BrandLogoLeftProps) => {
  if (dark) {
    return (
      <a href="/" aria-label="Los Carnales — Inicio" className="flex items-center">
        <span
          className="font-black uppercase tracking-tight text-secondary"
          style={{ fontFamily: 'Montserrat, sans-serif', fontSize: '1.5rem', letterSpacing: '-0.02em' }}
        >
          LOS <span className="text-primary-foreground">CARNALES</span>
        </span>
      </a>
    )
  }

  return (
    <a href="/" aria-label="Los Carnales — Inicio" className="flex items-center">
      <img
        src="/logo.png"
        alt="Los Carnales"
        className="h-11 w-auto object-contain"
        onError={(e) => {
          e.currentTarget.style.display = 'none'
          const span = document.createElement('span')
          span.style.fontFamily = 'Montserrat, sans-serif'
          span.style.fontWeight = '900'
          span.style.fontSize = '1.4rem'
          span.style.color = 'hsl(8, 75%, 44%)'
          span.style.textTransform = 'uppercase'
          span.textContent = 'LOS CARNALES'
          e.currentTarget.parentElement?.appendChild(span)
        }}
      />
    </a>
  )
}
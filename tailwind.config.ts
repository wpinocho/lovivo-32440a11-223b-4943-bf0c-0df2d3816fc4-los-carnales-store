import type { Config } from "tailwindcss";

export default {
	darkMode: ["class"],
	content: [
		"./pages/**/*.{ts,tsx}",
		"./components/**/*.{ts,tsx}",
		"./app/**/*.{ts,tsx}",
		"./src/**/*.{ts,tsx}",
	],
	prefix: "",
	theme: {
		container: {
			center: true,
			padding: '2rem',
			screens: {
				'2xl': '1400px'
			}
		},
		extend: {
			fontFamily: {
				sans: ['Poppins', 'sans-serif'],
				display: ['Montserrat', 'sans-serif'],
				'dm-sans': ['"DM Sans"', 'sans-serif'],
				'inter': ['Inter', 'sans-serif'],
				'lato': ['Lato', 'sans-serif'],
				'lora': ['Lora', 'serif'],
				'merriweather': ['Merriweather', 'serif'],
				'montserrat': ['Montserrat', 'sans-serif'],
				'nunito': ['Nunito', 'sans-serif'],
				'open-sans': ['"Open Sans"', 'sans-serif'],
				'playfair': ['"Playfair Display"', 'serif'],
				'jakarta': ['"Plus Jakarta Sans"', 'sans-serif'],
				'poppins': ['Poppins', 'sans-serif'],
				'raleway': ['Raleway', 'sans-serif'],
				'roboto': ['Roboto', 'sans-serif'],
				'space-grotesk': ['"Space Grotesk"', 'sans-serif'],
				'work-sans': ['"Work Sans"', 'sans-serif'],
			},
			colors: {
				border: 'hsl(var(--border))',
				input: 'hsl(var(--input))',
				ring: 'hsl(var(--ring))',
				background: 'hsl(var(--background))',
				foreground: 'hsl(var(--foreground))',
				primary: {
					DEFAULT: 'hsl(var(--primary))',
					foreground: 'hsl(var(--primary-foreground))'
				},
				secondary: {
					DEFAULT: 'hsl(var(--secondary))',
					foreground: 'hsl(var(--secondary-foreground))'
				},
				destructive: {
					DEFAULT: 'hsl(var(--destructive))',
					foreground: 'hsl(var(--destructive-foreground))'
				},
				muted: {
					DEFAULT: 'hsl(var(--muted))',
					foreground: 'hsl(var(--muted-foreground))'
				},
				accent: {
					DEFAULT: 'hsl(var(--accent))',
					foreground: 'hsl(var(--accent-foreground))'
				},
				popover: {
					DEFAULT: 'hsl(var(--popover))',
					foreground: 'hsl(var(--popover-foreground))'
				},
				card: {
					DEFAULT: 'hsl(var(--card))',
					foreground: 'hsl(var(--card-foreground))'
				},
				brand: {
					red:    'hsl(var(--brand-red))',
					yellow: 'hsl(var(--brand-yellow))',
					green:  'hsl(var(--brand-green))',
					orange: 'hsl(var(--brand-orange))',
					cream:  'hsl(var(--brand-cream))',
					dark:   'hsl(var(--brand-dark))',
				},
				sidebar: {
					DEFAULT: 'hsl(var(--sidebar-background))',
					foreground: 'hsl(var(--sidebar-foreground))',
					primary: 'hsl(var(--sidebar-primary))',
					'primary-foreground': 'hsl(var(--sidebar-primary-foreground))',
					accent: 'hsl(var(--sidebar-accent))',
					'accent-foreground': 'hsl(var(--sidebar-accent-foreground))',
					border: 'hsl(var(--sidebar-border))',
					ring: 'hsl(var(--sidebar-ring))'
				}
			},
			borderRadius: {
				lg: 'var(--radius)',
				md: 'calc(var(--radius) - 2px)',
				sm: 'calc(var(--radius) - 4px)'
			},
			keyframes: {
				'accordion-down': {
					from: { height: '0' },
					to:   { height: 'var(--radix-accordion-content-height)' }
				},
				'accordion-up': {
					from: { height: 'var(--radix-accordion-content-height)' },
					to:   { height: '0' }
				},
				marquee: {
					from: { transform: 'translateX(0)' },
					to:   { transform: 'translateX(-50%)' },
				},
				float: {
					'0%, 100%': { transform: 'translateY(0px) rotate(-1.5deg)' },
					'50%':      { transform: 'translateY(-18px) rotate(1.5deg)' },
				},
				'float-delayed': {
					'0%, 100%': { transform: 'translateY(0px) rotate(1deg)' },
					'50%':      { transform: 'translateY(-14px) rotate(-1deg)' },
				},
			},
			animation: {
				'accordion-down': 'accordion-down 0.2s ease-out',
				'accordion-up':   'accordion-up 0.2s ease-out',
				marquee:          'marquee 35s linear infinite',
				'marquee-fast':   'marquee 18s linear infinite',
				float:            'float 5s ease-in-out infinite',
				'float-delayed':  'float-delayed 6s ease-in-out 1.5s infinite',
				'float-slow':     'float-delayed 7s ease-in-out 0.8s infinite',
			}
		}
	},
	plugins: [require("tailwindcss-animate")],
} satisfies Config;
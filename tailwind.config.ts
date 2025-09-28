import type { Config } from "tailwindcss";

export default {
	darkMode: ["class"],
	content: [
		"./pages/**/*.{ts,tsx}",
		"./components/**/*.{ts,tsx}",
		"./app/**/*.{ts,tsx}",
		"./src/**/*.{ts,tsx}"
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
			colors: {
				border: 'hsl(var(--border))',
				input: 'hsl(var(--input))',
				ring: 'hsl(var(--ring))',
				background: 'hsl(var(--background))',
				foreground: 'hsl(var(--foreground))',
				primary: {
					DEFAULT: '#0EA5E9',
					foreground: '#ffffff'
				},
				secondary: {
					DEFAULT: '#1a1a1a',
					foreground: '#ffffff'
				},
				destructive: {
					DEFAULT: 'hsl(var(--destructive))',
					foreground: 'hsl(var(--destructive-foreground))'
				},
				muted: {
					DEFAULT: '#f8f8f8',
					foreground: '#4f4f4f'
				},
				accent: {
					DEFAULT: '#0EA5E9',
					foreground: '#ffffff'
				},
				popover: {
					DEFAULT: 'hsl(var(--popover))',
					foreground: 'hsl(var(--popover-foreground))'
				},
				card: {
					DEFAULT: '#ffffff',
					foreground: '#1a1a1a'
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
					from: {
						height: '0'
					},
					to: {
						height: 'var(--radix-accordion-content-height)'
					}
				},
				'accordion-up': {
					from: {
						height: 'var(--radix-accordion-content-height)'
					},
					to: {
						height: '0'
					}
				},
				'fade-in': {
					'0%': { opacity: '0', transform: 'translateY(10px)' },
					'100%': { opacity: '1', transform: 'translateY(0)' }
				},
				'scale-in': {
					'0%': { transform: 'scale(0.95)', opacity: '0' },
					'100%': { transform: 'scale(1)', opacity: '1' }
				},
				'slide-up': {
					'0%': { transform: 'translateY(50px)', opacity: '0' },
					'100%': { transform: 'translateY(0)', opacity: '1' }
				},
				'slide-in-left': {
					'0%': { transform: 'translateX(-50px)', opacity: '0' },
					'100%': { transform: 'translateX(0)', opacity: '1' }
				},
				'float': {
					'0%, 100%': { transform: 'translateY(0px)' },
					'50%': { transform: 'translateY(-10px)' }
				},
				'pulse-glow': {
					'0%, 100%': { boxShadow: '0 0 20px rgba(59, 130, 246, 0.5)' },
					'50%': { boxShadow: '0 0 40px rgba(59, 130, 246, 0.8)' }
				},
				'text-shimmer': {
					'0%': { backgroundPosition: '-200% center' },
					'100%': { backgroundPosition: '200% center' }
				},
				'blue-glow': {
					'0%, 100%': { boxShadow: '0 0 30px rgba(14, 165, 233, 0.3), 0 0 60px rgba(14, 165, 233, 0.1)' },
					'50%': { boxShadow: '0 0 40px rgba(14, 165, 233, 0.5), 0 0 80px rgba(14, 165, 233, 0.2)' }
				},
				'bg-shift': {
					'0%': { backgroundPosition: '0% 50%' },
					'50%': { backgroundPosition: '100% 50%' },
					'100%': { backgroundPosition: '0% 50%' }
				}
			},
			animation: {
				'accordion-down': 'accordion-down 0.2s ease-out',
				'accordion-up': 'accordion-up 0.2s ease-out',
				'fade-in': 'fade-in 0.3s ease-out',
				'scale-in': 'scale-in 0.2s ease-out',
				'slide-up': 'slide-up 0.6s ease-out',
				'slide-in-left': 'slide-in-left 0.6s ease-out',
				'float': 'float 3s ease-in-out infinite',
				'pulse-glow': 'pulse-glow 2s ease-in-out infinite',
				'text-shimmer': 'text-shimmer 2s ease-in-out infinite',
				'blue-glow': 'blue-glow 3s ease-in-out infinite',
				'bg-shift': 'bg-shift 20s ease-in-out infinite'
			},
			fontFamily: {
				'heading': ['Montserrat', 'sans-serif'],
				'body': ['Open Sans', 'sans-serif']
			},
			backgroundImage: {
				'gradient-dark': 'radial-gradient(ellipse 800px 600px at 20% 40%, rgba(14, 165, 233, 0.15) 0%, transparent 50%), radial-gradient(ellipse 600px 400px at 80% 20%, rgba(59, 130, 246, 0.1) 0%, transparent 60%), radial-gradient(ellipse 500px 300px at 60% 80%, rgba(14, 165, 233, 0.08) 0%, transparent 70%), linear-gradient(180deg, #000000 0%, #0f172a 100%)',
				'gradient-text': 'linear-gradient(135deg, #fbbf24 0%, #f59e0b 25%, #d97706 50%, #b45309 75%, #92400e 100%)',
				'gradient-blue': 'linear-gradient(135deg, #0ea5e9 0%, #0284c7 50%, #0369a1 100%)',
				'gradient-gold': 'linear-gradient(135deg, #fbbf24 0%, #f59e0b 50%, #d97706 100%)',
				'gradient-gold-glow': 'linear-gradient(135deg, #fbbf24 0%, #f59e0b 50%, #d97706 100%)'
			},
			backgroundSize: {
				'200': '200% 200%'
			},
			scale: {
				'102': '1.02'
			}
		}
	},
	plugins: [require("tailwindcss-animate")],
} satisfies Config;
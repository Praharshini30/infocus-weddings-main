/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        bg: '#050504',
        'bg-soft': '#0b0a08',
        panel: '#11100d',
        gold: '#c99b56',
        'gold-soft': '#e4c17e',
        'gold-dark': '#765127',
        text: '#fff6e8',
        muted: 'rgba(255, 246, 232, 0.72)',
        faint: 'rgba(255, 246, 232, 0.48)',
        line: 'rgba(201, 155, 86, 0.28)',
        'line-soft': 'rgba(255, 246, 232, 0.11)',
        // Portfolio specific variables mapped to theme
        'pf-bg': '#050505',
        'pf-surface': '#0c0c0c',
        'pf-card': '#111111',
        'pf-gold': '#c9a46a',
        'pf-gold-dark': '#b88a44',
        'pf-text': '#f5f0e8',
        'pf-muted': '#b8b1a7',
        'pf-border': 'rgba(201, 164, 106, 0.2)',
      },
      fontFamily: {
        display: ['"Bodoni 72"', 'Didot', '"Bodoni MT"', '"Libre Bodoni"', '"Cormorant Garamond"', 'Georgia', '"Times New Roman"', 'serif'],
        serif: ['"Cormorant Garamond"', 'Georgia', '"Times New Roman"', 'serif'],
        sans: ['"Inter"', '"Avenir Next"', 'Arial', 'sans-serif'],
        'pf-serif': ['"Playfair Display"', '"Cormorant Garamond"', 'Georgia', 'serif'],
        'pf-sans': ['"Inter"', 'Arial', 'sans-serif'],
      },
      screens: {
        'max-1320': {'max': '1320px'},
        'max-1200': {'max': '1200px'},
        'max-1180': {'max': '1180px'},
        'max-1080': {'max': '1080px'},
        'max-980': {'max': '980px'},
        'max-900': {'max': '900px'},
        'max-780': {'max': '780px'},
        'max-768': {'max': '768px'},
        'max-680': {'max': '680px'},
        'max-640': {'max': '640px'},
        'max-620': {'max': '620px'},
        'max-560': {'max': '560px'},
      },
      keyframes: {
        heroFadeZoom: {
          '0%': { opacity: '0', transform: 'scale(1)' },
          '3%, 12.5%': { opacity: '1' },
          '16%, 100%': { opacity: '0', transform: 'scale(1.075)' },
        },
        pfHeroZoom: {
          'from': { transform: 'scale(1)' },
          'to': { transform: 'scale(1.06)' },
        },
        pfFadeIn: {
          'from': { opacity: '0' },
          'to': { opacity: '1' },
        },
        pfScaleUp: {
          'from': { opacity: '0', transform: 'scale(0.92)' },
          'to': { opacity: '1', transform: 'scale(1)' },
        },
      },
      animation: {
        'hero-fade-zoom': 'heroFadeZoom 18s ease-in-out infinite alternate',
        'pf-hero-zoom': 'pfHeroZoom 18s ease-in-out infinite alternate',
        'pf-fade-in': 'pfFadeIn 0.3s ease forwards',
        'pf-scale-up': 'pfScaleUp 0.3s cubic-bezier(0.16, 1, 0.3, 1) forwards',
      },
      maxWidth: {
        'pf-max': '1480px',
        'max': '1240px',
      }
    },
  },
  plugins: [],
}

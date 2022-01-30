const lineClamp = require('@tailwindcss/line-clamp')
const defaultTheme = require('tailwindcss/defaultTheme')
const plugin = require('tailwindcss/plugin')

// Calculates ideal letterSpacing for a given font size
function dynamicTracking(fontSize) {
  const a = -0.0223
  const b = 0.135 // 0.185 default
  const c = -0.1745
  // tracking = a + b * e ^ (c * fontSize)
  const value = a + b * Math.E ** (c * (fontSize * 16))

  return `${value.toFixed(3)}em`
}

const clip = plugin(({ addUtilities }) => {
  addUtilities({
    '.clip-header': {
      'clip-path': 'url(#clipHeader)',
    },
    '.texture': {
      maskImage: `url(
        "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25'%3E%3Cdefs%3E%3Cpattern id='p' width='100' height='100' patternUnits='userSpaceOnUse' patternTransform='scale(0.25)'%3E%3Ccircle data-color='outline' fill='none' stroke='%23FFF' stroke-width='25' cx='50' cy='50' r='.5'%3E%3C/circle%3E%3C/pattern%3E%3C/defs%3E%3Crect fill='url(%23p)' width='100%25' height='100%25'%3E%3C/rect%3E%3C/svg%3E"
      )`,
    },
  })
})

module.exports = {
  content: ['./app/**/*.{ts,tsx}'],
  theme: {
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      overlay: {
        1: 'var(--overlay1)',
      },
      primary: {
        1: 'var(--blue1)',
        2: 'var(--blue2)',
        3: 'var(--blue3)',
        4: 'var(--blue4)',
        5: 'var(--blue5)',
        6: 'var(--blue6)',
        7: 'var(--blue7)',
        8: 'var(--blue8)',
        9: 'var(--blue9)',
        10: 'var(--blue10)',
        11: 'var(--blue11)',
        12: 'var(--blue12)',
      },
      accent: {
        1: 'var(--violet1)',
        2: 'var(--violet2)',
        3: 'var(--violet3)',
        4: 'var(--violet4)',
        5: 'var(--violet5)',
        6: 'var(--violet6)',
        7: 'var(--violet7)',
        8: 'var(--violet8)',
        9: 'var(--violet9)',
        10: 'var(--violet10)',
        11: 'var(--violet11)',
        12: 'var(--violet12)',
      },
      danger: {
        1: 'var(--tomato1)',
        2: 'var(--tomato2)',
        3: 'var(--tomato3)',
        4: 'var(--tomato4)',
        5: 'var(--tomato5)',
        6: 'var(--tomato6)',
        7: 'var(--tomato7)',
        8: 'var(--tomato8)',
        9: 'var(--tomato9)',
        10: 'var(--tomato10)',
        11: 'var(--tomato11)',
        12: 'var(--tomato12)',
      },
      slate: {
        1: 'var(--slate1)',
        2: 'var(--slate2)',
        3: 'var(--slate3)',
        4: 'var(--slate4)',
        5: 'var(--slate5)',
        6: 'var(--slate6)',
        7: 'var(--slate7)',
        8: 'var(--slate8)',
        9: 'var(--slate9)',
        10: 'var(--slate10)',
        11: 'var(--slate11)',
        12: 'var(--slate12)',
      },
    },
    fontSize: {
      xs: [
        '0.75rem',
        { lineHeight: '1rem', letterSpacing: dynamicTracking(0.75) },
      ],
      sm: [
        '0.875rem',
        { lineHeight: '1.25rem', letterSpacing: dynamicTracking(1.25) },
      ],
      base: [
        '1rem',
        { lineHeight: '1.5rem', letterSpacing: dynamicTracking(1) },
      ],
      lg: [
        '1.125rem',
        { lineHeight: '1.75rem', letterSpacing: dynamicTracking(1.125) },
      ],
      xl: [
        '1.25rem',
        { lineHeight: '1.75rem', letterSpacing: dynamicTracking(1.75) },
      ],
      '2xl': [
        '1.5rem',
        { lineHeight: '2rem', letterSpacing: dynamicTracking(1.5) },
      ],
      '3xl': [
        '1.875rem',
        { lineHeight: '2.25rem', letterSpacing: dynamicTracking(1.875) },
      ],
      '4xl': [
        '2.25rem',
        { lineHeight: '2.5rem', letterSpacing: dynamicTracking(2.25) },
      ],
      '5xl': ['3rem', { lineHeight: '1', letterSpacing: dynamicTracking(2.3) }],
      '6xl': [
        '3.75rem',
        { lineHeight: '1', letterSpacing: dynamicTracking(3.75) },
      ],
      '7xl': [
        '4.5rem',
        { lineHeight: '1', letterSpacing: dynamicTracking(4.5) },
      ],
      '8xl': ['6rem', { lineHeight: '1', letterSpacing: dynamicTracking(6) }],
      '9xl': ['8rem', { lineHeight: '1', letterSpacing: dynamicTracking(9) }],
    },
    extend: {
      fontFamily: {
        sans: ['ZS Sans', ...defaultTheme.fontFamily.sans],
        mono: ['JetBrains Mono', ...defaultTheme.fontFamily.mono],
      },
      zIndex: {
        '-1': '-1',
      },
    },
  },
  variants: {},
  plugins: [lineClamp, clip],
}

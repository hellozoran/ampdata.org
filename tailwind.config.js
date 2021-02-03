module.exports = {
  theme: {
    extend: {
      fontFamily: {
        futura: ['futura-pt', 'sans-serif'],
        balboa: ['balboa-plus-inline', 'sans-serif']
      },
      colors: {
        sunshine: 'var(--sunshine)',
        'dark-night': 'var(--dark-night)',
        'dark-night-100': 'var(--dark-night-100)',
        'dark-night-900': 'var(--dark-night-900)',
        'sand-bar': 'var(--sand-bar)'
      }
    },
    darkSelector: '.dark-mode'
  },
  variants: {
    backgroundColor: [
      'dark',
      'dark-hover',
      'dark-group-hover',
      'dark-even',
      'dark-odd'
    ],
    borderColor: ['dark', 'dark-focus', 'dark-focus-within'],
    textColor: ['dark', 'dark-hover', 'dark-active']
  },
  plugins: [
    require('tailwindcss-dark-mode')()
  ],
  purge: {
    enabled: process.env.NODE_ENV === 'production',
    content: [
      'components/**/*.vue',
      'layouts/**/*.vue',
      'pages/**/*.vue',
      'plugins/**/*.js',
      'nuxt.config.js',
      // TypeScript
      'plugins/**/*.ts',
      'nuxt.config.ts'
    ]
  }
}
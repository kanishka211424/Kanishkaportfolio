
/** @type {import('tailwindcss').Config} */
export default {
  content: [
  './index.html',
  './src/**/*.{js,ts,jsx,tsx}'
],
  theme: {
    extend: {
      colors: {
        background: '#0a0e1a', // Deep navy-black
        surface: '#111827',    // Card background
        'surface-light': '#1e293b', // Borders/lines
        'surface-hover': '#1a1f2e',
        'text-primary': '#e2e8f0', // Light gray
        'text-secondary': '#94a3b8', // Muted
        accent: {
          blue: '#3b82f6', // Electric blue
          teal: '#14b8a6', // Teal
        }
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        display: ['Space Grotesk', 'sans-serif'],
        stats: ['IBM Plex Sans', 'sans-serif'],
        mono: ['ui-monospace', 'SFMono-Regular', 'Menlo', 'Monaco', 'Consolas', 'monospace'],
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
      }
    },
  },
  plugins: [],
}

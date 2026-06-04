/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        card: '#ffffff',
        ring: '#f59e0b',
        input: '#e5e7eb',
        muted: '#f9fafb',
        accent: '#fffbeb',
        border: '#e5e7eb',
        popover: '#ffffff',
        primary: '#f59e0b',
        sidebar: '#f9fafb',
        secondary: '#f3f4f6',
        background: '#ffffff',
        foreground: '#262626',
        destructive: '#ef4444',
        'sidebar-ring': '#f59e0b',
        'sidebar-accent': '#fffbeb',
        'sidebar-border': '#e5e7eb',
        'card-foreground': '#262626',
        'sidebar-primary': '#f59e0b',
        'muted-foreground': '#6b7280',
        'accent-foreground': '#92400e',
        'popover-foreground': '#262626',
        'primary-foreground': '#000000',
        'sidebar-foreground': '#262626',
        'secondary-foreground': '#4b5563',
        'destructive-foreground': '#ffffff',
        'sidebar-accent-foreground': '#92400e',
        'sidebar-primary-foreground': '#ffffff',
        chart: {
          1: '#f59e0b',
          2: '#d97706',
          3: '#b45309',
          4: '#92400e',
          5: '#78350f',
        },
      },
      boxShadow: {
        custom: '0 4px 8px -1px rgba(0, 0, 0, 0.1)',
      },
      animation: {
        'bounce-slow': 'bounce 2s infinite',
        'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'spin-slow': 'spin 3s linear infinite',
        'fade-in': 'fadeIn 0.5s ease-in-out',
        'slide-up': 'slideUp 0.5s ease-out',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
    },
  },
  plugins: [],
}

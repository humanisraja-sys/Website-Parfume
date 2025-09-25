module.exports = {
  content: ["./pages/*.{html,js}", "./index.html", "./js/*.js"],
  theme: {
    extend: {
      colors: {
        // Primary Colors - Gold
        primary: {
          DEFAULT: "#FFD700", // gold-500 - confidence moments, premium accents, victory highlights
          50: "#FFFEF7", // gold-50
          100: "#FFFBEB", // gold-100
          200: "#FFF4CC", // gold-200
          300: "#FFEB99", // gold-300
          400: "#FFE066", // gold-400
          500: "#FFD700", // gold-500
          600: "#E6C200", // gold-600
          700: "#CCAD00", // gold-700
          800: "#B39900", // gold-800
          900: "#998400", // gold-900
        },
        
        // Secondary Colors - Gray
        secondary: {
          DEFAULT: "#1A1A1A", // gray-900 - sophisticated depth, content containers, subtle separation
          50: "#F9F9F9", // gray-50
          100: "#F3F3F3", // gray-100
          200: "#E6E6E6", // gray-200
          300: "#CCCCCC", // gray-300
          400: "#999999", // gray-400
          500: "#666666", // gray-500
          600: "#4D4D4D", // gray-600
          700: "#333333", // gray-700
          800: "#262626", // gray-800
          900: "#1A1A1A", // gray-900
        },
        
        // Accent Colors - Sky Blue
        accent: {
          DEFAULT: "#00BFFF", // sky-500 - interactive elements, progress indicators, modern energy
          50: "#F0FBFF", // sky-50
          100: "#E0F7FF", // sky-100
          200: "#BAE6FD", // sky-200
          300: "#7DD3FC", // sky-300
          400: "#38BDF8", // sky-400
          500: "#00BFFF", // sky-500
          600: "#0284C7", // sky-600
          700: "#0369A1", // sky-700
          800: "#075985", // sky-800
          900: "#0C4A6E", // sky-900
        },
        
        // Background Colors
        background: "#000000", // black - luxury foundation, maximum contrast, premium canvas
        surface: "#0D0D0D", // gray-950 - card backgrounds, modal overlays, layered depth
        
        // Text Colors
        text: {
          primary: "#FFFFFF", // white - clear readability, confident communication, premium feel
          secondary: "#B8B8B8", // gray-400 - supporting information, elegant hierarchy, refined details
        },
        
        // Status Colors
        success: {
          DEFAULT: "#00C851", // green-500 - purchase confirmations, positive feedback, achievement moments
          50: "#F0FDF4", // green-50
          100: "#DCFCE7", // green-100
          500: "#00C851", // green-500
          600: "#16A34A", // green-600
          700: "#15803D", // green-700
        },
        
        warning: {
          DEFAULT: "#FFB347", // orange-300 - stock alerts, gentle urgency, helpful notifications
          50: "#FFF7ED", // orange-50
          100: "#FFEDD5", // orange-100
          300: "#FFB347", // orange-300
          500: "#F97316", // orange-500
          600: "#EA580C", // orange-600
        },
        
        error: {
          DEFAULT: "#FF6B6B", // red-400 - form validation, caring correction, supportive guidance
          50: "#FEF2F2", // red-50
          100: "#FEE2E2", // red-100
          400: "#FF6B6B", // red-400
          500: "#EF4444", // red-500
          600: "#DC2626", // red-600
        },
      },
      
      fontFamily: {
        'playfair': ['Playfair Display', 'serif'], // Headlines - sophisticated serif that conveys luxury heritage
        'inter': ['Inter', 'sans-serif'], // Body text - clean sans-serif optimized for readability
        'italiana': ['Italiana', 'cursive'], // Accents - elegant script for signature moments
        sans: ['Inter', 'sans-serif'],
        serif: ['Playfair Display', 'serif'],
      },
      
      fontSize: {
        'hero': ['4rem', { lineHeight: '1.1', letterSpacing: '-0.02em' }],
        'display': ['3rem', { lineHeight: '1.2', letterSpacing: '-0.01em' }],
        'heading': ['2rem', { lineHeight: '1.3' }],
        'subheading': ['1.5rem', { lineHeight: '1.4' }],
        'body': ['1rem', { lineHeight: '1.6' }],
        'small': ['0.875rem', { lineHeight: '1.5' }],
        'xs': ['0.75rem', { lineHeight: '1.4' }],
      },
      
      fontWeight: {
        'light': 300,
        'normal': 400,
        'medium': 500,
        'semibold': 600,
        'bold': 700,
      },
      
      boxShadow: {
        'subtle': '0 4px 20px rgba(0, 0, 0, 0.3)',
        'hover': '0 8px 30px rgba(0, 0, 0, 0.4)',
        'card': '0 2px 10px rgba(0, 0, 0, 0.2)',
        'modal': '0 20px 60px rgba(0, 0, 0, 0.5)',
      },
      
      transitionDuration: {
        'fast': '200ms',
        'normal': '300ms',
        'slow': '400ms',
        'reveal': '600ms',
      },
      
      transitionTimingFunction: {
        'ease-out': 'cubic-bezier(0, 0, 0.2, 1)',
      },
      
      spacing: {
        '18': '4.5rem',
        '88': '22rem',
        '128': '32rem',
      },
      
      borderWidth: {
        '1': '1px',
      },
      
      animation: {
        'fade-in': 'fadeIn 0.6s ease-out',
        'slide-up': 'slideUp 0.4s ease-out',
        'scale-in': 'scaleIn 0.3s ease-out',
      },
      
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        slideUp: {
          '0%': { opacity: '0', transform: 'translateY(40px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        scaleIn: {
          '0%': { opacity: '0', transform: 'scale(0.95)' },
          '100%': { opacity: '1', transform: 'scale(1)' },
        },
      },
    },
  },
  plugins: [],
}
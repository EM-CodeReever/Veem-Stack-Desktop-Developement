/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [require('daisyui')],
  daisyui: {
    themes: ["night",
    {
      mytheme: {
          
        "primary": "#fb7185",
                 
        "secondary": "#4b5563",
                 
        "accent": "#38bdf8",
                 
        "neutral": "#1B161D",
                 
        "base-100": "#FCFCFD",
                 
        "info": "#96D0DF",
                 
        "success": "#10b981",
                 
        "warning": "#F4AE0B",
                 
        "error": "#F43A25",
      },
    }
  ],
  },
}

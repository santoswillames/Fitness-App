/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./App.tsx", 
    "./src/**/*.{js,jsx,ts,tsx}", // ← ADICIONE ESTA LINHA
    "./components/**/*.{js,jsx,ts,tsx}"
  ],
  presets: [require("nativewind/preset")],
  theme: {
    extend: {
        fontFamily: {
        
        'inter-regular': ['Inter-Regular'],
        'inter-medium': ['Inter-Medium'],
        'inter-semibold': ['Inter-SemiBold'],
        'inter-bold': ['Inter-Bold'],
        
        'montserrat-regular': ['MontserratAlternates-Regular'],
        'montserrat-medium': ['MontserratAlternates-Medium'],
        'montserrat-semibold': ['MontserratAlternates-SemiBold'],
        'montserrat-bold': ['MontserratAlternates-Bold'],
      },
    },
  },
  plugins: [],
}
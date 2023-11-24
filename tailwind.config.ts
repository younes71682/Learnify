import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './component/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily:{
        YekanBakhRegular:["YekanBakh-Regular",'sans-serif'],
        YekanBakhMedium:["YekanBakh-Medium",'sans-serif'],
        YekanBakhLight:["YekanBakh-Light",'sans-serif'],
        YekanBakhHeavy:["YekanBakh-Heavy",'sans-serif'],
        YekanBakhHairline:["YekanBakh-Hairline",'sans-serif'],
        YekanBakhBold:["YekanBakh-Bold",'sans-serif'],
        YekanBakhFat:["YekanBakh-Fat",'sans-serif'],
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
  },
  plugins: [],
}
export default config

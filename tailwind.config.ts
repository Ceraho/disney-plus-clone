import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        'silver': '#c0c0c0',
        'emailInputFieldColor': '#31343e',
        'mainBgColor': '#040714',
        'signUpButtonBgColor': '#02d6e8',
        'signUpButtonTextColor': '#02172a',
        'faqButtonColor': '#13151d'
      },
      backgroundImage: {
        'heroImage': "url('/main-banner-1.png')",
        'secondHeroImage': "url('/main-banner-2.png')",
      }
    },
  },
  plugins: [],
};
export default config;

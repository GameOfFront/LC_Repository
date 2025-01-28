import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        'azul-1': '#DFF1F0',
        'azul-2': '#3AAFA9',
        'azul-3': '#2C7A78',
        'azul-4': '#17242A',
      },
      fontFamily: {
        futura: ['Futura PT Bold', 'Futura PT Medium', 'Futura PT Light', 'sans-serif'],
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
      },
      animation: {
        fraseEsquerdo: 'fadeIn 1.5s ease-in-out forwards',
        fraseDireito: 'fadeIn 2.0s ease-in-out forwards',
        ImagemCentro: 'fadeIn 4.0s ease-in-out forwards',
        ConteúdoExtra: 'fadeIn 2.5s ease-in-out forwards',
        imagemFundo: 'fadeIn 4.0s ease-in-out forwards',
      },
    },
  },

  plugins: [
    require('@tailwindcss/typography'),
  ],
};
export default config;

import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors:{
      green: {
        50: '#2D8575',
        90: '#292C27',
      },
      gray: {
        10: 'rgb(0,0,0,0.1)',
        15:'#FAFAFA' ,
        20: '#8895B3',
        30: '#808080',
        50: '#8895B3',
        60:'#7985A1',
        'transparent':'rgb(0,0,0,0.2)',
      },
      pink:{
        20:'#F6EFEF'
      },
      orange: {
        50:'#EDB183',
        30: '#FF8C7F',
      },
      blue: {
        10:'#C3D5FF',
        20:'#003B66',
        30:'#3984BC',
        40:'#B3CAFF',
        70: '#005493',
      'dark':'#002642'
      },
      
      yellow: {
        50: '#FEC601',
      },
      red:{
        50: '#FF8C7F'
      }
    },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [],
};
export default config;

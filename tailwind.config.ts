import type { Config } from "tailwindcss";

export default {
    darkMode: ["class"],
    content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
  	extend: {
		animation: {
			'spin-slow': 'spin 3s linear infinite',
		},
  		colors:{
        'bg-gradient' : 'linear-gradient(315deg, #0d0a0b 0%, #009fc2 74%);',
        'main': '#064386',
        'dark' : '#0d0a0b ',
        'text': '#60a6e7',
        'background':'linear-gradient(0deg, rgb(12, 38, 69) 20%, rgb(3, 5, 22) 50%);'
      },
  	}
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;

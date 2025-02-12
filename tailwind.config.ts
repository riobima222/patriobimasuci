import type { Config } from "tailwindcss";
import tailwindcssAnimate from "tailwindcss-animate";
import daisyui from 'daisyui';

export default {
	darkMode: ["class", '[data-theme="dark"]'],
    content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
  	extend: {}
  },
plugins: [tailwindcssAnimate, daisyui],
} satisfies Config;

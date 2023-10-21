import type { Config } from "tailwindcss";

export default {
  content: ["./app/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        isred: "#ff3300",
      },
    },
  },
  plugins: [],
} satisfies Config;

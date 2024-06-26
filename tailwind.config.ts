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
      // colors: {
      //   'rei-cream': '#F4ECE7',
      //   'rei-dark': '#3F2B53',
      //   'rei-red': '#C4376C',
      //   'rei-pink': '#F4ACBA',
      // },
      colors: {
        'rei-pink': '#ED9BB6',
        'rei-blue': '#5F74BA',
        'rei-black': '#2B2A4A',
        'rei-cream': '#FCF7F1',
      },
    },
  },
  plugins: [],
};
export default config;

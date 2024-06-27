/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    screens: {
      sm: { max: "620px" },

      ms: { max: "750px" },

      md: { max: "935px" },

      lg: { max: "1024px" },

      xl: { max: "1460px" },

      "2xl": { max: "1600px" },
    },
    extend: {
      colors: {
        "custom-yellow1": "#ffc800",
        "custom-yellow2": "#ffdb58",
        "custom-black": "#222222",
        "custom-full-black": "#040406",
        "custom-grey": "#393E46a9",
        "custom-white": "#faf9f6",
      },
    },
  },
  plugins: [],
};

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        "custom-yellow1": "#ffc800",
        "custom-yellow2": "#ffdb58",
        "custom-black": "#222222",
        "custom-full-black": "#040406",
        "custom-grey": "#393E46",
        "custom-white": "#faf9f6",
      },
    },
  },
  plugins: [],
};

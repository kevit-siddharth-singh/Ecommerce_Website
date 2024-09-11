/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      dropShadow: {
        "drop-doggy-hover": "0 0px 70px rgba(255, 90, 0, 1)",
        "drop-doggy": "0 0px 70px rgba(2, 255, 0, 1)",
      },
    },
  },
  plugins: ["@tailwindcss/forms", require("daisyui")],
};

module.exports = {
  content: ["{pages,src}/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  important: true, // important in prod is must be
  plugins: [require("daisyui")],
  daisyui: {
    themes: ["synthwave"],
  },
};

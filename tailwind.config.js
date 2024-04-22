/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "textblue": "#0055b2",
        "lightgrey": "#64696f",
        "grey": "#58595b",
        "black01": "#131619",
        "black02": "#080f1d",
        "black03": "#46484b",
        "black04": "#03020d",
        "black05": "#03020d",
        "black06": "#4a494e",
        "pink": "#d0006f"
      },
      fontSize: {
        "textxs": "12px",
        "textxsm": "16px",
        "textsm": "18px",
        "textxmd": "20px",
        "textmd": "24px",
        "textlg": "32px",
        "textxl": "40px",
        "textxxl": "48px",
        "textxxxl": "56px"
      },
      borderRadius: {
        "radiusxs": "4px",
        "radius": "8px",
        "radiussm": "22.5px",
        "radiusmd": "30px",
        "radiuslg": "40px",
        "radiusxl": "50px"
      },
      backgroundColor: {
        "bgpink": "#f8dbeb",
        "bgsky": "#E6F2FF",
        "bggradient": "linear-gradient(97.1deg, #D0006F 4.95%, #0055B2 94.87%)"
      },
    },
  },
  plugins: [],
};

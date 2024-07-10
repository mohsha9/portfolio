/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx,vue}"],
  theme: {
    extend: {
      animation: {
        spinSlow: "spin 150s linear infinite",
        bounceSlow: "myBounce 1s ease-in-out infinite",
        shine: "shine 1.5s ease-out infinite",
        colorAnima: "colorAnima 1s ease-in-out infinite"
      },

      keyframes: {
        myBounce: {
          "0%": { transform: "translateY(5%)" },
          "50%": { transform: "translateY(-5%)" },
          "100%": { transform: "translateY(5%)" },
        },
        shine: {
          "0%": { left: "-100px" },
          "60%": { left: "100%" },
          to: { left: "100%" },
        },
        colorAnima: {
          "0%": { color: "#7DCDFF" },
          "50%": { color: "#C2E7FF" },
          "100%": {color: "#7DCDFF"}
        }
      },

      colors: {
        bodyColor: "#fdfdff",
        textColor: "#748b75",
        footerColor: "#393d3f",
        richKhaki: "#a09480",
        darkKhaki: "#867B69",
        dark1Khaki: "#3A352C",
        dark2Khaki: "#544B3E",
        lightKhaki: "#EDE0CB",
        light1Khaki: "#FFF8EE",
        light2Khaki: "#F6EAD6",
        light3Khaki: "#D3C6B1",
        claret: "#750D37",
      },
    },
    fontFamily: {
      ptSans: ["PT Sans", "sans-serif"],
    },
    backgroundImage: {
      "custom-gradient": "linear-gradient(120deg, rgba(255, 255, 255, 0) 30%, rgba(255, 255, 255, 0.8), rgba(255, 255, 255, 0) 70%)",
    },
  },
  plugins: [],
};

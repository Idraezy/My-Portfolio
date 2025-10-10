// /** @type {import('tailwindcss').Config} */
// export default {
//   content: [],
//   theme: {
//     extend: {},
//   },
//   plugins: [],
// }

// /** @type {import('tailwindcss').Config} */
// export default {
//   darkMode: 'class',
//   content: [
//     "./index.html",
//     "./src/**/*.{js,ts,jsx,tsx}",
//   ],
//   theme: {
//     extend: {
//        keyframes: {
//         wave: {
//           "0%": { transform: "rotate(0deg)" },
//           "10%": { transform: "rotate(14deg)" },
//           "20%": { transform: "rotate(-8deg)" },
//           "30%": { transform: "rotate(14deg)" },
//           "40%": { transform: "rotate(-4deg)" },
//           "50%": { transform: "rotate(10deg)" },
//           "60%": { transform: "rotate(0deg)" },
//           "100%": { transform: "rotate(0deg)" },
//         },
//       },
//       animation: {
//         wave: "wave 2s ease-in-out infinite",
//       },
//       boxShadow: {
//         'glow-orange': '0 10px 30px rgba(251, 146, 60, 0.8)', // orange glow
//       },
//     },
//   },
//   plugins: [],
// }


/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class', // class-based dark mode toggle
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {

      colors: {
        // Light/Dark backgrounds and text
        lightBg: '#f9f9f9',
        darkBg: '#1a1a1a',
        lightText: '#1a1a1a',
        darkText: '#f9f9f9',
        // Accent colors
        primary: '#A0108B',
        orangeAccent: '#f97316', // Tailwind orange-500
        purpleAccent: '#9d4edd', // optional for dark mode
      },
      keyframes: {
        wave: {
          "0%": { transform: "rotate(0deg)" },
          "10%": { transform: "rotate(14deg)" },
          "20%": { transform: "rotate(-8deg)" },
          "30%": { transform: "rotate(14deg)" },
          "40%": { transform: "rotate(-4deg)" },
          "50%": { transform: "rotate(10deg)" },
          "60%": { transform: "rotate(0deg)" },
          "100%": { transform: "rotate(0deg)" },
        },
      },
      animation: {
        wave: "wave 2s ease-in-out infinite",
      },
      boxShadow: {
        'glow-orange': '0 10px 30px rgba(251, 146, 60, 0.8)', // orange glow
      },
    },
  },
  plugins: [],
}
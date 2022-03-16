module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      height: {
        102: "28rem",
        108: "32rem",
        120: "40rem",
        126: "44rem",
        132: "48rem",
        156: "64rem",
        180: "80rem",
        204: "96rem",
        228: "104rem",
        252: "120rem",
      },
      transitionDuration: {
        '0': '0ms',
        '2000': '2000ms',
      },
      transitionDelay: {
        '0': '0ms',
        '2000': '2000ms',
        '3000': '3000ms',
        '4000': '4000ms',
      },
      keyframes: {
        "fade-out-down": {
          from: {
            opacity: "1",
            transform: "translateY(0px)",
          },
          to: {
            opacity: "0",
            transform: "translateY(10px)",
          },
        },
        "fade-in-up": {
          "0%": {
            opacity: "0",
            transform: "translateY(10px)",
          },
          "100%": {
            opacity: "1",
            transform: "translateY(0)",
          },
        },
      },
      animation: {
        'slow-bounce': 'bounce 1.5s infinite',
      }
    },
  },
  plugins: [],
};

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily:{
        "inter":['"Inter"', "sans-serif"],
        "DM_Sans": ['"DM Sans"', "sans-serif"]
      },
      colors:{
        misc: "var(--color-misc)",
        highlight: "var(--color-highlight)",
        font: "var(--color-font)"
      },
      fontSize:{
        xl_heading1: "85px",
        xl_heading2: "60px",
        xl_heading3: "30px",
        xl_content: "18px",
        xl_intro: "16px",
        lg_navbar: "18px",
        lg_heading1: "70px",
        lg_heading2: "50px",
        lg_heading3: "25px",
        lg_content: "16px",
        lg_intro: "14px",
        md_navbar: "16px",
        md_heading1: "48px",
        md_heading2: "40px",
        md_heading3: "20px",
        md_content: "14px",
        md_intro: "12px",
        sm_navbar: "30px",
        sm_heading1: "34px",
        sm_heading2: "32px",
        sm_heading3: "16px",
        sm_content: "14px",
        sm_intro: "12px"

        // content: "22px"
      },
      fontWeight: {
        light: 200,
        normal:400,
        bold: 900
      }
    },
  },
  plugins: [],
}


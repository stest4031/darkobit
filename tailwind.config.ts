import type { Config } from "tailwindcss";

type addVariantType = {
  addVariant: (value1: string, value2: string) => void;
};

const config: Config = {
  darkMode: ["class", "class"],
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      spacing: {
        "1.75": "7px",
        "2.25": "9px",
        "2.75": "11px",
        "3.25": "13px",
        "3.75": "15px",
        "0.75": "3px",
        "7.25": "29px",
        "7.5": "30px",
        "8.75": "35px",
        "18.25": "73px",
        "19.75": "79px",
        "19.5": "78px",
        "38.25": "135px",
        "23.25": "93px",
        "50": "100px",
        "139": "556px",
      },
      colors: {
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
          default: "#FFFC31",
          "200": "#FFE351",
          "300": "#FBFF00",
          "700": "#FFA600",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
          "100": "#E6F0FF",
          "200": "#B1D1FF",
          default: "#1D6ADC",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        chart: {
          "1": "hsl(var(--chart-1))",
          "2": "hsl(var(--chart-2))",
          "3": "hsl(var(--chart-3))",
          "4": "hsl(var(--chart-4))",
          "5": "hsl(var(--chart-5))",
        },
        // main: {
        //   DEFAULT: "#FFFC31",
        //   "200": "#FFE351",
        //   "300": "#FBFF00",
        //   "700": "#FFA600",
        // },
        // sub: {
        //   "100": "#E6F0FF",
        //   "200": "#B1D1FF",
        //   DEFAULT: "#1D6ADC",
        // },
        dark: {
          "200": "#525252",
          "300": "#383838",
          "400": "#2D2D2A",
          "500": "#222222",
          "600": "#23262F",
          "800": "#081035",
          DEFAULT: "#000000",
        },
        light: {
          "200": "#F5F6F9",
          "300": "#F8F8F8",
          "400": "#E0E0E0",
          "450": "#D2D2D2",
          "500": "#F0F0F0",
          "600": "#898989",
          DEFAULT: "#FFFFFF",
        },
        neutral: {
          "100": "#BBBBBB",
          "200": "#535160",
          "300": "#9C9C96",
          "400": "#717171",
          "500": "#8D8D8D",
          "600": "#3A3A3A",
          "700": "#434343",
          "800": "#303030",
          "900": "#181A20",
          DEFAULT: "#2D2D2A",
        },
        error: {
          "300": "#D5414A",
          "400": "#E14B4B",
        },
        success: {
          "100": "#6DA975",
          "200": "#729D58",
          "300": "#86AB00",
          "400": "#44D541",
        },
      },
      fontFamily: {
        peyda: ["var(--font-peyda)", "sans-serif"],
        yekanbakh: ["var(--font-yekanbakh)", "sans-serif"],
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
        default: "20px",
        "9": "9px",
        "13": "13px",
        "15": "15px",
        "20": "20px",
        "30": "30px",
      },
      container: {
        center: true,
        padding: {
          DEFAULT: "1.25rem",
          lg: "1.75rem",
        },
      },
      fontSize: {
        "sm-mines": "0.8125rem",
        "5.5xl": "3.1875rem",
      },
    },
    screens: {
      xs: "480px",
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",

      "2xl": "1536px",
    },
  },
  plugins: [
    require("tailwindcss-animate"),
    function ({ addVariant }: addVariantType) {
      addVariant("child", "& > *");
      addVariant("child-hover", "& > *:hover");
    },
  ],
};
export default config;

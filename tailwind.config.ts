import type { Config } from "tailwindcss";
import plugin from "tailwindcss/plugin";
import tailwindAnimatePlugin from "tailwindcss-animate";
import tailwindGridAreaPlugin from "@savvywombat/tailwindcss-grid-areas";

export default {
  darkMode: ["class"],
  content: [
    "app/**/*.{ts,tsx}",
    "components/**/*.{ts,tsx}",
    "src/**/*.{js,jsx,ts,tsx}",
    "index.html",
  ],
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
      },
      borderRadius: {
        lg: `var(--radius)`,
        md: `calc(var(--radius) - 2px)`,
        sm: "calc(var(--radius) - 4px)",
      },
      // fontFamily: {
      //   sans: ["var(--font-sans)", ...fontFamily.sans],
      // },
      transitionTimingFunction: {
        default: "cubic-bezier(0.2, 0.0, 0, 1.0)",
        "emphasized-in": "cubic-bezier(0.05, 0.7, 0.1, 1.0)",
        "emphasized-out": "cubic-bezier(0.3, 0.0, 0.8, 0.15)",
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
        "fade-in": {
          from: { opacity: "0" },
          to: { opacity: "1" },
        },
        "fade-out": {
          from: { opacity: "1" },
          to: { opacity: "0" },
        },
        "slide-in-left": {
          "0%": { transform: "translateX(-100%)" },
          "100%": { transform: "translateX(0%)" },
        },
        "slide-out-left": {
          "0%": { transform: "translateX(0%)" },
          "100%": { transform: "translateX(-100%)" },
        },
        "slide-in-right": {
          "0%": { transform: "translateX(100%)" },
          "100%": { transform: "translateX(0%)" },
        },
        "slide-out-right": {
          "0%": { transform: "translateX(0%)" },
          "100%": { transform: "translateX(100%)" },
        },
        "slide-in-bottom": {
          "0%": { transform: "translateY(100%)" },
          "100%": { transform: "translateY(0%)" },
        },
        "slide-out-bottom": {
          "0%": { transform: "translateY(0%)" },
          "100%": { transform: "translateY(100%)" },
        },
        "slide-in-top": {
          "0%": { transform: "translateY(-100%)" },
          "100%": { transform: "translateY(0%)" },
        },
        "slide-out-top": {
          "0%": { transform: "translateY(0%)" },
          "100%": { transform: "translateY(-100%)" },
        },
      },
      animation: ({ theme }) => ({
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        "fade-in": "fade-in 0.25s ease-out",
        "fade-out": "fade-out 0.2s ease-out",
        "drawer-in-left": `slide-in-left 400ms ${theme(
          "transitionTimingFunction.emphasized-in"
        )}`,
        "drawer-out-left": `slide-out-left 200ms ${theme(
          "transitionTimingFunction.emphasized-out"
        )}`,
        "drawer-in-right": `slide-in-right 400ms ${theme(
          "transitionTimingFunction.emphasized-in"
        )}`,
        "drawer-out-right": `slide-out-right 200ms ${theme(
          "transitionTimingFunction.emphasized-out"
        )}`,
        "drawer-in-top": `slide-in-top 400ms ${theme(
          "transitionTimingFunction.emphasized-in"
        )}`,
        "drawer-out-top": `slide-out-top 200ms ${theme(
          "transitionTimingFunction.emphasized-out"
        )}`,
        "drawer-in-bottom": `slide-in-bottom 400ms ${theme(
          "transitionTimingFunction.emphasized-in"
        )}`,
        "drawer-out-bottom": `slide-out-bottom 200ms ${theme(
          "transitionTimingFunction.emphasized-out"
        )}`,
      }),
      gridTemplateAreas: {
        drawerContent: ["header", "body", "footer"],
      },
      zIndex: {
        hide: "-1",
        base: "0",
        docked: "10",
        dropdown: "1000",
        sticky: "1100",
        banner: "1200",
        overlay: "1300",
        modal: "1400",
        popover: "1500",
        skipLink: "1600",
        toast: "1700",
        tooltip: "1800",
      },
    },
    transitionDuration: {
      fastest: "50ms",
      faster: "100ms",
      fast: "150ms",
      normal: "200ms",
      slow: "300ms",
      slower: "400ms",
      slowest: "500ms",
    },
  },
  plugins: [
    tailwindAnimatePlugin,
    tailwindGridAreaPlugin,
    addVariantsPlugin(
      ({ attr, pseudoclass, dataState, dataBool, dataOrientation }) => ({
        checked: [pseudoclass, dataBool, attr, dataState],
        unchecked: [dataState],
        focus: [pseudoclass, dataBool, attr, dataState],
        hidden: [attr, dataBool],
        disabled: [attr, dataBool],
        closed: [dataState],
        open: [dataState],
        on: [dataState],
        off: [dataState],
        highlighted: [dataBool, dataState],
        horizontal: [dataOrientation],
        vertical: [dataOrientation],
        selected: [dataBool],
      })
    ),
  ],
} satisfies Config;

function addVariantsPlugin(
  makeVariants: (d: {
    attr: (a: string) => string;
    dataVal: (key: string) => (val: string) => string;
    pseudoclass: (a: string) => string;
    dataState: (val: string) => string;
    dataBool: (key: string) => string;
    dataOrientation: (val: string) => string;
  }) => Record<string, ((v: string) => string)[]>,
  buildVariantKey = (name: string) => `_${name}`
) {
  const attr = (a: string) => `&[${a}]`;
  const dataVal = (key: string) => (val: string) => attr(`data-${key}=${val}`);

  const pseudoclass = (a: string) => `&:${a}`;
  const dataBool = (key: string) => attr(`data-${key}`);

  const dataState = dataVal("state");
  const dataOrientation = dataVal("orientation");

  const config = {
    attr,
    dataVal,
    pseudoclass,
    dataState,
    dataBool,
    dataOrientation,
  };

  const variants = makeVariants(config);

  return plugin(({ addVariant }) => {
    Object.entries(variants).forEach(([variantName, builders]) => {
      addVariant(
        buildVariantKey(variantName),
        builders.map((builder) => builder(variantName))
      );
    });
  });
}

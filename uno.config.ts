import { defineConfig } from "unocss/vite";
import { presetWind4, presetWebFonts } from "unocss";
import { transformerVariantGroup } from "unocss";

// - ** Light Gradient **: `linear-gradient(180deg, #EBF2FC 0%, #EEF8F9 100%)`
//   - ** Dark Gradient **: `linear-gradient(180deg, #040918 0%, #091540 100%)`

export default defineConfig({
  shortcuts: {
    "button": "cursor-pointer font-medium",
    "background": "bg-gradient from-[#EBF2FC] to-[#EEF8F9] dark:from-[#040918] dark:to-[#091540]"
  },
  transformers: [transformerVariantGroup()],
  presets: [
    presetWind4(),
    presetWebFonts({
      provider: "fontshare",
      fonts: {
        "satoshi": "Satoshi"
      }
    })
  ],
  theme: {
    colors: {
      neutral: {
        900: `hsl(227, 75%, 14%)`,
        800: `hsl(226, 25%, 17%)`,
        700: `hsl(225, 23%, 24%)`,
        600: `hsl(226, 11%, 37%)`,
        300: `hsl(0, 0%, 78%)`,
        200: `hsl(217, 61%, 90%)`,
        100: `hsl(0, 0%, 93%)`,
        0: `hsl(200, 60%, 99%)`
      },
      red: {
        400: `hsl(3, 86%, 64%)`,
        500: `hsl(3, 71%, 56%)`,
        700: `hsl(3, 77%, 44%)`
      }
    },
  }
});
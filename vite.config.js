import { defineConfig } from "vite";
import { viteSingleFile } from "vite-plugin-singlefile";
import { minify } from "html-minifier-terser";

export default defineConfig({
  plugins: [
    viteSingleFile(),
    {
      name: "minify-html",
      enforce: "post",
      async generateBundle(_, bundle) {
        for (const key in bundle) {
          if (bundle[key].type === "asset" && key.endsWith(".html")) {
            bundle[key].source = await minify(bundle[key].source, {
              collapseWhitespace: true,
              removeComments: true,
              minifyCSS: true,
              minifyJS: true,
              removeAttributeQuotes: true,
            });
          }
        }
      },
    },
  ],
  build: {
    minify: true,
  },
});

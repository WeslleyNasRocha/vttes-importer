import path from "path";
import { defineConfig } from "vite";
import { viteStaticCopy } from "vite-plugin-static-copy";

export default defineConfig({
  root: "src/",
  base: "/modules/vttes-importer/",
  publicDir: path.resolve(__dirname, "public"),
  server: {
    port: 30001,
    open: true,
    proxy: {
      "^(?!/modules/vttes-importer)": "http://localhost:30000/",
      "/socket.io": {
        target: "ws://localhost:30000",
        ws: true,
      },
    },
  },
  build: {
    outDir: path.resolve(__dirname, "dist"),
    emptyOutDir: true,
    sourcemap: true,
    brotliSize: true,
    terserOptions: {
      mangle: false,
      keep_classnames: true,
      keep_fnames: true,
    },
    lib: {
      name: "vttes-importer",
      entry: path.resolve(__dirname, "src/VTTESImporter.ts"),
      formats: ["es"],
      fileName: "VTTESImporter",
    },
    // outDir: "dist",
    // emptyOutDir: true,
    // sourcemap: true,
    // lib: {
    //   name: "module",
    //   entry: "src/scripts/module.ts",
    //   formats: ["es"],
    //   fileName: "module",
    // },
  },
  plugins: [
    // viteStaticCopy({
    //   targets: [
    //     {
    //       src: "src/module.json",
    //       dest: ".",
    //     },
    //     {
    //       src: "src/README.md",
    //       dest: ".",
    //     },
    //   ],
    // }),
  ],
});

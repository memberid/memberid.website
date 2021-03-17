import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
const path = require("path");

// https://vitejs.dev/config/
export default defineConfig({
 resolve: {
  alias: [{ find: "@", replacement: path.resolve(__dirname, "src") }],
 },
 build: {
  minify: false,
 },
 plugins: [
  vue({
   compilerOptions: {
    types: ["vite/client"],
   },
  }),
 ],
 optimizeDeps: {
  exclude: ["@fortawesome/fontawesome-free"],
 },
});

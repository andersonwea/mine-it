/* eslint-disable no-undef */
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  build: {
    rollupOptions: {
      input: {
        main: "./index.html",
        sound1: __dirname + "/" + "src/assets/mine-it-background-music.mp3",
        sound2: __dirname + "/" + "src/assets/mine-it-dinamite.mp3",
        sound3: __dirname + "/" + "src/assets/mine-it-right.mp3",
      },
    },
  },
  base: "/mine-it",
  plugins: [react()],
});

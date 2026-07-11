import js from "@eslint/js";
import globals from "globals";
import tseslint from "typescript-eslint";
import pluginReact from "eslint-plugin-react";
import { defineConfig } from "eslint/config";

export default defineConfig([
  {
    files: ["**/*.{js,mjs,cjs,ts,mts,cts,jsx,tsx}"],
    plugins: { js },
    extends: ["js/recommended"],
    languageOptions: { globals: { ...globals.browser, ...globals.node } },
  },
  {
    files: ["**/*.{ts,mts,cts,tsx}"],
    extends: [tseslint.configs.recommended],
  },
  {
    files: ["**/*.{js,mjs,cjs,jsx,tsx}"],
    ...pluginReact.configs.flat["jsx-runtime"],
    settings: { react: { version: "detect" } },
  },
  {
    ignores: ["**/*.css", ".next/**", "node_modules/**"],
  },
]);
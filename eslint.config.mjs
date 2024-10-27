import { FlatCompat } from "@eslint/eslintrc";
import path from "path";
import { fileURLToPath } from "url";

// Mimic CommonJS variables (only needed for ESM)
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Initialize FlatCompat
const compat = new FlatCompat({
  baseDirectory: __dirname,
});

export default [
  { files: ["**/*.ts"] },
  ...compat.config({
    env: {
      browser: true,
      node: true,
      es2021: true,
    },
    parser: "@typescript-eslint/parser",
    parserOptions: {
      ecmaVersion: "latest",
      sourceType: "module",
    },
    plugins: ["@typescript-eslint"],
    // extends: ["eslint:recommended", "plugin:@typescript-eslint/recommended"],
    rules: {
      semi: ["error", "always"],
      quotes: ["error", "double"],
      "@typescript-eslint/no-unused-vars": "warn",
      "no-console": "warn",
      eqeqeq: ["error", "always"],
    },
  }),

  // Additional custom configuration can go here
];

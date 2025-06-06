import js from "@eslint/js";
import globals from "globals";
import reactHooks from "eslint-plugin-react-hooks";
import reactRefresh from "eslint-plugin-react-refresh";

export default [
  { ignores: ["dist"] },
  //this should remove errors on the test files
  {
    files: ["**/*.{test,spec}.js"],

    languageOptions: {
      ecmaVersion: 2020,
      // merge browser + jest globals
      globals: { ...globals.browser, ...globals.jest },
      parserOptions: {
        ecmaVersion: "latest",
        ecmaFeatures: { jsx: true },
        sourceType: "module",
      },
    },

    plugins: {
      "react-hooks": reactHooks,
      "react-refresh": reactRefresh,
    },

    rules: {
      // you can inherit the same base rules here if you want
      ...js.configs.recommended.rules,
      ...reactHooks.configs.recommended.rules,
      "no-unused-vars": [
        "error",
        { varsIgnorePattern: "^[A-Z_]" },
      ],
      "react-refresh/only-export-components": [
        "warn",
        { allowConstantExport: true },
      ],
    },
  },
  {
    files: ["**/*.{js,jsx}"],
    languageOptions: {
      ecmaVersion: 2020,
      globals: globals.browser,
      parserOptions: {
        ecmaVersion: "latest",
        ecmaFeatures: { jsx: true },
        sourceType: "module"
      }
    },
    plugins: {
      "react-hooks": reactHooks,
      "react-refresh": reactRefresh
    },
    rules: {
      ...js.configs.recommended.rules,
      ...reactHooks.configs.recommended.rules,
      "no-unused-vars": [
        "error",
        { varsIgnorePattern: "^[A-Z_]" }
      ],
      "react-refresh/only-export-components": [
        "warn",
        { allowConstantExport: true }
      ]
    }
  }
];

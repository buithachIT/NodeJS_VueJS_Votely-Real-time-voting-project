module.exports = {
  root: true,
  env: {
    browser: true,
    node: true,
    es2021: true,
  },
  extends: [
    "plugin:vue/vue3-essential",
    "eslint:recommended",
    "plugin:prettier/recommended",
  ],
  parser: "vue-eslint-parser",
  parserOptions: {
    parser: "@babel/eslint-parser",
    requireConfigFile: false,
    ecmaVersion: 2020,
    sourceType: "module",
  },
  rules: {
    "vue/multi-word-component-names": "off",
    "prettier/prettier": "error",
    "no-debugger": "error",
    "vue/no-unused-vars": "error",
    "vue/no-unused-components": "warn",
  },
};

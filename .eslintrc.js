module.exports = {
  root: true,
  env: {
    node: true,
  },
  extends: ["plugin:vue/vue3-essential", "prettier/vue"],
  rules: {
    "no-console": "off",
    "no-debugger": process.env.NODE_ENV === "production" ? "error" : "off",
    "vue/no-unused-components": [
      "error",
      {
        ignoreWhenBindingPresent: false,
      },
    ],
  },
  parserOptions: {
    parser: "babel-eslint",
  },
  overrides: [
    {
      files: ["**/__tests__/*.{j,t}s?(x)"],
      env: {
        jest: true,
      },
    },
  ],
};

module.exports = {
  // https://eslint.org/docs/latest/use/configure/language-options#specifying-environments
  env: { browser: true, es2022: true },
  extends: ["eslint:recommended"],
  ignorePatterns: ["dist", ".eslintrc.js"],
  parserOptions: { ecmaVersion: "latest", sourceType: "module" },
  rules: {
    "no-var": 2, // 0 off, 1 warning, 2 error Docs : https://eslint.org/docs/latest/use/configure/rules#rule-severities
  },
};

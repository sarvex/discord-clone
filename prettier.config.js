// prettier.config.js, .prettierrc.js, prettier.config.mjs, or .prettierrc.mjs

/** @type {import("prettier").Config} */
const config = {
  bracketSameLine: true,
  trailingComma: 'all',
  semi: true,
  singleQuote: true,
  plugins: ['prettier-plugin-tailwindcss'],
};

export default config;

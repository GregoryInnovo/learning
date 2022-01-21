module.exports = {
  root: true,
  env: {
    browser: true,
    amd: true,
    node: true,
    es6: true,
  },
  extends: ['eslint:recommended', 'plugin:jsx-a11y/recommended', 'plugin:prettier/recommended', 'next/core-web-vitals'],
  rules: {
    semi: ['error', 'always'],
    'prettier/prettier': 0, // with 1 is a warning, and with 2 is required
  },
};

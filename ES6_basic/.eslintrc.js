module.exports = {
  env: {
    browser: false,
    es2021: true,
    jest: true,
    node: true,
  },
  extends: ['airbnb-base'],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  rules: {
    'no-console': 'off',
    'no-shadow': 'off',
    'no-underscore-dangle': 'off',
  },
};

module.exports = {
  root: true,
  extends: ['next', 'turbo', 'plugin:import/recommended', 'prettier'],
  rules: {
    '@next/next/no-html-link-for-pages': 'off',
  },
};

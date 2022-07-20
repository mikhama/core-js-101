module.exports = {
  env: {
    commonjs: true,
    es6: true,
    node: true,
    mocha: true,
  },
  extends: [
    'airbnb-base',
  ],
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
  },
  parserOptions: {
    ecmaVersion: 2018,
  },
  rules: {
    'linebreak-style': 'off',
    'space-before-blocks': 'off',
    'no-plusplus': 'off',
    'no-unused-vars': 'off',
    'eslint-disable-next-line': 'off', 
    'array-callback-return': 'off'
  },
};

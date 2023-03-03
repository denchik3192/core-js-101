module.exports = {
  env: {
    commonjs: true,
    es6: true,
    node: true,
    mocha: true,
    linebreak-style: ["error", "windows"]
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
  },
};

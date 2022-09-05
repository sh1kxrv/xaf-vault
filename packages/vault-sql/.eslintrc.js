module.exports = {
  extends: ['../../node_modules/@vault/eslint'],
  parserOptions: {
    project: ['./tsconfig.json'],
  },
  env: {
    node: true,
  },
}

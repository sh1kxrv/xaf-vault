module.exports = {
  extends: ['@vault/eslint'],
  parserOptions: {
    project: ['./tsconfig.json'],
  },
  env: {
    node: true,
  },
}

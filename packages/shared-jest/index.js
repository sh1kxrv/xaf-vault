module.exports = {
  moduleNameMapper: {
    "^@vault/(.*)$": "<rootDir>/../$1/src",
  },
  transform: {
    "^.+\\.tsx?$": "esbuild-jest",
  },
};

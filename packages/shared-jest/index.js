module.exports = {
  moduleNameMapper: {
    "^@vault/(.*)$": "<rootDir>/../$1/src",
    "^~/(.*)": "<rootDir>/src/$1",
  },
  transform: {
    "^.+\\.tsx?$": "esbuild-jest",
  },
};

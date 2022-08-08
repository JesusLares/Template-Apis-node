module.exports = {
  preset: "ts-jest",
  testEnvironment: "node",
  cacheDirectory: ".tmp/jestCache",
  moduleNameMapper: {
    "@context/(.*)": "<rootDir>/src/context/$1",
    "@router/(.*)": "<rootDir>/src/router/$1",
    "@config/(.*)": "<rootDir>/src/config/$1",
    "@interface/(.*)": "<rootDir>/src/interface/$1",
    "@middlewares/(.*)": "<rootDir>/src/middlewares/$1",
    "@utils/(.*)": "<rootDir>/src/utils/$1",
  },
};

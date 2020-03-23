
const path = require('path');

module.exports = {
  clearMocks: true,
  collectCoverage: true,
  coverageDirectory: 'coverage',
  testEnvironment: 'node',
  setupFilesAfterEnv: [
    './node_modules/jest-enzyme/lib/index.js',
    path.resolve(__dirname, 'test', 'jest.setup.js'),
  ],
  moduleNameMapper: {
    "\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$": "./__mocks__/fileMock.js",
    "\\.(css|less)$": "./__mocks__/styleMock.js"
  }
};
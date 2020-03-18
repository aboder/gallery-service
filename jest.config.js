
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
};
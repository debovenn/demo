module.exports = {
  setupFilesAfterEnv: ['./jest.setup.js'],
  testMatch: ['**/__tests__/**/*.js?(x)', '**/?(*)(-test).js?(x)'],
  testEnvironment: 'node',
  collectCoverage: true,
  coveragePathIgnorePatterns: ['src.*/test/.*', '.*jest.*.js'],
  coverageReporters: ['json-summary', 'json', 'lcov', 'text', 'clover'],
  reporters: ['default', 'jest-junit']
};

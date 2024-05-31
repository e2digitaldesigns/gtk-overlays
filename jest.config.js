module.exports = {
  // Indicates which environment should be used for testing
  testEnvironment: "node",

  // The glob patterns Jest uses to detect test files
  testMatch: ["**/__tests__/**/*.js?(x)", "**/?(*.)+(spec|test).js?(x)"],

  // An array of file extensions your modules use
  moduleFileExtensions: ["js", "json", "jsx", "node"],

  modulePathIgnorePatterns: ["node_modules", "jest-test-results.json"],

  // Transform files before testing
  transform: {
    "^.+\\.jsx?$": "babel-jest"
  },

  // Coverage configuration
  collectCoverage: true,
  coverageDirectory: "coverage",
  collectCoverageFrom: [
    "src/**/*.{js,jsx}",
    "!**/node_modules/**",
    "!**/vendor/**"
  ]
};

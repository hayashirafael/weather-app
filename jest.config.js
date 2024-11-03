module.exports = {
  preset: 'jest-expo',
  transform: {
    '^.+\\.(js|jsx|ts|tsx)$': 'babel-jest',
    "^.+\\.jsx?$": "babel-jest",
    "^.+\\.svg$": "jest-transformer-svg",
  },
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],
  testEnvironment: 'node',
  moduleNameMapper: {
    'expo-location': '<rootDir>/__tests__/mocks/libs/expo-location.js',
  },
  setupFiles: [
    '<rootDir>/jest.config.js',
    '<rootDir>/__tests__/mocks/libs/react-native-safe-area-context.js',
    '<rootDir>/__tests__/mocks/libs/react-navigation.js',
  ],
  transformIgnorePatterns: [
    "node_modules/(?!((jest-)?react-native|@react-native(-community)?)|expo(nent)?|@expo(nent)?/.*|@expo-google-fonts/.*|react-navigation|@react-navigation/.*|@sentry/react-native|native-base|react-native-svg)"
  ],
  collectCoverageFrom: [
    "<rootDir>/src/**/*.{ts,tsx}",
    "!<rootDir>/src/**/styles.ts",
    
  ],
  coveragePathIgnorePatterns: [
    "<rootDir>/src/@types",
    "<rootDir>/src/styles",
  ],
  testPathIgnorePatterns: [
    "<rootDir>/__tests__/mocks",
    "<rootDir>/__tests__/utils"
  ]
};

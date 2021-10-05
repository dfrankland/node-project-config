import type { Config } from '@jest/types';

const config: Config.InitialOptions = {
  testEnvironment: 'jest-environment-jsdom',
  setupFilesAfterEnv: ['./setupTest.ts'],
  testPathIgnorePatterns: ['/cypress/'],
  collectCoverage: true,
  collectCoverageFrom: [
    'src/**/*',
    '!**/__tests__/**/*',
    '!**/__mocks__/**/*',
    '!**/*.json',
  ],
  coverageThreshold: {
    global: {
      statements: 80,
      branches: 80,
      functions: 80,
      lines: 80,
    },
  },
  coverageDirectory: './coverage/jest',
  reporters: [
    'default',
    [
      require.resolve('jest-junit'),
      {
        outputDirectory: './coverage/jest',
        outputName: 'junit.xml',
      },
    ],
  ],
};

export default config;

const nextJest = require('next/jest');
const createJestConfig = nextJest({
	dir: './',
});
/** @type {import('jest').Config} */
const customJestConfig = {
	setupFilesAfterEnv: ['<rootDir>/jest.setup.js'],
	testEnvironment: 'jest-environment-jsdom',
	moduleNameMapper: {
		'^@/components/(.*)$': '<rootDir>/src/components/$1',
		'^@/pages/(.*)$': '<rootDir>/src/pages/$1',
		'^@/hooks/(.*)$': '<rootDir>/src/hooks/$1',
		'^@/types/(.*)$': '<rootDir>/src/types/$1',
	},
};
module.exports = createJestConfig(customJestConfig);

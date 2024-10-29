/**
 * For a detailed explanation regarding each configuration property, visit:
 * https://jestjs.io/docs/configuration
 */

// Configuración de Jest para proyectos TypeScript
module.exports = {
    testEnvironment: 'jsdom',
    transform: {
        '^.+\\.(ts|tsx|js|jsx)$': 'babel-jest',
    },
    moduleNameMapper: {
        '\\.(css|less|scss|sass)$': 'jest-css-modules'
    },
    setupFilesAfterEnv: ['<rootDir>Tests/Config/setupTests.ts'],
    testMatch: [
        '**/__tests__/**/*.+(ts|tsx|js)',
        '**/?(*.)+(spec|test).+(ts|tsx|js)'
    ],
    moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],
};
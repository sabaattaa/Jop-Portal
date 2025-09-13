import nextJest from 'next/jest.js'

const createJestConfig = nextJest({
  dir: './', // Next.js project root
})

/** @type {import('jest').Config} */
const customJestConfig = {
  setupFilesAfterEnv: ['<rootDir>/jest.setup.js'],
  testEnvironment: 'jsdom',
  moduleNameMapper: {
    // CSS/SCSS modules handle karne ke liye
    '^.+\\.(css|scss)$': 'identity-obj-proxy',
  },
}

export default createJestConfig(customJestConfig)

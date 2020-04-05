module.exports = {
    roots: ['<rootDir>/src'],
    transform: {
      '^.+\\.tsx?$': 'ts-jest'
    },
    collectCoverage: true,
    coverageDirectory: './coverage/',
    testRegex: '(/__tests__/.*|(\\.|/)(test|spec))\\.tsx?$',
    testEnvironment: 'node',
    setupFilesAfterEnv: ["<rootDir>/setupTests.ts"],
    moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],
    snapshotSerializers: ["enzyme-to-json/serializer"],
    globals: {
        // we must specify a custom tsconfig for tests because we need the typescript transform
        // to transform jsx into js rather than leaving it jsx such as the next build requires. you
        // can see this setting in tsconfig.jest.json -> "jsx": "react"
        "ts-jest": {
            "tsConfig": "<rootDir>/tsconfig.jest.json",
            diagnostics: false,
        }
    }

  }
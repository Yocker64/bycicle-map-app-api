// eslint.config.js
module.exports = {
  extends: ['wesbos'],
  rules: {
    'prettier/prettier': [
      'error',
      {
        singleQuote: true,
        endOfLine: 'auto',
        tabWidth: 2,
      },
    ],
    'import/no-extraneous-dependencies': [
      'error',
      {
        devDependencies: [
          '**/*.test.js',
          '**/*.test.jsx',
          '**/*.test.ts',
          '**/*.test.tsx',
          '**/webpack.*.js',
          '**/webpack.config.js',
          '**/jest.config.js',
          '**/setupTests.js',
          '**/testbs.js',
          '**/tests.test.js',
          '**/verify.js',
        ],
        optionalDependencies: false,
      },
    ],
  },
};

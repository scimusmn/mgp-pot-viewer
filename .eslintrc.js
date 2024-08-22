const path = require('path');

module.exports = {
  extends: [
    'airbnb',
    'plugin:jsx-a11y/strict',
    'plugin:@react-three/recommended',
  ],
  plugins: ['@react-three'],
  env: {
    browser: true,
  },
  ignorePatterns: [
    'public/*',
    'src/Arduino/arduino-base',
    'src/html.js',
  ],
  rules: {
    'import/no-extraneous-dependencies': 'off',
    // With React-Three Fiber, certain prop names are not recognized by ESLint.
    // We need to ignore those specific prop names.
    // https://github.com/jsx-eslint/eslint-plugin-react/blob/
    // master/docs/rules/no-unknown-property.md
    'react/no-unknown-property': ['error', { ignore: ['object', 'intensity', 'position'] }],
    // The SMM team doesn't write React code in .jsx files exclusively, as is suggested in the
    // Airbnb guide, so override this rule to allow .js files.
    'react/jsx-filename-extension': [
      1,
      {
        extensions: [
          '.js',
          '.jsx',
        ],
      },
    ],
  },
  settings: {
    'import/resolver': {
      alias: {
        map: [
          ['@components', path.resolve(__dirname, './src/components')],
          ['@styles', path.resolve(__dirname, './src/styles')],
        ],
        extensions: ['.ts', '.js', '.jsx', '.json'],
      },
    },
  },
};

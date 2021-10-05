/**
 * @type {import("eslint").Linter.Config}
 */
module.exports = {
  parser: require.resolve('@babel/eslint-parser'),
  extends: ['airbnb', 'prettier'],
  plugins: ['prettier', 'jest', 'react-hooks'],
  env: {
    browser: true,
    node: true,
  },
  rules: {
    'prettier/prettier': 'error',
    'react/jsx-filename-extension': 'off',
    'import/no-extraneous-dependencies': [
      'error',
      {
        devDependencies: [
          '**/__tests__/**/*',
          '**/__mocks__/**/*',
          'setupTest.ts',
          'setupTest-env.d.ts',
          'babel.config.js',
          'webpack.config.ts',
        ],
      },
    ],
    'import/extensions': [
      'error',
      {
        ignorePackages: true,
        pattern: {
          js: 'never',
          ts: 'never',
          json: 'always',
        },
      },
    ],
  },
  settings: {
    'import/resolver': {
      node: {
        extensions: ['.js', '.ts', '.tsx'],
      },
    },
  },
  overrides: [
    {
      files: ['*.ts', '*.tsx'],
      parser: '@typescript-eslint/parser',
      parserOptions: {
        tsconfigRootDir: __dirname,
        project: ['./tsconfig.base.json'],
      },
      extends: [
        'plugin:@typescript-eslint/eslint-recommended',
        'plugin:@typescript-eslint/recommended',
        'plugin:@typescript-eslint/recommended-requiring-type-checking',
      ],
      plugins: ['@typescript-eslint'],
      rules: {
        // note you must disable the base rule as it can report incorrect errors
        'no-use-before-define': 'off',
        '@typescript-eslint/no-use-before-define': ['error'],
        'no-shadow': 'off',
        '@typescript-eslint/no-shadow': ['error'],
      },
    },
    {
      files: [
        'setupTest.ts',
        'setupTest-env.d.ts',
        '**/__tests__/**/*.*',
        '**/__mocks__/**/*.*',
      ],
      parser: '@typescript-eslint/parser',
      parserOptions: {
        tsconfigRootDir: __dirname,
        project: ['./tsconfig.tests.json'],
      },
      env: {
        jest: true,
      },
    },
    {
      files: ['cypress/**/*.*'],
      parser: '@typescript-eslint/parser',
      parserOptions: {
        tsconfigRootDir: __dirname,
        project: ['./cypress/tsconfig.json'],
      },
    },
  ],
};

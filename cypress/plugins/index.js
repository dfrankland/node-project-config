// eslint-disable-next-line spaced-comment
/// <reference types="cypress" />

const cypressExtends = require('@bahmutov/cypress-extends');
const webpack = require('@cypress/webpack-preprocessor');
const codeCoverage = require('@cypress/code-coverage/task');

/**
 * @type {Cypress.PluginConfig}
 */
module.exports = (on, config) => {
  cypressExtends(config.configFile);

  on(
    'file:preprocessor',
    webpack({
      webpackOptions: {
        module: {
          rules: [
            {
              test: /\.tsx?$/,
              use: [
                {
                  loader: require.resolve('babel-loader'),
                },
              ],
            },
          ],
        },
        resolve: {
          extensions: ['.tsx', '.ts', '.js'],
        },
      },
    }),
  );

  codeCoverage(on, config);

  return config;
};

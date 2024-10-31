const baseConfig = require('../../../eslint.base.config.js');
const cypress = require('eslint-plugin-cypress/flat');
const parentConfig = require('../../../eslint.config.js');

module.exports = [
  ...baseConfig,
  cypress.configs['recommended'],
  ...baseConfig,
  {
    // Override or add rules here
    rules: {},
  },
];

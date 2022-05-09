/* eslint-disable @typescript-eslint/no-var-requires */
const { merge } = require('webpack-merge');
const base = require('./webpack.config.base');

module.exports = merge(base, {
  mode: 'development',
  devtool: 'source-map',
});

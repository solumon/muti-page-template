/* eslint-disable @typescript-eslint/no-var-requires */
const { merge } = require('webpack-merge')
const base = require('./webpack.config.base')
const CopyWebpackPlugin = require("copy-webpack-plugin");
const {resolve} = require("path");

module.exports = merge(base, {
    mode: 'development',
    devtool: 'source-map',
    plugins: [
        new CopyWebpackPlugin({
            patterns: [
                {
                    from: resolve('./run'),
                    to: './'
                },
            ]
        }),
    ]
})

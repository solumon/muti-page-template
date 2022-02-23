const { merge } = require('webpack-merge');
const base = require('./webpack.config.base.js');

console.log('base',base)
module.exports = merge(base, {
    mode: "development"
})

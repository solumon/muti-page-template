const { resolve } = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const cwd = process.cwd();
module.exports = {
    entry: './src/index.js',
    output: {
        filename: 'js/app.[contenthash:10].js',
        clean: true,
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: 'public/index.html',
            title: '目录'
        })
    ],
}

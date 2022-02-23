const { resolve } = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const cwd = process.cwd();
module.exports = {
    entry: './src/index.js',
    module: {
        rules: [
            {
                test: /\.js$/,
                loader: "babel-loader",
                exclude: /node_modules/
            },
            {
                test: /\.(png|svg|jpg|jpeg|gif)$/,
                type: "asset"
            }
        ]
    },
    output: {
        filename: 'js/bundle.[contenthash:6].js',
        clean: true,
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: 'public/index.html',
            title: '目录'
        })
    ],
    resolve: {
        alias: {
            "@": resolve(cwd, 'src')
        }
    }
}

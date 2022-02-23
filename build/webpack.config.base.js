const { resolve } = require('path');
const Webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const VueLoaderPlugin = require('vue-loader/lib/plugin-webpack5');
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
                type: "asset",
                parser: {
                    dataUrlCondition: {
                        maxSize: 5 * 1024
                    }
                },
                generator: {
                    filename: 'images/[base]'
                }
            },
            {
                test: /\.vue$/,
                loader: 'vue-loader'
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
        }),
        new VueLoaderPlugin(),
        // 全局注入 Vue, 避免在每个 .vue 文件中重复引入
        new Webpack.ProvidePlugin({
            Vue: ['vue/dist/vue.esm.js', 'default'],
        })
    ],
    resolve: {
        alias: {
            "@": resolve(cwd, 'src')
        },
        extensions: ['.js', '.vue', '.json'],
    }
}

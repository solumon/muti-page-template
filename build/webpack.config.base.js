const { resolve } = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const VueLoaderPlugin = require('vue-loader/lib/plugin-webpack5');
const cwd = process.cwd();
module.exports = {
    entry: './src/main.js',
    module: {
        rules: [
            {
                test: /\.js$/,
                loader: "babel-loader",
                exclude: /node_modules/
            },
            {
                test: /\.css$/,
                use: ["css-loader"],
            },
            // {
            //     test: /\.(png|svg|jpg|jpeg|gif)$/,
            //     type: "asset",
            //     parser: {
            //         dataUrlCondition: {
            //             maxSize: 5 * 1024
            //         }
            //     },
            //     generator: {
            //         filename: 'images/[base]'
            //     }
            // },
            {
                test: /\.vue$/,
                loader: 'vue-loader'
            }
        ]
    },
    output: {
        filename: 'js/[name].js',
        clean: true,
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: 'public/index.html',
            title: '目录'
        }),
        new VueLoaderPlugin()
    ],
    resolve: {
        alias: {
            "@": resolve(cwd, 'src')
        },
        extensions: ['.js', '.vue', '.json'],
    }
}

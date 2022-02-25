const { resolve } = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const VueLoaderPlugin = require('vue-loader/lib/plugin-webpack5');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const glob = require('glob');
const cwd = process.cwd();

const { entry, pages } = (function () {
    let files = glob.sync('src/pages/*/main.js')
    const entry = {};
    const pages = [];
    files.forEach(item => {
        const name = item.split('/')[2];
        entry[name] = resolve(cwd, item);
        const page = new HtmlWebpackPlugin({
            filename: `${name}.html`,
            template: resolve(cwd, `public/templates/${name}.html`),
            chunks: [`${name}`]
        });
        pages.push(page);
    })
    return { entry, pages }
})();
module.exports = {
    entry: entry,
    output: {
        filename: 'js/[name].js',
        clean: true,
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                loader: "babel-loader",
                exclude: /node_modules/
            },
            {
                test: /\.(css|scss|sass)$/,
                use: [
                    {
                        loader: MiniCssExtractPlugin.loader
                    },
                    "css-loader",
                    "postcss-loader",
                    'sass-loader'
                ],
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
                test: /\.(mp3|mp4)$/,
                type: "asset",
                parser: {
                    dataUrlCondition: {
                        maxSize: 5 * 1024
                    }
                },
                generator: {
                    filename: 'media/[base]'
                }
            },
            {
                test: /\.vue$/,
                loader: 'vue-loader'
            }
        ]
    },
    plugins: [
        ...pages,
        new VueLoaderPlugin(),
        new MiniCssExtractPlugin()
    ],
    resolve: {
        alias: {
            "@": resolve(cwd, 'src')
        },
        extensions: ['.js', '.vue', '.json'],
    }
}

/* eslint-disable @typescript-eslint/no-var-requires */
const { resolve } = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const VueLoaderPlugin = require('vue-loader/lib/plugin-webpack5');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');

const glob = require('glob');

const cwd = process.cwd();

const data = (() => {
  const files = glob.sync(resolve(cwd, 'src/*/main.ts'));
  const entry = {};
  const pages = [];
  files.forEach((item) => {
    const [name, last] = item.split('/').slice(-2);
    if (last === 'main.ts' && name) {
      entry[name] = item;
      pages.push(new HtmlWebpackPlugin({
        filename: `${name}.html`,
        template: resolve(cwd, `public/${name}.html`),
        chunks: [`${name}`],
      }));
    }
  });
  return { entry, pages };
})();
module.exports = {
  entry: data.entry,
  output: {
    filename: 'js/[name].[chunkhash:6].js',
    clean: true,
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
      },
      {
        test: /\.ts$/,
        use: [
          'babel-loader',
          'ts-loader',
        ],
        exclude: /node_modules/,
      },
      {
        test: /\.(css|scss|sass)$/,
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
          },
          'css-loader',
          'postcss-loader',
          'sass-loader',
        ],
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/,
        type: 'asset',
        parser: {
          dataUrlCondition: {
            maxSize: 5 * 1024,
          },
        },
        generator: {
          filename: 'images/[base]',
        },
      },
      {
        test: /\.(mp3|mp4)$/,
        type: 'asset',
        parser: {
          dataUrlCondition: {
            maxSize: 5 * 1024,
          },
        },
        generator: {
          filename: 'assets/[base]',
        },
      },
      {
        test: /\.vue$/,
        loader: 'vue-loader',
      },
    ],
  },
  plugins: [
    ...data.pages,
    new VueLoaderPlugin(),
    new MiniCssExtractPlugin({
      filename: 'css/[name].[chunkhash:6].css',
    }),
    new CopyWebpackPlugin({
      patterns: [
        {
          from: resolve('./public/config.json'),
          to: './config.json',
        },
        {
          from: resolve('./public/assets'),
          to: './assets',
        },
      ],
    }),
  ],
  resolve: {
    alias: {
      '@': resolve(cwd, 'src'),
    },
    extensions: ['.js', 'ts', '.vue', '.json'],
  },
};

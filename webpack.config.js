// Reference: https://marcobotto.com/blog/compiling-and-bundling-typescript-libraries-with-webpack/
/* eslint-disable */
const path = require('path');
const TerserPlugin = require('terser-webpack-plugin');
const webpack = require('webpack');
/* eslint-enable */
module.exports = {
  entry: {
    /* eslint-disable */
    cat_lightbox: './src/cat_lightbox.ts',
    'cat_lightbox.min': './src/cat_lightbox.ts',
    /* eslint-enable */
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].js',
    libraryTarget: 'umd',
    // libraryExport: 'default',
    library: 'CatLightbox',
    umdNamedDefine: true,
  },
  resolve: {
    extensions: ['.ts', '.tsx', '.js'],
  },
  devtool: 'source-map',
  optimization: {
    // Reference: https://github.com/webpack-contrib/terser-webpack-plugin#terseroptions
    minimize: true,
    minimizer: [
      new TerserPlugin({
        include: /\.min\.js$/,
      }),
    ],
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        loader: 'ts-loader',
        exclude: /node_modules/,
      },
    ],
  },
};

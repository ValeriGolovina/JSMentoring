const webpack = require('webpack')
const merge = require('webpack-merge')
const common = require('./webpack.common.js')
const HtmlWebpackPlugin = require('html-webpack-plugin');


module.exports = merge(common, {
  mode: 'development',
  devServer: {
   hot: true,
   contentBase: 'src'
  },
  devtool: 'inline-source-map',
  module: {
    rules: [
        {
            test: /\.scss$/,
            use: ['style-loader','css-loader','postcss-loader','sass-loader']
        }
    ]
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
  ],
})

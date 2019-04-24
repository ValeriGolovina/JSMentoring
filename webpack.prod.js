const merge = require('webpack-merge')
const common = require('./webpack.common.js')

const ExtractTextPlugin = require('extract-text-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = merge(common, {
  mode: 'production',
  
  module: {
    rules: [
     {
        test: /\.scss$/,
           use: ExtractTextPlugin.extract({
           fallback: 'style-loader',
           use: ['css-loader', 'sass-loader']
         })
     }
    ]
   },
   plugins: [
     new ExtractTextPlugin('style.css'),
    new HtmlWebpackPlugin({
      filename: 'admin/admin.html',
      chunks: ['admin']
    }),
    new HtmlWebpackPlugin({
      filename: 'user/user.html',
      chunks: ['user']
    })
   ],
   optimization: {
   runtimeChunk: 'single',
    splitChunks: {
      cacheGroups: {
        vendor: {
          test: /[\\/]node_modules[\\/]/,
          name: 'vendors',
          chunks: 'all'
        }
      }
    }
  }
})

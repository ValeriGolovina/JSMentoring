const path = require('path');;
const merge = require('webpack-merge');
const common = require('./webpack.common.js');

const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = merge(common, {
  mode: 'production',
    output: {
        filename: '[name]/[name].[hash].bundle.js',
        path: path.resolve(__dirname, 'dist'),
    },
  module: {
    rules: [
     {
        test: /\.scss$/,
           use: ExtractTextPlugin.extract({
           fallback: 'style-loader',
           use: ['css-loader','postcss-loader','sass-loader']
         })
     }
    ]
   },
   plugins: [
        new ExtractTextPlugin('style.css'),

   ],
   optimization: {
    splitChunks: {
      cacheGroups: {
        vendor: {
          test: /[\\/]node_modules[\\/]/,
          name: 'common',
          chunks: 'all'
        }
      }
    }
  }
})

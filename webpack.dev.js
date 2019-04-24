const webpack = require('webpack')
const merge = require('webpack-merge')
const common = require('./webpack.common.js')

module.exports = merge(common, {
  mode: 'development',
  devServer: {
   hot: true,
   contentBase: './dist'
  },
  devtool: 'inline-source-map',
  module: {
    rules: [
        {
            test: /\.scss$/,
            use: ['style-loader','css-loader','sass-loader']
        }
    ]
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin()
  ],
})

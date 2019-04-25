const path = require('path');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: {
    user: './src/user/user.js',
    admin: './src/admin/admin.js',
      common: './src/index.js'
  },
  module: {
    rules: [
        {   enforce: "pre",
            test: /\.js$/,
            exclude: /node_modules/,
            loader: "eslint-loader"
        },
        {
            test: /\.js$/,
            exclude: /node_modules/,
            use: {
            loader: 'babel-loader',
          }
        },
        {
          test: /\.tsx?$/,
          use: 'ts-loader',
          exclude: /node_modules/
        }
    ]
  },
  resolve: {
    extensions: [ '.tsx', '.ts', '.js' ]
  },
  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      title: 'My perfect app',
        filename: 'index.html',
        chunks: ['common']
    }),
      new HtmlWebpackPlugin({
          filename: 'admin/admin.html',
          chunks: ['admin']
      }),
      new HtmlWebpackPlugin({
          filename: 'user/user.html',
          chunks: ['user']
      })
  ]
}

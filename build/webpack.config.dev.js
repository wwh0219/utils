const merge = require('webpack-merge')
const base = require('./webpack.config')()
const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
module.exports = merge(base, {
  entry: {
    index: './example/index.ts'
  },
  mode: 'development',
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, '../example/index.html'),
      filename: 'index.html',
      inject: true
    })
  ],
  optimization: {
    minimize: false
  },
  devtool: 'source-map'
})
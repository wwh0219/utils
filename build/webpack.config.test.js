const merge = require('webpack-merge')
const prod=require('./webpack.config')()
module.exports = merge(prod, {
  mode:'development',
  output: {
    filename: '[name].js',
  },
  devtool:'#source-map'
})
const path = require('path')
const pkgJSON = require('../package.json')
const typeMap = {
  cjs: 'commonjs2',
  umd: 'umd'
}
module.exports = (type) => {
  let externals = []
  //UMD模式下将依赖也进行打包
  if (type !== 'umd' && process.env.NODE_ENV === 'production') {
    externals.push(
      ...Object.keys(pkgJSON.dependencies),
      (context, request, callback) => {
        if (/core-js|corejs|tslib/g.test(request)) {
          return callback(null, 'commonjs ' + request)
        }
        callback()
      }
    )
  }
  return {
    entry: {
      index: './src/index.ts'
    },
    mode: 'production',
    output: {
      filename: `[name].${type}.js`,
      path: path.resolve(__dirname, '../lib'),
      libraryTarget: typeMap[type],
      library: pkgJSON.namespace,
      libraryExport: 'default'
    },
    module: {
      rules: [
        {
          test: /\.ts$/,
          include: [
            path.resolve(__dirname, '../src'),
            path.resolve(__dirname, '../test'),
            path.resolve(__dirname, '../example'),
          ],
          exclude: /node_modules/,
          loader: [
            {
              loader: 'babel-loader'
            },
            'ts-loader',
          ]
        },
        {
          test: /\.js$/,
          include: [
            path.resolve(__dirname, '../src'),
            path.resolve(__dirname, '../test'),
            path.resolve(__dirname, '../example'),
          ],
          exclude: /node_modules/,
          loader: [
            {
              loader: 'babel-loader'
            }
          ]
        }
      ]
    },
    resolve: {
      extensions: ['.ts', '.tsx', '.js', '.json']
    },
    externals,
    devtool: 'none',
    optimization: {
      minimize: type === 'umd'
    }
  }
}
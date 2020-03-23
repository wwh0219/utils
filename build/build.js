const rimraf = require('rimraf')
const path = require('path')
const webpack = require('webpack')
const moduleTypes = ['cjs', 'umd']
const argv = require('yargs').argv
rimraf(path.resolve(__dirname, '../lib'), async () => {
  const compilers = moduleTypes.map(m => {
    const compiler = webpack(require('./webpack.config')(m))
    return compiler
  })
  const log = (err, res) => {
    console.log(res.toString({
      chunks: false,  // 使构建过程更静默无输出
      colors: true    // 在控制台展示颜色
    }))
  }
  for (let compiler of compilers) {
    if (argv.watch) {
      compiler.watch(undefined, log)
    } else {
      compiler.run(log)
    }
  }
})
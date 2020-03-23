const Webpack = require('webpack')
const WebpackDevServer = require('webpack-dev-server')
const webpackConfig = require('../build/webpack.config.dev')
const options = {
  contentBase: false,
  compress: true,
  hot: true,
  host:'0.0.0.0'
}
// WebpackDevServer.addDevServerEntrypoints(webpackConfig, options);
const PORT=5002
const compiler = Webpack(webpackConfig)
const server = new WebpackDevServer(compiler,options)

server.listen(PORT, '0.0.0.0', () => {
  console.log(`Starting server on http://localhost:${PORT}`)
})
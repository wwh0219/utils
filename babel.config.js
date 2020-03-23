const plugins = [
  [
    '@babel/plugin-transform-runtime',
    {
      'absoluteRuntime': false,
      'corejs': 3,
      'helpers': true,
      'regenerator': true,
      'useESModules': false
    }
  ]
]
if (process.env.NODE_ENV === 'production') {
  plugins.push('transform-remove-console')
}
if (process.env.NODE_ENV === 'test') {
  plugins.push('istanbul')
}
module.exports = {
  presets: [
    [
      '@babel/preset-env',
      {
        useBuiltIns: false,
        targets: '> 0.25%, not dead'
      }
    ]
  ],
  plugins
}
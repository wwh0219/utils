import babel from 'rollup-plugin-babel';
import resolve from 'rollup-plugin-node-resolve';
import commonjs from 'rollup-plugin-commonjs';
import { uglify } from 'rollup-plugin-uglify';
import packages from './package.json'
const config = {
  input: 'src/index.js',
  output: {
    file: `lib/index.${process.env.TYPE}.js`,
    format: process.env.TYPE,
    name: 'statist'
  },
  plugins: [
    babel(
      {
        exclude: 'node_modules/**',
        plugins: ['external-helpers', 'transform-runtime'],
        runtimeHelpers: true
      }
    ),
    resolve({
      jsnext: true,
      main: true,
      browser: true
    }),
    commonjs(),
    // uglify()
  ],
}

if (process.env.TYPE === 'cjs'){
  config.external=Object.keys(packages.dependencies)
}
export default config
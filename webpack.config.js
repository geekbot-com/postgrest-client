'use strict'

const webpack = require('webpack')

const optimize = webpack.optimize

const minify = process.env.MINIFY === 'true'

const banner = [
  'PostgREST Client',
  '(c) 2016 Caleb Meredith',
  'Released under the MIT License.'
].join('\n')

module.exports = {
  entry: './index.js',
  output: {
    path: './dist',
    filename: minify ? 'postgrest-client.min.js' : 'postgrest-client.js',
    library: 'PostgREST',
    libraryTarget: 'var'
  },
  target: 'web',
  bail: true,
  plugins: [
    new webpack.BannerPlugin(banner),
    new optimize.DedupePlugin()
  ]
}

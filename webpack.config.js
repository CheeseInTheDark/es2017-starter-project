var path = require('path')

module.exports = {
  entry: ['babel-polyfill', './source/index.js'],
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'build')
  },
  module: {
    loaders: [{
      test: /\.js$/,
      exclude: /node_modules/,
      loader: 'babel-loader',
      query: {
        presets: ['es2017', 'es2016', 'es2015']
      }
    }]
  }
}
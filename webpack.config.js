const webpack = require('webpack')

const plugins = [
  new webpack.DefinePlugin({
    'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV)
  })
]

if (process.env.NODE_ENV === 'production') {
  plugins.push(new webpack.optimize.UglifyJsPlugin())
}

module.exports = {
  entry: ['./src/index.js'],
  output: {
    library: 'cssVendor',
    libraryTarget: 'umd'
  },
  plugins,
  module: {
    rules: [{
      loader: 'babel-loader',
      test: /\.js$/,
      exclude: /node_modules/
    }]
  },
  node: {
    fs: 'empty',
  }
}

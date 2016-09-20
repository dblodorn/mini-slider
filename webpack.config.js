const path = require('path')
const webpack = require('webpack')
const PATHS = {
  app: path.join(__dirname, './public/_js/')
}

module.exports = {
  entry: {
    app: ['./_src/mini-slider.js']
  },
  output: {
    path: path.resolve(__dirname, './dist'),
    publicPath: 'dist',
    filename: 'mini-slider.js'
  },
  resolveLoader: {
    root: path.join(__dirname, 'node_modules'),
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        loader: 'babel',
        exclude: /node_modules/
      },{
        test: /\.sass|css$/,
        loaders: [
          "style",
          "css",
          "sass"
        ]
      }
    ]
  }
}
if (process.env.NODE_ENV === 'production') {
  module.exports.output = {
    path: path.resolve(__dirname, './src'),
    filename: './mini-slider.js'
  }
  module.exports.plugins = (module.exports.plugins || []).concat([
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: '"production"'
      }
    }),
    new webpack.optimize.DedupePlugin(),
    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.optimize.UglifyJsPlugin({
      compressor: {
        warnings: false
      },
      output: {
        comments: false
      }
    }),
    new webpack.NoErrorsPlugin()
  ])
}
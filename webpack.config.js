var webpack = require('webpack');
var path = require('path');
var autoprefixer = require('autoprefixer');

module.exports = {
  context: path.resolve(__dirname, 'app'),
  entry: {
    bundle: './app.js',
    vendors: ['angular']
  },
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'app'),
  },
  module: {
    loaders: [{
      test: /\.js$/,
      loader: 'babel',
      exclude: /node_modules/
    }, {
      test: /\.html$/,
      loader: 'raw'
    }, {
      test: /\.scss$/,
      loader: 'style!css?sourceMap!postcss-loader!sass?sourceMap'
    }]
  },
  plugins: [
    new webpack.optimize.CommonsChunkPlugin('vendors', 'vendors.js')
  ],
  postcss: function() {
    return [autoprefixer];
  }
};

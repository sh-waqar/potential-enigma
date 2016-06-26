const webpack = require('webpack');
const path = require('path');
const autoprefixer = require('autoprefixer');
const HtmlWebpackPlugin = require('html-webpack-plugin')

const config = {
  context: path.resolve(__dirname, 'app'),
  entry: {
    bundle: './app.js',
    vendors: ['angular']
  },
  output: {
    filename: 'bundle.[chunkhash].js',
    path: path.resolve(__dirname, 'dist'),
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
    new webpack.optimize.CommonsChunkPlugin('vendors', 'vendors.js'),
    new HtmlWebpackPlugin({
      template: './index.html'
    })
  ],
  postcss: function() {
    return [autoprefixer];
  }
};

if (process.env.NODE_ENV === 'production') {
  config.output.path = __dirname + '/dist';
  config.plugins.push(new webpack.optimize.UglifyJsPlugin());
}

module.exports = config;

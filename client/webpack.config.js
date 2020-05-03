const path = require('path');

module.exports = {
  entry: './src/index.js',
  mode: 'development',
  output: {
    path: path.join(__dirname, 'build'),
    filename: 'bundle.js',
    publicPath: '/build/'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
        options: {
          presets: ['env']
        }
      }
    ]
  },
  devtool: 'source-map',
  devServer: {
    contentBase: path.join(__dirname),
    port: 9000
  },
  watch: true,
}
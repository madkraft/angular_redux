var path = require('path')
var yeticss = require('yeticss')

module.exports = {
  devtool: 'source-map',
  context: __dirname + '/src',
  entry: './js/app.js',
  output: {
    filename: 'bundle.js',
    path: __dirname + '/src'
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: path.join(__dirname, 'node_modules'),
        loaders: ['ng-annotate', 'babel?presets[]=es2015']
      },
      {
        test: /\.styl$/,
        loaders: ['style', 'css', 'stylus']
      },
      {
        test: /\.html$/,
        loader: 'raw'
      }
    ]
  },
  stylus: {
    use: [yeticss()]
  },
  devServer: { inline: true }
}

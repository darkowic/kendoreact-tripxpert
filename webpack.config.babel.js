var path = require('path');
var HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: './app/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'index_bundle.js',
    publicPath: '/',
  },
  module: {
    rules: [
      {
        test: /\.(js)$/,
        use: 'babel-loader',
      },
      {
        test: /\.css$/,
        loaders: ['style-loader', 'css-loader'],
      }, {
        test: /\.(JPE?G|jpe?g|png|gif|woff|woff2|eot|ttf)(\?[a-z0-9=.]+)?$/,
        loader: 'url-loader?limit=100000',
      }, {
        test: /\.svg$/,
        use: ['@svgr/webpack'],
      },
    ],
  },
  mode: 'development',
  resolve: {
    extensions: ['.js', '.jsx'],
  },
  devServer: {
    historyApiFallback: true,
    proxy: {
      '/api': 'http://localhost:8090',
    },
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: 'app/index.html',
    }),
  ],
};

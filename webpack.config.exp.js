var ExtractTextPlugin = require('extract-text-webpack-plugin')
var HtmlWebpackPlugin = require('html-webpack-plugin')
var webpack = require('webpack')

module.exports = {
  entry: {
    app: [
      'react-hot-loader/patch',
      'webpack-dev-server/client?http://localhost:8080',
      'webpack/hot/only-dev-server',
      './src/main.js'
    ],
    vendor: [
      'react',
      'react-dom',
      'history',
      'react-redux',
      'react-router-redux',
      'redux-thunk'
    ]
  },
  output: {
    path: __dirname,
    publicPath: '/',
    filename: `[name].[hash].js` // 'bundle.js'
  },
  target: 'web',
  module: {
    rules: [
      {
        test: /\.js|jsx$/,
        exclude: /node_modules/,
        use: [
          {
            loader: 'babel-loader'
          }
        ]
      },
      {
        test: /\.scss$/,
        use: ExtractTextPlugin.extract({
          fallbackLoader: 'style-loader',
          loader: 'css-loader?-minimize&modules&importLoaders=1&localIdentName=[name]__[local]___[hash:base64:5]!sass-loader'
        })
      }
    ]
  },
  plugins: [
    new ExtractTextPlugin({
      filename: '[name].[contenthash].css',
      allChunks: true
    }),
    new HtmlWebpackPlugin({
      title: 'Our first webpack',
      template: './index.html',
      hash: false,
      inject: 'body',
      minify: {
        collapseWhitespace: true
      }
    }),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NamedModulesPlugin()
  ],
  devtool: 'inline-source-map',
  devServer: {
    host: 'localhost',
    port: 8080,
    historyApiFallback: true,
    contentBase: './'
  }
}

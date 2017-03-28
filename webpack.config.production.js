var path = require('path')
var ExtractTextPlugin = require('extract-text-webpack-plugin')
var HtmlWebpackPlugin = require('html-webpack-plugin')
var webpack = require('webpack')

module.exports = {
  entry: {
    app: ['./src/main.js'],
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
    filename: `[name].[hash].js`,
    path: path.resolve(__dirname, 'dist'),
    publicPath: path.resolve(__dirname, 'dist') + '/'
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
          fallback: 'style-loader',
          use: 'css-loader?-minimize&modules&importLoaders=1&localIdentName=[name]__[local]___[hash:base64:5]!sass-loader'
        })
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'our first webpack',
      template: './index.html',
      hash: false,
      inject: 'body',
      minify: {
        collapseWhitespace: true
      }
    }),
    new webpack.optimize.UglifyJsPlugin({
      compress: {
        warnings: false,
        dead_code: true,
        evaluate: true,
        join_vars: true
      },
      output: {
        comments: false
      }
    }),
    new ExtractTextPlugin({
      filename: '[name].[contenthash].css',
      allChunks: true
    })
  ]
}

module.exports = {
  entry: [
    './src/main.js'
  ],
  output: {
    path: __dirname,
    publicPath: '/',
    filename: 'bundle.js'
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader'
      },
      {
        test: /\.scss$/,
        loader: 'style-loader!css-loader?-minimize&modules&importLoaders=1&localIdentName=[name]__[local]___[hash:base64:5]!sass-loader'
      }
    ]
  },
  resolve: {
    extensions: ['.js', '.jsx']
  },
  devServer: {
    hot: true,
    inline: true,
    historyApiFallback: true,
    contentBase: './',
    publicPath: '/'
  }
}

module.exports = {
  devtool: 'eval-source-map',
  entry:  __dirname + "/src/index.js",
  output: {
    path: __dirname + "/build",
    filename: "bundle.js"
  },
  module: {
    loaders: [
      {
        test: /\.json$/,
        loader: "json-loader"
      },{
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader'
      },{
        test: /\.less$/,
        loader:'style-loader!css-loader!less-loader'
      }
    ]
  },
  devServer: {
    contentBase: "./public",
    historyApiFallback: true,
    inline: true
  }
}

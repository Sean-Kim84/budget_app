// entry -> output
const path = require('path');

module.exports = {
  entry: './src/app.js',
  output: {
    path: path.join(__dirname, 'public'),
    filename: 'bundle.js'
  },
  module: {
    rules: [{
      loader: 'babel-loader',
      test: /\.js$/,
      exclude: /node_modules/
    }, {
      test: /\.s?css$/,
      use: [
        "style-loader", // creates style nodes from JS strings
        "css-loader", // translates CSS into CommonJS
        "sass-loader" // compiles Sass to CSS, using Node Sass by default
      ]
    }]
  },
  devtool: 'cheap-module-eval-source-map', // chrome에서 어디에 error가 발생했는지 정확하게 알려준다
  devServer: {
    contentBase: path.join(__dirname, 'public'), // package.json 에 명령어설정해야 한다
    historyApiFallback: true // react-router-dom 설정시 webpack 개발 서버에 대한 모든 요청이 곧바로 / (index.html)로 라우팅된다
  }
};
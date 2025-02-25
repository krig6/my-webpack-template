const path = require('path');
const HTMLWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: {
    bundle: path.resolve(__dirname, 'src/index.js')
  },
  output: {
    filename: '[name].[contenthash].js',
    path: path.resolve(__dirname, 'dist'),
    clean: true
  },
  plugins: [
    new HTMLWebpackPlugin({
      template: './src/template.html',
      filename: 'index.html',
      title: 'Webpack Template'
    }),
  ],
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: ['style-loarder', 'css-loader']
      },
      {
        test: /\.(png|jpe?g|svg|fig)$/i,
        type: 'asset/resource',
        generator: {
          filename: 'assets/images/[name][ext]'
        }
      }
    ],
  },
};

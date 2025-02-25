import { resolve } from 'path';

import HTMLWebpackPlugin from 'html-webpack-plugin';

export const entry = {
  bundle: resolve(__dirname, 'src/index.js')
};
export const output = {
  filename: '[name].[contenthash].js',
  path: resolve(__dirname, 'dist'),
  clean: true
};
export const plugins = [
  new HTMLWebpackPlugin({
    template: './src/template.html',
    filename: 'index.html',
    title: 'Webpack Template'
  }),
];
export const module = {
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
};

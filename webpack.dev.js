import { merge } from 'webpack-merge';

import common from './webpack.common';

import { resolve } from 'path';

export default merge(common, {
  mode: 'development',
  devtool: 'inline-source-map',
  devServer: {
    static: {
      directory: resolve(__dirname, 'dist')
    },
    hot: true,
    open: true,
    compress: true,
    port: 3000
  },
});

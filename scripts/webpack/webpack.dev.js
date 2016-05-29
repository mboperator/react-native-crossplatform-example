import webpack from 'webpack';
import baseConfig from './webpack.base';

const HOST = 'localhost';
const PORT = '8080';

const devConfig = baseConfig.mergeDeep({

  entry: {
    web: [
      'babel-regenerator-runtime',
      `webpack-dev-server/client?http://${HOST}:${PORT}`,
      'webpack/hot/dev-server',
      './src/web',
    ],
  },

  output: {
    path: '/build/',
    filename: '[name].hot.js',
    publicPath: `http://${HOST}:${PORT}/build/`,
    devtoolModuleFilenameTemplate: '/[absolute-resource-path]',
  },

  module: {
    loaders: [
      {
        test: [/\.js$/, /\.jsx$/],
        loaders: ['babel'],
        exclude: /node_modules/,
      },
      {
        test: [/\.sass$/, /\.scss$/],
        loader: 'style!css?sourceMap!autoprefixer?browsers=last 2 versions!sass?sourceMap',
      },
      {
        test: /\.css$/,
        loader: 'style!css',
      },
    ],
  },

  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin(),
  ],

  debug: true,

  devtool: '#eval-source-map',
});

export default devConfig;

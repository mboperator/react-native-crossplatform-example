import { fromJS } from 'immutable';
import webpack from 'webpack';
import { path as rootPath } from 'app-root-path';


export default fromJS({

  context: rootPath,

  entry: {
    web: './src/web',
  },

  module: {
    loaders: [
      {
        test: [/\.js$/, /\.jsx$/],
        loaders: ['babel'],
        exclude: /node_modules/,
      },
      {
        test: /\.json$/,
        loader: 'json',
      },
    ],
  },

  resolve: {
    modulesDirectories: [
      '_shared',
      'node_modules',
    ],
    alias: {
      'react-native': 'react',
    },
    extensions: ['', '.js', '.jsx', '.json', '.css', '.sass', '.scss'],
  },

  node: {
    process: true,
  },

});

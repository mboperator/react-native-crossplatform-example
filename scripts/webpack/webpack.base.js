import { fromJS } from 'immutable';
import { path as rootPath } from 'app-root-path';

export default fromJS({

  context: rootPath,

  entry: {
    app: './src/index.web',
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
      'node_modules',
      '_shared',
    ],
    extensions: ['', '.js', '.jsx', '.json', '.css', '.sass', '.scss'],
  },

  node: {
    process: true,
  },

});

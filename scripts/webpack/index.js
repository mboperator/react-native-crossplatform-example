import devConfig from './webpack.dev';
import webpackDevServer from 'webpack-dev-server';
import webpack from 'webpack';

const HOST = 'localhost';
const PORT = '8080';

let config = devConfig;
let contentBase = `http://${HOST}:${PORT}`;
const compiler = webpack(config.toJS());

console.info('Starting development server. Please wait...');

const server = new webpackDevServer(compiler, {
  // Configure hot replacement
  hot: true,

  // The rest is terminal configurations
  quiet: false,
  noInfo: false,
  lazy: false,
  publicPath: `${contentBase}/build`,
  contentBase: './public',
  stats: {
    colors: true,
  },
});

server.listen(PORT, HOST);

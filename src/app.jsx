import React from 'react';
import { browserHistory, Router } from 'react-router';
import { render } from 'react-dom';
import { Provider } from 'react-redux';

import routes from './routes';
import store from 'modules';
require('grommet/grommet.min.css');

const ExampleApp = () => (
  <Provider store={store}>
    <Router history={browserHistory} routes={routes} />
  </Provider>
);

document.addEventListener('DOMContentLoaded', () => {
  const node = document.querySelector('#mountPoint');
  render(<ExampleApp />, node);
});

import React from 'react';
import { browserHistory, Router } from 'react-router';
import { render } from 'react-dom';
import { Provider } from 'react-redux';

import routes from './routes';
import modules from 'modules';
import generateStore from 'utils/generateStore';

require('grommet/grommet.min.css');

const ExampleApp = () => (
  <Provider store={generateStore(modules)}>
    <Router history={browserHistory} routes={routes} />
  </Provider>
);

document.addEventListener('DOMContentLoaded', () => {
  const node = document.querySelector('#mountPoint');
  render(<ExampleApp />, node);
});

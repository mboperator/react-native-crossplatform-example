import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';

import Home from './web/Home';
import store from 'modules/store';

const ExampleApp = () => (
  <Provider store={store}>
    <Home />
  </Provider>
);

document.addEventListener('DOMContentLoaded', () => {
  const node = document.querySelector('#mountPoint');
  render(<ExampleApp />, node);
});

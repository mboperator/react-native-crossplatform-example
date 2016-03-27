import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';

import ConnectedTodos from './handlers/ConnectedTodos';
import store from './modules/store';

const ExampleApp = () => (
  <Provider store={store}>
    <ConnectedTodos />
  </Provider>
);

document.addEventListener('DOMContentLoaded', () => {
  const node = document.querySelector('#app');
  render(<ExampleApp />, node);
});

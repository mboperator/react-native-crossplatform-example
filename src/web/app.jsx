import React from 'react';
import { browserHistory, Router } from 'react-router';
import { Provider } from 'react-redux';

import routes from './routes';
import modules from 'modules';
import generateStore from 'utils/generateStore';

const App = () => (
  <Provider store={generateStore(modules)}>
    <Router history={browserHistory} routes={routes} />
  </Provider>
);

export default App;

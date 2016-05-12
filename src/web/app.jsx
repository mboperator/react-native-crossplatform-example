import React from 'react';
import { browserHistory, Router } from 'react-router';
import { Provider } from 'react-redux';

import routes from './routes';
import modules from 'modules';
import sagas from 'sagas';
import generateStore from 'utils/generateStore';

const App = () => (
  <Provider store={generateStore(modules, sagas)}>
    <Router history={browserHistory}>
      {routes}
    </Router>
  </Provider>
);

export default App;

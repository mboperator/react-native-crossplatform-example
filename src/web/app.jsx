import React from 'react';
import { browserHistory, Router } from 'react-router';
import { Provider } from 'react-redux';
import sagas from '../_shared/sagas';
import routes from './routes';
import modules from 'modules';
import generateStore from 'utils/generateStore';
const store = generateStore(modules);
store.runSaga(sagas);

const App = () => (
  <Provider store={store}>
    <Router history={browserHistory}>
      {routes}
    </Router>
  </Provider>
);

export default App;

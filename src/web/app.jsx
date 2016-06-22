import React from 'react';
import { browserHistory, Router } from 'react-router';
import { ModuleProvider } from 'redux-modules';
import sagas from '../_shared/sagas';
import routes from './routes';
import generateStore from 'utils/generateStore';

const store = generateStore();
store.runSaga(sagas);

const App = () => (
  <ModuleProvider store={store}>
    <Router history={browserHistory}>
      {routes}
    </Router>
  </ModuleProvider>
);

export default App;

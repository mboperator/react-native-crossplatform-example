import React from 'react';
import { Provider } from 'react-redux';

import Home from './views/Home';
import modules from '../_shared/modules';
import generateStore from '../_shared/utils/generateStore';
const store = generateStore(modules);
import sagas from '../_shared/sagas';
store.runSaga(sagas);

const ConnectedApp = () => (
  <Provider store={store}>
    <Home />
  </Provider>
);

export default ConnectedApp;

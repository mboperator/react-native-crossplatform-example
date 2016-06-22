import React from 'react';
import { ModuleProvider } from 'redux-modules';
import Home from './views/Home';
import generateStore from '../_shared/utils/generateStore';
import sagas from '../_shared/sagas';

const store = generateStore();
store.runSaga(sagas);

const ConnectedApp = () => (
  <ModuleProvider store={store}>
    <Home />
  </ModuleProvider>
);

export default ConnectedApp;

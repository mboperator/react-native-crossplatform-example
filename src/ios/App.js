import React from 'react';
import { Provider } from 'react-redux';

import Home from './views/Home';
import modules from '../_shared/modules';
import sagas from '../_shared/sagas';
import generateStore from '../_shared/utils/generateStore';

const ConnectedApp = () => (
  <Provider store={generateStore(modules, sagas)}>
    <Home />
  </Provider>
);

export default ConnectedApp;

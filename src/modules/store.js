import { createStore, applyMiddleware, compose } from 'redux';
import { List, fromJS } from 'immutable';
import createLogger from 'redux-logger';

import { reducer } from './todo';

const logger = createLogger({
  stateTransformer: object => fromJS(object).toJS(),
  actionTransformer: object => fromJS(object).toJS(),
  collapsed: true,
  logErrors: false,
});

const createStoreWithMiddleware = compose(
  applyMiddleware(logger)
)(createStore);

export default createStoreWithMiddleware(reducer, List());

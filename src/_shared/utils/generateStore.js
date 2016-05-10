import { createStore, applyMiddleware, compose, combineReducers } from 'redux';
import { fromJS } from 'immutable';
import createLogger from 'redux-logger';

const logger = createLogger({
  stateTransformer: object => fromJS(object).toJS(),
  actionTransformer: object => fromJS(object).toJS(),
  collapsed: true,
  logErrors: false,
});

const createStoreWithMiddleware = compose(
  applyMiddleware(logger)
)(createStore);

export default function generateStore(reducer) {
  return createStoreWithMiddleware(combineReducers(reducer), {});
}

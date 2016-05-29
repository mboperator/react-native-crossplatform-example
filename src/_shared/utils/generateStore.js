import { createStore, applyMiddleware, compose, combineReducers } from 'redux';
import { fromJS } from 'immutable';
import createLogger from 'redux-logger';
import createSagaMiddleware from 'redux-saga';

const logger = createLogger({
  stateTransformer: object => fromJS(object).toJS(),
  actionTransformer: object => fromJS(object).toJS(),
  collapsed: true,
  logErrors: false,
});

const sagaMiddleware = createSagaMiddleware({});

export default function generateStore(reducer) {
  const store = createStore(
    combineReducers(reducer),
    applyMiddleware(logger, sagaMiddleware)
  );
  return {
    ...store,
    runSaga: sagaMiddleware.run,
  };
}

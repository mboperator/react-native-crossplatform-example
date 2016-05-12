import { createStore, applyMiddleware, compose, combineReducers } from 'redux';
import { fromJS } from 'immutable';
import createLogger from 'redux-logger';
import createSagaMiddleware from 'redux-saga';

const sagaMiddleware = createSagaMiddleware();

const logger = createLogger({
  stateTransformer: object => fromJS(object).toJS(),
  actionTransformer: object => fromJS(object).toJS(),
  collapsed: true,
  logErrors: false,
});

const createStoreWithMiddleware = compose(
  applyMiddleware(logger, sagaMiddleware)
)(createStore);

export default function generateStore(reducer, sagas = false) {
  const store = createStoreWithMiddleware(
    combineReducers(reducer),
    {}
  );

  sagas && sagaMiddleware.run(sagas);

  return store;
}

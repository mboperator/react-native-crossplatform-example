import { createStore, applyMiddleware } from 'redux';
import { fromJS, Map } from 'immutable';
import createLogger from 'redux-logger';
import createSagaMiddleware from 'redux-saga';

const logger = createLogger({
  stateTransformer: object => fromJS(object).toJS(),
  actionTransformer: object => fromJS(object).toJS(),
  collapsed: true,
  logErrors: false,
});

const sagaMiddleware = createSagaMiddleware({});

export default function generateStore() {
  const store = createStore(
    (state = Map()) => state,
    applyMiddleware(logger, sagaMiddleware)
  );
  return {
    ...store,
    runSaga: sagaMiddleware.run,
  };
}

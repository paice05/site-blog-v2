import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { composeWithDevTools } from 'redux-devtools-extension';

import rootReducers from './ducks';
import rootSagas from './sagas';

const sagaMiddleware = createSagaMiddleware();

const store = createStore(rootReducers, composeWithDevTools(applyMiddleware(
  sagaMiddleware,
)));

sagaMiddleware.run(rootSagas);

export default store;

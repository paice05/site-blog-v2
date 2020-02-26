import createSagaMiddleware from 'redux-saga';
import storage from 'redux-persist/lib/storage';
import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { persistStore, persistReducer } from 'redux-persist';

import rootReducers from './ducks';
import rootSagas from './sagas';

const persistConfig = {
  key: 'root',
  storage,
};

const persistedReducer = persistReducer(persistConfig, rootReducers);

const sagaMiddleware = createSagaMiddleware();

const store = createStore(persistedReducer, composeWithDevTools(applyMiddleware(
  sagaMiddleware,
)));

const persistor = persistStore(store);

sagaMiddleware.run(rootSagas);

export default {
  store,
  persistor,
};

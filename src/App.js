import React from 'react';

import { PersistGate } from 'redux-persist/integration/react';
import { Provider } from 'react-redux';

// store
import redux from './store';

// routes
import Routes from './routes';

function App() {
  return (
    <div className="App">
      <Provider store={redux.store}>
        <PersistGate loading={null} persistor={redux.persistor}>
          <Routes />
        </PersistGate>
      </Provider>
    </div>
  );
}

export default App;

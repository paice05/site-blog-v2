import React from 'react';

import { Provider } from 'react-redux';

// store
import store from './store';

// routes
import Routes from './routes';

function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <Routes />
      </Provider>
    </div>
  );
}

export default App;

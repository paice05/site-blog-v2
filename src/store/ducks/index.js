import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';

import { reducersAuth as auth } from './auth';

const rootReducers = combineReducers({
  auth,
  form: formReducer,
});

export default rootReducers;

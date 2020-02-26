import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';

import { reducersAuth as auth } from './auth';
import { reducerAuthors as authors } from './authors';

const rootReducers = combineReducers({
  auth,
  authors,
  form: formReducer,
});

export default rootReducers;

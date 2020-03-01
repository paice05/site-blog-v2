import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';

import { reducersAuth as auth } from './auth';
import { reducerAuthors as authors } from './authors';
import { reducersPosts as posts } from './posts';

const rootReducers = combineReducers({
  auth,
  authors,
  posts,
  form: formReducer,
});

export default rootReducers;

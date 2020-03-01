import { all } from 'redux-saga/effects';

import auth from './auth';
import authors from './authors';
import me from './me';
import posts from './posts';

function* rootSagas() {
  yield all([
    auth(),
    authors(),
    me(),
    posts(),
  ]);
}

export default rootSagas;

import { all } from 'redux-saga/effects';

import auth from './auth';
import authors from './authors';
import me from './me';

function* rootSagas() {
  yield all([
    auth(),
    authors(),
    me(),
  ]);
}

export default rootSagas;

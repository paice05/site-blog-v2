import { all } from 'redux-saga/effects';

import auth from './auth';
import authors from './authors';

function* rootSagas() {
  yield all([
    auth(),
    authors(),
  ]);
}

export default rootSagas;

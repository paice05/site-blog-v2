import {
  call, put, takeLatest, select,
} from 'redux-saga/effects';

import { list, create } from '../../service/axios';

import { typesAuthors } from '../ducks/authors';
import { typesAuth } from '../ducks/auth';

function* listAuthors() {
  const meId = yield select((state) => state.me.user.id);
  try {
    const data = yield call(list, '/authors');
    const response = yield data.filter((author) => author.id !== meId);
    yield put({ type: typesAuthors.AUTHORS_LIST_SUCCESS, payload: response });
  } catch (error) {
    yield put({ type: typesAuthors.AUTHORS_LIST_ERROR });
  }
}

function* createAuthors({ payload }) {
  try {
    const { username, password } = yield create('/authors', payload);

    yield put({ type: typesAuthors.AUTHORS_CREATE_SUCCESS });
    yield put({
      type: typesAuth.AUTH_TOKEN,
      payload: {
        username,
        password,
      },
    });
  } catch (error) {
    yield put({ type: typesAuthors.AUTHORS_CREATE_ERROR });
  }
}

function* watcherAuthors() {
  yield takeLatest(typesAuthors.AUTHORS_LIST, listAuthors);
  yield takeLatest(typesAuthors.AUTHORS_CREATE, createAuthors);
}

export default watcherAuthors;

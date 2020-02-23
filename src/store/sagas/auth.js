import { takeLatest, call, put } from 'redux-saga/effects';

import { typesAuth } from '../ducks/auth';

import { create, list } from '../../service/axios';

function* auth({ payload: { username, password } }) {
  try {
    const response = yield call(create, '/auth', { username, password });

    yield put({ type: typesAuth.AUTH_TOKEN_SUCCESS });
    yield put({ type: typesAuth.AUTH_LOGIN, payload: response.token });
  } catch (error) {
    yield put({ type: typesAuth.AUTH_TOKEN_ERROR });
  }
}

function* login({ payload }) {
  try {
    const response = yield call(list, '/me', {
      headers: {
        authorization: `Bearer ${payload}`,
      },
    });

    yield put({
      type: typesAuth.AUTH_LOGIN_SUCCESS,
      payload: {
        user: response,
        token: payload,
      },
    });
  } catch (error) {
    yield put({ type: typesAuth.AUTH_LOGIN_ERROR });
  }
}

function* logout() {
  yield put({ type: typesAuth.AUTH_LOGOUT_SUCCESS });
}

function* watcherAuth() {
  yield takeLatest(typesAuth.AUTH_TOKEN, auth);
  yield takeLatest(typesAuth.AUTH_LOGIN, login);
  yield takeLatest(typesAuth.AUTH_LOGOUT, logout);
}

export default watcherAuth;

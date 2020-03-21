import { takeLatest, call, put } from 'redux-saga/effects';

import { typesAuth } from '../ducks/auth';

import { create, list } from '../../service/axios';

function* auth({ payload: { username, password } }) {
  try {
    const response = yield call(create, '/auth', {
      username: username.toLowerCase(),
      password: password.toLowerCase(),
    });

    yield put({ type: typesAuth.AUTH_TOKEN_SUCCESS, payload: response.token });
    yield put({ type: typesAuth.AUTH_LOGIN, payload: response.token });
  } catch (error) {
    yield put({
      type: typesAuth.AUTH_TOKEN_ERROR,
      payload:
        'Não foi possível acessar a plataforma, por favor verifique seus dados',
    });
  }
}

function* login({ payload }) {
  try {
    const response = yield call(list, '/me', {
      headers: {
        authorization: `Bearer ${payload}`,
      },
      params: {
        include: 'file',
      },
    });

    yield put({
      type: typesAuth.AUTH_LOGIN_SUCCESS,
      payload: response,
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

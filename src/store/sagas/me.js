import { takeLatest, put, select } from 'redux-saga/effects';

import { typesMe } from '../ducks/me';
import { typesAuth } from '../ducks/auth';

import { update } from '../../service/axios';

function* updateMe({ payload }) {
  const id = yield select((state) => state.me.user.id);

  try {
    const response = yield update(`/authors/${id}`, payload, {
      params: {
        include: 'file',
      },
    });

    yield put({ type: typesMe.ME_UPDATE_SUCCESS, payload: response });
    yield;
  } catch (error) {
    yield put({ type: typesMe.ME_UPDATE_ERROR });
  }
}

function* dataMe(action) {
  const { type, payload } = action;

  yield put({
    type: typesMe.ME_DATA_SUCCESS,
    payload,
  });
}

function* watcherMe() {
  yield takeLatest(typesMe.ME_UPDATE, updateMe);
  yield takeLatest(typesAuth.AUTH_LOGIN_SUCCESS, dataMe);
}

export default watcherMe;

import { takeLatest, put, select } from 'redux-saga/effects';

import { typesMe } from '../ducks/me';

import { update } from '../../service/axios';

function* updateMe({ payload }) {
  const id = yield select((state) => state.auth.user.id);

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

function* watcherMe() {
  yield takeLatest(typesMe.ME_UPDATE, updateMe);
}

export default watcherMe;

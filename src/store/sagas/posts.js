import {
  takeLatest, put, call, select,
} from 'redux-saga/effects';

import { create, list } from '../../service/axios';

import { typesPosts } from '../ducks/posts';

function* addPost({ payload }) {
  const author = yield select((state) => state.auth.user);
  try {
    const response = yield call(create, '/posts', {
      ...payload,
      authorId: author.id,
    });

    yield put({ type: typesPosts.POST_ADD_SUCCESS, payload: response });
  } catch (error) {
    yield put({ type: typesPosts.POST_ADD_ERROR });
  }
}

function* listPost() {
  try {
    const response = yield call(list, '/posts', {
      params: {
        include: 'author',
      },
    });
    yield put({ type: typesPosts.POST_LIST_SUCCESS, payload: response });
  } catch (error) {
    yield put({ type: typesPosts.POST_LIST_ERROR });
  }
}

function* watcherPosts() {
  yield takeLatest(typesPosts.POST_ADD, addPost);
  yield takeLatest(typesPosts.POST_LIST, listPost);
}

export default watcherPosts;

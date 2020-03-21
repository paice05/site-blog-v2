const initialState = {
  byId: {},
  allId: [],
};

export const typesPosts = {
  POST_ADD: '@posts/POST_ADD',
  POST_ADD_SUCCESS: '@posts/POST_ADD_SUCCESS',
  POST_ADD_ERROR: '@posts/POST_ADD_ERROR',

  POST_LIST: '@posts/POST_LIST',
  POST_LIST_SUCCESS: '@posts/POST_LIST_SUCCESS',
  POST_LIST_ERROR: '@posts/POST_LIST_ERROR',

  POST_DELETE: '@posts/POST_DELETE',
  POST_DELETE_SUCCESS: '@posts/POST_DELETE_SUCCESS',
  POST_DELETE_ERROR: '@posts/POST_DELETE_ERROR',
};

export const actionsPosts = {
  createPost: (data) => ({ type: typesPosts.POST_ADD, payload: data }),
  listPost: () => ({ type: typesPosts.POST_LIST }),
  deletePost: (id) => ({ type: typesPosts.POST_DELETE, payload: id }),
};

const reducersPostsById = (state = {}, action) => {
  switch (action.type) {
    // list post
    case typesPosts.POST_LIST_SUCCESS:
      return action.payload.reduce((acc, cur) => {
        acc[cur.id] = cur;
        return acc;
      }, {});
    // create post
    case typesPosts.POST_ADD_SUCCESS:
      return { ...state, [action.payload.id]: action.payload };
    // delete post
    case typesPosts.POST_DELETE_SUCCESS:
      delete state[action.payload];
      return state;
    default:
      return state;
  }
};

const reducersPostsAllId = (state = [], action) => {
  switch (action.type) {
    // list post
    case typesPosts.POST_LIST_SUCCESS:
      return action.payload.map((post) => post.id);
    // create post
    case typesPosts.POST_ADD_SUCCESS:
      return [...state, action.payload.id];
    // delete post
    case typesPosts.POST_DELETE_SUCCESS:
      return state.filter((postId) => postId !== action.payload);
    default:
      return state;
  }
};

export const reducersPosts = (state = initialState, action) => ({
  byId: reducersPostsById(state.byId, action),
  allId: reducersPostsAllId(state.allId, action),
});

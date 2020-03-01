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
};

export const actionsPosts = {
  addPost: (data) => ({ type: typesPosts.POST_ADD, payload: data }),
  listPost: () => ({ type: typesPosts.POST_LIST }),
};

export const reducersPosts = (state = initialState, action) => {
  switch (action.type) {
    case typesPosts.POST_LIST_SUCCESS:
      return {
        ...state,
        byId: action.payload.reduce((acc, cur) => {
          acc[cur.id] = cur;
          return acc;
        }, {}),
        allId: action.payload.map((item) => item.id),
      };
    default:
      return state;
  }
};

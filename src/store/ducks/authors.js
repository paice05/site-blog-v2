const initialState = {
  byId: {},
  allId: [],
};

export const typesAuthors = {
  AUTHORS_LIST: '@authors/AUTHORS_LIST',
  AUTHORS_LIST_SUCCESS: '@authors/AUTHORS_LIST_SUCCESS',
  AUTHORS_LIST_ERROR: '@authors/AUTHORS_LIST_ERROR',

  AUTHORS_CREATE: '@authors/AUTHORS_CREATE',
  AUTHORS_CREATE_SUCCESS: '@authors/AUTHORS_CREATE_SUCCESS',
  AUTHORS_CREATE_ERROR: '@authors/AUTHORS_CREATE_ERROR',
};

export const actionsAuthors = {
  listAuthors: () => ({ type: typesAuthors.AUTHORS_LIST }),
  createAuthors: (data) => ({ type: typesAuthors.AUTHORS_CREATE, payload: data }),
};

export const reducerAuthors = (state = initialState, action) => {
  switch (action.type) {
    case typesAuthors.AUTHORS_LIST_SUCCESS:
      return {
        ...state,
        byId: action.payload.reduce((acc, cur) => {
          acc[cur.id] = cur;
          return acc;
        }, {}),
        allId: action.payload.map((author) => author.id),
      };
    default:
      return initialState;
  }
};

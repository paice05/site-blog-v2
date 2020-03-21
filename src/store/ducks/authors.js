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

  AUTHORS_DELETE: '@authors/AUTHORS_DELETE',
  AUTHORS_DELETE_SUCCESS: '@authors/AUTHORS_DELETE_SUCCESS',
  AUTHORS_DELETE_ERROR: '@authors/AUTHORS_DELETE_ERROR',
};

export const actionsAuthors = {
  listAuthors: () => ({ type: typesAuthors.AUTHORS_LIST }),
  createAuthors: (data) => ({ type: typesAuthors.AUTHORS_CREATE, payload: data }),
  deleteAuthors: (id) => ({ type: typesAuthors.AUTHORS_DELETE, payload: id }),
};

const reducerAuthorsById = (state = {}, action = {}) => {
  switch (action.type) {
    // list author
    case typesAuthors.AUTHORS_LIST_SUCCESS:
      return action.payload.reduce((acc, cur) => {
        acc[cur.id] = cur;
        return acc;
      }, {});
    // create author
    case typesAuthors.AUTHORS_CREATE_SUCCESS:
      return { ...state, [action.payload.id]: action.payload };
    // delete author
    case typesAuthors.AUTHORS_DELETE_SUCCESS:
      delete state[action.payload];
      return state;
    default:
      return state;
  }
};

const reducerAuthorsAllId = (state = [], action = {}) => {
  switch (action.type) {
    // list author
    case typesAuthors.AUTHORS_LIST_SUCCESS:
      return action.payload.map((author) => author.id);
    // create author
    case typesAuthors.AUTHORS_CREATE_SUCCESS:
      return [...state, action.payload.id];
    // delete author
    case typesAuthors.AUTHORS_DELETE_SUCCESS:
      return state.filter((authorId) => authorId !== action.payload);
    default:
      return state;
  }
};

export const reducerAuthors = (state = initialState, action) => ({
  byId: reducerAuthorsById(state.byId, action),
  allId: reducerAuthorsAllId(state.allId, action),
});

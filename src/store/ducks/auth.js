const initialState = {
  token: '',
  user: {},
  status: {
    type: '',
    message: '',
  },
};

export const typesAuth = {
  AUTH_TOKEN: '@auth/AUTH_TOKEN',
  AUTH_TOKEN_SUCCESS: '@auth/AUTH_TOKEN_SUCCESS',
  AUTH_TOKEN_ERROR: '@auth/AUTH_TOKEN_ERROR',

  AUTH_LOGIN: '@auth/AUTH_LOGIN',
  AUTH_LOGIN_SUCCESS: '@auth/AUTH_LOGIN_SUCCESS',
  AUTH_LOGIN_ERROR: '@auth/AUTH_LOGIN_ERROR',

  AUTH_LOGOUT: '@auth/AUTH_LOGOUT',
  AUTH_LOGOUT_SUCCESS: '@auth/AUTH_LOGOUT_SUCCESS',
  AUTH_LOGOUT_ERROR: '@auth/AUTH_LOGOUT_ERROR',
};

export const actionsAuth = {
  auth: (username, password) => ({ type: typesAuth.AUTH_TOKEN, payload: { username, password } }),
  login: (token) => ({ type: typesAuth.AUTH_LOGIN, payload: { token } }),
  logout: () => ({ type: typesAuth.AUTH_LOGOUT }),
};

const reducerAuthToken = (state, action) => {
  switch (action.type) {
    case typesAuth.AUTH_LOGIN_SUCCESS:
      return action.payload.token;
    case typesAuth.AUTH_LOGOUT_SUCCESS:
      return '';
    default:
      return state;
  }
};
const reducerAuthUser = (state, action) => {
  switch (action.type) {
    case typesAuth.AUTH_LOGIN_SUCCESS:
      return action.payload.user;
    case typesAuth.AUTH_LOGOUT_SUCCESS:
      return {};
    default:
      return state;
  }
};
const reducerAuthStatus = (state, action) => {
  switch (action.type) {
    case typesAuth.AUTH_LOGIN_SUCCESS:
      return {
        type: typesAuth.AUTH_LOGIN_SUCCESS,
        message: '',
      };
    case typesAuth.AUTH_LOGOUT_SUCCESS:
      return {
        type: '',
        message: '',
      };
    default:
      return state;
  }
};

export const reducersAuth = (state = initialState, action) => ({
  token: reducerAuthToken(state.token, action),
  user: reducerAuthUser(state.user, action),
  status: reducerAuthStatus(state.status, action),
});

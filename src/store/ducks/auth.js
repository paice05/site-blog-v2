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

export const reducersAuth = (state = initialState, action) => {
  switch (action.type) {
    case typesAuth.AUTH_LOGIN_SUCCESS:
      return {
        ...state,
        token: action.payload.token,
        user: action.payload.user,
        status: {
          type: typesAuth.AUTH_TOKEN_SUCCESS,
          message: '',
        },
      };
    case typesAuth.AUTH_TOKEN_ERROR:
      return {
        ...state,
        status: {
          type: typesAuth.AUTH_TOKEN_ERROR,
          message: action.payload,
        },
      };
    case typesAuth.AUTH_LOGOUT_SUCCESS:
      return initialState;
    default:
      return state;
  }
};

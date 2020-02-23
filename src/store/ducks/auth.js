const initialState = {
  token: '',
  user: {},
};

export const typesAuth = {
  AUTH_TOKEN: '@auth/AUTH_TOKEN',
  AUTH_TOKEN_SUCCESS: '@auth/AUTH_TOKEN_SUCCESS',
  AUTH_TOKEN_ERROR: '@auth/AUTH_TOKEN_ERROR',

  AUTH_LOGIN: '@auth/AUTH_LOGIN',
  AUTH_LOGIN_SUCCESS: '@auth/AUTH_LOGIN_SUCCESS',
  AUTH_LOGIN_ERROR: '@auth/AUTH_LOGIN_ERROR',
};

export const actionsAuth = {
  auth: (username, password) => ({ type: typesAuth.AUTH_TOKEN, payload: { username, password } }),

  login: (token) => ({ type: typesAuth.AUTH_LOGIN, payload: { token } }),
};

export const reducersAuth = (state = initialState, action) => {
  switch (action.type) {
    case typesAuth.AUTH_LOGIN_SUCCESS:
      return {
        ...state,
        token: action.payload.token,
        user: action.payload.user,
      };
    default:
      return state;
  }
};

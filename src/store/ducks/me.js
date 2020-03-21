const initialState = {
  user: {},
};

export const typesMe = {
  ME_DATA: '@me/ME_DATA',
  ME_DATA_SUCCESS: '@me/ME_DATA_SUCCESS',
  ME_DATA_ERROR: '@me/ME_DATA_ERROR',

  ME_UPDATE: '@me/ME_UPDATE',
  ME_UPDATE_SUCCESS: '@me/ME_UPDATE_SUCCESS',
  ME_UPDATE_ERROR: '@me/ME_UPDATE_ERROR',

  ME_AVATAR: '@me/ME_AVATAR',
  ME_AVATAR_SUCCESS: '@me/ME_AVATAR_SUCCESS',
  ME_AVATAR_ERROR: '@me/ME_AVATAR_ERROR',
};

export const actionsMe = {
  update: (data) => ({ type: typesMe.ME_UPDATE, payload: data }),
  avatar: (data) => ({ type: typesMe.ME_AVATAR, payload: data }),
};

const reducersMeUser = (state = {}, action) => {
  switch (action.type) {
    // data user
    case typesMe.ME_DATA_SUCCESS:
      return action.payload;
    // update user
    case typesMe.ME_UPDATE_SUCCESS:
      return action.payload;
    default:
      return state;
  }
};

export const reducersMe = (state = initialState, action) => ({
  user: reducersMeUser(state.user, action),
});

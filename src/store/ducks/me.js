const initialState = {};

export const typesMe = {
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

export const reducersMe = (state = initialState, action) => {
  switch (action.type) {
    default:
      return initialState;
  }
};

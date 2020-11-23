export const initialState = false;

export const CHANGE_CONFIG = 'CHANGE_CONFIG';

export const changeConfigAction = (update) => ({
  type: CHANGE_CONFIG,
  payload: update,
});

const reducer = (state = initialState, action) => {
  // 리듀서
  switch (action.type) {
    case CHANGE_CONFIG:
      return action.payload;
    default:
      return state;
  }
};

export default reducer;

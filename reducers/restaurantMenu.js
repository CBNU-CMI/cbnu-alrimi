export const initialState = []

export const MENU_DATA = 'MENU_DATA'

export const placeChangeAction = (index) => ({
  type: MENU_DATA,
  data: index,
})

const reducer = (state = initialState, action) => {
  // 리듀서
  switch (action.type) {
    case MENU_DATA:
      return action.data
    default:
      return state
  }
}

export default reducer

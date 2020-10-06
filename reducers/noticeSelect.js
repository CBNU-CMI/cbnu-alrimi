export const initialState = '전공'

export const SELECT_TYPE = 'SELECT_TYPE'

export const selectTypeAction = (selected) => ({
  type: SELECT_TYPE,
  selected,
})

const reducer = (state = initialState, action) => {
  // 리듀서
  switch (action.type) {
    case SELECT_TYPE:
      return action.selected
    default:
      return state
  }
}

export default reducer

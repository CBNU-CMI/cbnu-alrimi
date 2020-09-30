export const initialState = new Date()

export const DATE_PLUS = 'DATE_PLUS'
export const DATE_MINUS = 'DATE_MINUS'

export const datePlusAction = () => ({
  type: DATE_PLUS,
})

export const dateMinusAction = () => ({
  type: DATE_MINUS,
})

const reducer = (state = initialState, action) => {
  // 리듀서
  switch (action.type) {
    case DATE_PLUS:
      return new Date(state.setDate(state.getDate() + 1))
    case DATE_MINUS:
      return new Date(state.setDate(state.getDate() - 1))
    default:
      return state
  }
}

export default reducer

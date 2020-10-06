export const initialState = new Date()

export const MONTH_PLUS = 'MONTH_PLUS'
export const MONTH_MINUS = 'MONTH_MINUS'

export const monthPlusAction = () => ({
  type: MONTH_PLUS,
})

export const monthMinusAction = () => ({
  type: MONTH_MINUS,
})

const reducer = (state = initialState, action) => {
  // 리듀서
  switch (action.type) {
    case MONTH_PLUS:
      return new Date(state.setMonth(state.getMonth() + 1))
    case MONTH_MINUS:
      return new Date(state.setMonth(state.getMonth() - 1))
    default:
      return state
  }
}

export default reducer

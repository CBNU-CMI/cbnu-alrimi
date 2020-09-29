export const initialState = 0

export const PLACE_INDEX = 'PLACE_INDEX'

export const placeChangeAction = (index) => ({
  type: PLACE_INDEX,
  place: index,
})

const reducer = (state = initialState, action) => {
  // 리듀서
  switch (action.type) {
    case PLACE_INDEX:
      return action.place
    default:
      return state
  }
}

export default reducer

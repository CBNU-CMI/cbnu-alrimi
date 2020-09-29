import { combineReducers } from 'redux' // 여러 리듀서들을 하나로 합쳐준다.
import restaurantDate from './restaurantDate'

const rootReducer = combineReducers({
  restaurantDate,
})

export default rootReducer // _app.js에서 reducer로 사용된다!

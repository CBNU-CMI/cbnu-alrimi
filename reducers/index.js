import { combineReducers } from 'redux'; // 여러 리듀서들을 하나로 합쳐준다.
import noticeSelect from './noticeSelect';
import restaurantDate from './restaurantDate';
import restaurantMenu from './restaurantMenu';
import restaurantPlace from './restaurantPlace';
import scheduleMonth from './scheduleMonth';
import changeConfig from './changeConfig';

const rootReducer = combineReducers({
  noticeSelect,
  restaurantDate,
  restaurantMenu,
  restaurantPlace,
  scheduleMonth,
  changeConfig,
});

export default rootReducer; // _app.js에서 reducer로 사용된다!

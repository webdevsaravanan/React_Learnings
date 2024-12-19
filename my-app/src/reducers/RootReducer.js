import LoginReducer from './LoginReducer';
import CounterReducer2 from './CounterReducer2';
import CounterReducer from './CounterReducer';
import { combineReducers } from 'redux';
const rootReducer = combineReducers({
  CounterReducer2,
  LoginReducer,
  CounterReducer
})
export default rootReducer;

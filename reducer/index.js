import {combineReducers} from 'redux';
import authCheckReducer from './phoneNumberCheckReducer'
const RootReducer = combineReducers({
  authCheckReducer,
});
export default RootReducer;

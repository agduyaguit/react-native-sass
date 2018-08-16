import { combineReducers } from 'redux';
import userReducer from './userData';

export default combineReducers({
	userData: userReducer
});

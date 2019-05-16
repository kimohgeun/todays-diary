import { combineReducers } from 'redux';
import auth from './auth';
import diary from './diary';

export default combineReducers({
	auth,
	diary,
});

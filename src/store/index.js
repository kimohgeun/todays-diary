import { combineReducers } from 'redux';
import auth from './auth';
import diary from './diary';
import toggle from './toggle';
import loading from './loading';

export default combineReducers({
	auth,
	diary,
	toggle,
	loading,
});

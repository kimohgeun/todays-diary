import firebase from '../config/firebase';

const GOOGLE_LOGIN = 'GOOGLE_LOGIN';
const FACEBOOK_LOGIN = 'FACEBOOK_LOGIN';
const GET_AUTH_SUCCESS = 'GET_AUTH_SUCCESS';
const GET_AUTH_FAIL = 'GET_AUTH_FAIL';
const LOGOUT = 'LOGOUT';

export const googleLogin = () => dispatch => {
	const provider = new firebase.auth.GoogleAuthProvider();
	firebase
		.auth()
		.signInWithPopup(provider)
		.then(res => {
			dispatch({
				type: GOOGLE_LOGIN,
				payload: res.user,
			});
		})
		.catch(err => {
			throw err;
		});
};

export const facebookLogin = () => dispatch => {
	const provider = new firebase.auth.FacebookAuthProvider();
	firebase
		.auth()
		.signInWithPopup(provider)
		.then(res => {
			dispatch({
				type: FACEBOOK_LOGIN,
				payload: res.user,
			});
		})
		.catch(err => {
			throw err;
		});
};

export const getAuth = () => dispatch => {
	firebase.auth().onAuthStateChanged(user => {
		if (user) {
			dispatch({
				type: GET_AUTH_SUCCESS,
				payload: user,
			});
		} else {
			dispatch({
				type: GET_AUTH_FAIL,
			});
		}
	});
};

export const logout = () => dispatch => {
	firebase
		.auth()
		.signOut()
		.then(() => {
			dispatch({
				type: LOGOUT,
			});
		});
};

const initialState = {
	loading: true,
	isAuthenticated: false,
	user: null,
};

export const authReducer = (state = initialState, action) => {
	switch (action.type) {
		case GOOGLE_LOGIN:
		case FACEBOOK_LOGIN:
		case GET_AUTH_SUCCESS:
			return {
				...state,
				loading: false,
				isAuthenticated: true,
				user: action.payload,
			};
		case GET_AUTH_FAIL:
		case LOGOUT:
			return {
				...state,
				user: null,
				isAuthenticated: false,
				loading: false,
			};
		default:
			return state;
	}
};

export default authReducer;
